'use client';

import { Award, Code, Shield, Lock, Zap, Download, Mail, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  useEffect(() => {
    // Set initial window width on client-side
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // IntersectionObserver for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timelineEvents = [
    {
      id: "cybersecurity-journey-2020",
      year: "2020",
      title: "Started Cybersecurity Journey",
      description: "Began formal education in cybersecurity and ethical hacking, focusing on network security fundamentals and penetration testing methodologies.",
      icon: Shield,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      bgColor: "bg-gradient-to-br from-red-500/10 to-red-900/20",
      borderColor: "border-red-500/30",
    },
    {
      id: "windows-internals-2021",
      year: "2021",
      title: "Started to learn about Windows Internals",
      description: "Researched about attacking windows systems and how to defend them at the same time. Started to focus on Windows Internals to develop malware.",
      icon: Award,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-900/20",
      borderColor: "border-purple-500/30",
    },
    {
      id: "tryhackme-1percent-2021",
      year: "2021",
      title: "Became 1% in TryHackMe",
      description: "Learned about every aspect of cybersecurity and also in a short time period and became a 1% user in TryHackMe and 6th rank in Sri Lankan Leaderboard.",
      icon: Shield,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-900/20",
      borderColor: "border-purple-500/30",
    },
    {
      id: "buffer-overflow-2021",
      year: "2021",
      title: "Started to learn about Buffer Overflow Attacks",
      description: "Became curious about how memory works inside applications. Began researching buffer overflow attacks and working to master them.",
      icon: Code,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-900/20",
      borderColor: "border-purple-500/30",
    },
    {
      id: "exploit-development-2022",
      year: "2022",
      title: "Exploit Development Focus",
      description: "Deep dive into reverse engineering and custom exploit development, mastering low-level programming and vulnerability research techniques.",
      icon: Code,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30",
    },
    {
      id: "cyber-apocalypse-2024",
      year: "2024",
      title: "Gained 748th position in Cyber Apocalypse CTF",
      description: "Went to HTB Cyber Apocalypse in solo and from 5694 teams able to secure 748 place.",
      icon: Lock,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30",
    },
    {
      id: "certs-2024",
      year: "2024",
      title: "Certificates Achieved in 2024",
      description: "Achived Cisco CyberOps Associate Certification from Cisco and DevSecOps, SOC Level 1 and SOC Level 2 certificates from TryHackMe.",
      icon: Shield,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30",
    },
    {
      id: "iit-induction-2024",
      year: "2024",
      title: "IIT Infoschol Program",
      description: "Selected for the IIT Infoschol scholarship program, successfully completing it with a placement at Inivos Consulting Company. At the same time, I began my Computer Science degree at the University of Westminster.",
      icon: Zap,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30",
    },
    {
      id: "iit-ideathon-2024",
      year: "2024",
      title: "Achived 2nd place in Ideathon",
      description: "Participated in IIT CuttingEdge Exhibition and completed in Ideathon challenge. My team was able to secure the second place in Ideathon competition.",
      icon: Code,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-900/20",
      borderColor: "border-orange-500/30",
    },
    {
      id: "htb-prolab-2025",
      year: "2025",
      title: "Played HTB Prolabs",
      description: "Successfully completed Dante and Full House Prolabs and Nearly completed the Alchemy Prolab.",
      icon: CircleCheck,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-900/20",
      borderColor: "border-green-500/30",
    },
    {
      id: "prohacker-htb-2025",
      year: "2025",
      title: "Reached ProHacker Level",
      description: "Pwned 50% of HTB content and able to come to the ProHacker level in HTB.",
      icon: Zap,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-900/20",
      borderColor: "border-green-500/30",
    },
    {
      id: "certs-2025",
      year: "2025",
      title: "Certifications so far in 2025",
      description: "Earned the COWA (Certified Offensive Windows API Developer) and MCRTA (Multi Cloud Red Team Analyst) certifications.",
      icon: Zap,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-900/20",
      borderColor: "border-green-500/30",
    },
    {
      id: "present-2025",
      year: "2025",
      title: "Right Now",
      description: "Learning about ICS and OT technologies in depth.",
      icon: Zap,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-green-900/20",
      borderColor: "border-green-500/30",
    },
  ];

  const skills = [
    { name: "Exploit Development", color: "bg-gradient-to-r from-red-500 to-red-600" },
    { name: "ICS/OT Security", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
    { name: "Active Directory Security", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
    { name: "Penetration Testing", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { name: "Reverse Engineering", color: "bg-gradient-to-r from-green-500 to-green-600" },
    { name: "Malware Analysis", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
    { name: "Network Security", color: "bg-gradient-to-r from-indigo-500 to-indigo-600" },
    { name: "Incident Response", color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
  ];

  const certifications = [
    { name: "COWA", full: "Certified Offensive Windows API Developer", year: "2025" },
    { name: "MCRTA", full: "Multi Cloud Red Team Analyst", year: "2025" },
    { name: "Dante Prolab", full: "HTB Dante Prolab Completed", year: "2024" },
    { name: "Full House Prolab", full: "HTB Full House Prolab Completed", year: "2024" },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '25%',
              width: '24rem',
              height: '24rem',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '25%',
              left: '25%',
              width: '20rem',
              height: '20rem',
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'pulse 4s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />
        </div>

        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                color: '#ef4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'block',
              }}
            >
              About Me
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '2rem',
                lineHeight: '1.1',
              }}
            >
              The Journey
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#d1d5db',
                maxWidth: '64rem',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Passionate cybersecurity professional with deep expertise in Exploit Development, ICS/OT Security, and Active Directory Security
            </p>
          </div>

          {/* Profile Card */}
          <div
            style={{
              background: 'linear-gradient(to right, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              borderRadius: '1.5rem',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '4rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: '900',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                  }}
                >
                  Kavindu Sahan 
                  <p>(aka bl4ckf0xk)</p>
                </h2>
                <h3>(aka bl4ckf0xk)</h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    color: '#d1d5db',
                    lineHeight: '1.6',
                  }}
                >
                  <p>
                    I&apos;m a dedicated cybersecurity professional with more than 4 years of experience in protecting critical infrastructure and developing custom security solutions. My passion lies in understanding the intricacies of system compromise and building robust defenses against sophisticated attacks.
                  </p>
                  <p>
                    Specializing in exploit development, I create custom tools and techniques to identify vulnerabilities before malicious actors can exploit them. My work in ICS/OT security focuses on protecting industrial control systems that are critical to our infrastructure.
                  </p>
                </div>
                
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div 
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setIsProfileHovered(true)}
                  onMouseLeave={() => setIsProfileHovered(false)}
                >
                  <div
                    style={{
                      width: 'clamp(15rem, 20vw, 20rem)',
                      height: 'clamp(15rem, 20vw, 20rem)',
                      background: isProfileHovered 
                        ? 'linear-gradient(to right, rgb(255, 3, 3), rgb(99, 41, 41), rgb(92, 92, 92))' 
                        : 'linear-gradient(to right,rgb(92, 92, 92),rgb(99, 41, 41),rgb(255, 3, 3))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      transition: 'all 0.3s ease',
                      transform: isProfileHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000000',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={isProfileHovered ? "/profile-hover.jpeg" : "/profile.jpeg"}
                        alt="Kavindu Sahan"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          transition: 'all 0.3s ease',
                          filter: isProfileHovered ? 'brightness(1.1) contrast(1.1)' : 'none',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-1rem',
                      right: '-1rem',
                      width: '2rem',
                      height: '2rem',
                      backgroundColor: '#ef4444',
                      borderRadius: '50%',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-1rem',
                      left: '-1rem',
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: 'rgb(92, 92, 92)',
                      borderRadius: '50%',
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: '1s',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                color: '#ef4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'block',
              }}
            >
              Career Timeline
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              My Journey
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#d1d5db',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Key milestones in my cybersecurity career and professional development
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div
              style={{
                position: 'absolute',
                left: '2rem',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, #ef4444, #9333ea, #ea580c)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.id}
                    id={`animate-timeline-${event.id}`}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 1s ease',
                      opacity: (isVisible as Record<string, boolean>)[`animate-timeline-${event.id}`] ? 1 : 0,
                      transform: (isVisible as Record<string, boolean>)[`animate-timeline-${event.id}`] ? 'translateX(0)' : 'translateX(-40px)',
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '1.5rem',
                        width: '1rem',
                        height: '1rem',
                        background: event.color.replace('bg-gradient-to-r', 'linear-gradient(to right,'),
                        borderRadius: '50%',
                        border: '4px solid #000000',
                        zIndex: 10,
                      }}
                    />
                    
                    {/* Content Card */}
                    <div
                      style={{
                        marginLeft: '4rem',
                        width: '100%',
                        background: event.bgColor.replace('bg-gradient-to-br', 'linear-gradient(135deg,'),
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${event.borderColor.replace('border-', '').replace('/30', '4d')}`,
                        borderRadius: '1rem',
                        padding: 'clamp(1.5rem, 3vw, 2rem)',
                        transition: 'all 0.5s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.borderColor = event.borderColor.replace('border-', '').replace('/30', '99');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = event.borderColor.replace('border-', '').replace('/30', '4d');
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: windowWidth < 640 ? 'column' : 'row',
                          alignItems: windowWidth < 640 ? 'flex-start' : 'center',
                          gap: '1.5rem',
                        }}
                      >
                        <div
                          style={{
                            padding: '1rem',
                            background: event.color.replace('bg-gradient-to-r', 'linear-gradient(to right,'),
                            borderRadius: '0.75rem',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={32} style={{ color: '#ffffff' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: windowWidth < 640 ? 'column' : 'row',
                              alignItems: windowWidth < 640 ? 'flex-start' : 'center',
                              gap: '1rem',
                              marginBottom: '1rem',
                            }}
                          >
                            <span
                              style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: '900',
                                color: '#ffffff',
                              }}
                            >
                              {event.year}
                            </span>
                            <h3
                              style={{
                                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                fontWeight: '700',
                                color: '#ffffff',
                                margin: 0,
                              }}
                            >
                              {event.title}
                            </h3>
                          </div>
                          <p
                            style={{
                              color: '#d1d5db',
                              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                              lineHeight: '1.6',
                              margin: 0,
                            }}
                          >
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                color: '#ef4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'block',
              }}
            >
              Professional Credentials
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              Certifications
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#d1d5db',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Professional certifications validating my expertise and commitment to continuous learning
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                id={`animate-cert-${index}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.5))',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  transition: 'all 0.5s ease',
                  opacity: (isVisible as Record<string, boolean>)[`animate-cert-${index}`] ? 1 : 0,
                  transform: (isVisible as Record<string, boolean>)[`animate-cert-${index}`] ? 'translateY(0)' : 'translateY(40px)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.75rem',
                        background: 'linear-gradient(to right,rgb(221, 146, 7),rgb(144, 61, 13))',
                        borderRadius: '0.75rem',
                      }}
                    >
                      <Award size={24} style={{ color: '#ffffff' }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                          fontWeight: '700',
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        {cert.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#ef4444',
                          fontWeight: '600',
                          margin: 0,
                        }}
                      >
                        {cert.year}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: '#d1d5db',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {cert.full}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                color: '#ef4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'block',
              }}
            >
              Technical Expertise
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              Skills & Proficiencies
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#d1d5db',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Expertise across various cybersecurity domains and technologies
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                id={`animate-skill-${index}`}
                style={{
                  background: 'linear-gradient(to right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.5))',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  transition: 'all 0.5s ease',
                  opacity: (isVisible as Record<string, boolean>)[`animate-skill-${index}`] ? 1 : 0,
                  transform: (isVisible as Record<string, boolean>)[`animate-skill-${index}`] ? 'translateY(0)' : 'translateY(40px)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        fontWeight: '700',
                        color: '#ffffff',
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '12px',
                      backgroundColor: '#1f2937',
                      borderRadius: '6px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: skill.color.replace('bg-gradient-to-r', 'linear-gradient(to right,'),
                        borderRadius: '6px',
                        transition: 'width 1.5s ease-out',
                        width: (isVisible as Record<string, boolean>)[`animate-skill-${index}`] ? '100%' : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        * {
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}