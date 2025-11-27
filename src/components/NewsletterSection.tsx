import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="hidden py-20">
      <div className="container mx-auto px-6">
        <Card className="bg-linear-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with{" "}
              <span className="text-primary">Digital Insights</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest digital trends, case studies, and strategy insights
              delivered to your inbox. No spam, just valuable content to help
              you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-background border-border flex-1"
              />
              <Button
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Join 500+ digital innovators. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
