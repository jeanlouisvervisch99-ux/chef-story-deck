import React from 'react';
import { Building2, Store, Utensils } from 'lucide-react';

const tiers = [
  {
    tier: "Tier 1",
    icon: Building2,
    title: "Group & Enterprise",
    examples: ["Bistro groups", "Lunchgarden", "University cafeterias"],
    color: "bg-primary"
  },
  {
    tier: "Tier 2",
    icon: Store,
    title: "Standalone Bistros",
    examples: ["Independent restaurants", "Recipe database focus", "Primary target"],
    color: "bg-primary/80"
  },
  {
    tier: "Tier 3",
    icon: Utensils,
    title: "Quick Service",
    examples: ["Fast food chains", "Ethnic restaurants", "High volume"],
    color: "bg-primary/60"
  }
];

export const ICPSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">ICP & Go-to-Market</h2>
      <p className="slide-subtitle fade-up-delay-1">
        Tiered approach based on complexity and value
      </p>
      
      <div className="slide-content">
        <div className="flex gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={tier.tier}
              className="fade-up flex-1 rounded-2xl border border-border overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.15}s`, opacity: 0 }}
            >
              <div className={`${tier.color} p-4 text-center`}>
                <tier.icon className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <span className="text-sm font-medium text-primary-foreground/80">{tier.tier}</span>
                <h3 className="text-xl font-bold text-primary-foreground">{tier.title}</h3>
              </div>
              <div className="p-6 bg-secondary/30">
                <ul className="space-y-3">
                  {tier.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 mt-8 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-xl">
            <span className="text-lg text-foreground">
              <span className="font-semibold text-primary">Land & Expand:</span> Start with Tier 2, grow into Tier 1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
