import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-426V5VQE2J"; // Replace with your actual ID

export function Analytics() {
  useEffect(() => {
    // 1. Check if user has consented
    const consent = localStorage.getItem("digital-mafia-cookie-consent");

    if (consent === "accepted") {
      // 2. Load the Google Analytics Script dynamically
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // 3. Initialize the global function
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: (string | Date | number | boolean | object)[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);

  return null; // This component renders nothing visually
}

// Add TypeScript support for the window object
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
