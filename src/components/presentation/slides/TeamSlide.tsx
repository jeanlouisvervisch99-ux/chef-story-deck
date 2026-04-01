import React from 'react';
import { Search, Sparkles, ExternalLink, GraduationCap } from 'lucide-react';
import jeanLouisPhoto from '@/assets/jean-louis.jpg';
import pieterJanPhoto from '@/assets/pieter-jan.png';

const team = [
  {
    name: "Jean-Louis",
    role: "Co-Founder",
    title: "The Business Architect",
    photo: jeanLouisPhoto,
    current: "Currently at Finch Capital",
    education: "MS Economics @ KU Leuven & Global Commerce @ UVA/Esade",
    link: "https://www.linkedin.com/in/jean-louis-vervisch-083218219/",
    linkLabel: "LinkedIn",
    gradient: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(350 50% 40%))',
  },
  {
    name: "Pieter-Jan",
    role: "Co-Founder",
    title: "The Systems Thinker",
    photo: pieterJanPhoto,
    current: "Currently at Amplifino",
    education: "MS Civil Engineering & Philosophy @ KU Leuven",
    link: "https://jobs.elindus.be/meet-the-team-amplifino",
    linkLabel: "Team Page",
    gradient: 'linear-gradient(135deg, hsl(25 80% 55%), hsl(38 85% 55%))',
  }
];

export const TeamSlide: React.FC = () => {
  return (
    <div className="slide">
      <h2 className="slide-title fade-up">Founder-Market Fit</h2>
      
      <div className="slide-content">
        <div className="flex justify-center gap-14 mb-10">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="fade-up flex-1 max-w-sm"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, opacity: 0 }}
            >
              <div 
                className="p-6 rounded-3xl h-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div 
                    className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{ boxShadow: '0 10px 30px rgba(122, 30, 45, 0.2)' }}
                  >
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1" style={{
                      background: 'linear-gradient(135deg, hsl(20 15% 15%), hsl(350 60% 30%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>{member.name}</h3>
                    <div className="text-sm font-semibold text-muted-foreground">{member.role}</div>
                    <div className="text-sm font-bold mt-1" style={{ color: 'hsl(350 60% 30%)' }}>{member.title}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 mb-2 text-sm font-semibold" style={{ color: 'hsl(25 80% 55%)' }}>
                  <span>{member.current}</span>
                </div>
                <div className="flex items-start gap-2 mb-4 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{member.education}</span>
                </div>
                
                <a 
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  style={{ background: member.gradient, color: 'white' }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {member.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CPO Search */}
        <div className="fade-up-delay-3 max-w-2xl mx-auto">
          <div className="p-5 rounded-3xl relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
            backdropFilter: 'blur(20px)',
            border: '2px solid hsl(350 60% 30% / 0.2)',
          }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                background: 'linear-gradient(135deg, hsl(280 50% 60%), hsl(280 40% 50%))',
              }}>
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold" style={{
                  background: 'linear-gradient(135deg, hsl(350 60% 30%), hsl(280 50% 60%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Strategic Search: CPO</span>
                <span className="text-sm text-muted-foreground ml-2">Hospitality + Tech background</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};