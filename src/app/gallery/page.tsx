"use client";

import { useState, useRef, useEffect } from "react";
import CryptoJS from "crypto-js";
import { encryptedGalleryData } from "@/lib/gallery-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal, Lock, AlertTriangle, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
    const [flagInput, setFlagInput] = useState("");
    const [error, setError] = useState("");
    const [images, setImages] = useState<string[] | null>(null);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scanningIndex, setScanningIndex] = useState<number | null>(null);
    const [scanProgress, setScanProgress] = useState(0);
    
    const scanTimer = useRef<NodeJS.Timeout | null>(null);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const bytes = CryptoJS.AES.decrypt(encryptedGalleryData, flagInput);
            const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

            if (!decryptedString) throw new Error();
            const parsedImages = JSON.parse(decryptedString);
            
            setImages(parsedImages);
            setIsUnlocked(true);
        } catch (err) {
            setError("ACCESS DENIED: INVAILD FLAG SIGNATURE");
            setFlagInput("");
        }
    };

    const startScan = (index: number) => {
        setScanningIndex(index);
        setScanProgress(0);
        
        let progress = 0;
        const interval = 20; // 20ms steps
        const totalDuration = 2000; // 2 seconds
        
        if (scanTimer.current) clearInterval(scanTimer.current);
        
        scanTimer.current = setInterval(() => {
            progress += (interval / totalDuration) * 100;
            if (progress >= 100) {
                setScanProgress(100);
                setHoveredIndex(index);
                setScanningIndex(null);
                if (scanTimer.current) clearInterval(scanTimer.current);
            } else {
                setScanProgress(progress);
            }
        }, interval);
    };

    const cancelScan = () => {
        if (scanTimer.current) clearInterval(scanTimer.current);
        setScanningIndex(null);
        setScanProgress(0);
    };

    if (isUnlocked && images) {
        return (
            <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black py-24 px-4 sm:px-8 lg:px-12 relative overflow-x-hidden">
                {/* Background Cyber Grid */}
                <div className="fixed inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
                
                {/* Vault Header */}
                <div className="relative z-10 mb-16">
                    <h1 className="text-4xl md:text-5xl font-black font-mono tracking-tighter shimmer-text">
                        VAULT_DATABASE
                    </h1>
                    <p className="text-hacker-blue font-mono text-xs mt-2 tracking-[0.4em] opacity-70">
                        &gt; [DELIBERATE_ACCESS_ENABLED: 2.0s_HOLD]
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-10">
                    {images.map((imgSrc, index) => (
                        <motion.div 
                            key={index} 
                            layoutId={`img-container-${index}`}
                            onMouseEnter={() => startScan(index)}
                            onMouseLeave={cancelScan}
                            className="relative aspect-[3/4] overflow-hidden cursor-progress bg-zinc-900 rounded-lg border border-white/5 group"
                        >
                            <Image 
                                src={imgSrc} 
                                alt={`Vault Item ${index}`}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                className={`object-cover transition-all duration-500 ${scanningIndex === index ? 'opacity-40 grayscale blur-sm' : 'opacity-80 group-hover:opacity-100'}`}
                            />

                            {/* Scanning Progress Bar */}
                            {scanningIndex === index && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10 overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${scanProgress}%` }}
                                        className="h-full bg-hacker-blue shadow-[0_0_10px_#00f0ff]"
                                    />
                                </div>
                            )}

                            {/* Scanning Label */}
                            {scanningIndex === index && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <div className="text-[10px] text-hacker-blue animate-pulse mb-1">SCANNING_HASH...</div>
                                    <div className="text-[12px] font-bold text-white tracking-widest">{Math.round(scanProgress)}%</div>
                                </div>
                            )}

                            <div className="absolute bottom-2 left-2 px-1 bg-black/60 text-[8px] text-white/50 tracking-widest z-10">
                                #{index.toString().padStart(3, '0')}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hover Center Zoom Overlay */}
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <div 
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                        >
                            {/* Backdrop - Click to Close */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setHoveredIndex(null)}
                                className="absolute inset-0 bg-black/95 cursor-zoom-out"
                            />

                            {/* Close Button */}
                            <button 
                                onClick={() => setHoveredIndex(null)}
                                className="absolute top-8 right-8 z-[110] p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white/50 hover:text-white transition-all duration-300"
                            >
                                <X size={32} />
                            </button>

                            {/* Center Zoomed Image */}
                            <motion.div 
                                layoutId={`img-container-${hoveredIndex}`}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 35,
                                    mass: 0.5
                                }}
                                className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10 will-change-transform transform-gpu"
                            >
                                <motion.img 
                                    layoutId={`img-${hoveredIndex}`}
                                    src={images[hoveredIndex]} 
                                    className="w-full h-full object-contain bg-black/40"
                                />
                                
                                {/* Scanline overlay */}
                                <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90" />

                                {/* Text Overlays */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none"
                                >
                                    <div className="mb-4 px-2 py-0.5 border border-hacker-blue/30 bg-hacker-blue/5 rounded-[2px] text-[10px] text-hacker-blue tracking-[0.6em] font-bold uppercase flex items-center gap-2">
                                        <ShieldCheck size={12} />
                                        <span>ACCESS_VERIFIED</span>
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-7xl font-black italic tracking-tighter text-white uppercase drop-shadow-xl">
                                        ARCHIVE_{hoveredIndex.toString().padStart(4, '0')}
                                    </h2>
                                    
                                    <div className="h-[1px] w-24 bg-hacker-blue/30 my-6" />
                                    
                                    <div className="space-y-1 font-mono text-hacker-blue/70 text-[10px] md:text-xs tracking-widest flex flex-col items-center">
                                        <p>&gt; ID: {images[hoveredIndex].split('/').pop()}</p>
                                        <p>&gt; HASH: SHA-256_{Math.random().toString(36).substring(7).toUpperCase()}</p>
                                        <p>&gt; STATUS: DECRYPTED</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <style jsx global>{`
                    body { overflow-x: hidden; }
                `}</style>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center px-4 min-h-[calc(100vh-12rem)]">
            <div className="w-full max-w-lg">
                <GlassCard className="p-8 border-hacker-red/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hacker-red/5 to-transparent bg-[length:100%_4px] opacity-20 pointer-events-none" />
                    <div className="flex items-center gap-3 mb-6">
                        <Lock className="text-hacker-red animate-pulse" size={28} />
                        <h1 className="text-2xl font-bold font-mono text-hacker-red">SECURE_STORAGE_MODULE</h1>
                    </div>
                    <p className="text-gray-400 font-mono text-sm mb-8 leading-relaxed">
                        &gt; WARNING: UNAUTHORIZED ACCESS PROHIBITED.<br/>
                        &gt; TARGET DIRECTORY: /vault<br/>
                        &gt; ENCRYPTION: AES-256-CBC<br/>
                        &gt; PLEASE PROVIDE AUTHENTICATION FLAG.
                    </p>
                    <form onSubmit={handleUnlock} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Terminal className="text-gray-500" size={16} />
                            </div>
                            <input
                                type="text"
                                value={flagInput}
                                onChange={(e) => setFlagInput(e.target.value)}
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-hacker-red focus:ring-1 focus:ring-hacker-red transition-colors"
                                placeholder="bl4ckf0xk{...}"
                                spellCheck="false"
                                autoFocus
                            />
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-hacker-red font-mono text-sm animate-bounce">
                                <AlertTriangle size={14} />
                                <span>{error}</span>
                            </div>
                        )}
                        <button type="submit" className="w-full bg-hacker-red/10 hover:bg-hacker-red/20 border border-hacker-red/50 hover:border-hacker-red text-hacker-red font-mono py-3 rounded-lg transition-all duration-300">
                            DECRYPT_ARCHIVE
                        </button>
                    </form>
                </GlassCard>
            </div>
        </div>
    );
}
