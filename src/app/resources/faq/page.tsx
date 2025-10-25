"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import {
  HelpCircle,
  Search,
  Ship,
  FileCheck,
  ClipboardList,
  CreditCard,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    id: "vessel-registration",
    title: "Vessel Registration",
    icon: Ship,
    color: "blue",
    faqs: [
      {
        id: "vr-1",
        question: "What documents are required to register a fishing vessel?",
        answer: "To register a fishing vessel, you need: (1) Proof of ownership (bill of sale or transfer document), (2) Valid national ID or passport, (3) Vessel technical specifications, (4) Recent photographs of the vessel, (5) Insurance certificate, and (6) Payment receipt for registration fee. All documents must be original or certified copies.",
      },
      {
        id: "vr-2",
        question: "How long does vessel registration take?",
        answer: "The standard vessel registration process takes 5-7 business days from submission of complete documentation. Expedited processing (2-3 days) is available for an additional fee. Incomplete applications may take longer while we await additional documentation.",
      },
      {
        id: "vr-3",
        question: "What are the vessel registration fees?",
        answer: "Registration fees vary by vessel type and size: Small vessels (<5m): $150, Medium vessels (5-15m): $300, Large vessels (>15m): $500. Additional fees apply for expedited processing ($100) and vessel inspection ($75).",
      },
      {
        id: "vr-4",
        question: "Can I register a vessel online?",
        answer: "Yes! We offer online vessel registration through our Services portal. You can submit all required documents digitally and track your application status. Payment can be made online via credit card, mobile money, or bank transfer.",
      },
      {
        id: "vr-5",
        question: "What if I need to modify my registered vessel?",
        answer: "Any modifications to vessel structure, engine, or specifications must be reported to NaFAA within 30 days. Submit a Vessel Modification Request form along with details of the changes and updated technical specifications. An inspection may be required for major modifications.",
      },
    ],
  },
  {
    id: "licensing",
    title: "Fishing Licenses",
    icon: FileCheck,
    color: "green",
    faqs: [
      {
        id: "lic-1",
        question: "What types of fishing licenses are available?",
        answer: "NaFAA issues three types of licenses: (1) Commercial License ($800/year) - for large-scale commercial fishing operations, (2) Artisanal License ($150/year) - for small-scale traditional fishing, and (3) Recreational License ($50/year) - for sport and recreational fishing. Each license type has specific requirements and permitted fishing methods.",
      },
      {
        id: "lic-2",
        question: "How do I renew my fishing license?",
        answer: "Licenses can be renewed online through the License Renewal portal up to 60 days before expiration. You'll need your current license number and can pay via credit card, mobile money, or bank transfer. Renewals are processed within 1-2 business days. We recommend renewing at least 30 days before expiration to avoid any fishing interruptions.",
      },
      {
        id: "lic-3",
        question: "What happens if my license expires?",
        answer: "Fishing with an expired license is illegal and subject to penalties. If your license expires, you must cease fishing operations immediately and renew your license. Late renewals (within 30 days of expiration) incur a 25% penalty fee. After 30 days, you must submit a new license application.",
      },
      {
        id: "lic-4",
        question: "Can I transfer my license to another person?",
        answer: "Commercial and Artisanal licenses are non-transferable and issued to specific individuals or companies. If you sell your vessel or business, the new owner must apply for a new license. However, you may update the vessel associated with your license by submitting a License Amendment Request.",
      },
      {
        id: "lic-5",
        question: "Are there seasonal fishing restrictions?",
        answer: "Yes, certain species and fishing zones have seasonal closures to protect breeding stocks. Current restrictions include: (1) Shrimp fishing closed May-June, (2) Some reef fish protected during spawning (varies by species), (3) Turtle nesting beaches restricted March-August. Check our Regulations page for current seasonal restrictions.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Catch Reporting",
    icon: ClipboardList,
    color: "orange",
    faqs: [
      {
        id: "rep-1",
        question: "Who must submit catch reports?",
        answer: "All Commercial and Artisanal license holders must submit monthly catch reports. Recreational license holders are exempt from mandatory reporting but are encouraged to contribute to citizen science programs. Reports must be submitted by the 5th day of the following month.",
      },
      {
        id: "rep-2",
        question: "What information is required in catch reports?",
        answer: "Catch reports must include: (1) Reporting period (month/year), (2) Fishing days and areas (GPS coordinates), (3) Species caught with weights and quantities, (4) Fishing gear/methods used, (5) By-catch information, and (6) Any incidents or lost gear. Accurate reporting helps us manage fish stocks sustainably.",
      },
      {
        id: "rep-3",
        question: "Can I submit catch reports online?",
        answer: "Yes! The easiest way to submit reports is through our online Catch Reporting portal. You can save drafts, add multiple catch entries, and submit electronically. Paper forms are also accepted at NaFAA offices but online submission is preferred for faster processing.",
      },
      {
        id: "rep-4",
        question: "What if I had no fishing activity in a month?",
        answer: "You must still submit a 'nil return' report indicating no fishing activity for that month. This helps us distinguish between unreported catches and genuine periods of inactivity. Failure to submit any report (even nil returns) may result in license suspension.",
      },
      {
        id: "rep-5",
        question: "What are the penalties for not reporting catches?",
        answer: "Late or missing catch reports incur penalties: First offense - written warning, Second offense - $200 fine, Third offense - $500 fine and 30-day license suspension, Repeated violations - permanent license revocation. Falsifying catch data is a serious offense with criminal penalties.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Fees",
    icon: CreditCard,
    color: "purple",
    faqs: [
      {
        id: "pay-1",
        question: "What payment methods does NaFAA accept?",
        answer: "We accept multiple payment methods: (1) Credit/Debit cards (Visa, Mastercard) - instant processing, $3 fee, (2) Mobile Money (MTN, Orange) - instant processing, 2% fee, (3) Bank Transfer - 1-2 days processing, no fee, and (4) Cash payments at NaFAA offices during business hours. Online payments are processed through our secure payment gateway.",
      },
      {
        id: "pay-2",
        question: "Can I get a receipt for my payment?",
        answer: "Yes, receipts are automatically generated for all payments. Online payments receive instant digital receipts via email. In-person payments receive printed receipts immediately. You can also access all payment history and download receipts from the Client Portal.",
      },
      {
        id: "pay-3",
        question: "Are payment plans available for large fees?",
        answer: "Yes, payment plans are available for vessel registration and commercial license fees over $500. Plans allow 3-6 month payment periods with a small administrative fee. Apply through the Payment Plan Application form. Approval is subject to credit review and fishing history.",
      },
      {
        id: "pay-4",
        question: "Can I get a fee waiver or reduction?",
        answer: "Fee waivers are available in limited circumstances: (1) Demonstrated financial hardship (artisanal fishers only), (2) Natural disaster impact on fishing operations, (3) First-time artisanal license applicants (50% reduction). Submit a Fee Waiver Request form with supporting documentation.",
      },
      {
        id: "pay-5",
        question: "What if my payment was processed incorrectly?",
        answer: "Contact our Payment Support team immediately at payments@nafaa.gov.lr or call +231-XXX-XXXX. Provide your transaction reference number and payment receipt. Disputes are investigated within 5 business days and refunds (if applicable) processed within 10 business days.",
      },
    ],
  },
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    color: "gray",
    faqs: [
      {
        id: "gen-1",
        question: "How do I contact NaFAA?",
        answer: "You can reach NaFAA through: (1) Email: inquiries@nafaa.gov.lr, (2) Phone: +231 777 001 193 (Mon-Fri 8am-5pm), (3) Visit: NaFAA Headquarters, Bushrod Island, Monrovia, (4) Online: Submit inquiries through our Contact page. For urgent matters, call our hotline or visit in person.",
      },
      {
        id: "gen-2",
        question: "What are NaFAA's office hours?",
        answer: "NaFAA offices are open Monday through Friday, 8:00 AM to 5:00 PM. We are closed on weekends and public holidays. Our online services (portal, applications, payments) are available 24/7. Emergency hotline operates outside business hours for urgent maritime incidents.",
      },
      {
        id: "gen-3",
        question: "Do you offer training programs for fishers?",
        answer: "Yes! NaFAA regularly offers free and subsidized training programs covering: (1) Sustainable fishing techniques, (2) Vessel safety and emergency procedures, (3) Fish handling and quality control, (4) Business management for artisanal fishers, and (5) Navigation and seamanship. Check our News section for upcoming training schedules.",
      },
      {
        id: "gen-4",
        question: "How can I report illegal fishing activity?",
        answer: "Report illegal fishing immediately to our Enforcement Hotline: +231-XXX-XXXX (24/7). Provide: (1) Location (GPS if possible), (2) Vessel description and identification, (3) Nature of violation, (4) Photos/videos if safe to obtain. Reports can be anonymous. All reports are investigated promptly.",
      },
      {
        id: "gen-5",
        question: "Where can I find current fishing regulations?",
        answer: "All current regulations are available on our Policies & Regulations page. You can also download the NaFAA Regulations Handbook (updated annually) or request a printed copy from any NaFAA office. We recommend checking for updates regularly as regulations may change based on stock assessments.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.faqs.length > 0);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      gray: { bg: "bg-gray-100", text: "text-gray-600" },
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Find answers to common questions about NaFAA services and processes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-nafaa-ocean">{category.title}</h2>
                    <p className="text-gray-600">{category.faqs.length} questions</p>
                  </div>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="py-12">
              <CardContent>
                <div className="text-center">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any FAQs matching your search
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center max-w-2xl mx-auto">
                <HelpCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
                <p className="text-blue-100 mb-6">
                  Can't find the answer you're looking for? Our support team is here to help
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
