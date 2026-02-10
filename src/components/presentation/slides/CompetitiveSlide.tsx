import React from 'react';
import { Check, X, ChefHat, Sparkles } from 'lucide-react';

const features = [
  { name: 'Michelin-grade recipe DB', toast: false, square: false, allo: false, chef: true },
  { name: 'Automated procurement', toast: false, square: false, allo: true, chef: true },
  { name: 'AI invoice extraction', toast: false, square: false, allo: false, chef: true },
  { name: 'Belgian labor law logic', toast: false, square: false, allo: false, chef: true },
  { name: 'Predictive P&L', toast: false, square: false, allo: false, chef: true },
  { name: 'Menu cost engineering', toast: false, square: false, allo: false, chef: true },
  { name: 'POS integration', toast: true, square: true, allo: true, chef: true },
  { name: 'Multi-location mgmt', toast: true, square: true, allo: false, chef: true },
];

const Cell: React.FC<{ value: boolean; highlight?: boolean }> = ({ value, highlight }) => (
  <td className="px-4 py-3 text-center">
    {value ? (
      <div 
        className="w-7 h-7 rounded-full flex items-center justify-center mx-auto"
        style={{ 
          background: highlight 
            ? 'linear-gradient(135deg, hsl(160 50% 45%), hsl(160 50% 55%))' 
            : 'hsl(160 50% 45% / 0.15)' 
        }}
      >
        <Check className={`w-4 h-4 ${highlight ? 'text-white' : 'text-foreground'}`} />
      </div>
    ) : (
      <div 
        className="w-7 h-7 rounded-full flex items-center justify-center mx-auto"
        style={{ background: 'hsl(350 40% 50% / 0.1)' }}
      >
        <X className="w-4 h-4 text-muted-foreground/50" />
      </div>
    )}
  </td>
);

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Generalists vs. <span className="font-bold text-primary">purpose-built</span>
      </p>
      
      <div className="slide-content">
        <div className="fade-up-delay-2 overflow-hidden rounded-2xl" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.06)',
        }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid hsl(350 60% 30% / 0.15)' }}>
                <th className="text-left px-6 py-4 font-bold text-foreground text-base">Feature</th>
                <th className="px-4 py-4 font-semibold text-muted-foreground">Toast</th>
                <th className="px-4 py-4 font-semibold text-muted-foreground">Square</th>
                <th className="px-4 py-4 font-semibold text-muted-foreground">AllO</th>
                <th className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <ChefHat className="w-5 h-5 text-primary" />
                    <span 
                      className="font-bold text-base"
                      style={{
                        background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Chef
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={feature.name}
                  className="fade-up"
                  style={{ 
                    animationDelay: `${0.3 + index * 0.06}s`, 
                    opacity: 0,
                    borderBottom: index < features.length - 1 ? '1px solid hsl(35 30% 90%)' : 'none',
                  }}
                >
                  <td className="px-6 py-3 font-medium text-foreground">{feature.name}</td>
                  <Cell value={feature.toast} />
                  <Cell value={feature.square} />
                  <Cell value={feature.allo} />
                  <Cell value={feature.chef} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Bottom callout */}
        <div className="fade-up-delay-3 mt-8 flex justify-center gap-4">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))',
            }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium text-foreground">
              Chef is purpose-built for the kitchen, not adapted from retail POS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
