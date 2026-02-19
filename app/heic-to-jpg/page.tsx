import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata = {
  title: 'Convert HEIC to JPG Online Free - ImageConvertLab',
  description: 'Convert iPhone HEIC photos to JPG format. Make your iOS photos compatible with Windows, Android, and all devices.',
};

export default function HEICtoJPGPage() {
  const faqs = [
    {
      question: 'What is HEIC format?',
      answer: 'HEIC (High Efficiency Image Container) is Apple\'s default photo format on iPhone and iPad. It saves space but has limited compatibility.'
    },
    {
      question: 'Why can\'t Windows open HEIC files?',
      answer: 'Windows doesn\'t natively support HEIC without installing additional codecs. Converting to JPG solves this compatibility issue instantly.'
    },
    {
      question: 'Will converting HEIC to JPG reduce quality?',
      answer: 'There will be minimal quality loss. HEIC and JPG both use lossy compression, so the visual difference is negligible for most users.'
    },
    {
      question: 'How do I stop my iPhone from taking HEIC photos?',
      answer: 'Go to Settings > Camera > Formats, then select "Most Compatible" instead of "High Efficiency". Or just convert existing HEIC files here!'
    },
    {
      question: 'Is this safe for private photos?',
      answer: 'Absolutely. All conversion happens locally in your browser. Your photos never leave your device, ensuring complete privacy.'
    }
  ];

  const technicalSpecs = [
    {
      feature: 'Compression',
      inputFormat: 'HEVC (H.265)',
      outputFormat: 'JPEG'
    },
    {
      feature: 'File Size',
      inputFormat: 'Smaller',
      outputFormat: 'Slightly Larger'
    },
    {
      feature: 'Platform Support',
      inputFormat: 'iOS/macOS Native',
      outputFormat: 'Universal'
    },
    {
      feature: 'Quality',
      inputFormat: 'Excellent',
      outputFormat: 'Very Good'
    },
    {
      feature: 'Best Use',
      inputFormat: 'iPhone Storage',
      outputFormat: 'Sharing & Compatibility'
    }
  ];

  const howToSteps = [
    'Select your HEIC photos from iPhone/iPad (or drag them from your computer).',
    'The converter loads files locally - no upload needed.',
    'Click "Convert Images" to transform HEIC to universal JPG format.',
    'Download your converted JPG photos that work on Windows, Android, and everywhere!'
  ];

  const whyConvert = `Apple's HEIC format is efficient for iPhone storage but creates compatibility nightmares when sharing photos with Windows users, 
    Android devices, or older software. Converting HEIC to JPG is the simplest solution to ensure your photos can be viewed by anyone, 
    on any device, without requiring special codecs or apps. This is especially important for sharing photos with clients, 
    posting to social media from desktop computers, or sending pictures via email to recipients who may not have HEIC support. 
    JPG has been the universal standard for decades, ensuring your memories are accessible regardless of platform or software. 
    Our converter processes your photos entirely in your browser, so sensitive or private images never leave your device.`;

  const relatedTools = [
    { name: 'WebP to JPG', href: '/webp-to-jpg' },
    { name: 'PNG to JPG', href: '/png-to-jpg' },
    { name: 'Compress Image', href: '/compress-image' }
  ];

  return (
    <ToolPageLayout
      title="Convert HEIC to JPG for Free"
      subtitle="Make your iPhone photos compatible with Windows, Android, and all devices."
      inputFormat="HEIC"
      outputFormat="JPG"
      conversionType="heic"
      faqs={faqs}
      technicalSpecs={technicalSpecs}
      howToSteps={howToSteps}
      whyConvert={whyConvert}
      relatedTools={relatedTools}
    />
  );
}
