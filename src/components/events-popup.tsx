"use client";

import { useState, useEffect } from "react";
import { X, Calendar, MapPin, ExternalLink, Clock, Share2, ChevronLeft, ChevronRight, Users, AlertCircle, CheckCircle2, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type Event, getRegistrationStatus, getEventsOnSameDay } from "@/lib/events-data";
import { useCountdown, formatEventDateRange } from "@/hooks/use-countdown";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventsPopupProps {
  event: Event;
  events?: Event[];
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-4"
      >
        <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
          🎉 Event is Live Now!
        </Badge>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {[
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Mins" },
        { value: seconds, label: "Secs" },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-nafaa-ocean-dark via-nafaa-ocean to-nafaa-ocean text-white rounded-xl p-4 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-bold tabular-nums">{item.value}</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-90">{item.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Registration Form Component
function RegistrationForm({ event, onSuccess }: { event: Event; onSuccess?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    onSuccess?.();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          You'll receive a confirmation email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="pl-10"
            placeholder="John Doe"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="pl-10"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="pl-10"
            placeholder="+231 XXX XXXX"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="organization">Organization (Optional)</Label>
        <Input
          id="organization"
          value={formData.organization}
          onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
          placeholder="Your organization"
        />
      </div>

      <div>
        <Label htmlFor="message">Additional Information (Optional)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Any special requirements or questions..."
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-nafaa-ocean-dark to-nafaa-ocean hover:from-nafaa-ocean hover:to-nafaa-ocean-dark"
        size="lg"
      >
        {isSubmitting ? "Submitting..." : "Register Now"}
      </Button>
    </form>
  );
}

export function EventsPopup({ event, events, isOpen: externalIsOpen, onOpenChange, onClose }: EventsPopupProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showRegistration, setShowRegistration] = useState(false);
  
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  
  const allEvents = events || [event];
  const currentEvent = allEvents[currentEventIndex];
  const registrationStatus = getRegistrationStatus(currentEvent);
  const sameDayEvents = getEventsOnSameDay(currentEvent.startDate);

  // Sync with external event prop when sidebar opens
  useEffect(() => {
    if (isOpen && event) {
      const index = allEvents.findIndex(e => e.id === event.id);
      if (index !== -1 && index !== currentEventIndex) {
        setCurrentEventIndex(index);
      }
    }
  }, [isOpen, event, allEvents, currentEventIndex]);

  useEffect(() => {
    if (externalIsOpen === undefined) {
      // Only auto-open on homepage first visit
      const isHomepage = typeof window !== 'undefined' && window.location.pathname === '/';
      const hasSeenPopup = typeof window !== 'undefined' && localStorage.getItem('nafaa-events-seen') === 'true';
      
      if (isHomepage && !hasSeenPopup) {
        const timer = setTimeout(() => {
          setInternalOpen(true);
          localStorage.setItem('nafaa-events-seen', 'true');
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  }, [externalIsOpen]);

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    setShowRegistration(false);
    onClose?.();
  };

  const handleNext = () => {
    setCurrentEventIndex((prev) => (prev + 1) % allEvents.length);
  };

  const handlePrevious = () => {
    setCurrentEventIndex((prev) => (prev - 1 + allEvents.length) % allEvents.length);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full md:w-[480px] bg-white dark:bg-gray-900 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
                  <div className="relative bg-gradient-to-br from-nafaa-ocean-dark via-nafaa-ocean to-[#003A8C] text-white p-6">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                      }} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          {currentEvent.category.toUpperCase()}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleClose}
                          className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <h2 className="text-2xl font-bold mb-3 leading-tight">
                        {currentEvent.title}
                      </h2>

                      {/* Event Image */}
                      {currentEvent.image && (
                        <div className="mb-3 rounded-lg overflow-hidden border-2 border-white/20">
                          <img 
                            src={currentEvent.image} 
                            alt={currentEvent.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatEventDateRange(currentEvent.startDate, currentEvent.endDate)}</span>
                        </div>
                        {currentEvent.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{currentEvent.location}</span>
                          </div>
                        )}
                      </div>

                      {allEvents.length > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/20">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handlePrevious}
                            className="text-white hover:bg-white/20"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <span className="text-sm">
                            Event {currentEventIndex + 1} of {allEvents.length}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleNext}
                            className="text-white hover:bg-white/20"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Same-day events indicator */}
                    {sameDayEvents.length > 1 && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                          <AlertCircle className="h-5 w-5" />
                          <div>
                            <p className="font-semibold">Multiple Events Today</p>
                            <p className="text-sm">{sameDayEvents.length} events scheduled for {currentEvent.startDate.toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Registration Status */}
                    {currentEvent.allowRegistration && (
                      <div className={`rounded-lg p-4 ${
                        registrationStatus.canRegister 
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' 
                          : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                      }`}>
                        <div className="flex items-start gap-3">
                          <Users className={`h-5 w-5 mt-0.5 ${
                            registrationStatus.canRegister ? 'text-emerald-600' : 'text-gray-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">Registration</h4>
                            {registrationStatus.canRegister ? (
                              <>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                  {registrationStatus.spotsLeft !== undefined 
                                    ? `${registrationStatus.spotsLeft} spots remaining`
                                    : 'Open for registration'}
                                </p>
                                <Button
                                  size="sm"
                                  onClick={() => setShowRegistration(!showRegistration)}
                                  className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark"
                                >
                                  {showRegistration ? 'Hide Form' : 'Register Now'}
                                </Button>
                              </>
                            ) : (
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {registrationStatus.reason}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Registration Form */}
                    {showRegistration && registrationStatus.canRegister && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t pt-6"
                      >
                        <h3 className="text-lg font-semibold mb-4">Register for {currentEvent.title}</h3>
                        <RegistrationForm 
                          event={currentEvent}
                          onSuccess={() => {
                            setTimeout(() => setShowRegistration(false), 3000);
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Countdown */}
                    {!showRegistration && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="h-5 w-5 text-nafaa-ocean" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Event Starts In</h3>
                        </div>
                        <CountdownTimer targetDate={currentEvent.startDate} />
                      </div>
                    )}

                    {/* Description */}
                    {!showRegistration && (
                      <div>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          {currentEvent.description}
                        </p>
                      </div>
                    )}

                    {/* Social Media Links */}
                    {!showRegistration && (
                      <div className="border-t pt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Share2 className="h-5 w-5 text-nafaa-ocean" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow for Updates</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentEvent.socialLinks.map((link) => {
                            const Icon = socialIcons[link.platform];
                            return (
                              <Button
                                key={link.platform}
                                variant="outline"
                                size="sm"
                                asChild
                                className="hover:bg-nafaa-ocean hover:text-white hover:border-nafaa-ocean transition-colors"
                              >
                                <a
                                  href={link.url}
                                  target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Icon className="h-4 w-4" />
                                <span className="capitalize">{link.platform}</span>
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                    )}
                  </div>

                  {/* Footer Action */}
                  {!showRegistration && currentEvent.registrationUrl && !currentEvent.allowRegistration && (
                    <div className="p-6 border-t bg-gray-50 dark:bg-gray-800">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-nafaa-ocean-dark to-nafaa-ocean hover:from-nafaa-ocean hover:to-nafaa-ocean-dark"
                        size="lg"
                      >
                        <a href={currentEvent.registrationUrl} className="flex items-center justify-center gap-2">
                          Learn More & Register
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
