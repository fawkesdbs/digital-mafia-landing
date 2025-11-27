import { useState } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import {
  Mail,
  Clock,
  Send,
  MessageCircle,
  Target,
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  // CRM-ready form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Insert your Google Script Web App URL here
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxDTcj3iodxPof3dL10iZRziuZFf0yd-d2O-SNeo6xIm45O6SGD12g2J4fsKQPMyuT8/exec";

  // Field updates
  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      userAgent: navigator.userAgent,
      pageUrl: window.location.href,
    };

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success(
          "Thank you! Your message has been sent. We'll get back to you shortly.",
          {
            duration: 4000,
            description: "We typically respond within 24 hours.",
          }
        );

        // Reset form fields
        setForm({
          name: "",
          email: "",
          business: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send your message. Please try again later.", {
        duration: 4000,
      });
    }

    setLoading(false);
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@digital-mafia.co.za",
      link: "mailto:info@digital-mafia.co.za",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      info: "24 hours or less",
      link: "#",
    },
  ];

  const serviceTypes = [
    "Digital Strategy & Research",
    "Creative & Content",
    "Tech & Automation",
    "Management & Support",
    "Custom Solution",
    "Not Sure - Help Me Decide",
  ];

  const budgetRanges = [
    "$5K - $15K",
    "$15K - $30K",
    "$30K - $50K",
    "$50K - $100K",
    "$100K+",
    "Prefer to discuss",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Build Your{" "}
              <span className="text-primary">Digital Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tell us what challenge you're facing—we'll find the right digital
              way to solve it. Every great solution starts with understanding
              the real problem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold flex items-center">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    Start the Conversation
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Share your challenge with us. The more details you provide,
                    the better we can understand how to help you succeed.
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="business">Business / Brand Name</Label>
                      <Input
                        id="business"
                        value={form.business}
                        onChange={(e) =>
                          updateField("business", e.target.value)
                        }
                        placeholder="Your business or brand name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Type of Service or Product Interest *</Label>
                      <Select onValueChange={(v) => updateField("service", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select what you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="hidden space-y-2">
                      <Label>Budget Range (Optional)</Label>
                      <Select onValueChange={(v) => updateField("budget", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message / Problem Description *
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Tell us about the challenge you're facing..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-primary text-lg py-6 hover:bg-primary/90"
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send My Challenge
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <MessageCircle className="w-8 h-8 text-primary mr-3" />
                  Get in <span className="text-primary ml-2">Touch</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Prefer a different way to connect? We're available through
                  multiple channels and believe in fast, transparent
                  communication.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-primary/30 transition-colors animate-slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.info}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    What Happens Next?
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">
                          1
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We'll review your challenge and respond within 24 hours.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">
                          2
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We'll schedule a discovery call to understand your needs
                        better.
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">
                          3
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We'll present a tailored solution approach and proposal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "#",
                      label: "Twitter",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "#",
                      label: "Instagram",
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "https://github.com/Digital-Mafia-Solution",
                      label: "Github",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-colors hover:scale-110"
                      style={{ transitionDuration: "300ms" }}
                    >
                      <span className="sr-only">{social.label}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <Card className="hidden bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Other Ways to <span className="text-primary">Connect</span>
                  </h3>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Quick Questions:</strong>{" "}
                      hello@digitalmafia.solutions
                    </p>
                    <p>
                      <strong>Urgent:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Partnerships:</strong>{" "}
                      partners@digitalmafia.solutions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
