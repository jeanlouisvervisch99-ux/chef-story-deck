import React from 'react';
import { TrendingUp, Receipt, UtensilsCrossed, Euro, ArrowUp, Sparkles, Clock, ArrowRight } from 'lucide-react';

const valueDrivers = [
  {
    icon: Receipt,
    title: "Identify Loss-Making Dishes",
    description: "Spot underperforming dishes. Remove or reprice within days.",
    impact: "1–2%",
    color: 'hsl(350 60% 30%)',
  },
  {
    icon: UtensilsCrossed,
    title: "Optimize Menu & Costs",
    description: "See per-ingredient spend. Steer the menu toward high-margin dishes.",
    impact: "1–2%",
    color: 'hsl(25 80% 55%)',
  },
  {
    icon: TrendingUp,
    title: "Forecast & Reduce Waste",
    description: "Predict next-week ingredient needs — cut over-ordering, waste, and stockouts.",
    impact: "1–2%",
    color: 'hsl(220 60% 50%)',
  },
];

export const ValueSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Euro className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground font-medium">Concrete ROI</span>
      </div>
      <h2 className="slide-title fade-up">Value Creation</h2>
      
      <div className="slide-content">
        <div className="flex gap-12 items-start">
          {/* Left: Value drivers */}
          <div className="flex-1">
            <div className="space-y-5">
              {valueDrivers.map((driver, index) => (
                <div
                  key={driver.title}
                  className="fade-up flex items-start gap-5 p-5 rounded-2xl"
                  style={{
                    animationDelay: `${0.2 + index * 0.12}s`,
                    opacity: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: driver.color }}
                  >
                    <driver.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-foreground">{driver.title}</h3>
                      <div 
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs"
                        style={{
                          background: 'linear-gradient(135deg, hsl(160 50% 45% / 0.15), hsl(160 50% 45% / 0.1))',
                          color: 'hsl(160 50% 35%)',
                        }}
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                        {driver.impact}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{driver.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Value loop */}
            <div className="fade-up-delay-3 mt-5 p-4 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
            }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-foreground">The Value Loop</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground flex-wrap">
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'hsl(350 60% 30% / 0.1)', color: 'hsl(350 60% 30%)' }}>Invoices</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'hsl(25 80% 55% / 0.1)', color: 'hsl(25 80% 45%)' }}>Ingredient Prices</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'hsl(25 80% 55% / 0.1)', color: 'hsl(25 80% 45%)' }}>Margin Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'hsl(220 60% 50% / 0.1)', color: 'hsl(220 60% 40%)' }}>Demand Forecast</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'hsl(160 50% 45% / 0.1)', color: 'hsl(160 50% 35%)' }}>Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="px-2.5 py-1 rounded-full font-bold" style={{ background: 'hsl(350 60% 30%)', color: 'white' }}>Profit ↑</span>
              </div>
            </div>
          </div>
          
          {/* Right: Total impact */}
          <div className="flex-1 fade-up-delay-2">
            <div 
              className="p-5 rounded-2xl mb-6 flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <Clock className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground text-lg">Results in 30–60 days</div>
                <div className="text-sm text-muted-foreground">From first invoice scan to actionable margin insights</div>
              </div>
            </div>

            <div 
              className="p-8 rounded-3xl relative overflow-hidden text-center mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.35)',
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-white/80" />
                  <span className="text-lg font-medium text-white/80">Target Margin Improvement</span>
                </div>
                <div className="text-7xl font-black text-white mb-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  3–6%
                </div>
                <p className="text-white/80 text-lg">per location</p>
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
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground text-sm">Example: €500K revenue bistro</span>
              </div>
              <div className="flex justify-between items-center pt-1" style={{ borderTop: '2px solid hsl(350 60% 30% / 0.2)' }}>
                <span className="font-bold text-base" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Total Annual Impact</span>
                <span className="font-black text-2xl" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>€15–30K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};