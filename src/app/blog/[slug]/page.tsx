import { getBlogBySlug, blogs } from '@/data/blogs';
import BlogDetailClient from '@/app/blog/[slug]/BlogDetailClient';

// Generate static params for all blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <a 
            href="/works" 
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            ← Back to Works
          </a>
        </div>
      </div>
    );
  }

  return <BlogDetailClient blog={blog} />;
}
