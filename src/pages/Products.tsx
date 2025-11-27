import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  BarChart3,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "E-Commerce Platform",
      description:
        "Complete online store solution with payment processing, inventory management, and customer analytics.",
      icon: <ShoppingCart className="w-8 h-8" />,
      image: "/placeholder.svg",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Customer Analytics",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      pricing: {
        standard: {
          price: 49,
          features: ["Up to 100 products", "Basic analytics", "Email support"],
        },
        premium: {
          price: 99,
          features: [
            "Unlimited products",
            "Advanced analytics",
            "Priority support",
            "Custom themes",
          ],
        },
        custom: {
          price: "Custom",
          features: [
            "Fully customized",
            "Dedicated support",
            "Advanced integrations",
            "White-label option",
          ],
        },
      },
    },
    {
      name: "Learning Management System",
      description:
        "Comprehensive platform for creating, managing, and delivering online courses and training programs.",
      icon: <GraduationCap className="w-8 h-8" />,
      image: "/placeholder.svg",
      features: [
        "Course Builder",
        "Student Progress Tracking",
        "Quiz System",
        "Certificates",
        "Video Hosting",
      ],
      pricing: {
        standard: {
          price: 39,
          features: ["Up to 5 courses", "50 students", "Basic reporting"],
        },
        premium: {
          price: 79,
          features: [
            "Unlimited courses",
            "500 students",
            "Advanced reporting",
            "Integrations",
          ],
        },
        custom: {
          price: "Custom",
          features: [
            "Enterprise features",
            "Unlimited users",
            "Custom branding",
            "API access",
          ],
        },
      },
    },
    {
      name: "Portfolio Builder",
      description:
        "Professional portfolio websites for creators, artists, and professionals to showcase their work.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "/placeholder.svg",
      features: [
        "Drag & Drop Builder",
        "Custom Domains",
        "SEO Tools",
        "Contact Forms",
        "Gallery Management",
      ],
      pricing: {
        standard: {
          price: 19,
          features: ["3 portfolio pages", "Basic templates", "Contact forms"],
        },
        premium: {
          price: 39,
          features: [
            "Unlimited pages",
            "Premium templates",
            "Custom CSS",
            "Analytics",
          ],
        },
        custom: {
          price: "Custom",
          features: [
            "Fully custom design",
            "Advanced features",
            "Priority support",
            "Maintenance",
          ],
        },
      },
    },
    {
      name: "Content Dashboard",
      description:
        "Centralized content management and social media scheduling platform for businesses and creators.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "/placeholder.svg",
      features: [
        "Social Scheduling",
        "Content Calendar",
        "Analytics Dashboard",
        "Team Collaboration",
        "Multi-Platform",
      ],
      pricing: {
        standard: {
          price: 29,
          features: [
            "3 social accounts",
            "Basic scheduling",
            "Monthly reports",
          ],
        },
        premium: {
          price: 59,
          features: [
            "Unlimited accounts",
            "Advanced scheduling",
            "Real-time analytics",
            "Team features",
          ],
        },
        custom: {
          price: "Custom",
          features: [
            "Enterprise features",
            "Custom integrations",
            "Dedicated manager",
            "Training",
          ],
        },
      },
    },
  ];

  const pricingTiers = ["standard", "premium", "custom"];
  const tierLabels = {
    standard: "Standard",
    premium: "Premium",
    custom: "Custom",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Ready-to-Use{" "}
              <span className="text-primary">Digital Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pre-built, customizable tools made for small businesses, startups,
              and creators. Get up and running quickly with solutions built for
              growth.
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Card className="bg-muted/30 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="text-primary">{product.icon}</div>
                      </div>
                      <p className="text-muted-foreground">Product Demo</p>
                    </div>
                  </Card>
                </div>

                <div
                  className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">
                        {product.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">
                        Key Features:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {pricingTiers.map((tier) => {
                        const tierData =
                          product.pricing[tier as keyof typeof product.pricing];
                        return (
                          <Card
                            key={tier}
                            className={`${tier === "premium" ? "ring-2 ring-primary" : ""}`}
                          >
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">
                                  {tierLabels[tier as keyof typeof tierLabels]}
                                </CardTitle>
                                {tier === "premium" && (
                                  <Star className="w-4 h-4 text-primary" />
                                )}
                              </div>
                              <div className="text-2xl font-bold text-primary">
                                {typeof tierData.price === "string"
                                  ? tierData.price
                                  : `$${tierData.price}`}
                                {typeof tierData.price === "number" && (
                                  <span className="text-sm font-normal text-muted-foreground">
                                    /month
                                  </span>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              {tierData.features.map(
                                (feature, featureIndex) => (
                                  <div
                                    key={featureIndex}
                                    className="flex items-center text-sm"
                                  >
                                    <Check className="w-4 h-4 text-primary mr-2 shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ),
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        View Demo
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Need Something{" "}
              <span className="text-primary">Completely Custom</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our pre-built products don't fit your vision? Let's create
              something tailor-made for your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/services">
                  <Zap className="mr-2 w-5 h-5" />
                  Explore Custom Solutions
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
}
