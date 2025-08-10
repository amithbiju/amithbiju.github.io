import { Code2, Heart, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const interests = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing web applications for speed and user experience is my passion.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "I thrive in team environments and love sharing knowledge with others.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description:
        "Every line of code I write is focused on creating amazing user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            {/* <h3 className="text-2xl font-bold mb-6">My Journey</h3> */}
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a dedicated full-stack developer with a passion for building
                responsive and innovative web applications. My journey into
                development began with a curiosity for how technology can solve
                real-world problems, a passion I’ve cultivated through hands-on
                projects and internships.
              </p>
              <p>
                I specialize in a modern tech stack, including React.js,
                Node.js, and MongoDB, and am proficient in languages like
                Python, C, and Java. My experience spans from architecting
                e-commerce platforms to developing AI-powered solutions, always
                with a focus on creating efficient and secure systems.
              </p>
              <p>
                My goal is to leverage my skills to contribute to impactful
                projects and continue growing as a developer. I’m always eager
                to explore new technologies, from microservices to IOT, and am a
                strong believer in the power of open-source collaboration.
              </p>
            </div>

            {/* <div className="mt-8 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-primary">
                  Favorite Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "Tailwind CSS",
                    "Next.js",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">
                  Currently Learning:
                </span>
                <span className="text-muted-foreground">
                  GraphQL, Docker, AWS
                </span>
              </div>
            </div> */}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {interests.map((interest, index) => (
              <Card
                key={interest.title}
                className="card-hover bg-card shadow-soft"
              >
                <CardContent className="p-6 text-center">
                  <interest.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
