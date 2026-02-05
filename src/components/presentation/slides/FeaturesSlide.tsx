import React from 'react';
import { Calculator, ScanLine, BookOpen, Truck, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: "Predictive P&L",
    description: "Forecast based on reservations + historical attendance"
  },
  {
    icon: ScanLine,
    title: "AI Menu Scanning",
    description: "Automatic ingredient & cost estimation"
  },
  {
    icon: BookOpen,
    title: "Recipe Database",
    description: "Curated recipes from Michelin chefs"
  },
  {
    icon: Truck,
    title: "Procurement",
    description: "Direct integrations with wholesalers"
  },
  {
    icon: CreditCard,
    title: "Payments & Loyalty",
    description: "POS integration with rewards"
  }
];

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Product Features</h2>
      
      <div className="slide-content">
        <div className="grid grid-cols-5 gap-6 mt-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              <div className="p-4 bg-primary rounded-xl mb-4">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="fade-up-delay-3 mt-10 text-center">
          <p className="text-xl text-muted-foreground">
            <span className="font-semibold text-primary">One subscription</span> to run your entire restaurant
          </p>
        </div>
      </div>
    </div>
  );
};
