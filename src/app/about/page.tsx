'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Award, Code, Shield, Lock, Zap, Download, Mail, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timelineEvents = [
    {
      year: "2020",
      title: "Started Cybersecurity Journey",
      description: "Began formal education in cybersecurity and ethical hacking, focusing on network security fundamentals and penetration testing methodologies.",
      icon: Shield,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-500/10 to-red-900/20",
      borderColor: "border-red-500/30"
    },
    {
      year: "2021",
      title: "First Security Certification",
      description: "Obtained CompTIA Security+ and began specializing in network security, expanding knowledge in threat detection and incident response.",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-900/20",
      borderColor: "border-purple-500/30"
    },
    {
      year: "2022",
      title: "Exploit Development Focus",
      description: "Deep dive into reverse engineering and custom exploit development, mastering low-level programming and vulnerability research techniques.",
      icon: Code,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30"
    },
    {
      year: "2023",
      title: "OT/ICS Security Specialization",
      description: "Specialized in Industrial Control Systems and Operational Technology security, protecting critical infrastructure from cyber threats.",
      icon: Lock,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-900/20",
      borderColor: "border-blue-500/30"
    },
    {
      year: "2024",
      title: "Active Directory Expert",
      description: "Became expert in AD security, privilege escalation, and lateral movement techniques, developing advanced attack and defense strategies.",
      icon: Zap,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-900/20",
      borderColor: "border-green-500/30"
    }
  ];

  const skills = [
    { name: "Exploit Development", level: 95, color: "from-red-500 to-red-600" },
    { name: "OT/ICS Security", level: 90, color: "from-purple-500 to-purple-600" },
    { name: "Active Directory", level: 92, color: "from-orange-500 to-orange-600" },
    { name: "Penetration Testing", level: 88, color: "from-blue-500 to-blue-600" },
    { name: "Reverse Engineering", level: 85, color: "from-green-500 to-green-600" },
    { name: "Malware Analysis", level: 82, color: "from-pink-500 to-pink-600" },
    { name: "Network Security", level: 90, color: "from-indigo-500 to-indigo-600" },
    { name: "Incident Response", level: 78, color: "from-yellow-500 to-yellow-600" }
  ];

  const certifications = [
    { name: "OSCP", full: "Offensive Security Certified Professional", year: "2023" },
    { name: "CISSP", full: "Certified Information Systems Security Professional", year: "2022" },
    { name: "GICSP", full: "Global Industrial Cyber Security Professional", year: "2023" },
    { name: "CEH", full: "Certified Ethical Hacker", year: "2021" },
    { name: "CISM", full: "Certified Information Security Manager", year: "2024" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
              About Me
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8">
              The Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate cybersecurity professional with deep expertise in exploit development, 
              OT/ICS security, and Active Directory security
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-6">bl4ckf0xk</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a dedicated cybersecurity professional with over 4 years of experience in 
                    protecting critical infrastructure and developing custom security solutions. 
                    My passion lies in understanding the intricate details of how systems can be 
                    compromised and building robust defenses against sophisticated attacks.
                  </p>
                  <p>
                    Specializing in exploit development, I create custom tools and techniques to 
                    identify vulnerabilities before malicious actors can exploit them. My work in 
                    OT/ICS security focuses on protecting industrial control systems that are 
                    critical to our infrastructure.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                  <a
                    href="/resume.pdf"
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-full overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-full hover:border-red-400 hover:text-red-400 transition-all duration-300 backdrop-blur-sm bg-black/20"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-red-600 via-purple-600 to-orange-600 rounded-full flex items-center justify-center p-1">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <Shield className="w-40 h-40 text-red-400" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4 block">
              Career Timeline
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Key milestones in my cybersecurity career and professional development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-orange-500" />
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-center"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${event.color} rounded-full border-4 border-black z-10`} />
                    
                    {/* Content Card */}
                    <div className={`ml-16 bg-gradient-to-br ${event.bgColor} backdrop-blur-sm border ${event.borderColor} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105`}>
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 bg-gradient-to-r ${event.color} rounded-xl flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-3xl font-black text-white">{event.year}</span>
                            <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                          </div>
                          <p className="text-gray-300 text-lg leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4 block">
              Technical Expertise
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Skills & Proficiencies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expertise across various cybersecurity domains and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">{skill.name}</span>
                    <span className="text-2xl font-black text-red-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4 block">
              Professional Credentials
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional certifications validating my expertise and commitment to continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">{cert.name}</h3>
                      <p className="text-sm text-red-400 font-semibold">{cert.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{cert.full}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
