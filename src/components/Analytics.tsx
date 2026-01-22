"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Make sure GA script is loaded
    if (!window.gtag) return;

    // Send pageview
    window.gtag("config", "G-X7WTRNVMGF", {
      page_path: pathname,
      anonymize_ip: true,
    });
  }, [pathname]);

  return null;
}
