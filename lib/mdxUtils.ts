import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  keywords: string;
  author: string;
  content: string;
}

/**
 * Get all blog posts from content directory
 */
export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  // Get pillar posts
  const pillarDir = path.join(contentDirectory, 'pillar');
  if (fs.existsSync(pillarDir)) {
    const pillarFiles = fs.readdirSync(pillarDir);
    pillarFiles.forEach((filename) => {
      if (filename.endsWith('.md')) {
        const slug = filename.replace(/\.md$/, '');
        const post = getPostBySlug(slug, 'pillar');
        if (post) posts.push(post);
      }
    });
  }

  // Get regular blog posts
  const blogDir = path.join(contentDirectory, 'blog');
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir);
    blogFiles.forEach((filename) => {
      if (filename.endsWith('.md')) {
        const slug = filename.replace(/\.md$/, '');
        const post = getPostBySlug(slug, 'blog');
        if (post) posts.push(post);
      }
    });
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string, type: 'pillar' | 'blog' = 'blog'): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || '',
      keywords: data.keywords || '',
      author: data.author || 'ImageConvertLab Team',
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  const slugs: string[] = [];

  // Get pillar slugs
  const pillarDir = path.join(contentDirectory, 'pillar');
  if (fs.existsSync(pillarDir)) {
    const pillarFiles = fs.readdirSync(pillarDir);
    pillarFiles.forEach((filename) => {
      if (filename.endsWith('.md')) {
        slugs.push(filename.replace(/\.md$/, ''));
      }
    });
  }

  // Get blog slugs
  const blogDir = path.join(contentDirectory, 'blog');
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir);
    blogFiles.forEach((filename) => {
      if (filename.endsWith('.md')) {
        slugs.push(filename.replace(/\.md$/, ''));
      }
    });
  }

  return slugs;
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map(post => post.category));
  return Array.from(categories);
}
