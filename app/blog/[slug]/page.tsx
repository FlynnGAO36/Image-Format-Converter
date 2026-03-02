import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, getAllPosts } from '@/lib/mdxUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ShareButtons from '@/components/ShareButtons';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, 'pillar') || getPostBySlug(params.slug, 'blog');
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | ImageConvertLab`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Try to find post in both directories
  const post = getPostBySlug(params.slug, 'pillar') || getPostBySlug(params.slug, 'blog');

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-900 font-medium truncate">{post.title}</li>
            </ol>
          </nav>

          {/* Category & Date */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-gray-600 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-gray-600 text-sm">•</span>
            <span className="text-gray-600 text-sm">By {post.author}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Social Share Buttons */}
          <ShareButtons title={post.title} />
        </div>
      </article>

      {/* Article Content */}
      <article className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                a: ({node, ...props}) => <a className="text-primary-600 hover:text-primary-700 underline" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 text-gray-700 italic" {...props} />
                ),
                code: ({node, inline, ...props}: any) => 
                  inline ? (
                    <code className="bg-gray-100 text-primary-600 px-1 py-0.5 rounded text-sm font-mono" {...props} />
                  ) : (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4" {...props} />
                  ),
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props} />
                  </div>
                ),
                thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
                th: ({node, ...props}) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
                td: ({node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Try Our Tools?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Convert your images for free with our privacy-focused tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/jpg-to-png"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Convert Images
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                >
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold inline-block mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
