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
        {slides.map((slide, index) => (
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
            <div className="p-6 h-full flex flex-col">
              <div 
                className="flex items-center gap-3 mb-3"
              >
                <span 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{
                    background: index === currentSlide 
                      ? 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))'
                      : 'linear-gradient(135deg, hsl(35 40% 92%), hsl(35 50% 88%))',
                    color: index === currentSlide ? 'white' : 'hsl(350 60% 30%)',
                  }}
                >
                  {index + 1}
                </span>
                <span 
                  className="font-bold text-lg"
                  style={{
                    color: index === currentSlide ? 'hsl(350 60% 30%)' : 'hsl(20 15% 30%)',
                  }}
                >
                  {slide.title}
                </span>
              </div>
              
              <div 
                className="flex-1 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(35 30% 96%), hsl(35 40% 94%))',
                }}
              />
            </div>
          </button>
        ))}
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
