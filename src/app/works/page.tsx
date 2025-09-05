'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, ArrowRight, Star, Calendar } from 'lucide-react';

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
    { id: 'all', name: 'All Projects', color: 'linear-gradient(to right, #6B7280, #4B5563)' },
    { id: 'exploit', name: 'Exploit Development', color: 'linear-gradient(to right, #EF4444, #DC2626)' },
    { id: 'ot-ics', name: 'OT/ICS Security', color: 'linear-gradient(to right, #8B5CF6, #7C3AED)' },
    { id: 'ad', name: 'Active Directory', color: 'linear-gradient(to right, #F97316, #EA580C)' },
    { id: 'malware', name: 'Malware Analysis', color: 'linear-gradient(to right, #3B82F6, #2563EB)' },
    { id: 'network', name: 'Network Security', color: 'linear-gradient(to right, #10B981, #059669)' },
    { id: 'research', name: 'Vulnerability Research', color: 'linear-gradient(to right, #EC4899, #DB2777)' }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.color || 'linear-gradient(to right, #6B7280, #4B5563)';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return {
          color: '#34D399',
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          border: '1px solid rgba(52, 211, 153, 0.2)'
        };
      case 'Completed':
        return {
          color: '#60A5FA',
          backgroundColor: 'rgba(96, 165, 250, 0.1)',
          border: '1px solid rgba(96, 165, 250, 0.2)'
        };
      case 'In Development':
        return {
          color: '#FBBF24',
          backgroundColor: 'rgba(251, 191, 36, 0.1)',
          border: '1px solid rgba(251, 191, 36, 0.2)'
        };
      default:
        return {
          color: '#9CA3AF',
          backgroundColor: 'rgba(156, 163, 175, 0.1)',
          border: '1px solid rgba(156, 163, 175, 0.2)'
        };
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '4rem',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        .background-blur {
          background: linear-gradient(to bottom right, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8));
          backdrop-filter: blur(16px);
        }
        .project-card:hover {
          border-color: rgba(239, 68, 68, 0.5);
          transform: scale(1.05);
          transition: all 0.5s ease;
        }
        .button-gradient {
          background: linear-gradient(to right, #EF4444, #A855F7);
          position: relative;
          overflow: hidden;
        }
        .button-gradient:hover .button-overlay {
          opacity: 1;
        }
        .button-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #F87171, #C084FC);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .github-button:hover {
          border-color: #EF4444;
          color: #EF4444;
        }
        .category-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 700;
        }
        .tech-badge {
          padding: 0.25rem 0.75rem;
          background-color: rgba(31, 41, 55, 0.5);
          color: #9CA3AF;
          border: 1px solid #4B5563;
          border-radius: 9999px;
          font-size: 0.875rem;
        }
        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .view-details:hover .arrow {
          transform: translateX(4px);
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '8rem 1rem'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden'
        }}>
          <motion.div
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '24rem',
              height: '24rem',
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '50%',
              filter: 'blur(96px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              bottom: '25%',
              right: '25%',
              width: '20rem',
              height: '20rem',
              backgroundColor: 'rgba(168, 85, 247, 0.05)',
              borderRadius: '50%',
              filter: 'blur(96px)'
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '5rem'
            }}
          >
            <span style={{
              display: 'block',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              color: '#EF4444',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Portfolio
            </span>
            <h1 style={{
              fontSize: '3.75rem',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '2rem'
            }}>
              My Works
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#D1D5DB',
              maxWidth: '64rem',
              margin: '0 auto',
              lineHeight: 1.75
            }}>
              Security tools, frameworks, and research projects that demonstrate my expertise in cybersecurity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '5rem 1rem'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <Code style={{ width: '2rem', height: '2rem', color: '#60A5FA' }} />
              <h2
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#FFFFFF'
                }}
                className="sm:text-5xl"
              >
                Featured Projects
              </h2>
            </div>
            <p style={{
              fontSize: '1.25rem',
              color: '#D1D5DB',
              maxWidth: '48rem'
            }}>
              Handpicked projects showcasing advanced security research and tool development
            </p>
          </motion.div>

          <div
            className="grid gap-8 lg:grid-cols-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
                style={{
                  position: 'relative',
                  background: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid #374151',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.05
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: getCategoryColor(project.category),
                    borderRadius: '1.5rem'
                  }} />
                </div>
                
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      {project.featured && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: 'linear-gradient(to right, #FBBF24, #F97316)',
                          color: '#000000',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Star style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.25rem' }} />
                          Featured
                        </span>
                      )}
                      <span className="category-badge" style={{
                        background: getCategoryColor(project.category),
                        color: '#FFFFFF'
                      }}>
                        {project.category}
                      </span>
                    </div>
                    <span className="status-badge" style={getStatusColor(project.status) as React.CSSProperties}>
                      {project.status}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.875rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease'
                  }} className="group-hover:text-[#EF4444]">
                    {project.title}
                  </h3>
                  
                  <p style={{
                    color: '#D1D5DB',
                    marginBottom: '1.5rem',
                    fontSize: '1.125rem',
                    lineHeight: 1.75
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      color: '#9CA3AF'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar style={{ width: '1rem', height: '1rem' }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                          {new Date(project.date).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <a
                        href={project.github}
                        style={{
                          padding: '0.5rem',
                          color: '#9CA3AF',
                          borderRadius: '0.5rem',
                          transition: 'all 0.2s ease'
                        }}
                        className="hover:bg-[rgba(31,41,55,0.5)] hover:text-[#FFFFFF]"
                      >
                        <Github style={{ width: '1.25rem', height: '1.25rem' }} />
                      </a>
                      <a
                        href={project.demo}
                        style={{
                          padding: '0.5rem',
                          color: '#9CA3AF',
                          borderRadius: '0.5rem',
                          transition: 'all 0.2s ease'
                        }}
                        className="hover:bg-[rgba(31,41,55,0.5)] hover:text-[#FFFFFF]"
                      >
                        <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
                      </a>
                      <button className="view-details" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#EF4444',
                        fontWeight: 700,
                        transition: 'color 0.3s ease'
                      }}>
                        <span>View Details</span>
                        <ArrowRight className="arrow" style={{
                          width: '1rem',
                          height: '1rem',
                          transition: 'transform 0.3s ease'
                        }} />
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
      <section className="px-4 sm:px-6 lg:px-8" style={{ padding: '8rem 1rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div className="background-blur" style={{
              border: '1px solid #374151',
              borderRadius: '1.5rem',
              padding: '4rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to right, #EF4444, #A855F7)',
                  borderRadius: '1.5rem'
                }} />
              </div>
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: '#EF4444',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}>
                  Interested in my work?
                </span>
                <h2
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    marginBottom: '2rem'
                  }}
                  className="sm:text-3xl"
                >
                  Let&apos;s Collaborate
                </h2>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#D1D5DB',
                  marginBottom: '3rem',
                  maxWidth: '48rem',
                  margin: '0 auto',
                  lineHeight: 1.75
                }}>
                  Ready to discuss how my security tools and research can help protect your infrastructure?
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  justifyContent: 'center'
                }}>
                  <a
                    href="mailto:contact@example.com"
                    className="button-gradient"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '1.25rem 2.5rem',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      borderRadius: '9999px',
                      fontSize: '1.125rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center' }}>
                      Get In Touch
                      <ArrowRight style={{
                        marginLeft: '0.75rem',
                        width: '1.5rem',
                        height: '1.5rem'
                      }} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="button-overlay" />
                  </a>
                  
                  <a
                    href="https://github.com"
                    className="github-button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '1.25rem 2.5rem',
                      border: '2px solid #4B5563',
                      color: '#D1D5DB',
                      fontWeight: 700,
                      borderRadius: '9999px',
                      fontSize: '1.125rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Github style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem' }} />
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