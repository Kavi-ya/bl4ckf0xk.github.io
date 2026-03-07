"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Fox.hen",
        description: "A next-generation CTF platform where attackers are judged not by how fast they pop shells, but by how intelligently, quietly, and realistically they compromise adaptive systems.",
        tags: ["TypeScript", "CTF Platform", "Red Teaming"],
        link: "https://github.com/bl4ckf0xk/Fox.hen",
        github: "https://github.com/bl4ckf0xk/Fox.hen"
    },
    {
        title: "State-Aware-API-Fuzzer",
        description: "An advanced, state-aware fuzzer designed specifically for testing complex API architectures and identifying hidden logic flaws.",
        tags: ["Fuzzing", "API Security", "Vulnerability Research"],
        link: "https://github.com/bl4ckf0xk/State-Aware-API-Fuzzer",
        github: "https://github.com/bl4ckf0xk/State-Aware-API-Fuzzer"
    },
    {
        title: "Assembly Programming Projects",
        description: "Made basic tools and utilities using Assembly Language.",
        tags: ["Assembly", "Windows", "Linux"],
        link: "#",
        github: "https://github.com/bl4ckf0xk/Assembly-Projects"
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
