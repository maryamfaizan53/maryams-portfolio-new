
import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Maryam delivered an exceptional AI-powered solution that exceeded our expectations. Her attention to detail and innovative approach made our project a huge success.',
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      company: 'StartupVision',
      content: 'Working with Maryam was fantastic. She brought our complex web application to life with beautiful design and flawless functionality. Highly recommended!',
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Labs',
      content: 'Maryam has an incredible ability to transform ideas into magical digital experiences. Her technical skills combined with creative vision are truly impressive.',
      rating: 5,
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            What clients say about the magical experiences we've created together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-magical relative overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Floating sparkles */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Sparkles className="w-6 h-6 text-magical-purple animate-pulse" />
              </div>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-magical-cyan fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-300 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-magical-purple/30 to-magical-blue/30 rounded-full flex items-center justify-center">
                    <span className="text-magical-cyan font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Magical glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-magical-purple/5 to-magical-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-700/50">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support' },
            { number: '5★', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
