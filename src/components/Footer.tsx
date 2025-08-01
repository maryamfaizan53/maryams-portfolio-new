
import React from 'react';
import { Sparkles, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/maryamfaizan53', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/maryam-faizan-b86965323', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/maryammm556', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href:'mailto:maryamfaizanmianoor@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 hover-border-glow">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 hover-lift">
                <Sparkles className="w-8 h-8 text-magical-purple animate-pulse hover-bounce hover-rotate" />
                <span className="text-3xl font-orbitron font-bold text-gradient hover:scale-105 transition-transform duration-300 hover-text-glow">
                  Maryam Faizan
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md hover:text-slate-300 transition-colors duration-300">
                AI Developer & Full Stack Web Developer passionate about creating magical digital experiences 
                with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-400 hover:text-magical-cyan hover:border-magical-cyan/50 transition-all duration-300 hover-lift hover-glow-intense hover-pulse-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-magical-cyan transition-all duration-300 hover-lift hover-text-glow"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 hover:text-magical-cyan transition-colors duration-300 hover-text-glow">
                Services
              </h3>
              <ul className="space-y-2 text-slate-400">
                {[
                  'AI Development',
                  'Full Stack Web Development',
                  'UI/UX Design',
                  'API Development',
                  'Consultation'
                ].map((service, index) => (
                  <li 
                    key={service}
                    className="hover:text-magical-cyan transition-colors duration-300 hover-lift cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-300">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-magical-pink animate-pulse hover-bounce hover:text-magical-cyan transition-colors duration-300" />
              <span>by Maryam Faizan</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-magical-purple to-magical-blue text-white rounded-lg hover-lift hover-glow-intense hover-pulse-glow transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 hover-bounce" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Magical particles at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-magical-purple via-magical-blue to-magical-cyan opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
    </footer>
  );
};

export default Footer;
