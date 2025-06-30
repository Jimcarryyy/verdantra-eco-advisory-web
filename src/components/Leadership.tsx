
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const Leadership = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const leaders = [
    {
      name: "Sarah Chen",
      title: "Founding Partner & CEO",
      credentials: "Former Goldman Sachs, UN Certified ESG Advisor",
      bio: "20+ years in sustainable finance with expertise in ESG integration and climate risk assessment. Led $5B+ in green bond issuances.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c8c2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Marcus Rodriguez",
      title: "Managing Director, Climate Strategy",
      credentials: "PhD Environmental Economics, Former McKinsey Principal",
      bio: "Expert in carbon markets and climate transition strategies. Authored 15+ peer-reviewed papers on carbon pricing mechanisms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Dr. Priya Patel",
      title: "Head of ESG Research",
      credentials: "CFA, Former Blackrock Senior Analyst",
      bio: "Specializes in ESG data analytics and corporate governance frameworks. Pioneer in AI-driven sustainability metrics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "James Thomson",
      title: "Senior Partner, Green Technology",
      credentials: "Former Tesla VP, MIT Energy Systems Graduate",
      bio: "Technology innovation strategist with focus on cleantech investments and renewable energy systems integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-teal-50 via-white to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            Leadership & Experts
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our team combines deep financial expertise with sustainability leadership 
            to deliver transformational results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <Card 
              key={leader.name}
              className="glass shadow-glass hover:shadow-xl transition-all duration-500 border-0 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className={`w-full h-64 object-cover transition-all duration-500 ${
                    hoveredMember === index ? 'grayscale-0 scale-105' : 'grayscale'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-pine-900 mb-2">
                  {leader.name}
                </h3>
                <h4 className="text-sage-700 font-medium mb-2">
                  {leader.title}
                </h4>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                    {leader.credentials.split(',')[0]}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-sage-100 px-6 py-3 rounded-full">
            <span className="text-sage-700 font-medium">Combined Experience:</span>
            <span className="text-2xl font-bold text-sage-800">75+ Years</span>
          </div>
        </div>
      </div>
    </section>
  );
};
