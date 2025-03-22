
import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Users, Clock, Cpu, Github, Car, Shield } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  keyFeatures: string[];
  icon: React.ReactNode;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Attendance System",
      shortDescription: "Automated attendance tracking system",
      fullDescription: "Created an automated attendance tracking solution that streamlined data capturing processes, eliminating manual entries and generating reports previously plagued by manual attendance data reconciliation.",
      techStack: ["RFID", "Python", "SMART CARD", "Database Management"],
      keyFeatures: [
        "Automated RDID based",
        "Real-time attendance tracking",
        "Reporting and analytics",
        "Seamless integration with existing systems"
      ],
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Smart Self-billing Trolley",
      shortDescription: "Autonomous billing and inventory system",
      fullDescription: "Developed a self-powered trolley for automated billing and real-time inventory management. Boosted customer satisfaction and operational efficiency. Transformed retail checkout experience with reduced wait times and enhanced accuracy.",
      techStack: ["RFID", "Embedded Systems", "Database Management", "UI Design"],
      keyFeatures: [
        "Automated product detection and billing",
        "Real-time inventory tracking",
        "Seamless payment integration",
        "Enhanced shopping experience"
      ],
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      id: 3,
      title: "Lane-following Robot using OpenCV",
      shortDescription: "Autonomous navigation system",
      fullDescription: "Inspired by CommaAI.org, developed autonomous navigation and real-time image processing solutions using IR sensors, OpenCV, and Raspberry Pi. Applied robotics and computer vision expertise to enhance automation and efficiency.",
      techStack: ["OpenCV", "Python", "Raspberry Pi", "IR Sensors", "Robotics"],
      keyFeatures: [
        "Real-time lane detection and tracking",
        "Obstacle avoidance capabilities",
        "Autonomous navigation",
        "Computer vision processing"
      ],
      icon: <Cpu className="w-6 h-6 text-purple-500" />
    },
    {
      id: 4,
      title: "Car Racing Game",
      shortDescription: "Interactive browser-based racing game",
      fullDescription: "Developed an engaging car racing game with intuitive controls and challenging gameplay. Features include obstacle avoidance, speed boosts, and multiple difficulty levels to provide an immersive gaming experience.",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Physics", "Audio API"],
      keyFeatures: [
        "Responsive controls for seamless gameplay",
        "Progressive difficulty levels",
        "Real-time collision detection",
        "Score tracking and leaderboard"
      ],
      icon: <Car className="w-6 h-6 text-red-500" />,
      githubUrl: "https://github.com/yourusername/car-racing-game"
    },
    {
      id: 5,
      title: "Phishing Website Detection",
      shortDescription: "ML-based security tool",
      fullDescription: "Created a machine learning-powered solution that analyzes websites to detect potential phishing attempts. The system evaluates multiple parameters including URL structure, domain age, and content similarities to determine the likelihood of a website being fraudulent.",
      techStack: ["Python", "Machine Learning", "Natural Language Processing", "Web Scraping", "Data Analysis"],
      keyFeatures: [
        "Real-time website analysis",
        "Multi-factor detection algorithm",
        "Browser extension integration",
        "Regular model updates for emerging threats"
      ],
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      githubUrl: "https://github.com/yourusername/phishing-detection"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-16 reveal">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-24">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center",
                    activeProject === project.id 
                      ? "bg-white shadow-md border border-primary/10" 
                      : "bg-transparent hover:bg-white/50"
                  )}
                >
                  <div 
                    className={cn(
                      "mr-4 p-2 rounded-full", 
                      activeProject === project.id ? "bg-primary/10" : "bg-secondary"
                    )}
                  >
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "font-medium transition-colors",
                      activeProject === project.id ? "text-primary" : "text-foreground"
                    )}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
                  </div>
                  {activeProject === project.id && (
                    <ChevronRight className="h-5 w-5 text-primary ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {activeProject && (
              <AnimatedCard className="h-full">
                {projects
                  .filter(project => project.id === activeProject)
                  .map(project => (
                    <div key={project.id} className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.githubUrl, '_blank')}>
                            <Github size={16} />
                            View on GitHub
                          </Button>
                        )}
                      </div>
                      
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {project.fullDescription}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-primary/5 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </AnimatedCard>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
