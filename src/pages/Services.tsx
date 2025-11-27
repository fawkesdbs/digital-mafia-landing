import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import { Link } from "react-router-dom";
import {
  Target,
  Palette,
  Cog,
  HeadphonesIcon,
  ChevronDown,
  ChevronUp,
  Users,
  Search,
  Lightbulb,
  PenTool,
  Video,
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
  MessageCircle,
  Sparkles,
  FileText, // Added for Copywriting
} from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  // Updated Service Pillars based on Strategic Market Analysis (MVR)
  const servicePillars = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy & Research",
      subtitle: "The Brains: High-level counsel",
      description:
        "We don't just execute; we think. Our 'Consigliere' level advice ensures your digital moves are calculated, strategic, and profitable.",
      services: [
        {
          name: "Principal Consulting",
          description:
            "Strategic guidance on digital transformation and business logic.",
          icon: <Lightbulb className="w-5 h-5" />,
          startingPrice: "R1,250 / hour", //
        },
        {
          name: "Digital Audit & Roadmap",
          description:
            "Deep-dive analysis of your current digital presence with a clear roadmap.",
          icon: <Search className="w-5 h-5" />,
          startingPrice: "R5,500 (Waived on Retainer)", // [cite: 439]
        },
        {
          name: "Automation Consulting",
          description:
            "Mapping out business processes to identify bottlenecks and efficiency gains.",
          icon: <Zap className="w-5 h-5" />,
          startingPrice: "R1,250 / hour", // [cite: 439]
        },
        {
          name: "Strategic Copywriting",
          description:
            "Sales psychology-driven copy. Not just text, but persuasion.",
          icon: <FileText className="w-5 h-5" />,
          startingPrice: "R3.80 / word", // [cite: 684]
        },
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative & Content", // Updated Title
      subtitle: "The Face: Visuals that sell",
      description:
        "We craft the face of your business. From brand identity to high-volume video production, we ensure you look untouchable.",
      services: [
        {
          name: "Brand Identity",
          description: "Complete logo, color palette, and usage guidelines.",
          icon: <PenTool className="w-5 h-5" />,
          startingPrice: "R8,500", // [cite: 441]
        },
        {
          name: "UI/UX Design",
          description: "High-fidelity interface design per screen/view.",
          icon: <Palette className="w-5 h-5" />,
          startingPrice: "R950 / screen", // [cite: 441]
        },
        {
          name: "Social Video (Short Form)",
          description:
            "Batch shooting day for Reels/TikToks. Includes 10-15 edits.",
          icon: <Video className="w-5 h-5" />,
          startingPrice: "R14,500 / day", // [cite: 672]
        },
        {
          name: "Corporate Video",
          description:
            "High-fidelity brand story video with drone footage and pro editing.",
          icon: <Video className="w-5 h-5" />,
          startingPrice: "From R25,000", // [cite: 677]
        },
      ],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Web & Tech", // Updated Title
      subtitle: "The Engine: Systems that run",
      description:
        "We use high-efficiency low-code tools to build robust systems faster and cheaper than traditional dev shops.",
      services: [
        {
          name: "'Legitimacy' Website",
          description:
            "5-Page Standard Site. Includes conversion copy and speed optimization.",
          icon: <Globe className="w-5 h-5" />,
          startingPrice: "R14,500", // [cite: 591]
        },
        {
          name: "'Empire' E-commerce",
          description:
            "Full online store setup (Shopify/Woo) with payment gateways.",
          icon: <TrendingUp className="w-5 h-5" />,
          startingPrice: "From R45,000", // [cite: 599]
        },
        {
          name: "App MVP (Bubble.io)",
          description:
            "Rapid launch of functional web apps. Save months of dev time.",
          icon: <Smartphone className="w-5 h-5" />,
          startingPrice: "From R75,000", // [cite: 611]
        },
        {
          name: "Automation 'Connector'",
          description:
            "Link your apps (e.g., Leads → Sheet → Email) to save manual work.",
          icon: <Zap className="w-5 h-5" />,
          startingPrice: "R4,500 / setup", // [cite: 700]
        },
      ],
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Growth & Support", // Updated Title
      subtitle: "The Shield: Protecting your asset",
      description:
        "Ongoing protection and aggressive growth strategies. We keep your systems running and your leads flowing.",
      services: [
        {
          name: "'Boss' Maintenance",
          description:
            "Hosting, security, backups, and 2 hours of dev updates/month.",
          icon: <Shield className="w-5 h-5" />,
          startingPrice: "R2,800 / month", // [cite: 623]
        },
        {
          name: "SEO 'Local Domination'",
          description: "Dominate local search results and Google Maps.",
          icon: <Search className="w-5 h-5" />,
          startingPrice: "R5,500 / month", // [cite: 634]
        },
        {
          name: "Social 'Soldier' Plan",
          description:
            "3 Platforms, 12 Posts, and active Community Management.",
          icon: <MessageCircle className="w-5 h-5" />,
          startingPrice: "R7,500 / month", // [cite: 649]
        },
        {
          name: "PPC Management",
          description: "Google/Meta Ads management. (Ad spend is separate).",
          icon: <Target className="w-5 h-5" />,
          startingPrice: "R4,500 + 12%", // [cite: 663]
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your challenge, not our solution.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "We design a tailored approach using the best tools for your needs.",
    },
    {
      step: "03",
      title: "Execution",
      description: "We build and iterate with transparency and collaboration.",
    },
    {
      step: "04",
      title: "Optimization",
      description: "We measure, learn, and continuously improve your solution.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-in-up">
              Custom Digital Solutions for{" "}
              <span className="text-primary">Unique Challenges</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              We focus on understanding your problem first, then designing a
              tailored solution using our four-pillar approach. No cookie-cutter
              solutions—just what works for you.
            </p>
          </div>

          {/* Process Overview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                How we approach every project
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Pillars */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-slide-in-up">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-primary">Four Pillars</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every solution we create is built on these four foundational
                areas, ensuring comprehensive and effective results.
              </p>
            </div>

            <div className="space-y-6">
              {servicePillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() =>
                      setExpandedPillar(expandedPillar === index ? null : index)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <div className="text-primary">{pillar.icon}</div>
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold hover:text-primary transition-colors">
                            {pillar.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-primary">
                        {expandedPillar === index ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {expandedPillar === index && (
                    <CardContent className="pt-0">
                      <div className="border-t border-border pt-6">
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          {pillar.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          {pillar.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="flex items-start space-x-3 group"
                            >
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                <div className="text-primary">
                                  {service.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                  <h4 className="font-semibold">
                                    {service.name}
                                  </h4>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary self-start sm:self-auto whitespace-nowrap">
                                    {service.startingPrice}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Our Approach */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-slide-in-up">
              <h2 className="text-4xl font-bold mb-6">
                Why Our <span className="text-primary">Approach</span> Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className="bg-primary/5 border-primary/20 text-center animate-scale-in"
                style={{ animationDelay: "0ms" }}
              >
                <CardContent className="p-8">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">
                    Problem-First Thinking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We start with your challenge, not our preferred solution.
                    This ensures we're solving the right problem in the best way
                    possible.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-primary/5 border-primary/20 text-center animate-scale-in"
                style={{ animationDelay: "100ms" }}
              >
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">Tailored Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every solution is custom-designed for your specific needs,
                    industry, and goals. No one-size-fits-all approaches.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-primary/5 border-primary/20 text-center animate-scale-in"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">
                    Collaborative Partnership
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with you as partners, not vendors. Your insights and
                    feedback shape every aspect of the solution we create.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20 animate-scale-in">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">
              Need a Quote? <span className="text-primary">Let's Talk</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every project is unique, so we create custom proposals based on
              your specific needs and challenges. Let's discuss what you're
              trying to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/contact">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get Your Custom Quote
                </Link>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      variant="outline"
                      size="lg"
                      disabled
                      className="border-primary/50 text-primary/50 opacity-50 cursor-not-allowed"
                    >
                      View Ready-Made Products
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Coming Soon</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
}
