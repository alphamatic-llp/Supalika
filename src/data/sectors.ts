export interface SectorData {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  detailedDescription: string[];
  features: {
    title: string;
    description: string;
  }[];
  applications: string[];
}

export const sectorsData: SectorData[] = [
  {
    slug: "railway-infrastructure",
    title: "Railway Infrastructure",
    shortDescription: "Certified ballast for Indian Railways mainline and branch operations",
    heroImage: "/images/railway_infrastructure.png",
    detailedDescription: [
      "Supalika Stone Works is a premier supplier of high-quality track ballast for the Indian Railways. Our stone aggregates are carefully sourced and processed to meet the stringent specifications required for mainline, high-speed, and branch railway operations.",
      "Track stability relies heavily on the angularity, hardness, and durability of the ballast. Our integrated crushing plant ensures precise gradation and zero contamination, delivering track ballast that provides superior load-bearing capacity, rapid drainage, and exceptional resistance to weathering and mechanical wear."
    ],
    features: [
      { title: "Impact Value", description: "Tested to withstand high dynamic loads from heavy freight and passenger trains." },
      { title: "Abrasion Resistance", description: "Extremely low Los Angeles Abrasion value ensures long-term track stability." },
      { title: "Precise Gradation", description: "100% compliant with Indian Railway standard ballast grading specifications." }
    ],
    applications: ["Mainline Tracks", "High-Speed Rail Corridors", "Freight Corridors", "Station Yards"]
  },
  {
    slug: "national-highways",
    title: "National Highways",
    shortDescription: "Base and sub-base aggregates for NH construction and maintenance",
    heroImage: "/images/national_highways.png",
    detailedDescription: [
      "We supply millions of tonnes of premium aggregates for the construction and expansion of National Highways across Eastern India. Our materials form the backbone of modern road infrastructure, ensuring longevity and safety.",
      "From Granular Sub-Base (GSB) to Wet Mix Macadam (WMM) and specialized aggregates for dense bituminous macadam, our crushing operations are tailored to produce MORTH-compliant materials at massive scale, keeping your highway projects on schedule without compromising on quality."
    ],
    features: [
      { title: "MORTH Compliant", description: "All aggregates meet or exceed Ministry of Road Transport & Highways standards." },
      { title: "High Flakiness Index", description: "Superior shape index ensures better interlocking and compaction." },
      { title: "High Volume Supply", description: "Our 250 TPH plant guarantees uninterrupted supply for mega highway projects." }
    ],
    applications: ["Granular Sub-Base (GSB)", "Wet Mix Macadam (WMM)", "Bituminous Concrete", "Shoulder Construction"]
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    shortDescription: "Structural aggregates for foundations, columns, and floor systems",
    heroImage: "/images/building_construction.png",
    detailedDescription: [
      "The strength of any high-rise building, commercial complex, or residential township begins with the quality of its concrete. Supalika provides washed, precisely graded structural aggregates that ensure maximum compressive strength for concrete mixes.",
      "Our 10mm and 20mm aggregates are free from silt and organic impurities, reducing cement consumption while increasing the overall durability and workability of the concrete. Trusted by top developers and civil contractors."
    ],
    features: [
      { title: "Washed & Clean", description: "Zero dust or clay coating ensures optimal cement bonding." },
      { title: "High Compressive Strength", description: "Derived from premium hard rock quarries for maximum load bearing." },
      { title: "Consistent Quality", description: "Automated batching ensures you get the exact same material in every truck." }
    ],
    applications: ["Ready-Mix Concrete (RMC)", "Foundation Laying", "Column & Beam Casting", "Pre-cast Elements"]
  },
  {
    slug: "mining-operations",
    title: "Mining Operations",
    shortDescription: "Oversize material and support aggregates for open-cast mining sites",
    heroImage: "/images/mining_operations.png",
    detailedDescription: [
      "Mining operations require robust infrastructure to handle heavy machinery and continuous extraction. We provide specialized oversize aggregates, boulders, and quarry dust for haul road construction and site stabilization in massive open-cast mines.",
      "Our materials are engineered to withstand the extreme point-loads of heavy dump trucks and excavators, preventing haul road degradation during monsoon seasons and ensuring mining operations run 24/7 without logistical interruptions."
    ],
    features: [
      { title: "Heavy Duty", description: "Crush-resistant materials designed for ultra-heavy mining equipment." },
      { title: "All-Weather Stability", description: "Excellent drainage properties keep haul roads operational during heavy rains." },
      { title: "Custom Sizing", description: "Ability to supply specific oversize fractions required for specialized mining applications." }
    ],
    applications: ["Haul Road Construction", "Site Stabilization", "Drainage Blankets", "Embankment Fills"]
  },
  {
    slug: "ports-waterways",
    title: "Ports & Waterways",
    shortDescription: "Riprap, armour stone, and marine-grade aggregates for coastal infrastructure",
    heroImage: "/images/ports_waterways.png",
    detailedDescription: [
      "Coastal infrastructure demands materials that can resist the relentless force of waves, tides, and saline environments. Supalika supplies high-density armour stone, riprap, and specialized marine-grade aggregates for ports and waterway projects.",
      "Our hard rock materials exhibit exceptional specific gravity and extremely low water absorption, making them the ideal choice for breakwaters, seawalls, and port reclamation projects across the eastern coastline."
    ],
    features: [
      { title: "High Specific Gravity", description: "Dense rock structure provides superior stability against wave action." },
      { title: "Low Water Absorption", description: "Prevents salt crystallization and weathering in marine environments." },
      { title: "Armour Stone Sizing", description: "Capable of producing and loading massive boulders for breakwater cores." }
    ],
    applications: ["Breakwater Construction", "Seawall Armouring", "Port Reclamation", "River Bank Protection"]
  },
  {
    slug: "industrial-estates",
    title: "Industrial Estates",
    shortDescription: "Pavement and foundation materials for SEZs and industrial complexes",
    heroImage: "/images/industrial_estates.png",
    detailedDescription: [
      "Developing large-scale industrial estates and Special Economic Zones (SEZs) requires massive volumes of dependable construction materials. We supply the foundational aggregates needed for factory floors, internal road networks, and heavy machinery foundations.",
      "Our aggregates are specifically graded to provide the high compaction and shear strength required for industrial pavements that must support constant heavy vehicular traffic and static machinery loads."
    ],
    features: [
      { title: "High Shear Strength", description: "Ensures industrial pavements do not deform under heavy static loads." },
      { title: "Bulk Availability", description: "Integrated logistics to supply thousands of tonnes for massive estate developments." },
      { title: "Vibration Resistant", description: "Perfect for heavy machinery foundations requiring dynamic stability." }
    ],
    applications: ["Factory Floor Foundations", "Internal Road Networks", "Heavy Machinery Bases", "Warehouse Pavements"]
  }
];
