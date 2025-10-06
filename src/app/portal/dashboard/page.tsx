"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship,
  FileText,
  DollarSign,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Calendar,
  Download,
  ExternalLink,
  Search,
  Filter,
  Eye,
  XCircle,
  RefreshCw,
} from "lucide-react";
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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@email.com",
  memberSince: "January 2023",
  avatar: "👨‍🦰",
};

// Mock all applications data (unified view)
const allApplications = [
  {
    id: "FL-2024-0123",
    type: "License Application",
    category: "license",
    description: "Commercial Fishing License",
    submittedDate: "2024-09-15",
    status: "approved",
    amount: "$800",
  },
  {
    id: "VR-2024-0456",
    type: "Vessel Registration",
    category: "vessel",
    description: "Sea Star IV - Commercial Vessel",
    submittedDate: "2024-09-20",
    status: "under-review",
    amount: "$1,200",
  },
  {
    id: "RN-2024-0789",
    type: "License Renewal",
    category: "renewal",
    description: "Artisanal Fishing License",
    submittedDate: "2024-09-25",
    status: "approved",
    amount: "$150",
  },
  {
    id: "CR-2024-1011",
    type: "Catch Report",
    category: "report",
    description: "September 2024 - 450kg total",
    submittedDate: "2024-10-01",
    status: "pending",
    amount: "Free",
  },
  {
    id: "FL-2024-0124",
    type: "License Application",
    category: "license",
    description: "Recreational Fishing License",
    submittedDate: "2024-08-10",
    status: "approved",
    amount: "$50",
  },
  {
    id: "VR-2024-0457",
    type: "Vessel Registration",
    category: "vessel",
    description: "Ocean Breeze - Recreational Vessel",
    submittedDate: "2024-08-15",
    status: "approved",
    amount: "$150",
  },
  {
    id: "CR-2024-1010",
    type: "Catch Report",
    category: "report",
    description: "August 2024 - 380kg total",
    submittedDate: "2024-09-01",
    status: "approved",
    amount: "Free",
  },
  {
    id: "RN-2024-0788",
    type: "License Renewal",
    category: "renewal",
    description: "Commercial Fishing License",
    submittedDate: "2024-07-20",
    status: "rejected",
    amount: "$800",
  },
];

// Mock statistics
const stats = [
  {
    icon: Ship,
    label: "Active Vessels",
    value: "3",
    change: "+1 this month",
    color: "blue",
    href: "/portal/vessels",
  },
  {
    icon: FileText,
    label: "Valid Licenses",
    value: "5",
    change: "2 expire soon",
    color: "green",
    href: "/portal/licenses",
  },
  {
    icon: FileText,
    label: "Reports Submitted",
    value: "12",
    change: "+3 this month",
    color: "purple",
    href: "/portal/reporting",
  },
  {
    icon: DollarSign,
    label: "Outstanding Balance",
    value: "$250",
    change: "Due in 15 days",
    color: "red",
    href: "/portal/payments",
  },
];

// Mock recent activity
const recentActivity = [
  {
    id: 1,
    type: "vessel",
    title: "Vessel Registration Renewed",
    description: "Sea Star IV - Registration #VS-2024-001",
    date: "2 days ago",
    status: "completed",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Processed",
    description: "License renewal fee - $150.00",
    date: "5 days ago",
    status: "completed",
  },
  {
    id: 3,
    type: "report",
    title: "Catch Report Submitted",
    description: "September 2024 - 450kg total catch",
    date: "1 week ago",
    status: "completed",
  },
  {
    id: 4,
    type: "license",
    title: "License Renewal Pending",
    description: "Commercial Fishing License - Expires in 30 days",
    date: "1 week ago",
    status: "pending",
  },
];

// Mock notifications
const notifications = [
  {
    id: 1,
    type: "warning",
    message: "Your Commercial Fishing License expires in 30 days",
    action: "Renew Now",
    href: "/portal/licenses",
  },
  {
    id: 2,
    type: "info",
    message: "New catch reporting guidelines have been published",
    action: "View Guidelines",
    href: "/resources/policies",
  },
  {
    id: 3,
    type: "success",
    message: "Your payment of $150 has been confirmed",
    action: "View Receipt",
    href: "/portal/payments",
  },
];

// Mock chart data
const catchData = [
  { month: "Jan", catch: 420 },
  { month: "Feb", catch: 380 },
  { month: "Mar", catch: 450 },
  { month: "Apr", catch: 490 },
  { month: "May", catch: 520 },
  { month: "Jun", catch: 480 },
  { month: "Jul", catch: 510 },
  { month: "Aug", catch: 490 },
  { month: "Sep", catch: 450 },
];

export default function DashboardPage() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Filter applications based on search and filters
  const filteredApplications = allApplications.filter((app) => {
    const matchesSearch =
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || app.status === statusFilter;

    const matchesType = typeFilter === "all" || app.category === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Calculate application stats
  const applicationStats = {
    total: allApplications.length,
    pending: allApplications.filter((app) => app.status === "pending").length,
    approved: allApplications.filter((app) => app.status === "approved").length,
    underReview: allApplications.filter((app) => app.status === "under-review")
      .length,
    rejected: allApplications.filter((app) => app.status === "rejected").length,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "under-review":
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            <RefreshCw className="h-3 w-3 mr-1" />
            Under Review
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "license":
        return <FileText className="h-5 w-5 text-green-600" />;
      case "vessel":
        return <Ship className="h-5 w-5 text-blue-600" />;
      case "renewal":
        return <RefreshCw className="h-5 w-5 text-purple-600" />;
      case "report":
        return <FileText className="h-5 w-5 text-orange-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    NaFAA Portal
                  </h1>
                  <p className="text-xs text-gray-500">Dashboard</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/portal/settings">
                <Button variant="ghost" size="sm">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="text-5xl">{userData.avatar}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back, {userData.name}!
              </h2>
              <p className="text-gray-600">
                Member since {userData.memberSince} • {userData.email}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={stat.href}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-${stat.color}-100 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon
                        className={`h-6 w-6 text-${stat.color}-600`}
                      />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.change}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Unified Applications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                My Applications
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Track all your submissions in one place
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                Total: {applicationStats.total}
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                Pending: {applicationStats.pending}
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                Approved: {applicationStats.approved}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                Review: {applicationStats.underReview}
              </Badge>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by tracking number, type, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="license">Licenses</SelectItem>
                <SelectItem value="vessel">Vessels</SelectItem>
                <SelectItem value="renewal">Renewals</SelectItem>
                <SelectItem value="report">Reports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quick Apply Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-blue-900 mb-3">
              Quick Actions - Submit New Application:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/portal/licenses/apply">
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  <FileText className="h-3 w-3 mr-1" />
                  Apply for License
                </Button>
              </Link>
              <Link href="/portal/vessels/register">
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  <Ship className="h-3 w-3 mr-1" />
                  Register Vessel
                </Button>
              </Link>
              <Link href="/portal/licenses/renew">
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Renew License
                </Button>
              </Link>
              <Link href="/portal/reports/submit">
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  <FileText className="h-3 w-3 mr-1" />
                  Submit Report
                </Button>
              </Link>
            </div>
          </div>

          {/* Applications Table */}
          <div className="overflow-x-auto">
            {filteredApplications.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  No applications found
                </h4>
                <p className="text-gray-600 mb-4">
                  {searchQuery || statusFilter !== "all" || typeFilter !== "all"
                    ? "Try adjusting your filters or search query"
                    : "You haven't submitted any applications yet"}
                </p>
                {!searchQuery &&
                  statusFilter === "all" &&
                  typeFilter === "all" && (
                    <Link href="/portal/licenses/apply">
                      <Button>
                        <FileText className="h-4 w-4 mr-2" />
                        Apply for License
                      </Button>
                    </Link>
                  )}
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Tracking #
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Description
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Date Submitted
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app, index) => (
                    <motion.tr
                      key={app.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <span className="font-mono text-sm font-semibold text-blue-600">
                          {app.id}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-gray-100">
                            {getCategoryIcon(app.category)}
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {app.type}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-700">
                          {app.description}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-600">
                          {new Date(app.submittedDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-4">{getStatusBadge(app.status)}</td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-semibold text-gray-900">
                          {app.amount}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {app.status === "approved" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                          {app.status === "pending" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Results count */}
          {filteredApplications.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredApplications.length} of {allApplications.length}{" "}
              applications
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: Ship,
                    label: "Add Vessel",
                    href: "/portal/vessels",
                    color: "blue",
                  },
                  {
                    icon: FileText,
                    label: "Submit Report",
                    href: "/portal/reporting",
                    color: "green",
                  },
                  {
                    icon: CreditCard,
                    label: "Make Payment",
                    href: "/portal/payments",
                    color: "purple",
                  },
                  {
                    icon: Download,
                    label: "Download License",
                    href: "/portal/licenses",
                    color: "orange",
                  },
                ].map((action) => (
                  <Link key={action.label} href={action.href}>
                    <div className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer text-center">
                      <div
                        className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-${action.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <action.icon
                          className={`h-6 w-6 text-${action.color}-600`}
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {action.label}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Catch Overview Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Catch Overview
                </h3>
                <Badge variant="secondary">2024</Badge>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={catchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="catch"
                    stroke="var(--nafaa-ocean)"
                    fill="var(--nafaa-ocean)"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-gray-600">
                    Total YTD: <strong>4,190 kg</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-600">
                    Average: <strong>466 kg/month</strong>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Recent Activity
                </h3>
                <Link href="/portal/activity">
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activity.status === "completed"
                          ? "bg-green-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      {activity.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Notifications
                </h3>
                <Badge variant="secondary">{notifications.length}</Badge>
              </div>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${
                      notification.type === "warning"
                        ? "bg-red-50 border-red-200"
                        : notification.type === "success"
                        ? "bg-green-50 border-green-200"
                        : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle
                        className={`h-4 w-4 mt-0.5 ${
                          notification.type === "warning"
                            ? "text-red-600"
                            : notification.type === "success"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                      <p className="text-sm text-gray-700 flex-1">
                        {notification.message}
                      </p>
                    </div>
                    <Link href={notification.href}>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        {notification.action}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Upcoming Deadlines
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "License Renewal",
                    subtitle: "Commercial Fishing",
                    date: "Oct 20, 2025",
                    days: 15,
                    urgent: false,
                  },
                  {
                    title: "Payment Due",
                    subtitle: "Annual Fee",
                    date: "Oct 20, 2025",
                    days: 15,
                    urgent: false,
                  },
                  {
                    title: "Catch Report",
                    subtitle: "September 2024",
                    date: "Oct 10, 2025",
                    days: 5,
                    urgent: true,
                  },
                ].map((deadline, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        deadline.urgent ? "bg-red-100" : "bg-blue-100"
                      }`}
                    >
                      <Calendar
                        className={`h-4 w-4 ${
                          deadline.urgent ? "text-red-600" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900">
                        {deadline.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {deadline.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-gray-900">
                        {deadline.days} days
                      </p>
                      <p className="text-xs text-gray-500">{deadline.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our support team is here to assist you with any questions.
              </p>
              <Link href="/about/contact">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-700 hover:bg-gray-100"
                >
                  Contact Support
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
