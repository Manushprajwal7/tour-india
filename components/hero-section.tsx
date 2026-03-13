"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./navigation";

// ─── Configuration ──────────────────────────────────────────────
const TOTAL_FRAMES = 120;
const HERO_SCROLL_HEIGHT = "300vh"; // Total scroll area for the animation
const CONTENT_FADE_END = 0.15; // Content overlay fades out over first 15% of scroll

/**
 * Generate the path for a given frame index (1-based).
 * Files are named: ezgif-frame-001.jpg … ezgif-frame-120.jpg
 */
function framePath(index: number): string {
  return `/hero_frames/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
}

// ─── Component ──────────────────────────────────────────────────
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);

  // ── Smooth anchor scroll handler (unchanged from original) ──
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // ── Draw a single frame to canvas with cover-fit scaling ──
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    // Clear and fill background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Use the actual CSS pixel dimensions (before DPR scaling)
    const displayWidth = canvas.width / (window.devicePixelRatio || 1);
    const displayHeight = canvas.height / (window.devicePixelRatio || 1);

    // Stretch-to-fill: draw the image to cover the entire canvas
    // This ensures the full image is visible without any cropping
    ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
  }, []);

  // ── Resize canvas to match viewport (Retina-aware) ──
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Redraw current frame at new size
    if (imagesRef.current.length > 0) {
      drawFrame(currentFrameRef.current);
    }
  }, [drawFrame]);

  // ── Preload all frames ──
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    const images: HTMLImageElement[] = [];

    const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new window.Image();
        img.src = framePath(i + 1);
        img.onload = () => {
          if (cancelled) return;
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          resolve(img);
        };
        img.onerror = reject;
        images.push(img);
      });
    });

    Promise.all(promises)
      .then((loadedImages) => {
        if (cancelled) return;
        imagesRef.current = loadedImages;
        setIsLoaded(true);
        // Draw first frame
        resizeCanvas();
        drawFrame(0);
      })
      .catch((err) => {
        console.error("Failed to preload hero frames:", err);
      });

    return () => {
      cancelled = true;
    };
  }, [resizeCanvas, drawFrame]);

  // ── Scroll handler: map scroll position → frame index ──
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      if (rafIdRef.current !== null) return; // Debounce via rAF

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;

        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = -rect.top; // How far we've scrolled past section top
        const scrollableHeight = section.offsetHeight - window.innerHeight;

        // Calculate scroll progress [0 … 1] within the hero section
        const progress = Math.min(
          Math.max(sectionTop / scrollableHeight, 0),
          1
        );

        // Map to frame index
        const frameIndex = Math.min(
          Math.floor(progress * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );

        // Only redraw if frame changed
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        // Fade out content overlay during first portion of scroll
        const opacity =
          progress <= CONTENT_FADE_END
            ? 1 - progress / CONTENT_FADE_END
            : 0;
        setContentOpacity(opacity);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isLoaded, drawFrame]);

  // ── Window resize handler (debounced) ──
  useEffect(() => {
    if (!isLoaded) return;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    resizeCanvas(); // Initial sizing

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isLoaded, resizeCanvas]);

  return (
    <section
      ref={sectionRef}
      className="hero-scroll-section"
      style={{ height: HERO_SCROLL_HEIGHT }}
    >
      {/* Sticky container: stays in viewport while scrolling through 300vh */}
      <div className="hero-sticky-container">
        {/* ── Loading overlay ── */}
        {!isLoaded && (
          <div className="hero-loading">
            <div className="hero-loading-inner">
              <div className="hero-spinner" />
              <p className="hero-loading-text">
                Loading experience… {loadProgress}%
              </p>
              <div className="hero-progress-bar">
                <div
                  className="hero-progress-fill"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Canvas for frame animation ── */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* ── Navigation (always visible at top) ── */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* ── Content overlay (fades out as user scrolls) ── */}
        <div
          className="hero-content-overlay"
          style={{
            opacity: contentOpacity,
            pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
          }}
        >
          <div className="relative z-10 text-center px-1 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-20 pt-0">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/logo.png"
                alt="Tour India - South & North"
                width={260}
                height={260}
                className="h-auto"
                priority
              />
            </motion.div>

            {/* Tagline */}
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-7xl text-[#1e3a5f] leading-tight mb-0"
              >
                <b>
                  <span className="italic">Dream to Travel</span>
                </b>
                <br />
                <b>
                  <span className="italic">Travel to Dream </span>
                </b>
              </motion.h1>

           

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-35 justify-center"
              >
                <Link
                  href="#tours"
                  onClick={(e) => handleClick(e, "#tours")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Tours
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Plan Your Trip
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
