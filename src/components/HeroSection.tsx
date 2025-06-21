
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ArrowDown, Sparkles, Code, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadResume } from './ResumeGenerator';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const throttledMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [handleMouseMove]);

  const handleDownloadResume = useCallback(() => {
    downloadResume();
  }, []);

  const handleExploreWork = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const skills = useMemo(() => ['React & Next.js', 'AI & Machine Learning', 'Full-Stack Development', 'TypeScript', 'Python'], []);
  const stats = useMemo(() => [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Years Experience', value: '3+' }
  ], []);

  const floatingElements = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${20 + i * 15}%`,
      top: `${20 + i * 10}%`,
      delay: `${i * 0.5}s`,
      duration: `${8 + i}s`,
    })), []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-magical-purple/5 via-magical-blue/5 to-magical-cyan/5" />
      
      {/* Interactive Mouse Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 will-change-transform"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float-enhanced"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-magical-purple to-magical-blue rounded-full animate-twinkle-enhanced" />
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Greeting Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-magical-purple/20 to-magical-blue/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-magical-purple animate-pulse" />
            <span className="text-sm font-medium text-magical-purple">Welcome to my digital universe</span>
            <Zap className="w-5 h-5 text-magical-blue animate-bounce" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-8 leading-tight">
            <span className="block text-gradient animate-gradient-shift mb-4">
              Maryam Faizan
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-slate-300">
              AI & Full-Stack Developer
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Crafting intelligent solutions with <span className="text-magical-purple font-semibold">cutting-edge AI</span>, 
            building <span className="text-magical-blue font-semibold">scalable web applications</span>, 
            and creating <span className="text-magical-cyan font-semibold">extraordinary digital experiences</span> 
            that push the boundaries of technology.
          </p>

          {/* Skill Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              className="btn-magical group px-8 py-4 text-lg"
              onClick={handleExploreWork}
            >
              <Code className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Explore My Work
              <Sparkles className="w-5 h-5 ml-3 group-hover:animate-spin" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-magical-cyan/50 text-magical-cyan hover:bg-magical-cyan/10 group px-8 py-4 text-lg"
              onClick={handleDownloadResume}
            >
              <Download className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
              Download Resume
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
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
