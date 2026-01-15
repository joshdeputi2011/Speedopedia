import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { SearchBar } from "@/app/components/SearchBar";
import { CarCard } from "@/app/components/CarCard";
import { RandomCarFeature } from "@/app/components/RandomCarFeature";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Slider } from "@/app/components/ui/slider";
import {
  SlidersHorizontal,
  X,
  Grid3x3,
  List,
} from "lucide-react";
import { carModels } from "@/app/data/mockData";
import { useState } from "react";

interface ExplorePageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function ExplorePage({ onNavigate }: ExplorePageProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );
  const [yearRange, setYearRange] = useState([1960, 2024]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedBodyStyle, setSelectedBodyStyle] =
    useState("all");
  const [selectedDrivetrain, setSelectedDrivetrain] =
    useState("all");

  const countries = [
    "All Countries",
    "USA",
    "Germany",
    "Japan",
    "Italy",
    "UK",
  ];
  const bodyStyles = [
    "All Types",
    "Coupe",
    "Sedan",
    "Roadster",
    "SUV",
    "Convertible",
    "Hatchback",
  ];
  const drivetrains = ["All Types", "RWD", "FWD", "AWD", "4WD"];

  const filteredCars = carModels.filter((car) => {
    const inYearRange =
      car.firstYear >= yearRange[0] &&
      car.firstYear <= yearRange[1];
    return inYearRange;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 speed-title italic">
            Explore Cars
          </h1>
          <p className="text-muted-foreground">
            Filter and discover vehicles from our comprehensive
            database
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar placeholder="Search by name, manufacturer, engine..." />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground hidden sm:block">
              {filteredCars.length} results
            </div>
            <div className="flex gap-1 border border-border rounded-lg p-1">
              <Button
                variant={
                  viewMode === "grid" ? "secondary" : "ghost"
                }
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={
                  viewMode === "list" ? "secondary" : "ghost"
                }
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs"
                    onClick={() => {
                      setYearRange([1960, 2024]);
                      setSelectedCountry("all");
                      setSelectedBodyStyle("all");
                      setSelectedDrivetrain("all");
                    }}
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Country */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Country of Origin
                    </label>
                    <Select
                      value={selectedCountry}
                      onValueChange={setSelectedCountry}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country}
                            value={country
                              .toLowerCase()
                              .replace(" ", "-")}
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Year Range */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Production Years
                    </label>
                    <div className="px-2">
                      <Slider
                        min={1900}
                        max={2024}
                        step={1}
                        value={yearRange}
                        onValueChange={setYearRange}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{yearRange[0]}</span>
                        <span>{yearRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Style */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Body Style
                    </label>
                    <Select
                      value={selectedBodyStyle}
                      onValueChange={setSelectedBodyStyle}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {bodyStyles.map((style) => (
                          <SelectItem
                            key={style}
                            value={style
                              .toLowerCase()
                              .replace(" ", "-")}
                          >
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Drivetrain */}
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Drivetrain
                    </label>
                    <Select
                      value={selectedDrivetrain}
                      onValueChange={setSelectedDrivetrain}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select drivetrain" />
                      </SelectTrigger>
                      <SelectContent>
                        {drivetrains.map((drivetrain) => (
                          <SelectItem
                            key={drivetrain}
                            value={drivetrain
                              .toLowerCase()
                              .replace(" ", "-")}
                          >
                            {drivetrain}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Active Filters */}
                  {(selectedCountry !== "all" ||
                    selectedBodyStyle !== "all" ||
                    selectedDrivetrain !== "all" ||
                    yearRange[0] !== 1960 ||
                    yearRange[1] !== 2024) && (
                    <div className="pt-4 border-t border-border">
                      <div className="text-sm font-semibold mb-2">
                        Active Filters
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCountry !== "all" && (
                          <Badge
                            variant="secondary"
                            className="gap-1"
                          >
                            {selectedCountry}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() =>
                                setSelectedCountry("all")
                              }
                            />
                          </Badge>
                        )}
                        {selectedBodyStyle !== "all" && (
                          <Badge
                            variant="secondary"
                            className="gap-1"
                          >
                            {selectedBodyStyle}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() =>
                                setSelectedBodyStyle("all")
                              }
                            />
                          </Badge>
                        )}
                        {selectedDrivetrain !== "all" && (
                          <Badge
                            variant="secondary"
                            className="gap-1"
                          >
                            {selectedDrivetrain}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() =>
                                setSelectedDrivetrain("all")
                              }
                            />
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* Results */}
          <div
            className={
              showFilters ? "lg:col-span-3" : "lg:col-span-4"
            }
          >
            {/* Random Discovery Card */}
            <div className="mb-6">
              <RandomCarFeature onNavigate={onNavigate} />
            </div>

            {/* Car Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onClick={() => onNavigate("model", car.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCars.map((car) => (
                  <Card
                    key={car.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => onNavigate("model", car.id)}
                  >
                    <div className="flex gap-6">
                      <div className="w-48 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0 hidden sm:block">
                        <img
                          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(car.image)}`}
                          alt={`${car.manufacturer} ${car.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1">
                          {car.manufacturer}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {car.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {car.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">
                            {car.firstYear}
                            {car.lastYear
                              ? `-${car.lastYear}`
                              : "-Present"}
                          </Badge>
                          <Badge variant="secondary">
                            {car.bodyStyle}
                          </Badge>
                          <Badge variant="secondary">
                            {car.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}