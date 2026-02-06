import React from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <Sparkles className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Sparkles className="w-24 h-24 text-accent" />
      </div>
      
      {/* Logo with glow effect */}
      <div className="fade-up flex items-center gap-6 mb-8">
        <div 
          className="p-6 rounded-3xl relative"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 55% 40%))',
            boxShadow: '0 20px 60px rgba(122, 30, 45, 0.4)',
          }}
        >
          <ChefHat className="h-16 w-16 text-primary-foreground" />
          <div 
            className="absolute inset-0 rounded-3xl animate-pulse-glow"
            style={{ opacity: 0.5 }}
          />
        </div>
        <h1 
          className="text-8xl font-black tracking-tight"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 25%), hsl(350 55% 40%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Chef
        </h1>
      </div>
      
      {/* Tagline with gradient */}
      <p 
        className="fade-up-delay-1 text-4xl font-semibold mb-12"
        style={{
          background: 'linear-gradient(90deg, hsl(20 15% 35%), hsl(350 30% 40%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Manual for Your Restaurant
      </p>
      
      {/* Founders with glass card */}
      <div 
        className="fade-up-delay-2 px-10 py-6 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <span className="text-xl font-medium text-foreground">
          Pre-Seed Pitch
        </span>
        <div className="flex gap-8 mt-3 text-muted-foreground">
          <span className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))' }}
            />
            JL — CEO/COO
          </span>
          <span className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))' }}
            />
            PJ — CTO
          </span>
        </div>
      </div>
      
      {/* Decorative line */}
      <div 
        className="fade-up-delay-3 mt-16 w-32 h-1 rounded-full"
        style={{
          background: 'linear-gradient(90deg, hsl(350 60% 30%), hsl(25 80% 55%))',
        }}
      />
    </div>
  );
};
