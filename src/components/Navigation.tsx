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
    <nav className={`fixed top-5 left-140 right-140 z-50 transition-all duration-300 rounded-md bg-black/20 backdrop-blur-md border-gray-800/30`}>
        <div className="flex items-center justify-between h-14">
          
          {/* Left side - Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex gap-6 px-2 py-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-center min-w-[90px] min-h-[40px] rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'mx-auto text-white bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/20 shadow-md'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-gray-800/30">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-500 to-purple-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
