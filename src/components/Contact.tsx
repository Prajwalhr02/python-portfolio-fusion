
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedCard from './AnimatedCard';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <AnimatedCard direction="left" className="h-full">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:prajwalhr9910@gmail.com" className="font-medium hover:text-primary transition-colors">
                      prajwalhr9910@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+918197974380" className="font-medium hover:text-primary transition-colors">
                      +91 8197974380
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-sm font-semibold mb-3">Connect with me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="lg:col-span-3">
            <AnimatedCard direction="right">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-secondary/50 border-transparent focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-secondary/50 border-transparent focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Enter message subject" 
                    className="bg-secondary/50 border-transparent focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    rows={5}
                    className="bg-secondary/50 border-transparent focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
