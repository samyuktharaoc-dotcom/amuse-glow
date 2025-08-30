import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Play, Heart, Share2 } from "lucide-react";
import moviePlaceholder from "@/assets/movie-placeholder.jpg";
import musicPlaceholder from "@/assets/music-placeholder.jpg";
import gamePlaceholder from "@/assets/game-placeholder.jpg";

const TrendingSection = () => {
  const trendingItems = [
    {
      id: "1",
      title: "Quantum Reality",
      type: "Movie",
      image: moviePlaceholder,
      views: "2.4M",
      trend: "+145%",
      description: "A mind-bending sci-fi thriller that redefines reality"
    },
    {
      id: "2", 
      title: "Neon Nights",
      type: "Music",
      image: musicPlaceholder,
      views: "1.8M",
      trend: "+89%",
      description: "Electronic masterpiece from the future"
    },
    {
      id: "3",
      title: "Cyber Quest",
      type: "Game", 
      image: gamePlaceholder,
      views: "3.1M",
      trend: "+203%",
      description: "The most immersive RPG experience ever created"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-blue/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-8 w-8 text-neon-purple mr-3 animate-glow-pulse" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Trending Now
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The hottest content everyone's talking about
          </p>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trendingItems.map((item, index) => (
            <Card
              key={item.id}
              className={`content-card group overflow-hidden ${
                index === 0 ? 'lg:row-span-2' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    index === 0 ? 'h-64 lg:h-96' : 'h-48'
                  }`}
                />
                
                {/* Trending Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-neon-purple/90 text-white border-0 animate-glow-pulse">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {item.trend}
                  </Badge>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-black/70 text-white border-white/30">
                    {item.type}
                  </Badge>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="animate-scale-in">
                    <Play className="h-6 w-6 mr-2" />
                    {item.type === "Music" ? "Listen" : item.type === "Game" ? "Play" : "Watch"}
                  </Button>
                </div>

                {/* Bottom Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button variant="glass" size="icon" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="glass" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                    {item.views} views
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-neon-purple transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg" className="px-8 py-6">
            <TrendingUp className="h-5 w-5 mr-2" />
            Explore More Trending
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-neon-purple/5 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default TrendingSection;