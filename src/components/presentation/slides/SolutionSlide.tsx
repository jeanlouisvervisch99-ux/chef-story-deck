import React from 'react';
import { CheckCircle2, Sparkles, Zap, Building2, BarChart3 } from 'lucide-react';

const features = [
  "All-in-one operations platform",
  "AI-powered menu analysis",
  "Real-time P&L forecasting",
  "Integrated procurement",
];

export const SolutionSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">The Solution</h2>
      
      <div className="slide-content">
        <div className="flex gap-12 items-center">
          {/* Left: Hero message */}
          <div className="flex-1 fade-up-delay-1">
            <div 
              className="text-4xl font-bold leading-tight mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              One platform to run your entire restaurant group
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Chef consolidates every tool into a single, intelligent system—especially valuable for groups with changing menus and decentralized operations.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="fade-up flex items-center gap-4"
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
                >
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Visual cards */}
          <div className="flex-1 fade-up-delay-2 space-y-4">
            {/* Main card */}
            <div 
              className="relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 30px 80px rgba(122, 30, 45, 0.3)',
              }}
            >
              {/* Shimmer overlay */}
              <div 
                className="absolute inset-0 shimmer opacity-20"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-7 h-7 text-white/80" />
                  <span className="text-white/80 text-lg font-medium">AI-Powered</span>
                </div>
                
                <div className="text-5xl font-black text-white mb-3">
                  8+ Tools
                </div>
                <div className="text-xl text-white/90 mb-6">
                  → 1 Platform
                </div>
                
                <div 
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full w-fit"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Zap className="w-5 h-5 text-chef-gold" />
                  <span className="text-white font-medium">Instant insights</span>
                </div>
              </div>
            </div>
            
            {/* Consolidated view highlight */}
            <div 
              className="p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
                }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground">Real-time consolidated view</div>
                <div className="text-sm text-muted-foreground">Group-level & individual restaurant insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
