import React from 'react';
import { Check, X, ChefHat, Sparkles, Minus } from 'lucide-react';

const features = [
  { name: 'AI invoice ingestion', lightspeed: false, toast: false, apicbase: false, yourbi: false, chef: true },
  { name: 'Dish-level margin tracking', lightspeed: false, toast: false, apicbase: 'partial', yourbi: true, chef: true },
  { name: 'Recipe & menu costing', lightspeed: false, toast: false, apicbase: true, yourbi: false, chef: true },
  { name: 'Real-time cost dashboard', lightspeed: false, toast: false, apicbase: 'partial', yourbi: true, chef: true },
  { name: 'Works on top of any POS', lightspeed: false, toast: false, apicbase: true, yourbi: true, chef: true },
  { name: 'No deep integrations needed', lightspeed: false, toast: false, apicbase: false, yourbi: false, chef: true },
  { name: 'AI-powered data extraction', lightspeed: false, toast: 'partial', apicbase: false, yourbi: false, chef: true },
  { name: 'Multi-location support', lightspeed: true, toast: true, apicbase: true, yourbi: true, chef: true },
  { name: 'POS / inventory built-in', lightspeed: true, toast: true, apicbase: false, yourbi: false, chef: false },
  { name: 'Procurement automation', lightspeed: false, toast: false, apicbase: true, yourbi: false, chef: false },
];

const Cell: React.FC<{value: boolean | string; highlight?: boolean}> = ({ value, highlight }) => (
  <td className="px-3 py-2 text-center">
    {value === 'partial' ? (
      <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{ background: 'hsl(38 85% 50% / 0.15)' }}>
        <Minus className="w-3.5 h-3.5 text-foreground/60" />
      </div>
    ) : value ? (
      <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{
        background: highlight ? 'linear-gradient(135deg, hsl(160 50% 45%), hsl(160 50% 55%))' : 'hsl(160 50% 45% / 0.15)'
      }}>
        <Check className={`w-3.5 h-3.5 ${highlight ? 'text-white' : 'text-foreground'}`} />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{ background: 'hsl(350 40% 50% / 0.1)' }}>
        <X className="w-3.5 h-3.5 text-muted-foreground/50" />
      </div>
    )}
  </td>
);

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-6">
        We don't replace POS — we add the <span className="font-bold text-primary">margin intelligence layer</span> they lack
      </p>
      
      <div className="slide-content">
        <div className="fade-up-delay-2 overflow-hidden rounded-2xl" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.06)'
        }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid hsl(350 60% 30% / 0.15)' }}>
                <th className="text-left px-4 py-3 font-bold text-foreground">Feature</th>
                <th className="px-3 py-3 font-semibold text-muted-foreground">
                  <div className="text-center">
                    <div>Lightspeed</div>
                    <div className="text-[10px] font-normal text-muted-foreground/60">POS</div>
                  </div>
                </th>
                <th className="px-3 py-3 font-semibold text-muted-foreground">
                  <div className="text-center">
                    <div>Toast</div>
                    <div className="text-[10px] font-normal text-muted-foreground/60">POS</div>
                  </div>
                </th>
                <th className="px-3 py-3 font-semibold text-muted-foreground">
                  <div className="text-center">
                    <div>Apicbase</div>
                    <div className="text-[10px] font-normal text-muted-foreground/60">F&B mgmt</div>
                  </div>
                </th>
                <th className="px-3 py-3 font-semibold text-muted-foreground">
                  <div className="text-center">
                    <div>YourBI</div>
                    <div className="text-[10px] font-normal text-muted-foreground/60">Analytics</div>
                  </div>
                </th>
                <th className="px-3 py-3">
                  <div className="flex items-center justify-center gap-1.5">
                    <ChefHat className="w-4 h-4 text-primary" />
                    <span className="font-bold" style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Chef</span>
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
                    animationDelay: `${0.3 + index * 0.04}s`,
                    opacity: 0,
                    borderBottom: index < features.length - 1 ? '1px solid hsl(35 30% 90%)' : 'none'
                  }}
                >
                  <td className="px-4 py-2 font-medium text-foreground text-sm">{feature.name}</td>
                  <Cell value={feature.lightspeed} />
                  <Cell value={feature.toast} />
                  <Cell value={feature.apicbase} />
                  <Cell value={feature.yourbi} />
                  <Cell value={feature.chef} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="fade-up-delay-3 mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))'
          }}>
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-base font-medium text-foreground">
              Chef is purpose-built for margin visibility — not another POS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
