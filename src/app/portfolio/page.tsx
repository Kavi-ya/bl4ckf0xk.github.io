"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github, Code, Lock, Terminal, Shield, Bug, Activity } from "lucide-react";

const projects = [
    {
        title: "In Development",
        description: "In Development",
        tags: ["Website", "Development", "Next.js"],
        link: "#",
        github: "#",
        icon: Terminal
    },
    // {
    //     title: "Advanced Exploit Framework",
    //     description: "A comprehensive framework for developing and testing custom exploits targeting modern Windows systems with advanced mitigation bypasses.",
    //     tags: ["Exploit Dev", "Windows", "C++", "Python"],
    //     link: "#",
    //     github: "#",
    //     icon: Terminal
    // },
    // {
    //     title: "ICS/OT Security Scanner",
    //     description: "Industrial Control Systems vulnerability scanner designed to identify security weaknesses in critical infrastructure environments.",
    //     tags: ["ICS/OT", "Scada", "Python", "Network Security"],
    //     link: "#",
    //     github: "#",
    //     icon: Shield
    // },
    // {
    //     title: "Active Directory Attack Simulator",
    //     description: "Comprehensive AD security testing tool that simulates various attack vectors including Kerberoasting, ASREPRoasting, and Golden Ticket attacks.",
    //     tags: ["Active Directory", "Red Teaming", "PowerShell", "C#"],
    //     link: "#",
    //     github: "#",
    //     icon: Lock
    // },
    // {
    //     title: "Malware Analysis Platform",
    //     description: "Automated malware analysis platform with static and dynamic analysis capabilities, behavioral monitoring, and threat intelligence integration.",
    //     tags: ["Malware Analysis", "Reverse Engineering", "Sandbox", "Python"],
    //     link: "#",
    //     github: "#",
    //     icon: Bug
    // },
    // {
    //     title: "Network Security Monitor",
    //     description: "Real-time network traffic analysis and threat detection system with machine learning-based anomaly detection capabilities.",
    //     tags: ["Network Security", "ML", "Traffic Analysis"],
    //     link: "#",
    //     github: "#",
    //     icon: Activity
    // },
    // {
    //     title: "Vulnerability Research Toolkit",
    //     description: "Comprehensive toolkit for vulnerability research including fuzzing frameworks, exploit development utilities, and proof-of-concept generators.",
    //     tags: ["Fuzzing", "Vulnerability Research", "Tools"],
    //     link: "#",
    //     github: "#",
    //     icon: Code
    // }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                    <span className="text-hacker-blue">./</span> Projects
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of experiments, tools, and full-stack applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="flex flex-col h-full group hover:bg-white/5">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-4 rounded-xl bg-hacker-blue/10 text-hacker-blue group-hover:scale-110 transition-transform duration-300">
                                <project.icon size={32} />
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href={project.link} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 group-hover:text-hacker-blue transition-colors">
                            {project.title}
                        </h2>

                        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-auto">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
