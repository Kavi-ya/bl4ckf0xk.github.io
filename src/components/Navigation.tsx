'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/works' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-60 transition-all duration-300 rounded-md bg-black/20 backdrop-blur-md border border-gray-800/30">
        <div className="flex items-center justify-center h-14 w-100 px-8">
          <div className="flex gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-center min-w-[90px] min-h-[40px] rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/20 shadow-md'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
