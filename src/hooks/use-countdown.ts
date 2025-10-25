import { useState, useEffect } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(targetDate: Date): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
}

function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

export function formatEventDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatEventDateRange(startDate: Date, endDate: Date): string {
  const start = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(startDate);
  
  const end = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(endDate);
  
  // If same month, show more concise format
  if (startDate.getMonth() === endDate.getMonth() && 
      startDate.getFullYear() === endDate.getFullYear()) {
    const startDay = startDate.getDate();
    const endFormatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(endDate);
    return `${startDate.toLocaleDateString("en-US", { month: "long" })} ${startDay}-${endDate.getDate()}, ${endDate.getFullYear()}`;
  }
  
  return `${start} - ${end}`;
}
