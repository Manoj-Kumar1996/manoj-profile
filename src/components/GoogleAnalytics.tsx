import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || "G-XXXXXXXXXX";

    if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      console.warn("Google Analytics: VITE_GA_ID not set. Add to .env file.");
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  return null;
}