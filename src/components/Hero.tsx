
import React from 'react';
import { Briefcase, Calendar, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 reveal">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/5 rounded-full text-primary text-sm font-medium tracking-wider">
              B.E. (Electronics and Instrumentation)
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Prajwal H R
            </h1>
            <p className="text-xl text-muted-foreground">
              Electronics Engineer & Programming Enthusiast
            </p>
          </div>
          
          <p className="text-lg text-balance leading-relaxed">
            A dedicated electronics and instrumentation engineer with expertise in circuit design, 
            autonomous systems, and software development. Passionate about creating innovative 
            solutions that blend hardware and software technologies.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} className="flex-shrink-0" />
              <span className="truncate">prajwalhr9910@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={16} className="flex-shrink-0" />
              <span>+91 8197974380</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0" />
              <span>Bangalore, India</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={16} className="flex-shrink-0" />
              <span>Available for opportunities</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Download Resume
            </Button>
            <Button variant="outline" className="rounded-full">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center reveal">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/30 rounded-full blur-3xl opacity-20"></div>
          <div className="w-full h-auto aspect-square max-w-md relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30"></div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
              <img 
                src="/lovable-uploads/d404b380-3967-4dc9-b4cc-d6141c3fa518.png" 
                alt="Prajwal H R Resume" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
