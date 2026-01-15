import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Shuffle, X } from "lucide-react";
import { carModels } from "@/app/data/mockData";
import { useState } from "react";

interface RandomCarFeatureProps {
  onNavigate: (page: string, id: string) => void;
}

export function RandomCarFeature({ onNavigate }: RandomCarFeatureProps) {
  const [randomCar, setRandomCar] = useState<typeof carModels[0] | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomCar = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const random = carModels[Math.floor(Math.random() * carModels.length)];
      setRandomCar(random);
      setIsAnimating(false);
    }, 500);
  };

  if (!randomCar) {
    return (
      <Card className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <Shuffle className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Random Car Discovery</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Not sure where to start? Let us surprise you with a random car from our database.
        </p>
        <Button size="lg" className="gap-2" onClick={generateRandomCar}>
          <Shuffle className="h-4 w-4" />
          Discover Random Car
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3"
        onClick={() => setRandomCar(null)}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}>
        <div className="flex items-center gap-2 mb-4">
          <Shuffle className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold">Your Random Discovery</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="aspect-[16/10] rounded-lg overflow-hidden bg-muted">
            <ImageWithFallback
              src={`https://source.unsplash.com/800x600/?${encodeURIComponent(randomCar.image)}`}
              alt={`${randomCar.manufacturer} ${randomCar.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-sm text-muted-foreground mb-1">{randomCar.manufacturer}</div>
            <h2 className="text-2xl font-bold mb-2">{randomCar.name}</h2>
            <p className="text-muted-foreground mb-4">{randomCar.tagline}</p>
            
            <div className="flex gap-2">
              <Button 
                onClick={() => onNavigate("model", randomCar.id)}
                className="flex-1"
              >
                View Details
              </Button>
              <Button 
                variant="outline" 
                onClick={generateRandomCar}
                className="gap-2"
              >
                <Shuffle className="h-4 w-4" />
                Another
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
