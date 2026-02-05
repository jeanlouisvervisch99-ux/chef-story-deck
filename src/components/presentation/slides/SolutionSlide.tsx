import React from 'react';
import { Sparkles, Target, Layers } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "One Platform",
    description: "Covers ALL facets of restaurant operations"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Menu reading, ingredient estimation, cost prediction"
  },
  {
    icon: Target,
    title: "Predictive P&L",
    description: "Know your costs before they happen"
  }
];

export const SolutionSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Solution</h2>
      <p className="slide-subtitle fade-up-delay-1">
        Chef: Your restaurant's operating system
      </p>
      
      <div className="slide-content">
        <div className="flex items-center justify-center gap-12 mt-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-up stagger-${index + 1} flex flex-col items-center text-center max-w-xs`}
              style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
            >
              <div className="p-6 bg-primary rounded-2xl mb-6 shadow-lg">
                <feature.icon className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 mt-12 text-center">
          <div className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl">
            <span className="text-xl font-semibold">
              From chaos to clarity — in one platform
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
