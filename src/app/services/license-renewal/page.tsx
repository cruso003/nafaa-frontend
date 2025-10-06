"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  RefreshCw,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  FileText,
  Shield,
  DollarSign,
} from "lucide-react";

const renewalTypes = [
  {
    id: "commercial",
    title: "Commercial License Renewal",
    description: "Renew your commercial fishing license",
    fee: "$800/year",
    discount: "10% discount if renewed 30+ days before expiration",
    icon: Shield,
    requirements: [
      "Current license number",
      "Updated vessel documentation",
      "Catch reports from previous year",
      "Tax clearance certificate",
      "Updated business registration",
    ],
    processingTime: "2-3 business days",
  },
  {
    id: "artisanal",
    title: "Artisanal License Renewal",
    description: "Renew your artisanal fishing license",
    fee: "$150/year",
    discount: "10% discount if renewed 30+ days before expiration",
    icon: RefreshCw,
    requirements: [
      "Current license number",
      "National ID or passport",
      "Updated boat registration (if applicable)",
      "Catch reports (if required)",
    ],
    processingTime: "1-2 business days",
  },
  {
    id: "recreational",
    title: "Recreational License Renewal",
    description: "Renew your recreational fishing license",
    fee: "$50/year",
    discount: "10% discount if renewed 30+ days before expiration",
    icon: Shield,
    requirements: [
      "Current license number",
      "Valid government-issued ID",
      "Updated boat registration (if applicable)",
    ],
    processingTime: "1 business day",
  },
];

const renewalProcess = [
  {
    step: 1,
    title: "Log Into Portal",
    description: "Access your NaFAA portal account",
  },
  {
    step: 2,
    title: "View Active Licenses",
    description: "Check your current licenses and expiration dates",
  },
  {
    step: 3,
    title: "Submit Renewal",
    description: "Complete the renewal form and upload updated documents",
  },
  {
    step: 4,
    title: "Pay Renewal Fee",
    description: "Complete payment to process your renewal",
  },
  {
    step: 5,
    title: "Receive Updated License",
    description: "Download your renewed license certificate",
  },
];

const importantNotes = [
  {
    title: "Early Renewal Discount",
    description: "Renew 30+ days before expiration and save 10% on renewal fees",
    icon: DollarSign,
    color: "green",
  },
  {
    title: "Grace Period",
    description: "15-day grace period after expiration, but late fees apply",
    icon: Clock,
    color: "amber",
  },
  {
    title: "Expired Licenses",
    description: "Licenses expired for more than 60 days require a new application",
    icon: AlertCircle,
    color: "red",
  },
];

export default function LicenseRenewalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#00A86B] to-[#00CC80] text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                License Renewal
              </h1>
              <p className="text-xl text-green-100">
                Quick and easy renewal for all fishing license types
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* CTA Banner */}
        <Card className="mb-12 border-2 border-green-500 shadow-xl bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Renew Your License?
                </h2>
                <p className="text-gray-700 text-lg">
                  Renew quickly and track all your licenses in one secure dashboard. Get 10% off with early renewal!
                </p>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/portal/licenses/renew">
                  Renew in Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes - Alert Boxes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {importantNotes.map((note) => {
              const Icon = note.icon;
              const colorClasses = {
                green: "bg-green-50 border-green-200 text-green-800",
                amber: "bg-amber-50 border-amber-200 text-amber-800",
                red: "bg-red-50 border-red-200 text-red-800",
              };
              const iconColors = {
                green: "text-green-600",
                amber: "text-amber-600",
                red: "text-red-600",
              };
              return (
                <Card key={note.title} className={colorClasses[note.color as keyof typeof colorClasses]}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${iconColors[note.color as keyof typeof iconColors]}`} />
                      <CardTitle className="text-lg">{note.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{note.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Renewal Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Renewal Fees & Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {renewalTypes.map((renewal) => {
              const Icon = renewal.icon;
              return (
                <motion.div
                  key={renewal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{renewal.title}</CardTitle>
                      <CardDescription>{renewal.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Renewal Fee</span>
                          <Badge variant="secondary" className="text-lg font-bold">
                            {renewal.fee}
                          </Badge>
                        </div>
                        <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-xs text-amber-800 font-medium">{renewal.discount}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Processing: {renewal.processingTime}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {renewal.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Renewal Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Renewal Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {renewalProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-xl rounded-bl-3xl">
                  {item.step}
                </div>
                <CardHeader>
                  <CardTitle className="text-base pr-12">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Renewal Reminders */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Renewal Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Never miss a renewal deadline! When you register in our portal, you'll receive:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Email reminders 60, 30, and 15 days before expiration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>SMS notifications for urgent renewals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Dashboard alerts for all expiring licenses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>One-click renewal directly from reminder emails</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Renew Your License Today</h2>
              <p className="text-xl mb-8 text-green-100">
                Fast processing, early renewal discounts, and automated reminders. Stay compliant and keep fishing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href="/portal/licenses/renew">
                    Renew License
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-green-600 px-8" asChild>
                  <Link href="/contact">
                    Need Help?
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
