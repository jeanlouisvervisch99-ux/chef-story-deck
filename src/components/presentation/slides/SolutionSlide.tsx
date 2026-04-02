import React from 'react';
import { CheckCircle2, Brain, Eye, Layers, TrendingUp } from 'lucide-react';

const v1Features = [
  "AI-powered invoice ingestion — snap or forward, data extracted automatically",
  "Dish-level recipe & menu costing linked to real invoice prices",
  "Real-time margin dashboard — spot underperformers instantly",
  "Basic demand forecasting — what to buy & prep next week",
  "Works on top of any existing POS — no integrations needed",
];

export const SolutionSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Solution</h2>
      
      <div className="slide-content">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: Core V1 */}
          <div className="fade-up-delay-1 flex flex-col h-full">
            <div
              className="text-3xl font-bold leading-tight mb-5"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Invoices → Costs → Margins → Forecast → Action
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chef ingests invoices automatically, maps costs to every dish, and turns that into margin intelligence and practical demand forecasts.
            </p>
            
            <div className="space-y-2.5 mb-6">
              {v1Features.map((feature, index) => (
                <div
                  key={feature}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${0.4 + index * 0.08}s`, opacity: 0 }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-base font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* AI callout */}
            <div
              className="fade-up-delay-2 p-5 rounded-2xl relative overflow-hidden mt-auto"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)'
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
          
          {/* Right: How it works + Integration */}
          <div className="fade-up-delay-2 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-accent" />
              <span
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                How It Works
              </span>
            </div>
            
            {/* Step flow */}
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Scan or forward invoices", desc: "AI extracts line items, prices, and supplier data automatically" },
                { step: "2", title: "Chef maps costs to every dish", desc: "Real-time dish-level costing updated with each new invoice" },
                { step: "3", title: "See margins & forecasts", desc: "Know what's profitable and what to order next week" },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="fade-up p-4 rounded-2xl flex items-start gap-4"
                  style={{
                    animationDelay: `${0.4 + index * 0.12}s`,
                    opacity: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-sm"
                    style={{ background: 'hsl(350 60% 30%)' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Forecasting note */}
            <div
              className="p-5 rounded-2xl mt-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
              }}
            >
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Forecasting Built Into the Flow
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Historical invoices + menu data = ingredient demand estimates. No extra setup — forecasting is a natural output of cost intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
