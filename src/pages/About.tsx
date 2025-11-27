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
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Lightbulb,
  Users,
  Layers,
  CheckCircle,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactivity",
      description:
        "We create engaging digital experiences that captivate users and drive meaningful interactions with your brand.",
      principles: [
        "User-centered design",
        "Intuitive interfaces",
        "Engaging animations",
        "Responsive interactions",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description:
        "Fresh ideas and innovative approaches help us solve complex challenges with elegant, out-of-the-box solutions.",
      principles: [
        "Original thinking",
        "Innovative solutions",
        "Creative problem-solving",
        "Unique approaches",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Consistency",
      description:
        "We ensure cohesive experiences across all touchpoints, maintaining brand integrity and user expectations.",
      principles: [
        "Brand coherence",
        "Design systems",
        "Quality standards",
        "Unified experiences",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring transparency and alignment throughout the process.",
      principles: [
        "Open communication",
        "Partnership approach",
        "Transparent process",
        "Shared ownership",
      ],
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Problem First",
      description:
        "We start by deeply understanding your challenge, not jumping to solutions.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "We craft tailored strategies using the best tools and approaches for your specific needs.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Agile Execution",
      description:
        "We build and iterate quickly, keeping you involved and informed throughout the process.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Ongoing Partnership",
      description:
        "We provide continued support and optimization to ensure lasting success.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              The <span className="text-primary">Digital Mafia</span> Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're not just another digital agency. We're problem-solvers who
              believe in putting challenges first and solutions second. Our
              approach is simple: understand deeply, design thoughtfully,
              execute boldly.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-card p-8 border border-border">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We identify challenges and craft tailored digital solutions
                  that drive growth, streamline operations, and build lasting
                  connections between businesses and their audiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card p-8 border border-border">
              <CardHeader className="pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Our Vision
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the go-to partner for businesses ready to embrace
                  digital transformation through problem-first thinking and
                  solution-agnostic approaches.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problem-First Approach */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-primary">Problem-First</span> Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We don't start with what we want to sell you. We start with what
                you need to solve. This fundamental shift in approach leads to
                better outcomes and lasting partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-border hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div className="text-sm text-primary font-mono mb-2">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* I3C Values Deep Dive */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                The <span className="text-primary">I3C</span> System
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our core philosophy drives every decision we make and every
                solution we create. These aren't just buzzwords—they're the
                principles that guide our work.
              </p>
            </div>

            <div className="space-y-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                          <div className="text-primary">{value.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-4">
                          How we apply this:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {value.principles.map((principle, principleIndex) => (
                            <div
                              key={principleIndex}
                              className="flex items-center"
                            >
                              <CheckCircle className="w-4 h-4 text-primary mr-3 shrink-0" />
                              <span className="text-sm">{principle}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">Solution Agnostic</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We choose the best tools and approaches for your specific
                    challenge, not what we happen to specialize in.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">
                    Partnership Focused
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're not just vendors—we're partners invested in your
                    long-term success and growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-3">Results Driven</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every solution we create is designed to deliver measurable
                    impact and drive real business outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section (Placeholder) */}
          <div className="hidden text-center bg-card/30 rounded-2xl p-12 border border-border">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our diverse team of strategists, creators, and technologists work
              together to bring your vision to life. Meet the minds behind the
              solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              Team profiles and bios coming soon.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/services">
                See How We Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
}
