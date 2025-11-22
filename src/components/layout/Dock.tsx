"use client";

import {
    Home,
    Terminal,
    FolderGit2,
    User,
    Mail,
    BookOpen
} from "lucide-react";
import Link from "next/link";

export function Dock() {
    // let mouseX = useMotionValue(Infinity); // Removed

    return (
        <div
            // onMouseMove={(e) => mouseX.set(e.pageX)} // Removed
            // onMouseLeave={() => mouseX.set(Infinity)} // Removed
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 mx-auto flex h-16 items-center gap-4 rounded-2xl bg-black/20 border border-white/10 px-4 backdrop-blur-xl z-50"
        >
            {dockItems.map((item) => (
                <DockIcon key={item.name} {...item} />
            ))}
        </div>
    );
}

function DockIcon({ name, path, icon: Icon }: { name: string, path: string, icon: any }) {
    // let ref = useRef<HTMLDivElement>(null); // Removed

    // let distance = useTransform(mouseX, (val) => { // Removed
    //     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }; // Removed
    //     return val - bounds.x - bounds.width / 2; // Removed
    // }); // Removed

    // let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]); // Removed
    // let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 }); // Removed

    return (
        <Link href={path}>
            <div
                // ref={ref} // Removed
                // style={{ width }} // Removed
                className="aspect-square w-10 rounded-full bg-gray-900/50 border border-white/10 flex items-center justify-center hover:bg-hacker-blue/20 transition-colors group relative"
            >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-hacker-blue transition-colors" />

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {name}
                </span>
            </div>
        </Link>
    );
}

const dockItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Portfolio', path: '/portfolio', icon: FolderGit2 },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
];
