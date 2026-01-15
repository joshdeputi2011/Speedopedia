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
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Gauge, 
  Fuel, 
  Settings, 
  Zap,
  Weight,
  ArrowLeftRight,
  GitCompare,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { carVariants, carModels, manufacturers } from "@/app/data/mockData";

interface CarDetailPageProps {
  variantId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function CarDetailPage({ variantId, onNavigate }: CarDetailPageProps) {
  const variant = carVariants.find(v => v.id === variantId);
  const model = variant ? carModels.find(m => m.id === variant.modelId) : null;
  const manufacturer = model ? manufacturers.find(m => m.id === model.manufacturerId) : null;

  if (!variant || !model || !manufacturer) {
    return <div className="p-8 text-center">Car variant not found</div>;
  }

  const specs = [
    { label: "Engine", value: variant.engine, icon: Settings },
    { label: "Displacement", value: variant.displacement, icon: Gauge },
    { label: "Power", value: variant.power, icon: Zap },
    { label: "Torque", value: variant.torque, icon: TrendingUp },
    { label: "Drivetrain", value: variant.drivetrain, icon: ArrowLeftRight },
    { label: "Transmission", value: variant.transmission, icon: Settings },
    { label: "Fuel Type", value: variant.fuelType, icon: Fuel },
    { label: "Weight", value: variant.weight, icon: Weight },
  ];

  const performance = [
    { label: "Top Speed", value: variant.topSpeed },
    { label: "0-60 mph", value: variant.acceleration.replace("0-60 mph: ", "") },
  ];

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
              <BreadcrumbLink onClick={() => onNavigate("manufacturer", manufacturer.id)} className="cursor-pointer">
                {manufacturer.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => onNavigate("model", model.id)} className="cursor-pointer">
                {model.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{variant.generation}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
            <ImageWithFallback
              src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(variant.image)}`}
              alt={variant.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-sm text-muted-foreground mb-2">
              {manufacturer.name} {model.name}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{variant.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {variant.generation} • {variant.year}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {performance.map((stat, index) => (
                <Card key={index} className="p-4 bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </Card>
              ))}
            </div>

            <Button size="lg" className="gap-2">
              <GitCompare className="h-4 w-4" />
              Compare with Another Car
            </Button>
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <spec.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                  <div className="font-semibold text-sm truncate">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Engine Layout Visual */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Engine Layout</h2>
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-8">
                {/* Simple visual representation */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-3">
                    <Settings className="h-16 w-16 text-primary" />
                  </div>
                  <div className="font-semibold">{variant.engine}</div>
                  <div className="text-sm text-muted-foreground">{variant.engineLayout}</div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="px-3 py-2">
                    {variant.cylinders} Cylinders
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-2">
                    {variant.displacement}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-2">
                    {variant.fuelType}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Why This Car Matters */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Why This Car Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                {variant.whyItMatters}
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="font-bold mb-4">Performance Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Top Speed</span>
                <span className="font-semibold">{variant.topSpeed}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Acceleration</span>
                <span className="font-semibold">{variant.acceleration.replace("0-60 mph: ", "")}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Power-to-Weight</span>
                <span className="font-semibold">
                  {(parseInt(variant.power) / (parseInt(variant.weight.replace(/,/g, "")) / 1000)).toFixed(1)} hp/ton
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Drivetrain Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Layout</span>
                <span className="font-semibold">{variant.engineLayout}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Drive Type</span>
                <span className="font-semibold">{variant.drivetrain}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Transmission</span>
                <span className="font-semibold">{variant.transmission}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
