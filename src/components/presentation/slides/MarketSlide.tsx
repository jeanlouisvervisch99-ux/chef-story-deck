import React from 'react';
import { TrendingUp, MapPin } from 'lucide-react';

const marketData = [
  { label: 'TAM', value: '20K', description: 'Belgium restaurants (NACE)', percent: 100 },
  { label: 'SAM', value: '12K', description: '60% addressable', percent: 60 },
  { label: 'SOM', value: '1K', description: '5% target', percent: 8 },
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
        <div className="flex gap-16 items-center">
          {/* Left: Market bars */}
          <div className="flex-1">
            <div className="space-y-8">
              {marketData.map((item, index) => (
                <div
                  key={item.label}
                  className="fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
                >
                  <div className="flex justify-between mb-3">
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
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                    <span 
                      className="text-3xl font-black"
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
                    className="h-4 rounded-full overflow-hidden"
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
          </div>
          
          {/* Right: Revenue target */}
          <div className="flex-1 fade-up-delay-3">
            <div 
              className="p-10 rounded-3xl relative overflow-hidden text-center"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.35)',
              }}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 shimmer opacity-10"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-white/80" />
                  <span className="text-lg font-medium text-white/80">Target ARR</span>
                </div>
                <div 
                  className="text-7xl font-black text-white mb-4"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                >
                  €4.8M
                </div>
                <div 
                  className="inline-block px-6 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-white/90">1,000 restaurants × €399/month</span>
                </div>
              </div>
            </div>
            
            <div 
              className="mt-6 p-5 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              <span className="text-muted-foreground">With procurement & payment fees:</span>
              <p 
                className="text-2xl font-bold mt-1"
                style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                €6-8M potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
