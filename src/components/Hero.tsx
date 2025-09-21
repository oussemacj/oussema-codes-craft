import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePic from '@/assets/oussema14.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      
      {/* Animated gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img
                src={profilePic}
                alt="Oussema Chouikha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Hello, I'm </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Oussema</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80">
              Full-Stack Developer & Tech Innovator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Final-year Business Information Systems student at ESPRIT. 
              Specializing in Spring Boot, Angular, React, and microservices architecture. 
              Passionate about creating innovative banking and credit management solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/oussema-chouikha-7230a4233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chouikhaoussema9@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <ArrowDown className="text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;