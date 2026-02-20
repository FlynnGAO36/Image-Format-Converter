import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | ImageConvertLab',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <svg
            className="w-32 h-32 mx-auto text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page may have been moved or doesn&apos;t exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Browse Blog
          </Link>
        </div>

        {/* Popular Tools */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Popular Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/jpg-to-png"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-left group"
            >
              <div className="text-2xl mb-2">🖼️</div>
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                JPG to PNG
              </h4>
              <p className="text-sm text-gray-600">Convert with transparency</p>
            </Link>
            <Link
              href="/png-to-jpg"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-left group"
            >
              <div className="text-2xl mb-2">📸</div>
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                PNG to JPG
              </h4>
              <p className="text-sm text-gray-600">Reduce file size</p>
            </Link>
            <Link
              href="/heic-to-jpg"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-left group"
            >
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                HEIC to JPG
              </h4>
              <p className="text-sm text-gray-600">iPhone compatibility</p>
            </Link>
            <Link
              href="/compress-image"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-left group"
            >
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                Compress Image
              </h4>
              <p className="text-sm text-gray-600">Optimize file size</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
