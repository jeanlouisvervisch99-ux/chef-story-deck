import React from 'react';
import { Check, X, ChefHat, Sparkles, Minus } from 'lucide-react';

const features = [
  { name: 'AI invoice ingestion',      marginedge: true,  libeo: false, dext: false, choco: false, apicbase: false, alpa: false, yourbi: false, chef: true },
  { name: 'Dish-level margin tracking', marginedge: true,  libeo: false, dext: false, choco: false, apicbase: 'partial', alpa: true, yourbi: true, chef: true },
  { name: 'Recipe & menu costing',     marginedge: true,  libeo: false, dext: false, choco: false, apicbase: true, alpa: 'partial', yourbi: false, chef: true },
  { name: 'Real-time cost dashboard',  marginedge: true,  libeo: false, dext: false, choco: false, apicbase: 'partial', alpa: true, yourbi: true, chef: true },
  { name: 'Works on top of any POS',   marginedge: false, libeo: true,  dext: true,  choco: true,  apicbase: true, alpa: true, yourbi: true, chef: true },
  { name: 'No deep integrations needed', marginedge: false, libeo: true, dext: true, choco: true, apicbase: false, alpa: false, yourbi: false, chef: true },
  { name: 'Demand forecasting',        marginedge: false, libeo: false, dext: false, choco: false, apicbase: false, alpa: false, yourbi: false, chef: true },
  { name: 'Supplier ordering',         marginedge: false, libeo: false, dext: false, choco: true,  apicbase: false, alpa: false, yourbi: false, chef: false },
];

const Cell: React.FC<{value: boolean | string; highlight?: boolean}> = ({ value, highlight }) => (
  <td className="px-2 py-2.5 text-center">
    {value === 'partial' ? (
      <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{ background: 'hsl(38 85% 50% / 0.15)' }}>
        <Minus className="w-3 h-3 text-foreground/60" />
      </div>
    ) : value ? (
      <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{
        background: highlight ? 'linear-gradient(135deg, hsl(160 50% 45%), hsl(160 50% 55%))' : 'hsl(160 50% 45% / 0.15)'
      }}>
        <Check className={`w-3 h-3 ${highlight ? 'text-white' : 'text-foreground'}`} />
      </div>
    ) : (
      <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{ background: 'hsl(350 40% 50% / 0.1)' }}>
        <X className="w-3 h-3 text-muted-foreground/50" />
      </div>
    )}
  </td>
);

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-xl text-muted-foreground mb-8">
        Ingredient-level intelligence + operational decisions — <span className="font-bold text-primary">not bookkeeping, not messaging, not POS</span>
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
                {[
                  { name: 'MarginEdge', sub: 'Invoice AI · US' },
                  { name: 'Libeo', sub: 'AP Auto · FR' },
                  { name: 'Dext', sub: 'Scanning · UK' },
                  { name: 'Choco', sub: 'Ordering · DE' },
                  { name: 'Apicbase', sub: 'F&B Mgmt · BE' },
                  { name: 'Alpa', sub: 'Finance · UK' },
                  { name: 'YourBI', sub: 'Analytics · NL' },
                ].map(col => (
                  <th key={col.name} className="px-2 py-3 font-semibold text-muted-foreground">
                    <div className="text-center">
                      <div className="text-xs">{col.name}</div>
                      <div className="text-[10px] font-normal text-muted-foreground/60">{col.sub}</div>
                    </div>
                  </th>
                ))}
                <th className="px-2 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <ChefHat className="w-4 h-4 text-primary" />
                    <span className="font-bold text-xs" style={{
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
                  <Cell value={feature.marginedge} />
                  <Cell value={feature.libeo} />
                  <Cell value={feature.dext} />
                  <Cell value={feature.choco} />
                  <Cell value={feature.apicbase} />
                  <Cell value={feature.alpa} />
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              MarginEdge proves the model (10K+ US locations). Chef brings it to Europe — no POS required.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
