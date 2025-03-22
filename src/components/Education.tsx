
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Education: React.FC = () => {
  const education = [
    {
      institution: "Bangalore Institute of Technology",
      location: "Bangalore, India",
      degree: "B.E. in Electronics and Instrumentation Engineering",
      period: "2021 - 2025",
      gpa: "CGPA: 8.67",
      details: "Focused on core electronics, embedded systems, and signal processing."
    },
    {
      institution: "Sri Chaitanya PU College",
      location: "Bangalore, India",
      degree: "Department of Karnataka Department of Pre-University Education",
      period: "2019 - 2021",
      gpa: "Percentage: 91%",
      details: "Specialized in PCM (Physics, Chemistry, Mathematics) with strong academic performance."
    },
    {
      institution: "Sri Siddhinayk Residential School",
      location: "Udupi, India",
      degree: "Secondary Education",
      period: "2016- 2019",
      gpa: "Percentage: 79%",
      details: "Built strong fundamentals in science and mathematics while developing analytical skills."
    }
  ];

  return (
    <section id="education" className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                
                {/* Left column (visible on md+ screens) */}
                <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <AnimatedCard 
                    direction={index % 2 === 0 ? 'left' : 'right'} 
                    delay={index * 150}
                    className="h-full"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.institution}</h3>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                    <div className="mt-3 space-y-2">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-sm">{item.gpa}</p>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  </AnimatedCard>
                </div>
                
                {/* Center column for mobile */}
                <div className="md:hidden">
                  <AnimatedCard delay={index * 150}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.institution}</h3>
                      <span className="inline-flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                    <div className="mt-3 space-y-2">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-sm">{item.gpa}</p>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  </AnimatedCard>
                </div>
                
                {/* Right column (empty placeholder to maintain grid on md+ screens) */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
