import React from 'react';
import { TrendingUp, Receipt, UtensilsCrossed, Euro, ArrowDown, ArrowUp, Sparkles, Clock } from 'lucide-react';

const valueDrivers = [
  {
    icon: Receipt,
    title: "Identify Loss-Making Dishes",
    description: "Spot dishes where ingredient cost exceeds margin target. Remove or reprice within days.",
    impact: "1-2%",
    direction: "up",
    color: 'hsl(350 60% 30%)',
  },
  {
    icon: ArrowDown,
    title: "Reduce Ingredient Costs",
    description: "Visibility into per-ingredient spend reveals overpriced suppliers and waste patterns.",
    impact: "1-2%",
    direction: "down",
    color: 'hsl(25 80% 55%)',
  },
  {
    icon: UtensilsCrossed,
    title: "Optimize Menu Mix",
    description: "Steer the menu toward high-margin dishes while maintaining variety.",
    impact: "1-2%",
    direction: "up",
    color: 'hsl(160 50% 45%)',
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
                  className="fade-up feature-card flex items-start gap-5 group"
                  style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: driver.color }}
                  >
                    <driver.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-foreground">{driver.title}</h3>
                      <div 
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-sm"
                        style={{
                          background: 'linear-gradient(135deg, hsl(160 50% 45% / 0.15), hsl(160 50% 45% / 0.1))',
                          color: 'hsl(160 50% 35%)',
                        }}
                      >
                        <ArrowUp className="w-4 h-4" />
                        {driver.impact}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{driver.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Total impact */}
          <div className="flex-1 fade-up-delay-2">
            {/* Time to value */}
            <div 
              className="p-5 rounded-2xl mb-5 flex items-center gap-4"
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
              className="p-8 rounded-3xl relative overflow-hidden text-center mb-5"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.35)',
              }}
            >
              <div className="absolute inset-0 shimmer opacity-10" style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }} />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-white/80" />
                  <span className="text-lg font-medium text-white/80">Target Margin Improvement</span>
                </div>
                <div className="text-7xl font-black text-white mb-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  3–5%
                </div>
                <p className="text-white/80 text-lg">per location</p>
              </div>
            </div>
            
            {/* € Impact example */}
            <div 
              className="p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Example: €500K annual revenue bistro</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Dish repricing (remove losers)</span>
                  <span className="font-bold text-foreground">€7,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Ingredient cost reduction</span>
                  <span className="font-bold text-foreground">€10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Menu mix optimization</span>
                  <span className="font-bold text-foreground">€7,500</span>
                </div>
                <div className="pt-3 mt-2 flex justify-between items-center" style={{ borderTop: '2px solid hsl(350 60% 30% / 0.2)' }}>
                  <span className="font-bold text-lg" style={{
                    background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>Total Annual Impact</span>
                  <span className="font-black text-2xl" style={{
                    background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>€25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
