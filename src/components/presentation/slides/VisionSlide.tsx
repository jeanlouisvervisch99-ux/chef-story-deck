import React from 'react';
import { Database, Users, TrendingUp, Award } from 'lucide-react';

const visionPoints = [
  { icon: Database, text: "Data intermediary between chefs, restaurants & suppliers" },
  { icon: TrendingUp, text: "Insights: popular dishes, average covers, chef trends" },
  { icon: Award, text: "Partnership potential: Michelin, Gault Millau" },
  { icon: Users, text: "Network effects: more data = better predictions" }
];

export const VisionSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Vision</h2>
      <p className="slide-subtitle fade-up-delay-1">
        Big Restaurant Data (BRD)
      </p>
      
      <div className="slide-content">
        <div className="flex gap-12 items-center">
          <div className="flex-1">
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="fade-up flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                  style={{ animationDelay: `${0.3 + index * 0.15}s`, opacity: 0 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 fade-up-delay-3">
            <div className="relative p-8 bg-primary/5 rounded-3xl border-2 border-primary/20">
              <div className="text-center mb-8">
                <span className="text-lg font-medium text-primary">The Ultimate Goal</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-8">
                  <div className="p-4 bg-background rounded-xl shadow-sm text-center">
                    <span className="text-sm text-muted-foreground">Chefs</span>
                  </div>
                  <div className="p-4 bg-background rounded-xl shadow-sm text-center">
                    <span className="text-sm text-muted-foreground">Suppliers</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-primary/30" />
                <div className="p-6 bg-primary rounded-xl text-center">
                  <span className="text-xl font-bold text-primary-foreground">Chef Platform</span>
                </div>
                <div className="h-8 w-px bg-primary/30" />
                <div className="p-4 bg-background rounded-xl shadow-sm text-center">
                  <span className="text-sm text-muted-foreground">Restaurants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
