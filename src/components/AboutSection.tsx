
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6 hover-text-glow hover-lift">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto hover:text-slate-300 transition-colors duration-300">
            Passionate about creating innovative solutions that bridge the gap between artificial intelligence and beautiful user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 hover-lift">
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2 hover-text-glow">
                <Sparkles className="w-6 h-6 text-magical-purple hover-bounce hover-rotate" />
                <span className="hover-lift">My Journey</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 hover:text-white transition-colors duration-300">
                I'm a passionate AI Developer and Full Stack Web Developer with a deep love for creating 
                magical digital experiences. My journey in technology has been driven by curiosity and 
                the desire to build solutions that make a real impact.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6 hover:text-white transition-colors duration-300">
                With expertise in modern web technologies like Next.js, React, and Python, I specialize 
                in developing AI-powered applications that are not only functional but also visually 
                stunning and user-friendly.
              </p>
              <p className="text-slate-300 leading-relaxed hover:text-white transition-colors duration-300">
                When I'm not coding, you'll find me exploring the latest AI trends, contributing to 
                open-source projects, or experimenting with new ways to create enchanting user interfaces.
              </p>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            <Card className="card-magical hover-glow-intense hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-purple/20 rounded-lg hover-pulse-glow hover-rotate">
                  <Zap className="w-6 h-6 text-magical-purple hover:text-magical-cyan transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
                    AI Development
                  </h4>
                  <p className="text-slate-400 hover:text-slate-300 transition-colors duration-300">
                    Building intelligent systems with machine learning, natural language processing, 
                    and computer vision technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-magical hover-glow-intense hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-blue/20 rounded-lg hover-pulse-glow hover-rotate">
                  <Sparkles className="w-6 h-6 text-magical-blue hover:text-magical-cyan transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
                    Full Stack Development
                  </h4>
                  <p className="text-slate-400 hover:text-slate-300 transition-colors duration-300">
                    Creating end-to-end web applications with modern frameworks, databases, 
                    and cloud technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-magical hover-glow-intense hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-cyan/20 rounded-lg hover-pulse-glow hover-rotate">
                  <Sparkles className="w-6 h-6 text-magical-cyan hover:text-magical-pink transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
                    UI/UX Design
                  </h4>
                  <p className="text-slate-400 hover:text-slate-300 transition-colors duration-300">
                    Designing beautiful, intuitive interfaces that provide exceptional user 
                    experiences across all devices.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center hover-lift hover-glow-intense hover-pulse-glow cursor-pointer">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2 hover-text-glow hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm hover:text-magical-cyan transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
