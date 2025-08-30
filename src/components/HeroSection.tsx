import { Button } from "@/components/ui/button";
import { Play, Search } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Entertainment Hub Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Entertainment
            <br />
            <span className="text-neon-blue">Reimagined</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover movies, TV shows, music, games, and events all in one place. 
            Experience entertainment like never before with our cutting-edge platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
              <Play className="mr-2 h-6 w-6" />
              Start Exploring
            </Button>
            <Button variant="neon" size="lg" className="px-8 py-6 text-lg">
              <Search className="mr-2 h-6 w-6" />
              Search Content
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "50K+", label: "Movies & Shows" },
              { number: "1M+", label: "Songs" },
              { number: "10K+", label: "Games" },
              { number: "500+", label: "Live Events" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`glass-effect p-6 rounded-xl text-center animate-slide-up hover:neon-glow-purple transition-all duration-300 ${
                  index % 2 === 0 ? 'animate-float' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-neon-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-purple/10 blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-neon-blue/10 blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-neon-pink/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;