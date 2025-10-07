"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Users, Target, Award, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Metadata is set in layout.tsx
const pageMetadata = {
  title: "About NaFAA | National Fisheries & Aquaculture Authority",
  description: "Learn about the National Fisheries and Aquaculture Authority of Liberia - our mission, vision, and commitment to sustainable fisheries management.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/about-hero.jpg"
              alt="About NaFAA"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Who We Are
              </h1>
              <p className="text-xl text-blue-100">
                Leading Liberia's sustainable fisheries and aquaculture development for present and future generations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-6">
                  The National Fisheries and Aquaculture Authority
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    The National Fisheries and Aquaculture Authority (NaFAA) is the government agency responsible for the sustainable management, development, and conservation of Liberia's fisheries and aquaculture resources.
                  </p>
                  <p>
                    Established to ensure the long-term viability of Liberia's marine and aquatic resources, NaFAA works to balance economic development with environmental conservation, supporting the livelihoods of thousands of Liberians while protecting our coastal ecosystems.
                  </p>
                  <p>
                    Through innovative management practices, community engagement, and strategic partnerships, we are building a sustainable fisheries sector that contributes to food security, employment, and economic growth across Liberia.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/fishermen-3.jpg"
                  alt="NaFAA Office"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean rounded-2xl flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-nafaa-ocean">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be a world-class fisheries and aquaculture authority that ensures sustainable management of Liberia's marine resources, contributing significantly to national food security, economic development, and environmental conservation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00A86B] to-[#008556] rounded-2xl flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-nafaa-ocean">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To regulate, manage, and develop Liberia's fisheries and aquaculture sector through effective policies, sustainable practices, and community partnerships that balance conservation with economic growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and interactions with stakeholders
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardHeader>
                      <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4`}>
                        <value.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-nafaa-ocean">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn More About NaFAA
              </h2>
              <p className="text-xl text-blue-100">
                Explore our organization, leadership, and how we serve Liberia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="block"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all text-white">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <link.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const coreValues = [
  {
    title: "Sustainability",
    description: "We prioritize the long-term health of marine ecosystems and fish populations for future generations.",
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Transparency",
    description: "We operate with openness and accountability in all our regulatory and management activities.",
    icon: Award,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in governance and resource management.",
    icon: Heart,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Innovation",
    description: "We embrace modern technologies and best practices in fisheries management and aquaculture development.",
    icon: Target,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Collaboration",
    description: "We partner with communities, stakeholders, and international organizations for collective success.",
    icon: Users,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in service delivery and continuous improvement in all our operations.",
    icon: Ship,
    gradient: "from-teal-500 to-cyan-500",
  },
];

const quickLinks = [
  {
    title: "Our Mandate",
    href: "/about/mandate",
    icon: Target,
  },
  {
    title: "Leadership Team",
    href: "/about/leadership",
    icon: Users,
  },
  {
    title: "Organization",
    href: "/about/organization",
    icon: Ship,
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Globe,
  },
];
