import React from 'react';
import { Receipt, UtensilsCrossed, BarChart3, TrendingUp, Lock, ArrowRight } from 'lucide-react';

const coreFeatures = [
  {
    icon: Receipt,
    title: "AI Invoice Ingestion",
    description: "Snap or forward any invoice — AI extracts line items, prices, and quantities automatically",
    color: 'hsl(350 60% 30%)',
    tag: "V1 Core",
  },
  {
    icon: UtensilsCrossed,
    title: "Recipe & Menu Costing",
    description: "Map ingredients to recipes. Know the true cost of every dish in real time",
    color: 'hsl(25 80% 55%)',
    tag: "V1 Core",
  },
  {
    icon: BarChart3,
    title: "Real-Time Margin Dashboard",
    description: "See dish-level profitability at a glance. Spot loss-makers instantly",
    color: 'hsl(160 50% 45%)',
    tag: "V1 Core",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict ingredient needs from historical invoices and menus — know what to buy next week, no POS required",
    color: 'hsl(220 60% 50%)',
    tag: "V1 Lite",
  },
];

const futureModules = [
  "Procurement recommendations",
  "Workforce optimization",
  "Working capital financing",
  "Loyalty & payments",
];

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Product — V1 Wedge</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Focused on what matters most: <span className="font-bold text-primary">margin intelligence</span>
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              <div 
                className="feature-card h-full flex flex-col items-center text-center transition-all"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                }}
              >
                <div 
                  className="px-3 py-1 rounded-full text-xs font-bold mb-4 text-white"
                  style={{ background: feature.color }}
                >
                  {feature.tag}
                </div>
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Future modules - greyed out */}
        <div className="fade-up-delay-3 flex justify-center gap-4">
          <div 
            className="flex items-center gap-4 px-6 py-4 rounded-2xl flex-1 max-w-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            <Lock className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-bold text-muted-foreground/70 text-sm mb-2">Future Modules — Stepwise Expansion</div>
              <div className="flex flex-wrap gap-2">
                {futureModules.map(mod => (
                  <span 
                    key={mod} 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'hsl(35 30% 90%)',
                      color: 'hsl(20 10% 50%)',
                    }}
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
