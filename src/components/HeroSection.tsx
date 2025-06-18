
import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Code, Zap, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadResume } from './ResumeGenerator';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    downloadResume();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-magical-purple/5 via-magical-blue/5 to-magical-cyan/5" />
      
      {/* Interactive Mouse Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-enhanced"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-magical-purple to-magical-blue rounded-full animate-twinkle-enhanced" />
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Greeting Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-magical-purple/20 to-magical-blue/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 hover-lift hover-glow-intense transition-all duration-300">
            <Sparkles className="w-5 h-5 text-magical-purple animate-pulse" />
            <span className="text-sm font-medium text-magical-purple">Welcome to my digital universe</span>
            <Zap className="w-5 h-5 text-magical-blue animate-bounce" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-8 leading-tight hover-text-glow">
            <span className="block text-gradient animate-gradient-shift mb-4">
              Maryam Faizan
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-slate-300 hover:text-white transition-colors duration-300">
              AI & Full-Stack Developer
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed hover:text-slate-300 transition-colors duration-300">
            Crafting intelligent solutions with <span className="text-magical-purple font-semibold">cutting-edge AI</span>, 
            building <span className="text-magical-blue font-semibold">scalable web applications</span>, 
            and creating <span className="text-magical-cyan font-semibold">extraordinary digital experiences</span> 
            that push the boundaries of technology.
          </p>

          {/* Skill Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['React & Next.js', 'AI & Machine Learning', 'Full-Stack Development', 'TypeScript', 'Python'].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300 hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              className="btn-magical hover-lift hover-glow-intense hover-pulse-glow group px-8 py-4 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Explore My Work
              <Sparkles className="w-5 h-5 ml-3 group-hover:animate-spin" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-magical-cyan/50 text-magical-cyan hover:bg-magical-cyan/10 hover-border-glow hover-lift hover-pulse-glow group px-8 py-4 text-lg"
              onClick={handleDownloadResume}
            >
              <Download className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
              Download Resume
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Technologies Mastered', value: '20+' },
              { label: 'Happy Clients', value: '10+' },
              { label: 'Years Experience', value: '3+' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center hover-lift hover-glow-intense transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2 hover-text-glow">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce hover-lift">
            <div className="w-8 h-14 border-2 border-magical-purple/50 rounded-full flex justify-center hover:border-magical-purple transition-colors duration-300">
              <div className="w-1 h-3 bg-gradient-to-b from-magical-purple to-transparent rounded-full mt-2 animate-pulse" />
            </div>
            <ArrowDown className="w-6 h-6 mx-auto mt-4 text-magical-purple animate-bounce hover:text-magical-cyan transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Additional Visual Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
