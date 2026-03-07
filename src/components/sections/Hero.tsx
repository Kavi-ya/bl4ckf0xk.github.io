"use client";

import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

import { useEffect } from 'react';
import { DNA3D } from './DNA3D';

export function Hero() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 bg-[#0a0a0a]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hacker-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-hacker-red/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0a0a0a 100%)' }} />
            </div>

            {/* 3D DNA Canvas & Tooltips */}
            <DNA3D />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">



                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-900/60 bg-[#0a0a0a]/80 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                >
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse" />
                    <span className="text-sm font-mono text-[#22c55e]">System Online</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tight text-[#e2e8f0] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center relative z-20"
                >
                    Hello, I&apos;m Kavindu Sahan
                </motion.h1>

                {/* Central Roles Container */}
                <div className="relative w-full max-w-4xl flex justify-center mb-20 z-20 font-mono text-lg md:text-xl lg:text-2xl text-gray-400">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-start gap-4 text-left relative"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-hacker-red font-bold text-xl">{'>'}</span>
                            <span className="text-slate-300 tracking-wide">Exploit Developer</span>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                            <span className="text-hacker-red font-bold text-xl">{'>'}</span>
                            <span className="text-slate-300 tracking-wide">ICS/OT Security Researcher</span>
                        </div>
                        <div className="flex items-center gap-3 ml-8">
                            <span className="text-hacker-red font-bold text-xl">{'>'}</span>
                            <span className="text-slate-300 tracking-wide">Active Directory Security Specialist</span>
                        </div>
                        <div className="flex items-center gap-3 ml-12">
                            <span className="text-hacker-red font-bold text-xl">{'>'}</span>
                            <span className="text-slate-300 tracking-wide">Satelite Security Researcher</span>
                        </div>
                    </motion.div>
                </div>

                {/* Call To Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 z-20"
                >
                    <Link
                        href="/portfolio"
                        className="group relative px-8 py-4 bg-[#051416]/80 border border-hacker-blue/40 text-hacker-blue font-mono rounded-lg overflow-hidden transition-all hover:bg-hacker-blue/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-md"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/blog"
                        className="group relative px-8 py-4 bg-[#1a0505]/80 border border-hacker-red/40 text-hacker-red font-mono rounded-lg overflow-hidden transition-all hover:bg-hacker-red/10 shadow-[0_0_15px_rgba(255,0,60,0.1)] hover:shadow-[0_0_25px_rgba(255,0,60,0.25)] backdrop-blur-md"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Blog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>


        </section>
    );
}
