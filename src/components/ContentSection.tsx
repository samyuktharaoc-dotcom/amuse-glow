import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContentCard from "./ContentCard";
import { Filter, Search } from "lucide-react";
import moviePlaceholder from "@/assets/movie-placeholder.jpg";
import musicPlaceholder from "@/assets/music-placeholder.jpg";
import gamePlaceholder from "@/assets/game-placeholder.jpg";

interface ContentSectionProps {
  title: string;
  type: "movie" | "tv" | "music" | "game" | "event";
  id: string;
}

const ContentSection = ({ title, type, id }: ContentSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Mock data - in a real app, this would come from an API
  const mockContent = [
    {
      id: "1",
      title: type === "movie" ? "Cyber Dreams" : type === "music" ? "Neon Nights" : type === "game" ? "Digital Warrior" : "Future Festival",
      image: type === "music" ? musicPlaceholder : type === "game" ? gamePlaceholder : moviePlaceholder,
      rating: 8.5,
      year: "2024",
      genre: type === "movie" ? "Sci-Fi" : type === "music" ? "Electronic" : type === "game" ? "Action" : "Music",
      description: `An exciting ${type} that pushes the boundaries of entertainment with stunning visuals and immersive storytelling.`,
      type
    },
    {
      id: "2", 
      title: type === "movie" ? "Quantum Reality" : type === "music" ? "Electric Soul" : type === "game" ? "Space Odyssey" : "Tech Summit",
      image: type === "music" ? musicPlaceholder : type === "game" ? gamePlaceholder : moviePlaceholder,
      rating: 9.2,
      year: "2024",
      genre: type === "movie" ? "Action" : type === "music" ? "Synthwave" : type === "game" ? "Adventure" : "Technology",
      description: `A groundbreaking ${type} experience that combines cutting-edge technology with compelling narratives.`,
      type
    },
    {
      id: "3",
      title: type === "movie" ? "Neural Network" : type === "music" ? "Cosmic Beats" : type === "game" ? "Mech Revolution" : "Art Expo",
      image: type === "music" ? musicPlaceholder : type === "game" ? gamePlaceholder : moviePlaceholder,
      rating: 7.8,
      year: "2023",
      genre: type === "movie" ? "Thriller" : type === "music" ? "Ambient" : type === "game" ? "Strategy" : "Art",
      description: `A captivating ${type} that explores the intersection of humanity and technology in the digital age.`,
      type
    },
    {
      id: "4",
      title: type === "movie" ? "Virtual Horizon" : type === "music" ? "Binary Dreams" : type === "game" ? "Cyber Quest" : "Innovation Day",
      image: type === "music" ? musicPlaceholder : type === "game" ? gamePlaceholder : moviePlaceholder,
      rating: 8.1,
      year: "2023",
      genre: type === "movie" ? "Drama" : type === "music" ? "Techno" : type === "game" ? "RPG" : "Business",
      description: `An innovative ${type} that showcases the future of digital entertainment and immersive experiences.`,
      type
    }
  ];

  const filteredContent = mockContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "all" || item.genre.toLowerCase() === selectedGenre.toLowerCase();
    const matchesYear = selectedYear === "all" || item.year === selectedYear;
    
    return matchesSearch && matchesGenre && matchesYear;
  });

  const genres = ["all", "Sci-Fi", "Action", "Drama", "Thriller", "Electronic", "Synthwave", "Ambient", "Techno", "Adventure", "Strategy", "RPG", "Music", "Technology", "Art", "Business"];
  const years = ["all", "2024", "2023", "2022", "2021"];

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest and greatest {type}s curated just for you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={`Search ${type}s...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/50 border-muted"
              />
            </div>
            
            <div className="flex gap-2 items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-32 bg-muted/50">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre === "all" ? "All Genres" : genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-24 bg-muted/50">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === "all" ? "All" : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ContentCard {...item} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            Load More {title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;