import { Hexagon, Sun, Box, Layers, Droplets, Mountain } from "lucide-react";

export const productsData = [
  {
    id: 1,
    slug: "railway-ballast",
    name: "RAILWAY BALLAST",
    tag: "PREMIUM GRADE",
    description: "Precisely graded stone ballast meeting Indian Railway specifications for track bedding, drainage, and load distribution across mainline...",
    fullDescription: "Our premium railway ballast is strictly graded to meet the most rigorous Indian Railway specifications. Designed for maximum interlocking and rapid drainage, it provides an ultra-stable bed for heavy freight and high-speed mainline tracks.",
    applications: ["Railway track bedding", "High-speed rail lines", "Heavy freight corridors", "Drainage layers"],
    image: "/images/railway_ballast.png",
    icon: Hexagon
  },
  {
    id: 2,
    slug: "stone-aggregates",
    name: "STONE AGGREGATES",
    tag: "CONSTRUCTION",
    description: "Multi-grade crushed stone aggregates for concrete production, road construction, and structural foundations — available in 10mm,...",
    fullDescription: "Multi-grade crushed stone aggregates designed for high-strength concrete production, major road construction, and deep structural foundations. We offer precision sizes including 10mm, 20mm, and 40mm to suit exact engineering requirements.",
    applications: ["Concrete production", "Road construction", "Structural foundations", "Commercial building"],
    image: "/images/stone_aggregates.png",
    icon: Layers
  },
  {
    id: 3,
    slug: "crushed-stone",
    name: "CRUSHED STONE",
    tag: "INFRASTRUCTURE",
    description: "Angular, mechanically crushed stone with superior interlock properties for highway base layers, embankments, and heavy-duty industri...",
    fullDescription: "Highly angular, mechanically crushed stone featuring superior interlock properties. This material provides exceptional load-bearing capacity and is the preferred choice for national highway base layers, massive embankments, and heavy-duty industrial flooring.",
    applications: ["Highway base layers", "Embankments", "Industrial flooring", "Asphalt mixing"],
    image: "/images/crushed_stone.png",
    icon: Box
  },
  {
    id: 4,
    slug: "quarry-dust",
    name: "QUARRY DUST",
    tag: "FINE MATERIAL",
    description: "Manufactured stone dust and fines for use in brick production, plastering, and as controlled fill material in foundation and trenching operations.",
    fullDescription: "Manufactured stone dust and high-quality fines designed as a superior alternative to river sand. Ideal for use in premium brick production, smooth plastering, and as a highly compactable controlled fill material for foundation and trenching operations.",
    applications: ["Brick production", "Plastering", "Trench filling", "Paver block manufacturing"],
    image: "/images/quarry_dust.png",
    icon: Sun
  },
  {
    id: 5,
    slug: "infrastructure-aggregate",
    name: "INFRASTRUCTURE AGGREGATE",
    tag: "HEAVY-DUTY",
    description: "Engineered aggregate blends designed for national highway projects, airport runways, and heavy-load industrial infrastructure with strict I...",
    fullDescription: "Custom-engineered aggregate blends formulated specifically for mega-projects. Tested to endure immense stress, this aggregate is trusted for national highway projects, airport runways, and heavy-load industrial infrastructure requiring strict compliance.",
    applications: ["Airport runways", "National highways", "Heavy industrial parks", "Bridge abutments"],
    image: "/images/infrastructure_aggregate.png",
    icon: Droplets
  },
  {
    id: 6,
    slug: "mining-products",
    name: "MINING PRODUCTS",
    tag: "RAW MATERIAL",
    description: "Direct-from-quarry oversize stone, boulders, and riprap for mining support structures, erosion control, and marine/port construction...",
    fullDescription: "Direct-from-quarry oversize stone, massive boulders, and riprap. Sourced from the hardest strata of our reserves, these materials are essential for mining support structures, severe erosion control, and large-scale marine or port construction.",
    applications: ["Mining support structures", "Erosion control", "Marine construction", "Retaining walls"],
    image: "/images/mining_products.png",
    icon: Mountain
  },
];
