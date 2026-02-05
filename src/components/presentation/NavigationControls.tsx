import React from 'react';
import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="fixed bottom-6 right-6 flex items-center gap-2 z-40">
      <Button
        variant="outline"
        size="icon"
        onClick={onOverview}
        className="bg-background/80 backdrop-blur-sm border-border hover:bg-secondary"
        title="Overview (Esc)"
      >
        <Grid3X3 className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-lg border border-border px-2 py-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="h-8 w-8"
          title="Previous (←)"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-sm font-medium px-2 min-w-[3rem] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="h-8 w-8"
          title="Next (→)"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
