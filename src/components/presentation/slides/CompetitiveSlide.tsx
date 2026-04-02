import React from 'react';
import { ChefHat, Sparkles, TrendingUp, FileText, ShoppingCart } from 'lucide-react';

const groups = [
  {
    label: 'Validates Our Model',
    icon: TrendingUp,
    color: 'hsl(160 50% 45%)',
    competitors: [
      { name: 'MarginEdge', geo: 'US', desc: '10K+ locations. Invoice-first + margin intelligence. Not in Europe.' },
    ],
    insight: 'Their playbook validates this approach.',
  },
  {
    label: 'Adjacent Invoice / AP Players',
    icon: FileText,
    color: 'hsl(25 80% 55%)',
    competitors: [
      { name: 'Plate IQ', geo: 'US', desc: 'Acquired by Toast. US-only, no EU presence.' },
      { name: 'Libeo', geo: 'FR', desc: 'AP automation for SMEs. €20M+ raised. Not restaurant-specific.' },
      { name: 'Dext', geo: 'UK', desc: 'General invoice scanning for accountants. No ingredient mapping.' },
      { name: 'Exact / Yuki', geo: 'NL/BE', desc: 'Bookkeeping invoice processing. No food cost intelligence.' },
    ],
    insight: 'They process invoices for accounting — not operations.',
  },
  {
    label: 'Strategic Threat',
    icon: ShoppingCart,
    color: 'hsl(350 60% 30%)',
    competitors: [
      { name: 'Choco', geo: 'DE', desc: 'Owns supplier ordering. Strong distribution. Messaging-first, not analytics.' },
    ],
    insight: 'Risk if they add analytics — but today, no margin intelligence.',
  },
];

export const CompetitiveSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Competitive Landscape</h2>
      <p className="fade-up-delay-1 text-xl text-muted-foreground mb-6">
        Ingredient-level intelligence + operational decisions — <span className="font-bold text-primary">not bookkeeping, not messaging, not POS</span>
      </p>

      <div className="slide-content">
        <div className="grid grid-cols-3 gap-4 fade-up-delay-2">
          {groups.map((group, gi) => (
            <div
              key={group.label}
              className="rounded-2xl overflow-hidden fade-up"
              style={{
                animationDelay: `${0.2 + gi * 0.12}s`,
                opacity: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              }}
            >
              {/* Header strip */}
              <div className="h-1.5" style={{ background: group.color }} />

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: group.color }}
                  >
                    <group.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                    {group.label}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.competitors.map((c) => (
                    <div key={c.name}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground">{c.name}</span>
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                          style={{ background: `${group.color}15`, color: group.color }}
                        >
                          {c.geo}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-snug mt-0.5">{c.desc}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-3 px-3 py-2 rounded-lg text-xs font-medium text-foreground/80"
                  style={{ background: `${group.color}08` }}
                >
                  {group.insight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also‑relevant row */}
        <div className="fade-up-delay-3 mt-4 flex justify-center gap-3">
          {[
            { name: 'Apicbase', sub: 'F&B Mgmt · BE' },
            { name: 'Alpa', sub: 'Finance · UK' },
            { name: 'YourBI', sub: 'Analytics · NL' },
          ].map((c) => (
            <span
              key={c.name}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.8)',
              }}
            >
              {c.name} <span className="text-muted-foreground/50">· {c.sub}</span>
            </span>
          ))}
        </div>

        <div className="fade-up-delay-3 mt-4 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(122, 30, 45, 0.1), rgba(217, 119, 87, 0.1))',
            }}
          >
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4 text-primary" />
              <span
                className="font-bold text-xs"
                style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(25 80% 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Chef
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Ingredient-level intelligence from day one — no POS, no integrations, just invoices.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
