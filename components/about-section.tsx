"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Shield,
    title: "10+ Years",
    subtitle: "Experience",
  },
  {
    icon: Users,
    title: "Trusted by",
    subtitle: "50k+ Travelers",
  },
  {
    icon: Award,
    title: "Certified",
    subtitle: "Local Guides",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 relative overflow-hidden -mt-20 min-h-screen bg-[#f8f4e8] md:bg-[url('/aboutus.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-7 pt-30 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content - Text Content positioned in white space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:w-1/2 bg-white/0 p-2 pt-30 rounded-2xl shadow-lg"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-0 -mt-[90px]">
              <span className="font-bold">About Us:</span> Our Story
            </h2>
            <p className="text-[#1e3a5f]/100 leading-relaxed mb-0 ">
              Tour India was founded on a passion for sharing the rich cultural
              heritage and breathtaking landscapes of South India. For over a
              decade, we have curated authentic, immersive travel experiences
              that connect guests with the heart and soul of India. From the
              backwaters of Kerala to the temples of Tamil Nadu, our mission is
              to create unforgettable journeys.
            </p>
          </motion.div>

          {/* Right Content - Empty space to balance the layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            {/* This space is intentionally left blank to balance the layout */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
