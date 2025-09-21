import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Online Credit Management System',
      category: 'full-stack',
      description: 'Advanced credit management platform with multi-step simulation, authentication, and intelligent credit scoring.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'JWT', 'Docker'],
      features: [
        'Multi-step credit simulation',
        'Document-based credit scoring',
        'Real-time notifications',
        'Secure authentication',
      ],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Banking Microservices Platform',
      category: 'backend',
      description: 'Scalable banking platform using microservices architecture with event sourcing and CQRS patterns.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      technologies: ['Spring Cloud', 'Axon Framework', 'Docker', 'Kafka', 'MongoDB'],
      features: [
        'Customer management service',
        'Account service with transactions',
        'Authentication & authorization',
        'Event-driven architecture',
      ],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      category: 'frontend',
      description: 'Interactive dashboard providing insights from credit applications and banking data.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'RxJS', 'Material UI', 'Chart.js'],
      features: [
        'Real-time analytics',
        'Real-time calculations',
        'User-friendly reporting',
      ],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: ' AI-Powered Credit Scoring System',
      category: 'backend',
      description: 'model integrated into the credit management platform for predictive scoring.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'Redis', 'WinSMS API', 'Docker'],
      features: [
        'Risk evaluation & predictions',
        'AI-driven decision making',
        
      ],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'RAG Chatbot for Customer Support',
      category: 'frontend',
      description: 'Intelligent chatbot integrated with RAG (Retrieval-Augmented Generation) for answering user queries and guiding applications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI API', 'LangChain', ],
      features: [
        'Conversational AI',
        'Knowledge retrieval',
        'Real-time assistance',
      ],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      category: 'full-stack',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Stripe API', 'AWS'],
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment processing',
        'Order tracking',
      ],
      github: '#',
      live: '#',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'full-stack', label: 'Full-Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest projects and technical achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? 'hero' : 'outline'}
              onClick={() => setFilter(category.value)}
              className="min-w-[120px]"
            >
              <Filter className="mr-2" size={16} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" className="flex-1">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-1" />
                    Live
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;