"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    // {
    //     title: "Neural Network Visualizer",
    //     description: "Interactive 3D visualization of neural network layers using Three.js and React.",
    //     tags: ["React", "Three.js", "WebGL"],
    //     link: "#",
    //     github: "#"
    // },
    // {
    //     title: "Crypto Algo Trader",
    //     description: "Automated trading bot with backtesting engine and real-time market analysis.",
    //     tags: ["Python", "FastAPI", "PostgreSQL"],
    //     link: "#",
    //     github: "#"
    // },
    // {
    //     title: "Secure Chat Protocol",
    //     description: "End-to-end encrypted messaging application with self-destructing messages.",
    //     tags: ["Rust", "WebAssembly", "Socket.io"],
    //     link: "#",
    //     github: "#"
    // }
    {
        title: "Assembly Programming Projects",
        description: "Made basic tools and utilities using Assembly Language.",
        tags: ["Assembly", "Windows", "Linux"],
        link: "#",
        github: "#"
    },
    {
        title: "Windows Exploit Development",
        description: "Made basic tools and utilities using Assembly Language.",
        tags: ["Assembly", "Windows", "Linux"],
        link: "#",
        github: "#"
    },
    {
        title: "ICS/OT Security Research",
        description: "Exploited SCADA systems and made tools to detect and prevent attacks.",
        tags: ["Python", "FastAPI", "PostgreSQL"],
        link: "#",
        github: "#"
    }
];

export function ProjectGrid() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold font-mono">
                    <span className="text-hacker-blue">01.</span> Featured Projects
                </h2>
                <Link href="/portfolio" className="text-sm font-mono text-gray-400 hover:text-hacker-blue transition-colors">
                    View All -&gt;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="flex flex-col h-full group">
                        <div className="mb-4 flex justify-between items-start">
                            <div className="p-3 rounded-lg bg-hacker-blue/10 text-hacker-blue">
                                <Github size={20} />
                            </div>
                            <div className="flex gap-3">
                                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-hacker-blue transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-mono text-hacker-blue/80">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
