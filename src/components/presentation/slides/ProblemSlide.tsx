import React from 'react';
import { AlertTriangle, Puzzle, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Hospitality is a margin game",
    description: "Average restaurant margins are just 3-5%. Every percentage point matters."
  },
  {
    icon: Puzzle,
    title: "8+ disconnected tools",
    description: "POS, inventory, reservations, payments, procurement, HR, accounting, loyalty..."
  },
  {
    icon: AlertTriangle,
    title: "No unified P&L prediction",
    description: "No way to forecast costs based on reservations and historical data."
  }
];

export const ProblemSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Problem</h2>
      <p className="slide-subtitle fade-up-delay-1">
        Restaurants are drowning in complexity
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-3 gap-8 mt-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`fade-up-delay-${index + 1} p-8 rounded-2xl bg-secondary/50 border border-border`}
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <problem.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
