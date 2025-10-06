"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Plus,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock license data
const mockLicenses = [
  {
    id: "1",
    type: "Commercial Fishing License",
    number: "CFL-2024-0123",
    issueDate: "2024-01-15",
    expiryDate: "2025-01-14",
    status: "active",
    vesselName: "Sea Star IV",
    fee: "$150.00",
  },
  {
    id: "2",
    type: "Trawler License",
    number: "TRL-2023-0456",
    issueDate: "2023-03-20",
    expiryDate: "2024-03-19",
    status: "expired",
    vesselName: "Ocean Pride",
    fee: "$200.00",
  },
  {
    id: "3",
    type: "Export License",
    number: "EXP-2024-0789",
    issueDate: "2024-06-10",
    expiryDate: "2025-06-09",
    status: "active",
    vesselName: "Blue Horizon",
    fee: "$100.00",
  },
  {
    id: "4",
    type: "Aquaculture License",
    number: "AQL-2024-0234",
    issueDate: "2024-07-01",
    expiryDate: "2025-06-30",
    status: "active",
    vesselName: "N/A - Land-based",
    fee: "$75.00",
  },
  {
    id: "5",
    type: "Research Permit",
    number: "RSP-2024-0567",
    issueDate: "2024-08-15",
    expiryDate: "2024-11-15",
    status: "expiring",
    vesselName: "Research Vessel Alpha",
    fee: "$50.00",
  },
];

export default function LicensesPage() {
  const [licenses] = useState(mockLicenses);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const getDaysUntilExpiry = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (license: any) => {
    const daysUntilExpiry = getDaysUntilExpiry(license.expiryDate);

    if (license.status === "expired" || daysUntilExpiry < 0) {
      return <Badge variant="destructive">Expired</Badge>;
    } else if (daysUntilExpiry <= 30) {
      return <Badge className="bg-yellow-500">Expiring Soon</Badge>;
    } else {
      return <Badge variant="default">Active</Badge>;
    }
  };

  const filteredLicenses = licenses.filter((license) => {
    const matchesSearch =
      license.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.vesselName.toLowerCase().includes(searchQuery.toLowerCase());

    const daysUntilExpiry = getDaysUntilExpiry(license.expiryDate);

    if (filter === "active") {
      return matchesSearch && daysUntilExpiry > 30;
    } else if (filter === "expiring") {
      return matchesSearch && daysUntilExpiry <= 30 && daysUntilExpiry >= 0;
    } else if (filter === "expired") {
      return matchesSearch && daysUntilExpiry < 0;
    }
    return matchesSearch;
  });

  const stats = {
    total: licenses.length,
    active: licenses.filter((l) => getDaysUntilExpiry(l.expiryDate) > 30).length,
    expiring: licenses.filter(
      (l) =>
        getDaysUntilExpiry(l.expiryDate) <= 30 &&
        getDaysUntilExpiry(l.expiryDate) >= 0
    ).length,
    expired: licenses.filter((l) => getDaysUntilExpiry(l.expiryDate) < 0)
      .length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/portal/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  My Licenses
                </h1>
                <p className="text-sm text-gray-600">
                  View and manage your fishing licenses
                </p>
              </div>
            </div>
            <Link href="/services/licenses">
              <Button>
                <Plus className="mr-2 h-5 w-5" />
                Apply for License
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Licenses",
              value: stats.total,
              color: "blue",
              icon: FileText,
            },
            {
              label: "Active",
              value: stats.active,
              color: "green",
              icon: CheckCircle2,
            },
            {
              label: "Expiring Soon",
              value: stats.expiring,
              color: "yellow",
              icon: Clock,
            },
            {
              label: "Expired",
              value: stats.expired,
              color: "red",
              icon: AlertCircle,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search licenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="expiring">Expiring</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Licenses List */}
        <div className="space-y-6">
          {filteredLicenses.map((license, index) => {
            const daysUntilExpiry = getDaysUntilExpiry(license.expiryDate);

            return (
              <motion.div
                key={license.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-blue-100">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {license.type}
                        </h3>
                        {getStatusBadge(license)}
                      </div>
                      <p className="text-gray-600 font-mono text-sm">
                        {license.number}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Issue Date</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(license.issueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Expiry Date</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(license.expiryDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Vessel</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {license.vesselName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">License Fee</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {license.fee}
                    </p>
                  </div>
                </div>

                {daysUntilExpiry < 0 ? (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-sm text-red-900">
                        This license expired {Math.abs(daysUntilExpiry)} days
                        ago. Renew immediately to avoid penalties.
                      </p>
                    </div>
                    <Link href="/services/vessel-renewal">
                      <Button size="sm" variant="destructive">
                        Renew Now
                      </Button>
                    </Link>
                  </div>
                ) : daysUntilExpiry <= 30 ? (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <p className="text-sm text-yellow-900">
                        This license expires in {daysUntilExpiry} days. Renew
                        before expiration.
                      </p>
                    </div>
                    <Link href="/services/vessel-renewal">
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                        Renew Now
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="text-sm text-green-900">
                      This license is valid for {daysUntilExpiry} more days.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {filteredLicenses.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No licenses found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? "Try adjusting your search query or filters"
                : "Apply for a license to get started"}
            </p>
            <Link href="/services/licenses">
              <Button>
                <Plus className="mr-2 h-5 w-5" />
                Apply for License
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
