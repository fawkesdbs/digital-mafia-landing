import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Eye,
  Filter,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Digital Strategy",
    "Creative & Content",
    "Tech & Automation",
    "Management & Support",
  ];

  const projects = [
    {
      title: "TechFlow SaaS Platform",
      category: "Tech & Automation",
      client: "TechFlow Inc.",
      challenge:
        "Needed a scalable platform for real-time team collaboration with complex user permissions.",
      solution:
        "Custom-built SaaS platform with real-time collaboration features, advanced user management, and integration capabilities.",
      results: [
        "300% increase in user engagement",
        "50% reduction in onboarding time",
        "99.9% uptime achieved",
      ],
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "WebSocket", "AWS"],
      testimonial:
        "Digital Mafia didn't just build us a platform—they solved our core business challenge.",
      link: "#",
    },
    {
      title: "Zenith Fashion Brand Transformation",
      category: "Creative & Content",
      client: "Zenith Fashion",
      challenge:
        "Luxury fashion brand needed complete rebrand to appeal to younger demographics while maintaining premium positioning.",
      solution:
        "Comprehensive brand strategy including new visual identity, content strategy, and digital presence redesign.",
      results: [
        "45% increase in millennial customers",
        "200% boost in social engagement",
        "30% revenue growth",
      ],
      image: "/placeholder.svg",
      tags: [
        "Brand Strategy",
        "Visual Identity",
        "Content Strategy",
        "Web Design",
      ],
      testimonial:
        "They understood our vision and translated it into a brand that resonates with our new audience.",
      link: "#",
    },
    {
      title: "MedConnect Workflow Automation",
      category: "Tech & Automation",
      client: "MedConnect Clinics",
      challenge:
        "Healthcare network struggled with manual patient scheduling and communication processes causing delays.",
      solution:
        "Automated patient management system with AI-powered scheduling and integrated communication workflows.",
      results: [
        "60% reduction in scheduling conflicts",
        "40% improvement in patient satisfaction",
        "25% operational cost savings",
      ],
      image: "/placeholder.svg",
      tags: ["Healthcare", "Automation", "AI", "Integration"],
      testimonial:
        "Our staff can now focus on patient care instead of administrative tasks.",
      link: "#",
    },
    {
      title: "GreenEarth Market Research & Strategy",
      category: "Digital Strategy",
      client: "GreenEarth Sustainability",
      challenge:
        "Sustainable products startup needed market validation and go-to-market strategy for eco-friendly consumer goods.",
      solution:
        "Comprehensive market research, competitive analysis, and data-driven go-to-market strategy development.",
      results: [
        "Validated product-market fit",
        "Secured $2M in seed funding",
        "Successfully launched in 3 markets",
      ],
      image: "/placeholder.svg",
      tags: ["Market Research", "Strategy", "Sustainability", "B2C"],
      testimonial:
        "Their research gave us the confidence and roadmap to scale successfully.",
      link: "#",
    },
    {
      title: "DataViz Analytics Dashboard",
      category: "Management & Support",
      client: "Enterprise Analytics Co.",
      challenge:
        "Complex data visualization needs for enterprise clients with real-time reporting requirements.",
      solution:
        "Custom analytics dashboard with real-time data processing and intuitive visualization tools.",
      results: [
        "90% faster report generation",
        "Enhanced decision-making speed",
        "100% client retention",
      ],
      image: "/placeholder.svg",
      tags: ["Analytics", "Data Visualization", "Real-time", "Enterprise"],
      testimonial:
        "Finally, a dashboard that makes our complex data actually useful.",
      link: "#",
    },
    {
      title: "LocalBiz Digital Transformation",
      category: "Management & Support",
      client: "LocalBiz Network",
      challenge:
        "Small business network needed comprehensive digital transformation and ongoing campaign management.",
      solution:
        "End-to-end digital transformation including new websites, automation tools, and managed marketing campaigns.",
      results: [
        "150% increase in online sales",
        "75% automation of manual processes",
        "40% growth in customer base",
      ],
      image: "/placeholder.svg",
      tags: [
        "Digital Transformation",
        "Campaign Management",
        "Small Business",
        "E-commerce",
      ],
      testimonial:
        "They didn't just modernize our business—they revolutionized how we operate.",
      link: "#",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our Work <span className="text-primary">Speaks for Itself</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore how we've helped clients bring their visions to life
              through problem-first thinking and tailored digital solutions.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  category === selectedCategory
                    ? "bg-primary hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Eye className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/90 hover:bg-background"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/90 hover:bg-background"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {project.client}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-primary" />
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-primary" />
                          Our Solution
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                          Results & Impact
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <li
                              key={resultIndex}
                              className="flex items-center text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                        <Users className="w-4 h-4 text-primary mb-2" />
                        <p className="text-sm italic text-muted-foreground">
                          "{project.testimonial}"
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More / View All */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View More Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your{" "}
              <span className="text-primary">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every great project starts with understanding the right challenge.
              Let's discuss what you're trying to solve and create your next
              success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">Explore Our Approach</Link>
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
