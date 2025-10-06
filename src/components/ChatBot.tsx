"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  FileText,
  Ship,
  DollarSign,
  HelpCircle,
  ExternalLink,
  Minimize2,
  Gift,
  Zap,
  Mail,
  BarChart3,
  Fish,
  MapPin,
  CheckCircle,
  Search,
  TrendingUp,
  Download,
  Target,
  Clock,
  Phone,
  Building2,
  RefreshCw,
  Anchor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  quickActions?: QuickAction[];
  links?: MessageLink[];
}

interface QuickAction {
  label: string;
  action: string;
}

interface MessageLink {
  label: string;
  href: string;
}

// Knowledge base for the chatbot
const knowledgeBase = {
  greetings: [
    "Hello! I'm the NFAA Virtual Assistant. How can I help you today?",
    "Hi there! Welcome to the National Fisheries and Aquaculture Authority. What can I assist you with?",
    "Greetings! I'm here to help with your fishing and aquaculture needs.",
  ],
  
  fishingLicense: {
    info: "We offer three types of fishing licenses:\n\n• Commercial License - $800\nFor large-scale commercial fishing operations. Requires business registration.\n\n• Artisanal License - $150\nFor traditional small-scale fishing. Supports local fishermen.\n\n• Recreational License - $50\nFor hobby fishing and personal use.\n\nWould you like to apply for a license?",
    requirements: "To apply for a fishing license, you'll need:\n\n✓ Valid government-issued ID\n✓ Proof of address\n✓ Vessel registration (if applicable)\n✓ Business documents (for commercial)\n✓ Insurance certificate (vessels over 15m)\n\nReady to start your application?",
    process: "The application process is simple:\n\n1. Choose your license type\n2. Fill out personal/business information\n3. Provide vessel and fishing details\n4. Upload required documents\n5. Review and submit\n\nYou'll receive a tracking number immediately!",
  },
  
  vesselRegistration: {
    info: "We register four types of vessels:\n\n• Commercial Vessel - $1,200\nFor commercial fishing operations\n\n• Artisanal Vessel - $300\nFor traditional fishing boats\n\n• Carrier Vessel - $1,500\nFor fish transport and processing\n\n• Recreational Vessel - $150\nFor personal use\n\nWould you like to register your vessel?",
    requirements: "For vessel registration, you'll need:\n\n✓ Proof of ownership\n✓ Builder's certificate\n✓ Vessel specifications (dimensions, tonnage, engine)\n✓ Business registration (for commercial)\n✓ Insurance certificate\n✓ Multiple vessel photos\n\nShall I guide you to the registration form?",
  },
  
  renewal: {
    info: "License renewal is easy and offers benefits:\n\n• Early Renewal Discount - 10% off if you renew 30+ days before expiry\n• Save money by planning ahead\n• Quick process - reuse existing information\n• Receive reminders before expiry\n\nWant to renew your license now?",
    discount: "Yes! We offer a 10% early renewal discount if you renew your license 30 or more days before it expires. For example:\n\n• Commercial license: $800 → $720 (save $80)\n• Artisanal license: $150 → $135 (save $15)\n• Recreational license: $50 → $45 (save $5)\n\nCheck your dashboard to see if you qualify!",
  },
  
  catchReporting: {
    info: "Catch reporting helps us manage sustainable fisheries:\n\n• Submit reports after each fishing trip\n• Record species, weight, and quantities\n• Provide GPS coordinates\n• Reporting is FREE\n• Required for license compliance\n\nReady to submit a catch report?",
    howTo: "Submitting a catch report is straightforward:\n\n1. Enter trip details (dates, location, crew)\n2. Add catch entries (species, weight, quantity)\n3. Provide GPS coordinates\n4. Add fishing method used\n5. Upload photos (optional)\n6. Submit and get reference number\n\nShall I open the report form for you?",
  },
  
  portal: {
    info: "Your NaFAA Portal Dashboard is your command center:\n\n• View all applications in one place\n• Search by tracking number\n• Track application status\n• Download approved documents\n• Quick access to new applications\n\nYou can manage licenses, vessels, renewals, and reports all from one screen!",
    tracking: "You can track your applications easily:\n\n1. Go to your Portal Dashboard\n2. Find the unified applications table\n3. Search by tracking number (FL-, VR-, RN-, CR-)\n4. Filter by status or type\n5. View details, download documents, or cancel pending items\n\nEach application has a unique tracking number for easy reference!",
  },
  
  fees: {
    summary: "Here's a quick fee summary:\n\nFishing Licenses:\n• Commercial: $800\n• Artisanal: $150\n• Recreational: $50\n\nVessel Registration:\n• Commercial: $1,200\n• Artisanal: $300\n• Carrier: $1,500\n• Recreational: $150\n\nOther Services:\n• Catch Reporting: FREE\n• Early Renewal: 10% discount\n\nAll fees help maintain sustainable fisheries!",
  },
  
  contact: {
    info: "Need to reach us?\n\n• Email: info@nafaa.gov.lr\n• Phone: +231-XXX-XXXX\n• Office: Ministry of Agriculture, Monrovia\n• Hours: Mon-Fri, 8am-5pm\n\nOr use our contact form for specific inquiries!",
  },
  
  help: {
    general: "I can help you with:\n\n• Fishing license information and applications\n• Vessel registration\n• License renewals and discounts\n• Catch reporting requirements\n• Fees and payment information\n• Application tracking\n• Contact information\n\nWhat would you like to know more about?",
  },
};

// Quick action presets
const defaultQuickActions: QuickAction[] = [
  { label: "Apply for License", action: "apply-license" },
  { label: "Register Vessel", action: "register-vessel" },
  { label: "Track Application", action: "track-application" },
  { label: "View Fees", action: "view-fees" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: knowledgeBase.greetings[0],
        sender: "bot",
        timestamp: new Date(),
        quickActions: defaultQuickActions,
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Generate bot response based on user input
  const generateResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let responseText = "";
    let quickActions: QuickAction[] | undefined;
    let links: MessageLink[] | undefined;

    // Greetings
    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      responseText =
        knowledgeBase.greetings[
          Math.floor(Math.random() * knowledgeBase.greetings.length)
        ];
      quickActions = defaultQuickActions;
    }
    // Fishing license queries
    else if (
      input.includes("fishing") &&
      (input.includes("license") || input.includes("permit"))
    ) {
      if (input.includes("requirement") || input.includes("need")) {
        responseText = knowledgeBase.fishingLicense.requirements;
        links = [
          { label: "Apply Now", href: "/portal/licenses/apply" },
          { label: "Learn More", href: "/services/fishing-licenses" },
        ];
      } else if (input.includes("process") || input.includes("how")) {
        responseText = knowledgeBase.fishingLicense.process;
        links = [{ label: "Start Application", href: "/portal/licenses/apply" }];
      } else {
        responseText = knowledgeBase.fishingLicense.info;
        quickActions = [
          { label: "See Requirements", action: "license-requirements" },
          { label: "Apply Now", action: "apply-license" },
          { label: "View Fees", action: "view-fees" },
        ];
      }
    }
    // Vessel registration
    else if (
      input.includes("vessel") ||
      input.includes("boat") ||
      input.includes("ship")
    ) {
      if (input.includes("requirement") || input.includes("need")) {
        responseText = knowledgeBase.vesselRegistration.requirements;
        links = [
          { label: "Register Vessel", href: "/portal/vessels/register" },
          { label: "Learn More", href: "/services/vessel-registration" },
        ];
      } else {
        responseText = knowledgeBase.vesselRegistration.info;
        quickActions = [
          { label: "See Requirements", action: "vessel-requirements" },
          { label: "Register Now", action: "register-vessel" },
        ];
      }
    }
    // License renewal
    else if (input.includes("renew")) {
      if (input.includes("discount") || input.includes("save")) {
        responseText = knowledgeBase.renewal.discount;
        links = [{ label: "Renew License", href: "/portal/licenses/renew" }];
      } else {
        responseText = knowledgeBase.renewal.info;
        quickActions = [
          { label: "Renew Now", action: "renew-license" },
          { label: "Check My Licenses", action: "track-application" },
        ];
      }
    }
    // Catch reporting
    else if (
      input.includes("catch") ||
      input.includes("report") ||
      input.includes("reporting")
    ) {
      if (input.includes("how") || input.includes("submit")) {
        responseText = knowledgeBase.catchReporting.howTo;
        links = [{ label: "Submit Report", href: "/portal/reports/submit" }];
      } else {
        responseText = knowledgeBase.catchReporting.info;
        quickActions = [
          { label: "Submit Report", action: "submit-report" },
          { label: "Learn More", action: "report-info" },
        ];
      }
    }
    // Fees
    else if (
      input.includes("fee") ||
      input.includes("cost") ||
      input.includes("price") ||
      input.includes("pay")
    ) {
      responseText = knowledgeBase.fees.summary;
      quickActions = [
        { label: "Apply for License", action: "apply-license" },
        { label: "Register Vessel", action: "register-vessel" },
      ];
    }
    // Tracking
    else if (
      input.includes("track") ||
      input.includes("status") ||
      input.includes("application")
    ) {
      responseText = knowledgeBase.portal.tracking;
      links = [{ label: "Go to Dashboard", href: "/portal/dashboard" }];
    }
    // Portal/Dashboard
    else if (input.includes("portal") || input.includes("dashboard")) {
      responseText = knowledgeBase.portal.info;
      links = [{ label: "Open Portal", href: "/portal/dashboard" }];
    }
    // Contact
    else if (input.includes("contact") || input.includes("reach")) {
      responseText = knowledgeBase.contact.info;
      links = [{ label: "Contact Form", href: "/about/contact" }];
    }
    // Help
    else if (input.includes("help")) {
      responseText = knowledgeBase.help.general;
      quickActions = defaultQuickActions;
    }
    // Default response
    else {
      responseText =
        "I'm not sure I understand that question. Here's what I can help you with:\n\n" +
        knowledgeBase.help.general;
      quickActions = defaultQuickActions;
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      sender: "bot",
      timestamp: new Date(),
      quickActions,
      links,
    };
  };

  // Handle sending a message
  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Only clear input if we're using the input field
    if (!messageText) {
      setInputValue("");
    }

    // Show typing indicator
    setIsTyping(true);

    // Generate bot response after a delay
    setTimeout(() => {
      const botResponse = generateResponse(textToSend);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  // Handle quick action click
  const handleQuickAction = (action: string) => {
    let query = "";

    switch (action) {
      case "apply-license":
        query = "I want to apply for a fishing license";
        break;
      case "register-vessel":
        query = "I want to register my vessel";
        break;
      case "renew-license":
        query = "I want to renew my license";
        break;
      case "submit-report":
        query = "I want to submit a catch report";
        break;
      case "track-application":
        query = "How do I track my application?";
        break;
      case "view-fees":
        query = "What are the fees?";
        break;
      case "license-requirements":
        query = "What are the fishing license requirements?";
        break;
      case "vessel-requirements":
        query = "What do I need to register a vessel?";
        break;
      case "report-info":
        query = "Tell me more about catch reporting";
        break;
      default:
        query = action;
    }

    handleSendMessage(query);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean hover:from-nafaa-ocean-dark hover:to-nafaa-ocean-dark shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "600px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            style={{ maxHeight: isMinimized ? "60px" : "600px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-semibold">NFAA Assistant</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${
                        message.sender === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user"
                            ? "bg-nafaa-ocean"
                            : "bg-gray-200"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-gray-700" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div
                        className={`flex flex-col gap-2 max-w-[75%] ${
                          message.sender === "user"
                            ? "items-end"
                            : "items-start"
                        }`}
                      >
                        <div
                          className={`px-4 py-2.5 rounded-2xl whitespace-pre-line text-sm ${
                            message.sender === "user"
                              ? "bg-nafaa-ocean text-white rounded-br-sm"
                              : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                          }`}
                        >
                          {message.text}
                        </div>

                        {/* Links */}
                        {message.links && message.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {message.links.map((link, index) => (
                              <Link key={index} href={link.href}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 text-xs"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.label}
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Quick Actions */}
                        {message.quickActions &&
                          message.quickActions.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {message.quickActions.map((action, index) => (
                                <button
                                  key={index}
                                  onClick={() =>
                                    handleQuickAction(action.action)
                                  }
                                  className="px-3 py-1.5 text-xs font-medium text-nafaa-ocean bg-blue-50 hover:bg-blue-100 rounded-full transition-colors border border-nafaa-ocean/30"
                                >
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          )}

                        {/* Timestamp */}
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-gray-700" />
                      </div>
                      <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-sm shadow-sm border border-gray-100">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay: 0,
                            }}
                            className="h-2 w-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay: 0.2,
                            }}
                            className="h-2 w-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay: 0.4,
                            }}
                            className="h-2 w-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about our services..."
                      className="flex-1"
                    />
                    <Button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Try asking about licenses, vessels, fees, or renewals
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
