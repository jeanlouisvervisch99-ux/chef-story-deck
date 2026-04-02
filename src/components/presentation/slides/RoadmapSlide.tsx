import React from 'react';
import { Receipt, BarChart3, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    version: "V1",
    title: "Margin Intelligence",
    timeline: "Now → Q4 2026",
    icon: Receipt,
    color: 'hsl(350 60% 30%)',
    status: "Building",
    items: [
      "Recipe & menu costing",
      "Real-time margin dashboard",
      "Basic demand forecasting",
      "Automated & Manual data entry",
    ],
  },
  {
    version: "V2",
    title: "Invoice AI & Procurement",
    timeline: "Q1 2027 → Q3 2027",
    icon: BarChart3,
    color: 'hsl(25 80% 55%)',
    status: "Planned",
    items: [
      "AI invoice ingestion",
      "Supplier price tracking",
      "Procurement recommendations",
      "Improved forecasting accuracy",
    ],
  },
  {
    version: "V3",
    title: "Analytics & Benchmarking",
    timeline: "2028+",
    icon: Truck,
    color: 'hsl(160 50% 45%)',
    status: "Vision",
    items: [
      "Weekly P&L forecasting",
      "Labour analytics",
      "Supplier benchmarking",
      "Multi-location insights",
    ],
  },
];

export const RoadmapSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <Sparkles className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground font-medium">Disciplined Expansion</span>
      </div>
      <h2 className="slide-title fade-up">Product Roadmap</h2>
      
      <div className="slide-content">
        <div className="flex gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.version}
              className="flex-1 fade-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
            >
              <div 
                className="h-full p-6 rounded-3xl relative overflow-hidden"
                style={{
                  background: index === 0
                    ? `linear-gradient(135deg, ${phase.color}, hsl(350 50% 38%))`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: index === 0 ? undefined : 'blur(20px)',
                  border: index === 0 ? undefined : '1px solid rgba(255,255,255,0.6)',
                  boxShadow: index === 0
                    ? '0 20px 60px rgba(122, 30, 45, 0.3)'
                    : '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                {index !== 0 && <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: phase.color }} />}
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: index === 0 ? 'rgba(255,255,255,0.2)' : phase.color }}
                    >
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`text-2xl font-black ${index === 0 ? 'text-white' : 'text-foreground'}`}>
                        {phase.version}
                      </div>
                    </div>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: index === 0 ? 'rgba(255,255,255,0.2)' : `${phase.color}15`,
                      color: index === 0 ? 'white' : phase.color,
                    }}
                  >
                    {phase.status}
                  </span>
                </div>
                
                <div className={`text-lg font-bold mb-1 ${index === 0 ? 'text-white' : 'text-foreground'}`}>
                  {phase.title}
                </div>
                <div className={`text-sm mb-4 ${index === 0 ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {phase.timeline}
                </div>
                
                <div className="space-y-2">
                  {phase.items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${index === 0 ? 'text-white/80' : 'text-primary'}`} />
                      <span className={`text-sm ${index === 0 ? 'text-white/90' : 'text-foreground'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))'
          }}>
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-base font-medium text-foreground">
              Focused wedge → Stepwise expansion → Platform over time
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
