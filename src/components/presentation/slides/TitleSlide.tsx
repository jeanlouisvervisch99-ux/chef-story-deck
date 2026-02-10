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
      
      {/* Badge */}
      <div 
        className="fade-up px-5 py-2 rounded-full text-sm font-semibold mb-10"
        style={{
          background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.12), hsl(25 80% 55% / 0.12))',
          color: 'hsl(350 60% 30%)',
        }}
      >
        Pre-Seed Deck
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
        className="fade-up-delay-1 text-4xl font-semibold mb-8"
        style={{
          background: 'linear-gradient(90deg, hsl(20 15% 35%), hsl(350 30% 40%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Manual for Your Restaurant
      </p>
      
      {/* Manifesto line */}
      <p 
        className="fade-up-delay-2 text-2xl italic font-medium mb-12"
        style={{ color: 'hsl(20 10% 45%)' }}
      >
        "Because all restaurants deserve to be great."
      </p>
      
      {/* Decorative line */}
      <div 
        className="fade-up-delay-3 mt-4 w-32 h-1 rounded-full"
        style={{
          background: 'linear-gradient(90deg, hsl(350 60% 30%), hsl(25 80% 55%))',
        }}
      />
    </div>
  );
};
