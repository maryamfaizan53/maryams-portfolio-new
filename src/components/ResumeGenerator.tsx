
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeGenerator = () => {
  const generateResume = () => {
    const resumeContent = `
MARYAM FAIZAN
AI & Full-Stack Web Developer
Email: maryam.faizan@example.com | Phone: +92-XXX-XXXXXXX
LinkedIn: linkedin.com/in/maryamfaizan | GitHub: github.com/maryamfaizan53
Portfolio: https://portfolio-nextjs-tailwind-flax.vercel.app/

PROFESSIONAL SUMMARY
================================================================================
Innovative AI and Full-Stack Web Developer with expertise in modern web technologies,
machine learning, and artificial intelligence. Proven track record of developing
scalable web applications, AI-powered solutions, and responsive user interfaces.
Experienced in both frontend and backend development with strong problem-solving
skills and attention to detail.

TECHNICAL SKILLS
================================================================================
Programming Languages: JavaScript, TypeScript, Python, HTML5, CSS3
Frontend Technologies: React.js, Next.js, Vue.js, TailwindCSS, Bootstrap, Responsive Design
Backend Technologies: Node.js, Express.js, FastAPI, RESTful APIs, GraphQL
AI/ML Technologies: OpenAI API, TensorFlow, Pandas, Scikit-learn, Natural Language Processing
Databases: MongoDB, PostgreSQL, MySQL, Prisma ORM
Cloud & DevOps: AWS, Vercel, Netlify, Docker, Git, GitHub Actions
Tools & Others: Figma, Sanity CMS, Stripe Integration, Socket.io, Arduino

PROFESSIONAL EXPERIENCE
================================================================================
Freelance AI & Full-Stack Developer                                    2022 - Present
• Developed 15+ responsive web applications using React.js, Next.js, and TypeScript
• Built AI-powered chatbot platform with OpenAI API integration serving 1000+ users
• Created real-time e-commerce dashboard with MongoDB and Stripe payment integration
• Implemented machine learning models for predictive analytics and data visualization
• Collaborated with cross-functional teams to deliver projects 20% ahead of schedule

Junior Web Developer                                                   2021 - 2022
• Maintained and enhanced existing web applications using modern JavaScript frameworks
• Optimized application performance resulting in 40% faster load times
• Integrated third-party APIs and services for enhanced functionality
• Participated in code reviews and contributed to best practices documentation

FEATURED PROJECTS
================================================================================
AI-Powered Chatbot Platform
• Technologies: Python, FastAPI, OpenAI API, React, PostgreSQL, Chainlit
• Developed intelligent conversational AI system with context-aware responses
• Implemented natural language processing for enhanced user interaction
• Live Demo: Available on GitHub - github.com/maryamfaizan53/chatbot-chainlit

E-commerce Admin Dashboard
• Technologies: Next.js, TypeScript, Stripe, Prisma, TailwindCSS, MongoDB
• Built comprehensive admin panel with real-time analytics and inventory management
• Integrated secure payment processing and order management system
• Live Demo: https://real-time-dashboard-with-mongodb-maryam.vercel.app/

Smart Calorie Counter Application
• Technologies: React, Node.js, MongoDB, WebSocket, Responsive Design
• Created mobile-responsive app for tracking desi food calories with diet recipes
• Implemented real-time data synchronization and user-friendly interface
• Live Demo: https://vercel.com/maryams-projects-5804c59d/bhook-khana-tracker

Machine Learning Model Predictor
• Technologies: Python, Flask, Next.js, Sanity CMS, D3.js, Figma
• Developed web application for training and deploying ML models
• Created interactive data visualization and model comparison features
• Live Demo: https://main-hackathon-proj-final-updates-latest-v5-with-clerk.vercel.app/

EDUCATION
================================================================================
Bachelor of Science in Computer Science                               2020 - 2024
University Name, Pakistan
Relevant Coursework: Data Structures, Algorithms, Database Systems, 
Software Engineering, Machine Learning, Web Development

CERTIFICATIONS
================================================================================
• JavaScript Algorithms and Data Structures - FreeCodeCamp
• React Developer Certification - Meta
• Machine Learning with Python - Coursera
• Full Stack Web Development - The Odin Project

ACHIEVEMENTS
================================================================================
• Successfully delivered 15+ web development projects with 100% client satisfaction
• Contributed to open-source projects with 500+ GitHub stars
• Built applications serving 2000+ active users
• Optimized application performance by 40% through code optimization

ADDITIONAL INFORMATION
================================================================================
• Strong problem-solving and analytical thinking skills
• Excellent communication and teamwork abilities
• Passionate about emerging technologies and continuous learning
• Available for remote work and flexible schedules
• Fluent in English and Urdu
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Maryam_Faizan_Resume_ATS.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { generateResume };
};

export const downloadResume = () => {
  const { generateResume } = ResumeGenerator();
  generateResume();
};

export default ResumeGenerator;
