
export const About = () => {
  const values = [
    {
      title: "Transparency",
      description: "Clear, honest reporting and open communication in all our advisory relationships.",
      icon: "🔍"
    },
    {
      title: "Impact",
      description: "Measurable, meaningful change that creates long-term value for all stakeholders.",
      icon: "🌱"
    },
    {
      title: "Accountability",
      description: "Taking responsibility for outcomes and maintaining the highest ethical standards.",
      icon: "⚖️"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            About Verdantra
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded on the belief that sustainability is not a trend but our responsibility, 
            Verdantra guides organizations toward a future where profit and purpose align.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-up">
            <div className="bg-gradient-to-br from-sage-50 to-teal-50 p-8 rounded-2xl glass shadow-glass">
              <blockquote className="text-2xl md:text-3xl font-serif text-pine-800 mb-6 italic">
                "Sustainability is not a trend. It's our responsibility."
              </blockquote>
              <p className="text-lg text-slate-700 leading-relaxed">
                We partner with forward-thinking organizations to navigate the complexities 
                of ESG integration, climate risk management, and sustainable finance. Our 
                data-driven approach ensures that every strategy we develop delivers both 
                environmental impact and financial returns.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-sage-100 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold text-sage-700">50+</span>
                <span className="text-slate-700">Global Clients</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-teal-100 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold text-teal-700">$2.3B</span>
                <span className="text-slate-700">Sustainable Investments Advised</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-pine-100 px-6 py-3 rounded-full">
                <span className="text-2xl font-bold text-pine-700">85%</span>
                <span className="text-slate-700">Average ESG Score Improvement</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center p-8 glass bg-white/60 rounded-2xl shadow-glass hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-pine-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
