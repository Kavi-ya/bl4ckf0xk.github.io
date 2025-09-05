'use client';

import { motion } from 'framer-motion';
import {Github, Linkedin} from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && vantaRef.current) {
      const vantaEffect = window.VANTA?.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0,
        midtoneColor: 0x5f5f5f,
        lowlightColor: 0x0,
        baseColor: 0x0,
        blurFactor: 0.52,
        speed: 1.90,
        zoom: 0.90
      });

      return () => {
        if (vantaEffect) {
          vantaEffect.destroy();
        }
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Vanta.js Fog Background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Main Section with Motion Effects */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            {/* Main Title */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-mono text-red-400 tracking-widest uppercase">
                  Cybersecurity Professional
                </span>
              </motion.div>
              
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black leading-none">
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Kavindu Sahan
                </motion.span>
              </h1>
              <h1 className="text-2xl sm:text-8xl lg:text-7xl font-black leading-none">
                <motion.span
                  className="block bg-gradient-to-r from-gray-100 via-gray-700 to-gray-950 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Foxꓘ
                </motion.span>
              </h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-gray-300 mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Specializing in <span className="text-red-400 font-bold">Exploit Development</span>, 
                <span className="text-gray-950 font-bold"> ICS/OT Security</span>,
                <span className="text-gray-950 font-bold"> Satellite Security</span>, and 
                <span className="text-gray-950 font-bold"> AD Security</span> 
              </motion.p>
            </div>

            <div className="h-17"></div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                href="/about"
                className="flex items-center justify-center min-h-[50px] min-w-[120px] group relative inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-md overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  About Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/works"
                className="flex items-center justify-center min-h-[50px] min-w-[120px] group inline-flex items-center px-8 py-4 border-1 border-gray-600 text-gray-300 font-semibold rounded-md hover:border-red-400 hover:text-red-400 transition-all duration-300 backdrop-blur-sm bg-black/20"
              >
                Alibi
              </Link>
            </motion.div>

            <div className="h-4"></div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center space-x-8 pt-12 gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <a href="https://github.com/bl4ckf0xk" target='_blank' className="flex items-center justify-center min-h-[40px] min-w-[40px] group p-3 rounded-full bg-gray-800/50 hover:bg-red-500/20 transition-all duration-300">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/kavindu-sahan" target='_blank' className="flex items-center justify-center min-h-[40px] min-w-[40px] group p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        
      </section>
    </div>
  );
}
