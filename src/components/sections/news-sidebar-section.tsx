"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, FileText, Download } from "lucide-react";

const newsArticles = [
  {
    title: "New Sustainable Fishing Regulations Announced",
    excerpt: "NaFAA introduces comprehensive measures to protect marine biodiversity and ensure long-term sustainability of fish stocks.",
    image: "/hero-image.png",
    date: "2024-01-15",
    category: "Policy",
    link: "/news/1",
  },
  {
    title: "Fisheries Revenue Reaches Record High",
    excerpt: "Annual report shows 25% increase in licensing fees and improved compliance across all coastal regions.",
    image: "/hero-image.png",
    date: "2024-01-10",
    category: "Economics",
    link: "/news/2",
  },
  {
    title: "Training Program for Local Fishermen Launched",
    excerpt: "New initiative provides modern techniques and safety training to over 500 fishing communities nationwide.",
    image: "/hero-image.png",
    date: "2024-01-05",
    category: "Education",
    link: "/news/3",
  },
];

const publications = [
  {
    title: "Annual Fisheries Report 2024",
    type: "PDF",
    size: "8.5 MB",
    date: "2024",
    downloads: 2450,
    link: "#",
  },
  {
    title: "Sustainable Aquaculture Policy Framework",
    type: "PDF",
    size: "2.1 MB",
    date: "2024",
    downloads: 1820,
    link: "#",
  },
  {
    title: "Coastal Zone Management Guidelines",
    type: "PDF",
    size: "4.3 MB",
    date: "2024",
    downloads: 1560,
    link: "#",
  },
  {
    title: "Fish Stock Assessment Report",
    type: "PDF",
    size: "6.7 MB",
    date: "2024",
    downloads: 990,
    link: "#",
  },
];

export function NewsSidebarSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nafaa-ocean-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nafaa-ocean/10 rounded-full blur-3xl" />
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
            News & Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates and access essential resources for the fisheries sector
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section (Left - 2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {newsArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={article.link}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nafaa-ocean/20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Image */}
                      <div className="relative aspect-video sm:aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-nafaa-ocean-light to-nafaa-ocean" />
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-nafaa-ocean">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="sm:col-span-2 p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nafaa-ocean transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center text-nafaa-ocean font-semibold text-sm group-hover:gap-2 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* View All News Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center pt-4"
            >
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-nafaa-ocean text-white rounded-lg hover:bg-nafaa-ocean-dark transition-colors shadow-lg hover:shadow-xl font-semibold"
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Publications Sidebar (Right - 1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-dark p-2">
                  <FileText className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Recent Publications
                </h3>
              </div>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-nafaa-ocean/20"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-red-600" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-nafaa-ocean transition-colors line-clamp-2">
                            {pub.title}
                          </h4>
                          
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <span>{pub.type}</span>
                            <span>•</span>
                            <span>{pub.size}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{pub.date}</span>
                            <Download className="w-4 h-4 text-nafaa-ocean group-hover:translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* View All Publications */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/publications"
                  className="flex items-center justify-center gap-2 text-nafaa-ocean font-semibold hover:gap-3 transition-all"
                >
                  <span>View All Publications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
