
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Linux Operating System",
      issuer: "Cybrary",
      icon: "🐧",
      color: "bg-amber-50 text-amber-600",
      link: "https://drive.google.com/file/d/176_n0MrezHg4Ne9iMgcXzavN6vTuMsSk/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence and Internet of Things",
      issuer: "Samsung Semiconductors",
      icon: "🤖",
      color: "bg-blue-50 text-blue-600",
      link: "https://drive.google.com/file/d/1fRPznbzK6VKnbe-zNhsq5twYme6p4eOh/view?usp=sharing"
    },
    {
      title: "Critical Thinking",
      issuer: "Bangalore Institute of Technology",
      icon: "🧠",
      color: "bg-purple-50 text-purple-600",
      link: "https://drive.google.com/file/d/1e47QPlUDMFitowP85RX6yvdgtXapq8WW/view?usp=sharing"
    },
    {
      title: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      icon: "🔐",
      color: "bg-green-50 text-green-600",
      link: "https://drive.google.com/file/d/1fWF0UDfOlSVYjez2mHo_SjPmHS1Sl8oe/view?usp=sharing"
    },
    {
      title: "IAM job simulation",
      issuer: "TATA Group",
      icon: "💡",
      color: "bg-green-50 text-green-600",
      link: "https://drive.google.com/file/d/16PJcNvmIFG3LEEvZYBrHXJHhJIfUpuye/view?usp=sharing"
    },
    {
      title: "Java Full Stack",
      issuer: "Cryptovibe",
      icon: "♨",
      color: "bg-green-50 text-green-600",
      link: "https://drive.google.com/file/d/1lzeNzU1AZW5bLxZB5Dhr8vItKKBLY4wa/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedCard
              key={index}
              delay={index * 100}
              className="text-center h-full"
            >
              <div className="flex flex-col items-center justify-between h-full">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-full ${cert.color} flex items-center justify-center text-3xl mx-auto`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  {cert.issuer && (
                    <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                  )}
                </div>
                
                <a href={cert.link} className="mt-4 text-sm inline-flex items-center text-primary hover:underline gap-1 group">
                  View Certificate
                  <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
