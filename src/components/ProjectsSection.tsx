
import React, { useState } from 'react';
import { Sparkles, Zap, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI system built with OpenAI API, featuring natural language processing and context-aware responses.',
      image: '/placeholder.svg',
      category: 'AI/ML',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and payment integration.',
      image: '/placeholder.svg',
      category: 'Full Stack',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Smart Home IoT Controller',
      description: 'Mobile-responsive web app for controlling IoT devices with real-time monitoring and automated scheduling.',
      image: '/placeholder.svg',
      category: 'IoT',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Arduino'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Machine Learning Model Predictor',
      description: 'Web application for training and deploying ML models with interactive data visualization and model comparison.',
      image: '/placeholder.svg',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'Flask', 'D3.js', 'Pandas'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'IoT'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6 hover-text-glow hover-lift">
            Magical Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto hover:text-slate-300 transition-colors duration-300">
            A showcase of innovative projects that demonstrate the perfect blend of creativity and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover-lift hover-pulse-glow ${
                filter === category
                  ? 'bg-gradient-to-r from-magical-purple to-magical-blue text-white hover-glow-intense'
                  : 'border-magical-purple/50 text-magical-purple hover:bg-magical-purple/10 hover-border-glow'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="card-magical group overflow-hidden hover-glow-intense hover-lift">
              <div className="relative">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-magical-purple/20 to-magical-blue/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden hover-border-glow">
                  <div className="w-full h-full bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors duration-300">
                    <Sparkles className="w-12 h-12 text-magical-purple animate-pulse hover-bounce hover-rotate group-hover:text-magical-cyan transition-colors duration-300" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 px-3 py-1 bg-magical-purple/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white hover-pulse-glow hover-lift">
                  {project.category}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-magical-cyan transition-colors duration-300 hover-text-glow hover-lift cursor-pointer">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded border border-slate-600/50 hover:bg-slate-600/50 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300 hover-lift cursor-pointer"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-magical-purple to-magical-blue hover-lift hover-glow-intense hover-pulse-glow transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 hover-bounce" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-magical-cyan/50 text-magical-cyan hover:bg-magical-cyan/10 hover-border-glow hover-lift hover-pulse-glow"
                  >
                    <Github className="w-4 h-4 mr-2 hover-rotate" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="btn-magical hover-glow-intense hover-lift hover-pulse-glow">
            <Zap className="w-5 h-5 mr-2 hover-bounce" />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
