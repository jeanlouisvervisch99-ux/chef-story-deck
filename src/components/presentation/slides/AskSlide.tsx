import React from 'react';
import { Target, Users, Rocket, TrendingUp } from 'lucide-react';

const milestones = [
  { icon: Rocket, text: "Launch MVP" },
  { icon: Users, text: "First 50 restaurants" },
  { icon: TrendingUp, text: "Feature expansion" },
  { icon: Target, text: "Belgium market leadership" }
];

export const AskSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Ask</h2>
      
      <div className="slide-content">
        <div className="flex gap-12 items-center">
          <div className="flex-1 fade-up-delay-1">
            <div className="p-10 rounded-3xl bg-primary text-center">
              <span className="text-lg font-medium text-primary-foreground/80">Pre-Seed Round</span>
              <div className="text-6xl font-bold text-primary-foreground my-4">€[Amount]</div>
              <p className="text-primary-foreground/90">
                To build, launch, and scale Chef
              </p>
            </div>
          </div>
          
          <div className="flex-1 fade-up-delay-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.text}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <milestone.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{milestone.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="fade-up-delay-3 mt-10 text-center">
          <p className="text-xl text-muted-foreground">
            Join us in building the future of restaurant operations
          </p>
        </div>
      </div>
    </div>
  );
};
