"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./navigation";

export function HeroSection() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />

      {/* Navigation moved inside hero section */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-20">
        {/* Logo in the center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Tour India - South & North"
            width={320} // control size explicitly
            height={320}
            className="h-auto"
            priority
          />
        </motion.div>

        {/* Text content below the logo */}
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-7xl text-[#1e3a5f] leading-tight mb-0"
          >
            <b>
              <span className="italic">Dream to Travel</span>
            </b>
            <br />
            <b>
              <span className="italic">Travel to Dream </span>
            </b>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#1e3a5f]/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Explore ancient temples, lush landscapes, and vibrant cultures with
            our premium guided tours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4  mb-35 justify-center"
          >
            <Link
              href="#tours"
              onClick={(e) => handleClick(e, "#tours")}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Tours
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="inline-flex  items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
