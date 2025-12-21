"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getAllPackages } from "@/lib/packages-data";
import { ChevronLeft } from "lucide-react";

const packages = getAllPackages();

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      {/* Back to Home Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1e3a5f] px-4 py-2 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* First Section - Packages 4-6 */}
      <section
        id="packages-section-1"
        className="py-20 relative overflow-hidden -mt-20 min-h-screen bg-[#f8f4e8] md:bg-[url('/discover.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/0"></div>

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
                Discover More Packages
              </span>
              <span className="text-black"> - Explore India</span>
            </h2>
            <p className="text-black/90 text-lg max-w-2xl mx-auto">
              Explore more curated experiences showcasing the rich culture and landscapes of India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-36 xl:gap-12 pt-12 max-w-7xl mx-auto px-6" style={{ transform: "translateY(-80px)" }}>
            {/* First Package Card - Goa Beach Paradise */}
            <div className="package-card-container-goa" style={{ marginRight: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[3].image || "/placeholder.svg"}
                    alt={packages[3].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[3].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[3].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[3].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[3].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[3].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Second Package Card - Karnataka Heritage */}
            <div className="package-card-container-karnataka">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[4].image || "/placeholder.svg"}
                    alt={packages[4].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[4].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[4].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[4].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[4].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[4].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Third Package Card - Andhra Coastal */}
            <div className="package-card-container-andhra" style={{ marginLeft: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ height: '256px' }}>
                  <Image
                    src={packages[5].image || "/placeholder.svg"}
                    alt={packages[5].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[5].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[5].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[5].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[5].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[5].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Packages 7-9 */}
      <section
        id="packages-section-2"
        className="py-20 relative overflow-hidden mt-0 min-h-screen bg-[#f8f4e8] md:bg-[url('/discover.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div className="absolute inset-0 bg-black/0"></div>

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
                More Adventures Await
              </span>
              <span className="text-black"> - Scroll to Explore</span>
            </h2>
            <p className="text-black/90 text-lg max-w-2xl mx-auto">
              Continue your journey through India's diverse destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-36 xl:gap-12 pt-12 max-w-7xl mx-auto px-6"  style={{ transform: "translateY(-70px)" }}>
            {/* Kerala Hill Station */}
            <div className="package-card-container-kerala-hills" style={{ marginRight: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[6].image || "/placeholder.svg"}
                    alt={packages[6].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[6].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[6].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[6].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[6].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[6].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Rajasthan */}
            <div className="package-card-container-rajasthan">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[7].image || "/placeholder.svg"}
                    alt={packages[7].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[7].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[7].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[7].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[7].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[7].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Coorg */}
            <div className="package-card-container-coorg" style={{ marginLeft: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ height: '256px' }}>
                  <Image
                    src={packages[8].image || "/placeholder.svg"}
                    alt={packages[8].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[8].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[8].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[8].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[8].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[8].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Packages 10-12 */}
      <section
        id="packages-section-3"
        className="py-20 relative overflow-hidden mt- 0 min-h-screen bg-[#f8f4e8] md:bg-[url('/discover.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div className="absolute inset-0 bg-black/0"></div>

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
                Final Collection
              </span>
              <span className="text-black"> - Complete Your Journey</span>
            </h2>
            <p className="text-black/90 text-lg max-w-2xl mx-auto">
              Discover the last set of our amazing travel packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-36 xl:gap-12 pt-12 max-w-7xl mx-auto px-6">
            {/* Pondicherry */}
            <div className="package-card-container-pondi" style={{ marginRight: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[9].image || "/placeholder.svg"}
                    alt={packages[9].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[9].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[9].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[9].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[9].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[9].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Kanyakumari */}
            <div className="package-card-container-kanyakumari">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={packages[10].image || "/placeholder.svg"}
                    alt={packages[10].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[10].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[10].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[10].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[10].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[10].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Ooty */}
            <div className="package-card-container-ooty" style={{ marginLeft: '30px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ height: '256px' }}>
                  <Image
                    src={packages[11].image || "/placeholder.svg"}
                    alt={packages[11].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    {packages[11].title}
                  </h3>
                  <p className="text-[#1e3a5f]/70 text-sm mb-2">
                    {packages[11].duration} | From{" "}
                    <span className="font-bold text-[#1e3a5f]">{packages[11].price}</span>
                  </p>
                  <p className="text-[#1e3a5f]/60 text-sm mb-4">
                    Highlights: {packages[11].highlights}
                  </p>
                  <Link
                    href={`/tour/${packages[11].id}`}
                    className="inline-block bg-[#c9a227] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b8922a] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Total count at the end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="text-black/70 text-lg mb-4">
              You've explored all <span className="font-bold text-[#1e3a5f]">{packages.length}</span> packages!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
