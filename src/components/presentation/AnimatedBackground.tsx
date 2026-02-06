import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-radial-warm" />
      
      {/* Animated blobs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, hsl(350 70% 75%), hsl(25 80% 80%))',
          top: '-10%',
          left: '20%',
          animation: 'blob 15s infinite',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, hsl(280 50% 80%), hsl(350 70% 75%))',
          top: '30%',
          right: '10%',
          animation: 'blob 18s infinite 3s',
        }}
      />
      <div 
        className="absolute w-[450px] h-[450px] rounded-full opacity-35 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, hsl(35 85% 75%), hsl(25 80% 80%))',
          bottom: '10%',
          left: '30%',
          animation: 'blob 20s infinite 6s',
        }}
      />
      
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
