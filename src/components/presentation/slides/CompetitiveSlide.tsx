import React from 'react';
import { Check, ChefHat } from 'lucide-react';

const competitors = [
  { name: 'Toast', coverage: 3 },
  { name: 'Lightspeed', coverage: 3 },
  { name: 'Allo', coverage: 2 },
  { name: 'SIDES', coverage: 2 },
  { name: 'Chef', coverage: 8, highlight: true },
];

const features = ['POS', 'Inventory', 'Procurement', 'P&L Forecast', 'AI Menu', 'Recipes', 'Payments', 'Analytics'];

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Others cover 2-4 areas. We cover <span className="font-bold text-primary">all of them</span>.
      </p>
      
      <div className="slide-content">
        <div className="fade-up-delay-2 flex gap-6">
          {competitors.map((comp, index) => (
            <div
              key={comp.name}
              className="flex-1 fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
            >
              <div 
                className={`p-6 rounded-3xl h-full ${comp.highlight ? 'relative overflow-hidden' : ''}`}
                style={{
                  background: comp.highlight 
                    ? 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
                  backdropFilter: 'blur(20px)',
                  border: comp.highlight ? 'none' : '1px solid rgba(255,255,255,0.5)',
                  boxShadow: comp.highlight 
                    ? '0 20px 60px rgba(122, 30, 45, 0.3)'
                    : '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                {comp.highlight && (
                  <div 
                    className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, white, transparent)' }}
                  />
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  {comp.highlight && <ChefHat className="w-6 h-6 text-white" />}
                  <span 
                    className={`text-xl font-bold ${comp.highlight ? 'text-white' : 'text-foreground'}`}
                  >
                    {comp.name}
                  </span>
                </div>
                
                <div 
                  className="text-5xl font-black mb-2"
                  style={{
                    color: comp.highlight ? 'white' : 'hsl(350 60% 30%)',
                  }}
                >
                  {comp.coverage}
                </div>
                <div className={`text-sm ${comp.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  features covered
                </div>
                
                {/* Feature indicators */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {features.slice(0, comp.coverage).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: comp.highlight 
                          ? 'rgba(255,255,255,0.9)'
                          : 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                      }}
                    />
                  ))}
                  {features.slice(comp.coverage).map((_, i) => (
                    <div
                      key={i + comp.coverage}
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: comp.highlight 
                          ? 'rgba(255,255,255,0.2)'
                          : 'hsl(35 20% 85%)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom callout */}
        <div className="fade-up-delay-3 mt-10 flex justify-center">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))',
            }}
          >
            <Check className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium text-foreground">
              Only Chef provides complete coverage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
