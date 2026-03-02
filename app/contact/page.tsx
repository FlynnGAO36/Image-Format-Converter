import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - ImageConvertLab',
  description: 'Get in touch with ImageConvertLab for questions, feedback, or support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions, feedback, or need help with ImageConvertLab? We're here to help!
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
            <p className="text-gray-600 mb-6">
              For general inquiries, technical support, or feedback, please email us at:
            </p>
            <p className="mb-6">
              <a 
                href="mailto:support@imageconvertlab.com" 
                className="text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                support@imageconvertlab.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Inquiries</h3>
            <p className="text-gray-600 mb-6">
              For partnerships, collaborations, or business-related questions:
            </p>
            <p className="mb-6">
              <a 
                href="mailto:business@imageconvertlab.com" 
                className="text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                business@imageconvertlab.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer</h3>
            <p className="text-gray-600 mb-4">
              ImageConvertLab is developed by Entao Gao. Visit my personal website for more projects:
            </p>
            <p className="mb-8">
              <a 
                href="https://www.entaogao.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                www.entaogao.com
              </a>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Response Time</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24-48 years during business days.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-primary-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to Convert Images?
          </h2>
          <p className="text-gray-600 mb-6">
            No need to wait - start converting now!
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Try Our Tools
          </a>
        </div>
      </div>
    </div>
  );
}
