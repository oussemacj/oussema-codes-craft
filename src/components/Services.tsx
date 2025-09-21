import { Globe, Server, CreditCard, Palette, Cloud, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern frameworks like React, Angular, and Spring Boot.',
      features: ['Responsive Design', 'RESTful APIs', 'Database Design', 'Performance Optimization'],
    },
    {
      icon: Palette,
      title: 'Frontend UI/UX Development',
      description: 'Creating beautiful, intuitive user interfaces with focus on user experience and modern design principles.',
      features: ['Material Design', 'Responsive Layouts', 'Animation', 'Accessibility'],
    },
    
    {
      icon: CreditCard,
      title: 'Enterprise Software Solutions',
      description: ' Delivering tailored solutions for complex business needs with a focus on automation and efficiency. management and banking systems.',
      features: [' Business Process Automation', 'Secure Data Management', 'Compliance & Risk Tools', 'Scalable Enterprise Applications'],
    },
    
    {
      icon: Cloud,
      title: 'DevOps & CI/CD Integration',
      description: 'Streamlining development workflows with automated testing, deployment, and monitoring solutions.',
      features: ['Docker', 'Jenkins', 'Kubernetes', 'Monitoring Tools'],
    },
    {
      icon: Brain,
      title: 'AI & Data Science Projects',
      description: 'Integrating machine learning and AI capabilities to enhance application intelligence and automation.',
      features: ['Predictive Analytics', 'NLP Integration', 'Data Visualization', 'ML Models'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">My Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm excited to transform your vision into reality. Let me make your digital product 
            stand out with cutting-edge technology and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-full h-full text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;