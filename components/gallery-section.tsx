"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
  {
    id: 10,
    title: "Happy Customer 10",
    image: "/testimonials/WhatsApp Image 2026-03-14 at 9.40.33 AM.jpeg",
    type: "image",
  },
  {
    id: 11,
    title: "Happy Customer 11",
    image: "/testimonials/WhatsApp Image 2026-03-14 at 9.41.20 AM.jpeg",
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

        {/* Gallery Grid - Responsive layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={80}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 flex items-center text-white text-xs">
                  <Eye className="w-4 h-4 flex-shrink-0" />
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
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[60] text-white hover:text-[#c9a227] bg-black/50 rounded-full p-2 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 z-[60] text-white hover:text-[#c9a227] bg-black/50 rounded-full p-2 transition-colors"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 z-[60] text-white hover:text-[#c9a227] bg-black/50 rounded-full p-2 transition-colors"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="w-[90vw] md:w-[80vw] h-[80vh] flex items-center justify-center relative">
                <TransformWrapper
                  centerOnInit
                  initialScale={1}
                >
                  {({ zoomIn, zoomOut }) => (
                    <>
                      <div className="absolute -top-12 md:top-4 md:right-20 flex gap-2 z-[60]">
                        <button onClick={(e) => { e.stopPropagation(); zoomIn(); }} className="p-2 bg-black/50 rounded-full text-white hover:text-[#c9a227]" aria-label="Zoom in">
                          <ZoomIn className="w-6 h-6" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); zoomOut(); }} className="p-2 bg-black/50 rounded-full text-white hover:text-[#c9a227]" aria-label="Zoom out">
                          <ZoomOut className="w-6 h-6" />
                        </button>
                      </div>
                      <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%" }}>
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
                          fill
                          sizes="100vw"
                          quality={100}
                          className="object-contain"
                        />
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
