import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("digital-mafia-cookie-consent");
    if (!consent) {
      // Small delay to make the entrance smoother
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("digital-mafia-cookie-consent", "accepted");
    window.dispatchEvent(new Event("consent-updated"));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("digital-mafia-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur border-t shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-2 bg-primary/10 rounded-full hidden md:block">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              We use cookies
              <Cookie className="h-5 w-5 text-primary md:hidden" />
            </h3>
            <p className="text-muted-foreground text-sm max-w-2xl">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. You can choose to
              accept all cookies or just the essential ones. Read our{" "}
              <Link
                to="/cookies"
                className="text-primary hover:underline font-medium"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="flex-1 md:flex-none"
          >
            Decline
          </Button>
          <Button onClick={handleAccept} className="flex-1 md:flex-none">
            Accept All
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)} // Just closes the banner without saving preference (optional)
            className="hidden md:inline-flex"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
