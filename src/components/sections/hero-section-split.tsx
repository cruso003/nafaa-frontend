"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSectionSplit() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-nafaa-ocean/10 to-nafaa-ocean-light/10 border border-nafaa-ocean/20">
              <Waves className="h-4 w-4 text-nafaa-ocean" />
              <span className="text-sm font-medium text-nafaa-ocean">Republic of Liberia</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900">
              National Fisheries &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean-dark">
                Aquaculture Authority
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering sustainable fishing practices, promoting aquaculture development, 
              and safeguarding Liberia's marine resources for future generations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-nafaa-ocean hover:bg-nafaa-ocean-dark text-white transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-nafaa-ocean text-nafaa-ocean hover:bg-nafaa-ocean hover:text-white"
              >
                Learn More
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-nafaa-ocean">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nafaa-ocean">500K+</div>
                <div className="text-sm text-gray-600">Fishermen Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nafaa-ocean">$50M+</div>
                <div className="text-sm text-gray-600">Economic Impact</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-image.png"
              alt="Liberian Fisheries and Aquaculture"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-nafaa-ocean/20 via-transparent to-nafaa-ocean-light/20" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-dark flex items-center justify-center">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Sustainable Fishing</div>
                  <div className="text-xs text-gray-600">Protecting Our Oceans</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path
            d="M0,40 C240,10 480,70 720,40 C960,10 1200,70 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
            className="text-gray-50"
          />
        </svg>
      </div>
    </section>
  );
}
