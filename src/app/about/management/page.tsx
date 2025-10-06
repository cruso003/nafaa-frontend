"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mail, Phone, Ship, Shield, TrendingUp, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const managementTeam = [
  {
    id: 1,
    name: "Hon. Emma Metieh Glassco",
    title: "Director General",
    department: "Executive Office",
    icon: Briefcase,
    image: "/management/director-general.jpg",
    bio: "Director General Emma Metieh Glassco leads NaFAA with extensive experience in fisheries management, sustainable development, and marine resource conservation. She oversees all strategic initiatives and ensures NaFAA delivers on its mandate.",
    email: "director@nafaa.gov.lr",
    phone: "+231-XXX-XXXX",
    responsibilities: [
      "Overall strategic leadership and direction",
      "Policy formulation and implementation",
      "Stakeholder engagement and partnerships",
      "Budget approval and financial oversight",
    ],
  },
  {
    id: 2,
    name: "[Deputy Director Name]",
    title: "Deputy Director for Operations",
    department: "Operations Division",
    icon: Ship,
    image: "/management/deputy-operations.jpg",
    bio: "Oversees all operational services including licensing, vessel registration, and day-to-day service delivery to fishing communities and industry stakeholders.",
    email: "deputy.operations@nafaa.gov.lr",
    phone: "+231-XXX-XXXX",
    responsibilities: [
      "Licensing and permitting services",
      "Vessel registration and documentation",
      "Operational service delivery",
      "Field office coordination",
    ],
  },
  {
    id: 3,
    name: "[Deputy Director Name]",
    title: "Deputy Director for Compliance",
    department: "Compliance & Enforcement",
    icon: Shield,
    image: "/management/deputy-compliance.jpg",
    bio: "Manages enforcement operations, monitoring, control, and surveillance (MCS) activities to combat illegal, unreported, and unregulated (IUU) fishing.",
    email: "deputy.compliance@nafaa.gov.lr",
    phone: "+231-XXX-XXXX",
    responsibilities: [
      "Enforcement and compliance monitoring",
      "IUU fishing prevention",
      "Port and sea inspections",
      "Regulatory compliance oversight",
    ],
  },
  {
    id: 4,
    name: "[Deputy Director Name]",
    title: "Deputy Director for Development",
    department: "Aquaculture & Development",
    icon: TrendingUp,
    image: "/management/deputy-development.jpg",
    bio: "Leads aquaculture development initiatives, capacity building programs, and technical assistance for fishermen and fish farmers across Liberia.",
    email: "deputy.development@nafaa.gov.lr",
    phone: "+231-XXX-XXXX",
    responsibilities: [
      "Aquaculture development programs",
      "Capacity building and training",
      "Extension services",
      "Community development initiatives",
    ],
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/management-hero.jpg"
              alt="Management Team"
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
                <Users className="mr-2 h-4 w-4" />
                Leadership
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Management Team
              </h1>
              <p className="text-xl text-blue-100">
                Experienced leaders executing NaFAA's mandate and delivering excellence in fisheries management
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-6">
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                NaFAA's Senior Management Team comprises seasoned professionals with decades of combined experience 
                in fisheries management, marine conservation, regulatory enforcement, and aquaculture development. 
                Together, they translate policy into action and ensure effective service delivery across Liberia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Director General - Featured */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative h-96 md:h-auto bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Briefcase className="w-24 h-24 text-white/50" />
                      </div>
                    </div>
                    {/* Placeholder for actual image */}
                    {/* <Image
                      src={managementTeam[0].image}
                      alt={managementTeam[0].name}
                      fill
                      className="object-cover"
                    /> */}
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 lg:p-12">
                    <Badge className="mb-4 bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white border-none">
                      Director General
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-nafaa-ocean mb-3">
                      {managementTeam[0].name}
                    </h3>
                    <p className="text-lg text-nafaa-ocean font-semibold mb-6">
                      {managementTeam[0].title}
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {managementTeam[0].bio}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-nafaa-ocean mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {managementTeam[0].responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-nafaa-ocean mt-1">✓</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="border-nafaa-ocean text-nafaa-ocean">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Deputy Directors */}
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
                Deputy Directors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leading key operational divisions with specialized expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managementTeam.slice(1).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
                    {/* Image/Icon Section */}
                    <div className="relative h-72 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <member.icon className="w-20 h-20 text-white/50" />
                        </div>
                      </div>
                      {/* Placeholder for actual image */}
                      {/* <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      /> */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <Badge className="absolute top-4 right-4 bg-white/90 text-nafaa-ocean">
                        {member.department}
                      </Badge>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-nafaa-ocean mb-2 group-hover:text-nafaa-ocean transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-nafaa-ocean mb-4">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {member.bio}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-nafaa-ocean mb-2">Key Areas:</h4>
                        <ul className="space-y-1">
                          {member.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="text-nafaa-ocean mt-0.5">•</span>
                              <span className="line-clamp-1">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="space-y-2 pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-nafaa-ocean flex-shrink-0" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-xs text-gray-600 hover:text-nafaa-ocean transition-colors truncate"
                          >
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-nafaa-ocean flex-shrink-0" />
                          <span className="text-xs text-gray-600">{member.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Principles */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-nafaa-ocean/5 to-nafaa-ocean/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-nafaa-ocean mb-6 text-center">
                    Our Management Principles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nafaa-ocean mb-2">Transparency</h4>
                        <p className="text-sm text-gray-600">Open communication and accountability in all operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nafaa-ocean mb-2">Sustainability</h4>
                        <p className="text-sm text-gray-600">Protecting marine resources for future generations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nafaa-ocean mb-2">Innovation</h4>
                        <p className="text-sm text-gray-600">Embracing modern technology and best practices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-nafaa-ocean mb-2">Collaboration</h4>
                        <p className="text-sm text-gray-600">Working with stakeholders for shared success</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
