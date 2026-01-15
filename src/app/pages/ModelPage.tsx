import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
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
  Calendar, 
  Car, 
  Gauge, 
  ChevronDown,
  Info,
  History,
  Wrench,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import { carModels, carVariants, manufacturers } from "@/app/data/mockData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/app/components/ui/collapsible";
import { useState } from "react";

interface ModelPageProps {
  modelId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function ModelPage({ modelId, onNavigate }: ModelPageProps) {
  const model = carModels.find(m => m.id === modelId);
  const manufacturer = manufacturers.find(m => m.id === model?.manufacturerId);
  const variants = carVariants.filter(v => v.modelId === modelId);
  const [deepGeekMode, setDeepGeekMode] = useState(false);

  if (!model || !manufacturer) {
    return <div className="p-8 text-center">Model not found</div>;
  }

  const generations = [
    { name: "992 (2019-Present)", years: "2019-Present", active: true },
    { name: "991 (2012-2019)", years: "2012-2019", active: false },
    { name: "997 (2004-2012)", years: "2004-2012", active: false },
    { name: "996 (1997-2004)", years: "1997-2004", active: false },
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
              <BreadcrumbPage>{model.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
            <ImageWithFallback
              src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(model.image)}`}
              alt={`${model.manufacturer} ${model.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-sm text-muted-foreground mb-2">{manufacturer.name}</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{model.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {model.tagline}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="px-3 py-1">
                <Calendar className="h-3 w-3 mr-1" />
                {model.firstYear}{model.lastYear ? `-${model.lastYear}` : "-Present"}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Car className="h-3 w-3 mr-1" />
                {model.bodyStyle}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Gauge className="h-3 w-3 mr-1" />
                {model.category}
              </Badge>
            </div>

            {/* Generation Selector */}
            <div className="mb-6">
              <label className="text-sm font-semibold mb-3 block">Select Generation</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {generations.map((gen, index) => (
                  <Button
                    key={index}
                    variant={gen.active ? "default" : "outline"}
                    className="justify-between"
                    onClick={() => onNavigate("detail", variants[0]?.id)}
                  >
                    <span>{gen.name}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="generations" className="gap-2">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">Generations</span>
            </TabsTrigger>
            <TabsTrigger value="engineering" className="gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Engineering</span>
            </TabsTrigger>
            <TabsTrigger value="issues" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Known Issues</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The {manufacturer.name} {model.name} represents one of the most iconic and enduring 
                  nameplate in automotive history. Since {model.firstYear}, this model has continuously 
                  evolved while maintaining its core philosophy and distinctive character.
                </p>
                
                <Collapsible open={deepGeekMode} onOpenChange={setDeepGeekMode}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="mt-4 gap-2">
                      {deepGeekMode ? "Simple Mode" : "Deep Geek Mode"}
                      <ChevronDown className={`h-4 w-4 transition-transform ${deepGeekMode ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="bg-muted/50 p-6 rounded-lg border border-border">
                      <h3 className="font-semibold mb-3">🤓 Technical Deep Dive</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        The engineering philosophy behind the {model.name} focuses on a unique combination 
                        of performance, reliability, and driver engagement. The platform architecture has been 
                        refined over decades, incorporating lessons from motorsports and real-world use.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Chassis rigidity improved by 45% from first generation</li>
                        <li>• Weight distribution optimized for handling dynamics</li>
                        <li>• Aerodynamic coefficient continuously refined across generations</li>
                        <li>• Suspension geometry derived from racing experience</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Cultural Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond its technical achievements, the {model.name} has become a cultural icon, 
                featured in countless films, video games, and automotive literature. It represents 
                the pinnacle of {model.category.toLowerCase()} design and engineering.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="generations" className="space-y-4">
            {generations.map((gen, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{gen.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{gen.years}</p>
                    <p className="text-muted-foreground text-sm">
                      {index === 0 && "The current generation brings modern technology while honoring heritage."}
                      {index === 1 && "Introduced turbocharging across the range with improved efficiency."}
                      {index === 2 && "Refined design language with enhanced performance capabilities."}
                      {index === 3 && "First water-cooled generation, controversial but innovative."}
                    </p>
                  </div>
                  <Button 
                    variant={gen.active ? "default" : "outline"}
                    onClick={() => onNavigate("detail", variants[0]?.id)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="engineering" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Engineering Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Powertrain</h4>
                  <p className="text-sm text-muted-foreground">
                    Evolution from naturally aspirated to turbocharged configurations, 
                    maintaining performance while improving efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Chassis & Suspension</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously refined platform with racing-derived geometry and 
                    adaptive damping systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Aerodynamics</h4>
                  <p className="text-sm text-muted-foreground">
                    Active aero elements and carefully sculpted bodywork balance 
                    downforce and efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern driver assistance systems integrated without compromising 
                    the pure driving experience.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Common Issues & Solutions</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">IMS Bearing (996/997.1)</h4>
                    <p className="text-sm text-muted-foreground">
                      Intermediate shaft bearing failure can lead to catastrophic engine damage. 
                      Preventive replacement recommended at service intervals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Coolant Pipe Corrosion</h4>
                    <p className="text-sm text-muted-foreground">
                      Early water-cooled models may experience coolant pipe deterioration. 
                      Regular inspection and replacement prevents leaks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">General Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      With proper maintenance, these vehicles are known for exceptional longevity 
                      and reliability. Follow factory service schedules strictly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
