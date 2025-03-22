
import React from 'react';
import { Cpu, Code, Globe, Users } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Progress } from '@/components/ui/progress';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Technical",
      icon: <Cpu size={20} />,
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Circuit Design", level: 85 },
        { name: "Linux", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Raspberry Pi", level: 85 }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Users size={20} />,
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Team Work", level: 95 },
        { name: "Adaptability", level: 88 }
      ]
    },
    {
      category: "Languages",
      icon: <Globe size={20} />,
      skills: [
        { name: "English", level: 95, proficiency: "Proficient" },
        { name: "Kannada", level: 95, proficiency: "Proficient" },
        { name: "Tulu", level: 95, proficiency: "Proficient" },
        { name: "Hindi", level: 60, proficiency: "Basic" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <AnimatedCard 
              key={catIndex} 
              delay={catIndex * 100}
              className="h-full"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-md bg-primary/5 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      {skill.proficiency ? (
                        <span className="text-sm text-muted-foreground">{skill.proficiency}</span>
                      ) : (
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2" 
                      style={{
                        animationDelay: `${(catIndex * 100) + (skillIndex * 200)}ms`,
                        animation: 'progress-fill 1.5s ease-in-out forwards'
                      }}
                    />
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
