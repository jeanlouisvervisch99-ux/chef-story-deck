import React from 'react';
import { ChefHat, Mail, ArrowRight } from 'lucide-react';

export const ClosingSlide: React.FC = () => {
  return (
    <div className="slide flex flex-col items-center justify-center text-center">
      <div className="fade-up flex items-center gap-4 mb-6">
        <div className="p-4 bg-primary rounded-2xl">
          <ChefHat className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-6xl font-bold text-primary tracking-tight">Chef</h1>
      </div>
      
      <p className="fade-up-delay-1 text-3xl font-medium text-muted-foreground mb-8">
        The Manual for Your Restaurant
      </p>
      
      <div className="fade-up-delay-2 flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl mb-12">
        <Mail className="h-5 w-5" />
        <span className="text-lg font-medium">contact@chef.app</span>
      </div>
      
      <div className="fade-up-delay-3 flex items-center gap-2 text-xl text-foreground">
        <span>Let's cook together</span>
        <ArrowRight className="h-5 w-5 text-primary" />
      </div>
      
      <div className="fade-up-delay-3 mt-16 text-sm text-muted-foreground">
        <p>Use arrow keys to navigate • Press Esc for slide overview</p>
      </div>
    </div>
  );
};
