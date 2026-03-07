"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github, Code, Lock, Terminal, Shield, Bug, Activity } from "lucide-react";

const projects = [
    {
        title: "Fox.hen",
        description: "A next-generation CTF platform where attackers are judged not by how fast they pop shells, but by how intelligently, quietly, and realistically they compromise adaptive systems.",
        tags: ["TypeScript", "CTF Platform", "Red Teaming", "Next.js"],
        link: "https://github.com/bl4ckf0xk/Fox.hen",
        github: "https://github.com/bl4ckf0xk/Fox.hen",
        icon: Terminal
    },
    {
        title: "State-Aware-API-Fuzzer",
        description: "An advanced, state-aware fuzzer designed specifically for testing complex API architectures, bypassing WAFs, and identifying hidden business logic flaws.",
        tags: ["Fuzzing", "API Security", "Vulnerability Research"],
        link: "https://github.com/bl4ckf0xk/State-Aware-API-Fuzzer",
        github: "https://github.com/bl4ckf0xk/State-Aware-API-Fuzzer",
        icon: Bug
    },
    {
        title: "ICS/OT Security Scanner",
        description: "Industrial Control Systems vulnerability scanner designed to identify security weaknesses in critical infrastructure environments and SCADA networks.",
        tags: ["ICS/OT", "Scada", "Python", "Network Security"],
        link: "#",
        github: "#",
        icon: Shield
    },
    {
        title: "Active Directory Attack Simulator",
        description: "Comprehensive AD security testing tool that simulates various attack vectors including Kerberoasting, ASREPRoasting, and Golden Ticket attacks.",
        tags: ["Active Directory", "Red Teaming", "PowerShell", "C#"],
        link: "#",
        github: "#",
        icon: Lock
    },
    {
        title: "Assembly Tools & Exploits",
        description: "Custom shellcode generators and basic utilities leveraging low-level Assembly for rapid exploit development.",
        tags: ["Assembly", "Exploit Dev", "Windows internals"],
        link: "#",
        github: "https://github.com/bl4ckf0xk/Assembly-Projects",
        icon: Code
    },
    {
        title: "Network Security Monitor",
        description: "Real-time network traffic analysis and threat detection system with machine learning-based anomaly detection capabilities.",
        tags: ["Network Security", "ML", "Traffic Analysis"],
        link: "#",
        github: "#",
        icon: Activity
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-hacker-blue font-mono text-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-hacker-blue animate-pulse"></span>
                    ACTIVE.DIRECTORY
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                    <span className="text-hacker-blue">./</span>Projects
                </h1>
                <p className="text-lg text-gray-400">
                    A curated collection of exploits, platforms, and security tools engineered for modern environments.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="flex flex-col h-full group relative overflow-hidden transition-all duration-500 hover:border-hacker-blue/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        {/* Interactive gradients */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 group-hover:via-hacker-blue to-transparent opacity-50 transition-all duration-500 w-0 group-hover:w-full"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-hacker-blue/20 to-hacker-red/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0 rounded-3xl" aria-hidden="true"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-hacker-blue group-hover:scale-110 group-hover:border-hacker-blue/30 transition-all duration-500">
                                    <project.icon size={28} />
                                </div>
                                <div className="flex gap-3">
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/40 border border-white/5 text-gray-400 hover:text-white hover:border-hacker-blue/50 transition-all">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/40 border border-white/5 text-gray-400 hover:text-white hover:border-hacker-blue/50 transition-all">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-hacker-blue transition-all duration-300">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 rounded bg-black/40 text-xs font-mono text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
