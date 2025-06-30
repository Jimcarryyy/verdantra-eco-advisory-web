
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Impact = () => {
  const impacts = [
    {
      sector: "Renewable Energy",
      outcome: "Facilitated $480M in clean energy investments",
      metric: "1.2M tons CO₂ avoided annually",
      description: "Guided three major utilities through renewable energy portfolio transitions"
    },
    {
      sector: "Financial Services",
      outcome: "Reduced Scope 3 Emissions by 40%",
      metric: "ESG score improved from C to A-",
      description: "Comprehensive supply chain decarbonization program for global investment firm"
    },
    {
      sector: "Technology",
      outcome: "Achieved Carbon Neutrality 3 Years Early",
      metric: "Net-zero by 2027 pathway established",
      description: "End-to-end sustainability transformation for Fortune 500 tech company"
    },
    {
      sector: "Manufacturing",
      outcome: "35% Operational Efficiency Improvement",
      metric: "$12M annual cost savings",
      description: "Circular economy implementation across global manufacturing operations"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            Impact Highlights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real results from our partnerships with industry leaders across sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <Card 
              key={impact.sector}
              className="glass shadow-glass hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                    {impact.sector}
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-sage-500 to-teal-500 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-serif text-pine-900 mb-2">
                  {impact.outcome}
                </CardTitle>
                <div className="text-lg font-semibold text-teal-700">
                  {impact.metric}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-sage-50 to-teal-50 px-12 py-8 rounded-2xl glass shadow-glass">
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-700 mb-2">$2.3B</div>
              <div className="text-slate-600">Sustainable Capital Advised</div>
            </div>
            <div className="w-px h-16 bg-sage-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-2">4.8M</div>
              <div className="text-slate-600">Tons CO₂ Reduced</div>
            </div>
            <div className="w-px h-16 bg-sage-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pine-700 mb-2">50+</div>
              <div className="text-slate-600">Organizations Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
