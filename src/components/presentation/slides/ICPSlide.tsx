import React from 'react';
import { Building2, Store, Utensils, Target, Gift, ArrowRight, Users } from 'lucide-react';

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
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Tiered approach for maximum market penetration
      </p>
      
      <div className="slide-content">
        <div className="flex gap-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.tier}
              className="flex-1 fade-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
            >
              <div 
                className="h-full p-6 rounded-3xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: tier.color }} />
                
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                  style={{ background: `${tier.color}15` }}
                >
                  <Target className="w-3.5 h-3.5" style={{ color: tier.color }} />
                  <span className="text-xs font-bold uppercase" style={{ color: tier.color }}>
                    {tier.priority} priority
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: tier.color }}>
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground">{tier.tier}</div>
                    <div className="text-lg font-bold text-foreground">{tier.title}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{tier.description}</p>
                
                <div className="px-3 py-2 rounded-xl" style={{ background: 'linear-gradient(135deg, hsl(35 40% 96%), hsl(35 50% 92%))' }}>
                  <span className="text-xs text-muted-foreground">Examples: </span>
                  <span className="text-xs font-medium text-foreground">{tier.examples}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GTM tactics */}
        <div className="fade-up-delay-3 mt-7 flex justify-center gap-4">
          <div 
            className="px-5 py-3.5 rounded-2xl flex items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
              boxShadow: '0 15px 50px rgba(122, 30, 45, 0.25)',
            }}
          >
            <div className="text-white font-bold text-sm">Strategy:</div>
            <div className="text-white/90 text-xs">Land with groups → Expand to independents → Scale across verticals</div>
          </div>
          
          <div 
            className="px-5 py-3.5 rounded-2xl flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <Gift className="w-5 h-5 text-primary" />
            <div>
              <div className="font-bold text-foreground text-sm">1-month free trial</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                Auto-converts to paid <ArrowRight className="w-3 h-3" /> no friction
              </div>
            </div>
          </div>

          <div 
            className="px-5 py-3.5 rounded-2xl flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid hsl(25 80% 55% / 0.3)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <Users className="w-5 h-5" style={{ color: 'hsl(25 80% 55%)' }} />
            <div>
              <div className="font-bold text-foreground text-sm">Referral growth</div>
              <div className="text-xs text-muted-foreground">Refer a friend → €100 cooking store voucher</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
