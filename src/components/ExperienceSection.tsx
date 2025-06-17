
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior AI Developer',
      company: 'TechVision Labs',
      period: '2023 - Present',
      description: 'Leading AI development projects, implementing machine learning models, and creating intelligent web applications using cutting-edge technologies.',
      achievements: [
        'Developed 5+ AI-powered web applications',
        'Improved model accuracy by 25%',
        'Led a team of 3 junior developers'
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      period: '2022 - 2023',
      description: 'Built end-to-end web applications using modern frameworks, focusing on performance optimization and user experience.',
      achievements: [
        'Delivered 10+ client projects on time',
        'Reduced application load time by 40%',
        'Implemented responsive design systems'
      ],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      period: '2021 - 2022',
      description: 'Developed interactive web interfaces and collaborated with design teams to create user-friendly applications.',
      achievements: [
        'Contributed to 8+ web development projects',
        'Learned modern web development stack',
        'Collaborated with cross-functional teams'
      ],
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-900/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Experience Journey
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A timeline of my professional growth and the magical projects I've been part of
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-magical-purple via-magical-blue to-magical-cyan"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-magical-purple to-magical-cyan rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="card-magical">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-magical-purple/20 rounded-lg text-magical-purple">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                          <span className="text-magical-cyan text-sm font-medium">{exp.period}</span>
                        </div>
                        <h4 className="text-magical-purple font-medium mb-3">{exp.company}</h4>
                        <p className="text-slate-400 mb-4">{exp.description}</p>
                        
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-sm text-slate-300">
                              <Sparkles className="w-4 h-4 text-magical-cyan mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
