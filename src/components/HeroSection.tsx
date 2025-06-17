
import React from 'react';
import { Sparkles, Zap, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-magical-purple/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magical-blue/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magical-cyan/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Floating magical elements with enhanced animations */}
          <div className="absolute top-20 left-10 animate-float-enhanced opacity-80">
            <Sparkles className="w-8 h-8 text-magical-purple animate-twinkle-enhanced" />
          </div>
          <div className="absolute top-32 right-16 animate-float-enhanced opacity-80" style={{ animationDelay: '1s' }}>
            <Zap className="w-10 h-10 text-magical-cyan animate-twinkle-enhanced" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float-enhanced opacity-80" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-6 h-6 text-magical-pink animate-twinkle-enhanced" />
          </div>
          <div className="absolute top-1/4 right-1/4 animate-float-enhanced opacity-60" style={{ animationDelay: '0.5s' }}>
            <div className="w-3 h-3 bg-magical-violet rounded-full animate-twinkle-enhanced"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float-enhanced opacity-60" style={{ animationDelay: '1.5s' }}>
            <div className="w-2 h-2 bg-magical-indigo rounded-full animate-twinkle-enhanced"></div>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Enhanced Profile image */}
            <div className="relative mx-auto w-56 h-56 mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-magical-purple via-magical-blue to-magical-cyan rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-magical-purple/30 via-magical-blue/20 to-magical-cyan/30 flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl font-orbitron font-bold text-gradient text-shadow-glow">MF</span>
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magical-purple/10 to-magical-cyan/10 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Enhanced floating sparkles */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-magical-purple rounded-full animate-twinkle-enhanced shadow-lg shadow-magical-purple/50"></div>
              <div className="absolute top-12 -left-6 w-4 h-4 bg-magical-cyan rounded-full animate-twinkle-enhanced shadow-lg shadow-magical-cyan/50" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute -bottom-4 left-10 w-3 h-3 bg-magical-pink rounded-full animate-twinkle-enhanced shadow-lg shadow-magical-pink/50" style={{ animationDelay: '1.4s' }}></div>
              <div className="absolute bottom-16 -right-8 w-5 h-5 bg-magical-violet rounded-full animate-twinkle-enhanced shadow-lg shadow-magical-violet/50" style={{ animationDelay: '2.1s' }}></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-gradient leading-tight text-shadow-glow">
                  Maryam Faizan
                </h1>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-medium text-slate-200 text-shadow-glow">
                    AI Developer & Full Stack Web Developer
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Crafting <span className="text-gradient font-semibold">magical digital experiences</span> with 
                    cutting-edge AI and modern web technologies
                  </p>
                </div>
              </div>

              {/* Enhanced Tech stack badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {[
                  { name: 'Next.js', color: 'from-slate-600 to-slate-800' },
                  { name: 'React', color: 'from-blue-600 to-blue-800' },
                  { name: 'Python', color: 'from-yellow-600 to-yellow-800' },
                  { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
                  { name: 'Tailwind CSS', color: 'from-cyan-600 to-cyan-800' },
                  { name: 'Node.js', color: 'from-green-600 to-green-800' }
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`px-6 py-3 bg-gradient-to-r ${tech.color} backdrop-blur-sm rounded-full text-sm font-medium text-white 
                              hover:text-magical-cyan hover:shadow-lg hover:shadow-cyan-500/25 
                              transition-all duration-300 hover:scale-110 border border-slate-600/30
                              animate-float-enhanced`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
                <Button
                  onClick={scrollToContact}
                  className="btn-magical group text-lg px-10 py-4 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center space-x-3">
                    <Sparkles className="w-6 h-6 group-hover:animate-spin transition-transform duration-300" />
                    <span>Let's Create Magic</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-magical-purple/60 text-magical-purple hover:bg-magical-purple/20 
                           hover:border-magical-purple hover:shadow-lg hover:shadow-purple-500/25 
                           transition-all duration-300 text-lg px-10 py-4 backdrop-blur-sm
                           bg-slate-900/40 hover:scale-105"
                >
                  <span className="flex items-center space-x-3">
                    <Download className="w-6 h-6" />
                    <span>Download Resume</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
        <div className="w-8 h-14 border-2 border-magical-purple/60 rounded-full flex justify-center backdrop-blur-sm bg-slate-900/20">
          <div className="w-2 h-4 bg-gradient-to-b from-magical-purple to-magical-cyan rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-magical-purple text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
