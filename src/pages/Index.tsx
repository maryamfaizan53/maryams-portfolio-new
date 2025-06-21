
import React, { Suspense, lazy } from 'react';
import MagicalParticles from '../components/MagicalParticles';
import HeroSection from '../components/HeroSection';
import SEOHead from '../components/SEOHead';
import Analytics from '../components/Analytics';
import ProgressIndicator from '../components/ProgressIndicator';
import EnhancedNavbar from '../components/EnhancedNavbar';

// Lazy load heavy components
const AboutSection = lazy(() => import('../components/AboutSection'));
const SkillsSection = lazy(() => import('../components/SkillsSection'));
const ProjectsSection = lazy(() => import('../components/ProjectsSection'));
const ExperienceSection = lazy(() => import('../components/ExperienceSection'));
const BlogSection = lazy(() => import('../components/BlogSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));
const Chatbot = lazy(() => import('../components/Chatbot'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-magical-purple border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <Suspense fallback={<LoadingFallback />}>
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <BlogSection />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
          <Chatbot />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
