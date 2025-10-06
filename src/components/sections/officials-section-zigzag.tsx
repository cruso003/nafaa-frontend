"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const officials = [
  {
    id: 1,
    name: "H.E. Joseph Nyuma Boakai, Sr.",
    title: "President of the Republic of Liberia",
    image: "/officials/president.jpg",
    bio: "President Joseph Nyuma Boakai, Sr. is the 26th President of the Republic of Liberia, committed to sustainable development and the advancement of Liberia's marine and fisheries resources.",
    email: "president@executivemansion.gov.lr",
    office: "Executive Mansion, Monrovia",
  },
  {
    id: 2,
    name: "H.E. Jeremiah Koung",
    title: "Vice President of the Republic of Liberia",
    image: "/officials/vicepresident.jpg",
    bio: "Vice President Jeremiah Koung supports the President's vision for economic growth and development, with special attention to the fisheries and aquaculture sectors.",
    email: "vicepresident@executivemansion.gov.lr",
    office: "Executive Mansion, Monrovia",
  },
  {
    id: 3,
    name: "Hon. J. Cyrus Saygbe, Sr",
    title: "Director General, National Fisheries and Aquaculture Authority",
    image: "/officials/director.jpg",
    bio: "Director General J. Cyrus Saygbe, Sr leads NaFAA with extensive experience in fisheries management, sustainable development, and marine resource conservation.",
    email: "director@nafaa.gov.lr",
    office: "NaFAA Headquarters, Monrovia",
  },
];

export function OfficialsSectionZigzag() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-nafaa-ocean/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-nafaa-ocean-light/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white border-none">
            <Users className="mr-2 h-4 w-4" />
            Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
            National Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leaders guiding Liberia's fisheries and aquaculture development
          </p>
        </motion.div>

        {/* Zigzag Layout */}
        <div className="space-y-32">
          {officials.map((official, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Placeholder gradient until image loads */}
                    <div className="absolute inset-0 bg-gradient-to-br from-nafaa-ocean-light to-nafaa-ocean" />
                    
                    <Image
                      src={official.image}
                      alt={official.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    >
                      {official.name}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-xl text-nafaa-ocean font-semibold"
                    >
                      {official.title}
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {official.bio}
                  </motion.p>

                  {/* Contact Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-nafaa-ocean" />
                      <a
                        href={`mailto:${official.email}`}
                        className="hover:text-nafaa-ocean transition-colors"
                      >
                        {official.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-nafaa-ocean" />
                      <span>{official.office}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
