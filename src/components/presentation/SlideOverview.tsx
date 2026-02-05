import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideInfo {
  id: number;
  title: string;
  component: React.FC;
}

interface SlideOverviewProps {
  slides: SlideInfo[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideOverview: React.FC<SlideOverviewProps> = ({
  slides,
  currentSlide,
  onSelectSlide,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-background z-50 overflow-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Slide Overview</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => onSelectSlide(index)}
            className={cn(
              "relative aspect-video rounded-lg border-2 overflow-hidden transition-all hover:scale-105 hover:shadow-lg bg-secondary/50",
              currentSlide === index
                ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary/30">{slide.id}</span>
                <p className="text-sm font-medium text-foreground mt-1">{slide.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <p className="text-center text-muted-foreground mt-8 text-sm">
        Press <kbd className="px-2 py-1 bg-secondary rounded text-xs">Esc</kbd> to close or click a slide to navigate
      </p>
    </div>
  );
};
