import React from 'react';
import { Utensils, UtensilsCrossed, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export const BusinessModelSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Business Model</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Simple SaaS pricing per location
      </p>
      
      <div className="slide-content">
        <div className="flex gap-10 items-start">
          {/* Left: Pricing tiers */}
          <div className="flex-1">
            <div className="flex gap-6 mb-8">
              {/* Starter */}
              <div className="flex-1 fade-up p-6 rounded-3xl" style={{
                animationDelay: '0.2s',
                opacity: 0,
                background: 'linear-gradient(135deg, hsl(35 60% 92%), hsl(35 50% 88%))',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)'
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.1), hsl(25 80% 55% / 0.1))'
                  }}>
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-foreground">Starter</span>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black" style={{ color: 'hsl(350 60% 30%)' }}>€69</span>
                  <span className="text-muted-foreground">/mo per location</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Invoice ingestion + basic costing</p>
                <div className="px-3 py-1.5 rounded-full text-xs font-semibold inline-block" style={{
                  background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                  color: 'white'
                }}>
                  Entry Point
                </div>
              </div>
              
              {/* Professional */}
              <div className="flex-1 fade-up p-6 rounded-3xl relative overflow-hidden" style={{
                animationDelay: '0.35s',
                opacity: 0,
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
                boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)'
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                    background: 'rgba(255,255,255,0.2)'
                  }}>
                    <UtensilsCrossed className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-white">Professional</span>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black text-white">€169</span>
                  <span className="text-white/70">/mo per location</span>
                </div>
                <p className="text-sm text-white/80 mb-3">Full margin dashboard + recipe costing + alerts</p>
                <div className="px-4 py-1.5 rounded-full flex items-center gap-2" style={{
                  background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                  boxShadow: '0 4px 15px rgba(217, 119, 87, 0.4)'
                }}>
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-bold text-white">Recommended</span>
                </div>
              </div>
            </div>
            
            {/* Unit economics */}
            <div className="fade-up-delay-2 p-5 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)'
            }}>
              <div className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Why It Works for the Customer
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At €169/mo, a restaurant saving just 3% on a €500K revenue base recovers €25,000/year — 
                a <span className="font-bold text-foreground">12x ROI</span> on the subscription cost.
              </p>
            </div>
          </div>
          
          {/* Right: Expansion path */}
          <div className="flex-1 fade-up-delay-2">
            <div className="flex items-center gap-3 mb-5">
              <ArrowRight className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold" style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Revenue Expansion Path</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-5 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)'
              }}>
                <div className="font-bold text-foreground mb-2">Phase 1: Land</div>
                <p className="text-sm text-muted-foreground">SaaS subscription per location. Pure software margins.</p>
              </div>
              
              <div className="p-5 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)'
              }}>
                <div className="font-bold text-foreground mb-2">Phase 2: Expand</div>
                <p className="text-sm text-muted-foreground">Add-on modules (forecasting, procurement recs) at €50–€100/mo each.</p>
              </div>
              
              <div className="p-5 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)'
              }}>
                <div className="font-bold text-foreground mb-2">Phase 3: Monetize Data</div>
                <p className="text-sm text-muted-foreground">Aggregate anonymized data for wholesalers, industry insights — future revenue stream.</p>
              </div>
              
              <div className="p-6 rounded-2xl text-center" style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
                boxShadow: '0 15px 50px rgba(122, 30, 45, 0.25)'
              }}>
                <div className="text-white/80 text-sm mb-1">Start simple, expand with trust</div>
                <div className="text-xl font-black text-white">SaaS first. Always.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
