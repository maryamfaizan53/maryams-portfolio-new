
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbit font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between artificial intelligence and beautiful user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-magical-purple" />
                <span>My Journey</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm a passionate AI Developer and Full Stack Web Developer with a deep love for creating 
                magical digital experiences. My journey in technology has been driven by curiosity and 
                the desire to build solutions that make a real impact.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                With expertise in modern web technologies like Next.js, React, and Python, I specialize 
                in developing AI-powered applications that are not only functional but also visually 
                stunning and user-friendly.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest AI trends, contributing to 
                open-source projects, or experimenting with new ways to create enchanting user interfaces.
              </p>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            <Card className="card-magical">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-purple/20 rounded-lg">
                  <Zap className="w-6 h-6 text-magical-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">AI Development</h4>
                  <p className="text-slate-400">
                    Building intelligent systems with machine learning, natural language processing, 
                    and computer vision technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-magical">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-blue/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-magical-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Full Stack Development</h4>
                  <p className="text-slate-400">
                    Creating end-to-end web applications with modern frameworks, databases, 
                    and cloud technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-magical">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-magical-cyan/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-magical-cyan" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">UI/UX Design</h4>
                  <p className="text-slate-400">
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
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
