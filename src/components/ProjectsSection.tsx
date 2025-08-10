import { useState } from "react";
import { ExternalLink, Github, Filter, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ChatET: WhatsApp Bot for Student Attendance",
      description:
        "An automated WhatsApp bot providing real-time student attendance and college-related information, currently used by over 500 students.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Flask", "MongoDB", "whatsapp-web.js"],
      category: "fullstack",
      github: "https://github.com/amithbiju/chatet",
      demo: "https://web.whatsapp.com/live-bot",
      featured: true,
    },
    {
      id: 2,
      title: "Aadhaar Health Connect: Unified Health Platform",
      description:
        "A unified health data platform integrating individual health records with Aadhaar cards, featuring secure authentication and data summarization.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "MongoDB", "Firebase"],
      category: "fullstack",
      github: null,
      demo: "https://www.linkedin.com/posts/amithbiju_innovatehackathon-ieee-inapp-activity-7288266864793632768-ts-f",
      featured: true,
    },
    {
      id: 3,
      title: "AI-Powered Internship Recommendation Platform",
      description:
        "A web platform that matches students with companies using Retrieval-Augmented Generation (RAG) and XGBoost for intelligent ranking.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Python", "RAG", "XGBoost", "MongoDB"],
      category: "ai",
      github: "https://github.com/amithbiju/",
      demo: null,
      featured: true,
    },
    {
      id: 4,
      title: "Trundler – AI-Based Self Checkout System",
      description:
        "A self-checkout system designed to minimize wait times with features like voice-based product addition and AI-powered suggestions.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "SQL"],
      category: "fullstack",
      github: "https://github.com/amithbiju/",
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: "Dawninc.store: E-commerce Web App",
      description:
        "A complete e-commerce platform for a clothing brand, featuring a responsive UI, RESTful API, and secure Stripe payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
      category: "fullstack",
      github: null,
      demo: "https://dawninc.store",
      featured: false,
    },
    {
      id: 6,
      title: "Magic Menu: Restaurant Ordering System",
      description:
        "A comprehensive digital menu platform enabling small restaurants to streamline ordering with real-time tracking and a secure payment system.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Next.js", "Firebase", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/amithbiju/magicmenu",
      demo: "https://drive.google.com/demo-video",
      featured: false,
    },
    {
      id: 7,
      title: "OLX Clone: Marketplace Application",
      description:
        "A full-featured marketplace platform with product listing, search, and user messaging, using Firebase for real-time data and authentication.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Firebase", "Context API"],
      category: "frontend",
      github: "https://github.com/amithbiju/olx-clone",
      demo: "https://drive.google.com/demo-video",
      featured: false,
    },
    {
      id: 8,
      title: "Netflix Clone: Streaming UI",
      description:
        "A pixel-perfect replica of the Netflix UI with dynamic content loading from The Movie Database (TMDB) API and responsive layouts.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "The Movie Database API", "Axios", "CSS Grid"],
      category: "frontend",
      github: "https://github.com/amithbiju/netflix-clone",
      demo: "https://drive.google.com/demo-video",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p> */}
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          {/* <h3 className="text-2xl font-bold mb-8 text-center fade-in">
            Highlighted Work
          </h3> */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {featuredProjects.slice(0, 3).map((project) => (
              <Card
                key={project.id}
                className="card-hover bg-card shadow-soft overflow-hidden"
              >
                <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-muted-foreground/20">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Filter and View More Button */}
        <div className="text-center mb-12 fade-in">
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            size="lg"
            className="mb-8 gap-2"
          >
            {showAllProjects ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            {showAllProjects ? "Hide Projects" : "View All Projects"}
          </Button>
        </div>

        {/* All Projects Section (Conditional) */}
        {showAllProjects && (
          <>
            {/* Project Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
              <Filter className="h-5 w-5 text-muted-foreground mt-1" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`filter-btn px-6 py-3 rounded-full font-medium ${
                    filter === category.id ? "active" : ""
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* All Projects Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="card-hover bg-card shadow-soft overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl text-muted-foreground/20 font-bold">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-accent-green text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="btn-hero" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
