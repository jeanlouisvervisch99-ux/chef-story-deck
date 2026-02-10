import React from 'react';
import { Eye, Banknote, Shield, Zap, Brain, Sparkles } from 'lucide-react';

export const WhyNowSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Zap className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground font-medium">The AI Inflection Point</span>
      </div>
      <h2 className="slide-title fade-up">Why 2026?</h2>
      
      <div className="slide-content">
        <div className="flex gap-12 items-start">
          {/* Left: The AI shift */}
          <div className="flex-1 fade-up-delay-1">
            <div 
              className="p-8 rounded-3xl relative overflow-hidden mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.35)',
              }}
            >
              <div 
                className="absolute inset-0 shimmer opacity-10"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-white/90" />
                  <span className="text-white/80 text-lg font-medium">LLM-Driven Vision</span>
                </div>
                <div className="text-4xl font-black text-white mb-3">
                  99% Accuracy
                </div>
                <p className="text-white/80 text-lg mb-4">
                  Extract data from messy invoices and handwritten specials automatically.
                </p>
                <div 
                  className="px-5 py-2.5 rounded-full inline-flex items-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Eye className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Ending manual data entry for good</span>
                </div>
              </div>
            </div>
            
            <div 
              className="p-5 rounded-2xl flex items-start gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-bold text-foreground">5 years ago:</span> Digitizing a kitchen was a manual mess—hours of data entry, disconnected systems, constant errors.
              </div>
            </div>
          </div>
          
          {/* Right: Embedded Finance */}
          <div className="flex-1 fade-up-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <h3 
                className="text-2xl font-bold"
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
              className="p-6 rounded-2xl mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              }}
            >
              <h4 className="font-bold text-foreground text-lg mb-3">Not just SaaS — Embedded Finance</h4>
              <p className="text-muted-foreground leading-relaxed mb-5">
                By handling procurement payments, Chef becomes a financial clearinghouse. We aren't just charging for software.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-xl" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                }}>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'hsl(350 60% 30%)' }}
                  >
                    <Banknote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Capture the Float</div>
                    <div className="text-sm text-muted-foreground">Hold procurement funds in transit</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                }}>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'hsl(25 80% 55%)' }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Interchange Revenue</div>
                    <div className="text-sm text-muted-foreground">Earn on every payment processed</div>
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
