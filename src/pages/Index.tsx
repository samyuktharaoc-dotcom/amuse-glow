import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <TrendingSection />
        
        <ContentSection 
          title="Featured Movies" 
          type="movie" 
          id="movies"
        />
        
        <ContentSection 
          title="TV Shows" 
          type="tv" 
          id="tv-shows"
        />
        
        <ContentSection 
          title="Music Collection" 
          type="music" 
          id="music"
        />
        
        <ContentSection 
          title="Gaming Hub" 
          type="game" 
          id="games"
        />
        
        <ContentSection 
          title="Live Events" 
          type="event" 
          id="events"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
