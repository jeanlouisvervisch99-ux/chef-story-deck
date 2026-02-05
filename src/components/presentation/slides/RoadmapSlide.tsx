import React from 'react';
import { Calendar, Gamepad2, Truck, MessageSquare } from 'lucide-react';

const roadmapItems = [
  {
    icon: Calendar,
    title: "Flex Worker Timetables",
    description: "Integration for gig-driven hospitality model",
    phase: "2024 Q4"
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description: "Monthly competitions for free subscriptions",
    phase: "2025 Q1"
  },
  {
    icon: Truck,
    title: "Supplier Influence",
    description: "Demand predictions to guide growers & suppliers",
    phase: "2025 Q2"
  },
  {
    icon: MessageSquare,
    title: "Review Analysis",
    description: "Feedelity-style sentiment analysis integration",
    phase: "2025 Q3"
  }
];

export const RoadmapSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Roadmap & Future</h2>
      
      <div className="slide-content">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className={`fade-up flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-6 rounded-2xl bg-secondary/50 border border-border ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-primary-foreground">{item.phase}</span>
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
