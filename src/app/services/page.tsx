"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Ship,
  FileText,
  RefreshCw,
  ClipboardList,
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  Info,
} from "lucide-react";

const services = [
  {
    title: "Vessel Registration",
    description: "Register new fishing vessels and obtain your vessel identification number.",
    icon: Ship,
    href: "/portal/vessels?action=register",
    portalLink: true,
    color: "bg-blue-500",
    features: [
      "New vessel registration",
      "Vessel documentation",
      "Transfer of ownership",
      "Digital certification",
    ],
    processingTime: "5-7 business days",
    popular: true,
  },
  {
    title: "Fishing Licenses",
    description: "Apply for commercial, artisanal, or recreational fishing licenses.",
    icon: FileText,
    href: "/portal/licenses?action=apply",
    portalLink: true,
    color: "bg-green-500",
    features: [
      "Commercial licenses",
      "Artisanal permits",
      "Recreational licenses",
      "Special permits",
    ],
    processingTime: "3-5 business days",
    popular: true,
  },
  {
    title: "License Renewal",
    description: "Renew your existing fishing licenses and permits online.",
    icon: RefreshCw,
    href: "/portal/licenses?action=renew",
    portalLink: true,
    color: "bg-purple-500",
    features: [
      "Online renewal",
      "Automatic reminders",
      "Instant processing",
      "Digital license delivery",
    ],
    processingTime: "1-2 business days",
    popular: false,
  },
  {
    title: "Catch Reporting",
    description: "Submit mandatory monthly catch reports and fishing activity logs.",
    icon: ClipboardList,
    href: "/portal/reporting?action=submit",
    portalLink: true,
    color: "bg-orange-500",
    features: [
      "Monthly reporting",
      "Species tracking",
      "GPS location data",
      "Digital submission",
    ],
    processingTime: "Immediate",
    popular: false,
  },
  {
    title: "Fee Payments",
    description: "Pay registration fees, license fees, and penalties securely online.",
    icon: CreditCard,
    href: "/portal/payments",
    portalLink: true,
    color: "bg-red-500",
    features: [
      "Secure online payment",
      "Multiple payment methods",
      "Instant receipts",
      "Payment history",
    ],
    processingTime: "Instant",
    popular: false,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Most applications processed within 1-7 business days",
  },
  {
    icon: CheckCircle,
    title: "Online Services",
    description: "Apply, track, and receive documents digitally",
  },
  {
    icon: Info,
    title: "Support Available",
    description: "Get help from our customer service team",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002868] via-[#0066CC] to-[#002868] text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Online Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              NaFAA Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Streamlined online services for vessel registration, licensing, reporting, and payments
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portal">
                  Access Portal <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of online services designed to make fisheries management easier
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow relative group">
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <Badge className="bg-[#C60C30] text-white">Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-lg ${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4" />
                        <span>{service.processingTime}</span>
                      </div>
                      {service.portalLink && (
                        <div className="flex items-center gap-2 text-xs text-blue-600 mb-3 bg-blue-50 p-2 rounded">
                          <Info className="h-3 w-3" />
                          <span>Login required to access this service</span>
                        </div>
                      )}
                      <Button className="w-full" asChild>
                        <Link href={service.href}>
                          {service.portalLink ? "Apply Now" : "Get Started"} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
              Why Use Our Online Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-[#0066CC] flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#002868] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002868] to-[#0066CC] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to assist you with any questions about our services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/resources/faq">View FAQs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
