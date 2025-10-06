"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Clock,
  DollarSign,
  Building2,
  Download,
  ExternalLink,
  Search,
  Filter,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { getProcurementBids } from "@/lib/mock-data/procurement";

const categories = ["All Categories", "Equipment", "Infrastructure", "Technology", "Consultancy"];

export default function ProcurementBidsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("all");

  // Get filtered bids using the service function
  const filteredBids = getProcurementBids({
    category: selectedCategory,
    status: statusFilter === "all" ? undefined : statusFilter,
    searchQuery: searchQuery
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diff = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
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
              <FileText className="mr-2 h-4 w-4" />
              Procurement Opportunities
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Procurement & Bids
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Explore current procurement opportunities and submit bids for projects with the National Fisheries and Aquaculture Authority
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by title, bid number, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Bids Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredBids.length} bid{filteredBids.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid gap-6">
            {filteredBids.map((bid, index) => {
              const daysRemaining = getDaysRemaining(bid.deadline);
              const isUrgent = daysRemaining > 0 && daysRemaining <= 7;
              const isClosed = bid.status === "closed";

              return (
                <motion.div
                  key={bid.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`hover:shadow-lg transition-shadow ${isClosed ? 'opacity-75' : ''}`}>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{bid.category}</Badge>
                            {bid.status === "open" ? (
                              <Badge className="bg-green-100 text-green-700 border-green-300">
                                Open
                              </Badge>
                            ) : (
                              <Badge variant="secondary">Closed</Badge>
                            )}
                            {isUrgent && (
                              <Badge className="bg-orange-100 text-orange-700 border-orange-300">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Urgent
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-2xl mb-2">{bid.title}</CardTitle>
                          <p className="text-sm text-gray-500">{bid.bidNumber}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-nafaa-ocean">{bid.estimatedValue}</div>
                          <p className="text-xs text-gray-500">Estimated Value</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-6">{bid.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Published:</span>
                          <span className="font-medium">{formatDate(bid.publishedDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Deadline:</span>
                          <span className={`font-medium ${isUrgent ? 'text-orange-600' : ''}`}>
                            {formatDate(bid.deadline)}
                            {bid.status === "open" && (
                              <span className="ml-2 text-gray-500">
                                ({daysRemaining > 0 ? `${daysRemaining} days left` : 'Expired'})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Requirements
                        </h4>
                        <ul className="grid gap-2">
                          {bid.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-nafaa-ocean mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Documents
                        </h4>
                        <div className="grid gap-2">
                          {bid.documents.map((doc, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              size="sm"
                              className="justify-between"
                            >
                              <span className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                {doc.name}
                              </span>
                              <span className="text-xs text-gray-500">{doc.size}</span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {bid.status === "open" && (
                          <>
                            <Link href={`/procurement/bids/${bid.id}/submit`}>
                              <Button className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Submit Bid
                              </Button>
                            </Link>
                            <Link href={`/procurement/bids/${bid.id}`}>
                              <Button variant="outline">
                                <FileText className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </>
                        )}
                        {bid.status === "closed" && (
                          <Button variant="outline" disabled>
                            Bidding Closed
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredBids.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No bids found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Need Help with Bidding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our procurement team is here to assist you with any questions about the bidding process, requirements, or documentation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Procurement Office</h4>
                    <p className="text-sm text-blue-100">procurement@nafaa.gov.lr</p>
                    <p className="text-sm text-blue-100">+231-XXX-XXXX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    <p className="text-sm text-blue-100">Monday - Friday</p>
                    <p className="text-sm text-blue-100">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <Button className="mt-6 bg-white text-nafaa-ocean hover:bg-gray-100">
                  <Building2 className="h-4 w-4 mr-2" />
                  Contact Procurement Office
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
