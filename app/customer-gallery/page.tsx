"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Static list of all testimonial images (111 total) with descriptive titles
const allImages = [
  {
    id: 1,
    title: "Kerala Backwaters Serenity",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.12.59 PM.jpeg",
    type: "image",
  },
  {
    id: 2,
    title: "Rajasthan Royal Palace",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.00 PM.jpeg",
    type: "image",
  },
  {
    id: 3,
    title: "Goa Coastal Paradise",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.01 PM.jpeg",
    type: "image",
  },
  {
    id: 4,
    title: "Himalayan Mountain Trek",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.05 PM.jpeg",
    type: "image",
  },
  {
    id: 5,
    title: "Taj Mahal Magnificence",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.08 PM.jpeg",
    type: "image",
  },
  {
    id: 6,
    title: "Kerala Houseboat Experience",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.09 PM.jpeg",
    type: "image",
  },
  {
    id: 7,
    title: "Jaipur Fort Heritage",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.10 PM (1).jpeg",
    type: "image",
  },
  {
    id: 8,
    title: "Munnar Tea Garden Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.10 PM.jpeg",
    type: "image",
  },
  {
    id: 9,
    title: "Varanasi Spiritual Ganges",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.11 PM.jpeg",
    type: "image",
  },
  {
    id: 10,
    title: "Kerala Backwater Sunset",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.13 PM (1).jpeg",
    type: "image",
  },
  {
    id: 11,
    title: "Rajasthan Desert Safari",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.13 PM.jpeg",
    type: "image",
  },
  {
    id: 12,
    title: "Goa Beach Relaxation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.21 PM.jpeg",
    type: "image",
  },
  {
    id: 13,
    title: "Himalayan Valley Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.23 PM (1).jpeg",
    type: "image",
  },
  {
    id: 14,
    title: "Taj Mahal Sunrise Beauty",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.23 PM.jpeg",
    type: "image",
  },
  {
    id: 15,
    title: "Kerala Backwater Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.25 PM.jpeg",
    type: "image",
  },
  {
    id: 16,
    title: "Jaipur Palace Architecture",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.26 PM (1).jpeg",
    type: "image",
  },
  {
    id: 17,
    title: "Goa Portuguese Churches",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.26 PM.jpeg",
    type: "image",
  },
  {
    id: 18,
    title: "Himalayan Monastery Visit",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.28 PM.jpeg",
    type: "image",
  },
  {
    id: 19,
    title: "Rajasthan Camel Ride",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.32 PM (1).jpeg",
    type: "image",
  },
  {
    id: 20,
    title: "Kerala Spice Market",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.32 PM.jpeg",
    type: "image",
  },
  {
    id: 21,
    title: "Taj Mahal Reflections",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.33 PM.jpeg",
    type: "image",
  },
  {
    id: 22,
    title: "Goa Night Markets",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.35 PM (1).jpeg",
    type: "image",
  },
  {
    id: 23,
    title: "Himalayan Trekking Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.35 PM.jpeg",
    type: "image",
  },
  {
    id: 24,
    title: "Rajasthan Traditional Dance",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.36 PM.jpeg",
    type: "image",
  },
  {
    id: 25,
    title: "Kerala Ayurvedic Spa",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.37 PM.jpeg",
    type: "image",
  },
  {
    id: 26,
    title: "Goa Water Sports",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.49 PM.jpeg",
    type: "image",
  },
  {
    id: 27,
    title: "Himalayan Sunrise Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.50 PM.jpeg",
    type: "image",
  },
  {
    id: 28,
    title: "Rajasthan Handicrafts",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.52 PM.jpeg",
    type: "image",
  },
  {
    id: 29,
    title: "Kerala Traditional Boat Race",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.13.53 PM.jpeg",
    type: "image",
  },
  {
    id: 30,
    title: "Goa Fort History",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.09 PM (1).jpeg",
    type: "image",
  },
  {
    id: 31,
    title: "Himalayan Village Life",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.09 PM.jpeg",
    type: "image",
  },
  {
    id: 32,
    title: "Rajasthan Jewelry Making",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.10 PM.jpeg",
    type: "image",
  },
  {
    id: 33,
    title: "Kerala Temple Architecture",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.11 PM.jpeg",
    type: "image",
  },
  {
    id: 34,
    title: "Goa Lighthouse Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.12 PM.jpeg",
    type: "image",
  },
  {
    id: 35,
    title: "Himalayan Wildlife",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.13 PM (1).jpeg",
    type: "image",
  },
  {
    id: 36,
    title: "Rajasthan Puppet Show",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.13 PM.jpeg",
    type: "image",
  },
  {
    id: 37,
    title: "Kerala Kathakali Dance",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.14 PM (1).jpeg",
    type: "image",
  },
  {
    id: 38,
    title: "Goa Church Interior",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.14 PM.jpeg",
    type: "image",
  },
  {
    id: 39,
    title: "Himalayan Monastery Prayer",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.15 PM (1).jpeg",
    type: "image",
  },
  {
    id: 40,
    title: "Rajasthan Textile Weaving",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.15 PM.jpeg",
    type: "image",
  },
  {
    id: 41,
    title: "Kerala Spice Plantation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.16 PM.jpeg",
    type: "image",
  },
  {
    id: 42,
    title: "Goa Beach Shacks",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.17 PM (1).jpeg",
    type: "image",
  },
  {
    id: 43,
    title: "Himalayan Mountain Peaks",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.17 PM.jpeg",
    type: "image",
  },
  {
    id: 44,
    title: "Rajasthan Pottery Making",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.18 PM (1).jpeg",
    type: "image",
  },
  {
    id: 45,
    title: "Kerala Traditional Fishing",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.18 PM.jpeg",
    type: "image",
  },
  {
    id: 46,
    title: "Goa Dolphin Watching",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.19 PM.jpeg",
    type: "image",
  },
  {
    id: 47,
    title: "Himalayan Trekking Gear",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.20 PM.jpeg",
    type: "image",
  },
  {
    id: 48,
    title: "Rajasthan Stone Carving",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.21 PM (1).jpeg",
    type: "image",
  },
  {
    id: 49,
    title: "Kerala Traditional Dance",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.21 PM.jpeg",
    type: "image",
  },
  {
    id: 50,
    title: "Goa Sunset Photography",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.22 PM (1).jpeg",
    type: "image",
  },
  {
    id: 51,
    title: "Himalayan Valley Flowers",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.22 PM (2).jpeg",
    type: "image",
  },
  {
    id: 52,
    title: "Rajasthan Traditional Music",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.22 PM.jpeg",
    type: "image",
  },
  {
    id: 53,
    title: "Kerala Backwater Birds",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.23 PM (1).jpeg",
    type: "image",
  },
  {
    id: 54,
    title: "Goa Church Bell Tower",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.23 PM.jpeg",
    type: "image",
  },
  {
    id: 55,
    title: "Himalayan Mountain Village",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.24 PM.jpeg",
    type: "image",
  },
  {
    id: 56,
    title: "Rajasthan Traditional Crafts",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.14.25 PM.jpeg",
    type: "image",
  },
  {
    id: 57,
    title: "Kerala Houseboat Interior",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.33 PM (1).jpeg",
    type: "image",
  },
  {
    id: 58,
    title: "Goa Beach Yoga",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.33 PM.jpeg",
    type: "image",
  },
  {
    id: 59,
    title: "Himalayan Trekking Trail",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.34 PM (1).jpeg",
    type: "image",
  },
  {
    id: 60,
    title: "Rajasthan Palace Gardens",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.34 PM (2).jpeg",
    type: "image",
  },
  {
    id: 61,
    title: "Kerala Backwater Fishing",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.34 PM.jpeg",
    type: "image",
  },
  {
    id: 62,
    title: "Goa Beach Volleyball",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.35 PM (1).jpeg",
    type: "image",
  },
  {
    id: 63,
    title: "Himalayan Mountain Sunrise",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.35 PM.jpeg",
    type: "image",
  },
  {
    id: 64,
    title: "Rajasthan Traditional Cooking",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.36 PM (1).jpeg",
    type: "image",
  },
  {
    id: 65,
    title: "Kerala Temple Festival",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.36 PM (2).jpeg",
    type: "image",
  },
  {
    id: 66,
    title: "Goa Beach Party",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.36 PM.jpeg",
    type: "image",
  },
  {
    id: 67,
    title: "Himalayan Mountain Flowers",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM (1).jpeg",
    type: "image",
  },
  {
    id: 68,
    title: "Rajasthan Traditional Jewelry",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM (2).jpeg",
    type: "image",
  },
  {
    id: 69,
    title: "Kerala Backwater Sunset",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM (3).jpeg",
    type: "image",
  },
  {
    id: 70,
    title: "Goa Beach Relaxation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.37 PM.jpeg",
    type: "image",
  },
  {
    id: 71,
    title: "Himalayan Mountain Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.38 PM (1).jpeg",
    type: "image",
  },
  {
    id: 72,
    title: "Rajasthan Palace Architecture",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.38 PM (2).jpeg",
    type: "image",
  },
  {
    id: 73,
    title: "Kerala Traditional Boating",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.38 PM.jpeg",
    type: "image",
  },
  {
    id: 74,
    title: "Goa Beach Sports",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.39 PM (1).jpeg",
    type: "image",
  },
  {
    id: 75,
    title: "Himalayan Trekking Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.39 PM (2).jpeg",
    type: "image",
  },
  {
    id: 76,
    title: "Rajasthan Desert Camping",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.39 PM.jpeg",
    type: "image",
  },
  {
    id: 77,
    title: "Kerala Backwater Houseboat",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM (1).jpeg",
    type: "image",
  },
  {
    id: 78,
    title: "Goa Beach Photography",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM (2).jpeg",
    type: "image",
  },
  {
    id: 79,
    title: "Himalayan Mountain Trek",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.40 PM.jpeg",
    type: "image",
  },
  {
    id: 80,
    title: "Rajasthan Palace Gardens",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM (1).jpeg",
    type: "image",
  },
  {
    id: 81,
    title: "Kerala Traditional Dance",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM (2).jpeg",
    type: "image",
  },
  {
    id: 82,
    title: "Goa Beach Sunset",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.41 PM.jpeg",
    type: "image",
  },
  {
    id: 83,
    title: "Himalayan Mountain Peak",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.42 PM (1).jpeg",
    type: "image",
  },
  {
    id: 84,
    title: "Rajasthan Traditional Crafts",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.42 PM (2).jpeg",
    type: "image",
  },
  {
    id: 85,
    title: "Kerala Backwater Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.42 PM.jpeg",
    type: "image",
  },
  {
    id: 86,
    title: "Goa Beach Activities",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.43 PM (1).jpeg",
    type: "image",
  },
  {
    id: 87,
    title: "Himalayan Mountain Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.43 PM (2).jpeg",
    type: "image",
  },
  {
    id: 88,
    title: "Rajasthan Palace Interior",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.43 PM.jpeg",
    type: "image",
  },
  {
    id: 89,
    title: "Kerala Traditional Fishing",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.44 PM (1).jpeg",
    type: "image",
  },
  {
    id: 90,
    title: "Goa Beach Relaxation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.44 PM (2).jpeg",
    type: "image",
  },
  {
    id: 91,
    title: "Himalayan Mountain Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.44 PM.jpeg",
    type: "image",
  },
  {
    id: 92,
    title: "Rajasthan Desert Safari",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM (1).jpeg",
    type: "image",
  },
  {
    id: 93,
    title: "Kerala Backwater Sunset",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM (2).jpeg",
    type: "image",
  },
  {
    id: 94,
    title: "Goa Beach Paradise",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.45 PM.jpeg",
    type: "image",
  },
  {
    id: 95,
    title: "Himalayan Mountain Trek",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (1).jpeg",
    type: "image",
  },
  {
    id: 96,
    title: "Rajasthan Palace Gardens",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (2).jpeg",
    type: "image",
  },
  {
    id: 97,
    title: "Kerala Traditional Boating",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM (3).jpeg",
    type: "image",
  },
  {
    id: 98,
    title: "Goa Beach Activities",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.46 PM.jpeg",
    type: "image",
  },
  {
    id: 99,
    title: "Himalayan Mountain Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM (1).jpeg",
    type: "image",
  },
  {
    id: 100,
    title: "Rajasthan Traditional Dance",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM (2).jpeg",
    type: "image",
  },
  {
    id: 101,
    title: "Kerala Backwater Journey",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.47 PM.jpeg",
    type: "image",
  },
  {
    id: 102,
    title: "Goa Beach Photography",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.48 PM (1).jpeg",
    type: "image",
  },
  {
    id: 103,
    title: "Himalayan Mountain Adventure",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.48 PM (2).jpeg",
    type: "image",
  },
  {
    id: 104,
    title: "Rajasthan Palace Architecture",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.46.48 PM.jpeg",
    type: "image",
  },
  {
    id: 105,
    title: "Kerala Traditional Crafts",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.49.46 PM.jpeg",
    type: "image",
  },
  {
    id: 106,
    title: "Goa Beach Relaxation",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.53.15 PM.jpeg",
    type: "image",
  },
  {
    id: 107,
    title: "Himalayan Mountain Trek",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.55.11 PM.jpeg",
    type: "image",
  },
  {
    id: 108,
    title: "Rajasthan Desert Camping",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.57.36 PM.jpeg",
    type: "image",
  },
  {
    id: 109,
    title: "Kerala Backwater Sunset",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.59.34 PM (1).jpeg",
    type: "image",
  },
  {
    id: 110,
    title: "Goa Beach Paradise",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.59.34 PM.jpeg",
    type: "image",
  },
  {
    id: 111,
    title: "Himalayan Mountain Views",
    image: "/testimonials/WhatsApp Image 2026-02-01 at 1.59.35 PM.jpeg",
    type: "image",
  },
  {
    id: 112,
    title: "Happy Customer 112",
    image: "/testimonials/WhatsApp Image 2026-03-14 at 9.40.33 AM.jpeg",
    type: "image",
  },
  {
    id: 113,
    title: "Happy Customer 113",
    image: "/testimonials/WhatsApp Image 2026-03-14 at 9.41.20 AM.jpeg",
    type: "image",
  },
  {
    id: 114,
    title: "Happy Customer 114",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.09.43 PM (1).jpeg",
    type: "image",
  },
  {
    id: 115,
    title: "Happy Customer 115",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.09.43 PM.jpeg",
    type: "image",
  },
  {
    id: 116,
    title: "Happy Customer 116",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.09.44 PM (1).jpeg",
    type: "image",
  },
  {
    id: 117,
    title: "Happy Customer 117",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.09.44 PM.jpeg",
    type: "image",
  },
  {
    id: 118,
    title: "Happy Customer 118",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.09.45 PM.jpeg",
    type: "image",
  },
  {
    id: 119,
    title: "Happy Customer 119",
    image: "/testimonials/WhatsApp Image 2026-03-28 at 8.36.34 PM.jpeg",
    type: "image",
  },
  {
    id: 120,
    title: "Happy Customer 120",
    image: "/testimonials/WhatsApp Image 2026-03-30 at 5.34.17 PM.jpeg",
    type: "image",
  },
];

export default function CustomerGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Group images into sections of 9
  const groupedImages = [];
  for (let i = 0; i < allImages.length; i += 9) {
    groupedImages.push(allImages.slice(i, i + 9));
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage <= 0 ? allImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage >= allImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-white rounded-lg hover:bg-[#b08d1d] transition-colors font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home Page
        </Link>
      </div>

      {/* Gallery Sections */}
      {groupedImages.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="w-full py-20 relative overflow-hidden min-h-screen isolate bg-[url('/mobile_view.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/background.png')] md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat"
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
                <span className="italic text-[#c9a227]">Our Happy</span>
                <span> Customers - Part {sectionIndex + 1}</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the wonderful experiences our customers have had with
                us
              </p>
            </motion.div>

            {/* Gallery Grid - Exactly 9 images in homogeneous 3x3 layout */}
            <div className="grid grid-cols-3 gap-4">
              {section.map((item, index) => {
                // Define grid classes for homogeneous layout
                let gridClass =
                  "relative group cursor-pointer rounded-2xl overflow-hidden h-48";

                // Make the first item in each section featured (except first section where item 2 is featured)
                const isFeatured = sectionIndex === 0 && index === 1;

                // Calculate global index for lightbox
                const globalIndex = sectionIndex * 9 + index;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={gridClass}
                    onClick={() => setSelectedImage(globalIndex)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 flex items-center text-white text-xs z-20">
                      {!isFeatured && <Eye className="w-4 h-4 flex-shrink-0" />}
                    </div>
                    {isFeatured && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Eye className="w-6 h-6 text-[#1e3a5f]" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
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
                      src={allImages[selectedImage]?.image || "/placeholder.svg"}
                      alt={allImages[selectedImage]?.title || "Selected image"}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      quality={100}
                     />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </div>
  );
}
