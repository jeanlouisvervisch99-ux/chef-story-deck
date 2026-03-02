import React from 'react';
import { Brain, FileText, BookOpen, Truck, CreditCard, Users, Sparkles, Smartphone } from 'lucide-react';

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
  {
    icon: Users,
    title: "Workforce Optimization",
    description: "Smart scheduling & staff planning",
    color: 'hsl(210 60% 50%)',
  },
];

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Product Features</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Everything you need, intelligently connected
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up group"
              style={{ animationDelay: `${0.2 + index * 0.08}s`, opacity: 0 }}
            >
              <div 
                className="feature-card h-full flex flex-col items-center text-center transition-all"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom row: Hardware + AI + More to come */}
        <div className="fade-up-delay-3 mt-7 flex justify-center gap-4">
          <div 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <Smartphone className="w-6 h-6 text-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground text-sm">Works on any hardware</div>
              <div className="text-xs text-muted-foreground">Android, Apple, laptops, smartphones — zero lock-in</div>
            </div>
          </div>

          <div 
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
              boxShadow: '0 20px 60px rgba(122, 30, 45, 0.3)',
            }}
          >
            <Brain className="w-7 h-7 text-white" />
            <div className="text-left">
              <div className="text-white font-bold text-sm">AI learns from your data</div>
              <div className="text-white/80 text-xs">Predictions improve over time</div>
            </div>
          </div>
          
          <div 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <div className="text-left">
              <div className="font-bold text-foreground text-sm">More to come</div>
              <div className="text-xs text-muted-foreground">Evolving roadmap of modules</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
