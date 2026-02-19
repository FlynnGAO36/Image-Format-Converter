import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata = {
  title: 'Convert JPG to PNG Online Free - ImageConvertLab',
  description: 'Convert JPG images to PNG format for free. Add transparency, maintain quality, and process locally in your browser. No uploads required.',
};

export default function JPGtoPNGPage() {
  const faqs = [
    {
      question: 'Is it free to convert JPG to PNG?',
      answer: 'Yes, absolutely free with no limitations. Convert as many images as you need without any registration or payment.'
    },
    {
      question: 'Do I need to install software?',
      answer: 'No installation needed. Our converter works directly in your browser using modern web technologies (Chrome, Firefox, Safari, Edge).'
    },
    {
      question: 'Are my files uploaded to your server?',
      answer: 'No. All conversions happen locally on your device. Your images never leave your browser, ensuring complete privacy.'
    },
    {
      question: 'Can I convert multiple JPG files at once?',
      answer: 'Yes! Our batch processing feature lets you convert up to 50 JPG images to PNG simultaneously.'
    },
    {
      question: 'Will the image quality be affected?',
      answer: 'PNG uses lossless compression, so your images will maintain their original quality. The conversion is perfect and preserves all details.'
    }
  ];

  const technicalSpecs = [
    {
      feature: 'Compression',
      inputFormat: 'Lossy',
      outputFormat: 'Lossless'
    },
    {
      feature: 'Transparency',
      inputFormat: 'No',
      outputFormat: 'Yes (Alpha Channel)'
    },
    {
      feature: 'Best For',
      inputFormat: 'Photos & Gradients',
      outputFormat: 'Graphics & Logos'
    },
    {
      feature: 'File Size',
      inputFormat: 'Smaller',
      outputFormat: 'Larger'
    },
    {
      feature: 'Browser Support',
      inputFormat: 'Universal',
      outputFormat: 'Universal'
    }
  ];

  const howToSteps = [
    'Click the "Select Images" button or drag and drop your JPG files into the upload area.',
    'Wait for the files to load (they stay on your device - no upload happens).',
    'Click the "Convert Images" button to start the conversion process.',
    'Download your converted PNG files individually or as a ZIP archive.'
  ];

  const whyConvert = `Converting JPG to PNG is essential when you need transparency support or want to preserve image quality without compression artifacts. 
    PNG format uses lossless compression, which means every pixel is saved exactly as it appears, making it perfect for logos, graphics with text, screenshots, 
    and images that require a transparent background. While PNG files are typically larger than JPG, they maintain superior quality for web graphics, 
    icons, and images that will be edited multiple times. Our converter processes everything locally in your browser, ensuring your files remain private 
    and secure throughout the conversion process.`;

  const relatedTools = [
    { name: 'PNG to JPG', href: '/png-to-jpg' },
    { name: 'WebP to JPG', href: '/webp-to-jpg' },
    { name: 'Compress Image', href: '/compress-image' }
  ];

  return (
    <ToolPageLayout
      title="Convert JPG to PNG for Free"
      subtitle="The fastest online converter. High quality, no file limits, and 100% secure."
      inputFormat="JPG"
      outputFormat="PNG"
      conversionType="format"
      targetMimeType="image/png"
      faqs={faqs}
      technicalSpecs={technicalSpecs}
      howToSteps={howToSteps}
      whyConvert={whyConvert}
      relatedTools={relatedTools}
    />
  );
}
