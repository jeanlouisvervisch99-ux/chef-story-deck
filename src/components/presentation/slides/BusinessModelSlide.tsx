import React from 'react';
import { Utensils, Soup, UtensilsCrossed, ChefHat } from 'lucide-react';

const tiers = [
  {
    name: "Appetizer",
    icon: Utensils,
    price: "€99",
    features: ["Basic P&L tracking", "Menu management", "Email support"]
  },
  {
    name: "Starter",
    icon: Soup,
    price: "€199",
    features: ["Everything in Appetizer", "AI menu scanning", "Inventory alerts"]
  },
  {
    name: "Main Course",
    icon: UtensilsCrossed,
    price: "€299",
    features: ["Everything in Starter", "Procurement integration", "Predictive analytics"],
    popular: true
  },
  {
    name: "Full Course",
    icon: ChefHat,
    price: "€399",
    features: ["Everything in Main", "Recipe database access", "Priority support", "Custom integrations"]
  }
];

export const BusinessModelSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Business Model</h2>
      
      <div className="slide-content">
        <div className="grid grid-cols-4 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`fade-up relative p-6 rounded-2xl border-2 transition-all ${
                tier.popular 
                  ? 'border-primary bg-primary/5 shadow-lg' 
                  : 'border-border bg-secondary/30'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <tier.icon className={`h-6 w-6 ${tier.popular ? 'text-primary' : 'text-foreground'}`} />
                <span className="font-semibold text-foreground">{tier.name}</span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{tier.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 flex justify-center gap-8 text-center">
          <div className="p-4 rounded-xl bg-secondary/50">
            <span className="text-sm text-muted-foreground">+ Small fee per</span>
            <p className="font-semibold text-foreground">Procurement Order</p>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50">
            <span className="text-sm text-muted-foreground">+ Percentage on</span>
            <p className="font-semibold text-foreground">Payment Volumes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
