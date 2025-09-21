import { Award, BookOpen, Code, Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '20+' },
    { icon: Coffee, label: 'Happy Clients', value: '9+' },
    { icon: Award, label: 'Awards Won', value: '2' },
    { icon: BookOpen, label: 'Technologies', value: '17+' },
  ];

  const skills = [
    { name: 'Spring Boot', level: 90, color: 'bg-tech-green' },
    { name: 'Angular', level: 85, color: 'bg-primary' },
    { name: 'React', level: 88, color: 'bg-tech-blue' },
    { name: 'PHP', level: 70, color: 'bg-tech-green' },
    { name: 'MySQL', level: 85, color: 'bg-tech-blue' },
    { name: 'Docker', level: 60, color: 'bg-tech-blue' },
    { name: 'Python', level: 80, color: 'bg-tech-green' },
    { name: 'PowerBI', level: 75, color: 'bg-tech-purple' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                I'm Oussema, A Developer Based in Tunisia
              </h3>
              <p className="text-muted-foreground mb-4">
                As a Bachelor’s student in Business Information Systems at ESPRIT,
                 I am passionate about developing modern applications, leveraging AI, and working with data to create impactful solutions. My strengths are in full-stack development, with specialized experience in designing banking and credit management systems.
              </p>
              <p className="text-muted-foreground">
                With hands-on experience in Spring Boot, Angular, React, Python, and other modern technologies, I bring ideas to life through clean code and innovative solutions. I am currently working on my final-year project:
                 an advanced online credit management platform that integrates modern web technologies with intelligent credit scoring algorithms and real banking system modules.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur border-border/50 text-center hover:shadow-glow transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `slide-in 1s ease-out ${index * 0.1}s forwards`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Additional Skills */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h4 className="text-lg font-bold mb-3 text-foreground">Other Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[ 'Tableau' ,'Jenkins', 'MongoDB ATLAS' , 'WordPress', 'AI/ML Basics', 'Git', 'Agile/Scrum'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;