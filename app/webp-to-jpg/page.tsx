import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata = {
  title: 'Convert WebP to JPG Online Free - ImageConvertLab',
  description: 'Convert WebP images to JPG format for universal compatibility. Free, fast, and secure browser-based conversion.',
};

export default function WebPtoJPGPage() {
  const faqs = [
    {
      question: 'Why can\'t I open WebP files on my computer?',
      answer: 'WebP is a modern format that some older software doesn\'t support. Converting to JPG ensures your images work everywhere.'
    },
    {
      question: 'Is JPG better than WebP?',
      answer: 'WebP is technically superior (smaller size, better quality), but JPG has universal compatibility. Choose based on your needs.'
    },
    {
      question: 'Do you keep my images?',
      answer: 'No. All conversions happen in your browser. Your images never reach our servers, so they can\'t be stored or accessed by anyone.'
    },
    {
      question: 'Can I convert WebP to other formats?',
      answer: 'Currently we support WebP to JPG and WebP to PNG. These are the most commonly needed conversions for compatibility.'
    }
  ];

  const technicalSpecs = [
    {
      feature: 'Compression',
      inputFormat: 'Lossy/Lossless',
      outputFormat: 'Lossy'
    },
    {
      feature: 'File Size',
      inputFormat: 'Smaller (25-35%)',
      outputFormat: 'Larger'
    },
    {
      feature: 'Browser Support',
      inputFormat: '95%+ (Modern)',
      outputFormat: '100% (Universal)'
    },
    {
      feature: 'Best For',
      inputFormat: 'Web Performance',
      outputFormat: 'Compatibility'
    },
    {
      feature: 'Quality',
      inputFormat: 'Excellent',
      outputFormat: 'Very Good'
    }
  ];

  const howToSteps = [
    'Upload your WebP images by clicking "Select Images" or dragging them into the upload area.',
    'The converter will load your files locally (no upload to server).',
    'Click "Convert Images" to instantly transform WebP to JPG format.',
    'Download your converted JPG files that work on any device or software.'
  ];

  const whyConvert = `WebP is Google's modern image format that offers superior compression, but it's not universally supported by all devices, 
    software, and platforms. Converting WebP to JPG ensures maximum compatibility - JPG works on every device, in every email client, 
    and with every image editing software. This is particularly important when sharing images with clients, posting to older platforms, 
    or working with software that hasn't adopted WebP support yet. While you'll lose some of WebP's compression advantages, 
    JPG's universal compatibility makes it the safer choice for broad distribution. Our converter maintains the highest possible quality 
    during the conversion process.`;

  const relatedTools = [
    { name: 'JPG to PNG', href: '/jpg-to-png' },
    { name: 'PNG to JPG', href: '/png-to-jpg' },
    { name: 'HEIC to JPG', href: '/heic-to-jpg' }
  ];

  return (
    <ToolPageLayout
      title="Convert WebP to JPG for Free"
      subtitle="Ensure universal compatibility by converting WebP images to JPG."
      inputFormat="WebP"
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
