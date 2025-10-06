"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/leadership-hero.jpg"
              alt="Our Leadership"
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
                Leadership Team
              </h1>
              <p className="text-xl text-blue-100">
                Meet the dedicated professionals leading Liberia's fisheries and aquaculture sector
              </p>
            </motion.div>
          </div>
        </section>

        {/* Executive Leadership */}
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
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team brings decades of combined experience in fisheries management, marine conservation, and public administration
              </p>
            </motion.div>

            {/* Director General */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-80 md:h-auto">
                    <Image
                      src="/staff-director-general.jpg"
                      alt="Director General"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8">
                    <Badge className="mb-3 bg-nafaa-ocean text-white">
                      Director General
                    </Badge>
                    <h3 className="text-3xl font-bold text-nafaa-ocean mb-2">
                      [Name]
                    </h3>
                    <p className="text-gray-600 mb-4">Director General, NaFAA</p>
                    
                    <div className="prose prose-gray max-w-none mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        [Name] serves as the Director General of the National Fisheries and Aquaculture Authority of Liberia. With over [X] years of experience in fisheries management and marine resource conservation, [he/she] leads NaFAA's strategic initiatives to ensure sustainable use of Liberia's marine resources.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Prior to this appointment, [Name] served as [Previous Position], where [he/she] [major achievement]. [He/She] holds a [Degree] in [Field] from [University] and has published extensively on sustainable fisheries management in West Africa.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-nafaa-ocean text-nafaa-ocean">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="border-nafaa-ocean text-nafaa-ocean">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Senior Management */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seniorManagement.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all group">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nafaa-ocean/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-nafaa-ocean">
                        {member.position}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-nafaa-ocean">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{member.title}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departmental Leadership */}
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
                Department Heads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leading specialized teams across fisheries management, compliance, research, and administration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentHeads.map((head, index) => (
                <motion.div
                  key={head.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all text-center">
                    <CardContent className="pt-6">
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src={head.image}
                          alt={head.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-nafaa-ocean mb-1">{head.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{head.department}</p>
                      <p className="text-xs text-gray-500">{head.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Be part of building a sustainable future for Liberia's fisheries sector
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <Button size="lg" className="bg-white text-nafaa-ocean hover:bg-gray-100">
                    View Open Positions
                  </Button>
                </Link>
                <Link href="/about/organization">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Our Organization
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

const seniorManagement = [
  {
    name: "[Deputy Director Name]",
    position: "Deputy Director",
    title: "Deputy Director for Operations",
    image: "/staff-deputy-director.jpg",
    bio: "Oversees daily operations, licensing, and vessel registration systems. [X] years of experience in maritime administration and fisheries regulation.",
  },
  {
    name: "[Chief Financial Officer]",
    position: "CFO",
    title: "Chief Financial Officer",
    image: "/staff-cfo.jpg",
    bio: "Manages financial operations, budgeting, and revenue collection. Certified Public Accountant with expertise in government finance.",
  },
  {
    name: "[Head of Compliance]",
    position: "Head of Compliance",
    title: "Director of Compliance & Enforcement",
    image: "/staff-compliance.jpg",
    bio: "Leads monitoring, control, and surveillance operations to combat illegal fishing and ensure regulatory compliance.",
  },
  {
    name: "[Head of Research]",
    position: "Head of Research",
    title: "Director of Fisheries Research",
    image: "/staff-research.jpg",
    bio: "Conducts scientific research on fish stocks, marine ecosystems, and sustainable fishing practices. PhD in Marine Biology.",
  },
  {
    name: "[Head of Aquaculture]",
    position: "Head of Aquaculture",
    title: "Director of Aquaculture Development",
    image: "/staff-aquaculture.jpg",
    bio: "Promotes and supports aquaculture initiatives nationwide. Expertise in fish farming and coastal community development.",
  },
  {
    name: "[Legal Counsel]",
    position: "Legal Counsel",
    title: "Chief Legal Officer",
    image: "/staff-legal.jpg",
    bio: "Provides legal guidance on fisheries law, international agreements, and regulatory compliance. Licensed attorney at law.",
  },
];

const departmentHeads = [
  {
    name: "[Name]",
    department: "Licensing Division",
    title: "Head of Licensing",
    image: "/staff-licensing.jpg",
  },
  {
    name: "[Name]",
    department: "Vessel Registration",
    title: "Head of Registration",
    image: "/staff-registration.jpg",
  },
  {
    name: "[Name]",
    department: "Data & Statistics",
    title: "Head of Data Management",
    image: "/staff-data.jpg",
  },
  {
    name: "[Name]",
    department: "Community Relations",
    title: "Head of Community Outreach",
    image: "/staff-community.jpg",
  },
  {
    name: "[Name]",
    department: "Information Technology",
    title: "Head of IT",
    image: "/staff-it.jpg",
  },
  {
    name: "[Name]",
    department: "Human Resources",
    title: "Head of HR",
    image: "/staff-hr.jpg",
  },
  {
    name: "[Name]",
    department: "Policy & Planning",
    title: "Head of Policy",
    image: "/staff-policy.jpg",
  },
  {
    name: "[Name]",
    department: "International Relations",
    title: "Head of International Affairs",
    image: "/staff-international.jpg",
  },
];
