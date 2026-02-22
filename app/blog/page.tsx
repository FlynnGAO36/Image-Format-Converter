import { getAllPosts, getAllCategories } from '@/lib/mdxUtils';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Image Optimization Blog - Tutorials & Guides | ImageConvertLab',
  description: 'Learn about image formats, optimization techniques, and web performance. Free tutorials on JPG, PNG, WebP, and image compression.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return (
    <BlogClient allPosts={allPosts} categories={categories} />
  );
}
