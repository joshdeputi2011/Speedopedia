import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { CarCard } from "@/app/components/CarCard";
import { 
  MapPin, 
  Calendar, 
  Factory,
  Filter,
  Grid3x3,
  List
} from "lucide-react";
import { manufacturers, carModels } from "@/app/data/mockData";
import { useState } from "react";

interface ManufacturerPageProps {
  manufacturerId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function ManufacturerPage({ manufacturerId, onNavigate }: ManufacturerPageProps) {
  const manufacturer = manufacturers.find(m => m.id === manufacturerId);
  const models = carModels.filter(m => m.manufacturerId === manufacturerId);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterCategory, setFilterCategory] = useState("all");

  if (!manufacturer) {
    return <div className="p-8 text-center">Manufacturer not found</div>;
  }

  const timeline = [
    { year: manufacturer.foundingYear, event: "Company Founded", milestone: true },
    { year: 1964, event: "First Iconic Model Released", milestone: true },
    { year: 1989, event: "Expansion into Global Markets", milestone: false },
    { year: 2019, event: "Electric Vehicle Initiative", milestone: true },
  ];

  const categories = ["All Models", "Sports Car", "Sedan", "SUV", "Electric"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => onNavigate("home")} className="cursor-pointer">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => onNavigate("manufacturers")} className="cursor-pointer">
                Manufacturers
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{manufacturer.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Brand Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[var(--racing-red)] flex items-center justify-center text-white font-bold text-3xl rounded">
                {manufacturer.logo}
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 speed-title">
                  {manufacturer.name}
                </h1>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {manufacturer.country}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    Founded {manufacturer.foundingYear}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Factory className="h-3 w-3 mr-1" />
                    {manufacturer.activeYears}
                  </Badge>
                </div>
              </div>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-muted/50 to-background shadow-sm dark:shadow-white/5">
              <h2 className="font-bold mb-3">Brand Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                {manufacturer.philosophy}
              </p>
            </Card>
          </div>

          <div>
            <Card className="p-6 shadow-sm dark:shadow-white/5">
              <h3 className="font-bold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Models</div>
                  <div className="text-2xl font-bold text-[var(--racing-red)]">{models.length}+</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Years Active</div>
                  <div className="text-2xl font-bold text-[var(--racing-red)]">
                    {new Date().getFullYear() - manufacturer.foundingYear}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Heritage</div>
                  <div className="text-2xl font-bold text-[var(--racing-red)]">{manufacturer.country}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 speed-title italic">Historical Timeline</h2>
          <Card className="p-6 shadow-sm dark:shadow-white/5">
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      event.milestone ? "bg-[var(--racing-red)]" : "bg-muted-foreground"
                    }`} />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold">{event.year}</span>
                      {event.milestone && (
                        <Badge variant="secondary" className="text-xs bg-[var(--racing-red)]/10 text-[var(--racing-red)]">Milestone</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Models Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold speed-title italic">All Models</h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filterCategory === category.toLowerCase().replace(" ", "-") ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category.toLowerCase().replace(" ", "-"))}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Models Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => (
                <CarCard 
                  key={model.id} 
                  car={model}
                  onClick={() => onNavigate("model", model.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {models.map((model) => (
                <Card 
                  key={model.id}
                  className="p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer shadow-sm dark:shadow-white/5"
                  onClick={() => onNavigate("model", model.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {model.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">
                          {model.firstYear}{model.lastYear ? `-${model.lastYear}` : "-Present"}
                        </Badge>
                        <Badge variant="secondary">{model.bodyStyle}</Badge>
                        <Badge variant="secondary" className="bg-[var(--racing-red)]/10 text-[var(--racing-red)]">{model.category}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}