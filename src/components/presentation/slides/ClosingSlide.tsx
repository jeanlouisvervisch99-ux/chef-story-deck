import React from 'react';
import { ChefHat, Mail, ArrowRight, Sparkles, Target, Users, Rocket, TrendingUp, Heart } from 'lucide-react';

const milestones = [
  { icon: Rocket, text: "Launch MVP", color: 'hsl(350 60% 30%)' },
  { icon: Users, text: "First 50 restaurants", color: 'hsl(25 80% 55%)' },
  { icon: TrendingUp, text: "Feature expansion", color: 'hsl(280 50% 60%)' },
  { icon: Target, text: "Belgium market leadership", color: 'hsl(160 50% 45%)' },
];

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
      
      {/* Logo */}
      <div className="fade-up flex items-center gap-5 mb-6">
        <div 
          className="p-5 rounded-3xl relative"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
            boxShadow: '0 25px 70px rgba(122, 30, 45, 0.4)',
          }}
        >
          <ChefHat className="h-12 w-12 text-white" />
          <div className="absolute inset-0 rounded-3xl animate-pulse-glow opacity-40" />
        </div>
        <h1 
          className="text-7xl font-black tracking-tight"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 25%), hsl(350 55% 40%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Chef
        </h1>
      </div>
      
      {/* Entourage CTA */}
      <div 
        className="fade-up-delay-1 flex items-center gap-3 px-8 py-4 rounded-2xl mb-6"
        style={{
          background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
          boxShadow: '0 20px 60px rgba(122, 30, 45, 0.35)',
        }}
      >
        <Heart className="w-6 h-6 text-white/90" />
        <span className="text-2xl font-bold text-white">Let us be part of the Entourage Family</span>
      </div>
      
      {/* Milestones row */}
      <div className="fade-up-delay-2 flex gap-4 mb-8">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.text}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: milestone.color }}
            >
              <milestone.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">{milestone.text}</span>
            {index < milestones.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-1" />
            )}
          </div>
        ))}
      </div>
      
      {/* Contact */}
      <div 
        className="fade-up-delay-3 flex items-center gap-3 px-8 py-4 rounded-full mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.5)',
        }}
      >
        <Mail className="h-5 w-5 text-primary" />
        <span className="text-lg font-semibold text-foreground">contact@chef.app</span>
      </div>
      
      <p 
        className="fade-up-delay-3 text-xl italic font-medium"
        style={{ color: 'hsl(20 10% 45%)' }}
      >
        "Because all restaurants deserve to be great."
      </p>
    </div>
  );
};
