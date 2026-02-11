import React from 'react';
import { Utensils, Plus, UtensilsCrossed, Sparkles, Banknote, ArrowRight } from 'lucide-react';

const modules = [
  "Procurement",
  "AI Menu Scanning",
  "Staff Planning",
  "Recipe Database",
  "Analytics & P&L",
  "Working Capital",
];

export const BusinessModelSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Business Model</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        The "Menu" pricing — SaaS + Embedded Finance
      </p>
      
      <div className="slide-content">
        <div className="flex gap-10 items-start">
          {/* Left: Pricing tiers */}
          <div className="flex-1">
            <div className="flex gap-6 mb-8">
              {/* Appetizer */}
              <div 
                className="flex-1 fade-up p-6 rounded-3xl"
                style={{ 
                  animationDelay: '0.2s', opacity: 0,
                  background: 'linear-gradient(135deg, hsl(35 60% 92%), hsl(35 50% 88%))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.1), hsl(25 80% 55% / 0.1))' }}
                  >
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-foreground">Appetizer</span>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black" style={{ color: 'hsl(350 60% 30%)' }}>€69</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">The Hook — core operations</p>
                <div 
                  className="px-3 py-1.5 rounded-full text-xs font-semibold inline-block"
                  style={{
                    background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                    color: 'white',
                  }}
                >
                  Entry Point
                </div>
              </div>
              
              {/* Main Course */}
              <div 
                className="flex-1 fade-up p-6 rounded-3xl relative overflow-hidden"
                style={{ 
                  animationDelay: '0.35s', opacity: 0,
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
                  boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)',
                }}
              >
                <div 
                  className="absolute top-3 right-4 px-4 py-1.5 rounded-full z-10 flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                    boxShadow: '0 4px 15px rgba(217, 119, 87, 0.4)',
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-bold text-white">TARGET ACV</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <UtensilsCrossed className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-white">Main Course</span>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black text-white">€169</span>
                  <span className="text-white/70">/mo</span>
                </div>
                <p className="text-sm text-white/80 mb-3">Appetizer + 2 modules</p>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Plus className="w-4 h-4" />
                  <span>€50/module add-on</span>
                </div>
              </div>
            </div>
            
            {/* Module list */}
            <div 
              className="fade-up-delay-2 p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Plus className="w-4 h-4 text-primary" />
                Available Modules (+€50/mo each)
              </div>
              <div className="flex flex-wrap gap-2">
                {modules.map((mod) => (
                  <span 
                    key={mod}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                      color: 'hsl(350 60% 30%)',
                    }}
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Embedded Finance */}
          <div className="flex-1 fade-up-delay-2">
            <div className="flex items-center gap-3 mb-5">
              <Banknote className="w-5 h-5 text-primary" />
              <h3 
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Embedded Finance Layer
              </h3>
            </div>
            
            <div className="space-y-4">
              <div 
                className="p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              >
                <div className="font-bold text-foreground mb-2">Procurement Payments</div>
                <p className="text-sm text-muted-foreground mb-3">Every supplier order flows through Chef</p>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Float + Interchange revenue</span>
                </div>
              </div>
              
              <div 
                className="p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              >
                <div className="font-bold text-foreground mb-2">Transaction Fees</div>
                <p className="text-sm text-muted-foreground">Small fee per procurement order processed</p>
              </div>
              
              <div 
                className="p-6 rounded-2xl text-center"
                style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
                  boxShadow: '0 15px 50px rgba(122, 30, 45, 0.25)',
                }}
              >
                <div className="text-white/80 text-sm mb-1">Revenue = SaaS + Finance</div>
                <div className="text-2xl font-black text-white">Beyond pure software margins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
