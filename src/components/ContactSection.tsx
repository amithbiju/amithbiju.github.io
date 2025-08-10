import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amithbiju1@gmail.com",
      href: "mailto:amithbiju1@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9526276014",
      href: "tel:+919526276014",
      description: "Available for calls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala , India",
      href: null,
      description: "Open to remote work",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/amithbiju",
      description: "Check out my code",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/amithbiju",
      description: "Let's connect professionally",
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/amith_resume.pdf",
      description: "Download my resume",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities and interesting
            projects. Let's create something amazing together!
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          {/* <div className="fade-in">
            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium mb-2 block"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium mb-2 block"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-hero w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
          {/* Social Links */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Connect with me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <social.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{social.label}</h4>
                    <p className="text-muted-foreground text-sm">
                      {social.description}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Contact Details */}
            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-primary hover:text-primary-light transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links
            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{social.label}</h4>
                      <p className="text-muted-foreground text-sm">
                        {social.description}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card> */}

            {/* Quick Contact */}
            {/* s */}
          </div>
        </div>

        {/* Response Time Info */}
        {/* <div
          className="mt-16 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">
                &lt; 24hrs
              </h4>
              <p className="text-muted-foreground">Response Time</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
              <p className="text-muted-foreground">Response Rate</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">
                Available
              </h4>
              <p className="text-muted-foreground">For New Projects</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
