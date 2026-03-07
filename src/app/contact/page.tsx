"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="min-h-[90vh] py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-8 font-mono"
                    >
                        <span className="text-hacker-blue">Initialize</span>
                        <br />
                        <span className="text-white">Connection</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 mb-12 text-lg"
                    >
                        Have a project in mind or want to discuss security, tech, or the future of the web? Establish a secure channel below.
                    </motion.p>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="p-3 rounded-full bg-hacker-blue/10 text-hacker-blue group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500">Email</h3>
                                    <p className="text-lg font-bold">kavindusah4n@gmail.com</p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <a href="https://github.com/bl4ckf0xk" target="_blank" rel="noopener noreferrer" className="flex-1">
                                <GlassCard className="p-4 flex justify-center items-center hover:bg-white/5 transition-colors cursor-pointer group h-full">
                                    <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                                </GlassCard>
                            </a>
                            <a href="https://linkedin.com/in/kavindu-sahan" target="_blank" rel="noopener noreferrer" className="flex-1">
                                <GlassCard className="p-4 flex justify-center items-center hover:bg-white/5 transition-colors cursor-pointer group h-full">
                                    <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                                </GlassCard>
                            </a>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center"
                >
                    <GlassCard className="p-8 flex flex-col items-center justify-center">
                        <div className="relative w-64 h-64 mb-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-hacker-blue/20 to-hacker-red/20 rounded-full blur-2xl"></div>
                            <img
                                src="/profile.jpg"
                                alt="Kavindu Sahan"
                                className="relative w-full h-full rounded-full object-cover border-4 border-hacker-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                            />
                        </div>
                        <h3 className="text-2xl font-bold font-mono mb-2">Kavindu Sahan</h3>
                        <p className="text-hacker-blue font-mono text-sm mb-4">@bl4ckf0xk</p>
                        <p className="text-gray-400 text-center text-sm">
                            Exploit Developer & Security Researcher
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
