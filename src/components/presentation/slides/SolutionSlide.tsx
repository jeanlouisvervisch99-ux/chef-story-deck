import React from 'react';
import { CheckCircle2, Sparkles, Zap, Brain, Eye, Banknote, Shield } from 'lucide-react';

const features = [
  "All-in-one operations platform",
  "AI-powered menu analysis",
  "Real-time P&L forecasting",
  "Integrated procurement",
];

export const SolutionSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Solution — And Why Now</h2>
      
      <div className="slide-content">
        <div className="flex gap-10 items-start">
          {/* Left: Solution */}
          <div className="flex-1 fade-up-delay-1">
            <div 
              className="text-3xl font-bold leading-tight mb-5"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              One platform to run your entire restaurant group
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chef consolidates every tool into a single, intelligent system—especially valuable for groups with changing menus and decentralized operations.
            </p>
            
            <div className="space-y-2.5 mb-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${0.4 + index * 0.08}s`, opacity: 0 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-base font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* AI inflection callout */}
            <div 
              className="fade-up-delay-2 p-5 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)',
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-6 h-6 text-white/90" />
                  <span className="text-white/80 font-medium">LLM-Driven Vision</span>
                </div>
                <div className="text-3xl font-black text-white mb-2">99% Accuracy</div>
                <p className="text-white/80 text-sm mb-3">
                  Extract data from messy invoices and handwritten specials automatically.
                </p>
                <div 
                  className="px-4 py-2 rounded-full inline-flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
                >
                  <Eye className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Ending manual data entry for good</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Why Now + Embedded Finance */}
          <div className="flex-1 fade-up-delay-2">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground font-semibold">Why 2026?</span>
            </div>
            
            <div 
              className="p-5 rounded-2xl mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-bold text-foreground">5 years ago:</span> Digitizing a kitchen was a manual mess—hours of data entry, disconnected systems, constant errors. Today, AI makes it possible to automate everything.
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <h3 
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Flipped Playbook
              </h3>
            </div>
            
            <div 
              className="p-5 rounded-2xl mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              }}
            >
              <h4 className="font-bold text-foreground mb-2">Not just SaaS — Embedded Finance</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                By handling procurement payments, Chef becomes a financial clearinghouse.
              </p>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                }}>
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'hsl(350 60% 30%)' }}
                  >
                    <Banknote className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Capture the Float</div>
                    <div className="text-xs text-muted-foreground">Hold procurement funds in transit</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                }}>
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'hsl(25 80% 55%)' }}
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Interchange Revenue</div>
                    <div className="text-xs text-muted-foreground">Earn on every payment processed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
