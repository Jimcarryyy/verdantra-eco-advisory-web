import { useState } from "react";
import { Globe, PieChart, Award, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "ESG Risk & Governance Reporting",
      description: "Comprehensive ESG assessment and reporting frameworks tailored to your industry.",
      icon: PieChart,
      details: [
        "Materiality assessments and stakeholder mapping",
        "ESG data collection and management systems",
        "Regulatory compliance and reporting (CSRD, TCFD, SEC)",
        "Third-party ESG rating optimization"
      ]
    },
    {
      title: "Green-Tech Investment Consulting",
      description: "Strategic guidance for sustainable technology investments and innovation.",
      icon: Globe,
      details: [
        "Clean technology due diligence and evaluation",
        "Impact measurement and verification",
        "Portfolio optimization for sustainability outcomes",
        "Market analysis and competitive positioning"
      ]
    },
    {
      title: "Carbon Credit Strategy",
      description: "End-to-end carbon management and offset program development.",
      icon: Award,
      details: [
        "Carbon footprint assessment and reduction planning",
        "Offset project identification and verification",
        "Carbon credit portfolio management",
        "Net-zero pathway development and implementation"
      ]
    },
    {
      title: "Corporate Sustainability Audits",
      description: "Holistic evaluation of sustainability practices and performance.",
      icon: FileCheck,
      details: [
        "Supply chain sustainability assessment",
        "Operational efficiency and waste reduction",
        "Sustainability strategy development",
        "Implementation roadmap and KPI tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-sage-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive advisory services designed to integrate sustainability 
            into every aspect of your business strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === index;
            
            return (
              <Card 
                key={service.title}
                className={`glass shadow-glass hover:shadow-xl transition-all duration-500 cursor-pointer border-0 ${
                  isExpanded ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setExpandedService(isExpanded ? null : index)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-sage-400 to-teal-500 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-pine-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent 
                  className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-sage-200 pt-4">
                    <h4 className="font-semibold text-pine-800 mb-3">Key Services Include:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
