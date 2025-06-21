
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyImage from './LazyImage';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building AI-Powered Web Applications with React and OpenAI',
      excerpt: 'Learn how to integrate AI capabilities into your React applications using the OpenAI API for creating intelligent user experiences.',
      date: '2024-03-15',
      readTime: '8 min read',
      image: '/bg2.jpg',
      category: 'AI Development',
      slug: 'ai-powered-web-apps-react-openai'
    },
    {
      id: 2,
      title: 'Modern Full-Stack Development: From Design to Deployment',
      excerpt: 'A comprehensive guide to building and deploying modern web applications using the latest technologies and best practices.',
      date: '2024-03-10',
      readTime: '12 min read',
      image: '/admin.png',
      category: 'Full Stack',
      slug: 'modern-fullstack-development-guide'
    },
    {
      id: 3,
      title: 'Machine Learning Integration in Web Development',
      excerpt: 'Exploring practical ways to incorporate machine learning models into web applications for enhanced functionality.',
      date: '2024-03-05',
      readTime: '10 min read',
      image: '/image20.jpg',
      category: 'Machine Learning',
      slug: 'ml-integration-web-development'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-slate-900/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on AI development, full-stack engineering, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="card-magical group hover-lift overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-magical-purple/20 to-magical-blue/20 rounded-lg mb-4 overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="px-3 py-1 bg-magical-purple/20 rounded-full text-magical-purple">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-magical-cyan transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="w-full justify-between text-magical-cyan hover:bg-magical-cyan/10 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-magical">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
