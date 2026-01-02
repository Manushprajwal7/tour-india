"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Moganaraj Shiva .",
    location: "Malasiya",
    rating: 5,
    quote:
      "Excellent tour arranger — guided us to the best attractions and hotels, making our trip smooth, enjoyable, and truly memorable!",
    image: "/ct1.webp",
  },
  {
    id: 2,
    name: "Ruben kuna ",
    location: "Malaysia",
    rating: 5,
    quote:
      "The trip was amazing and well organised. The organisers were very respectful and catered perfectly to our needs. We spent 8 days in india with no hiccups.",
    image: "/ct2.webp",
  },
  {
    id: 3,
    name: "Vimla.",
    location: "Malaysia",
    rating: 5,
    quote:
      "A great and friendly travel agent whom I totally rely on for our every group trip for the past 3 years. Affordable pricing and most importantly,  Thanks to Mr.Murugan and his team.",
    image: "/ct3.jpg",
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
        <div className="relative">
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
          <a
            href="https://www.google.com/search?sca_esv=e0457649d842e147&sxsrf=AE3TifNxzJtuNl75ZPTCf8MTR8jrb61a6w:1766412855279&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-isArPYFn8NwdpeFBnuu6yazdfKj2kGLEzJNLUrkIvNNlciE6QuuRy8AIlF6USa7ssk12zm5ZiUCKHAjxMUE1JEC2iMnohLYXoAZf_eZRwJTrzcDw%3D%3D&q=Tour+India+Chennai+Reviews&sa=X&ved=2ahUKEwjpw4_WsNGRAxX0UGwGHQykKzwQ0bkNegQIHxAD&biw=1536&bih=730&dpr=1.25#lrd=0x3a52f5ab2b03ebd7:0xdf56ddb5f02727dc,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-10 right-0 sm:top-0 sm:right-0 bg-[#1a73e8] hover:bg-[#1557b0] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Review Us on Google
          </a>
        </div>

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
      </div>
    </section>
  );
}
