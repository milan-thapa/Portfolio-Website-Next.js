"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Enhanced global type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// Analytics configuration
const GA_MEASUREMENT_ID = "G-X7WTRNVMGF";

// Custom event types for better type safety
type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Analytics Component
 * Handles Google Analytics pageview tracking for SPA navigation
 * Respects user privacy and DNT (Do Not Track) preferences
 */
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user has Do Not Track enabled
    const dnt = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
    if (dnt === "1" || dnt === "yes") {
      if (process.env.NODE_ENV === "development") {
        console.log("[Analytics] Do Not Track is enabled, skipping tracking");
      }
      return;
    }

    // Make sure GA script is loaded
    if (typeof window.gtag !== "function") {
      if (process.env.NODE_ENV === "development") {
        console.warn("[Analytics] gtag is not loaded yet");
      }
      return;
    }

    // Construct full page path with search params
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    try {
      // Send pageview with privacy-first configuration
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        anonymize_ip: true,
        cookie_flags: "SameSite=None;Secure",
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });

      if (process.env.NODE_ENV === "development") {
        console.log("[Analytics] Pageview tracked:", url);
      }
    } catch (error) {
      // Silently fail in production, log in development
      if (process.env.NODE_ENV === "development") {
        console.error("[Analytics] Error tracking pageview:", error);
      }
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}

/**
 * Utility function to track custom events
 * Usage: trackEvent({ action: "click", category: "button", label: "cta", value: 1 })
 */
export function trackEvent({ action, category, label, value }: GtagEvent) {
  // Check if gtag is available
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Analytics] gtag not available for event tracking");
    }
    return;
  }

  // Check Do Not Track
  const dnt = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
  if (dnt === "1" || dnt === "yes") {
    return;
  }

  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });

    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics] Event tracked:", { action, category, label, value });
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[Analytics] Error tracking event:", error);
    }
  }
}

/**
 * Utility function to track page timing
 * Usage: trackTiming({ category: "load", variable: "page_load", value: 1234 })
 */
export function trackTiming({
  category,
  variable,
  value,
  label,
}: {
  category: string;
  variable: string;
  value: number;
  label?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const dnt = navigator.doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
  if (dnt === "1" || dnt === "yes") {
    return;
  }

  try {
    window.gtag("event", "timing_complete", {
      name: variable,
      value: value,
      event_category: category,
      event_label: label,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[Analytics] Error tracking timing:", error);
    }
  }
}