import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/mdxUtils';

export const metadata = {
  title: 'Image Optimization Blog - Tutorials & Guides | ImageConvertLab',
  description: 'Learn about image formats, optimization techniques, and web performance. Free tutorials on JPG, PNG, WebP, and image compression.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  // Group posts by category for display
  const postsByCategory: { [key: string]: typeof allPosts } = {};
  allPosts.forEach(post => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Image Optimization Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Learn everything about image formats, conversion, compression, and web performance optimization.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
              All Articles ({allPosts.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {allPosts.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                Featured Article
              </span>
            </div>
            <Link
              href={`/blog/${allPosts[0].slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center p-12">
                  <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                      {allPosts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(allPosts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {allPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {allPosts[0].description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    <span>Read Full Article</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h3>
              <p className="text-gray-600">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Convert Your Images?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Try our free, privacy-focused image conversion tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/jpg-to-png"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              JPG to PNG
            </Link>
            <Link
              href="/png-to-jpg"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              PNG to JPG
            </Link>
            <Link
              href="/compress-image"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Compress Images
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
