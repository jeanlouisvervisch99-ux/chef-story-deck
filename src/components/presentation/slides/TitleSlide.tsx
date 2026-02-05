import React from 'react';
import { ChefHat } from 'lucide-react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center">
      <div className="fade-up flex items-center gap-4 mb-6">
        <div className="p-4 bg-primary rounded-2xl">
          <ChefHat className="h-16 w-16 text-primary-foreground" />
        </div>
        <h1 className="text-8xl font-bold text-primary tracking-tight">Chef</h1>
      </div>
      
      <p className="fade-up-delay-1 text-3xl font-medium text-muted-foreground mb-12">
        The Manual for Your Restaurant
      </p>
      
      <div className="fade-up-delay-2 flex gap-12 text-lg text-foreground/80">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-primary">JL</span>
          <span className="text-muted-foreground">CEO / COO</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-primary">PJ</span>
          <span className="text-muted-foreground">CTO</span>
        </div>
      </div>
      
      <div className="fade-up-delay-3 mt-16 px-6 py-3 bg-primary/10 rounded-full">
        <span className="text-sm font-medium text-primary">Pre-Seed Investment Opportunity</span>
      </div>
    </div>
  );
};
