
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pine-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sage-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-serif font-bold">Verdantra</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Leading ESG and climate finance advisory firm helping organizations 
              build sustainable strategies for a greener tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-sage-300 transition-colors">ESG Reporting</a></li>
              <li><a href="#services" className="hover:text-sage-300 transition-colors">Green Investment</a></li>
              <li><a href="#services" className="hover:text-sage-300 transition-colors">Carbon Strategy</a></li>
              <li><a href="#services" className="hover:text-sage-300 transition-colors">Sustainability Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-sage-300 transition-colors">About Us</a></li>
              <li><a href="#leadership" className="hover:text-sage-300 transition-colors">Leadership</a></li>
              <li><a href="#impact" className="hover:text-sage-300 transition-colors">Impact</a></li>
              <li><a href="#contact" className="hover:text-sage-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-300">
              <li>hello@verdantra.com</li>
              <li>LinkedIn: @verdantra-advisory</li>
              <li>New York, NY</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Verdantra Advisory. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-sage-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sage-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sage-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
