import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ImageConvertLab',
  description: 'Learn how ImageConvertLab protects your privacy. All image processing happens locally in your browser.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: February 22, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔒 Your Privacy is Our Priority</h3>
              <p className="text-gray-700 text-sm mb-0">
                ImageConvertLab is designed with privacy at its core. All image conversions happen 
                directly in your browser - your files never leave your device or touch our servers.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Files You Upload</h3>
            <p className="text-gray-600 mb-4">
              <strong>We do NOT collect or store any images you upload.</strong> All image processing 
              happens entirely in your browser using client-side JavaScript. Your files never leave 
              your device.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Analytics Data</h3>
            <p className="text-gray-600 mb-6">
              We may collect anonymous usage data to improve our service, including:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Page views and navigation patterns</li>
              <li>Browser type and version</li>
              <li>Device type (mobile, desktop, tablet)</li>
              <li>Geographic location (country/city level only)</li>
              <li>Referring website</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This data is collected through standard web analytics tools and does not include any 
              personally identifiable information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the limited anonymous data we collect to:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Improve website performance and user experience</li>
              <li>Understand which features are most popular</li>
              <li>Fix technical issues and bugs</li>
              <li>Generate aggregate statistics about service usage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may use cookies for basic functionality and analytics. These cookies do not store 
              any personal information or uploaded images. You can disable cookies in your browser 
              settings, though this may affect some website functionality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our website may use third-party analytics services (such as Google Analytics) to help 
              us understand how visitors use our service. These services may collect information sent 
              by your browser, but they do NOT have access to any images you convert.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-6">
              Since all image processing happens in your browser, your files never leave your device. 
              This client-side approach is the most secure way to handle your images - there&apos;s no risk 
              of interception during upload/download because there is no upload/download.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our service is available to users of all ages. We do not knowingly collect personal 
              information from anyone, including children.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify users of any material 
              changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
