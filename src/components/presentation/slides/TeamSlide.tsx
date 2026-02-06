import React from 'react';
import { User, Code, Search, Sparkles } from 'lucide-react';

const team = [
  {
    initials: "JL",
    role: "CEO / COO",
    icon: User,
    description: "Business strategy & operations",
    gradient: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 40%))',
  },
  {
    initials: "PJ",
    role: "CTO",
    icon: Code,
    description: "Technical architecture & product",
    gradient: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
  }
];

export const TeamSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Team</h2>
      
      <div className="slide-content">
        <div className="flex justify-center gap-20 mb-14">
          {team.map((member, index) => (
            <div
              key={member.initials}
              className="fade-up text-center"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
            >
              <div 
                className="w-36 h-36 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                style={{
                  background: member.gradient,
                  boxShadow: '0 20px 50px rgba(122, 30, 45, 0.3)',
                }}
              >
                <span className="text-5xl font-black text-white">{member.initials}</span>
                {/* Glow ring */}
                <div 
                  className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{ opacity: 0.3 }}
                />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {member.role}
              </h3>
              <p className="text-muted-foreground text-lg">{member.description}</p>
            </div>
          ))}
        </div>
        
        {/* Open position */}
        <div className="fade-up-delay-3 max-w-xl mx-auto">
          <div 
            className="p-8 rounded-3xl text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(20px)',
              border: '2px dashed hsl(350 60% 30% / 0.3)',
            }}
          >
            {/* Corner accent */}
            <div 
              className="absolute top-4 right-4 opacity-30"
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, hsl(280 50% 60%), hsl(280 40% 50%))',
                }}
              >
                <Search className="h-6 w-6 text-white" />
              </div>
              <span 
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(280 50% 60%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Looking for: CPO
              </span>
            </div>
            <p className="text-lg text-foreground font-medium mb-2">
              Hospitality Master + Business background
            </p>
            <p className="text-muted-foreground">
              Deep industry experience to guide product vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
