import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b73c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Alex transformed our website and increased our conversion rate by 340%. The design is beautiful and the results speak for themselves. Highly recommended!",
      result: "+340% Conversions"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Alex was a game-changer. Our new sales funnel generated $500K in the first quarter alone. Professional, responsive, and delivers exceptional results.",
      result: "$500K Revenue"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "DesignPro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The attention to detail and user experience expertise is unmatched. Alex created a website that not only looks stunning but actually converts visitors into customers.",
      result: "+220% Traffic"
    },
    {
      id: 4,
      name: "David Park",
      role: "E-commerce Owner",
      company: "ShopSmart",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our e-commerce redesign exceeded all expectations. Cart abandonment dropped by 60% and our average order value increased significantly. Alex is a true professional.",
      result: "+180% AOV"
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent">
            <Star className="h-4 w-4" />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Clients Say About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Working With Me</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what business owners say about the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} 
                  className="p-8 border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 200}ms` }}>
              
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-warm fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Result Badge */}
              <div className="flex justify-center mb-6">
                <span className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                  {testimonial.result}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">$2.5M+</div>
            <div className="text-sm text-muted-foreground">Revenue Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;