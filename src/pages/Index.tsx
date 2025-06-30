
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Impact } from "@/components/Impact";
import { Leadership } from "@/components/Leadership";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sage-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Leadership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
