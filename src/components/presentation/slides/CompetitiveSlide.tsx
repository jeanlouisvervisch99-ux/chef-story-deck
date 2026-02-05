import React from 'react';
import { Check, X } from 'lucide-react';

const competitors = ['Toast', 'Allo', 'Lightspeed', 'SIDES', 'Chef'];
const features = [
  'POS Integration',
  'Inventory Management',
  'Reservations',
  'Procurement',
  'P&L Forecasting',
  'AI Menu Analysis',
  'Recipe Database',
  'Loyalty Program'
];

const coverage: Record<string, boolean[]> = {
  'Toast': [true, true, false, false, false, false, false, true],
  'Allo': [false, false, true, false, false, false, false, false],
  'Lightspeed': [true, true, true, false, false, false, false, true],
  'SIDES': [false, true, false, true, false, false, false, false],
  'Chef': [true, true, true, true, true, true, true, true],
};

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="slide-subtitle fade-up-delay-1">
        Competitors cover 3-4 areas. Chef covers <span className="text-primary font-bold">ALL</span>.
      </p>
      
      <div className="slide-content">
        <div className="fade-up-delay-2 overflow-hidden rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <th className="p-4 text-left font-semibold text-foreground">Feature</th>
                {competitors.map((comp) => (
                  <th 
                    key={comp} 
                    className={`p-4 text-center font-semibold ${comp === 'Chef' ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}
                  >
                    {comp}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fIndex) => (
                <tr key={feature} className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">{feature}</td>
                  {competitors.map((comp) => (
                    <td 
                      key={`${comp}-${feature}`} 
                      className={`p-4 text-center ${comp === 'Chef' ? 'bg-primary/5' : ''}`}
                    >
                      {coverage[comp][fIndex] ? (
                        <Check className={`h-5 w-5 mx-auto ${comp === 'Chef' ? 'text-primary' : 'text-green-600'}`} />
                      ) : (
                        <X className="h-5 w-5 mx-auto text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
