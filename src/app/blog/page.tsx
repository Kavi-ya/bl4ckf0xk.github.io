'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search, Filter, BookOpen, TrendingUp, Star } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', color: 'from-gray-500 to-gray-600' },
    { id: 'exploit', name: 'Exploit Development', color: 'from-red-500 to-red-600' },
    { id: 'ot-ics', name: 'OT/ICS Security', color: 'from-purple-500 to-purple-600' },
    { id: 'ad', name: 'Active Directory', color: 'from-orange-500 to-orange-600' },
    { id: 'research', name: 'Security Research', color: 'from-blue-500 to-blue-600' },
    { id: 'tools', name: 'Security Tools', color: 'from-green-500 to-green-600' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Exploit Development Techniques for Windows Kernel",
      excerpt: "Deep dive into kernel-level exploit development, covering ROP chains, heap spraying, and bypassing modern mitigations like SMEP and SMAP.",
      content: "In this comprehensive guide, we explore advanced techniques for developing reliable kernel exploits on modern Windows systems...",
      category: "exploit",
      tags: ["exploit-development", "kernel", "windows", "rop", "heap-spraying"],
      date: "2024-01-15",
      readTime: "12 min read",
      featured: true,
      views: 2847,
      likes: 156
    },
    {
      id: 2,
      title: "Securing Industrial Control Systems: A Practical Approach",
      excerpt: "Comprehensive guide to securing OT/ICS environments, covering network segmentation, protocol security, and incident response.",
      content: "Industrial Control Systems (ICS) are increasingly becoming targets for sophisticated cyber attacks...",
      category: "ot-ics",
      tags: ["ot-security", "ics", "industrial", "network-segmentation", "protocols"],
      date: "2024-01-10",
      readTime: "15 min read",
      featured: true,
      views: 1923,
      likes: 89
    },
    {
      id: 3,
      title: "Active Directory Attack Vectors and Defense Strategies",
      excerpt: "Exploring common AD attack techniques including Kerberoasting, ASREPRoasting, and Golden Ticket attacks with mitigation strategies.",
      content: "Active Directory remains one of the most critical components in enterprise environments...",
      category: "ad",
      tags: ["active-directory", "kerberoasting", "golden-ticket", "privilege-escalation"],
      date: "2024-01-05",
      readTime: "10 min read",
      featured: false,
      views: 1456,
      likes: 67
    },
    {
      id: 4,
      title: "Building Custom Security Tools with Python",
      excerpt: "Learn how to create effective security tools using Python, covering network scanning, vulnerability assessment, and automation.",
      content: "Python has become the go-to language for security professionals due to its simplicity and powerful libraries...",
      category: "tools",
      tags: ["python", "security-tools", "automation", "network-scanning"],
      date: "2024-01-01",
      readTime: "8 min read",
      featured: false,
      views: 987,
      likes: 43
    },
    {
      id: 5,
      title: "Reverse Engineering Malware: Static Analysis Techniques",
      excerpt: "Comprehensive guide to static malware analysis, covering disassembly, string analysis, and behavioral understanding.",
      content: "Malware analysis is a crucial skill for cybersecurity professionals...",
      category: "research",
      tags: ["malware-analysis", "reverse-engineering", "static-analysis", "disassembly"],
      date: "2023-12-28",
      readTime: "14 min read",
      featured: false,
      views: 1234,
      likes: 78
    },
    {
      id: 6,
      title: "Zero-Day Vulnerability Research Methodology",
      excerpt: "Systematic approach to discovering zero-day vulnerabilities, from fuzzing to proof-of-concept development.",
      content: "Zero-day vulnerability research requires a systematic and methodical approach...",
      category: "research",
      tags: ["zero-day", "vulnerability-research", "fuzzing", "poc"],
      date: "2023-12-20",
      readTime: "18 min read",
      featured: true,
      views: 3456,
      likes: 234
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4 block">
              Security Research
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8">
              Security Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Deep dives into cybersecurity research, exploit development, and security best practices
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 mb-20"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 text-lg"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
                <h2 className="text-5xl sm:text-6xl font-black text-white">Featured Articles</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl">Handpicked articles showcasing advanced security research and cutting-edge techniques</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const category = categories.find(cat => cat.id === post.category);
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${category?.color} rounded-3xl`} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                          ⭐ Featured
                        </span>
                        <span className={`px-4 py-2 bg-gradient-to-r ${category?.color} text-white text-sm font-bold rounded-full`}>
                          {category?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-black text-white mb-6 group-hover:text-red-400 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-6 text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5" />
                            <span className="font-semibold">{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-gray-400">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-semibold">❤️ {post.likes}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="group/btn flex items-center space-x-3 text-red-400 hover:text-red-300 font-bold text-lg transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h2 className="text-5xl sm:text-6xl font-black text-white">All Articles</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">Complete collection of security research, insights, and technical deep dives</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => {
              const category = categories.find(cat => cat.id === post.category);
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${category?.color} text-white text-sm font-bold rounded-full`}>
                        {category?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-full border border-gray-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-semibold">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-semibold">{post.readTime}</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 font-bold transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-8">🔍</div>
              <h3 className="text-4xl font-black text-white mb-4">No articles found</h3>
              <p className="text-xl text-gray-300 mb-8">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-full hover:from-red-500 hover:to-purple-500 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
