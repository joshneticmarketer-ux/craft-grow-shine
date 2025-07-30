import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  TrendingUp, 
  Zap, 
  Palette, 
  BarChart3, 
  Rocket,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom websites that look stunning and convert visitors into customers.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile-First"
      ],
      price: "Starting at $2,997",
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Sales Funnel Creation",
      description: "Complete sales funnels designed to maximize conversions and revenue.",
      features: [
        "Landing Pages",
        "Email Sequences",
        "Payment Integration",
        "A/B Testing"
      ],
      price: "Starting at $1,997",
      popular: true,
    },
    {
      icon: Zap,
      title: "Conversion Rate Optimization",
      description: "Data-driven improvements that turn more visitors into paying customers.",
      features: [
        "UX Audit",
        "Heat Map Analysis",
        "Split Testing",
        "Performance Reports"
      ],
      price: "Starting at $997",
      popular: false,
    },
    {
      icon: Palette,
      title: "Brand & UI/UX Strategy",
      description: "Complete brand identity and user experience design that stands out.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "UI/UX Design",
        "Style Guide"
      ],
      price: "Starting at $1,497",
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We dive deep into your business goals and target audience."
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Create a detailed roadmap and wireframes for your project."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Bring your vision to life with pixel-perfect execution."
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "Go live and continuously improve based on real data."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent">
            <Rocket className="h-4 w-4" />
            <span>Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Services That
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Scale Your Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From stunning websites to conversion-optimized funnels, I provide everything you need to dominate your market online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={service.title} 
                  className={`relative p-6 border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up group ${
                    service.popular ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center pt-4 border-t border-border">
                  <div className="text-lg font-bold text-foreground">{service.price}</div>
                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    size="sm" 
                    className="w-full mt-3 group"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground">My Proven Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} 
                   className="text-center space-y-4 animate-fade-in-up"
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6 animate-fade-in">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg">
                <BarChart3 className="h-5 w-5 mr-2" />
                Free Strategy Call
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;