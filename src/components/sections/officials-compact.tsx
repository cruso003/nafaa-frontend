"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Building2, Users, Sparkles } from "lucide-react";
import Image from "next/image";

// SAME officials data as the original
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

export function OfficialsCompact() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-nafaa-ocean/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-nafaa-ocean to-cyan-600 text-white border-none">
            <Sparkles className="mr-2 h-4 w-4" />
            Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-nafaa-ocean mb-4">
            National Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished leaders guiding Liberia's fisheries and aquaculture development
          </p>
        </motion.div>

        {/* Stylish Asymmetric Bento Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First Official - Large Feature Card (Top) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-nafaa-ocean/20 group">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image - Takes 2 columns */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-nafaa-ocean/20 to-cyan-600/20 z-10" />
                    <Image
                      src={officials[0].image}
                      alt={officials[0].name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/95 text-nafaa-ocean border-none shadow-lg">
                      <Users className="mr-1 h-3 w-3" />
                      Principal Leader
                    </Badge>
                  </div>
                  
                  {/* Content - Takes 3 columns */}
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-nafaa-ocean mb-3 group-hover:text-cyan-700 transition-colors">
                        {officials[0].name}
                      </h3>
                      <p className="text-base font-semibold text-cyan-600 mb-4 uppercase tracking-wide">
                        {officials[0].title}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {officials[0].bio}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-nafaa-ocean/10 rounded-lg">
                          <Mail className="h-4 w-4 text-nafaa-ocean" />
                        </div>
                        <a
                          href={`mailto:${officials[0].email}`}
                          className="text-sm text-gray-600 hover:text-nafaa-ocean transition-colors font-medium"
                        >
                          {officials[0].email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-600/10 rounded-lg">
                          <Building2 className="h-4 w-4 text-cyan-600" />
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{officials[0].office}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Row - Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Second Official - Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-cyan-600/20 group">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent z-10" />
                    <Image
                      src={officials[1].image}
                      alt={officials[1].name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none shadow-lg">
                        Vice President
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-cyan-50/50 to-white">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-nafaa-ocean mb-2 group-hover:text-cyan-700 transition-colors">
                        {officials[1].name}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase tracking-wide">
                        {officials[1].title}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {officials[1].bio}
                      </p>
                    </div>

                    <div className="space-y-2.5 mt-auto pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-cyan-600/10 rounded">
                          <Mail className="h-3.5 w-3.5 text-cyan-600" />
                        </div>
                        <a
                          href={`mailto:${officials[1].email}`}
                          className="text-xs text-gray-600 hover:text-cyan-600 transition-colors font-medium break-all"
                        >
                          {officials[1].email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-nafaa-ocean/10 rounded">
                          <Building2 className="h-3.5 w-3.5 text-nafaa-ocean" />
                        </div>
                        <p className="text-xs text-gray-600 font-medium">{officials[1].office}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Third Official - Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-nafaa-ocean/20 group">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-nafaa-ocean/30 to-transparent z-10" />
                    <Image
                      src={officials[2].image}
                      alt={officials[2].name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-nafaa-ocean to-teal-600 text-white border-none shadow-lg">
                        Director General
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-blue-50/50 to-white">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-nafaa-ocean mb-2 group-hover:text-teal-700 transition-colors">
                        {officials[2].name}
                      </h3>
                      <p className="text-sm font-semibold text-nafaa-ocean mb-3 uppercase tracking-wide">
                        {officials[2].title}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {officials[2].bio}
                      </p>
                    </div>

                    <div className="space-y-2.5 mt-auto pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-nafaa-ocean/10 rounded">
                          <Mail className="h-3.5 w-3.5 text-nafaa-ocean" />
                        </div>
                        <a
                          href={`mailto:${officials[2].email}`}
                          className="text-xs text-gray-600 hover:text-nafaa-ocean transition-colors font-medium break-all"
                        >
                          {officials[2].email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-teal-600/10 rounded">
                          <Building2 className="h-3.5 w-3.5 text-teal-600" />
                        </div>
                        <p className="text-xs text-gray-600 font-medium">{officials[2].office}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
