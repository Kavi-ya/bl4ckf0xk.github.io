'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Lock, Zap, ExternalLink, Github, ArrowRight, Star, Calendar, Tag } from 'lucide-react';

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Advanced Exploit Framework",
      description: "A comprehensive framework for developing and testing custom exploits targeting modern Windows systems with advanced mitigation bypasses.",
      category: "Exploit Development",
      technologies: ["C++", "Assembly", "Python", "WinAPI"],
      status: "Active",
      featured: true,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2024-01-15",
      tags: ["exploit", "windows", "kernel", "rop"]
    },
    {
      id: 2,
      title: "OT/ICS Security Scanner",
      description: "Industrial Control Systems vulnerability scanner designed to identify security weaknesses in critical infrastructure environments.",
      category: "OT/ICS Security",
      technologies: ["Python", "Modbus", "DNP3", "SCADA"],
      status: "Completed",
      featured: true,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2023-12-20",
      tags: ["ot", "ics", "scanner", "industrial"]
    },
    {
      id: 3,
      title: "Active Directory Attack Simulator",
      description: "Comprehensive AD security testing tool that simulates various attack vectors including Kerberoasting, ASREPRoasting, and Golden Ticket attacks.",
      category: "Active Directory",
      technologies: ["C#", "PowerShell", "LDAP", "Kerberos"],
      status: "Active",
      featured: false,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2024-01-05",
      tags: ["ad", "kerberos", "attack", "simulation"]
    },
    {
      id: 4,
      title: "Malware Analysis Platform",
      description: "Automated malware analysis platform with static and dynamic analysis capabilities, behavioral monitoring, and threat intelligence integration.",
      category: "Malware Analysis",
      technologies: ["Python", "Docker", "YARA", "Cuckoo"],
      status: "Completed",
      featured: false,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2023-11-30",
      tags: ["malware", "analysis", "automation", "yara"]
    },
    {
      id: 5,
      title: "Network Security Monitor",
      description: "Real-time network traffic analysis and threat detection system with machine learning-based anomaly detection capabilities.",
      category: "Network Security",
      technologies: ["Go", "Kafka", "Elasticsearch", "ML"],
      status: "In Development",
      featured: false,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2024-01-10",
      tags: ["network", "monitoring", "ml", "threat-detection"]
    },
    {
      id: 6,
      title: "Vulnerability Research Toolkit",
      description: "Comprehensive toolkit for vulnerability research including fuzzing frameworks, exploit development utilities, and proof-of-concept generators.",
      category: "Vulnerability Research",
      technologies: ["Python", "AFL", "GDB", "Radare2"],
      status: "Active",
      featured: true,
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/600/400",
      date: "2023-12-15",
      tags: ["vulnerability", "fuzzing", "research", "tools"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', color: 'from-gray-500 to-gray-600' },
    { id: 'exploit', name: 'Exploit Development', color: 'from-red-500 to-red-600' },
    { id: 'ot-ics', name: 'OT/ICS Security', color: 'from-purple-500 to-purple-600' },
    { id: 'ad', name: 'Active Directory', color: 'from-orange-500 to-orange-600' },
    { id: 'malware', name: 'Malware Analysis', color: 'from-blue-500 to-blue-600' },
    { id: 'network', name: 'Network Security', color: 'from-green-500 to-green-600' },
    { id: 'research', name: 'Vulnerability Research', color: 'from-pink-500 to-pink-600' }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.color || 'from-gray-500 to-gray-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Completed':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'In Development':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

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
              Portfolio
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8">
              My Works
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Security tools, frameworks, and research projects that demonstrate my expertise in cybersecurity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
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
              <Code className="w-8 h-8 text-blue-400" />
              <h2 className="text-5xl sm:text-6xl font-black text-white">Featured Projects</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">Handpicked projects showcasing advanced security research and tool development</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${getCategoryColor(project.category)} rounded-3xl`} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      {project.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-bold rounded-full`}>
                        {project.category}
                      </span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-red-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.github}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button className="group/btn flex items-center space-x-2 text-red-400 hover:text-red-300 font-bold transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-16 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-3xl" />
              </div>
              
              <div className="relative z-10">
                <span className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4 block">
                  Interested in my work?
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                  Let's Collaborate
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Ready to discuss how my security tools and research can help protect your infrastructure?
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:contact@example.com"
                    className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-full text-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Get In Touch
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  
                  <a
                    href="https://github.com"
                    className="group inline-flex items-center px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold rounded-full text-lg hover:border-red-400 hover:text-red-400 transition-all duration-300 backdrop-blur-sm bg-black/20"
                  >
                    <Github className="w-6 h-6 mr-3" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
