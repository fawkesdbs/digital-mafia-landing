import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full w-14 h-14 p-0 animate-scale-in"
      >
        <Link to="/contact" aria-label="Contact us">
          <MessageCircle className="w-6 h-6" />
        </Link>
      </Button>
    </div>
  );
}
