
import React from 'react';
import { Lightbulb, Zap, Cpu, Code } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const About: React.FC = () => {
  const qualities = [
    {
      icon: <Lightbulb size={24} className="text-amber-500" />,
      title: "Problem Solver",
      description: "Analytical thinker with a knack for finding innovative solutions to complex challenges."
    },
    {
      icon: <Zap size={24} className="text-blue-500" />,
      title: "Tech Enthusiast",
      description: "Passionate about new technologies and continuously expanding skillset across domains."
    },
    {
      icon: <Cpu size={24} className="text-emerald-500" />,
      title: "Hardware Expert",
      description: "Proficient in electronics, circuit design, and embedded systems development."
    },
    {
      icon: <Code size={24} className="text-purple-500" />,
      title: "Software Developer",
      description: "Capable programmer with experience in C/C++, Linux, and real-time systems."
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 reveal">
          <p className="text-lg leading-relaxed text-balance">
            I'm an Electronics and Instrumentation engineer with a strong foundation in both hardware and software. 
            My educational journey at Bangalore Institute of Technology equipped me with the technical knowledge and 
            practical skills needed to excel in this rapidly evolving field.
          </p>
          
          <p className="text-lg leading-relaxed text-balance">
            I'm passionate about creating innovative solutions that combine hardware expertise with software capabilities. 
            My projects span from smart attendance systems to autonomous robots, showcasing my ability to integrate 
            various technologies to solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {qualities.map((quality, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100} 
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/5 flex-shrink-0">
                {quality.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{quality.title}</h3>
                <p className="text-muted-foreground">{quality.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
