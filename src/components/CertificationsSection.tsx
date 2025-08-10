import { useState } from 'react';
import { Award, ExternalLink, Download, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const certifications = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      platform: "Coursera",
      date: "2024",
      description: "Advanced React concepts, hooks, and state management",
      credentialId: "ABC123XYZ",
      verifyUrl: "https://coursera.org/verify/ABC123XYZ",
      downloadUrl: "#",
      skills: ["React", "Redux", "JavaScript"],
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      platform: "freeCodeCamp",
      date: "2023",
      description: "Complete full-stack development certification including frontend and backend",
      credentialId: "FCC789DEF",
      verifyUrl: "https://freecodecamp.org/certification/sarah-chen/full-stack",
      downloadUrl: "#",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"],
      featured: true
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      platform: "freeCodeCamp",
      date: "2023",
      description: "Advanced JavaScript concepts and algorithm problem solving",
      credentialId: "FCC456GHI",
      verifyUrl: "https://freecodecamp.org/certification/sarah-chen/javascript-algorithms",
      downloadUrl: "#",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
      featured: false
    },
    {
      id: 4,
      title: "Modern Web Development",
      issuer: "Udemy",
      platform: "Udemy",
      date: "2023",
      description: "Complete modern web development bootcamp covering latest technologies",
      credentialId: "UC-MODERN-WEB",
      verifyUrl: "https://udemy.com/certificate/UC-MODERN-WEB",
      downloadUrl: "#",
      skills: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 5,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      platform: "AWS",
      date: "2024",
      description: "Foundational knowledge of AWS cloud services and architecture",
      credentialId: "AWS-CP-2024",
      verifyUrl: "https://aws.amazon.com/verification",
      downloadUrl: "#",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      featured: false
    },
    {
      id: 6,
      title: "Advanced TypeScript",
      issuer: "TypeScript Academy",
      platform: "Udemy",
      date: "2024",
      description: "Advanced TypeScript patterns, generics, and type system mastery",
      credentialId: "TS-ADV-2024",
      verifyUrl: "https://udemy.com/certificate/TS-ADV-2024",
      downloadUrl: "#",
      skills: ["TypeScript", "Advanced Types", "Generics"],
      featured: false
    }
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center fade-in">Featured Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in" style={{ animationDelay: '0.2s' }}>
            {featuredCertifications.map((cert, index) => (
              <Card key={cert.id} className="card-hover bg-card shadow-soft" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-8 w-8 text-accent-green mb-2" />
                    <Badge variant="secondary" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.platform}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <p><span className="font-medium">Credential ID:</span> {cert.credentialId}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Verify
                      </a>
                    </Button>
                    <Button size="sm" className="btn-hero" asChild>
                      <a href={cert.downloadUrl} download>
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => setShowAllCertifications(!showAllCertifications)}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            {showAllCertifications ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAllCertifications ? 'Hide Additional Certifications' : 'View Additional Certifications'}
          </Button>
        </div>

        {/* Other Certifications (Conditional) */}
        {showAllCertifications && (
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center">Additional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCertifications.map((cert, index) => (
                <Card key={cert.id} className="card-hover bg-card shadow-soft" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Award className="h-6 w-6 text-accent-green" />
                      <Badge variant="secondary" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-lg mb-1 leading-tight">{cert.title}</h4>
                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-3">{cert.platform}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Verify
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in" style={{ animationDelay: '0.6s' }}>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">{certifications.length}</h4>
            <p className="text-muted-foreground">Total Certifications</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">3</h4>
            <p className="text-muted-foreground">Platforms</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">2024</h4>
            <p className="text-muted-foreground">Latest Year</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
            <p className="text-muted-foreground">Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
