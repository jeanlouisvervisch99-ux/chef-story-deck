import React from 'react';
import { Target, Users, Rocket, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const milestones = [
  { icon: Rocket, text: "Launch MVP", color: 'hsl(350 60% 30%)' },
  { icon: Users, text: "First 50 restaurants", color: 'hsl(25 80% 55%)' },
  { icon: TrendingUp, text: "Feature expansion", color: 'hsl(280 50% 60%)' },
  { icon: Target, text: "Belgium market leadership", color: 'hsl(160 50% 45%)' }
];

export const AskSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Sparkles className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground font-medium">Investment Opportunity</span>
      </div>
      <h2 className="slide-title fade-up">The Ask</h2>
      
      <div className="slide-content">
        <div className="flex gap-14 items-center">
          {/* Left: Funding card */}
          <div className="flex-1 fade-up-delay-1">
            <div 
              className="p-12 rounded-3xl relative overflow-hidden text-center"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 48% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.35)',
              }}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 shimmer opacity-10"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
              />
              
              {/* Decorative circles */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
              <div 
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
              
              <div className="relative z-10">
                <span 
                  className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                  }}
                >
                  Pre-Seed Round
                </span>
                <div 
                  className="text-7xl font-black text-white mb-4"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                >
                  €[Amount]
                </div>
                <p className="text-white/90 text-xl">
                  To build, launch, and scale Chef
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: Milestones */}
          <div className="flex-1 fade-up-delay-2">
            <h3 
              className="text-2xl font-bold mb-8"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Key Milestones
            </h3>
            <div className="space-y-5">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.text}
                  className="fade-up flex items-center gap-5 group"
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: milestone.color }}
                  >
                    <milestone.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-lg text-foreground">{milestone.text}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="fade-up-delay-3 mt-12 text-center">
          <div 
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <Sparkles className="w-6 h-6 text-accent" />
            <p 
              className="text-2xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 20%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Join us in building the future of restaurant operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
