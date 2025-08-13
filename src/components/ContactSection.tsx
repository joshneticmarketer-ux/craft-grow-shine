import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  Coffee,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get a response within 24 hours",
      value: "hello@joshnetic.agency",
      action: "Send Email"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a free 30-min consultation",
      value: "calendly.com/alexmorgan",
      action: "Book Now"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick questions? Let's chat",
      value: "+16398165785",
      action: "Message Me"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects are completed within 2-6 weeks, depending on complexity and scope."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes! I work with clients worldwide and am available for calls across time zones."
    },
    {
      question: "What's included in your website packages?",
      answer: "All packages include responsive design, SEO optimization, performance optimization, and 30 days of support."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent-warm/10 rounded-full px-4 py-2 text-sm font-medium text-accent-warm">
            <Coffee className="h-4 w-4" />
            <span>Let's Work Together</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Transform Your Business?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together. Get started with a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 border-0 shadow-card animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Website Audit</h3>
                  <p className="text-muted-foreground">
                    Tell me about your project and I'll send you a personalized audit with actionable recommendations.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name *</label>
                      <Input placeholder="John" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name *</label>
                      <Input placeholder="Doe" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input type="email" placeholder="john@company.com" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Website URL</label>
                    <Input placeholder="https://yourwebsite.com" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Type</label>
                    <select className="w-full h-12 px-3 border border-input bg-background rounded-lg">
                      <option>Select a service...</option>
                      <option>Website Redesign</option>
                      <option>Sales Funnel</option>
                      <option>Landing Page</option>
                      <option>E-commerce Store</option>
                      <option>Conversion Optimization</option>
                      <option>Brand Identity</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Budget</label>
                    <select className="w-full h-12 px-3 border border-input bg-background rounded-lg">
                      <option>Select budget range...</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Details *</label>
                    <Textarea 
                      placeholder="Tell me about your business, goals, and what you're looking to achieve..."
                      className="min-h-32"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Get My Free Audit
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>I'll respond within 24 hours with your personalized audit</span>
                  </div>
                </form>
              </div>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 border-0 shadow-card">
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-xl font-bold text-foreground">Other Ways to Connect</h3>
              
              {contactMethods.map((method, index) => (
                <Card key={method.title} 
                      className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Lead Magnet */}
            <Card className="p-6 bg-gradient-primary text-white border-0 animate-scale-in">
              <div className="text-center space-y-4">
                <div className="p-3 bg-white/20 rounded-full w-fit mx-auto">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Free Website Checklist</h3>
                <p className="text-white/90 text-sm">
                  Get my 25-point website optimization checklist that's helped 100+ businesses increase conversions.
                </p>
                <Button variant="glass" size="lg" className="w-full">
                  Download Free Checklist
                </Button>
              </div>
            </Card>

            {/* Location & Hours */}
            <Card className="p-6 border-0 shadow-card animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">San Francisco, CA</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Available for projects worldwide</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p><strong>Meeting Hours:</strong> 9 AM - 6 PM PST</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;