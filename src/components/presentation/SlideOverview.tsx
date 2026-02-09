import React from 'react';
import { X } from 'lucide-react';

interface Slide {
  id: number;
  component: React.ComponentType;
  title: string;
}

interface SlideOverviewProps {
  slides: Slide[];
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
    <div 
      className="fixed inset-0 z-50 p-10 overflow-auto"
      style={{
        background: 'linear-gradient(180deg, hsl(35 40% 96% / 0.98) 0%, hsl(35 50% 92% / 0.98) 100%)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex justify-between items-center mb-10">
        <h2 
          className="text-4xl font-bold"
          style={{
            background: 'linear-gradient(135deg, hsl(350 60% 25%), hsl(350 55% 40%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Slide Overview
        </h2>
        <button
          onClick={onClose}
          className="p-3 rounded-2xl transition-all hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
          aria-label="Close overview"
        >
          <X className="h-6 w-6 text-foreground" />
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              className={`group text-left rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.03] ${
                index === currentSlide ? 'ring-4 ring-primary ring-offset-4' : ''
              }`}
              style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                boxShadow: index === currentSlide 
                  ? '0 15px 50px rgba(122, 30, 45, 0.25)'
                  : '0 8px 30px rgba(0,0,0,0.08)',
              }}
            >
              <div className="h-full flex flex-col">
                {/* Slide title bar */}
                <div 
                  className="flex items-center gap-2 px-4 py-2 border-b"
                  style={{
                    background: index === currentSlide 
                      ? 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 55% 38%))'
                      : 'linear-gradient(135deg, hsl(35 40% 94%), hsl(35 50% 90%))',
                    borderColor: 'rgba(0,0,0,0.05)',
                  }}
                >
                  <span 
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                    style={{
                      background: index === currentSlide 
                        ? 'rgba(255,255,255,0.2)'
                        : 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                      color: 'white',
                    }}
                  >
                    {index + 1}
                  </span>
                  <span 
                    className="font-semibold text-sm truncate"
                    style={{
                      color: index === currentSlide ? 'white' : 'hsl(20 15% 30%)',
                    }}
                  >
                    {slide.title}
                  </span>
                </div>
                
                {/* Mini slide preview */}
                <div 
                  className="flex-1 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsl(35 40% 96%), hsl(35 50% 94%))',
                  }}
                >
                  <div 
                    className="absolute inset-0 origin-top-left"
                    style={{
                      transform: 'scale(0.18)',
                      width: '555%',
                      height: '555%',
                      pointerEvents: 'none',
                    }}
                  >
                    <div className="slide-container bg-background" style={{ position: 'relative' }}>
                      <SlideComponent />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Hint */}
      <div className="mt-10 text-center">
        <p 
          className="inline-block px-6 py-3 rounded-full text-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
            color: 'hsl(20 10% 45%)',
          }}
        >
          Click a slide to navigate • Press Esc to close
        </p>
      </div>
    </div>
  );
};
