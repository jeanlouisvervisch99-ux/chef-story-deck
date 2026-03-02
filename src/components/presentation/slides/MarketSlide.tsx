import React from 'react';
import { TrendingUp, MapPin, Info, Calculator, Zap, Target, Building2, UtensilsCrossed, BarChart3 } from 'lucide-react';

const marketData = [
{ label: 'TAM', value: '25K', description: 'Belgium restaurants (NACE 56.10)', percent: 100 },
{ label: 'SAM', value: '15K', description: '60% addressable', percent: 60 },
{ label: 'SOM', value: '1,250', description: '5% market share target', percent: 5 }];


const whyNowReasons = [
{
  icon: Target,
  title: "Displace Lightspeed in Belgium",
  description: "Lightspeed is a POS — not an operations platform. Restaurants need more than payments."
},
{
  icon: UtensilsCrossed,
  title: "Frequently changing menus",
  description: "Seasonal and daily-changing menus create cost chaos. Chef automates ingredient tracking and forecasting."
},
{
  icon: BarChart3,
  title: "Margin optimization is urgent",
  description: "Food costs up 15-20% since 2022. Restaurants can't afford guesswork on procurement and pricing."
},
{
  icon: Building2,
  title: "High-volume environments",
  description: "Cafeterias, campus dining, and chain groups need centralized control — no tool serves them today."
}];


export const MarketSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="flex items-center gap-3 mb-2 fade-up">
        <MapPin className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground font-medium">Belgium Focus → European Expansion</span>
      </div>
      <h2 className="slide-title fade-up">Market Opportunity</h2>
      
      <div className="slide-content">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: TAM/SAM/SOM + The Math */}
          <div>
            <div className="space-y-5 mb-6">
              {marketData.map((item, index) =>
              <div
                key={item.label}
                className="fade-up"
                style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}>
                
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                      className="text-sm font-bold px-3 py-1 rounded-lg"
                      style={{
                        background: index === 2 ?
                        'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))' :
                        'linear-gradient(135deg, hsl(35 40% 92%), hsl(35 50% 88%))',
                        color: index === 2 ? 'white' : 'hsl(350 60% 30%)'
                      }}>
                      
                        {item.label}
                      </span>
                      <span className="text-muted-foreground text-sm">{item.description}</span>
                    </div>
                    <span
                    className="text-2xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                    
                      {item.value}
                    </span>
                  </div>
                  <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, hsl(35 30% 90%), hsl(35 25% 88%))'
                  }}>
                  
                    <div
                    className="h-full rounded-full animate-chart-grow"
                    style={{
                      width: `${item.percent}%`,
                      background: index === 2 ?
                      'linear-gradient(90deg, hsl(350 60% 30%), hsl(25 80% 55%))' :
                      'linear-gradient(90deg, hsl(350 60% 40%), hsl(350 55% 50%))',
                      transformOrigin: 'left',
                      animationDelay: `${0.5 + index * 0.2}s`
                    }} />
                  
                  </div>
                </div>
              )}
            </div>
            
            {/* The Math */}
            <div
              className="fade-up-delay-2 p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 35%))',
                boxShadow: '0 25px 60px rgba(122, 30, 45, 0.3)'
              }}>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-white/80" />
                  <span className="text-sm font-medium text-white/80">The Math</span>
                </div>
                <div className="text-center mb-3">
                  <div className="text-3xl font-black text-white mb-1" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                    €200K+ MRR
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <span className="text-white/90 text-sm">1,250 restaurants × €169/mo</span>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3 text-center">
                  <div className="text-white/70 text-xs mb-1">With module upsell potential</div>
                  <div className="text-2xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                    → €3M+ ARR
                  </div>
                  <div className="text-white/60 text-xs mt-1">in Belgium alone</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Why Now */}
          <div className="fade-up-delay-1">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-accent" />
              <h3
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                
                Why Now?
              </h3>
            </div>
            
            <div className="space-y-3">
              {whyNowReasons.map((reason, index) =>
              <div
                key={reason.title}
                className="fade-up p-4 rounded-2xl"
                style={{
                  animationDelay: `${0.3 + index * 0.12}s`,
                  opacity: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
                }}>
                
                  <div className="flex items-start gap-3">
                    <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(350 60% 30%)' }}>
                    
                      <reason.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm mb-0.5">{reason.title}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

};