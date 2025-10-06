"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Users } from "lucide-react";
import Image from "next/image";

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

export function OfficialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white border-none">
            <Users className="mr-2 h-4 w-4" />
            Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nafaa-ocean mb-4">
            National Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished leaders guiding Liberia's fisheries and aquaculture development
          </p>
        </motion.div>

        {/* Officials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {officials.map((official, index) => (
            <motion.div
              key={official.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden border-2 hover:border-nafaa-ocean/30">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-80 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Users className="w-24 h-24 text-white/50" />
                      </div>
                    </div>
                    <Image
                      src={official.image}
                      alt={official.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    /> 
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-nafaa-ocean border-none shadow-lg">
                        Official
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-nafaa-ocean mb-2 group-hover:text-nafaa-ocean transition-colors">
                      {official.name}
                    </h3>
                    <p className="text-sm font-semibold text-nafaa-ocean mb-4">
                      {official.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                      {official.bio}
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-3 pt-4 border-t">
                      {official.email && (
                        <div className="flex items-start gap-3">
                          <Mail className="h-4 w-4 text-nafaa-ocean mt-0.5 flex-shrink-0" />
                          <a
                            href={`mailto:${official.email}`}
                            className="text-sm text-gray-600 hover:text-nafaa-ocean transition-colors break-all"
                          >
                            {official.email}
                          </a>
                        </div>
                      )}
                      {official.office && (
                        <div className="flex items-start gap-3">
                          <Users className="h-4 w-4 text-nafaa-ocean mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{official.office}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-nafaa-ocean/5 to-nafaa-ocean/5 border-nafaa-ocean/20">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600">
                Under the leadership of President Boakai, Vice President Koung, and Director General Saygbe, 
                the National Fisheries and Aquaculture Authority is committed to sustainable fisheries management, 
                marine resource conservation, and the advancement of Liberia's blue economy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
