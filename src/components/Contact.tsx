import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_79fi27s", // 👈 from EmailJS dashboard
        "template_qaffodn", // 👈 from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "BPWKi0U4iHJAo55lO" // 👈 from EmailJS dashboard
      )
      .then(
        () => {
          toast({
            title: "✅ Message sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "❌ Failed to send",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chouikhaoussema9@gmail.com",
      href: "mailto:chouikhaoussema9@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cité Ibn Sina, Tunis, Tunisia",
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 58 751 130",
      href: "tel:+21658751130",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background/50 border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background/50 border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border resize-none"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-6 animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary p-3 shadow-md group-hover:shadow-glow transition-shadow">
                      <info.icon className="w-full h-full text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/oussema-chouikha-7230a4233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://github.com/oussemacj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="mailto:chouikhaoussema9@gmail.com"
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
