"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowLeft,
  Download,
  Plus,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

// Mock payments data
const mockPayments = [
  {
    id: "1",
    invoiceNumber: "INV-2024-0123",
    description: "Commercial Fishing License Renewal",
    amount: "$150.00",
    date: "2024-09-15",
    dueDate: "2024-10-15",
    status: "paid",
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-0089",
    description: "Vessel Registration Fee - Sea Star IV",
    amount: "$200.00",
    date: "2024-08-10",
    dueDate: "2024-09-10",
    status: "paid",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-0234",
    description: "Export License Application",
    amount: "$100.00",
    date: "2024-10-01",
    dueDate: "2024-10-20",
    status: "pending",
    paymentMethod: "",
  },
  {
    id: "4",
    invoiceNumber: "INV-2024-0156",
    description: "Annual Catch Reporting Fee",
    amount: "$75.00",
    date: "2024-09-01",
    dueDate: "2024-10-01",
    status: "overdue",
    paymentMethod: "",
  },
];

// Mock payment methods
const mockPaymentMethods = [
  {
    id: "1",
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "8888",
    expiry: "08/26",
    isDefault: false,
  },
];

export default function PaymentsPage() {
  const [payments] = useState(mockPayments);
  const [paymentMethods] = useState(mockPaymentMethods);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showAddCardDialog, setShowAddCardDialog] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    if (activeTab === "all") return true;
    return payment.status === activeTab;
  });

  const stats = {
    totalPaid: payments
      .filter((p) => p.status === "paid")
      .reduce((sum, p) => sum + parseFloat(p.amount.replace("$", "")), 0),
    pending: payments
      .filter((p) => p.status === "pending")
      .reduce((sum, p) => sum + parseFloat(p.amount.replace("$", "")), 0),
    overdue: payments
      .filter((p) => p.status === "overdue")
      .reduce((sum, p) => sum + parseFloat(p.amount.replace("$", "")), 0),
    totalTransactions: payments.filter((p) => p.status === "paid").length,
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
                  Payments & Billing
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your payments and payment methods
                </p>
              </div>
            </div>
            <Button onClick={() => setShowAddCardDialog(true)}>
              <Plus className="mr-2 h-5 w-5" />
              Add Payment Method
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Paid (YTD)",
              value: `$${stats.totalPaid.toFixed(2)}`,
              color: "green",
              icon: CheckCircle2,
            },
            {
              label: "Pending Payments",
              value: `$${stats.pending.toFixed(2)}`,
              color: "yellow",
              icon: Clock,
            },
            {
              label: "Overdue Amount",
              value: `$${stats.overdue.toFixed(2)}`,
              color: "red",
              icon: AlertCircle,
            },
            {
              label: "Total Transactions",
              value: stats.totalTransactions,
              color: "blue",
              icon: Receipt,
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Filter Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="paid">Paid</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="overdue">Overdue</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Payments List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                Payment History
              </h3>
              {filteredPayments.map((payment, index) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          payment.status === "paid"
                            ? "bg-green-100"
                            : payment.status === "overdue"
                            ? "bg-red-100"
                            : "bg-yellow-100"
                        }`}
                      >
                        {payment.status === "paid" ? (
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        ) : payment.status === "overdue" ? (
                          <AlertCircle className="h-6 w-6 text-red-600" />
                        ) : (
                          <Clock className="h-6 w-6 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-gray-900">
                            {payment.description}
                          </h4>
                          <Badge
                            variant={
                              payment.status === "paid"
                                ? "default"
                                : payment.status === "overdue"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 font-mono">
                          {payment.invoiceNumber}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {payment.amount}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Issue Date</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(payment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Due Date</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(payment.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Payment Method
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {payment.paymentMethod || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {payment.status === "paid" ? (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download Receipt
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedPayment(payment);
                          setShowPaymentDialog(true);
                        }}
                        variant={
                          payment.status === "overdue" ? "destructive" : "default"
                        }
                      >
                        <DollarSign className="mr-2 h-4 w-4" />
                        Pay Now
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPayments.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <Receipt className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No payments found
                </h3>
                <p className="text-gray-600">
                  {activeTab === "all"
                    ? "You have no payment records"
                    : `No ${activeTab} payments available`}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Payment Methods
              </h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {method.type} •••• {method.last4}
                          </p>
                          <p className="text-xs text-gray-500">
                            Expires {method.expiry}
                          </p>
                        </div>
                      </div>
                      {method.isDefault && (
                        <Badge variant="secondary" className="text-xs">
                          Default
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowAddCardDialog(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Card
                </Button>
              </div>
            </div>

            {/* Quick Payment Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">
                Contact our billing support for assistance with payments or
                invoices.
              </p>
              <Link href="/about/contact">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-700 hover:bg-gray-100"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Make Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Make Payment</DialogTitle>
            <DialogDescription>
              Complete payment for {selectedPayment?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Amount Due:</span>
                <span className="text-2xl font-bold text-gray-900">
                  {selectedPayment?.amount}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Invoice: {selectedPayment?.invoiceNumber}
              </p>
            </div>

            <div>
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.id} value={method.id}>
                      {method.type} •••• {method.last4}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Your payment will be processed securely. You'll receive a
                confirmation email once the payment is complete.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowPaymentDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowPaymentDialog(false);
                alert("Payment processed successfully!");
              }}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Pay {selectedPayment?.amount}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Card Dialog */}
      <Dialog open={showAddCardDialog} onOpenChange={setShowAddCardDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Add a new credit or debit card to your account
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" maxLength={5} />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" maxLength={4} type="password" />
              </div>
            </div>
            <div>
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input id="cardName" placeholder="John Doe" />
            </div>
          </form>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddCardDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowAddCardDialog(false)}>
              Add Card
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
