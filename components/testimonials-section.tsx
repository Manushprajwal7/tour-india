"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    location: "USA",
    rating: 4,
    quote:
      "Kerala was a dream come true. Cultural performances and landscapes were curated beautifully. An unforgettable journey.",
    image: "/testimonial-sarah.png",
  },
  {
    id: 2,
    name: "Emily & James",
    location: "UK",
    rating: 5,
    quote:
      "Our South India tour was absolutely magical! Every detail from the houseboat to the temple visits was perfect. Highly recommend Tour India!",
    image: "/testimonial-emily-james.jpg",
  },
  {
    id: 3,
    name: "David K.",
    location: "Australia",
    rating: 4,
    quote:
      "The adventure of a lifetime! The trekking tour in Hampi was incredible. Our guide was fantastic and ensured safety.",
    image: "/testimonial-david.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="w-full block py-20 relative overflow-hidden -mt-20 min-h-screen isolate bg-[#f8f4e8] md:bg-[url('/background.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      {/* Decorative Palm Trees */}
      <div className="absolute left-0 bottom-0 opacity-30">
        <Image
          src="/placeholder.svg?height=200&width=100"
          alt=""
          width={100}
          height={200}
        />
      </div>
      <div className="absolute right-0 bottom-0 opacity-30 transform scale-x-[-1]">
        <Image
          src="/placeholder.svg?height=200&width=100"
          alt=""
          width={100}
          height={200}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] mb-4">
            <span className="font-bold">Tour India</span>
            <span> - Client Testimonials</span>
          </h2>
          <p className="text-[#1e3a5f]/70 text-lg max-w-2xl mx-auto">
            Discover the experiences of guests who explored Incredible India,
            especially the South, with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center gap-4 pt-40 py-8">
          {testimonials.map((testimonial, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;
            const isVisible =
              Math.abs(position) <= 1 ||
              (currentIndex === 0 && index === testimonials.length - 1) ||
              (currentIndex === testimonials.length - 1 && index === 0);

            let adjustedPosition = position;
            if (currentIndex === 0 && index === testimonials.length - 1)
              adjustedPosition = -1;
            if (currentIndex === testimonials.length - 1 && index === 0)
              adjustedPosition = 1;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  scale: isCenter ? 1 : 0.85,
                  opacity: isVisible ? (isCenter ? 1 : 0.7) : 0,
                  x: adjustedPosition * 280,
                  zIndex: isCenter ? 10 : 5,
                }}
                transition={{ duration: 0.5 }}
                className="absolute bg-white rounded-2xl overflow-hidden shadow-xl w-72"
              >
                <div className="relative h-48">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-[#1e3a5f]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#1e3a5f]/60">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-[#c9a227] fill-[#c9a227]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#1e3a5f]/70 italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Navigation buttons on center card */}
                {isCenter && (
                  <>
                    <button
                      onClick={handlePrevious}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#1e3a5f]" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-[#1e3a5f]" />
                    </button>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Read More Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="#reviews"
            className="inline-block border-2 border-[#1e3a5f] text-[#1e3a5f] px-8 py-3 rounded-full font-medium hover:bg-[#1e3a5f] hover:text-white transition-colors"
          >
            Read More Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
