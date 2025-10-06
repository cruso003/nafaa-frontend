"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Ship,
  TrendingUp,
  Database,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Ship,
    title: "Vessel Registration",
    description: "Register your fishing vessel with NaFAA and obtain official documentation.",
    link: "/services/vessel-registration",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Fishing Licenses",
    description: "Apply for commercial or artisanal fishing licenses online.",
    link: "/services/fishing-licenses",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "License Renewal",
    description: "Renew your existing fishing licenses quickly and easily.",
    link: "/services/license-renewal",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Payment Services",
    description: "Pay registration fees, license fees, and other charges online.",
    link: "/services/payments",
    color: "from-purple-500 to-pink-500",
  },
];

export function ServicesSectionUniform() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to support Liberia's fisheries industry from licensing to market access
          </p>
        </motion.div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={service.link}>
                  <div className="group h-full bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nafaa-ocean/20 cursor-pointer">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-nafaa-ocean transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="flex items-center text-nafaa-ocean font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-4`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-nafaa-ocean text-white rounded-lg hover:bg-nafaa-ocean-dark transition-colors shadow-lg hover:shadow-xl font-semibold"
          >
            View All Services
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
