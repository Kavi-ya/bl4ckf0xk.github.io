'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { type Blog } from '@/data/blogs';

interface BlogDetailClientProps {
  blog: Blog;
}

export default function BlogDetailClient({ blog }: BlogDetailClientProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            href="/works" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Blog Content */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: blog.content
                  .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6 mt-8">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-6">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-3 mt-5">$1</h3>')
                  .replace(/^\- \*\*(.*?)\*\*: (.*$)/gim, '<li class="mb-2"><strong class="text-red-400">$1</strong>: $2</li>')
                  .replace(/^\- (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>')
                  .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gim, '<li class="mb-2"><strong class="text-red-400">$1</strong>: $2</li>')
                  .replace(/^\d+\. (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
                  .replace(/`(.*?)`/g, '<code class="bg-gray-800 text-red-400 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-red-400 hover:text-red-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
                  .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/^(?!<[h|l])(.*$)/gim, '<p class="text-gray-300 mb-4 leading-relaxed">$1</p>')
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link 
              href="/works" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Blogs
            </Link>
            
            <div className="text-sm text-gray-400">
              Published on {new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-content h1:first-child {
          margin-top: 0;
        }
        
        .blog-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .blog-content ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .blog-content code {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .blog-content a {
          word-break: break-all;
        }
      `}</style>
    </div>
  );
}
