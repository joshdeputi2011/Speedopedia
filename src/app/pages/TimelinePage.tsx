import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Calendar,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

interface TimelinePageProps {
  onNavigate: (page: string, id?: string) => void;
}

interface TimelineEvent {
  year: number;
  decade: string;
  title: string;
  description: string;
  category: "car" | "engine" | "design" | "milestone";
  image: string;
  impact: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: 1886,
    decade: "1880s",
    title: "Benz Patent-Motorwagen",
    description: "The world's first practical automobile powered by an internal combustion engine",
    category: "milestone",
    image: "vintage automobile 1886",
    impact: "Birth of the automobile"
  },
  {
    year: 1908,
    decade: "1900s",
    title: "Ford Model T",
    description: "Mass production revolutionizes the automotive industry",
    category: "car",
    image: "ford model t vintage",
    impact: "Made cars affordable for everyone"
  },
  {
    year: 1934,
    decade: "1930s",
    title: "Citroën Traction Avant",
    description: "First mass-production front-wheel drive car",
    category: "design",
    image: "citroen vintage car",
    impact: "Pioneered FWD engineering"
  },
  {
    year: 1948,
    decade: "1940s",
    title: "Porsche 356",
    description: "Birth of the Porsche brand and rear-engine sports car philosophy",
    category: "car",
    image: "porsche 356 classic",
    impact: "Founded a legendary sports car dynasty"
  },
  {
    year: 1961,
    decade: "1960s",
    title: "Jaguar E-Type Debut",
    description: "Enzo Ferrari called it 'the most beautiful car ever made'",
    category: "design",
    image: "jaguar e-type classic",
    impact: "Redefined automotive beauty"
  },
  {
    year: 1964,
    decade: "1960s",
    title: "Porsche 911 & Ford Mustang",
    description: "Two icons launched in the same year, defining their respective genres",
    category: "car",
    image: "classic sports car",
    impact: "Sports car and pony car legends born"
  },
  {
    year: 1973,
    decade: "1970s",
    title: "Oil Crisis Impact",
    description: "Fuel efficiency becomes priority, Japanese manufacturers rise",
    category: "milestone",
    image: "1970s fuel economy car",
    impact: "Shift toward efficiency engineering"
  },
  {
    year: 1989,
    decade: "1980s",
    title: "Mazda MX-5 Miata Launch",
    description: "Revived the affordable roadster segment",
    category: "car",
    image: "mazda miata classic red",
    impact: "Best-selling two-seat sports car ever"
  },
  {
    year: 1989,
    decade: "1980s",
    title: "Honda VTEC Technology",
    description: "Variable valve timing revolutionizes engine performance",
    category: "engine",
    image: "honda engine technology",
    impact: "High RPM without sacrificing efficiency"
  },
  {
    year: 1997,
    decade: "1990s",
    title: "Toyota Prius",
    description: "World's first mass-produced hybrid vehicle",
    category: "milestone",
    image: "toyota prius hybrid",
    impact: "Pioneered hybrid technology"
  },
  {
    year: 2012,
    decade: "2010s",
    title: "Tesla Model S",
    description: "Luxury electric vehicle proves EVs can be desirable and practical",
    category: "milestone",
    image: "electric luxury sedan",
    impact: "Accelerated EV adoption globally"
  },
  {
    year: 2020,
    decade: "2020s",
    title: "Electric Performance Era",
    description: "Electric hypercars and performance vehicles dominate development",
    category: "milestone",
    image: "electric supercar future",
    impact: "Performance meets sustainability"
  }
];

export function TimelinePage({ onNavigate }: TimelinePageProps) {
  const [selectedDecade, setSelectedDecade] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const decades = ["All", "1880s", "1900s", "1930s", "1940s", "1960s", "1970s", "1980s", "1990s", "2010s", "2020s"];
  const categories = ["All", "Car", "Engine", "Design", "Milestone"];

  const filteredEvents = timelineData.filter(event => {
    const matchesDecade = selectedDecade === "all" || event.decade === selectedDecade;
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory.toLowerCase();
    return matchesDecade && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "engine": return <Zap className="h-4 w-4" />;
      case "design": return <Award className="h-4 w-4" />;
      case "milestone": return <TrendingUp className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "engine": return "text-yellow-500";
      case "design": return "text-purple-500";
      case "milestone": return "text-[var(--racing-red)]";
      default: return "text-blue-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 speed-title italic">
            Automotive Timeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key moments that shaped automotive history
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Decade Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Decade</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {decades.map((decade) => (
                <Button
                  key={decade}
                  variant={selectedDecade === decade.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDecade(decade.toLowerCase())}
                  className="whitespace-nowrap"
                >
                  {decade}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Category</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {/* Events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-6 w-4 h-4 bg-[var(--racing-red)] rounded-full border-4 border-background z-10 hidden md:block" />

                {/* Event Card */}
                <Card className="md:ml-20 overflow-hidden hover:shadow-lg dark:hover:shadow-white/10 transition-all shadow-sm dark:shadow-white/5">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="aspect-[4/3] md:aspect-auto bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/800x600/?${encodeURIComponent(event.image)}`}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6">
                      {/* Year and Category */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-[var(--racing-red)] speed-title">
                          {event.year}
                        </span>
                        <Badge 
                          variant="secondary" 
                          className={`flex items-center gap-1 ${getCategoryColor(event.category)}`}
                        >
                          {getCategoryIcon(event.category)}
                          {event.category.toUpperCase()}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      {/* Impact */}
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-[var(--racing-red)] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase">Impact</span>
                            <p className="text-sm font-semibold">{event.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No events found for the selected filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
