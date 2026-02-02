"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Static list of first 9 testimonial images for main gallery
const galleryItems = [
  {
    id: 1,
    title: "Happy Customer 1",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.12.59 PM.jpeg",
    type: "image",
  },
  {
    id: 2,
    title: "Happy Customer 2",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.00 PM.jpeg",
    type: "image",
  },
  {
    id: 3,
    title: "Happy Customer 3",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.01 PM.jpeg",
    type: "image",
  },
  {
    id: 4,
    title: "Happy Customer 4",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.05 PM.jpeg",
    type: "image",
  },
  {
    id: 5,
    title: "Happy Customer 5",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.08 PM.jpeg",
    type: "image",
  },
  {
    id: 6,
    title: "Happy Customer 6",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.09 PM.jpeg",
    type: "image",
  },
  {
    id: 7,
    title: "Happy Customer 7",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.10 PM (1).jpeg",
    type: "image",
  },
  {
    id: 8,
    title: "Happy Customer 8",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.10 PM.jpeg",
    type: "image",
  },
  {
    id: 9,
    title: "Happy Customer 9",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.11 PM.jpeg",
    type: "image",
  },
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

        {/* Gallery Grid - Exactly 9 images in homogeneous layout */}
        <div className="grid grid-cols-3 gap-4">
          {galleryItems.map((item, index) => {
            // Define grid classes for homogeneous layout
            let gridClass =
              "relative group cursor-pointer rounded-2xl overflow-hidden h-48";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={gridClass}
                onClick={() => setSelectedImage(index)}
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
            );
          })}
        </div>

        {/* Our Customers Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/customer-gallery"
            className="px-6 py-3 bg-[#c9a227] text-black rounded-lg hover:bg-[#b08d1d] transition-colors font-medium"
          >
            + More Happy Customers
          </Link>
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
