"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={clsx("relative inline-block", className)}>
            <span className="relative z-10">{text}</span>
            {isGlitching && (
                <>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-hacker-red opacity-70"
                        initial={{ x: 0 }}
                        animate={{ x: [-2, 2, -1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-hacker-blue opacity-70"
                        initial={{ x: 0 }}
                        animate={{ x: [2, -2, 1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
