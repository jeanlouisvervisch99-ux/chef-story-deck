import React from 'react';
import { Utensils, Soup, UtensilsCrossed, ChefHat, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: "Appetizer",
    icon: Utensils,
    price: "€99",
    features: ["Basic P&L tracking", "Menu management", "Email support"],
    gradient: 'linear-gradient(135deg, hsl(35 60% 92%), hsl(35 50% 88%))',
  },
  {
    name: "Starter",
    icon: Soup,
    price: "€199",
    features: ["Everything in Appetizer", "AI menu scanning", "Inventory alerts"],
    gradient: 'linear-gradient(135deg, hsl(35 65% 90%), hsl(25 60% 85%))',
  },
  {
    name: "Main Course",
    icon: UtensilsCrossed,
    price: "€299",
    features: ["Everything in Starter", "Procurement integration", "Predictive analytics"],
    popular: true,
    gradient: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
  },
  {
    name: "Full Course",
    icon: ChefHat,
    price: "€399",
    features: ["Everything in Main", "Recipe database", "Priority support", "Custom integrations"],
    gradient: 'linear-gradient(135deg, hsl(280 40% 92%), hsl(280 35% 88%))',
  }
];

export const BusinessModelSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Business Model</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Tiered subscriptions + transaction fees
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-4 gap-5 mb-10">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="fade-up relative"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              {tier.popular && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full z-10 flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                    boxShadow: '0 4px 15px rgba(217, 119, 87, 0.4)',
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-bold text-white">POPULAR</span>
                </div>
              )}
              
              <div 
                className="p-6 rounded-3xl h-full transition-all hover:-translate-y-1"
                style={{
                  background: tier.gradient,
                  boxShadow: tier.popular 
                    ? '0 20px 60px rgba(122, 30, 45, 0.3)'
                    : '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: tier.popular 
                        ? 'rgba(255,255,255,0.2)'
                        : 'linear-gradient(135deg, hsl(350 60% 30% / 0.1), hsl(25 80% 55% / 0.1))',
                    }}
                  >
                    <tier.icon className={`h-5 w-5 ${tier.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <span className={`font-bold ${tier.popular ? 'text-white' : 'text-foreground'}`}>
                    {tier.name}
                  </span>
                </div>
                
                <div className="mb-5">
                  <span 
                    className="text-4xl font-black"
                    style={{ color: tier.popular ? 'white' : 'hsl(350 60% 30%)' }}
                  >
                    {tier.price}
                  </span>
                  <span className={tier.popular ? 'text-white/70' : 'text-muted-foreground'}>
                    /mo
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li 
                      key={feature} 
                      className={`text-sm flex items-start gap-2 ${tier.popular ? 'text-white/90' : 'text-muted-foreground'}`}
                    >
                      <span 
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: tier.popular 
                            ? 'white'
                            : 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional revenue streams */}
        <div className="fade-up-delay-3 flex justify-center gap-6">
          <div 
            className="flex items-center gap-4 px-8 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground">+Small fee per</div>
              <div className="text-lg font-bold text-foreground">Procurement Order</div>
            </div>
          </div>
          <div 
            className="flex items-center gap-4 px-8 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground">+Percentage on</div>
              <div className="text-lg font-bold text-foreground">Payment Volumes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
