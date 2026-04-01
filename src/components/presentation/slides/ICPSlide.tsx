import React from 'react';
import { Store, Target, Handshake, ArrowRight, Users, Truck, Gift, Sparkles } from 'lucide-react';

export const ICPSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">ICP & Go-to-Market</h2>
      <p className="fade-up-delay-1 text-2xl text-muted-foreground mb-8">
        Narrow focus. Clear buyer. Direct sales.
      </p>
      
      <div className="slide-content">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: ICP */}
          <div>
            <div className="fade-up mb-6">
              <div 
                className="p-6 rounded-3xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'hsl(350 60% 30%)' }} />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'hsl(350 60% 30%)' }}>
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">Independent Bistros</div>
                    <div className="text-sm text-muted-foreground">Belgium — standalone restaurants</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">Buyer</div>
                      <div className="text-sm text-muted-foreground">Owner or head chef — the person who feels margin pain daily</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">Core Pain</div>
                      <div className="text-sm text-muted-foreground">No visibility into true dish-level profitability. Pricing based on gut, not data.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">Revenue Range</div>
                      <div className="text-sm text-muted-foreground">€300K–€1.5M annual revenue. 1–5 locations.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expansion targets */}
            <div className="fade-up-delay-2 p-4 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))',
              border: '1px solid rgba(255,255,255,0.4)',
            }}>
              <div className="text-sm font-semibold text-muted-foreground/70 mb-2">Future ICP Expansion</div>
              <div className="flex flex-wrap gap-2">
                {["Bistro groups", "University cafeterias", "Hotel F&B", "Fast-casual chains"].map(seg => (
                  <span key={seg} className="px-3 py-1 rounded-full text-xs font-medium" style={{
                    background: 'hsl(35 30% 90%)',
                    color: 'hsl(20 10% 50%)',
                  }}>{seg}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: GTM Strategy */}
          <div className="fade-up-delay-1">
            <h3 className="text-xl font-bold mb-5" style={{
              background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>How We Get to 50–100 Customers</h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(350 60% 30%)' }}>
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-foreground">Direct Field Sales</div>
                </div>
                <p className="text-sm text-muted-foreground">Door-to-door in key Belgian restaurant districts. Demo the product on their actual invoices — instant value proof.</p>
              </div>
              
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(25 80% 55%)' }}>
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-foreground">Wholesaler Partnerships</div>
                </div>
                <p className="text-sm text-muted-foreground">Partner with food wholesalers as a distribution channel. They introduce Chef to their restaurant clients.</p>
              </div>
              
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(160 50% 45%)' }}>
                    <Handshake className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-foreground">1-Month Free Trial</div>
                </div>
                <p className="text-sm text-muted-foreground">Zero friction onboarding. Scan invoices from day one. Auto-converts to paid after trial.</p>
              </div>

              {/* Tactical acquisition levers */}
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, hsl(25 80% 55% / 0.08), hsl(350 60% 30% / 0.08))',
                border: '1px solid hsl(25 80% 55% / 0.15)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(38 85% 55%)' }}>
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-foreground">Early Adopter Incentives</div>
                </div>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span><span className="font-semibold text-foreground">€100 onboarding voucher</span> — redeemable at hospitality suppliers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span><span className="font-semibold text-foreground">Referral bonus</span> — €100 credit for each restaurant referred</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span><span className="font-semibold text-foreground">Founding member pricing</span> — locked-in rate for first 50 customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
