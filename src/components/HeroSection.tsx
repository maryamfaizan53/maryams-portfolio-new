
import React from 'react';
import { Sparkles, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating magical elements */}
          <div className="absolute top-20 left-10 animate-float">
            <Sparkles className="w-6 h-6 text-magical-purple animate-pulse" />
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <Zap className="w-8 h-8 text-magical-cyan animate-pulse" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-5 h-5 text-magical-pink animate-pulse" />
          </div>

          {/* Main content */}
          <div className="space-y-8">
            {/* Profile image placeholder */}
            <div className="relative mx-auto w-48 h-48 mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-magical-purple via-magical-blue to-magical-cyan p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-magical-purple/20 to-magical-blue/20 flex items-center justify-center">
                    <span className="text-6xl font-orbitron font-bold text-gradient">MF</span>
                  </div>
                </div>
              </div>
              
              {/* Floating sparkles around profile */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-magical-purple rounded-full animate-sparkle"></div>
              <div className="absolute top-10 -left-4 w-3 h-3 bg-magical-cyan rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 left-8 w-2 h-2 bg-magical-pink rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-gradient leading-tight">
                Maryam Faizan
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
                  AI Developer & Full Stack Web Developer
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  Crafting magical digital experiences with cutting-edge AI and modern web technologies
                </p>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Next.js', 'React', 'Python', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-sm text-slate-300 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button
                  onClick={scrollToContact}
                  className="btn-magical group"
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                    <span>Let's Create Magic</span>
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-magical-purple/50 text-magical-purple hover:bg-magical-purple/10 hover:border-magical-purple transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-magical-purple/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-magical-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
