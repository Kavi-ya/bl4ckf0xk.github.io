"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon, Code, Cpu } from 'lucide-react';
import Link from 'next/link';
import { Terminal } from '@/components/ui/Terminal';

import { useEffect } from 'react';

export function Hero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-hacker-blue/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-hacker-red/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-hacker-blue animate-pulse" />
                    <span className="text-sm font-mono text-hacker-blue">System Online</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Hello, I&apos;m <span className="shimmer-text inline-block">Kavindu Sahan</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono"
                >
                    <span className="text-hacker-red">&gt;</span> Exploit Developer
                    <br />
                    <span className="text-hacker-red">&gt;</span> ICS/OT Security Researcher
                    <br />
                    <span className="text-hacker-red">&gt;</span> Active Directory Security Specialist
                    <br />
                    <span className="text-hacker-red">&gt;</span> Satelite Security Researcher
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Link
                        href="/portfolio"
                        className="group relative px-8 py-3 bg-hacker-blue/10 border border-hacker-blue/50 text-hacker-blue font-mono rounded-lg overflow-hidden transition-all hover:bg-hacker-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/blog"
                        className="group relative px-8 py-3 bg-hacker-red/10 border border-hacker-red/50 text-hacker-red font-mono rounded-lg overflow-hidden transition-all hover:bg-hacker-red hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Blog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="hidden md:block"
                >
                    <Terminal />
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 text-white/5 hidden md:block"
                >
                    <TerminalIcon size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-10 text-white/5 hidden md:block"
                >
                    <Code size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 right-1/4 text-white/5 hidden md:block"
                >
                    <Cpu size={32} />
                </motion.div>
            </div>
        </section>
    );
}
