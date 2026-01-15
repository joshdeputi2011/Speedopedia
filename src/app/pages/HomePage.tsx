import { SearchBar } from "@/app/components/SearchBar";
import { CarCard } from "@/app/components/CarCard";
import { RandomCarFeature } from "@/app/components/RandomCarFeature";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Factory, 
  Clock, 
  Car, 
  Cog, 
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";
import { carModels, historicCars, engineeringLegends } from "@/app/data/mockData";

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    { icon: Factory, label: "Browse by Manufacturer", count: "150+" },
    { icon: Clock, label: "Browse by Era", count: "10 decades" },
    { icon: Car, label: "Browse by Body Style", count: "25+ types" },
    { icon: Cog, label: "Browse by Engine Type", count: "All configs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Speedometer Background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background border-b border-border">
        {/* Speedometer Animation Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="speedometer-gauge"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight speed-title">
              Every Car Ever Made
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete encyclopedia for enthusiasts, engineers, and learners.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <SearchBar 
              large 
              placeholder="Search any car, brand, engine, or era..."
              onSearch={(query) => console.log("Searching:", query)}
            />
          </div>

          {/* Category Shortcuts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index}
                onClick={() => {
                  if (category.label.includes("Manufacturer")) {
                    onNavigate("manufacturers");
                  } else if (category.label.includes("Era")) {
                    onNavigate("timeline");
                  } else {
                    onNavigate("explore");
                  }
                }}
                className="p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer group border-border bg-card/50 backdrop-blur shadow-sm dark:shadow-white/5"
              >
                <category.icon className="h-8 w-8 mb-3 text-[var(--racing-red)] group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Cars That Changed History */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 speed-title italic">
              Cars That Changed History
            </h2>
            <p className="text-muted-foreground">
              The automobiles that shaped our world
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicCars.map((car, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer group border-border shadow-sm dark:shadow-white/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${encodeURIComponent(car.image)}`}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[var(--racing-red)]" />
                    <span className="text-xs font-semibold text-[var(--racing-red)]">HISTORIC</span>
                  </div>
                  <h3 className="font-semibold mb-1">{car.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{car.year}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{car.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Engineering Legends */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 speed-title italic">
              Engineering Legends
            </h2>
            <p className="text-muted-foreground">
              The visionaries behind automotive innovation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {engineeringLegends.map((legend, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer group border-border shadow-sm dark:shadow-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-[var(--racing-red)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{legend.name}</h3>
                    <p className="text-sm text-muted-foreground">{legend.contribution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Models */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 speed-title italic">
              Iconic Models
            </h2>
            <p className="text-muted-foreground">
              The cars enthusiasts never stop talking about
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carModels.slice(0, 6).map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                onClick={() => onNavigate("model", car.id)}
              />
            ))}
          </div>
        </section>

        {/* Random Discovery */}
        <section>
          <RandomCarFeature onNavigate={onNavigate} />
        </section>
      </div>
      
      {/* Speedometer Animation Styles */}
      <style>{`
        @keyframes speedometer-sweep {
          0% { transform: rotate(-45deg); }
          50% { transform: rotate(225deg); }
          100% { transform: rotate(-45deg); }
        }
        
        .speedometer-gauge {
          position: absolute;
          top: -20%;
          left: 50%;
          width: 600px;
          height: 600px;
          margin-left: -300px;
          border: 4px solid var(--racing-red);
          border-radius: 50%;
          opacity: 0.3;
        }
        
        .speedometer-gauge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 45%;
          background: var(--racing-red);
          transform-origin: bottom center;
          animation: speedometer-sweep 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}