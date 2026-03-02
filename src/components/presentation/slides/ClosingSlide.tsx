import React from 'react';
import { ChefHat, Mail, Sparkles, Heart, Building2, GraduationCap, Store } from 'lucide-react';

const earlyCustomers = [
  { icon: GraduationCap, name: "UGent Cafeteria", type: "University dining" },
  { icon: Building2, name: "Wintercircus Cafeteria", type: "Cultural venue" },
  { icon: Store, name: "Lunch Garden", type: "Chain restaurants" },
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
      <div className="fade-up flex items-center gap-5 mb-5">
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
      
      {/* Positioning line */}
      <p 
        className="fade-up-delay-1 text-2xl font-bold mb-6 max-w-2xl leading-relaxed"
        style={{
          background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Chef runs your restaurant for you.<br />
        Now everyone has the capacity to become great.
      </p>
      
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
      
      {/* Early customers */}
      <div className="fade-up-delay-2 flex gap-4 mb-6">
        <span className="text-sm font-semibold text-muted-foreground self-center mr-2">Building alongside:</span>
        {earlyCustomers.map((customer) => (
          <div 
            key={customer.name}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'hsl(350 60% 30%)' }}
            >
              <customer.icon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-foreground">{customer.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact */}
      <div 
        className="fade-up-delay-3 flex items-center gap-3 px-8 py-4 rounded-full mb-4"
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
        className="fade-up-delay-3 text-lg italic font-medium"
        style={{ color: 'hsl(20 10% 45%)' }}
      >
        "Because every restaurant deserves a chance to be Michelin."
      </p>
    </div>
  );
};
