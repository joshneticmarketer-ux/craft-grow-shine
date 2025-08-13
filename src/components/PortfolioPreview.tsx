import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
// Using uploaded reference image for all portfolio items

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "TechShop E-commerce",
      category: "E-commerce",
      image: "/lovable-uploads/3b30f5fb-f29d-4853-914d-ec574c04da85.png",
      description: "Complete e-commerce redesign that increased conversion rates by 340% and reduced cart abandonment by 60%.",
      metrics: {
        conversion: "+340%",
        revenue: "$2.1M",
        time: "3 months"
      },
      technologies: ["Shopify", "React", "TailwindCSS", "Figma"],
      featured: true
    },
    {
      id: 2,
      title: "CloudFlow SaaS Platform",
      category: "SaaS",
      image: "/lovable-uploads/3b30f5fb-f29d-4853-914d-ec574c04da85.png",
      description: "Modern SaaS dashboard design that improved user engagement by 250% and reduced churn by 45%.",
      metrics: {
        engagement: "+250%",
        churn: "-45%",
        time: "4 months"
      },
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      featured: true
    },
    {
      id: 3,
      title: "Bella Vista Restaurant",
      category: "Restaurant",
      image: "/lovable-uploads/3b30f5fb-f29d-4853-914d-ec574c04da85.png",
      description: "Elegant restaurant website with online reservations that increased bookings by 180%.",
      metrics: {
        bookings: "+180%",
        traffic: "+220%",
        time: "2 months"
      },
      technologies: ["WordPress", "Custom Theme", "OpenTable", "Analytics"],
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4" />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Portfolio That
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Drives Results</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project tells a story of transformation. Here are some websites that didn't just look good—they delivered measurable business impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.id} 
                  className={`group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                    project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="glass" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Case Study
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="outline" size="lg" className="group">
            <Users className="h-5 w-5 mr-2" />
            View All Projects
            <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;