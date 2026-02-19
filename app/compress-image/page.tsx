import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata = {
  title: 'Compress Images Online Free - Reduce File Size | ImageConvertLab',
  description: 'Free image compression tool. Reduce JPG, PNG, and WebP file sizes by up to 80% while maintaining quality. Perfect for web optimization.',
};

export default function CompressImagePage() {
  const faqs = [
    {
      question: 'How much can I compress an image?',
      answer: 'Typically 50-80% file size reduction without noticeable quality loss. Results vary based on the original image and format.'
    },
    {
      question: 'Does compression reduce image quality?',
      answer: 'Yes, slightly. But we use smart compression algorithms that minimize quality loss while maximizing size reduction. Most users can\'t tell the difference.'
    },
    {
      question: 'What\'s the difference between compression and conversion?',
      answer: 'Compression reduces file size within the same format. Conversion changes the format (e.g., PNG to JPG). Both can reduce size.'
    },
    {
      question: 'Can I compress images for my website?',
      answer: 'Absolutely! This tool is perfect for optimizing images for web use. Smaller images mean faster page loads and better SEO.'
    },
    {
      question: 'Is there a file size limit?',
      answer: 'Since processing happens in your browser, the only limit is your device\'s memory. We recommend files under 50MB for best performance.'
    }
  ];

  const technicalSpecs = [
    {
      feature: 'Size Reduction',
      inputFormat: 'Original Size',
      outputFormat: '50-80% Smaller'
    },
    {
      feature: 'Quality Loss',
      inputFormat: '100%',
      outputFormat: 'Minimal (90-95%)'
    },
    {
      feature: 'Supported Formats',
      inputFormat: 'JPG, PNG, WebP',
      outputFormat: 'Same Format'
    },
    {
      feature: 'Best For',
      inputFormat: 'High-res photos',
      outputFormat: 'Web & mobile use'
    },
    {
      feature: 'Processing',
      inputFormat: 'Original file',
      outputFormat: 'Client-side only'
    }
  ];

  const howToSteps = [
    'Upload the images you want to compress (JPG, PNG, or WebP format).',
    'The compressor analyzes each image to find the optimal compression level.',
    'Click "Convert Images" to start the compression process.',
    'Download your compressed images - typically 50-70% smaller with minimal quality loss!'
  ];

  const whyConvert = `Image compression is essential for modern web development and digital communication. Large image files slow down websites, 
    consume unnecessary storage space, and take longer to load on mobile devices. By compressing images, you can dramatically improve website 
    performance, reduce bandwidth costs, and provide a better user experience - all while maintaining visual quality that's virtually 
    indistinguishable from the original. Google considers page speed a ranking factor, so optimized images directly impact SEO. 
    Our compression tool uses advanced algorithms to intelligently reduce file size by removing unnecessary metadata and applying 
    smart compression techniques. Whether you're optimizing for Core Web Vitals, meeting email attachment limits, or just trying to save 
    storage space, image compression is a must-have skill. Process everything locally for complete privacy.`;

  const relatedTools = [
    { name: 'PNG to JPG', href: '/png-to-jpg' },
    { name: 'WebP to JPG', href: '/webp-to-jpg' },
    { name: 'JPG to PNG', href: '/jpg-to-png' }
  ];

  return (
    <ToolPageLayout
      title="Compress Images for Free"
      subtitle="Reduce file size by up to 80% while maintaining excellent quality."
      inputFormat="JPG/PNG/WebP"
      outputFormat="Compressed"
      conversionType="compress"
      faqs={faqs}
      technicalSpecs={technicalSpecs}
      howToSteps={howToSteps}
      whyConvert={whyConvert}
      relatedTools={relatedTools}
    />
  );
}
