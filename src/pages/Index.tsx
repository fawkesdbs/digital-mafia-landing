import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import NewsletterSection from "../components/NewsletterSection";
import {
  ArrowRight,
  Zap,
  Lightbulb,
  Users,
  Layers,
  Target,
  Palette,
  Cog,
  HeadphonesIcon,
  ShoppingCart,
  GraduationCap,
  ExternalLink,
  Sparkles,
} from "lucide-react";

type Product = {
  name: string;
  description: string;
  price: string;
  icon: string;
  image: string;
};

const iconMap: Record<string, React.ReactNode> = {
  "shopping-cart": <ShoppingCart className="w-8 h-8" />,
  "graduation-cap": <GraduationCap className="w-8 h-8" />,
};

export default function Index() {
  // Products Preview (2-3 key offerings)
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/Digital-Mafia-Solution/internal-file-hosting/refs/heads/main/data/products.json"
      );
      const json: Product[] = await res.json();
      setProducts(json);
    };

    load();
  }, []);

  // I3C Core Values
  const coreValues = [
    {
      letter: "I",
      title: "Interactivity",
      description: "Engaging experiences that captivate users",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      letter: "C",
      title: "Creativity",
      description: "Fresh ideas and innovative solutions",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      letter: "C",
      title: "Consistency",
      description: "Cohesive solutions across all touchpoints",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      letter: "C",
      title: "Collaboration",
      description: "Working closely with our clients",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  // Services Preview (4 Pillars)
  const servicesPreviews = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy & Research",
      description:
        "Market analysis, audience insights, and feasibility studies to inform your solution.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative & Content",
      description:
        "Branding, design, and storytelling that connects with your audience.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Tech & Automation",
      description:
        "Websites, apps, and workflow automation that streamline operations.",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Management & Support",
      description:
        "Campaigns, analytics, and ongoing support to ensure success.",
    },
  ];

  // Featured Portfolio Projects
  const featuredProjects = [
    {
      title: "TechFlow SaaS Platform",
      client: "TechFlow Inc.",
      category: "Tech & Automation",
      image: "/placeholder.svg",
    },
    {
      title: "Zenith Fashion Rebrand",
      client: "Zenith Fashion",
      category: "Creative & Content",
      image: "/placeholder.svg",
    },
    {
      title: "MedConnect Automation",
      client: "MedConnect Clinics",
      category: "Tech & Automation",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-linear-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/30 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              <span className="block text-foreground">Simplicity</span>
              <span className="block text-muted-foreground">Meets</span>
              <span className="block text-primary font-black">
                Bold Solutions
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              We partner with businesses and creators to{" "}
              <span className="text-primary font-semibold">
                identify challenges
              </span>{" "}
              and craft{" "}
              <span className="text-primary font-semibold">
                tailored digital solutions
              </span>{" "}
              that{" "}
              <span className="text-foreground font-semibold">
                drive growth and engagement
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - I3C System */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">I3C</span> Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide every solution we create
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our four-pillar approach ensures comprehensive solutions for every
              challenge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesPreviews.map((service, index) => (
              <Card
                key={index}
                className="group bg-card hover:bg-primary/5 border-border hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">
                Learn More About Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="hidden py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready-to-Use <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pre-built, customizable tools designed for rapid deployment and
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-background border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>

                {/* ALWAYS visible dark overlay (for readability) */}
                <div className="absolute inset-0 bg-black/90 z-1 transition-opacity duration-300  group-hover:opacity-0"></div>

                {/* Primary brand-tint overlay (fades on hover) */}
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply transition-all duration-300 group-hover:bg-primary/5 z-2"></div>

                {/* Your card content */}
                <div className="relative z-3">
                  <div className="transition-all duration-300 group-hover:opacity-0">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <div className="text-primary">
                            {iconMap[product.icon]}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            Starting at
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {product.price}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </div>

                  <div className="mb-4 ml-4 flex gap-3 z-4 relative">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Link to="/products">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              <Link to="/products">
                Explore All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="hidden py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped clients bring their visions to life
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105"
                >
                  <div className="relative aspect-video bg-muted flex items-center justify-center">
                    <div className="text-muted-foreground">Project Preview</div>
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/90 hover:bg-background"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.client}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Link to="/portfolio">
                  View All Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Sparkles className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Have a Project or <span className="text-primary">Challenge</span>?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's build your solution. Whether you need a custom approach or
              one of our ready-made products, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Let's Build Your Solution
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">Explore Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
