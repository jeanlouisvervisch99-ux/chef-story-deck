import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-1.5"
      style={{
        background: 'linear-gradient(90deg, hsl(35 30% 92%), hsl(35 25% 90%))',
      }}
    >
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{ 
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(350 60% 30%), hsl(25 80% 55%))',
          boxShadow: '0 0 15px rgba(122, 30, 45, 0.4)',
        }}
      />
    </div>
  );
};
