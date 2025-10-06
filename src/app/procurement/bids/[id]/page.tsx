"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Clock,
  DollarSign,
  Building2,
  Download,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Users,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Target,
  Ship,
  Info
} from "lucide-react";
import { getProcurementBidById, getProcurementBids } from "@/lib/mock-data/procurement";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BidDetailPage({ params }: PageProps) {
  const { id } = await params;
  const bidId = parseInt(id);
  const bid = getProcurementBidById(bidId);

  if (!bid) {
    notFound();
  }

  // Calculate days remaining
  const calculateDaysRemaining = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining(bid.deadline);
  const isUrgent = daysRemaining > 0 && daysRemaining <= 7;
  const isClosed = bid.status === "closed" || daysRemaining < 0;

  // Get similar bids (same category)
  const similarBids = getProcurementBids({ category: bid.category })
    .filter(b => b.id !== bidId && b.status === "open")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/procurement/bids">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Bids
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  variant={bid.status === "open" ? "default" : "secondary"}
                  className={`text-sm ${
                    bid.status === "open" 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-gray-500"
                  }`}
                >
                  {bid.status === "open" ? "Open for Bidding" : bid.status === "closed" ? "Closed" : "Awarded"}
                </Badge>
                <Badge variant="outline" className="text-sm bg-white/10 border-white/30">
                  {bid.category}
                </Badge>
                {isUrgent && !isClosed && (
                  <Badge variant="destructive" className="text-sm animate-pulse">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Urgent
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-3">{bid.title}</h1>
              <p className="text-xl text-blue-100 mb-4">{bid.bidNumber}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">Estimated Value: {bid.estimatedValue}</span>
                </div>
                {bid.submissionsCount !== undefined && (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{bid.submissionsCount} Submissions</span>
                  </div>
                )}
              </div>
            </div>

            {/* Key Dates Card */}
            <Card className="lg:w-80 bg-white/10 border-white/30 text-white backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-100">Published</p>
                      <p className="font-semibold">
                        {new Date(bid.publishedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className={`w-5 h-5 mt-1 flex-shrink-0 ${isUrgent ? "text-red-300" : ""}`} />
                    <div>
                      <p className="text-sm text-blue-100">Deadline</p>
                      <p className={`font-semibold ${isUrgent ? "text-red-300" : ""}`}>
                        {new Date(bid.deadline).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </p>
                      {!isClosed && (
                        <p className={`text-sm ${isUrgent ? "text-red-300" : "text-blue-200"}`}>
                          {daysRemaining} days remaining
                        </p>
                      )}
                      {isClosed && bid.status !== "closed" && (
                        <p className="text-sm text-red-300">Deadline passed</p>
                      )}
                    </div>
                  </div>
                  {bid.status === "awarded" && bid.awardedTo && (
                    <div className="flex items-start gap-3 pt-3 border-t border-white/30">
                      <Award className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-300" />
                      <div>
                        <p className="text-sm text-blue-100">Awarded To</p>
                        <p className="font-semibold">{bid.awardedTo}</p>
                        {bid.awardDate && (
                          <p className="text-sm text-blue-200">
                            {new Date(bid.awardDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-nafaa-ocean" />
                    Bid Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{bid.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technical Specifications */}
            {bid.technicalSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ship className="w-5 h-5 text-nafaa-ocean" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {bid.technicalSpecs}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-nafaa-ocean" />
                    Eligibility Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {bid.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Evaluation Criteria */}
            {bid.evaluationCriteria && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-nafaa-ocean" />
                      Evaluation Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {bid.evaluationCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-nafaa-ocean text-white text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 mt-0.5">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Right Column - Actions & Info */}
          <div className="space-y-6">
            {/* Submit Bid Button */}
            {bid.status === "open" && !isClosed && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-nafaa-ocean bg-gradient-to-br from-nafaa-ocean/5 to-transparent">
                  <CardContent className="pt-6">
                    <Link href={`/procurement/bids/${bid.id}/submit`}>
                      <Button className="w-full h-12 text-lg bg-nafaa-ocean hover:bg-nafaa-ocean-dark">
                        <FileText className="mr-2 h-5 w-5" />
                        Submit Your Bid
                      </Button>
                    </Link>
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      Deadline: {new Date(bid.deadline).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-nafaa-ocean" />
                    Bid Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bid.documents.map((doc, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-between h-auto py-3 hover:bg-nafaa-ocean/5 hover:border-nafaa-ocean"
                        asChild
                      >
                        <a href={doc.url || "#"} download>
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-nafaa-ocean" />
                            <div className="text-left">
                              <p className="font-medium text-sm">{doc.name}</p>
                              <p className="text-xs text-gray-500">{doc.size}</p>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-gray-400" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Person */}
            {bid.contactPerson && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-nafaa-ocean" />
                      Contact Person
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-900">{bid.contactPerson.name}</p>
                        <p className="text-sm text-gray-600">Procurement Officer</p>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${bid.contactPerson.email}`}
                          className="flex items-center gap-2 text-sm text-nafaa-ocean hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          {bid.contactPerson.email}
                        </a>
                        <a
                          href={`tel:${bid.contactPerson.phone}`}
                          className="flex items-center gap-2 text-sm text-nafaa-ocean hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          {bid.contactPerson.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Help & Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-nafaa-ocean">
                    <Info className="w-5 h-5" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">
                    For questions about this bid, please contact the procurement officer above.
                  </p>
                  <Link href="/resources/procurement-guidelines">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Procurement Guidelines
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Similar Bids */}
        {similarBids.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similarBids.map((similarBid) => (
                <Card key={similarBid.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-nafaa-ocean">{similarBid.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2">{similarBid.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{similarBid.estimatedValue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>
                          Deadline: {new Date(similarBid.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <Link href={`/procurement/bids/${similarBid.id}`}>
                        <Button variant="outline" className="w-full mt-4">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
