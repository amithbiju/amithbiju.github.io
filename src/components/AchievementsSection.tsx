import { useState } from "react";
import {
  Trophy,
  Star,
  GitBranch,
  Users,
  Calendar,
  TrendingUp,
  Eye,
  EyeOff,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AchievementsSection = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const achievements = [
    {
      id: 1,
      title: "Top 10 Team - Ingenium 2025",
      description:
        "Achieved a top 10 position in the Ingenium competition hosted by Quest Global, showcasing innovation and technical skills.",
      date: "2025",
      category: "Competition",
      icon: Trophy,
      impact:
        "Recognized for developing a high-impact solution among numerous participants.",
      featured: true,
    },
    {
      id: 2,
      title: "Global Hackathon Finalist - Infosys 2025",
      description:
        "Selected as a finalist in the Infosys Global Hackathon, demonstrating exceptional problem-solving and collaboration abilities on a worldwide stage.",
      date: "2025",
      category: "Competition",
      icon: Trophy,
      impact:
        "Competed against global teams and reached the final round with an innovative solution.",
      featured: true,
    },
    {
      id: 3,
      title: "Innovate Hackathon Finalist - InApp 2024",
      description:
        "Secured a finalist spot in the Innovate Hackathon by InApp, validating skills in rapid prototyping and creative solution design.",
      date: "2024",
      category: "Competition",
      icon: Trophy,
      impact:
        "Successfully conceptualized and built a project that stood out to industry experts.",
      featured: true,
    },
  ];

  const categories = [
    "Competition",
    "Development",
    "Content",
    "Open Source",
    "Speaking",
    "Community",
    "Technical",
  ];
  const categoryColors = {
    Competition: "bg-accent-orange",
    Development: "bg-accent-green",
    Content: "bg-primary-light",
    "Open Source": "bg-accent-pink",
    Speaking: "bg-secondary-accent",
    Community: "bg-accent",
    Technical: "bg-primary-lighter",
  };

  const featuredAchievements = achievements.filter(
    (achievement) => achievement.featured
  );

  return (
    <section id="achievements" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Achievements
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognition throughout my development journey
          </p> */}
        </div>

        {/* Featured Achievements Timeline */}
        <div className="mb-16 fade-in" style={{ animationDelay: "0.2s" }}>
          {/* <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
            Notable Achievements
          </h3> */}
          <div className="max-w-4xl mx-auto">
            {featuredAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="timeline-item mb-8 last:mb-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="card-hover bg-card shadow-soft ml-4 md:ml-8">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="flex-shrink-0 self-center sm:self-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <achievement.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h4 className="text-base md:text-lg font-semibold">
                            {achievement.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className={`${
                              categoryColors[
                                achievement.category as keyof typeof categoryColors
                              ]
                            } text-white text-xs self-center sm:self-start`}
                          >
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        <p className="text-sm font-medium text-primary mb-2">
                          {achievement.impact}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div
          className="text-center mb-12 fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            onClick={() => setShowAllAchievements(!showAllAchievements)}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            {showAllAchievements ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            {showAllAchievements
              ? "Hide All Achievements"
              : "View All Achievements"}
          </Button>
        </div>

        {/* All Achievements Grid (Conditional) */}
        {showAllAchievements && (
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
              All Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className="card-hover bg-card shadow-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          categoryColors[
                            achievement.category as keyof typeof categoryColors
                          ]
                        } text-white text-xs`}
                      >
                        {achievement.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-base md:text-lg mb-2 leading-tight text-center sm:text-left">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 text-center sm:text-left">
                      {achievement.description}
                    </p>
                    <p className="text-sm font-medium text-primary mb-3 text-center sm:text-left">
                      {achievement.impact}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {achievement.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievement Stats */}
        {/* <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">
              {achievements.length}
            </h4>
            <p className="text-muted-foreground">Total Achievements</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">
              {categories.length}
            </h4>
            <p className="text-muted-foreground">Categories</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">100+</h4>
            <p className="text-muted-foreground">GitHub Contributions</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">10k+</h4>
            <p className="text-muted-foreground">Blog Views</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;
