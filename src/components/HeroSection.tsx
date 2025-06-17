
import React from 'react';
import { Sparkles, Zap, Download, ArrowRight, Code, Cpu, Palette } from 'lucide-react';
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
      {/* Enhanced Background with Moving Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-magical-purple/15 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-magical-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magical-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-magical-purple/20 animate-twinkle-enhanced" style={{ animationDelay: `${i * 0.01}s` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced floating decorative elements */}
          <div className="absolute top-16 left-8 animate-float-enhanced opacity-90">
            <div className="relative">
              <Code className="w-12 h-12 text-magical-purple animate-twinkle-enhanced" />
              <div className="absolute inset-0 bg-magical-purple/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
          <div className="absolute top-24 right-12 animate-float-enhanced opacity-90" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <Cpu className="w-14 h-14 text-magical-cyan animate-twinkle-enhanced" />
              <div className="absolute inset-0 bg-magical-cyan/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
          <div className="absolute bottom-32 left-16 animate-float-enhanced opacity-90" style={{ animationDelay: '2s' }}>
            <div className="relative">
              <Palette className="w-10 h-10 text-magical-pink animate-twinkle-enhanced" />
              <div className="absolute inset-0 bg-magical-pink/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>

          {/* Additional decorative particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-magical-violet rounded-full animate-twinkle-enhanced opacity-70`}
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 12)}%`,
                right: `${10 + (i * 8)}%`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}

          {/* Main content with enhanced design */}
          <div className="space-y-16">
            {/* Modern Profile Section */}
            <div className="relative mx-auto w-64 h-64 mb-16">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-magical-purple via-magical-blue to-magical-cyan rounded-full animate-spin opacity-80" style={{ animationDuration: '15s' }}></div>
              
              {/* Middle ring */}
              <div className="absolute inset-2 bg-gradient-to-r from-magical-cyan via-magical-pink to-magical-violet rounded-full animate-spin opacity-60" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
              
              {/* Inner container */}
              <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center shadow-2xl shadow-magical-purple/50">
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-magical-purple/40 via-magical-blue/30 to-magical-cyan/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                  <span className="text-8xl font-orbitron font-bold text-gradient text-shadow-glow hover-lift">MF</span>
                  
                  {/* Inner animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magical-purple/20 to-magical-cyan/20 rounded-full animate-pulse opacity-50"></div>
                  
                  {/* Floating mini particles inside */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-white rounded-full animate-twinkle-enhanced`}
                      style={{
                        top: `${20 + (i * 10)}%`,
                        left: `${15 + (i * 12)}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced orbital sparkles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-3 h-3 bg-gradient-to-r from-magical-purple to-magical-cyan rounded-full animate-twinkle-enhanced shadow-lg`}
                  style={{
                    top: `${50 + 35 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                    left: `${50 + 35 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    animationDelay: `${i * 0.2}s`,
                    filter: 'drop-shadow(0 0 8px currentColor)'
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced Typography Section */}
            <div className="space-y-12">
              <div className="space-y-8">
                {/* Main title with enhanced effects */}
                <div className="relative">
                  <h1 className="text-7xl md:text-9xl font-orbitron font-bold text-gradient leading-tight text-shadow-glow hover-lift hover-text-glow cursor-default">
                    Maryam Faizan
                  </h1>
                  
                  {/* Title underline effect */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-magical-cyan to-transparent animate-pulse"></div>
                </div>
                
                {/* Enhanced subtitle with typing effect simulation */}
                <div className="space-y-6">
                  <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-medium text-slate-200 text-shadow-glow hover-text-glow transition-all duration-500">
                      AI Developer & Full Stack Web Developer
                    </h2>
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-magical-cyan animate-pulse opacity-80"></div>
                  </div>
                  
                  <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed hover:text-slate-200 transition-colors duration-300">
                    Crafting <span className="text-gradient font-semibold hover-text-glow">magical digital experiences</span> with 
                    cutting-edge AI and modern web technologies that bring your <span className="text-gradient font-semibold">visions to life</span>
                  </p>
                </div>
              </div>

              {/* Enhanced Tech stack with better visual hierarchy */}
              <div className="space-y-6">
                <h3 className="text-xl text-magical-cyan font-semibold mb-8 hover-text-glow">Powered by Modern Technology</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { name: 'Next.js', color: 'from-slate-600 to-slate-800', icon: '⚡' },
                    { name: 'React', color: 'from-blue-600 to-blue-800', icon: '⚛️' },
                    { name: 'Python', color: 'from-yellow-600 to-yellow-800', icon: '🐍' },
                    { name: 'TypeScript', color: 'from-blue-500 to-blue-700', icon: '📘' },
                    { name: 'Tailwind CSS', color: 'from-cyan-600 to-cyan-800', icon: '🎨' },
                    { name: 'Node.js', color: 'from-green-600 to-green-800', icon: '🚀' }
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`group px-8 py-4 bg-gradient-to-r ${tech.color} backdrop-blur-sm rounded-2xl text-sm font-medium text-white 
                                hover:text-magical-cyan hover:shadow-xl hover:shadow-cyan-500/30 
                                transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-slate-600/30
                                animate-float-enhanced hover-glow-intense cursor-pointer relative overflow-hidden`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg group-hover:animate-bounce">{tech.icon}</span>
                        <span className="group-hover:text-shadow-glow">{tech.name}</span>
                      </div>
                      
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA Buttons with better spacing and effects */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center mt-20">
                <Button
                  onClick={scrollToContact}
                  className="btn-magical group text-xl px-12 py-6 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden"
                >
                  <span className="flex items-center space-x-4 relative z-10">
                    <Sparkles className="w-7 h-7 group-hover:animate-spin transition-transform duration-300" />
                    <span>Let's Create Magic</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-magical-purple/60 text-magical-purple hover:bg-magical-purple/20 
                           hover:border-magical-purple hover:shadow-xl hover:shadow-purple-500/30 
                           transition-all duration-300 text-xl px-12 py-6 backdrop-blur-sm
                           bg-slate-900/40 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="flex items-center space-x-4 relative z-10">
                    <Download className="w-7 h-7 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-magical-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with better design */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-90 hover-lift cursor-pointer group">
        <div className="relative">
          <div className="w-10 h-16 border-2 border-magical-purple/60 rounded-full flex justify-center backdrop-blur-sm bg-slate-900/30 group-hover:border-magical-cyan transition-colors duration-300">
            <div className="w-2 h-6 bg-gradient-to-b from-magical-purple to-magical-cyan rounded-full mt-4 animate-pulse group-hover:animate-bounce"></div>
          </div>
          
          {/* Glow effect around scroll indicator */}
          <div className="absolute inset-0 bg-magical-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <p className="text-magical-purple text-sm mt-3 font-medium group-hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
