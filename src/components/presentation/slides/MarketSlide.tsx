import React from 'react';

const marketData = [
  { label: 'TAM', value: '20K', description: 'Belgium restaurants (NACE)', percent: 100 },
  { label: 'SAM', value: '12K', description: '60% addressable', percent: 60 },
  { label: 'SOM', value: '1K', description: '5% target', percent: 5 },
];

export const MarketSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Market Opportunity</h2>
      <p className="slide-subtitle fade-up-delay-1">Belgium Focus → European Expansion</p>
      
      <div className="slide-content">
        <div className="flex gap-12 items-center">
          <div className="flex-1">
            <div className="space-y-6">
              {marketData.map((item, index) => (
                <div
                  key={item.label}
                  className="fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-primary font-bold text-2xl">{item.value}</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${item.percent}%`,
                        animation: 'chart-grow 1s ease-out forwards',
                        animationDelay: `${0.5 + index * 0.2}s`,
                        transformOrigin: 'left'
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 fade-up-delay-3">
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground text-center">
              <span className="text-lg font-medium opacity-80">Target ARR</span>
              <div className="text-6xl font-bold my-4">€4.8M</div>
              <div className="text-lg opacity-90">
                1,000 restaurants × €399/month
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-secondary/50 text-center">
              <span className="text-muted-foreground">With procurement & payment fees:</span>
              <p className="text-xl font-semibold text-primary">€6-8M potential</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
