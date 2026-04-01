import React from 'react';
import { Store, Target, Handshake, Users, Truck, Gift } from 'lucide-react';

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
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'hsl(350 60% 30%)' }}>
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">Independent Bistros</div>
                    <div className="text-sm text-muted-foreground">Belgium — standalone restaurants</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: "Buyer", text: "Owner or head chef — the person who feels margin pain daily" },
                    { label: "Core Pain", text: "No visibility into dish-level profitability" },
                    { label: "Revenue", text: "€300K–€1.5M annual · 1–5 locations" },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">{item.label}: </span>
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Future expansion */}
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
            
            <div className="space-y-4">
              {[
                { icon: Users, color: 'hsl(350 60% 30%)', title: "Direct Field Sales", desc: "Door-to-door in key Belgian restaurant districts. Demo on their actual invoices." },
                { icon: Truck, color: 'hsl(25 80% 55%)', title: "Wholesaler Partnerships", desc: "Partner with food wholesalers to introduce Chef to their restaurant clients." },
                { icon: Handshake, color: 'hsl(160 50% 45%)', title: "1-Month Free Trial", desc: "Zero friction onboarding. Scan invoices from day one. Auto-converts to paid." },
              ].map(item => (
                <div key={item.title} className="p-4 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: item.color }}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="font-bold text-foreground text-sm">{item.title}</div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">{item.desc}</p>
                </div>
              ))}

              {/* Incentives - compact */}
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, hsl(25 80% 55% / 0.08), hsl(350 60% 30% / 0.08))',
                border: '1px solid hsl(25 80% 55% / 0.15)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(38 85% 55%)' }}>
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-bold text-foreground text-sm">Possible Early Adopter Incentives</div>
                </div>
                <div className="flex flex-wrap gap-2 pl-11">
                  {["€100 onboarding voucher", "Referral bonus", "Founding member pricing"].map(item => (
                    <span key={item} className="px-3 py-1 rounded-full text-xs font-medium" style={{
                      background: 'hsl(35 30% 90%)',
                      color: 'hsl(20 10% 45%)',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};