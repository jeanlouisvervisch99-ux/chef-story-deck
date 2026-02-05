import React from 'react';
import { User, Code, Search } from 'lucide-react';

const team = [
  {
    initials: "JL",
    role: "CEO / COO",
    icon: User,
    description: "Business strategy & operations"
  },
  {
    initials: "PJ",
    role: "CTO",
    icon: Code,
    description: "Technical architecture & product"
  }
];

export const TeamSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Team</h2>
      
      <div className="slide-content">
        <div className="flex justify-center gap-16 mb-12">
          {team.map((member, index) => (
            <div
              key={member.initials}
              className="fade-up text-center"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
            >
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl font-bold text-primary-foreground">{member.initials}</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-1">{member.role}</h3>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 max-w-xl mx-auto">
          <div className="p-6 rounded-2xl bg-secondary/50 border border-dashed border-primary/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Search className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">Looking for: CPO</span>
            </div>
            <p className="text-muted-foreground">
              Hospitality Master + Business background
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Deep industry experience to guide product vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
