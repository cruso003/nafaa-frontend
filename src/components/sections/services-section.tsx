"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, FileText, RefreshCw, ClipboardList, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Ship,
    title: "Vessel Registration",
    description: "Register your fishing vessel with NaFAA and obtain official documentation.",
    href: "/services/vessel-registration",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: FileText,
    title: "Fishing Licenses",
    description: "Apply for commercial or artisanal fishing licenses online.",
    href: "/services/fishing-licenses",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: RefreshCw,
    title: "License Renewal",
    description: "Renew your existing fishing licenses quickly and easily.",
    href: "/services/license-renewal",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: ClipboardList,
    title: "Catch Reporting",
    description: "Submit your monthly catch reports and stay compliant.",
    href: "/services/catch-reporting",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: CreditCard,
    title: "Payment Services",
    description: "Pay registration fees, license fees, and other charges online.",
    href: "/services/payments",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

// Generate background elements - stable across renders
const generateBackgroundElements = () => {
  return [...Array(15)].map((_, i) => ({
    color: i % 2 === 0 ? 'var(--nafaa-ocean)' : '#00A86B',
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 8 + Math.random() * 4,
    delay: Math.random() * 2,
  }));
};

export function ServicesSection() {
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    color: string;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);
  const [mounted, setMounted] = useState(false);

  // Generate background elements only on client side after mount
  useEffect(() => {
    setBackgroundElements(generateBackgroundElements());
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Animated background elements - only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full opacity-5"
              style={{
                background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-nafaa-ocean/10 to-nafaa-ocean/10 border border-nafaa-ocean/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-nafaa-ocean" />
            <span className="text-sm font-semibold text-nafaa-ocean">Digital Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-nafaa-ocean mb-6">
            Fast, Secure & Convenient
          </h2>
          <p className="text-xl text-gray-600">
            Access all NaFAA services online. Your gateway to Liberia's fisheries management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean hover:from-nafaa-ocean-dark hover:to-nafaa-ocean-dark text-white shadow-lg text-base px-8"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link href={service.href} className="block h-full">
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="h-full"
        >
          <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group relative">
            {/* Gradient background on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <CardHeader className="relative z-10 space-y-4">
              {/* Icon with gradient */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg relative overflow-hidden`}>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                  />
                  <Icon className="w-full h-full text-white relative z-10" />
                </div>
              </motion.div>

              <CardTitle className="text-2xl text-nafaa-ocean group-hover:text-nafaa-ocean transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base text-gray-600 leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <motion.div
                className="flex items-center gap-2 text-nafaa-ocean group-hover:text-nafaa-ocean font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn more
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </CardContent>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon className="w-full h-full text-nafaa-ocean rotate-12" />
            </div>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}
