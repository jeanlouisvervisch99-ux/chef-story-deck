import React from 'react';
import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOverview: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOverview,
}) => {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-3 rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      
      <button
        onClick={onOverview}
        className="p-3 rounded-2xl transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
        aria-label="Slide overview"
      >
        <Grid3X3 className="h-5 w-5 text-foreground" />
      </button>
      
      <div 
        className="px-4 py-2 rounded-xl font-semibold text-sm"
        style={{
          background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 38%))',
          color: 'white',
          boxShadow: '0 4px 20px rgba(122, 30, 45, 0.3)',
        }}
      >
        {currentSlide + 1} / {totalSlides}
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>
    </div>
  );
};
