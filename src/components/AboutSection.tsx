import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Coffee, Users, Zap, Target } from "lucide-react";
import alexHeadshot from "@/assets/alex-morgan-headshot.jpg";

const AboutSection = () => {
  const achievements = [
    { icon: Award, label: "5+ Years Experience", value: "150+ Projects" },
    { icon: Users, label: "Happy Clients", value: "100% Satisfaction" },
    { icon: Target, label: "Conversion Expert", value: "300% Avg. Boost" },
    { icon: Zap, label: "Fast Delivery", value: "On-Time Always" },
  ];

  const skills = [
    { name: "Web Design", level: 95 },
    { name: "UX/UI Strategy", level: 90 },
    { name: "Conversion Optimization", level: 92 },
    { name: "Sales Funnels", level: 88 },
    { name: "Figma/Design Tools", level: 94 },
    { name: "Frontend Development", level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 text-sm font-medium text-accent">
            <BookOpen className="h-4 w-4" />
            <span>About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Design That
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Converts</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Hi, I'm Alex Morgan 👋
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web designer and digital strategist who believes that beautiful design should always serve a purpose—driving real business results.
                </p>
                
                <p>
                  Over the past 5+ years, I've helped 150+ businesses transform their online presence with websites that don't just look amazing, but actually convert visitors into customers. My approach combines aesthetic excellence with data-driven strategy.
                </p>
                
                <p>
                  When I'm not crafting pixel-perfect designs, you'll find me analyzing conversion data, staying up-to-date with the latest design trends, or enjoying a good coffee while sketching new ideas.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Core Expertise</h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                <Coffee className="h-5 w-5 mr-2" />
                Let's Grab Coffee & Chat
              </Button>
              <Button variant="outline" size="lg">
                Download My Resume
              </Button>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={alexHeadshot}
                  alt="Alex Morgan - Web Designer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              </div>
              
              {/* Floating Achievement */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-elegant animate-scale-in delay-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={achievement.label} 
                      className="p-4 text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{achievement.value}</div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </Card>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">Certified & Trusted By:</p>
              <div className="flex justify-center items-center space-x-6 opacity-60">
                <div className="text-sm font-semibold">Google Analytics</div>
                <div className="text-sm font-semibold">Figma Expert</div>
                <div className="text-sm font-semibold">Webflow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;