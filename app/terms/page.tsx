import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - ImageConvertLab',
  description: 'Terms of Service for using ImageConvertLab image conversion tools.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: February 22, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using ImageConvertLab ("the Service"), you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              ImageConvertLab provides free, browser-based image format conversion tools. All image 
              processing occurs locally in your browser - we do not store, collect, or have access to 
              your uploaded files.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              When using our service, you agree to:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Only convert images that you have the legal right to use and modify</li>
              <li>Not use the service for any illegal or unauthorized purpose</li>
              <li>Not attempt to interfere with or disrupt the service</li>
              <li>Not use automated tools to access the service in a way that sends more requests 
                  than a human could reasonably produce</li>
              <li>Comply with all applicable local, state, national, and international laws</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              You retain all ownership rights to images you convert using our service. The service's 
              code, design, and branding are owned by ImageConvertLab and are protected by copyright 
              and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6">
              The service is provided "as is" and "as available" without warranties of any kind, either 
              express or implied, including but not limited to warranties of merchantability, fitness 
              for a particular purpose, or non-infringement. We do not guarantee that the service will 
              be uninterrupted, timely, secure, or error-free.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, ImageConvertLab shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
              or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
              or other intangible losses resulting from:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Your use of or inability to use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify, suspend, or discontinue the service (or any part thereof) 
              at any time, with or without notice. We shall not be liable to you or any third party for 
              any modification, suspension, or discontinuance of the service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Browser Compatibility</h2>
            <p className="text-gray-600 mb-6">
              Our service works best with modern, up-to-date browsers. Some features may not work on 
              older browsers. We recommend using the latest version of Chrome, Firefox, Safari, or Edge 
              for the best experience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-gray-600 mb-6">
              Your use of the service is also governed by our Privacy Policy. Please review our 
              <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-medium"> Privacy Policy</a> to 
              understand how we handle your data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify users 
              of any material changes by posting the new terms on this page and updating the "Last Updated" 
              date. Your continued use of the service after such changes constitutes acceptance of the 
              new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with applicable laws, without 
              regard to conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-6">
              <a 
                href="mailto:legal@imageconvertlab.com" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                legal@imageconvertlab.com
              </a>
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
