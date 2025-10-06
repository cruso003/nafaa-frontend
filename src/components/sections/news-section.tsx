"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Fish, TrendingUp, GraduationCap, Anchor, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "New Sustainable Fishing Regulations Announced",
    excerpt: "NaFAA introduces comprehensive measures to protect marine biodiversity and ensure long-term sustainability of fish stocks.",
    category: "Policy",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/hero-image.png",
    icon: Fish,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Fisheries Revenue Reaches Record High",
    excerpt: "Annual report shows 25% increase in licensing fees and improved compliance across all coastal regions.",
    category: "Economics",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/hero-image.png",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Training Program for Local Fishermen Launched",
    excerpt: "New initiative provides modern techniques and safety training to over 500 fishing communities nationwide.",
    category: "Education",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/hero-image.png",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Port Infrastructure Modernization Complete",
    excerpt: "State-of-the-art facilities now operational at major fishing ports, enhancing safety and efficiency.",
    category: "Infrastructure",
    date: "2023-12-28",
    readTime: "5 min read",
    image: "/hero-image.png",
    icon: Anchor,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Community Partnerships Expand Nationwide",
    excerpt: "NaFAA collaborates with local organizations to strengthen coastal community engagement and development.",
    category: "Community",
    date: "2023-12-20",
    readTime: "4 min read",
    image: "/hero-image.png",
    icon: Users,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "International Cooperation Agreement Signed",
    excerpt: "New partnership with regional fisheries organizations to combat illegal fishing and share best practices.",
    category: "International",
    date: "2023-12-15",
    readTime: "7 min read",
    image: "/hero-image.png",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function NewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 mb-4"
          >
            <Calendar className="h-4 w-4 text-[#0066CC]" />
            <span className="text-sm font-semibold text-[#002868]">Latest Updates</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002868] mb-4">
            News & Announcements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in Liberia's fisheries sector
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/news">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#002868] to-[#0066CC] hover:from-[#001845] hover:to-[#004C99] text-white shadow-lg"
              >
                View All News
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: typeof newsItems[0] }) {
  const Icon = item.icon;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link href={`/news/${item.id}`} className="block h-full">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group">
            {/* Image Header */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-white/90 backdrop-blur-sm border-0 text-[#002868] shadow-lg">
                  {item.category}
                </Badge>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
              >
                <Icon className="h-6 w-6 text-[#002868]" />
              </motion.div>
            </div>

            <CardHeader className="space-y-3 pb-3">
              <h3 className="text-xl font-bold text-[#002868] line-clamp-2 group-hover:text-[#0066CC] transition-colors">
                {item.title}
              </h3>
            </CardHeader>

            <CardContent className="pb-4">
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>
            </CardContent>

            <CardFooter className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{item.readTime}</span>
                </div>
              </div>
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5 text-[#0066CC] group-hover:text-[#002868]" />
              </motion.div>
            </CardFooter>

            {/* Hover gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#002868]/0 to-[#0066CC]/0 group-hover:from-[#002868]/5 group-hover:to-[#0066CC]/5 transition-all duration-300 pointer-events-none"
            />
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}
