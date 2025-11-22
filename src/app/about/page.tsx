"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal, Cpu, Shield, Award, Briefcase } from "lucide-react";

const skills = [
    { category: "Exploit Development", items: ["Windows Internals", "Buffer Overflow", "Reverse Engineering", "C/C++", "Assembly"] },
    { category: "ICS/OT Security", items: ["SCADA", "PLC", "Modbus", "DNP3", "Industrial Networks"] },
    { category: "Active Directory", items: ["Kerberos", "LDAP", "Red Teaming", "PowerShell", "BloodHound"] },
    { category: "Certifications", items: ["AD-RTS", "CRTA", "COWA", "MCRTA", "Cisco CyberOps", "SOC L1/L2"] }
];

const journey = [
    { year: "2025", title: "Advanced Certifications", description: "Earned AD-RTS (Active Directory Red Team Specialist), CRTA (Certified Red Team Analyst), COWA (Certified Offensive Windows API Developer) and MCRTA (Multi Cloud Red Team Analyst) and Reached Pro Hacker Level in Hack The Box." },
    { year: "2024", title: "HTB Prolabs & Certs", description: "Completed Dante and Full House Prolabs. Achieved Cisco CyberOps Associate and TryHackMe SOC certifications." },
    { year: "2023", title: "Exploit Development Focus", description: "Deep dive into reverse engineering, buffer overflows, and custom exploit development." },
    { year: "2022", title: "TryHackMe Top 1%", description: "Reached top 1% globally and ranked 6th in Sri Lanka on TryHackMe." },
    { year: "2020", title: "The Beginning", description: "Started formal education in cybersecurity, focusing on network security and ethical hacking." }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
                        <span className="text-hacker-blue">whoami</span>
                    </h1>

                    <div className="prose prose-invert prose-lg text-gray-300 mb-12">
                        <p className="text-xl font-bold text-white mb-4">
                            Kavindu Sahan (aka bl4ckf0xk)
                        </p>
                        <p>
                            I&apos;m a dedicated cybersecurity professional with more than 4 years of experience in protecting critical infrastructure and developing custom security solutions. My passion lies in understanding the intricacies of system compromise and building robust defenses against sophisticated attacks.
                        </p>
                        <p>
                            Specializing in <span className="text-hacker-blue">Exploit Development</span>, I create custom tools and techniques to identify vulnerabilities before malicious actors can exploit them. My work in <span className="text-hacker-red">ICS/OT Security</span> focuses on protecting industrial control systems that are critical to our infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Terminal className="text-hacker-blue" />
                            <span className="font-mono text-sm">Exploit Dev</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Shield className="text-hacker-red" />
                            <span className="font-mono text-sm">ICS/OT Sec</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Cpu className="text-hacker-blue" />
                            <span className="font-mono text-sm">AD Security</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Award className="text-hacker-red" />
                            <span className="font-mono text-sm">Red Teaming</span>
                        </GlassCard>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
                        <span className="text-hacker-blue">./</span> Skills & Expertise
                    </h2>

                    <div className="space-y-4">
                        {skills.map((skillGroup, index) => (
                            <GlassCard key={index} className="p-5">
                                <h3 className="text-lg font-bold mb-3 text-gray-200">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span key={skill} className="px-3 py-1 rounded text-sm font-mono bg-white/5 text-gray-400 border border-white/10 hover:text-hacker-blue hover:border-hacker-blue/50 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-8 font-mono flex items-center gap-2">
                        <span className="text-hacker-red">&gt;</span> The Journey
                    </h2>

                    <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4 relative">
                        {journey.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-hacker-blue" />
                                <div className="mb-1 flex items-center gap-3">
                                    <span className="text-hacker-blue font-mono font-bold">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
                            <span className="text-hacker-blue">./</span> Achievements
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <GlassCard className="p-4 flex gap-4 items-start">
                                <div className="p-2 bg-hacker-blue/10 rounded-lg text-hacker-blue">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">2nd Place - Ideathon</h4>
                                    <p className="text-sm text-gray-400">IIT CuttingEdge Exhibition</p>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-4 flex gap-4 items-start">
                                <div className="p-2 bg-hacker-red/10 rounded-lg text-hacker-red">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">748th - Cyber Apocalypse CTF</h4>
                                    <p className="text-sm text-gray-400">Top 15% among 5694 teams</p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
