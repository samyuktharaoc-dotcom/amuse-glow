import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Heart, Star } from "lucide-react";

interface ContentCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  year: string;
  genre: string;
  description: string;
  type: "movie" | "tv" | "music" | "game" | "event";
}

const ContentCard = ({ title, image, rating, year, genre, description, type }: ContentCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "movie": return "bg-neon-purple/20 text-neon-purple border-neon-purple/30";
      case "tv": return "bg-neon-blue/20 text-neon-blue border-neon-blue/30";
      case "music": return "bg-neon-pink/20 text-neon-pink border-neon-pink/30";
      case "game": return "bg-electric-green/20 text-electric-green border-electric-green/30";
      case "event": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <Card className="content-card group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <Button variant="hero" size="sm" className="mb-2">
            <Play className="h-4 w-4 mr-2" />
            {type === "music" ? "Listen" : type === "event" ? "Book" : "Watch"}
          </Button>
        </div>

        {/* Top Actions */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge className={getTypeColor(type)} variant="outline">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70 text-white h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-xs text-white font-medium">{rating}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-neon-purple transition-colors duration-200 leading-tight">
            {title}
          </h3>
          <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
            {year}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {genre}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default ContentCard;