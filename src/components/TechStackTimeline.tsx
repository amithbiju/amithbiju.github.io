import { useState } from "react";
import { Calendar, Code, BookOpen, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStackTimeline = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const timelineData = [
    {
      year: "2025",
      title: "Project Intern at QuestGlobal",
      description:
        "Developed a chatbot for HubPilot, an internal AI assistant for Mitsubishi, fine-tuning language models and building AI agents. Integrated Flask with a secure authentication layer and deployed on Microsoft Azure.",
      technologies: [
        "LangChain",
        "FAISS",
        "Flask",
        "Microsoft Azure",
        "Cosmos DB",
        "GitHub",
      ],
      milestone:
        "Developed and deployed a functional AI chatbot for a major corporate client.",
      type: "professional",
      icon: "FaBrain",
      color: "bg-accent-blue",
    },
    {
      year: "2024",
      title: "Webmaster at IEEE SCT SB",
      description:
        "Led the development of responsive web applications for the IEEE student branch, improving digital engagement by 40%. Managed full-stack deployment, including domain and server configuration.",
      technologies: ["React.js", "CI/CD", "Web Hosting", "JavaScript"],
      milestone:
        "Increased digital engagement by 40% through new web applications.",
      type: "leadership",
      icon: "FaCode",
      color: "bg-accent-green",
    },
    {
      year: "2023",
      title: "Web Developer at Insights Labs",
      description:
        "Delivered two complex React.js projects, integrating ML algorithms and blockchain functionality, while participating in an agile development process.",
      technologies: ["React.js", "JavaScript", "ML", "Blockchain"],
      milestone:
        "Successfully delivered two complex client projects on tight deadlines.",
      type: "professional",
      icon: "FaLaptopCode",
      color: "bg-accent-purple",
    },
  ];

  const years = Array.from(
    new Set(timelineData.map((item) => item.year.split(" ")[0]))
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "learning":
        return BookOpen;
      case "project":
        return Code;
      case "professional":
        return Briefcase;
      default:
        return Code;
    }
  };

  return (
    <section id="tech-timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My evolution as a developer - from first line of code to building scalable applications
          </p> */}
        </div>

        {/* Year Filter */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          <Calendar className="h-5 w-5 text-muted-foreground mt-1" />
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`filter-btn px-6 py-3 rounded-full font-medium ${
                selectedYear === year ? "active" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div> */}

        {/* Interactive Timeline */}
        <div
          className="max-w-6xl mx-auto fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {timelineData.map((item, index) => {
              const Icon = getTypeIcon(item.type);
              const isEven = index % 2 === 0;

              return (
                <div key={item.year} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center shadow-medium`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="card-hover bg-card shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium"
                          >
                            {item.year}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${item.color} text-white border-none`}
                          >
                            {item.type}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-primary">
                            Technologies Learned:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <p className="text-sm font-medium text-accent-green">
                            🎯 {item.milestone}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Progression Stats */}
        {/* <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">25+</h4>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">3</h4>
            <p className="text-muted-foreground">Years Learning</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">6</h4>
            <p className="text-muted-foreground">Major Milestones</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">∞</h4>
            <p className="text-muted-foreground">Learning Continues</p>
          </div>
        </div> */}

        {/* Current Focus */}
        {/* <div
          className="mt-16 text-center fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-bold mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "AI/ML Integration",
              "Web3 Technologies",
              "Serverless Architecture",
              "Edge Computing",
              "Rust Programming",
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-primary text-white rounded-full text-sm font-medium shadow-soft animate-pulse-soft"
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

export default TechStackTimeline;
