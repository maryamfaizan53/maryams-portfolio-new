
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Sparkles className="w-6 h-6" />,
      skills: [
        { name: 'Next.js', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'ShadCN UI', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Sparkles className="w-6 h-6" />,
      skills: [
        { name: 'OpenAI API', level: 88 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'NLP', level: 80 },
        { name: 'Computer Vision', level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Magical Skills
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A collection of technologies and tools I use to create extraordinary digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-magical group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-magical-purple/20 rounded-lg text-magical-purple group-hover:text-magical-cyan transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-magical-cyan text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-magical-purple to-magical-cyan h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code',
              'Postman', 'Prisma', 'Supabase', 'Firebase', 'Stripe', 'Framer Motion'
            ].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-slate-300 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300 hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
