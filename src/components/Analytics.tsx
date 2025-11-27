import { useEffect, useRef } from "react";

// Replace with your actual ID
const GA_MEASUREMENT_ID = "G-426V5VQE2J";

export function Analytics() {
  // Use a ref to ensure we never inject the script twice
  const initialized = useRef(false);

  useEffect(() => {
    // This function handles the actual loading logic
    const loadAnalytics = () => {
      const consent = localStorage.getItem("digital-mafia-cookie-consent");

      // If accepted AND we haven't loaded it yet
      if (consent === "accepted" && !initialized.current) {
        initialized.current = true;

        // 1. Load the Google Analytics Script
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        // 2. Initialize the global function
        window.dataLayer = window.dataLayer || [];

        function gtag(...args: (string | Date | number | boolean | object)[]) {
          window.dataLayer.push(args);
        }

        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID);

        console.log("✅ Google Analytics loaded successfully");
      }
    };

    // Check immediately on mount (in case they accepted on a previous visit)
    loadAnalytics();

    // Listen for the "I just clicked accept" event
    window.addEventListener("consent-updated", loadAnalytics);

    // Cleanup listener on unmount
    return () => window.removeEventListener("consent-updated", loadAnalytics);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
