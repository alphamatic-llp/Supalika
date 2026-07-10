import { Hexagon, Sun, Box, Layers, Droplets, Mountain } from "lucide-react";

export const productsData = [
  // QUARRY BOULDERS/SLAB
  {
    id: 1,
    slug: "boulders-with-breaking",
    name: "Boulders with breaking",
    tag: "QUARRY BOULDERS",
    description: "High-quality boulders with breaking for heavy construction and foundational work.",
    fullDescription: "High-quality boulders with breaking sourced directly from our quarry. Ideal for heavy construction, foundation work, and landscaping where large, durable stones are required.",
    applications: ["Heavy construction", "Foundation work", "Retaining walls", "Landscaping"],
    image: "/images/products/prod_01_boulders_breaking.png",
    icon: Mountain
  },
  {
    id: 2,
    slug: "blasted-boulders",
    name: "Blasted boulders",
    tag: "QUARRY BOULDERS",
    description: "Direct-from-quarry blasted boulders for massive structures and severe erosion control.",
    fullDescription: "Direct-from-quarry blasted boulders. Sourced from the hardest strata of our reserves, these materials are essential for mining support structures, severe erosion control, and large-scale marine or port construction.",
    applications: ["Mining support structures", "Erosion control", "Marine construction", "Retaining walls"],
    image: "/images/products/prod_02_blasted_boulders.png",
    icon: Mountain
  },
  
  // CRUSHER AGGREGATES
  {
    id: 3,
    slug: "gsb",
    name: "GSB",
    tag: "CRUSHER AGGREGATES",
    description: "Granular Sub-Base (GSB) for road construction and highway base layers.",
    fullDescription: "Granular Sub-Base (GSB) featuring superior interlock properties. This material provides exceptional load-bearing capacity and is the preferred choice for national highway base layers, massive embankments, and heavy-duty industrial flooring.",
    applications: ["Highway base layers", "Embankments", "Industrial flooring", "Road construction"],
    image: "/images/products/prod_03_gsb_real.jpg",
    icon: Layers
  },
  {
    id: 4,
    slug: "40-60mm-railway-ballast",
    name: "40-60MM (Railway Ballast)",
    tag: "CRUSHER AGGREGATES",
    description: "Precisely graded stone ballast meeting Indian Railway specifications for track bedding.",
    fullDescription: "Our premium 40-60MM railway ballast is strictly graded to meet the most rigorous Indian Railway specifications. Designed for maximum interlocking and rapid drainage, it provides an ultra-stable bed for heavy freight and high-speed mainline tracks.",
    applications: ["Railway track bedding", "High-speed rail lines", "Heavy freight corridors", "Drainage layers"],
    image: "/images/products/prod_04_railway_ballast_real.jpg",
    icon: Hexagon
  },
  {
    id: 5,
    slug: "60mm-aggregate",
    name: "60MM",
    tag: "CRUSHER AGGREGATES",
    description: "60MM crushed stone aggregate for heavy infrastructure and deep foundations.",
    fullDescription: "60MM crushed stone aggregate designed for major road construction and deep structural foundations. Engineered for high load-bearing requirements.",
    applications: ["Deep foundations", "Heavy infrastructure", "Commercial building", "Drainage systems"],
    image: "/images/products/prod_05_60mm_real.jpg",
    icon: Box
  },
  {
    id: 6,
    slug: "40mm-aggregate",
    name: "40MM",
    tag: "CRUSHER AGGREGATES",
    description: "40MM multi-grade crushed stone aggregate for concrete production and foundations.",
    fullDescription: "40MM multi-grade crushed stone aggregate designed for high-strength concrete production, major road construction, and deep structural foundations. We offer precision sizes to suit exact engineering requirements.",
    applications: ["Concrete production", "Road construction", "Structural foundations", "Commercial building"],
    image: "/images/products/prod_06_40mm_real.jpg",
    icon: Box
  },
  {
    id: 7,
    slug: "40-60mm-aggregate",
    name: "40-60MM",
    tag: "CRUSHER AGGREGATES",
    description: "Custom-engineered 40-60MM aggregate blends for heavy-load industrial infrastructure.",
    fullDescription: "Custom-engineered 40-60MM aggregate blends formulated specifically for mega-projects. Tested to endure immense stress, this aggregate is trusted for heavy-load industrial infrastructure requiring strict compliance.",
    applications: ["Airport runways", "National highways", "Heavy industrial parks", "Bridge abutments"],
    image: "/images/products/prod_07_40_60mm_real.jpg",
    icon: Droplets
  },
  {
    id: 8,
    slug: "30-40mm-aggregate",
    name: "30-40MM",
    tag: "CRUSHER AGGREGATES",
    description: "30-40MM aggregate for general construction and structural concrete applications.",
    fullDescription: "High-quality 30-40MM aggregate providing excellent strength and durability for various construction needs, including residential and commercial structural concrete applications.",
    applications: ["Structural concrete", "General construction", "Paving", "Base materials"],
    image: "/images/products/prod_08_30_40mm_real.jpg",
    icon: Box
  },
  {
    id: 9,
    slug: "30mm-aggregate",
    name: "30MM",
    tag: "CRUSHER AGGREGATES",
    description: "Precision 30MM crushed stone aggregate for specialized concrete and road sub-base.",
    fullDescription: "Precision 30MM crushed stone aggregate. It offers the perfect balance of interlocking capabilities and strength, making it ideal for specialized concrete mixtures and robust road sub-bases.",
    applications: ["Specialized concrete", "Road sub-base", "Drainage", "Commercial foundations"],
    image: "/images/products/prod_09_30mm_real.jpg",
    icon: Box
  },
  {
    id: 10,
    slug: "20mm-aggregate",
    name: "20MM",
    tag: "CRUSHER AGGREGATES",
    description: "Standard 20MM crushed stone aggregate, widely used for RCC (Reinforced Cement Concrete).",
    fullDescription: "The industry standard 20MM crushed stone aggregate. It is the primary choice for RCC (Reinforced Cement Concrete) in residential and commercial buildings, ensuring maximum strength and longevity.",
    applications: ["RCC (Reinforced Cement Concrete)", "Slab construction", "Pillars and beams", "General building"],
    image: "/images/products/prod_10_20mm_real.jpg",
    icon: Box
  },
  {
    id: 11,
    slug: "10mm-aggregate",
    name: "10MM",
    tag: "CRUSHER AGGREGATES",
    description: "10MM fine crushed stone aggregate for specialized concrete mixtures and finishing work.",
    fullDescription: "10MM fine crushed stone aggregate. Crucial for filling voids in larger aggregate mixtures to achieve maximum density and strength in concrete, as well as for finer finishing work.",
    applications: ["Concrete void filling", "Roofing", "Asphalt mixing", "Pre-cast concrete products"],
    image: "/images/products/prod_11_10mm_real.jpg",
    icon: Box
  },
  {
    id: 12,
    slug: "6mm-aggregate",
    name: "6MM",
    tag: "CRUSHER AGGREGATES",
    description: "6MM aggregate chips for block manufacturing and delicate construction applications.",
    fullDescription: "6MM aggregate chips designed for specialized applications including solid and hollow block manufacturing, decorative pathways, and highly specific concrete formulations.",
    applications: ["Block manufacturing", "Decorative pathways", "Specialized concrete", "Asphalt surface course"],
    image: "/images/products/prod_12_6mm_real.jpg",
    icon: Box
  },
  {
    id: 13,
    slug: "stone-dust-fine",
    name: "Stone Dust (Fine)",
    tag: "CRUSHER AGGREGATES",
    description: "Manufactured fine stone dust for use in brick production, plastering, and controlled fill.",
    fullDescription: "Manufactured fine stone dust designed as a superior alternative to river sand. Ideal for use in premium brick production, smooth plastering, and as a highly compactable controlled fill material for foundation and trenching operations.",
    applications: ["Brick production", "Plastering", "Trench filling", "Paver block manufacturing"],
    image: "/images/products/prod_13_dust_real.jpg",
    icon: Sun
  },

  // SAND
  {
    id: 14,
    slug: "m-sand-contractual",
    name: "M-Sand (Contractual)",
    tag: "SAND",
    description: "Premium Manufactured Sand (M-Sand) for high-strength concrete and masonry.",
    fullDescription: "Premium Manufactured Sand (M-Sand) produced by crushing hard granite stone. It is cubical in shape with grounded edges, washed and graded to be the perfect substitute for river sand in high-strength concrete and masonry work.",
    applications: ["High-strength concrete", "Masonry work", "Brick laying", "Structural applications"],
    image: "/images/products/prod_14_msand_real.jpg",
    icon: Layers
  },
  {
    id: 15,
    slug: "p-sand-contractual",
    name: "P-Sand (Contractual)",
    tag: "SAND",
    description: "Plastering Sand (P-Sand) finely graded for smooth wall finishing and exterior plastering.",
    fullDescription: "Plastering Sand (P-Sand) specifically crushed and finely graded to eliminate impurities. It ensures a very smooth finish for interior and exterior wall plastering, significantly reducing the amount of cement required.",
    applications: ["Interior plastering", "Exterior plastering", "Smooth wall finishing", "Fine masonry"],
    image: "/images/products/prod_15_psand_real.jpg",
    icon: Layers
  },
  {
    id: 16,
    slug: "river-sand",
    name: "River Sand",
    tag: "SAND",
    description: "Natural river sand for traditional construction and specialized structural needs.",
    fullDescription: "High-quality natural river sand sourced responsibly. It is naturally washed and graded, offering excellent workability for traditional construction methods and specialized structural requirements.",
    applications: ["Traditional construction", "Specialized structural needs", "Concrete mixing", "Landscaping"],
    image: "/images/products/prod_16_river_real.jpg",
    icon: Droplets
  }
];
