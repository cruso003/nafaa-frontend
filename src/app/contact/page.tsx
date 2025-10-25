"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/contact-hero.jpg"
              alt="Contact Us"
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
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact NaFAA
              </h1>
              <p className="text-xl text-blue-100">
                We're here to assist you with all your fisheries and aquaculture needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <CardHeader className="text-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <method.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-lg text-nafaa-ocean">
                        {method.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-700 font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-nafaa-ocean">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Full Name *
                          </label>
                          <Input placeholder="John Doe" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address *
                          </label>
                          <Input type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Phone Number
                          </label>
                          <Input placeholder="+231 XXX XXXX" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Subject *
                          </label>
                          <Input placeholder="General Inquiry" required />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Message *
                        </label>
                        <Textarea 
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean hover:from-nafaa-ocean-dark hover:to-nafaa-ocean-dark"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Office Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-nafaa-ocean flex items-center gap-3">
                      <MapPin className="h-6 w-6" />
                      Main Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>National Fisheries & Aquaculture Authority</strong><br />
                      Ministry of Agriculture Building<br />
                      Capitol Hill, Monrovia<br />
                      Republic of Liberia
                    </p>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src="/office-location.jpg"
                        alt="NaFAA Office Location"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-nafaa-ocean flex items-center gap-3">
                      <Clock className="h-6 w-6" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Monday - Friday</span>
                        <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Saturday</span>
                        <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Sunday</span>
                        <span className="text-red-600">Closed</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t">
                        <span className="text-gray-700 font-medium">Public Holidays</span>
                        <span className="text-red-600">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gradient-to-br from-[#C60C30] to-[#E01A45] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                24/7 Emergency Hotline
              </h2>
              <p className="text-xl mb-6 text-red-100">
                For urgent maritime emergencies, illegal fishing reports, or distress situations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#C60C30] hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +231 XXX EMERGENCY
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Emergency
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

const contactMethods = [
  {
    title: "Email Us",
    icon: Mail,
    value: "inquiries@nafaa.gov.lr",
    description: "General inquiries and information",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Call Us",
    icon: Phone,
    value: "+231 777 001 193",
    description: "Mon-Fri: 8AM-5PM",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Visit Us",
    icon: MapPin,
    value: "Capitol Hill, Monrovia",
    description: "Ministry of Agriculture Building",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "WhatsApp",
    icon: MessageSquare,
    value: "+231 777 001 193",
    description: "Quick support and inquiries",
    gradient: "from-teal-500 to-cyan-500",
  },
];