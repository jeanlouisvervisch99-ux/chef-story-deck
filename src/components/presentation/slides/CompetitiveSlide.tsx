import React from 'react';
import { Sparkles, Target, Cpu, FileText, Users, MapPin } from 'lucide-react';

const categories = [
  {
    icon: Target,
    color: 'hsl(350 60% 30%)',
    title: 'Direct competitors',
    subtitle: 'AI-driven F&B operations',
    players: [
      { name: 'Nory', note: 'UK, US-focused' },
      { name: 'FoodOp', note: 'DK, hotel kitchens' },
      { name: 'Edify', note: 'UK, upmarket (Pret)' },
      { name: 'Haddock', note: 'ES' },
    ],
    takeaway: 'All early stage. None active in Belgium. All except Haddock target larger groups, not independents.',
  },
  {
    icon: Cpu,
    color: 'hsl(25 80% 55%)',
    title: 'POS systems',
    subtitle: 'With embedded inventory modules',
    players: [
      { name: 'Lightspeed', note: '' },
      { name: 'Toast', note: '' },
      { name: 'Square', note: '' },
    ],
    takeaway: 'Inventory and costing modules are typically weak. Strong distribution, but not a true ingredient-intelligence layer.',
  },
  {
    icon: FileText,
    color: 'hsl(220 60% 50%)',
    title: 'Generic invoice processing',
    subtitle: 'Horizontal AP/scanning tools',
    players: [
      { name: 'Dext', note: '' },
      { name: 'Libeo', note: '' },
      { name: 'Basware', note: '' },
    ],
    takeaway: 'Structurally limited for restaurants. Without the recipe and ingredient data layer, the output is unusable for margin or forecasting.',
  },
  {
    icon: Users,
    color: 'hsl(160 50% 45%)',
    title: 'Workforce management',
    subtitle: 'Adjacent, not competing',
    players: [
      { name: 'Nory', note: '(also direct)' },
      { name: 'Fourth', note: '' },
      { name: 'Planday', note: '' },
    ],
    takeaway: 'Solve a different operator problem. Often complementary to Chef rather than competitive.',
  },
];

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-xl text-muted-foreground mb-6">
        Less crowded than it looks — <span className="font-bold text-primary">a clear white space in Belgium and across independents</span>
      </p>

      <div className="slide-content">
        <div className="grid grid-cols-2 gap-5">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className="fade-up p-5 rounded-2xl"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                opacity: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: cat.color }}
                >
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-base leading-tight">{cat.title}</div>
                  <div className="text-xs text-muted-foreground">{cat.subtitle}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {cat.players.map(p => (
                  <span
                    key={p.name}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${cat.color}15`,
                      color: cat.color,
                    }}
                  >
                    {p.name}{p.note ? ` · ${p.note}` : ''}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {cat.takeaway}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-up-delay-3 mt-5 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
              boxShadow: '0 10px 30px rgba(122, 30, 45, 0.25)',
            }}
          >
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              White space: Belgium + independent restaurants — no direct competitor is here
            </span>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
