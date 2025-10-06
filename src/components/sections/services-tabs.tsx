"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, FileText, RefreshCw, ClipboardList, CreditCard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// SAME services data as the original
const services = [
  {
    icon: Ship,
    title: "Vessel Registration",
    description: "Register your fishing vessel with NaFAA and obtain official documentation.",
    href: "/services/vessel-registration",
    color: "bg-blue-500",
    details: "Complete vessel registration online with our streamlined process. Submit required documents, track your application status, and receive digital certification.",
  },
  {
    icon: FileText,
    title: "Fishing Licenses",
    description: "Apply for commercial or artisanal fishing licenses online.",
    href: "/services/fishing-licenses",
    color: "bg-emerald-500",
    details: "Apply for various types of fishing licenses including commercial, artisanal, and sport fishing permits. Fast processing and secure document management.",
  },
  {
    icon: RefreshCw,
    title: "License Renewal",
    description: "Renew your existing fishing licenses quickly and easily.",
    href: "/services/license-renewal",
    color: "bg-amber-500",
    details: "Renew your fishing licenses online before expiration. Automatic reminders, quick processing, and instant digital license delivery.",
  },
  {
    icon: ClipboardList,
    title: "Catch Reporting",
    description: "Submit your monthly catch reports and stay compliant.",
    href: "/services/catch-reporting",
    color: "bg-purple-500",
    details: "Submit catch reports digitally, maintain compliance with regulations, and access your reporting history anytime.",
  },
  {
    icon: CreditCard,
    title: "Payment Services",
    description: "Pay registration fees, license fees, and other charges online.",
    href: "/services/payments",
    color: "bg-red-500",
    details: "Secure online payment system supporting multiple payment methods. Instant payment confirmation and digital receipts.",
  },
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive online services for fisheries management and compliance
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? `${service.color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <service.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${services[activeTab].color} mb-6`}>
                  {(() => {
                    const Icon = services[activeTab].icon;
                    return <Icon className="h-8 w-8 text-white" />;
                  })()}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeTab].title}
                </h3>

                <p className="text-xl text-gray-600 mb-6">
                  {services[activeTab].description}
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  {services[activeTab].details}
                </p>

                <Link href={services[activeTab].href}>
                  <Button
                    size="lg"
                    className={`${services[activeTab].color} text-white hover:opacity-90 font-semibold`}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Visual Element */}
              <div className={`relative h-80 rounded-2xl ${services[activeTab].color} p-8 flex items-center justify-center`}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  {(() => {
                    const Icon = services[activeTab].icon;
                    return <Icon className="h-32 w-32 text-white/90" />;
                  })()}
                </motion.div>

                {/* Decorative Circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/services"
            className="text-nafaa-ocean hover:text-nafaa-ocean-dark font-semibold inline-flex items-center gap-2"
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
