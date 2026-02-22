import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - ImageConvertLab',
  description: 'Learn more about ImageConvertLab, a free online image format converter focused on privacy and speed.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ImageConvertLab
          </h1>
          <p className="text-xl text-gray-600">
            Free, fast, and privacy-focused image conversion
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              ImageConvertLab was created to provide a simple, fast, and secure way to convert images 
              between different formats. We believe in privacy-first design - all image processing 
              happens directly in your browser, ensuring your files never leave your device.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why We Built This</h2>
            <p className="text-gray-600 mb-6">
              Many online image converters require uploads to external servers, raising privacy concerns 
              and slowing down the conversion process. We built ImageConvertLab to solve these problems 
              by leveraging modern browser technology for client-side image processing.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ <strong>100% Client-Side Processing</strong> - Your images never leave your browser</li>
              <li>✓ <strong>Lightning Fast</strong> - No upload/download delays</li>
              <li>✓ <strong>Completely Free</strong> - No registration, no hidden fees</li>
              <li>✓ <strong>Batch Conversion</strong> - Convert multiple images at once</li>
              <li>✓ <strong>Multiple Formats</strong> - Support for JPG, PNG, WebP, HEIC, and more</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Developer</h2>
            <p className="text-gray-600 mb-4">
              ImageConvertLab is developed and maintained by Entao Gao.
            </p>
            <p className="text-gray-600">
              Learn more about my work at{' '}
              <a 
                href="https://www.entaogao.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                www.entaogao.com
              </a>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to Convert?
          </h2>
          <p className="text-gray-600 mb-6">
            Start converting your images now - no signup required!
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
