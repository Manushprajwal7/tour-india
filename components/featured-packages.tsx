"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedPackages } from "@/lib/packages-data";

const packages = getFeaturedPackages();

export function FeaturedPackages() {
  return (
    <section
      id="tours"
      className="w-full py-20 relative overflow-hidden -mt-20 min-h-screen isolate bg-[#f8f4e8] md:bg-[url('/discover.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            <span className="italic text-[#c9a227]">
              Discover Authentic India
            </span>
            <span className="text-black"> - Featured Packages</span>
          </h2>
          <p className="text-black/90 text-lg max-w-2xl mx-auto">
            Curated experiences showcasing the rich culture and landscapes of
            South India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-36 xl:gap-12 pt-12 max-w-7xl mx-auto px-6">
          {/* First Package Card - Kerala */}
          <div
            className="package-card-container-kerala "
            style={{ marginRight: "30px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={packages[0].image || "/placeholder.svg"}
                  alt={packages[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                  {packages[0].title}
                </h3>
                <p className="text-[#1e3a5f]/70 text-sm mb-2">
                  {packages[0].duration} | From{" "}
                  <span className="font-bold text-[#1e3a5f]">
                    {packages[0].price}
                  </span>
                </p>
                <p className="text-[#1e3a5f]/60 text-sm mb-4">
                  Highlights: {packages[0].highlights}
                </p>
                <Link
                  href={`/tour/${packages[0].id}`}
                  className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Second Package Card - Tamil Nadu */}
          <div className="package-card-container-tamilnadu">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={packages[1].image || "/placeholder.svg"}
                  alt={packages[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                  {packages[1].title}
                </h3>
                <p className="text-[#1e3a5f]/70 text-sm mb-2">
                  {packages[1].duration} | From{" "}
                  <span className="font-bold text-[#1e3a5f]">
                    {packages[1].price}
                  </span>
                </p>
                <p className="text-[#1e3a5f]/60 text-sm mb-4">
                  Highlights: {packages[1].highlights}
                </p>
                <Link
                  href={`/tour/${packages[1].id}`}
                  className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Third Package Card - Mysore */}
          <div
            className="package-card-container-mysore"
            style={{ marginLeft: "30px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "256px" }}
              >
                <Image
                  src={packages[2].image || "/placeholder.svg"}
                  alt={packages[2].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                  {packages[2].title}
                </h3>
                <p className="text-[#1e3a5f]/70 text-sm mb-2">
                  {packages[2].duration} | From{" "}
                  <span className="font-bold text-[#1e3a5f]">
                    {packages[2].price}
                  </span>
                </p>
                <p className="text-[#1e3a5f]/60 text-sm mb-4">
                  Highlights: {packages[2].highlights}
                </p>
                <Link
                  href={`/tour/${packages[2].id}`}
                  className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link
            href="/packages"
            className="inline-block bg-[#1e3a5f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2a4a6f] transition-colors"
          >
            Explore All Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
