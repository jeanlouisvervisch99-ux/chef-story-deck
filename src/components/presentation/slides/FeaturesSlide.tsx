import React from 'react';
import { Brain, FileText, BookOpen, Truck, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Predictive P&L",
    description: "Forecast costs based on reservations + historical data",
    color: 'hsl(350 60% 30%)',
  },
  {
    icon: FileText,
    title: "AI Menu Scanning",
    description: "Automatic ingredient & cost estimation",
    color: 'hsl(25 80% 55%)',
  },
  {
    icon: BookOpen,
    title: "Recipe Database",
    description: "Access recipes from Michelin chefs",
    color: 'hsl(280 50% 60%)',
  },
  {
    icon: Truck,
    title: "Procurement",
    description: "Direct wholesaler integrations",
    color: 'hsl(160 50% 45%)',
  },
  {
    icon: CreditCard,
    title: "Loyalty & Payments",
    description: "Full POS integration",
    color: 'hsl(38 85% 50%)',
  },
];

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Product Features</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-10">
        Everything you need, intelligently connected
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              <div 
                className="feature-card h-full flex flex-col items-center text-center transition-all"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="fade-up-delay-3 mt-12 flex justify-center">
          <div 
            className="flex items-center gap-6 px-10 py-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
              boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)',
            }}
          >
            <Brain className="w-10 h-10 text-white" />
            <div className="text-left">
              <div className="text-white font-bold text-xl">AI learns from your data</div>
              <div className="text-white/80">Predictions improve over time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
