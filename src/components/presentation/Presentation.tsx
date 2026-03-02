import React, { useState, useEffect, useCallback } from 'react';
import { SlideOverview } from './SlideOverview';
import { ProgressBar } from './ProgressBar';
import { NavigationControls } from './NavigationControls';
import { AnimatedBackground } from './AnimatedBackground';
import { TitleSlide } from './slides/TitleSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { FeaturesSlide } from './slides/FeaturesSlide';
import { CompetitiveSlide } from './slides/CompetitiveSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { ICPSlide } from './slides/ICPSlide';
import { MarketSlide } from './slides/MarketSlide';
import { ValueSlide } from './slides/ValueSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { TeamSlide } from './slides/TeamSlide';
import { ClosingSlide } from './slides/ClosingSlide';

const slides = [
  { id: 1, component: TitleSlide, title: 'Title' },
  { id: 2, component: ProblemSlide, title: 'Problem' },
  { id: 3, component: SolutionSlide, title: 'Solution' },
  { id: 4, component: FeaturesSlide, title: 'Product Features' },
  { id: 5, component: CompetitiveSlide, title: 'Competitive Moat' },
  { id: 6, component: BusinessModelSlide, title: 'Business Model' },
  { id: 7, component: ICPSlide, title: 'ICP & GTM' },
  { id: 8, component: MarketSlide, title: 'Market & Why Now' },
  { id: 9, component: ValueSlide, title: 'Value Creation' },
  { id: 10, component: RoadmapSlide, title: 'Roadmap' },
  { id: 11, component: TeamSlide, title: 'Team' },
  { id: 12, component: ClosingSlide, title: 'The Ask' },
];

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      setSlideKey(prev => prev + 1);
      setShowOverview(false);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          e.preventDefault();
          setShowOverview(prev => !prev);
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="slide-container bg-background">
      <AnimatedBackground />
      
      {showOverview ? (
        <SlideOverview
          slides={slides}
          currentSlide={currentSlide}
          onSelectSlide={goToSlide}
          onClose={() => setShowOverview(false)}
        />
      ) : (
        <>
          <div key={slideKey} className="slide-enter relative z-10">
            <CurrentSlideComponent />
          </div>
          <NavigationControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrev={prevSlide}
            onNext={nextSlide}
            onOverview={() => setShowOverview(true)}
          />
          <ProgressBar current={currentSlide} total={slides.length} />
        </>
      )}
    </div>
  );
};
