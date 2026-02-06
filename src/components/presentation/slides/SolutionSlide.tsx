import React from 'react';
import { CheckCircle2, Sparkles, Zap } from 'lucide-react';

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
        <div className="flex gap-16 items-center">
          {/* Left: Hero message */}
          <div className="flex-1 fade-up-delay-1">
            <div 
              className="text-5xl font-bold leading-tight mb-8"
              style={{
                background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              One platform to run your entire restaurant
            </div>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Chef consolidates every tool you need into a single, intelligent system that learns from your data.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="fade-up flex items-center gap-4"
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: 0 }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Visual card */}
          <div className="flex-1 fade-up-delay-2">
            <div 
              className="relative p-10 rounded-3xl overflow-hidden"
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
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-white/80" />
                  <span className="text-white/80 text-lg font-medium">AI-Powered</span>
                </div>
                
                <div className="text-6xl font-black text-white mb-4">
                  8+ Tools
                </div>
                <div className="text-2xl text-white/90 mb-8">
                  → 1 Platform
                </div>
                
                <div 
                  className="flex items-center gap-3 px-6 py-3 rounded-full w-fit"
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
          </div>
        </div>
      </div>
    </div>
  );
};
