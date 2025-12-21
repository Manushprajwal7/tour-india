"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Our Packages", href: "#tours" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name:"Client Testimonials", href:"#testimonials"},
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Adjust based on your nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative px-4 py-4 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo placeholder - now moved to hero section */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1e3a5f]/95 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1e3a5f] bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#1e3a5f]/98 backdrop-blur-md rounded-2xl p-4 shadow-2xl z-40"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-white py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
