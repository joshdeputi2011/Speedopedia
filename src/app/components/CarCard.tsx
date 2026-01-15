import { Card } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Calendar, Gauge } from "lucide-react";
import { CarModel } from "@/app/data/mockData";

interface CarCardProps {
  car: CarModel;
  onClick?: () => void;
}

export function CarCard({ car, onClick }: CarCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg dark:hover:shadow-white/10 transition-all cursor-pointer group border-border shadow-sm dark:shadow-white/5"
      onClick={onClick}
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <ImageWithFallback
          src={`https://source.unsplash.com/800x600/?${encodeURIComponent(car.image)}`}
          alt={`${car.manufacturer} ${car.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="text-xs text-muted-foreground mb-1">{car.manufacturer}</div>
            <h3 className="font-semibold">{car.name}</h3>
          </div>
          <div className="text-xs font-semibold text-[var(--racing-red)] px-2 py-1 bg-[var(--racing-red)]/10 rounded">
            {car.category}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {car.tagline}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{car.firstYear}{car.lastYear ? `-${car.lastYear}` : "-Present"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-3 w-3" />
            <span>{car.bodyStyle}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}