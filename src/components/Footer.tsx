import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Youtube, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Content",
      links: ["Movies", "TV Shows", "Music", "Games", "Events"]
    },
    {
      title: "Community", 
      links: ["Reviews", "Forums", "Blog", "Support", "Feedback"]
    },
    {
      title: "Account",
      links: ["Sign Up", "Log In", "Watchlist", "Favorites", "Settings"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Privacy", "Terms"]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest entertainment news and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-muted/50 border-muted"
            />
            <Button variant="hero">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              NEON
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your ultimate entertainment destination. Discover, explore, and enjoy 
              the best in movies, music, games, and live events.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover:text-neon-purple hover:bg-neon-purple/10 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-neon-purple transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 NEON Entertainment. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-neon-purple/10 blur-xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-neon-blue/10 blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
    </footer>
  );
};

export default Footer;