import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata = {
  title: 'Convert PNG to JPG Online Free - ImageConvertLab',
  description: 'Convert PNG images to JPG format for free. Reduce file size while maintaining quality. Process locally in your browser.',
};

export default function PNGtoJPGPage() {
  const faqs = [
    {
      question: 'Why convert PNG to JPG?',
      answer: 'JPG files are typically 50-75% smaller than PNG, making them ideal for web use, email attachments, and faster loading times.'
    },
    {
      question: 'Will I lose image quality?',
      answer: 'JPG uses lossy compression, so there will be a slight quality reduction. However, at 90-95% quality settings, the difference is barely noticeable to the human eye.'
    },
    {
      question: 'What happens to transparent backgrounds?',
      answer: 'JPG doesn\'t support transparency. Transparent areas in your PNG will be converted to white (or you can choose another background color).'
    },
    {
      question: 'Is this converter really free?',
      answer: 'Yes, completely free with unlimited conversions. No hidden fees, no watermarks, no registration required.'
    }
  ];

  const technicalSpecs = [
    {
      feature: 'Compression',
      inputFormat: 'Lossless',
      outputFormat: 'Lossy'
    },
    {
      feature: 'Transparency',
      inputFormat: 'Yes (Alpha)',
      outputFormat: 'No'
    },
    {
      feature: 'Best For',
      inputFormat: 'Graphics & Logos',
      outputFormat: 'Photos'
    },
    {
      feature: 'File Size',
      inputFormat: 'Larger',
      outputFormat: 'Smaller'
    },
    {
      feature: 'Quality',
      inputFormat: 'Perfect',
      outputFormat: 'High (adjustable)'
    }
  ];

  const howToSteps = [
    'Select your PNG images by clicking the upload button or dragging files into the drop zone.',
    'Preview your selected files in the list below.',
    'Click "Convert Images" to transform PNG to JPG instantly.',
    'Download your optimized JPG files - they\'re typically 50-70% smaller!'
  ];

  const whyConvert = `Converting PNG to JPG is one of the most common image optimizations for web performance. 
    JPG format uses lossy compression that significantly reduces file size while maintaining acceptable visual quality, 
    making it perfect for photographs and complex images on websites. This conversion is essential when you need to 
    reduce page load times, meet email attachment size limits, or optimize images for social media platforms. 
    While PNG excels at preserving quality and transparency, JPG is the go-to format for photos where transparency 
    isn't needed and file size matters. Our converter uses intelligent compression algorithms to find the optimal 
    balance between quality and file size.`;

  const relatedTools = [
    { name: 'JPG to PNG', href: '/jpg-to-png' },
    { name: 'Compress Image', href: '/compress-image' },
    { name: 'WebP to JPG', href: '/webp-to-jpg' }
  ];

  return (
    <ToolPageLayout
      title="Convert PNG to JPG for Free"
      subtitle="Reduce file size by up to 70% while maintaining great quality."
      inputFormat="PNG"
      outputFormat="JPG"
      conversionType="format"
      targetMimeType="image/jpeg"
      faqs={faqs}
      technicalSpecs={technicalSpecs}
      howToSteps={howToSteps}
      whyConvert={whyConvert}
      relatedTools={relatedTools}
    />
  );
}
