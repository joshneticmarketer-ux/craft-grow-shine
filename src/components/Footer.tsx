import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Heart
} from "lucide-react";
// Using Josh-Netic logo

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Website Design", href: "#services" },
        { label: "Sales Funnels", href: "#services" },
        { label: "CRO & SEO", href: "#services" },
        { label: "Brand Strategy", href: "#services" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Free Audit", href: "#contact" },
        { label: "Case Studies", href: "#portfolio" },
        { label: "Website Checklist", href: "#contact" },
        { label: "Design Tips", href: "/blog" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/f2c5f31a-2181-458b-8e77-473864bf4da2.png" 
                  alt="Josh-Netic Marketing Agency Logo" 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-2xl font-bold text-background">Joshnetic</span>
              </div>
            </div>
            
            <p className="text-background/70 leading-relaxed">
              Creating websites that don't just look amazing—they deliver measurable business results and drive real growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@joshnetic.agency</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors group"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-background/5 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-background/70">
              Get weekly design tips, conversion strategies, and business insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-0 focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-background/50">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-background/70">
            <span>© 2024 Joshnetic Agency. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in San Francisco</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-background/70 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;