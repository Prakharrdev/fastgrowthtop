export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  industry: string;
  location: string;
  categoryTag: string; // e.g. "REAL ESTATE / MICHIGAN" or "WATERFRONT DINING / TRAVERSE CITY, MI"
  description: string;
  services: string[];
  desktopImage: string;
  mobileImage: string;
  thumbnailImage: string;
  liveUrl?: string;
  previewHeading?: string;
  previewSubheading?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "tj-waterfront",
    number: "01",
    name: "TJ Waterfront",
    industry: "Waterfront Dining & Hospitality",
    location: "Traverse City, MI",
    categoryTag: "RESTAURANT / WATERFRONT",
    description:
      "A modern, high-converting website for a premier waterfront dining destination, designed to showcase panoramic lakeside views, seasonal menus, and drive table reservations.",
    services: ["Website Design", "Development", "Hosting", "Ongoing Support"],
    desktopImage: "/images/projects/desktop/tj-waterfront-desktop.jpg",
    mobileImage: "/images/projects/mobile/tj-waterfront-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/tj-waterfront-thumb.jpg",
    liveUrl: "#contact",
    previewHeading: "Exceptional Waterfront Living",
    previewSubheading: "Premier Hospitality & Seasonal Dining.",
  },
  {
    id: "aces-marine",
    number: "02",
    name: "Aces Marine & Salvage",
    industry: "Marine / Boat & Dock Services",
    location: "Traverse City, MI",
    categoryTag: "MARINE SERVICES / MICHIGAN",
    description:
      "A robust, service-driven digital platform for Northern Michigan's premier boat lift and dock team, built to capture quote requests and drive commercial salvage contracts.",
    services: ["Website Design", "Lead Capture", "Fast Hosting", "Local SEO"],
    desktopImage: "/images/projects/desktop/aces-desktop.jpg",
    mobileImage: "/images/projects/mobile/aces-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/aces-thumb.jpg",
    liveUrl: "#contact",
    previewHeading: "Trusted Marine & Dock Services",
    previewSubheading: "Boat Lifts, Docks & Underwater Salvage.",
  },
  {
    id: "beartooth-construction",
    number: "03",
    name: "Beartooth Construction",
    industry: "Custom Home Building",
    location: "Traverse City, MI",
    categoryTag: "CONSTRUCTION / CUSTOM HOMES",
    description:
      "An architectural portfolio and custom builder website engineered to showcase luxury lakeside residences, master craftsmanship, and client testimonials that win high-value contracts.",
    services: ["Website Design", "Portfolio Gallery", "Development", "SEO Strategy"],
    desktopImage: "/images/projects/desktop/beartooth-desktop.jpg",
    mobileImage: "/images/projects/mobile/beartooth-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/beartooth-thumb.jpg",
    liveUrl: "https://beartoothconstruction.com/",
    previewHeading: "Crafting Timeless Northern Homes",
    previewSubheading: "Architectural Precision & Luxury Living.",
  },
  {
    id: "moving-co",
    number: "04",
    name: "Ascension Moving Co.",
    industry: "Residential & Commercial Moving",
    location: "Traverse City, MI",
    categoryTag: "LOGISTICS / MOVING SERVICES",
    description:
      "A frictionless, mobile-first booking experience for residential and commercial relocation, featuring instant quote estimation and automated lead dispatch.",
    services: ["Website Design", "Conversion Funnel", "Mobile First", "Hosting"],
    desktopImage: "/images/projects/desktop/moving-desktop.jpg",
    mobileImage: "/images/projects/mobile/moving-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/moving-thumb.jpg",
    liveUrl: "#contact",
    previewHeading: "Stress-Free Northern Moves",
    previewSubheading: "Local & Long-Distance Moving Experts.",
  },
  {
    id: "hottub-solutions",
    number: "05",
    name: "Hot Tub Solutions",
    industry: "Spa Sales, Service & Repair",
    location: "Traverse City, MI",
    categoryTag: "RETAIL & SERVICE / TRAVERSE CITY",
    description:
      "An interactive product catalog and rapid service-booking platform for hot tub sales, seasonal maintenance, and water care across Northern Michigan.",
    services: ["Website Design", "Product Catalog", "Service Booking", "Local SEO"],
    desktopImage: "/images/projects/desktop/hottub-desktop.jpg",
    mobileImage: "/images/projects/mobile/hottub-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/hottub-thumb.jpg",
    liveUrl: "#contact",
    previewHeading: "Year-Round Relaxation & Care",
    previewSubheading: "Premium Hot Tubs & Certified Service.",
  },
  {
    id: "ivans-stump-grinding",
    number: "06",
    name: "Ivan's Stump Grinding",
    industry: "Tree & Stump Removal",
    location: "Traverse City, MI",
    categoryTag: "TREE SERVICES / NORTHERN MI",
    description:
      "A fast, high-converting local service site optimized for mobile visitors, tap-to-call inquiries, and same-day quote turnaround in the Grand Traverse area.",
    services: ["Website Design", "Mobile Layout", "Local Lead Gen", "Ongoing Support"],
    desktopImage: "/images/projects/desktop/ivan-desktop.jpg",
    mobileImage: "/images/projects/mobile/ivan-mobile.jpg",
    thumbnailImage: "/images/projects/thumbnails/ivan-thumb.jpg",
    liveUrl: "https://www.ivansstumpgrinding.com/",
    previewHeading: "Fast, Clean Stump Removal",
    previewSubheading: "Professional Northern Michigan Tree Care.",
  },
];
