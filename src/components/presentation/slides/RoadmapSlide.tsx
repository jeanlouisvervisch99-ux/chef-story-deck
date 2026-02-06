import React from 'react';
import { Calendar, Gamepad2, Truck, MessageSquare, Sparkles } from 'lucide-react';

const roadmapItems = [
  {
    icon: Calendar,
    title: "Flex Worker Timetables",
    description: "Integration for gig-driven hospitality model",
    phase: "Q4 2024",
    color: 'hsl(350 60% 30%)',
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description: "Monthly competitions for free subscriptions",
    phase: "Q1 2025",
    color: 'hsl(25 80% 55%)',
  },
  {
    icon: Truck,
    title: "Supplier Influence",
    description: "Demand predictions to guide growers & suppliers",
    phase: "Q2 2025",
    color: 'hsl(280 50% 60%)',
  },
  {
    icon: MessageSquare,
    title: "Review Analysis",
    description: "Feedelity-style sentiment analysis integration",
    phase: "Q3 2025",
    color: 'hsl(160 50% 45%)',
  }
];

export const RoadmapSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Sparkles className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground font-medium">What's Coming</span>
      </div>
      <h2 className="slide-title fade-up">Roadmap & Future</h2>
      
      <div className="slide-content">
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full"
            style={{
              background: 'linear-gradient(180deg, hsl(350 60% 30%), hsl(25 80% 55%), hsl(280 50% 60%), hsl(160 50% 45%))',
            }}
          />
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className={`fade-up flex items-center gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div 
                    className={`inline-block p-6 rounded-2xl ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: item.color }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div 
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(35 40% 98%), hsl(35 50% 95%))',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: `3px solid ${item.color}`,
                  }}
                >
                  <span 
                    className="text-sm font-bold"
                    style={{ color: item.color }}
                  >
                    {item.phase}
                  </span>
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
