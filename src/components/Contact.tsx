
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', inquiry: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-sage-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-pine-900 mb-6">
            Start Your Sustainability Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your organization's approach to ESG and climate strategy? 
            Let's discuss how we can help you achieve your sustainability goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="glass shadow-glass border-0">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-pine-900">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company / Organization
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What are you looking for? *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('inquiry', value)}>
                    <SelectTrigger className="border-sage-200 focus:border-sage-500 focus:ring-sage-500">
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="esg-reporting">ESG Reporting & Compliance</SelectItem>
                      <SelectItem value="carbon-strategy">Carbon Strategy & Offsetting</SelectItem>
                      <SelectItem value="green-investment">Green Investment Consulting</SelectItem>
                      <SelectItem value="sustainability-audit">Sustainability Audit</SelectItem>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    placeholder="Tell us about your sustainability goals and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage-500 hover:bg-sage-600 text-white py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="glass shadow-glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-pine-900 mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">hello@verdantra.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      💼
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">LinkedIn</div>
                      <div className="text-slate-600">@verdantra-advisory</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pine-100 rounded-lg flex items-center justify-center">
                      📅
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Schedule Call</div>
                      <div className="text-slate-600">calendly.com/verdantra</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass shadow-glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-pine-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Response Time</span>
                    <span className="font-medium text-sage-700">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-gradient-to-r from-sage-100 to-teal-100 rounded-2xl">
              <h4 className="text-xl font-serif font-bold text-pine-900 mb-2">
                Ready for a Strategy Call?
              </h4>
              <p className="text-slate-600 mb-4">
                Book a complimentary 30-minute consultation to discuss your sustainability goals.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
