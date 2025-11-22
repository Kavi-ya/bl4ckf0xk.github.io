import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md",
                hoverEffect && "hover:border-hacker-blue/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
