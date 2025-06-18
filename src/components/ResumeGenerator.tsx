
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';

const ResumeGenerator = () => {
  const generateResume = () => {
    const doc = new jsPDF();
    
    // Set initial position
    let yPosition = 20;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const lineHeight = 6;
    
    // Helper function to add text with word wrapping
    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * lineHeight);
    };
    
    // Header - Name
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('MARYAM FAIZAN', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;
    
    // Header - Title
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('AI & Full-Stack Web Developer', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;
    
    // Contact Information
    doc.setFontSize(10);
    const contactInfo = [
      'Email: maryam.faizan@example.com | Phone: +92-XXX-XXXXXXX',
      'LinkedIn: linkedin.com/in/maryamfaizan | GitHub: github.com/maryamfaizan53',
      'Portfolio: https://portfolio-nextjs-tailwind-flax.vercel.app/'
    ];
    
    contactInfo.forEach(info => {
      doc.text(info, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += lineHeight;
    });
    
    yPosition += 5;
    
    // Add line separator
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
    
    // Professional Summary Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summary = 'Innovative AI and Full-Stack Web Developer with expertise in modern web technologies, machine learning, and artificial intelligence. Proven track record of developing scalable web applications, AI-powered solutions, and responsive user interfaces. Experienced in both frontend and backend development with strong problem-solving skills and attention to detail.';
    yPosition = addWrappedText(summary, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 8;
    
    // Technical Skills Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', margin, yPosition);
    yPosition += 8;
    
    const skills = [
      'Programming Languages: JavaScript, TypeScript, Python, HTML5, CSS3',
      'Frontend Technologies: React.js, Next.js, Vue.js, TailwindCSS, Bootstrap, Responsive Design',
      'Backend Technologies: Node.js, Express.js, FastAPI, RESTful APIs, GraphQL',
      'AI/ML Technologies: OpenAI API, TensorFlow, Pandas, Scikit-learn, Natural Language Processing',
      'Databases: MongoDB, PostgreSQL, MySQL, Prisma ORM',
      'Cloud & DevOps: AWS, Vercel, Netlify, Docker, Git, GitHub Actions',
      'Tools & Others: Figma, Sanity CMS, Stripe Integration, Socket.io, Arduino'
    ];
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    skills.forEach(skill => {
      yPosition = addWrappedText(skill, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
    });
    yPosition += 8;
    
    // Professional Experience Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
    yPosition += 8;
    
    // Job 1
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Freelance AI & Full-Stack Developer', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text('2022 - Present', pageWidth - margin - 40, yPosition);
    yPosition += 6;
    
    const job1Duties = [
      '• Developed 15+ responsive web applications using React.js, Next.js, and TypeScript',
      '• Built AI-powered chatbot platform with OpenAI API integration serving 1000+ users',
      '• Created real-time e-commerce dashboard with MongoDB and Stripe payment integration',
      '• Implemented machine learning models for predictive analytics and data visualization',
      '• Collaborated with cross-functional teams to deliver projects 20% ahead of schedule'
    ];
    
    doc.setFontSize(10);
    job1Duties.forEach(duty => {
      yPosition = addWrappedText(duty, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
    });
    yPosition += 6;
    
    // Job 2
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Junior Web Developer', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text('2021 - 2022', pageWidth - margin - 40, yPosition);
    yPosition += 6;
    
    const job2Duties = [
      '• Maintained and enhanced existing web applications using modern JavaScript frameworks',
      '• Optimized application performance resulting in 40% faster load times',
      '• Integrated third-party APIs and services for enhanced functionality',
      '• Participated in code reviews and contributed to best practices documentation'
    ];
    
    doc.setFontSize(10);
    job2Duties.forEach(duty => {
      yPosition = addWrappedText(duty, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
    });
    yPosition += 8;
    
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Featured Projects Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('FEATURED PROJECTS', margin, yPosition);
    yPosition += 8;
    
    const projects = [
      {
        title: 'AI-Powered Chatbot Platform',
        tech: 'Technologies: Python, FastAPI, OpenAI API, React, PostgreSQL, Chainlit',
        description: 'Developed intelligent conversational AI system with context-aware responses and natural language processing for enhanced user interaction.',
        demo: 'GitHub: github.com/maryamfaizan53/chatbot-chainlit'
      },
      {
        title: 'E-commerce Admin Dashboard',
        tech: 'Technologies: Next.js, TypeScript, Stripe, Prisma, TailwindCSS, MongoDB',
        description: 'Built comprehensive admin panel with real-time analytics, inventory management, and secure payment processing system.',
        demo: 'Live: real-time-dashboard-with-mongodb-maryam.vercel.app'
      },
      {
        title: 'Smart Calorie Counter Application',
        tech: 'Technologies: React, Node.js, MongoDB, WebSocket, Responsive Design',
        description: 'Created mobile-responsive app for tracking desi food calories with diet recipes and real-time data synchronization.',
        demo: 'Live: vercel.com/maryams-projects-5804c59d/bhook-khana-tracker'
      }
    ];
    
    projects.forEach(project => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title, margin, yPosition);
      yPosition += 5;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      yPosition = addWrappedText(project.tech, margin, yPosition, pageWidth - 2 * margin, 9);
      yPosition += 2;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      yPosition = addWrappedText(project.description, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      yPosition = addWrappedText(project.demo, margin, yPosition, pageWidth - 2 * margin, 9);
      yPosition += 8;
    });
    
    // Education Section
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(12);
    doc.text('Bachelor of Science in Computer Science', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text('2020 - 2024', pageWidth - margin - 40, yPosition);
    yPosition += 5;
    
    doc.setFontSize(10);
    doc.text('University Name, Pakistan', margin, yPosition);
    yPosition += 5;
    
    const coursework = 'Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning, Web Development';
    yPosition = addWrappedText(coursework, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 8;
    
    // Certifications Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATIONS', margin, yPosition);
    yPosition += 8;
    
    const certifications = [
      '• JavaScript Algorithms and Data Structures - FreeCodeCamp',
      '• React Developer Certification - Meta',
      '• Machine Learning with Python - Coursera',
      '• Full Stack Web Development - The Odin Project'
    ];
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    certifications.forEach(cert => {
      yPosition = addWrappedText(cert, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
    });
    yPosition += 8;
    
    // Achievements Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('ACHIEVEMENTS', margin, yPosition);
    yPosition += 8;
    
    const achievements = [
      '• Successfully delivered 15+ web development projects with 100% client satisfaction',
      '• Contributed to open-source projects with 500+ GitHub stars',
      '• Built applications serving 2000+ active users',
      '• Optimized application performance by 40% through code optimization'
    ];
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    achievements.forEach(achievement => {
      yPosition = addWrappedText(achievement, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 2;
    });
    
    // Save the PDF
    doc.save('Maryam_Faizan_Resume_Professional.pdf');
  };

  return { generateResume };
};

export const downloadResume = () => {
  const { generateResume } = ResumeGenerator();
  generateResume();
};

export default ResumeGenerator;
