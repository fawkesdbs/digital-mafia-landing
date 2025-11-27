import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Button } from "../components/ui/button";
import { AlertCircle, ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Icon Section */}
            <div className="relative inline-block w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* 404 Number */}
            <div>
              <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-4">
                404
              </h1>
              <p className="text-xl text-muted-foreground">
                Oops! Page Not Found
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
                Don't worry, we'll help you get back on track.
              </p>
              <p className="text-sm text-muted-foreground">
                Tried accessing:{" "}
                <span className="text-primary font-mono">
                  {location.pathname}
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Link to="/">
                  <Home className="mr-2 w-5 h-5" />
                  Return Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Looking for something specific?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default NotFound;
