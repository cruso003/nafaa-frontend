"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Ship, FileText, Waves, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Ship,
    number: 2450,
    label: "Registered Vessels",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    number: 5200,
    label: "Active Licenses",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Waves,
    number: 12500,
    label: "Tons Annual Catch",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    number: 350,
    label: "Jobs Created",
    suffix: "+",
    color: "from-emerald-500 to-green-500",
  },
];

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSectionAnimated() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Making an Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time statistics showcasing our commitment to sustainable fisheries management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-3.5 mb-6 shadow-lg`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>

                  {/* Decorative Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
