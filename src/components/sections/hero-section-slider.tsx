"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Fish, Waves, Ship } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "National Fisheries and Aquaculture Authority",
    subtitle: "Sustainable Management of Liberia's Marine Resources",
    description: "Committed to the conservation, management, and development of Liberia's fisheries and aquaculture resources for present and future generations.",
    cta: "Explore Our Services",
    ctaLink: "/services",
    icon: Fish,
    image: "/hero1.jpg", // First hero image
    gradient: "from-blue-600/80 via-cyan-600/80 to-teal-600/80",
  },
  {
    id: 2,
    title: "Building a Sustainable Blue Economy",
    subtitle: "Innovation • Conservation • Growth",
    description: "Transforming Liberia's fisheries sector through modern technology, sustainable practices, and community empowerment.",
    cta: "Learn About Our Vision",
    ctaLink: "/about/mandate",
    icon: Waves,
    image: "/hero-image.png", // Main hero image
    gradient: "from-teal-600/80 via-emerald-600/80 to-cyan-600/80",
  },
  {
    id: 3,
    title: "Digital Services for Modern Fisheries",
    subtitle: "Register • License • Report • Pay Online",
    description: "Streamlined online services for vessel registration, fishing licenses, catch reporting, and secure payment processing.",
    cta: "Access Portal",
    ctaLink: "/services",
    icon: Ship,
    image: "/hero2.jpg", // Third hero image - vessels/maritime
    gradient: "from-cyan-600/80 via-blue-600/80 to-indigo-600/80",
  },
];

export function HeroSectionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-10"
        >
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-6"
              >
                {(() => {
                  const Icon = slides[currentSlide].icon;
                  return <Icon className="h-16 w-16 text-white/90" />;
                })()}
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-semibold mb-4 text-white/90"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href={slides[currentSlide].ctaLink}>
                  <Button
                    size="lg"
                    className="bg-white text-nafaa-ocean hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                  >
                    {slides[currentSlide].cta}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,40 C240,10 480,70 720,40 C960,10 1200,70 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
