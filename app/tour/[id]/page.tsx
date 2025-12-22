"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getPackageById, Package } from "@/lib/packages-data";
import { ChevronLeft, Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TourDetailsPage() {
  const params = useParams();
  const [tourPackage, setTourPackage] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const id = Number(params.id);
      const pkg = getPackageById(id);
      if (pkg) {
        setTourPackage(pkg);
      } else {
        notFound();
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f4e8]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1e3a5f]"></div>
      </div>
    );
  }

  if (!tourPackage) {
    return null; // or handled by notFound()
  }

  return (
    <main className="min-h-screen bg-[#f8f4e8] relative">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[url('/mobile_view.png')] md:bg-[url('/discover.png')] bg-cover bg-center bg-no-repeat"
      ></div>

      {/* Navigation */}
      <div className="fixed top-20 left-4 z-50">
        <Link
          href="/packages"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1e3a5f] px-4 py-2 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Packages
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={tourPackage.image || "/placeholder.svg"}
          alt={tourPackage.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-6xl mb-4"
            >
              {tourPackage.title}
            </motion.h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#c9a227]" />
                {tourPackage.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#1e3a5f]/10"
            >
              <h2 className="font-serif text-3xl text-[#1e3a5f] mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {tourPackage.description}
              </p>
              
              <div className="mt-8">
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-4">Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {tourPackage.highlights.split(',').map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-[#1e3a5f]/5 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium border border-[#1e3a5f]/10"
                    >
                      {highlight.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Itinerary */}
            {tourPackage.itinerary && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#1e3a5f]/10"
              >
                <h2 className="font-serif text-3xl text-[#1e3a5f] mb-8">Itinerary</h2>
                <div className="space-y-8">
                  {tourPackage.itinerary.map((day, index) => {
                    const [dayTitle, ...dayDescParts] = day.split(':');
                    const dayDesc = dayDescParts.join(':');
                    
                    return (
                      <div key={index} className="relative pl-8 border-l-2 border-[#c9a227]/30 last:border-0 pb-8 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#c9a227] ring-4 ring-white"></div>
                        <h3 className="font-bold text-lg text-[#1e3a5f] mb-2">{dayTitle}</h3>
                        <p className="text-gray-600">{dayDesc || day}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1e3a5f] text-white p-8 rounded-2xl shadow-xl overflow-hidden relative"
              >
                {/* Decorative circle */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c9a227]/20 rounded-full blur-3xl"></div>
                
                <h3 className="font-serif text-2xl mb-2">Ready to Book?</h3>
                <p className="text-white/80 mb-8">Start your journey with us today.</p>
                
                <div className="space-y-4">
                  <Link 
                    href={`/contact?package=${encodeURIComponent(tourPackage.title)}`}
                    className="block w-full text-center bg-[#c9a227] text-white py-4 rounded-xl font-bold hover:bg-[#b8922a] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Request Quote
                  </Link>
                  <a 
                    href="https://wa.me/918123458000" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white/10 backdrop-blur-sm text-white border border-white/20 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-center text-white/60">
                  <p>Customizable packages available</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
