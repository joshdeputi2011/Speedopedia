import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { 
  MapPin, 
  Calendar, 
  Search,
  SlidersHorizontal
} from "lucide-react";
import { manufacturers } from "@/app/data/mockData";
import { useState } from "react";

interface ManufacturersListPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function ManufacturersListPage({ onNavigate }: ManufacturersListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCountry, setFilterCountry] = useState("all");

  const countries = ["All", "Germany", "Italy", "Japan", "USA"];

  const filteredManufacturers = manufacturers.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.philosophy.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = filterCountry === "all" || m.country === filterCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 speed-title italic">
            Manufacturers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the brands that shaped automotive history
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search manufacturers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12"
            />
          </div>

          {/* Country Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {countries.map((country) => (
              <Button
                key={country}
                variant={filterCountry === country.toLowerCase() ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCountry(country.toLowerCase())}
                className="whitespace-nowrap"
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        {/* Manufacturers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredManufacturers.map((manufacturer) => (
            <Card
              key={manufacturer.id}
              className="p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer group shadow-sm dark:shadow-white/5"
              onClick={() => onNavigate("manufacturer", manufacturer.id)}
            >
              {/* Logo */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-[var(--racing-red)] flex items-center justify-center text-white font-bold text-2xl rounded group-hover:scale-110 transition-transform">
                  {manufacturer.logo}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {manufacturer.country}
                  </Badge>
                </div>
              </div>

              {/* Name and Info */}
              <h3 className="text-xl font-bold mb-2">{manufacturer.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Founded {manufacturer.foundingYear}
                </span>
              </div>

              {/* Philosophy */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {manufacturer.philosophy}
              </p>

              {/* Stats */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Years</span>
                  <span className="font-semibold text-[var(--racing-red)]">
                    {new Date().getFullYear() - manufacturer.foundingYear}+
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredManufacturers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No manufacturers found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
