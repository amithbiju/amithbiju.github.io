import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-gradient-subtle pt-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent-green rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-32 right-20 w-6 h-6 bg-accent-orange rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-5 h-5 bg-accent-pink rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-light rounded-full animate-float opacity-70"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Left */}
          <div className="text-left order-2 lg:order-1">
            <div className="fade-in visible" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight">
                Hi, I'm <span className="text-primary">Amith Biju</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8">
                I craft beautiful, responsive websites and web applications
                using modern technologies. Let's bring your digital vision to
                life!
                {/* , a
                passionate Web Developer who builds modern web experiences. */}
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 lg:pt-11 fade-in visible"
              style={{ animationDelay: "0.3s" }}
            >
              <Button className="btn-hero px-6 md:px-8 py-3 text-base md:text-lg">
                <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="btn-outline px-6 md:px-8 py-3 text-base md:text-lg"
              >
                <FileText className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                View Resume
              </Button>
            </div>

            <div
              className="flex gap-4 md:gap-6 mb-8 lg:mb-16 fade-in visible"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://github.com/amithbiju"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 md:h-6 w-5 md:w-6" />
              </a>
              <a
                href="https://linkedin.com/in/amithbiju"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 md:h-6 w-5 md:w-6" />
              </a>
              <a
                href="mailto:amithbiju1@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 md:h-6 w-5 md:w-6" />
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="fade-in visible" style={{ animationDelay: "0.2s" }}>
              <img
                src={profileImage}
                alt="Sarah Chen"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full shadow-large border-4 border-white object-cover animate-scale-in"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors fade-in visible"
            style={{ animationDelay: "0.7s" }}
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
