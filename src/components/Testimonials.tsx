
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Verdantra's strategic guidance helped us achieve our net-zero commitments three years ahead of schedule while improving our bottom line.",
      author: "Chief Sustainability Officer",
      company: "Global Technology Firm",
      logo: "🌐"
    },
    {
      quote: "The ESG integration framework developed by their team transformed how we evaluate investments and manage risk across our portfolio.",
      author: "Managing Director",
      company: "Private Equity Fund",
      logo: "💼"
    },
    {
      quote: "Their carbon credit strategy not only offset our emissions but created a new revenue stream through innovative offset programs.",
      author: "Head of Environmental Strategy",
      company: "Fortune 500 Manufacturer",
      logo: "🏭"
    }
  ];

  const partners = [
    "UN Global Compact",
    "World Bank Group",
    "Climate Bonds Initiative",
    "CDP Worldwide",
    "Task Force on Climate-related Financial Disclosures",
    "Principles for Responsible Investment"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders to navigate the complex landscape of sustainable finance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass shadow-glass hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-6 opacity-20">"</div>
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{testimonial.logo}</div>
                  <div>
                    <div className="font-semibold text-pine-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sage-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-pine-900 mb-8">
            Trusted Partners & Affiliations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className="p-4 glass bg-white/60 rounded-lg shadow-glass hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-slate-700 font-medium text-sm">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
