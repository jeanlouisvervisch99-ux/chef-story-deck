import React from 'react';
import { ChefHat, Mail, Sparkles, TrendingUp } from 'lucide-react';

export const ClosingSlide: React.FC = () => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute top-16 right-24 opacity-15">
        <Sparkles className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-16 left-24 opacity-15">
        <Sparkles className="w-28 h-28 text-accent" />
      </div>
      
      <div className="fade-up flex items-center gap-5 mb-6">
        <div className="p-5 rounded-3xl relative" style={{
          background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
          boxShadow: '0 25px 70px rgba(122, 30, 45, 0.4)',
        }}>
          <ChefHat className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-7xl font-black tracking-tight" style={{
          background: 'linear-gradient(135deg, hsl(350 60% 25%), hsl(350 55% 40%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Chef</h1>
      </div>
      
      <p className="fade-up-delay-1 text-2xl font-bold mb-2" style={{
        background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        The AI copilot for restaurant profitability.
      </p>

      <p className="fade-up-delay-1 text-lg text-muted-foreground mb-8">
        Focused wedge. Clear ROI. Massive market.
      </p>
      
      <div className="fade-up-delay-1 flex items-center gap-3 px-8 py-4 rounded-2xl mb-8" style={{
        background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
        boxShadow: '0 20px 60px rgba(122, 30, 45, 0.35)',
      }}>
        <TrendingUp className="w-6 h-6 text-white/90" />
        <span className="text-2xl font-bold text-white">Let's build more profitable restaurants</span>
      </div>
      
      <div className="fade-up-delay-2 flex items-center gap-2 px-5 py-2.5 rounded-full mb-5" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.5)',
      }}>
        <span className="text-xs text-muted-foreground">Potential early rollout prospects:</span>
        {["UGent Cafeterias", "Wintercircus Cafeteria", "Lunch Garden", "Les brasseries de Breyne"].map(name => (
          <span key={name} className="px-2.5 py-1 rounded-full text-xs font-medium" style={{
            background: 'hsl(35 30% 90%)',
            color: 'hsl(20 10% 45%)',
          }}>{name}</span>
        ))}
      </div>
      
      <div className="fade-up-delay-3 flex items-center gap-6 mb-5">
        {["jeanlouis.vervisch@hotmail.com", "pj.putzeys@gmail.com"].map(email => (
          <div key={email} className="flex items-center gap-2 px-5 py-2.5 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}>
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">{email}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};