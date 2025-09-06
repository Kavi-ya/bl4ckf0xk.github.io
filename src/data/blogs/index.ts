import { advancedExploitFrameworkBlog } from './advanced-exploit-framework';
import { icsOtSecurityBlog } from './ics-ot-security';

// Blog interface for type safety
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  status: string;
  slug: string;
}

// Export all blogs as an array
export const blogs: Blog[] = [
  advancedExploitFrameworkBlog,
  icsOtSecurityBlog,
];

// Helper functions for blog management
export const getBlogById = (id: number): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};

export const getBlogsByCategory = (category: string): Blog[] => {
  return blogs.filter(blog => blog.category === category);
};

export const getFeaturedBlogs = (): Blog[] => {
  return blogs.filter(blog => blog.featured);
};

export const getPublishedBlogs = (): Blog[] => {
  return blogs.filter(blog => blog.status === 'Published');
};

// Categories for filtering
export const blogCategories = [
  { id: 'all', name: 'All Blogs', color: 'linear-gradient(to right, #6B7280, #4B5563)' },
  { id: 'exploit', name: 'Exploit Development', color: 'linear-gradient(to right, #EF4444, #DC2626)' },
  { id: 'ot-ics', name: 'OT/ICS Security', color: 'linear-gradient(to right, #8B5CF6, #7C3AED)' },
  { id: 'ad', name: 'Active Directory', color: 'linear-gradient(to right, #F97316, #EA580C)' },
  { id: 'malware', name: 'Malware Analysis', color: 'linear-gradient(to right, #3B82F6, #2563EB)' },
  { id: 'network', name: 'Network Security', color: 'linear-gradient(to right, #10B981, #059669)' },
  { id: 'research', name: 'Vulnerability Research', color: 'linear-gradient(to right, #EC4899, #DB2777)' }
];
