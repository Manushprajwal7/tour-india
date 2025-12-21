"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Rajasthan Forts",
    image: "/rajasthan-fort-amber-palace-golden-sunset-ancient-.jpg",
    type: "image",
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    image: "/kerala-backwaters-houseboat-palm-trees-serene-wate.jpg",
    type: "video",
    featured: true,
  },
  {
    id: 3,
    title: "Goa Beaches",
    image: "/goa-beach-sunset-palm-trees-colorful-fishing-boats.jpg",
    type: "image",
  },
  {
    id: 4,
    title: "Hampi Temple",
    image: "/hampi-ancient-temple-ruins-stone-chariot-karnataka.jpg",
    type: "image",
  },
  {
    id: 5,
    title: "Kochi Fishing Nets",
    image: "/chinese-fishing-nets-kochi-sunset-kerala-tradition.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Puducherry French Quarter",
    image: "/pondicherry-french-colony-colorful-colonial-buildi.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "Munnar Tea Gardens",
    image: "/munnar-tea.png",
    type: "image",
  },
  {
    id: 8,
    title: "Mysore Palace",
    image: "/mysore-palace-illuminated-at-night--grand-royal-in.jpg",
    type: "image",
  },
  {
    id: 9,
    title: "Alleppey Houseboat",
    image: "/kerala-houseboat-on-backwaters-with-palm-trees--se.jpg",
    type: "image"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 relative overflow-hidden -mt-20 min-h-screen isolate bg-[#f8f4e8] md:bg-[url('/background.png')] md:bg-cover md:bg-center md:bg-no-repeat"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mb-4">
            <span className="italic text-[#c9a227]">Gallery</span>
            <span> / Video Showcase</span>
          </h2>
          <p className="text-[#1e3a5f]/70 text-lg max-w-2xl mx-auto">
            Explore the vibrant sights and sounds of South India through our
            curated visual collection.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Featured Video - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative group cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => setSelectedImage(1)}
          >
            <Image
              src={galleryItems[1].image || "/placeholder.svg"}
              alt={galleryItems[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play
                  className="w-8 h-8 text-[#1e3a5f] ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">{galleryItems[1].title}</h3>
            </div>
            {/* Carousel dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-8 h-1 bg-[#c9a227] rounded-full" />
              <div className="w-8 h-1 bg-white/50 rounded-full" />
            </div>
          </motion.div>

          {/* Side images */}
          {[galleryItems[0], galleryItems[2]].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden h-40"
              onClick={() => setSelectedImage(item.id - 1)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-sm">
                <span>{item.title}</span>
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}

          {/* Bottom row images */}
          {galleryItems.slice(3, 11).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden h-32"
              onClick={() => setSelectedImage(item.id - 1)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-xs">
                <span className="truncate">{item.title}</span>
                <Eye className="w-3 h-3 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#c9a227] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-[#c9a227] transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-[#c9a227] transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedImage].image || "/placeholder.svg"}
                alt={galleryItems[selectedImage].title}
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-lg">
                <h3 className="font-bold">
                  {galleryItems[selectedImage].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
