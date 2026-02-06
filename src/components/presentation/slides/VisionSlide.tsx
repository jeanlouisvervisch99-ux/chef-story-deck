import React from 'react';
import { Database, TrendingUp, Users, Building2, Award } from 'lucide-react';
const visionPoints = [{
  icon: Database,
  text: "Centralized restaurant intelligence"
}, {
  icon: TrendingUp,
  text: "Supplier demand predictions"
}, {
  icon: Users,
  text: "Chef trend analytics"
}];
export const VisionSlide: React.FC = () => {
  return <div className="slide">
      <div className="flex items-center gap-4 mb-4 fade-up">
        <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{
        background: 'linear-gradient(135deg, hsl(25 80% 55% / 0.2), hsl(350 60% 30% / 0.2))',
        color: 'hsl(350 60% 30%)'
      }}>
          Our Vision
        </div>
      </div>
      
      <h2 className="fade-up text-6xl font-black mb-6" style={{
      background: 'linear-gradient(135deg, hsl(350 60% 25%), hsl(25 80% 50%))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>Big Restaurant Data (BRD)</h2>
      
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-12 max-w-3xl">
        Become the data backbone connecting chefs, restaurants, and suppliers across Europe
      </p>
      
      <div className="slide-content">
        <div className="flex gap-10">
          {/* Left: Vision points */}
          <div className="flex-1 space-y-6">
            {visionPoints.map((point, index) => <div key={point.text} className="fade-up feature-card flex items-center gap-5" style={{
            animationDelay: `${0.3 + index * 0.15}s`,
            opacity: 0
          }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 55% 40%))'
            }}>
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xl font-semibold text-foreground">{point.text}</span>
              </div>)}
          </div>
          
          {/* Right: Partnership potential */}
          <div className="flex-1 fade-up-delay-3">
            <div className="p-8 rounded-3xl relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
          }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">Partnership Potential</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))'
              }}>
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground">Michelin Guide</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))'
              }}>
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground">Gault & Millau</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30% / 0.08), hsl(25 80% 55% / 0.08))'
              }}>
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground">Major Wholesalers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};