import React from 'react';
import { TrendingUp, MapPin, Info, Globe, Calculator } from 'lucide-react';

const marketData = [
  { label: 'TAM', value: '25K', description: 'Belgium restaurants (NACE 56.10)', percent: 100 },
  { label: 'SAM', value: '15K', description: '60% addressable', percent: 60 },
  { label: 'SOM', value: '1,250', description: '5% market share target', percent: 5 },
];

export const MarketSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <MapPin className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground font-medium">Belgium Focus → European Expansion</span>
      </div>
      <h2 className="slide-title fade-up">Market Opportunity</h2>
      
      <div className="slide-content">
        <div className="flex gap-14 items-start">
          {/* Left: Market bars */}
          <div className="flex-1">
            <div className="space-y-6">
              {marketData.map((item, index) => (
                <div
                  key={item.label}
                  className="fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
                >
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span 
                        className="text-sm font-bold px-3 py-1 rounded-lg"
                        style={{
                          background: index === 2 
                            ? 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))'
                            : 'linear-gradient(135deg, hsl(35 40% 92%), hsl(35 50% 88%))',
                          color: index === 2 ? 'white' : 'hsl(350 60% 30%)',
                        }}
                      >
                        {item.label}
                      </span>
                      <span className="text-muted-foreground text-sm">{item.description}</span>
                    </div>
                    <span 
                      className="text-2xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                  <div 
                    className="h-3 rounded-full overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, hsl(35 30% 90%), hsl(35 25% 88%))',
                    }}
                  >
                    <div
                      className="h-full rounded-full animate-chart-grow"
                      style={{ 
                        width: `${item.percent}%`,
                        background: index === 2 
                          ? 'linear-gradient(90deg, hsl(350 60% 30%), hsl(25 80% 55%))'
                          : 'linear-gradient(90deg, hsl(350 60% 40%), hsl(350 55% 50%))',
                        transformOrigin: 'left',
                        animationDelay: `${0.5 + index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* NACE explanation */}
            <div 
              className="fade-up-delay-3 mt-6 p-4 rounded-xl flex items-start gap-3"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))',
                border: '1px solid hsl(350 60% 30% / 0.15)',
              }}
            >
              <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">NACE 56.10</span> — "Restaurants and mobile food service activities" — 25K registered establishments in Belgium (conservative estimate from 25K–28K range).
              </div>
            </div>
          </div>
          
          {/* Right: The Math */}
          <div className="flex-1 fade-up-delay-2">
            <div 
              className="p-8 rounded-3xl relative overflow-hidden text-center mb-5"
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
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-white/80" />
                  <span className="text-lg font-medium text-white/80">The Math</span>
                </div>
                <div 
                  className="text-5xl font-black text-white mb-3"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                >
                  €2.5M ARR
                </div>
                <div 
                  className="inline-block px-5 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-white/90 text-sm">1,250 restaurants × €169/mo</span>
                </div>
              </div>
            </div>
            
            {/* MRR breakdown */}
            <div 
              className="p-5 rounded-2xl mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground text-sm">Monthly Recurring Revenue</span>
                <span 
                  className="text-xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  €211K
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">ACV per restaurant</span>
                <span className="text-sm font-bold text-foreground">€169 × 12 = €2,028/yr</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  With module expansion → clear path to €3M+ ARR
                </span>
              </div>
            </div>
            
            {/* Future Country Expansion */}
            <div 
              className="p-4 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(280 50% 60% / 0.1), hsl(280 40% 50% / 0.1))',
                border: '1px solid hsl(280 50% 60% / 0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-bold text-foreground">Future Country Expansion</span>
              </div>
              <div className="flex gap-2">
                {[
                  { flag: '🇳🇱', code: 'NL' },
                  { flag: '🇫🇷', code: 'FR' },
                  { flag: '🇩🇪', code: 'DE' },
                ].map((country) => (
                  <div 
                    key={country.code}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: 'linear-gradient(135deg, hsl(280 50% 60% / 0.15), hsl(280 40% 50% / 0.15))',
                    }}
                  >
                    <span>{country.flag}</span>
                    <span className="text-foreground">{country.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
