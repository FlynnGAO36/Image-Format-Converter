import Link from 'next/link';

export default function Home() {
  const tools = [
    {
      name: 'JPG to PNG',
      href: '/jpg-to-png',
      icon: '🖼️',
      description: 'Convert JPG images to PNG format with transparency support'
    },
    {
      name: 'PNG to JPG',
      href: '/png-to-jpg',
      icon: '📸',
      description: 'Convert PNG to JPG for smaller file sizes'
    },
    {
      name: 'WebP to JPG',
      href: '/webp-to-jpg',
      icon: '🌐',
      description: 'Convert modern WebP images to universal JPG format'
    },
    {
      name: 'HEIC to JPG',
      href: '/heic-to-jpg',
      icon: '📱',
      description: 'Convert iPhone HEIC photos to JPG for compatibility'
    },
    {
      name: 'Compress Image',
      href: '/compress-image',
      icon: '⚡',
      description: 'Reduce image file size while maintaining quality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Image Format Converter
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convert images between JPG, PNG, WebP, and HEIC formats. 
            <span className="text-primary-600 font-semibold"> Fast, secure, and private</span> - 
            your files never leave your browser.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Conversion Tool
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-500"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 font-medium">
                  <span>Convert Now</span>
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose ImageConvertLab?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Side Processing</h3>
              <p className="text-gray-600">
                All conversions happen locally in your browser. Your images never touch our servers, ensuring complete privacy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                No uploads, no downloads, no waiting. Convert images instantly with browser-native technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Batch Processing</h3>
              <p className="text-gray-600">
                Convert multiple images at once. Save time with bulk conversion up to 50 files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Learn More About Image Formats
            </h2>
            <Link href="/blog" className="text-primary-600 font-medium hover:underline">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/ultimate-guide-image-file-formats" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Ultimate Guide to Image File Formats
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Learn about JPG, PNG, WebP, and AVIF - when to use each format and why.
              </p>
              <span className="text-primary-600 text-sm font-medium">Read More →</span>
            </Link>
            
            <Link href="/blog/jpg-vs-png-guide" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                JPG vs PNG: Which Should You Use?
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Understand the key differences and make the right choice for your images.
              </p>
              <span className="text-primary-600 text-sm font-medium">Read More →</span>
            </Link>
            
            <Link href="/blog/image-optimization-seo" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Image Optimization for SEO
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Speed up your website and improve rankings with optimized images.
              </p>
              <span className="text-primary-600 text-sm font-medium">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
