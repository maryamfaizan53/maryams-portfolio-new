
import React from 'react';
import MagicalParticles from '../components/MagicalParticles';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import EnhancedNavbar from '../components/EnhancedNavbar';
import ProgressIndicator from '../components/ProgressIndicator';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Analytics from '../components/Analytics';

const Index = () => {
  return (
    <>
      <SEOHead />
      <Analytics />
      <div className="min-h-screen bg-dark-magical relative overflow-x-hidden">
        <MagicalParticles />
        <ProgressIndicator />
        <EnhancedNavbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
