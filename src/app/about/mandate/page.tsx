"use client";

import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Shield, Scale, Users, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MandatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/mandate-hero.jpg"
              alt="Our Mandate"
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
                About NaFAA
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Mandate
              </h1>
              <p className="text-xl text-blue-100">
                Authorized by law to manage, regulate, and develop Liberia's fisheries and aquaculture resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Legal Authority */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-6">
                Legislative Authority
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The National Fisheries and Aquaculture Authority (NaFAA) derives its mandate from the <strong>Fisheries and Aquaculture Act</strong> of the Republic of Liberia. This legislation empowers NaFAA to serve as the principal government agency responsible for the sustainable management and development of all fisheries and aquaculture activities within Liberia's jurisdiction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {mandateAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardHeader>
                      <div className={`w-14 h-14 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center mb-4`}>
                        <area.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-nafaa-ocean">
                        {area.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Link to full management structure */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-nafaa-ocean mb-2">Management & Governance</h4>
                  <p className="text-sm text-gray-700 mb-3">Details about the Director General, Deputies and Board (appointments, functions and tenure) are documented in the full management structure.</p>
                  <Link href="/about/management" className="text-nafaa-ocean font-medium hover:underline">View full Management Structure →</Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Core Responsibilities */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
                Core Responsibilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our mandate encompasses a wide range of regulatory, management, and development functions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#00A86B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
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
                Strategic Objectives
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guiding our mandate implementation for maximum impact
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${objective.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl font-bold text-white">{objective.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-nafaa-ocean mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {objective.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Working Together for Sustainable Fisheries
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Learn more about our leadership, organization structure, and how we serve Liberia's fisheries sector
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about/management">
                  <Button size="lg" className="bg-white text-nafaa-ocean hover:bg-gray-100">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText className="mr-2 h-5 w-5" />
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

const mandateAreas = [
  {
    title: "Regulation",
    description: "Establish and enforce fisheries regulations, licensing systems, and compliance standards for sustainable resource use.",
    icon: Scale,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Management",
    description: "Implement science-based management strategies for fish stocks, marine protected areas, and coastal zones.",
    icon: Waves,
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "Development",
    description: "Promote aquaculture development, capacity building, and economic opportunities in the fisheries sector.",
    icon: Shield,
    gradient: "from-purple-500 to-indigo-500",
  },
];

const responsibilities = [
  "Issue and manage fishing licenses, vessel registrations, and permits for commercial and artisanal fisheries",
  "Monitor and assess fish stocks and marine biodiversity to ensure sustainable harvest levels",
  "Develop and implement fisheries management plans and conservation strategies",
  "Enforce fisheries regulations and combat illegal, unreported, and unregulated (IUU) fishing",
  "Conduct scientific research and data collection on marine resources and ecosystems",
  "Promote aquaculture development and provide technical support to fish farmers",
  "Collaborate with coastal communities to support sustainable livelihoods",
  "Facilitate international cooperation and regional fisheries agreements",
  "Provide policy advice to government on fisheries and aquaculture matters",
  "Manage marine protected areas and implement ecosystem-based management approaches",
  "Ensure food safety and quality standards for fisheries products",
  "Support capacity building and training for fisheries stakeholders",
];

const objectives = [
  {
    number: "01",
    title: "Food Security",
    description: "Ensure sustainable fish supply for national nutrition and food security",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "02",
    title: "Economic Growth",
    description: "Maximize fisheries sector contribution to national GDP and employment",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Conservation",
    description: "Protect marine ecosystems and biodiversity for future generations",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    number: "04",
    title: "Good Governance",
    description: "Promote transparency, accountability, and stakeholder participation",
    gradient: "from-orange-500 to-amber-500",
  },
];
