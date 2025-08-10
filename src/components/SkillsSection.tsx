import { useRef, useState, useEffect } from "react";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Terminal,
  Settings,
  FileCode,
  Layers,
  Monitor,
  Smartphone,
  Cloud,
  GitBranch,
  Zap,
  Package,
  Wrench,
  Eye,
  TestTube,
  Cpu,
} from "lucide-react";

const getSkillIcon = (skillName: string) => {
  const iconMap: { [key: string]: any } = {
    React: Code2,
    TypeScript: FileCode,
    JavaScript: Terminal,
    HTML5: Globe,
    CSS3: Palette,
    "Tailwind CSS": Layers,
    "Next.js": Monitor,
    "Vue.js": Smartphone,
    "Node.js": Settings,
    "Express.js": Zap,
    Python: Code2,
    MongoDB: Database,
    PostgreSQL: Database,
    GraphQL: Cloud,
    "REST APIs": Globe,
    Git: GitBranch,
    Docker: Package,
    AWS: Cloud,
    Figma: Eye,
    Webpack: Wrench,
    Jest: TestTube,
    "VS Code": Terminal,
  };
  return iconMap[skillName] || Cpu;
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<
    Array<{
      id: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      skill: any;
    }>
  >([]);

  const skills = [
    { name: "React", category: "frontend", color: "hsl(var(--primary))" },
    {
      name: "TypeScript",
      category: "frontend",
      color: "hsl(var(--accent-green))",
    },
    {
      name: "JavaScript",
      category: "frontend",
      color: "hsl(var(--accent-orange))",
    },
    { name: "HTML5", category: "frontend", color: "hsl(var(--accent-pink))" },
    { name: "CSS", category: "frontend", color: "hsl(var(--primary-light))" },
    {
      name: "Tailwind CSS",
      category: "frontend",
      color: "hsl(var(--secondary))",
    },
    { name: "Next.js", category: "frontend", color: "hsl(var(--accent))" },
    {
      name: "Vue.js",
      category: "frontend",
      color: "hsl(var(--primary-lighter))",
    },
    { name: "Node.js", category: "backend", color: "hsl(var(--accent-green))" },
    { name: "Express.js", category: "backend", color: "hsl(var(--primary))" },
    { name: "Python", category: "backend", color: "hsl(var(--accent-orange))" },
    { name: "MongoDB", category: "backend", color: "hsl(var(--accent-pink))" },
    { name: "PostgreSQL", category: "backend", color: "hsl(var(--secondary))" },

    { name: "Git", category: "tools", color: "hsl(var(--primary-light))" },

    { name: "AWS", category: "tools", color: "hsl(var(--accent-orange))" },
  ];

  useEffect(() => {
    const containerWidth = 800;
    const containerHeight = 400;
    const bubbleSize = 60;

    const initialBubbles = skills.map((skill, index) => ({
      id: skill.name,
      x: Math.random() * (containerWidth - bubbleSize),
      y: Math.random() * (containerHeight - bubbleSize),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      skill,
    }));

    setBubbles(initialBubbles);
  }, []);

  useEffect(() => {
    if (bubbles.length === 0) return;

    const animationFrame = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          const containerWidth = containerRef.current?.clientWidth || 800;
          const containerHeight = containerRef.current?.clientHeight || 400;
          const bubbleSize = 60;

          let newX = bubble.x + bubble.vx;
          let newY = bubble.y + bubble.vy;
          let newVx = bubble.vx;
          let newVy = bubble.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= containerWidth - bubbleSize) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(containerWidth - bubbleSize, newX));
          }
          if (newY <= 0 || newY >= containerHeight - bubbleSize) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(containerHeight - bubbleSize, newY));
          }

          return {
            ...bubble,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    };

    const interval = setInterval(animationFrame, 50);
    return () => clearInterval(interval);
  }, [bubbles.length]);

  const handleBubbleClick = (clickedId: string) => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) => {
        if (bubble.id === clickedId) {
          return {
            ...bubble,
            vx: bubble.vx * 2 + (Math.random() - 0.5) * 4,
            vy: bubble.vy * 2 + (Math.random() - 0.5) * 4,
          };
        }
        return bubble;
      })
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p> */}
        </div>

        <div
          ref={containerRef}
          className="relative h-96 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-background to-muted/20 border border-border/50"
        >
          {bubbles.map((bubble) => {
            const IconComponent = getSkillIcon(bubble.skill.name);

            return (
              <div
                key={bubble.id}
                className="absolute w-15 h-15 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: bubble.skill.color,
                  left: `${bubble.x}px`,
                  top: `${bubble.y}px`,
                  width: "60px",
                  height: "60px",
                }}
                onClick={() => handleBubbleClick(bubble.id)}
              >
                <div className="flex items-center justify-center w-full h-full text-white">
                  <IconComponent size={24} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-foreground whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50 pointer-events-none">
                  {bubble.skill.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div
          className="mt-16 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-bold mb-8">Currently Learning</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "GraphQL",
              "Docker",
              "AWS Lambda",
              "Microservices",
              "Three.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium animate-pulse-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
