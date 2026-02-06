import React from 'react';
import { ChefHat, Mail, ArrowRight, Sparkles } from 'lucide-react';

export const ClosingSlide: React.FC = () => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 right-24 opacity-15">
        <Sparkles className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-16 left-24 opacity-15">
        <Sparkles className="w-28 h-28 text-accent" />
      </div>
      
      {/* Logo with enhanced styling */}
      <div className="fade-up flex items-center gap-6 mb-8">
        <div 
          className="p-6 rounded-3xl relative"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
            boxShadow: '0 25px 70px rgba(122, 30, 45, 0.4)',
          }}
        >
          <ChefHat className="h-14 w-14 text-white" />
          <div className="absolute inset-0 rounded-3xl animate-pulse-glow opacity-40" />
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
      
      <p 
        className="fade-up-delay-1 text-4xl font-semibold mb-10"
        style={{
          background: 'linear-gradient(90deg, hsl(20 15% 35%), hsl(350 30% 40%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Manual for Your Restaurant
      </p>
      
      {/* Contact card */}
      <div 
        className="fade-up-delay-2 flex items-center gap-4 px-10 py-5 rounded-2xl mb-10"
        style={{
          background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
          boxShadow: '0 20px 60px rgba(122, 30, 45, 0.35)',
        }}
      >
        <Mail className="h-6 w-6 text-white" />
        <span className="text-xl font-semibold text-white">contact@chef.app</span>
      </div>
      
      {/* CTA */}
      <div 
        className="fade-up-delay-3 flex items-center gap-3 px-8 py-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.5)',
        }}
      >
        <span 
          className="text-2xl font-semibold"
          style={{
            background: 'linear-gradient(135deg, hsl(20 15% 20%), hsl(350 60% 30%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's cook together
        </span>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
          }}
        >
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>
      
      {/* Navigation hint */}
      <div className="fade-up-delay-3 mt-16">
        <p 
          className="text-sm px-6 py-3 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.3))',
            color: 'hsl(20 10% 45%)',
          }}
        >
          Use arrow keys to navigate • Press Esc for slide overview
        </p>
      </div>
    </div>
  );
};
