"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, ExternalLink, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Event } from "@/lib/events-data";
import { useCountdown, formatEventDateRange } from "@/hooks/use-countdown";
import { motion, AnimatePresence } from "framer-motion";

interface EventsBannerProps {
  events: Event[];
  onEventClick?: (event: Event) => void;
}

function MiniCountdown({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <Badge variant="secondary" className="bg-emerald-500 text-white border-0 font-semibold">
        🎉 Live Now
      </Badge>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
      <Clock className="h-4 w-4" />
      <span className="tabular-nums">
        {days}d {hours}h {minutes}m
      </span>
    </div>
  );
}

export function EventsBanner({ events, onEventClick }: EventsBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-rotate events every 15 seconds
  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [events.length]);

  if (events.length === 0 || isDismissed) {
    return null;
  }

  const currentEvent = events[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleBannerClick = () => {
    onEventClick?.(currentEvent);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative bg-gradient-to-r from-nafaa-ocean-dark via-nafaa-ocean to-[#003A8C] text-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow group"
      onClick={handleBannerClick}
    >
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="relative container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Event info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 font-bold shrink-0 animate-pulse">
              UPCOMING EVENT
            </Badge>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base md:text-lg">{currentEvent.title}</h3>
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="hidden sm:inline">{formatEventDateRange(currentEvent.startDate, currentEvent.endDate)}</span>
                      <span className="sm:hidden">{currentEvent.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    {currentEvent.location && (
                      <div className="hidden md:flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{currentEvent.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center - Countdown */}
          <div className="hidden md:block shrink-0">
            <MiniCountdown targetDate={currentEvent.startDate} />
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 text-nafaa-ocean hover:bg-white font-semibold group-hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                handleBannerClick();
              }}
            >
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
            </Button>

            {/* Navigation for multiple events */}
            {events.length > 1 && (
              <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="h-7 w-7 p-0 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-xs px-2 tabular-nums">
                  {currentIndex + 1}/{events.length}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="h-7 w-7 p-0 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="h-7 w-7 p-0 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
