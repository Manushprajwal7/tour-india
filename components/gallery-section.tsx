"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Happy Customer",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.33 PM.jpeg",
    type: "image",
  },
  {
    id: 2,
    title: "Satisfied Traveler",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.33 PM (1).jpeg",
    type: "image",
    featured: true,
  },
  {
    id: 3,
    title: "Amazing Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.34 PM (1).jpeg",
    type: "image",
  },
  {
    id: 4,
    title: "Great Service",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.34 PM (2).jpeg",
    type: "image",
  },
  {
    id: 5,
    title: "Wonderful Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.35 PM.jpeg",
    type: "image",
  },
  {
    id: 6,
    title: "Perfect Holiday",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.36 PM.jpeg",
    type: "image",
  },
  {
    id: 7,
    title: "Memorable Trip",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.36 PM (1).jpeg",
    type: "image",
  },
  {
    id: 8,
    title: "Outstanding Tour",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM (2).jpeg",
    type: "image",
  },
  {
    id: 9,
    title: "Fantastic Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM (3).jpeg",
    type: "image",
  },
  {
    id: 10,
    title: "Unforgettable Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.38 PM.jpeg",
    type: "image",
  },
  {
    id: 11,
    title: "Excellent Service",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.38 PM (1).jpeg",
    type: "image",
  },
  {
    id: 12,
    title: "Dream Vacation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.39 PM.jpeg",
    type: "image",
  },
  {
    id: 13,
    title: "Top Quality Tour",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.39 PM (1).jpeg",
    type: "image",
  },
  {
    id: 14,
    title: "Best Travel Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM.jpeg",
    type: "image",
  },
  {
    id: 15,
    title: "Impressive Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM (1).jpeg",
    type: "image",
  },
  {
    id: 16,
    title: "Great Memories",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM (2).jpeg",
    type: "image",
  },
  {
    id: 17,
    title: "Perfect Getaway",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM.jpeg",
    type: "image",
  },
  {
    id: 18,
    title: "Wonderful Time",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM (1).jpeg",
    type: "image",
  },
  {
    id: 19,
    title: "Spectacular Tour",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM (2).jpeg",
    type: "image",
  },
  {
    id: 21,
    title: "Excellent Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.42 PM (1).jpeg",
    type: "image",
  },
  {
    id: 22,
    title: "Amazing Holiday",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.42 PM (2).jpeg",
    type: "image",
  },
  {
    id: 23,
    title: "Great Trip",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.43 PM (1).jpeg",
    type: "image",
  },
  {
    id: 24,
    title: "Outstanding Service",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.44 PM (2).jpeg",
    type: "image",
  },
  {
    id: 25,
    title: "Perfect Vacation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM.jpeg",
    type: "image",
  },
  {
    id: 26,
    title: "Unbeatable Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM (1).jpeg",
    type: "image",
  },
  {
    id: 27,
    title: "Incredible Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM (2).jpeg",
    type: "image",
  },
  {
    id: 28,
    title: "Memorable Holiday",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM.jpeg",
    type: "image",
  },
  {
    id: 29,
    title: "Superb Tour",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (1).jpeg",
    type: "image",
  },
  {
    id: 30,
    title: "Outstanding Trip",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (2).jpeg",
    type: "image",
  },
  {
    id: 31,
    title: "Exceptional Service",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (3).jpeg",
    type: "image",
  },
  {
    id: 32,
    title: "Wonderful Vacation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM.jpeg",
    type: "image",
  },
  {
    id: 33,
    title: "Best Holiday Ever",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM (1).jpeg",
    type: "image",
  },
  {
    id: 34,
    title: "Great Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM (2).jpeg",
    type: "image",
  },
  {
    id: 35,
    title: "Perfect Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.48 PM.jpeg",
    type: "image",
  },
  {
    id: 36,
    title: "Fantastic Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.48 PM (2).jpeg",
    type: "image",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(9); // Initially show 9 images

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage <= 0
          ? Math.min(visibleCount, galleryItems.length) - 1
          : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage >= Math.min(visibleCount, galleryItems.length) - 1
          ? 0
          : selectedImage + 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 relative overflow-hidden -mt-20 min-h-screen isolate bg-[url('/mobile_view.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/background.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
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
            <span> / Our Happy Customers</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.slice(0, visibleCount).map((item, index) => {
            // Define grid classes based on position
            let gridClass =
              "relative group cursor-pointer rounded-2xl overflow-hidden";

            // Check if this is the featured item
            const isFeatured = item.featured;

            // Position-based sizing
            if (index === 1 && isFeatured) {
              // Second item is featured and should span 2x2 grid cells
              gridClass += " col-span-2 row-span-2 md:h-[420px]";
            } else if (index === 0 || index === 2) {
              // First and third items should be taller
              gridClass += " h-40";
            } else {
              // Other items should be shorter
              gridClass += " h-32";
            }

            // Calculate the actual index in the full galleryItems array
            const actualIndex = index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={gridClass}
                onClick={() => setSelectedImage(actualIndex)}
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
                {isFeatured && index === 1 && (
                  <>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play
                          className="w-8 h-8 text-[#1e3a5f] ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    {/* Carousel dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <div className="w-8 h-1 bg-[#c9a227] rounded-full" />
                      <div className="w-8 h-1 bg-white/50 rounded-full" />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryItems.length && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-[#c9a227] text-white rounded-lg hover:bg-[#b08d1d] transition-colors font-medium"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 9, galleryItems.length)
                )
              }
            >
              Load More
            </button>
          </div>
        )}
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
                src={
                  selectedImage !== null
                    ? galleryItems[selectedImage].image || "/placeholder.svg"
                    : "/placeholder.svg"
                }
                alt={
                  selectedImage !== null
                    ? galleryItems[selectedImage].title
                    : "Selected image"
                }
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-lg">
                <h3 className="font-bold">
                  {selectedImage !== null
                    ? galleryItems[selectedImage].title
                    : "Selected image"}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
