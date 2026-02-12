import React from 'react';
import { Zap, MapPin, Shield, Globe, Flag, TrendingUp } from 'lucide-react';

const marketInsights = [
  {
    icon: Globe,
    title: "Toast absent from mainland Europe",
    description: "The US market leader (156K locations) has no presence in continental Europe — leaving a wide-open gap.",
    color: 'hsl(350 60% 30%)',
  },
  {
    icon: TrendingUp,
    title: "Local players capturing domestic markets",
    description: "Allo (Germany) and YourBI (Netherlands) are rapidly growing in their home markets — proving demand for local, purpose-built platforms.",
    color: 'hsl(25 80% 55%)',
  },
];

export const WhyNowSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Zap className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground font-medium">The European Opportunity</span>
      </div>
      <h2 className="slide-title fade-up">Why Belgium, Why Now?</h2>
      
      <div className="slide-content">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: Market dynamics */}
          <div className="fade-up-delay-1">
            <h3 
              className="text-2xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The competitive landscape is shifting
            </h3>
            
            <div className="space-y-4">
              {marketInsights.map((insight, index) => (
                <div
                  key={insight.title}
                  className="fade-up p-5 rounded-2xl"
                  style={{ 
                    animationDelay: `${0.3 + index * 0.15}s`, 
                    opacity: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: insight.color }}
                    >
                      <insight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{insight.title}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Belgium opportunity */}
          <div className="fade-up-delay-2">
            <div 
              className="p-7 rounded-3xl relative overflow-hidden mb-5"
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
                  <Flag className="w-7 h-7 text-white/90" />
                  <span className="text-white/80 text-lg font-medium">🇧🇪 Belgium's Unique Position</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      <span className="text-lg">🍽️</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Strong culinary identity</div>
                      <div className="text-white/70 text-sm">World-renowned gastronomy culture with Michelin density among Europe's highest</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      <span className="text-lg">⏳</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Slower digitalization</div>
                      <div className="text-white/70 text-sm">Belgian hospitality lags behind NL, DE & UK in tech adoption — massive greenfield opportunity</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      <span className="text-lg">🏠</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">No domestic champion</div>
                      <div className="text-white/70 text-sm">No Belgian-born purpose-built restaurant platform exists today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="fade-up-delay-3 p-4 rounded-xl flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                border: '1px solid hsl(350 60% 30% / 0.12)',
              }}
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                Win Belgium first → expand into NL, FR, DE with proven playbook
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
