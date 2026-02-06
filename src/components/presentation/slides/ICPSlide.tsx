import React from 'react';
import { Building2, Store, Utensils, Target } from 'lucide-react';

const tiers = [
  {
    tier: "Tier 1",
    icon: Building2,
    title: "Groups & Chains",
    description: "Bistro groups, professional cafeterias, university dining",
    examples: "Lunchgarden, campus restaurants",
    priority: "highest",
    color: 'hsl(350 60% 30%)',
  },
  {
    tier: "Tier 2",
    icon: Store,
    title: "Standalone Bistros",
    description: "Independent restaurants seeking recipe database & efficiency",
    examples: "Local bistros, neighborhood restaurants",
    priority: "high",
    color: 'hsl(25 80% 55%)',
  },
  {
    tier: "Tier 3",
    icon: Utensils,
    title: "Fast Food & Ethnic",
    description: "High-volume establishments with standardized menus",
    examples: "QSR, ethnic cuisine chains",
    priority: "medium",
    color: 'hsl(280 50% 60%)',
  },
];

export const ICPSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">ICP & Go-to-Market</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-10">
        Tiered approach for maximum market penetration
      </p>
      
      <div className="slide-content">
        <div className="flex gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.tier}
              className="flex-1 fade-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
            >
              <div 
                className="h-full p-8 rounded-3xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                {/* Top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: tier.color }}
                />
                
                {/* Priority badge */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                  style={{
                    background: `${tier.color}15`,
                  }}
                >
                  <Target className="w-3.5 h-3.5" style={{ color: tier.color }} />
                  <span className="text-xs font-bold uppercase" style={{ color: tier.color }}>
                    {tier.priority} priority
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: tier.color }}
                  >
                    <tier.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground">{tier.tier}</div>
                    <div className="text-xl font-bold text-foreground">{tier.title}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tier.description}
                </p>
                
                <div 
                  className="px-4 py-3 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(35 40% 96%), hsl(35 50% 92%))',
                  }}
                >
                  <span className="text-sm text-muted-foreground">Examples: </span>
                  <span className="text-sm font-medium text-foreground">{tier.examples}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GTM strategy highlight */}
        <div className="fade-up-delay-3 mt-10 flex justify-center">
          <div 
            className="px-8 py-4 rounded-2xl flex items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
              boxShadow: '0 15px 50px rgba(122, 30, 45, 0.25)',
            }}
          >
            <div className="text-white font-bold text-lg">Strategy:</div>
            <div className="text-white/90">Land with groups → Expand to independents → Scale across verticals</div>
          </div>
        </div>
      </div>
    </div>
  );
};
