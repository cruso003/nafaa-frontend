"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Eye,
  Send,
  Paperclip,
  X,
  ArrowLeft,
  User,
  Calendar,
  Tag,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock tickets data
const mockTickets = [
  {
    id: "TKT-2024-001",
    subject: "Issue with vessel registration payment",
    category: "Payment",
    priority: "High",
    status: "Open",
    createdDate: "2024-10-05",
    lastUpdated: "2024-10-06",
    description: "Payment for vessel registration was deducted but status still shows pending.",
    replies: [
      {
        id: 1,
        author: "John Doe",
        role: "User",
        message: "Payment for vessel registration was deducted but status still shows pending.",
        timestamp: "2024-10-05 10:30 AM",
      },
      {
        id: 2,
        author: "Support Team",
        role: "Staff",
        message: "We're looking into this issue. Can you provide the transaction reference number?",
        timestamp: "2024-10-05 2:15 PM",
      },
      {
        id: 3,
        author: "John Doe",
        role: "User",
        message: "Transaction reference: TXN-2024-ABC123",
        timestamp: "2024-10-06 9:00 AM",
      },
    ],
  },
  {
    id: "TKT-2024-002",
    subject: "Cannot access license renewal page",
    category: "Technical",
    priority: "Medium",
    status: "In Progress",
    createdDate: "2024-10-03",
    lastUpdated: "2024-10-04",
    description: "Getting error 404 when trying to access license renewal section.",
    replies: [
      {
        id: 1,
        author: "Jane Smith",
        role: "User",
        message: "Getting error 404 when trying to access license renewal section.",
        timestamp: "2024-10-03 3:45 PM",
      },
      {
        id: 2,
        author: "Support Team",
        role: "Staff",
        message: "We've identified the issue and our technical team is working on a fix. Expected resolution within 24 hours.",
        timestamp: "2024-10-04 11:00 AM",
      },
    ],
  },
  {
    id: "TKT-2024-003",
    subject: "Question about catch reporting requirements",
    category: "General",
    priority: "Low",
    status: "Resolved",
    createdDate: "2024-09-28",
    lastUpdated: "2024-09-29",
    description: "What documents do I need to submit with monthly catch reports?",
    replies: [
      {
        id: 1,
        author: "Mike Johnson",
        role: "User",
        message: "What documents do I need to submit with monthly catch reports?",
        timestamp: "2024-09-28 1:20 PM",
      },
      {
        id: 2,
        author: "Support Team",
        role: "Staff",
        message: "For catch reports, you need to submit: 1) Catch log book, 2) Landing certificates, 3) Sales receipts. All documents should be in PDF format.",
        timestamp: "2024-09-29 10:30 AM",
      },
      {
        id: 3,
        author: "Mike Johnson",
        role: "User",
        message: "Thank you! That's very helpful.",
        timestamp: "2024-09-29 11:45 AM",
      },
    ],
  },
];

const categories = [
  "All Categories",
  "Technical",
  "License",
  "Vessel",
  "Payment",
  "Reporting",
  "General",
];

const priorities = ["Low", "Medium", "High", "Urgent"];

const statuses = ["All Status", "Open", "In Progress", "Resolved", "Closed"];

export default function SupportPage() {
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [newReply, setNewReply] = useState("");

  // New ticket form state
  const [newTicket, setNewTicket] = useState({
    subject: "",
    category: "",
    priority: "Medium",
    description: "",
  });

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const ticket = {
      id: `TKT-2024-${String(tickets.length + 1).padStart(3, "0")}`,
      subject: newTicket.subject,
      category: newTicket.category,
      priority: newTicket.priority,
      status: "Open",
      createdDate: new Date().toISOString().split("T")[0],
      lastUpdated: new Date().toISOString().split("T")[0],
      description: newTicket.description,
      replies: [
        {
          id: 1,
          author: "John Doe",
          role: "User",
          message: newTicket.description,
          timestamp: new Date().toLocaleString(),
        },
      ],
    };
    setTickets([ticket, ...tickets]);
    setIsCreateDialogOpen(false);
    setNewTicket({ subject: "", category: "", priority: "Medium", description: "" });
  };

  const handleSendReply = () => {
    if (!selectedTicket || !newReply.trim()) return;

    const updatedTicket = {
      ...selectedTicket,
      replies: [
        ...selectedTicket.replies,
        {
          id: selectedTicket.replies.length + 1,
          author: "John Doe",
          role: "User",
          message: newReply,
          timestamp: new Date().toLocaleString(),
        },
      ],
      lastUpdated: new Date().toISOString().split("T")[0],
    };

    setTickets(tickets.map((t) => (t.id === selectedTicket.id ? updatedTicket : t)));
    setSelectedTicket(updatedTicket);
    setNewReply("");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="h-4 w-4" />;
      case "In Progress":
        return <Clock className="h-4 w-4" />;
      case "Resolved":
        return <CheckCircle2 className="h-4 w-4" />;
      case "Closed":
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Resolved":
        return "bg-green-100 text-green-700 border-green-200";
      case "Closed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "Medium":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "High":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Urgent":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "All Categories" || ticket.category === filterCategory;
    const matchesStatus = filterStatus === "All Status" || ticket.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const ticketStats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "Open").length,
    inProgress: tickets.filter((t) => t.status === "In Progress").length,
    resolved: tickets.filter((t) => t.status === "Resolved").length,
  };

  if (selectedTicket) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back button */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => setSelectedTicket(null)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tickets
          </Button>

          <Card className="border-0 shadow-lg">
            <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="font-mono">
                      {selectedTicket.id}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(selectedTicket.status)} border`}
                    >
                      {getStatusIcon(selectedTicket.status)}
                      <span className="ml-1">{selectedTicket.status}</span>
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${getPriorityColor(selectedTicket.priority)} border`}
                    >
                      {selectedTicket.priority} Priority
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-nafaa-ocean">
                    {selectedTicket.subject}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {selectedTicket.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Created: {selectedTicket.createdDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <RefreshCw className="h-4 w-4" />
                      Updated: {selectedTicket.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Conversation thread */}
              <div className="space-y-4 mb-6">
                {selectedTicket.replies.map((reply, index) => (
                  <motion.div
                    key={reply.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-3 ${
                      reply.role === "Staff" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        reply.role === "Staff"
                          ? "bg-nafaa-ocean text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <User className="h-5 w-5" />
                    </div>
                    <div
                      className={`flex-1 ${
                        reply.role === "Staff" ? "text-right" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">
                          {reply.author}
                        </span>
                        {reply.role === "Staff" && (
                          <Badge className="text-xs bg-nafaa-ocean">Staff</Badge>
                        )}
                        <span className="text-xs text-gray-500">
                          {reply.timestamp}
                        </span>
                      </div>
                      <div
                        className={`inline-block p-4 rounded-lg ${
                          reply.role === "Staff"
                            ? "bg-blue-50 border border-blue-100"
                            : "bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <p className="text-gray-700 text-left">{reply.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Reply form */}
              {selectedTicket.status !== "Closed" && (
                <div className="border-t pt-6">
                  <Label className="mb-2 block">Add Reply</Label>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your message..."
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      className="flex-1"
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach File
                    </Button>
                    <Button
                      onClick={handleSendReply}
                      disabled={!newReply.trim()}
                      className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-nafaa-ocean mb-2">
            Support Tickets
          </h1>
          <p className="text-gray-600">
            Create and manage your support requests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-0 shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Tickets</p>
                  <p className="text-3xl font-bold text-nafaa-ocean">
                    {ticketStats.total}
                  </p>
                </div>
                <MessageSquare className="h-10 w-10 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Open</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {ticketStats.open}
                  </p>
                </div>
                <AlertCircle className="h-10 w-10 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {ticketStats.inProgress}
                  </p>
                </div>
                <Clock className="h-10 w-10 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">
                    {ticketStats.resolved}
                  </p>
                </div>
                <CheckCircle2 className="h-10 w-10 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <Card className="border-0 shadow mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tickets by ID or subject..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Create Ticket Button */}
              <Dialog
                open={isCreateDialogOpen}
                onOpenChange={setIsCreateDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark whitespace-nowrap">
                    <Plus className="h-4 w-4 mr-2" />
                    New Ticket
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create Support Ticket</DialogTitle>
                    <DialogDescription>
                      Describe your issue and we'll get back to you as soon as
                      possible.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateTicket} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your issue"
                        value={newTicket.subject}
                        onChange={(e) =>
                          setNewTicket({ ...newTicket, subject: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select
                          value={newTicket.category}
                          onValueChange={(value) =>
                            setNewTicket({ ...newTicket, category: value })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories
                              .filter((c) => c !== "All Categories")
                              .map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                  {cat}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="priority">Priority *</Label>
                        <Select
                          value={newTicket.priority}
                          onValueChange={(value) =>
                            setNewTicket({ ...newTicket, priority: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {priorities.map((priority) => (
                              <SelectItem key={priority} value={priority}>
                                {priority}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about your issue..."
                        rows={5}
                        value={newTicket.description}
                        onChange={(e) =>
                          setNewTicket({
                            ...newTicket,
                            description: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                      >
                        <Paperclip className="h-4 w-4 mr-2" />
                        Attach Files
                      </Button>
                    </div>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsCreateDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark"
                      >
                        Create Ticket
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Tickets List */}
        <Card className="border-0 shadow">
          <CardContent className="p-6">
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No tickets found
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery || filterCategory !== "All Categories" || filterStatus !== "All Status"
                    ? "Try adjusting your filters"
                    : "Create your first support ticket to get started"}
                </p>
                <Button
                  onClick={() => setIsCreateDialogOpen(true)}
                  className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Ticket
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 border rounded-lg hover:border-nafaa-ocean hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="font-mono text-xs">
                            {ticket.id}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getStatusColor(
                              ticket.status
                            )} border`}
                          >
                            {getStatusIcon(ticket.status)}
                            <span className="ml-1">{ticket.status}</span>
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getPriorityColor(
                              ticket.priority
                            )} border`}
                          >
                            {ticket.priority}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {ticket.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {ticket.subject}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {ticket.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {ticket.createdDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {ticket.replies.length} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" />
                            Updated: {ticket.lastUpdated}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-4"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="border-0 shadow mt-6 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-nafaa-ocean mb-2">
              Need immediate assistance?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              For urgent matters, you can contact our support team directly:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+231-XXX-XXXX">
                <Button variant="outline" size="sm">
                  📞 Call Support
                </Button>
              </Link>
              <Link href="mailto:support@nafaa.gov.lr">
                <Button variant="outline" size="sm">
                  ✉️ Email Support
                </Button>
              </Link>
              <Link href="/resources/faq">
                <Button variant="outline" size="sm">
                  ❓ View FAQs
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
