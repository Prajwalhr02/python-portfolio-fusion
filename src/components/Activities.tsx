
import React from 'react';
import { Activity, Briefcase, Trophy, Zap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Placement Coordinator",
      organization: "BIT",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Facilitated campus recruitment processes and coordinated between students and companies."
    },
    {
      title: "Samsung Innovation Campus Hackathon",
      organization: "Qualifier",
      icon: <Trophy className="w-5 h-5" />,
      description: "Qualified for innovation challenges organized by Samsung, demonstrating technical prowess and creativity."
    },
    {
      title: "Editor at EIE Newsletter and Papers",
      organization: "",
      icon: <Activity className="w-5 h-5" />,
      description: "Contributed and edited technical content for the department's newsletter and academic papers."
    },
    {
      title: "Flutter Training",
      organization: "Bangalore Cup Dance",
      icon: <Zap className="w-5 h-5" />,
      description: "Participated in Flutter app development training, enhancing mobile development skills."
    }
  ];

  return (
    <section id="activities" className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Co-Curricular Activities</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <AnimatedCard
              key={index}
              delay={index * 100}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{activity.title}</h3>
                  {activity.organization && (
                    <p className="text-sm text-muted-foreground mt-1">{activity.organization}</p>
                  )}
                  <p className="mt-2">{activity.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
