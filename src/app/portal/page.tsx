"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ship,
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  LogIn,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Reset password state
  const [resetEmail, setResetEmail] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = "/portal/dashboard";
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration successful! Please check your email to verify your account.");
      setActiveTab("login");
    }, 1500);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setResetEmailSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-blue-600 rounded-2xl">
                <Ship className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  NaFAA Portal
                </h1>
                <p className="text-gray-600">Fisheries Management System</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Your Fisheries Account
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Manage your vessels, licenses, catch reports, and payments all in
              one convenient location.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Ship,
                  title: "Vessel Management",
                  description: "Register and manage your fishing vessels",
                },
                {
                  icon: CheckCircle2,
                  title: "License Tracking",
                  description: "View and renew your fishing licenses",
                },
                {
                  icon: AlertCircle,
                  title: "Catch Reporting",
                  description: "Submit catch reports online",
                },
                {
                  icon: Mail,
                  title: "Payment Processing",
                  description: "Pay fees and track payment history",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Need help?</strong> Contact our support team at{" "}
                <a
                  href="mailto:support@nafaa.gov.lr"
                  className="text-blue-600 hover:underline"
                >
                  support@nafaa.gov.lr
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+231-77-000-0000"
                  className="text-blue-600 hover:underline"
                >
                  +231-77-000-0000
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right side - Auth Forms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
          >
            <AnimatePresence mode="wait">
              {showResetForm ? (
                // Password Reset Form
                <motion.div
                  key="reset"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {resetEmailSent ? (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Check Your Email
                      </h2>
                      <p className="text-gray-600 mb-6">
                        We've sent password reset instructions to{" "}
                        <strong>{resetEmail}</strong>
                      </p>
                      <Button
                        onClick={() => {
                          setShowResetForm(false);
                          setResetEmailSent(false);
                          setResetEmail("");
                        }}
                        className="w-full"
                      >
                        Back to Login
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Reset Password
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Enter your email address and we'll send you instructions
                        to reset your password.
                      </p>
                      <form onSubmit={handleResetPassword} className="space-y-4">
                        <div>
                          <Label htmlFor="resetEmail">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="resetEmail"
                              type="email"
                              required
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                              placeholder="your.email@example.com"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? "Sending..." : "Send Reset Instructions"}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="w-full"
                          onClick={() => setShowResetForm(false)}
                        >
                          Back to Login
                        </Button>
                      </form>
                    </>
                  )}
                </motion.div>
              ) : (
                // Login/Register Forms
                <motion.div
                  key="auth"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="login" className="flex items-center gap-2">
                        <LogIn className="h-4 w-4" />
                        Login
                      </TabsTrigger>
                      <TabsTrigger value="register" className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Register
                      </TabsTrigger>
                    </TabsList>

                    {/* Login Form */}
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="loginEmail">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="loginEmail"
                              type="email"
                              required
                              value={loginData.email}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="your.email@example.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="loginPassword">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="loginPassword"
                              type={showPassword ? "text" : "password"}
                              required
                              value={loginData.password}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  password: e.target.value,
                                })
                              }
                              placeholder="Enter your password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="rememberMe"
                              checked={loginData.rememberMe}
                              onCheckedChange={(checked) =>
                                setLoginData({
                                  ...loginData,
                                  rememberMe: checked as boolean,
                                })
                              }
                            />
                            <Label
                              htmlFor="rememberMe"
                              className="text-sm cursor-pointer"
                            >
                              Remember me
                            </Label>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowResetForm(true)}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Forgot password?
                          </button>
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            "Logging in..."
                          ) : (
                            <>
                              Login
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>

                        <div className="relative my-6">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">
                              Demo Credentials
                            </span>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-sm">
                          <p className="font-semibold text-gray-900 mb-2">
                            Use these credentials to test:
                          </p>
                          <p className="text-gray-600">
                            Email: <strong>demo@nafaa.gov.lr</strong>
                            <br />
                            Password: <strong>demo123</strong>
                          </p>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Register Form */}
                    <TabsContent value="register">
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                id="firstName"
                                required
                                value={registerData.firstName}
                                onChange={(e) =>
                                  setRegisterData({
                                    ...registerData,
                                    firstName: e.target.value,
                                  })
                                }
                                placeholder="John"
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              required
                              value={registerData.lastName}
                              onChange={(e) =>
                                setRegisterData({
                                  ...registerData,
                                  lastName: e.target.value,
                                })
                              }
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="registerEmail">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="registerEmail"
                              type="email"
                              required
                              value={registerData.email}
                              onChange={(e) =>
                                setRegisterData({
                                  ...registerData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="your.email@example.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={registerData.phone}
                              onChange={(e) =>
                                setRegisterData({
                                  ...registerData,
                                  phone: e.target.value,
                                })
                              }
                              placeholder="+231-77-123-4567"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="registerPassword">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="registerPassword"
                              type={showPassword ? "text" : "password"}
                              required
                              value={registerData.password}
                              onChange={(e) =>
                                setRegisterData({
                                  ...registerData,
                                  password: e.target.value,
                                })
                              }
                              placeholder="Create a strong password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            At least 8 characters with numbers and letters
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              required
                              value={registerData.confirmPassword}
                              onChange={(e) =>
                                setRegisterData({
                                  ...registerData,
                                  confirmPassword: e.target.value,
                                })
                              }
                              placeholder="Confirm your password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="agreeToTerms"
                            checked={registerData.agreeToTerms}
                            onCheckedChange={(checked) =>
                              setRegisterData({
                                ...registerData,
                                agreeToTerms: checked as boolean,
                              })
                            }
                            required
                          />
                          <Label
                            htmlFor="agreeToTerms"
                            className="text-sm leading-relaxed cursor-pointer"
                          >
                            I agree to the{" "}
                            <a
                              href="/resources/policies"
                              className="text-blue-600 hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="/resources/policies"
                              className="text-blue-600 hover:underline"
                            >
                              Privacy Policy
                            </a>
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isLoading || !registerData.agreeToTerms}
                        >
                          {isLoading ? (
                            "Creating Account..."
                          ) : (
                            <>
                              Create Account
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
