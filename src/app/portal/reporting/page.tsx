"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Send,
  Save,
  ArrowLeft,
  Calendar,
  Fish,
  Weight,
  MapPin,
  Ship,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock reports data
const mockReports = [
  {
    id: "1",
    reportNumber: "CR-2024-0123",
    vesselName: "Sea Star IV",
    reportDate: "2024-09-15",
    period: "September 2024",
    totalCatch: "450 kg",
    status: "submitted",
    species: "Tuna, Mackerel",
    location: "Monrovia Coastal Waters",
  },
  {
    id: "2",
    reportNumber: "CR-2024-0089",
    vesselName: "Ocean Pride",
    reportDate: "2024-08-10",
    period: "August 2024",
    totalCatch: "520 kg",
    status: "approved",
    species: "Snapper, Grouper",
    location: "Buchanan Offshore",
  },
  {
    id: "3",
    reportNumber: "DRAFT-001",
    vesselName: "Blue Horizon",
    reportDate: "",
    period: "October 2024",
    totalCatch: "",
    status: "draft",
    species: "",
    location: "",
  },
];

export default function ReportingPage() {
  const [reports, setReports] = useState(mockReports);
  const [showNewReportDialog, setShowNewReportDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filteredReports = reports.filter((report) => {
    if (activeTab === "all") return true;
    return report.status === activeTab;
  });

  const stats = {
    total: reports.length,
    submitted: reports.filter((r) => r.status === "submitted").length,
    approved: reports.filter((r) => r.status === "approved").length,
    draft: reports.filter((r) => r.status === "draft").length,
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
                  Catch Reporting
                </h1>
                <p className="text-sm text-gray-600">
                  Submit and manage your catch reports
                </p>
              </div>
            </div>
            <Button onClick={() => setShowNewReportDialog(true)}>
              <Plus className="mr-2 h-5 w-5" />
              New Report
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Reports",
              value: stats.total,
              color: "blue",
              icon: FileText,
            },
            {
              label: "Approved",
              value: stats.approved,
              color: "green",
              icon: CheckCircle2,
            },
            {
              label: "Pending Review",
              value: stats.submitted,
              color: "yellow",
              icon: Clock,
            },
            {
              label: "Drafts",
              value: stats.draft,
              color: "gray",
              icon: Edit,
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

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="submitted">Pending</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl ${
                      report.status === "approved"
                        ? "bg-green-100"
                        : report.status === "submitted"
                        ? "bg-yellow-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <FileText
                      className={`h-8 w-8 ${
                        report.status === "approved"
                          ? "text-green-600"
                          : report.status === "submitted"
                          ? "text-yellow-600"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {report.period}
                      </h3>
                      <Badge
                        variant={
                          report.status === "approved"
                            ? "default"
                            : report.status === "submitted"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 font-mono text-sm">
                      {report.reportNumber}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {report.status === "draft" ? (
                    <>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        <Send className="mr-2 h-4 w-4" />
                        Submit
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  )}
                </div>
              </div>

              {report.status !== "draft" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <Ship className="h-4 w-4" />
                      Vessel
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {report.vesselName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <Weight className="h-4 w-4" />
                      Total Catch
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {report.totalCatch}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <Fish className="h-4 w-4" />
                      Species
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {report.species}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Location
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {report.location}
                    </p>
                  </div>
                </div>
              )}

              {report.status === "draft" && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Complete this draft report for {report.period} and submit
                    it for review.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No reports found
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "all"
                ? "Create your first catch report"
                : `No ${activeTab} reports available`}
            </p>
            <Button onClick={() => setShowNewReportDialog(true)}>
              <Plus className="mr-2 h-5 w-5" />
              New Report
            </Button>
          </div>
        )}
      </div>

      {/* New Report Dialog */}
      <Dialog open={showNewReportDialog} onOpenChange={setShowNewReportDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>New Catch Report</DialogTitle>
            <DialogDescription>
              Submit your catch information for the reporting period
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vessel">Vessel *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vessel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Sea Star IV</SelectItem>
                    <SelectItem value="2">Ocean Pride</SelectItem>
                    <SelectItem value="3">Blue Horizon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="period">Reporting Period *</Label>
                <Input id="period" type="month" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fishingDays">Fishing Days *</Label>
                <Input
                  id="fishingDays"
                  type="number"
                  placeholder="20"
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="totalCatch">Total Catch (kg) *</Label>
                <Input
                  id="totalCatch"
                  type="number"
                  placeholder="450"
                  min="0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="species">Main Species Caught *</Label>
              <Textarea
                id="species"
                placeholder="List the main species caught (e.g., Tuna, Mackerel, Snapper)"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="location">Fishing Location *</Label>
              <Input
                id="location"
                placeholder="e.g., Monrovia Coastal Waters"
              />
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional information or observations..."
                rows={4}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> All catch reports must be submitted
                within 30 days of the reporting period end date. Ensure all
                information is accurate and complete.
              </p>
            </div>
          </form>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowNewReportDialog(false)}
            >
              <Save className="mr-2 h-4 w-4" />
              Save as Draft
            </Button>
            <Button onClick={() => setShowNewReportDialog(false)}>
              <Send className="mr-2 h-4 w-4" />
              Submit Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
