import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="btn-outline rounded-full"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>

          {/* Quote */}
          {/* <div className="max-w-2xl">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-sm text-muted-foreground">— Cory House</cite>
          </div> */}

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 AmithBiju</span>
            {/* <Heart className="h-4 w-4 text-red-500 fill-current" /> */}
          </div>

          {/* Tech Stack Credit */}
          {/* <div className="text-xs text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and deployed with ❤️
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
