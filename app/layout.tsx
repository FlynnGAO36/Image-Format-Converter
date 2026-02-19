import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImageConvertLab - Free Online Image Format Converter',
  description: 'Convert images between JPG, PNG, WebP, and HEIC formats. Fast, secure, and completely free. Your files never leave your browser.',
  keywords: 'image converter, jpg to png, png to jpg, webp converter, heic to jpg, image compression',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    ImageConvertLab
                  </span>
                </Link>
                
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                  <Link
                    href="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary-600"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary-600"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary-600"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-bold mb-4">ImageConvertLab</h3>
                <p className="text-gray-400 text-sm">
                  Free online image format converter. Privacy-first, lightning-fast.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/jpg-to-png" className="text-gray-400 hover:text-white">JPG to PNG</Link></li>
                  <li><Link href="/png-to-jpg" className="text-gray-400 hover:text-white">PNG to JPG</Link></li>
                  <li><Link href="/webp-to-jpg" className="text-gray-400 hover:text-white">WebP to JPG</Link></li>
                  <li><Link href="/heic-to-jpg" className="text-gray-400 hover:text-white">HEIC to JPG</Link></li>
                  <li><Link href="/compress-image" className="text-gray-400 hover:text-white">Compress Image</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} ImageConvertLab. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
