
import React from 'react';
import { Sparkles, Zap, Mail, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-slate-900/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-magical-purple" />
                <span>Get In Touch</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need AI development, full-stack web applications, or just want to discuss 
                an innovative idea, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="card-magical">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-magical-purple/20 rounded-lg">
                    <Mail className="w-6 h-6 text-magical-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-400">maryam.faizan@example.com</p>
                  </div>
                </div>
              </Card>

              <Card className="card-magical">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-magical-blue/20 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-magical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Response Time</h4>
                    <p className="text-slate-400">Within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="card-magical">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-magical-cyan/20 rounded-lg">
                    <Zap className="w-6 h-6 text-magical-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Availability</h4>
                    <p className="text-slate-400">Open for new projects</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
