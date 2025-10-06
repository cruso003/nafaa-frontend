"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  CreditCard,
  CheckCircle,
  Clock,
  ArrowLeft,
  Shield,
  Download,
  DollarSign,
  Smartphone,
  Building2,
  Receipt,
  Info,
} from "lucide-react";

const paymentTypes = [
  {
    id: "vessel-registration",
    name: "Vessel Registration",
    basePrice: 150,
    description: "New vessel registration fee",
  },
  {
    id: "license-fee",
    name: "Fishing License",
    basePrice: 800,
    description: "Annual fishing license fee",
  },
  {
    id: "license-renewal",
    name: "License Renewal",
    basePrice: 800,
    description: "Renew existing license",
  },
  {
    id: "penalty",
    name: "Penalty/Fine",
    basePrice: 0,
    description: "Late submission or violation penalties",
  },
  {
    id: "other",
    name: "Other Fees",
    basePrice: 0,
    description: "Other NaFAA services",
  },
];

const paymentMethods = [
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, American Express",
    processingTime: "Instant",
    fee: "$3.00",
  },
  {
    id: "mobile-money",
    name: "Mobile Money",
    icon: Smartphone,
    description: "Orange Money, MTN Money, Lonestar Cell MTN",
    processingTime: "Instant",
    fee: "2%",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    icon: Building2,
    description: "Direct bank transfer to NaFAA account",
    processingTime: "1-2 business days",
    fee: "Free",
  },
];

const feeStructure = [
  { category: "Commercial Vessel (>15m)", registration: "$500", license: "$800/year" },
  { category: "Commercial Vessel (<15m)", registration: "$300", license: "$500/year" },
  { category: "Artisanal Vessel", registration: "$150", license: "$150/year" },
  { category: "Recreational Boat", registration: "$100", license: "$50/year" },
];

export default function PaymentsPage() {
  const [paymentType, setPaymentType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    referenceNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentTypeChange = (value: string) => {
    setPaymentType(value);
    const selectedType = paymentTypes.find((pt) => pt.id === value);
    if (selectedType && selectedType.basePrice > 0) {
      setAmount(selectedType.basePrice.toString());
    } else {
      setAmount("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment processing:", { formData, paymentType, paymentMethod, amount });
    alert("Redirecting to payment gateway...");
  };

  const selectedMethod = paymentMethods.find((pm) => pm.id === paymentMethod);
  const PaymentIcon = selectedMethod?.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#C60C30] to-[#E11D48] text-white py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Fee Payments
              </h1>
              <p className="text-xl text-red-100">
                Pay registration fees, licenses, and penalties securely online
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Security Badge */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-10 w-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">
                      Secure Payments
                    </h3>
                    <p className="text-sm text-green-700">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fee Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-[#C60C30]" />
                  Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feeStructure.map((fee, index) => (
                    <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                      <p className="font-semibold text-sm mb-2">{fee.category}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-gray-600">Registration:</p>
                          <p className="font-semibold">{fee.registration}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">License:</p>
                          <p className="font-semibold">{fee.license}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Accepted Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.id} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">{method.name}</p>
                          <p className="text-xs text-gray-600">{method.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Need Assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Questions about payments or fees? Our team is here to help.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>
                  Complete the form below to process your payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Type Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#002868] mb-4">
                      What are you paying for?
                    </h3>
                    <RadioGroup value={paymentType} onValueChange={handlePaymentTypeChange}>
                      <div className="space-y-3">
                        {paymentTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                              paymentType === type.id
                                ? "border-[#C60C30] bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <RadioGroupItem value={type.id} id={type.id} />
                            <label htmlFor={type.id} className="flex-1 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-semibold">{type.name}</p>
                                  <p className="text-sm text-gray-600">{type.description}</p>
                                </div>
                                {type.basePrice > 0 && (
                                  <Badge variant="outline">${type.basePrice}</Badge>
                                )}
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment Details */}
                  {paymentType && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold text-[#002868] mb-4">
                        Payment Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+231 XXX XXX XXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="licenseNumber">
                            License/Vessel Number {paymentType !== "penalty" && "*"}
                          </Label>
                          <Input
                            id="licenseNumber"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleInputChange}
                            required={paymentType !== "penalty"}
                            placeholder="FL-2024-12345"
                          />
                        </div>
                        {paymentType === "penalty" && (
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="referenceNumber">Penalty Reference Number *</Label>
                            <Input
                              id="referenceNumber"
                              name="referenceNumber"
                              value={formData.referenceNumber}
                              onChange={handleInputChange}
                              required
                              placeholder="PEN-2024-XXXXX"
                            />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount (USD) *</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="amount"
                              name="amount"
                              type="number"
                              step="0.01"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              required
                              className="pl-10"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Payment Method Selection */}
                  {paymentType && amount && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <h3 className="text-lg font-semibold text-[#002868] mb-4">
                        Choose Payment Method
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon;
                          return (
                            <Card
                              key={method.id}
                              className={`cursor-pointer transition-all ${
                                paymentMethod === method.id
                                  ? "border-[#C60C30] border-2 shadow-md"
                                  : "hover:shadow-sm"
                              }`}
                              onClick={() => setPaymentMethod(method.id)}
                            >
                              <CardContent className="pt-6">
                                <div className="text-center space-y-3">
                                  <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${
                                    paymentMethod === method.id
                                      ? "bg-red-100 text-[#C60C30]"
                                      : "bg-gray-100 text-gray-400"
                                  }`}>
                                    <Icon className="h-7 w-7" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-sm">{method.name}</p>
                                    <p className="text-xs text-gray-600 mt-1">{method.description}</p>
                                  </div>
                                  <div className="pt-2 border-t space-y-1">
                                    <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {method.processingTime}
                                    </p>
                                    <p className="text-xs font-semibold">Fee: {method.fee}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Payment Summary */}
                  {paymentMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Card className="bg-gray-50">
                        <CardHeader>
                          <CardTitle className="text-base">Payment Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Payment Type:</span>
                              <span className="font-semibold">
                                {paymentTypes.find((pt) => pt.id === paymentType)?.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount:</span>
                              <span className="font-semibold">${amount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Processing Fee:</span>
                              <span className="font-semibold">{selectedMethod?.fee}</span>
                            </div>
                            <div className="pt-3 border-t flex justify-between">
                              <span className="text-lg font-semibold">Total:</span>
                              <span className="text-2xl font-bold text-[#C60C30]">
                                ${selectedMethod?.fee === "Free" 
                                  ? parseFloat(amount).toFixed(2)
                                  : (parseFloat(amount) + 3).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  {paymentMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="space-y-4"
                    >
                      <Button type="submit" size="lg" className="w-full">
                        {PaymentIcon && <PaymentIcon className="mr-2 h-5 w-5" />}
                        Proceed to Payment
                      </Button>

                      <div className="flex items-start gap-2 text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="mb-2">
                            You will be redirected to a secure payment gateway to complete your transaction. 
                            After successful payment, you will receive:
                          </p>
                          <ul className="space-y-1 ml-4 list-disc">
                            <li>Email confirmation with receipt</li>
                            <li>SMS notification</li>
                            <li>Official receipt (downloadable from portal)</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Payments</CardTitle>
                    <CardDescription>View your payment history</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/portal">
                      View All <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Receipt className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">
                    Login to your portal to view payment history
                  </p>
                  <Button variant="link" asChild className="mt-2">
                    <Link href="/portal">Login to Portal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
