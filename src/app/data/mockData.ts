// Mock data for CarPedia

export interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  country: string;
  foundingYear: number;
  philosophy: string;
  activeYears: string;
}

export interface CarModel {
  id: string;
  name: string;
  manufacturerId: string;
  manufacturer: string;
  firstYear: number;
  lastYear: number | null;
  bodyStyle: string;
  category: string;
  image: string;
  tagline: string;
}

export interface CarVariant {
  id: string;
  modelId: string;
  name: string;
  year: number;
  generation: string;
  engine: string;
  displacement: string;
  power: string;
  torque: string;
  drivetrain: string;
  transmission: string;
  topSpeed: string;
  acceleration: string;
  weight: string;
  fuelType: string;
  engineLayout: string;
  cylinders: number;
  image: string;
  whyItMatters: string;
}

export const manufacturers: Manufacturer[] = [
  {
    id: "porsche",
    name: "Porsche",
    logo: "P",
    country: "Germany",
    foundingYear: 1931,
    philosophy: "Excellence was expected. Engineering passion meets timeless design.",
    activeYears: "1931-Present"
  },
  {
    id: "ferrari",
    name: "Ferrari",
    logo: "F",
    country: "Italy",
    foundingYear: 1939,
    philosophy: "The Prancing Horse. Racing pedigree in every curve.",
    activeYears: "1939-Present"
  },
  {
    id: "mazda",
    name: "Mazda",
    logo: "M",
    country: "Japan",
    foundingYear: 1920,
    philosophy: "Zoom-Zoom. Driver-focused engineering with rotary innovation.",
    activeYears: "1920-Present"
  },
  {
    id: "toyota",
    name: "Toyota",
    logo: "T",
    country: "Japan",
    foundingYear: 1937,
    philosophy: "Kaizen. Continuous improvement and legendary reliability.",
    activeYears: "1937-Present"
  },
  {
    id: "ford",
    name: "Ford",
    logo: "F",
    country: "USA",
    foundingYear: 1903,
    philosophy: "Go Further. American innovation from the Model T to modern performance.",
    activeYears: "1903-Present"
  },
  {
    id: "bmw",
    name: "BMW",
    logo: "B",
    country: "Germany",
    foundingYear: 1916,
    philosophy: "The Ultimate Driving Machine. Precision engineering for the enthusiast.",
    activeYears: "1916-Present"
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    logo: "L",
    country: "Italy",
    foundingYear: 1963,
    philosophy: "Expect the Unexpected. Italian aggression meets supercar drama.",
    activeYears: "1963-Present"
  },
  {
    id: "mclaren",
    name: "McLaren",
    logo: "M",
    country: "United Kingdom",
    foundingYear: 1963,
    philosophy: "Racing Heritage. Formula 1 technology for the road.",
    activeYears: "1963-Present"
  },
  {
    id: "honda",
    name: "Honda",
    logo: "H",
    country: "Japan",
    foundingYear: 1948,
    philosophy: "Power of Dreams. VTEC innovation meets reliability.",
    activeYears: "1948-Present"
  },
  {
    id: "audi",
    name: "Audi",
    logo: "A",
    country: "Germany",
    foundingYear: 1909,
    philosophy: "Vorsprung durch Technik. Advancement through technology.",
    activeYears: "1909-Present"
  }
];

export const carModels: CarModel[] = [
  {
    id: "911",
    name: "911",
    manufacturerId: "porsche",
    manufacturer: "Porsche",
    firstYear: 1964,
    lastYear: null,
    bodyStyle: "Coupe / Convertible",
    category: "Sports Car",
    image: "sports car red",
    tagline: "The icon. 60 years of rear-engine perfection."
  },
  {
    id: "miata",
    name: "MX-5 Miata",
    manufacturerId: "mazda",
    manufacturer: "Mazda",
    firstYear: 1989,
    lastYear: null,
    bodyStyle: "Roadster",
    category: "Sports Car",
    image: "convertible sports car",
    tagline: "Jinba Ittai. The world's best-selling two-seat roadster."
  },
  {
    id: "supra",
    name: "Supra",
    manufacturerId: "toyota",
    manufacturer: "Toyota",
    firstYear: 1978,
    lastYear: 2002,
    bodyStyle: "Coupe",
    category: "Sports Car",
    image: "japanese sports car",
    tagline: "The legend. 2JZ engine, endless tuning potential."
  },
  {
    id: "mustang",
    name: "Mustang",
    manufacturerId: "ford",
    manufacturer: "Ford",
    firstYear: 1964,
    lastYear: null,
    bodyStyle: "Coupe / Convertible",
    category: "Muscle Car",
    image: "american muscle car",
    tagline: "America's pony car. Raw V8 power and attitude."
  },
  {
    id: "m3",
    name: "M3",
    manufacturerId: "bmw",
    manufacturer: "BMW",
    firstYear: 1986,
    lastYear: null,
    bodyStyle: "Sedan / Coupe",
    category: "Sports Sedan",
    image: "performance sedan",
    tagline: "The ultimate sports sedan. Track precision, daily usability."
  },
  {
    id: "f40",
    name: "F40",
    manufacturerId: "ferrari",
    manufacturer: "Ferrari",
    firstYear: 1987,
    lastYear: 1992,
    bodyStyle: "Coupe",
    category: "Supercar",
    image: "red supercar",
    tagline: "Enzo's last masterpiece. Twin-turbo V8 perfection."
  }
];

export const carVariants: CarVariant[] = [
  {
    id: "911-992-carrera",
    modelId: "911",
    name: "911 Carrera (992)",
    year: 2024,
    generation: "992 (2019-Present)",
    engine: "Twin-Turbo Flat-6",
    displacement: "3.0L",
    power: "379 hp @ 6,500 rpm",
    torque: "331 lb-ft @ 1,950 rpm",
    drivetrain: "Rear-Wheel Drive",
    transmission: "8-Speed PDK",
    topSpeed: "182 mph",
    acceleration: "0-60 mph: 3.8s",
    weight: "3,354 lbs",
    fuelType: "Premium Gasoline",
    engineLayout: "Rear-mounted",
    cylinders: 6,
    image: "porsche 911 silver",
    whyItMatters: "The 992 generation refined the iconic 911 formula with modern turbocharged efficiency while maintaining the soul of the rear-engine legend. Wide body stance, advanced aerodynamics, and that unmistakable silhouette."
  },
  {
    id: "miata-nd-rf",
    modelId: "miata",
    name: "MX-5 Miata RF (ND)",
    year: 2024,
    generation: "ND (2016-Present)",
    engine: "Naturally Aspirated I4",
    displacement: "2.0L",
    power: "181 hp @ 7,000 rpm",
    torque: "151 lb-ft @ 4,000 rpm",
    drivetrain: "Rear-Wheel Drive",
    transmission: "6-Speed Manual",
    topSpeed: "135 mph",
    acceleration: "0-60 mph: 6.5s",
    weight: "2,453 lbs",
    fuelType: "Regular Gasoline",
    engineLayout: "Front-mounted",
    cylinders: 4,
    image: "mazda miata red",
    whyItMatters: "The ND brought back the lightweight philosophy with modern SKYACTIV technology. At just over 2,400 lbs, it's a pure driver's car with perfect 50/50 weight distribution. The RF adds a power-retractable hardtop for year-round fun."
  },
  {
    id: "supra-mk4",
    modelId: "supra",
    name: "Supra Turbo (A80)",
    year: 1998,
    generation: "A80 (1993-2002)",
    engine: "Twin-Turbo I6",
    displacement: "3.0L",
    power: "320 hp @ 5,600 rpm",
    torque: "315 lb-ft @ 4,000 rpm",
    drivetrain: "Rear-Wheel Drive",
    transmission: "6-Speed Manual",
    topSpeed: "155 mph (limited)",
    acceleration: "0-60 mph: 4.6s",
    weight: "3,505 lbs",
    fuelType: "Premium Gasoline",
    engineLayout: "Front-mounted",
    cylinders: 6,
    image: "toyota supra orange",
    whyItMatters: "The legendary 2JZ-GTE engine made this car a tuner icon. Cast-iron block capable of handling 1000+ hp with modifications. Sequential twin-turbos, factory torque, and bulletproof reliability created a tuning legend."
  }
];

export const historicCars = [
  {
    name: "Ford Model T",
    year: "1908-1927",
    impact: "Made cars affordable for the masses",
    image: "vintage ford model t"
  },
  {
    name: "Volkswagen Beetle",
    year: "1938-2003",
    impact: "The people's car, 21+ million sold",
    image: "classic volkswagen beetle"
  },
  {
    name: "Lamborghini Countach",
    year: "1974-1990",
    impact: "Defined the wedge-shaped supercar era",
    image: "lamborghini countach white"
  },
  {
    name: "McLaren F1",
    year: "1992-1998",
    impact: "Central driving position, 240 mph without turbos",
    image: "mclaren f1 silver"
  }
];

export const engineeringLegends = [
  {
    name: "Ferdinand Porsche",
    contribution: "VW Beetle, Porsche 911 foundation",
    image: "engineer portrait"
  },
  {
    name: "Enzo Ferrari",
    contribution: "Racing passion, Prancing Horse legacy",
    image: "engineer portrait"
  },
  {
    name: "Soichiro Honda",
    contribution: "VTEC innovation, F1 dominance",
    image: "engineer portrait"
  }
];