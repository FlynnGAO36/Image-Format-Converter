// Image Conversion Engine - Client-side processing
import imageCompression from 'browser-image-compression';

export type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface ConversionOptions {
  quality?: number;
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
}

export interface ConversionResult {
  file: File;
  originalSize: number;
  convertedSize: number;
  reductionPercentage: number;
}

/**
 * Convert image to specified format using Canvas API
 */
export async function convertImageFormat(
  file: File,
  targetFormat: ImageFormat,
  options: ConversionOptions = {}
): Promise<ConversionResult> {
  const { quality = 0.92 } = options;
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        
        // Draw image to canvas
        ctx.drawImage(img, 0, 0);
        
        // Convert to blob in target format
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to convert image'));
              return;
            }
            
            const extension = targetFormat.split('/')[1];
            const convertedFile = new File(
              [blob],
              file.name.replace(/\.[^.]+$/, `.${extension}`),
              { type: targetFormat }
            );
            
            const originalSize = file.size;
            const convertedSize = convertedFile.size;
            const reductionPercentage = ((originalSize - convertedSize) / originalSize) * 100;
            
            resolve({
              file: convertedFile,
              originalSize,
              convertedSize,
              reductionPercentage: Math.max(0, reductionPercentage)
            });
          },
          targetFormat,
          quality
        );
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Compress image while maintaining format
 */
export async function compressImage(
  file: File,
  options: ConversionOptions = {}
): Promise<ConversionResult> {
  const {
    quality = 0.8,
    maxSizeMB = 1,
    maxWidthOrHeight = 1920,
    useWebWorker = true
  } = options;
  
  try {
    const compressedFile = await imageCompression(file, {
      maxSizeMB,
      maxWidthOrHeight,
      useWebWorker,
      initialQuality: quality
    });
    
    const originalSize = file.size;
    const convertedSize = compressedFile.size;
    const reductionPercentage = ((originalSize - convertedSize) / originalSize) * 100;
    
    return {
      file: compressedFile,
      originalSize,
      convertedSize,
      reductionPercentage: Math.max(0, reductionPercentage)
    };
  } catch (error) {
    throw new Error(`Compression failed: ${error}`);
  }
}

/**
 * Convert HEIC to JPG
 */
export async function convertHEICtoJPG(file: File): Promise<ConversionResult> {
  try {
    // Dynamic import to reduce bundle size
    const heic2any = (await import('heic2any')).default;
    
    const convertedBlob = await heic2any({
      blob: file,
      toType: 'image/jpeg',
      quality: 0.92
    }) as Blob;
    
    const convertedFile = new File(
      [convertedBlob],
      file.name.replace(/\.heic$/i, '.jpg'),
      { type: 'image/jpeg' }
    );
    
    const originalSize = file.size;
    const convertedSize = convertedFile.size;
    const reductionPercentage = ((originalSize - convertedSize) / originalSize) * 100;
    
    return {
      file: convertedFile,
      originalSize,
      convertedSize,
      reductionPercentage: Math.max(0, reductionPercentage)
    };
  } catch (error) {
    throw new Error(`HEIC conversion failed: ${error}`);
  }
}

/**
 * Batch convert multiple images
 */
export async function batchConvert(
  files: File[],
  targetFormat: ImageFormat,
  options: ConversionOptions = {}
): Promise<ConversionResult[]> {
  const promises = files.map(file => convertImageFormat(file, targetFormat, options));
  return Promise.all(promises);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Download file to user's computer
 */
export function downloadFile(file: File): void {
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download multiple files as ZIP (requires JSZip)
 */
export async function downloadAsZip(files: File[], zipName: string = 'converted-images.zip'): Promise<void> {
  try {
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();
    
    files.forEach(file => {
      zip.file(file.name, file);
    });
    
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to create ZIP:', error);
    // Fallback: download files individually
    files.forEach(file => downloadFile(file));
  }
}
