import React from 'react';
import { AlertTriangle, Puzzle, TrendingDown, Building2 } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Hospitality is a margin game",
    description: "Average restaurant margins are just 3-5%. Every percentage point matters.",
    gradient: 'linear-gradient(135deg, hsl(350 70% 75%), hsl(350 60% 30%))',
  },
  {
    icon: Puzzle,
    title: "8+ disconnected tools",
    description: "POS, inventory, reservations, payments, procurement, HR, accounting, loyalty...",
    gradient: 'linear-gradient(135deg, hsl(25 80% 80%), hsl(25 80% 55%))',
  },
  {
    icon: Building2,
    title: "Decentralized chaos",
    description: "Groups struggle with changing menus and no consolidated view across locations.",
    gradient: 'linear-gradient(135deg, hsl(280 50% 80%), hsl(280 50% 60%))',
  },
  {
    icon: AlertTriangle,
    title: "No unified P&L prediction",
    description: "No way to forecast costs based on reservations and historical data.",
    gradient: 'linear-gradient(135deg, hsl(160 50% 70%), hsl(160 50% 45%))',
  }
];

export const ProblemSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Problem</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-10">
        Restaurants are drowning in complexity
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="fade-up feature-card group"
              style={{ 
                animationDelay: `${0.2 + index * 0.12}s`, 
                opacity: 0,
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: problem.gradient }}
              >
                <problem.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Visual emphasis */}
        <div className="fade-up-delay-3 mt-10 flex justify-center">
          <div 
            className="px-8 py-4 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))',
              border: '1px solid rgba(122, 30, 45, 0.2)',
            }}
          >
            <span className="text-lg font-medium text-primary">
              Result: 60% of restaurants fail within 3 years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
