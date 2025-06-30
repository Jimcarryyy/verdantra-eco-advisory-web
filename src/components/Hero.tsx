
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(163, 177, 138, 0.1) 0%, rgba(107, 144, 128, 0.05) 100%), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-pine-900 mb-6 text-balance">
            Investing in a{" "}
            <span className="bg-gradient-to-r from-sage-600 to-teal-600 bg-clip-text text-transparent">
              Greener Tomorrow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advising corporations, funds, and institutions in ESG strategy and sustainable finance for lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Explore Services
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sage-600" />
        </div>
      </div>
    </section>
  );
};
