export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  tagline: string;
  editorialSummary: string;
  price: number;
  mrp: number;
  badge?: "NEW" | "CURATED" | "LIMITED" | "TOP DEAL" | "TRENDING";
  sku: string;
  inStock: boolean;
  categorySlug: string;
  categoryName: string;
  images: {
    primary: string;
    hover: string;
    angles: { label: string; src: string }[];
  };
  configurations: {
    label: string;
    specs: string;
    priceModifier: number;
  }[];
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    battery: string;
    weight: string;
    os: string;
    ports: string;
  };
  highlights: string[];
  inTheBox: string[];
  warranty: string;
  rating: number;
  reviewCount: number;
  isTopDeal?: boolean;
  isTrending?: boolean;
  isLatest?: boolean;
  isNewlyLaunched?: boolean;
}

export interface Category {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface BrandPartner {
  name: string;
  tagline: string;
  category: string;
  badge: string;
}

export const STORE_INFO = {
  name: "LAPPY SOLUTION",
  tagline: "Technology, chosen better.",
  legalName: "LAPPY SOLUTION IT RETAIL & SERVICES",
  phone: "9608828288",
  upiId: "8789320315@ptsbi",
  address: "In front of G P Plaza, Chiniya Road, Garhwa, Jharkhand 822114",
  email: "lappysolution2018@gmail.com",
  gstRate: 0.18,
  hsnComputing: "8471"
};

export const BRANDS_WE_DEAL_IN: BrandPartner[] = [
  { name: "Lenovo", tagline: "ThinkPad & IdeaPad Workstations", category: "Laptops & PC", badge: "AUTHORISED" },
  { name: "Dell", tagline: "Latitude & Inspiron Series", category: "Laptops & Input", badge: "AUTHORISED" },
  { name: "HP", tagline: "Pavilion & LaserJet Systems", category: "Laptops & Printers", badge: "AUTHORISED" },
  { name: "Acer", tagline: "Aspire & Nitro Gaming Units", category: "Laptops", badge: "AUTHORISED" },
  { name: "Apple", tagline: "MacBook Air & M-Series Silicon", category: "Premium Laptops", badge: "CERTIFIED" },
  { name: "ASUS", tagline: "TUF Gaming & ZenBook Ultralights", category: "Laptops", badge: "AUTHORISED" },
  { name: "Logitech", tagline: "Precision Keyboards & Mice", category: "Peripherals", badge: "OFFICIAL" },
  { name: "Lapcare", tagline: "Batteries, Adapters & Keyboards", category: "Accessories", badge: "PARTNER" },
  { name: "Frontech", tagline: "Power Supplies, Stands & Input", category: "Components", badge: "PARTNER" },
  { name: "Zebronics", tagline: "Gaming RGB & Audio Combos", category: "Gaming", badge: "PARTNER" },
  { name: "Epson", tagline: "EcoTank Continuous Ink Printers", category: "Printers", badge: "OFFICIAL" },
  { name: "Canon", tagline: "PIXMA & Laser Monochrome Units", category: "Printers", badge: "OFFICIAL" },
  { name: "Brother", tagline: "DCP & MFC All-in-One Series", category: "Printers", badge: "AUTHORISED" },
  { name: "Consistent", tagline: "High-Speed NVMe 3D NAND SSDs", category: "Storage", badge: "PARTNER" },
  { name: "Western Digital", tagline: "Enterprise High-Capacity Hard Drives", category: "Storage", badge: "OFFICIAL" }
];

export const CATEGORIES: Category[] = [
  {
    "slug": "laptops-computers",
    "title": "Computers & Laptops",
    "eyebrow": "SYSTEMS & WORKSTATIONS",
    "description": "Imported & certified desktop setups, Intel Core i3/i5 workstations, and pre-tested enterprise laptops.",
    "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
    "itemCount": 12
  },
  {
    "slug": "keyboards-mice",
    "title": "Keyboards & Mice",
    "eyebrow": "ERGONOMICS & INPUT",
    "description": "Official Dell, Lenovo, Logitech, Lapcare, and Frontech tactile input hardware for maximum workflow speed.",
    "image": "https://cdn.dotpe.in/longtail/item_category/compressed/8473996/L8IwalBC.webp",
    "itemCount": 18
  },
  {
    "slug": "batteries-adapters",
    "title": "Batteries & Adapters",
    "eyebrow": "POWER SOLUTIONS",
    "description": "100% genuine replacement laptop batteries and high-wattage chargers for HP, Dell, Lenovo, and Acer.",
    "image": "https://cdn.dotpe.in/longtail/item_category/compressed/8473996/NwYWdydV.webp",
    "itemCount": 24
  },
  {
    "slug": "storage-ram",
    "title": "Storage & Components",
    "eyebrow": "UPGRADES & MEMORY",
    "description": "Consistent 3D NAND NVMe SSDs, high-capacity Western Digital drives, and DDR laptop RAM expansion modules.",
    "image": "https://cdn.dotpe.in/longtail/item_category/compressed/8473996/AOIZttdP.webp",
    "itemCount": 14
  },
  {
    "slug": "printers-toners",
    "title": "Printers & Consumables",
    "eyebrow": "OFFICE PRINTING",
    "description": "HP Smart Tank, LaserJet Multi-function printers, authentic refill toner kits, and Canon/Epson ink bottles.",
    "image": "https://cdn.dotpe.in/longtail/item_category/compressed/8473996/miAu6UKK.webp",
    "itemCount": 74
  },
  {
    "slug": "cctv-networking",
    "title": "CCTV & Accessories",
    "eyebrow": "SECURITY & LOGISTICS",
    "description": "Pure copper coaxial cables, WiFi dongles, type-C multi-port hubs, and laptop stands.",
    "image": "https://cdn.dotpe.in/longtail/item_category/compressed/8473996/hgA6MLZj.webp",
    "itemCount": 15
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "lappy-sol-thinkpad-t480",
    "slug": "lenovo-thinkpad-t480-business-edition",
    "brand": "Lenovo",
    "name": "Lenovo ThinkPad T480 Core i5 Refurbished Workstation",
    "tagline": "Intel Core i5 8th Gen · 16GB DDR4 · 512GB NVMe SSD · 14″ FHD",
    "editorialSummary": "Certified Grade-A+ enterprise ThinkPad imported and restored by LAPPY SOLUTION Garhwa. Renowned MIL-SPEC magnesium chassis with legendary tactile keyboard and dual hot-swap battery technology.",
    "price": 24999,
    "mrp": 45000,
    "badge": "TOP DEAL",
    "sku": "LNV-T480-I5-16-512",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "16GB RAM / 512GB NVMe SSD",
        "specs": "Intel Core i5 8th Gen / 14″ FHD IPS",
        "priceModifier": 0
      },
      {
        "label": "32GB RAM / 1TB NVMe SSD",
        "specs": "Intel Core i5 8th Gen / 14″ FHD IPS",
        "priceModifier": 5000
      }
    ],
    "specs": {
      "processor": "Intel Core i5-8350U Quad-Core (Up to 3.60 GHz, 6MB Cache)",
      "ram": "16GB DDR4 2400MHz High-Speed RAM",
      "storage": "512GB Ultra-fast PCIe M.2 NVMe SSD",
      "display": "14.0″ Full HD (1920 x 1080) Anti-Glare IPS Display",
      "graphics": "Intel UHD Graphics 620",
      "battery": "Dual Battery PowerBridge Architecture (Up to 6-8 Hours)",
      "weight": "1.58 kg",
      "os": "Windows 11 Pro 64-bit Activated",
      "ports": "2x USB 3.1, 1x USB-C Thunderbolt 3, HDMI 1.4b, RJ45 Ethernet, SD Card Reader"
    },
    "highlights": [
      "Tested across 24 LAPPY SOLUTION hardware diagnostic check points",
      "Spill-resistant ergonomic ThinkPad keyboard with TrackPoint",
      "Original Lenovo 65W Type-C Fast Charger included",
      "6-Month LAPPY Store Warranty + 1-Year Technical Support"
    ],
    "inTheBox": [
      "Lenovo ThinkPad T480 Laptop",
      "Original 65W Type-C AC Adapter",
      "LAPPY SOLUTION Testing Certificate",
      "GST Tax Invoice & Warranty Card"
    ],
    "warranty": "6 Months Comprehensive Store Hardware Warranty + Lifetime OS Support",
    "rating": 4.8,
    "reviewCount": 34,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-sol-dell-latitude-7490",
    "slug": "dell-latitude-7490-carbon-executive",
    "brand": "Dell",
    "name": "Dell Latitude 7490 Core i7 Ultralight Business Laptop",
    "tagline": "Intel Core i7 8th Gen · 16GB DDR4 · 512GB SSD · 14″ FHD Anti-Glare",
    "editorialSummary": "A carbon fiber woven executive flagship built for speed and durability. Tested and calibrated by LAPPY SOLUTION with crystal-clear 1080p display and backlit keyboard.",
    "price": 28499,
    "mrp": 52000,
    "badge": "TRENDING",
    "sku": "DLL-LAT-7490-I7-16",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "16GB RAM / 512GB SSD",
        "specs": "Intel Core i7 8th Gen",
        "priceModifier": 0
      },
      {
        "label": "32GB RAM / 1TB SSD",
        "specs": "Intel Core i7 8th Gen",
        "priceModifier": 6000
      }
    ],
    "specs": {
      "processor": "Intel Core i7-8650U Quad-Core (Up to 4.20 GHz, 8MB Cache)",
      "ram": "16GB DDR4 High-Bandwidth RAM",
      "storage": "512GB M.2 PCIe NVMe SSD",
      "display": "14.0″ FHD WVA (1920 x 1080) Anti-Glare Carbon Bezel",
      "graphics": "Intel UHD Graphics 620",
      "battery": "60Wh ExpressCharge 4-Cell Battery",
      "weight": "1.4 kg",
      "os": "Windows 11 Pro Genuine",
      "ports": "Thunderbolt 3 over USB Type-C, 3x USB 3.1 Gen 1, HDMI 1.4, MicroSD Reader"
    },
    "highlights": [
      "Premium magnesium alloy chassis with soft-touch carbon fiber deck",
      "Backlit keyboard with smooth multi-touch glass touchpad",
      "Comprehensive diagnostics cleared by LAPPY SOLUTION Garhwa technicians"
    ],
    "inTheBox": [
      "Dell Latitude 7490",
      "Original 65W Dell AC Power Adapter",
      "Protective Laptop Sleeve",
      "Official Tax Invoice"
    ],
    "warranty": "6 Months LAPPY Solution Store Warranty",
    "rating": 4.9,
    "reviewCount": 41,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-sol-hp-pavilion-15",
    "slug": "hp-pavilion-15-core-i5-silver",
    "brand": "HP",
    "name": "HP Pavilion 15 Core i5 12th Gen Thin & Light",
    "tagline": "Intel Core i5 12th Gen · 16GB DDR4 · 512GB SSD · 15.6″ Micro-Edge FHD",
    "editorialSummary": "Brand-certified thin and light laptop for students, coders, and office productivity with B&O Audio and fast charge support.",
    "price": 54990,
    "mrp": 68900,
    "badge": "NEW",
    "sku": "HP-PAV-15-12TH-I5",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "16GB / 512GB SSD",
        "specs": "Intel Core i5-1235U",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Intel Core i5-1235U (10 Cores, 12 Threads, up to 4.4 GHz)",
      "ram": "16GB DDR4-3200 MHz RAM",
      "storage": "512GB PCIe NVMe M.2 SSD",
      "display": "15.6″ diagonal, FHD (1920 x 1080), IPS, micro-edge, BrightView, 250 nits",
      "graphics": "Intel Iris Xe Graphics",
      "battery": "3-cell, 41Wh Li-ion (Supports fast charge: 50% in 45 mins)",
      "weight": "1.75 kg",
      "os": "Windows 11 Home + MS Office 2021",
      "ports": "1x USB Type-C, 2x USB Type-A, 1x HDMI 2.1, 1x headphone/mic combo"
    },
    "highlights": [
      "Audio by Bang & Olufsen with dual stereo speakers",
      "Full-size natural silver keyboard with integrated numeric keypad",
      "HP True Vision 720p HD camera with temporal noise reduction"
    ],
    "inTheBox": [
      "HP Pavilion 15 Laptop",
      "HP 65W Smart AC Power Adapter",
      "User Manual & Warranty Booklet"
    ],
    "warranty": "1 Year Official HP India Onsite Warranty",
    "rating": 4.7,
    "reviewCount": 19,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "lappy-sol-acer-aspire-7",
    "slug": "acer-aspire-7-gaming-workstation",
    "brand": "Acer",
    "name": "Acer Aspire 7 Core i5 RTX 3050 Creator Edition",
    "tagline": "Intel Core i5 12th Gen · RTX 3050 4GB GPU · 16GB RAM · 512GB SSD",
    "editorialSummary": "High-performance creator & engineering machine with dedicated NVIDIA RTX graphics and dual thermal exhaust fans.",
    "price": 52990,
    "mrp": 69990,
    "badge": "TOP DEAL",
    "sku": "ACR-ASP7-I5-3050",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "16GB RAM / RTX 3050 / 512GB SSD",
        "specs": "Core i5 12th Gen",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Intel Core i5-12450H (8 Cores, 12 Threads, Up to 4.40 GHz)",
      "ram": "16GB DDR4 3200MHz (Expandable to 32GB)",
      "storage": "512GB PCIe Gen4 NVMe SSD (Dual M.2 Slot)",
      "display": "15.6″ Full HD 144Hz IPS SlimBezel Display",
      "graphics": "NVIDIA GeForce RTX 3050 4GB GDDR6 Dedicated",
      "battery": "50Wh 3-cell Li-ion with 135W AC Adapter",
      "weight": "2.1 kg",
      "os": "Windows 11 Home 64-bit",
      "ports": "1x USB Type-C (Thunderbolt 4), 3x USB 3.2 Gen 1, HDMI 2.0, Gigabit Ethernet"
    },
    "highlights": [
      "Dedicated RTX 3050 Ray-Tracing GPU for 3D CAD, Premiere & Blender",
      "144Hz high refresh rate smooth display",
      "Dual copper heat pipes with dual air intake"
    ],
    "inTheBox": [
      "Acer Aspire 7 Laptop",
      "135W Adapter & Power Cord",
      "LAPPY SOLUTION Setup Guide"
    ],
    "warranty": "1 Year Official Acer India Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 27,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-sol-asus-tuf-f15",
    "slug": "asus-tuf-gaming-f15-heavy-duty",
    "brand": "ASUS",
    "name": "ASUS TUF Gaming F15 MIL-STD Workstation",
    "tagline": "Intel Core i5 11th Gen · RTX 2050 4GB · 16GB DDR4 · 512GB SSD",
    "editorialSummary": "Rugged military-grade durability certified gaming and rendering notebook with self-cleaning dual fans and RGB keyboard.",
    "price": 49990,
    "mrp": 64990,
    "badge": "TRENDING",
    "sku": "ASU-TUF-F15-2050",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "16GB RAM / 512GB SSD",
        "specs": "Core i5 11th Gen / RTX 2050",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Intel Core i5-11400H 6-Cores, 12-Threads (up to 4.5 GHz)",
      "ram": "16GB DDR4 3200MHz",
      "storage": "512GB M.2 NVMe PCIe 3.0 SSD",
      "display": "15.6″ FHD (1920 x 1080) 144Hz Anti-glare IPS-level",
      "graphics": "NVIDIA GeForce RTX 2050 4GB GDDR6 (70W TGP)",
      "battery": "48WHrs 3-cell Li-ion",
      "weight": "2.3 kg",
      "os": "Windows 11 Home",
      "ports": "1x Thunderbolt 4, 3x USB 3.2 Gen 1 Type-A, 1x HDMI 2.0b, 1x RJ45 LAN"
    },
    "highlights": [
      "MIL-STD-810H military certified against drops, vibration and heat",
      "One-Zone RGB Backlit Chiclet Keyboard",
      "Comprehensive anti-dust cooling design"
    ],
    "inTheBox": [
      "ASUS TUF F15",
      "150W AC Adapter",
      "Warranty Documents"
    ],
    "warranty": "1 Year Brand Onsite Warranty",
    "rating": 4.7,
    "reviewCount": 22,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-sol-apple-macbook-air-m2",
    "slug": "apple-macbook-air-m2-starlight",
    "brand": "Apple",
    "name": "Apple MacBook Air 13.6″ Liquid Retina M2",
    "tagline": "Apple M2 Chip · 8GB Unified RAM · 256GB SSD · MagSafe 3",
    "editorialSummary": "All-day 18-hour battery in a striking 1.24kg silent fanless unibody enclosure. Official Indian serial with brand warranty.",
    "price": 84900,
    "mrp": 99900,
    "badge": "CURATED",
    "sku": "APL-MBA13-M2-256",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=900&auto=format&fit=crop",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=900&auto=format&fit=crop"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "8GB / 256GB SSD",
        "specs": "Apple M2 8-Core CPU / 8-Core GPU",
        "priceModifier": 0
      },
      {
        "label": "16GB / 512GB SSD",
        "specs": "Apple M2 8-Core CPU / 10-Core GPU",
        "priceModifier": 20000
      }
    ],
    "specs": {
      "processor": "Apple M2 Chip (8-Core CPU, 16-Core Neural Engine)",
      "ram": "8GB Unified Memory",
      "storage": "256GB High-Speed SSD",
      "display": "13.6-inch Liquid Retina Display with True Tone, 500 nits",
      "graphics": "8-Core Integrated Apple GPU",
      "battery": "52.6Wh Lithium-polymer (up to 18 hours Apple TV playback)",
      "weight": "1.24 kg",
      "os": "macOS Sequoia",
      "ports": "MagSafe 3 Charging, 2x Thunderbolt / USB 4, 3.5mm Headphone Jack"
    },
    "highlights": [
      "Ultra-thin 11.3mm durable aluminum unibody",
      "1080p FaceTime HD camera with triple microphone array",
      "Four-speaker sound system with Spatial Audio support"
    ],
    "inTheBox": [
      "13-inch MacBook Air",
      "30W USB-C Power Adapter",
      "USB-C to MagSafe 3 Cable (2m)"
    ],
    "warranty": "1 Year Official Apple India Manufacturer Warranty",
    "rating": 4.9,
    "reviewCount": 38,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "lappy-scraped-30714014",
    "slug": "computer-system-i3-processor-8gb-ram-256gb-ssd-monitor-30714014",
    "brand": "LAPPY Verified",
    "name": "Computer System i3 Processor/8gb ram/256gb SSD/MONITOR.",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Computer System i3 Processor/8gb ram/256gb SSD/MONITOR. available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 8999,
    "mrp": 30000,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30714014",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/m4T1AqYd.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/m4T1AqYd.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Computer System i3 Processor/8gb ram/256gb SSD/MONITOR.",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 8,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30778709",
    "slug": "computer-system-i5-processor-8gb-ram-256gb-ssd-20-monitor-wi-30778709",
    "brand": "Consistent",
    "name": "Computer System i5 processor/8gb ram /256GB SSD/20\" Monitor/with Wi-Fi /windows 10 /ms office 2021.",
    "tagline": "Consistent Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Computer System i5 processor/8gb ram /256GB SSD/20\" Monitor/with Wi-Fi /windows 10 /ms office 2021. available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 12000,
    "mrp": 35000,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30778709",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/OEgWPWnB.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/OEgWPWnB.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Consistent Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Computer System i5 processor/8gb ram /256GB SSD/20\" Monitor/with Wi-Fi /windows 10 /ms office 2021.",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 12,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33094093",
    "slug": "wd-500-gb-refurbished-hard-disk-33094093",
    "brand": "Western Digital",
    "name": "WD 500 GB  Refurbished Hard Disk",
    "tagline": "Western Digital Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "1. WD 500 GB SATA Internal Hard Disk Drive.\n2.Warranty claims for the WD 500 GB SATA Internal Hard Disk Drive will be processed by the seller, and any repair or replacement will be completed within fourteen (14) business days....",
    "price": 2500,
    "mrp": 3500,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33094093",
    "inStock": true,
    "categorySlug": "storage-ram",
    "categoryName": "Storage & Components",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/JHiAE5Vr.webp",
      "hover": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/JHiAE5Vr.webp"
        },
        {
          "label": "M.2 / SATA Gold Contacts",
          "src": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Controller & NAND Flash",
          "src": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Drive Housing & Seal",
          "src": "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Western Digital Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "WD 500 GB  Refurbished Hard Disk",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 14,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30708104",
    "slug": "computer-cabinet-with-smps-30708104",
    "brand": "LAPPY Verified",
    "name": "Computer Cabinet With SMPS",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Computer Cabinet With SMPS available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1100,
    "mrp": 2050,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30708104",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/EUu00wq9.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/EUu00wq9.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Computer Cabinet With SMPS",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 24,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717565",
    "slug": "frontech-ps-0005-computer-power-supply-as-230v-450w-smps-30717565",
    "brand": "Frontech",
    "name": "Frontech PS-0005 Computer Power Supply as 230V/450W SMPS",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Frontech PS-0005 Computer Power Supply as 230V/450W SMPS available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 550,
    "mrp": 999,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717565",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/U2tHFJkT.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/U2tHFJkT.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Frontech PS-0005 Computer Power Supply as 230V/450W SMPS",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 10,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717538",
    "slug": "vga-to-hdmi-video-adapter-converter-for-tv-computer-projecto-30717538",
    "brand": "LAPPY Verified",
    "name": "VGA to HDMI Video Adapter/Converter for TV, Computer, Projector with Audio",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "VGA to HDMI Video Adapter/Converter for TV, Computer, Projector with Audio, Power Cable -D-Sub...",
    "price": 450,
    "mrp": 1999,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717538",
    "inStock": true,
    "categorySlug": "cctv-networking",
    "categoryName": "CCTV & Accessories",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/Ida1jtVB.webp",
      "hover": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/Ida1jtVB.webp"
        },
        {
          "label": "Camera Array & Night Lens",
          "src": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Rear BNC & Coaxial I/O",
          "src": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Power Supply & Mount",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "VGA to HDMI Video Adapter/Converter for TV, Computer, Projector with Audio",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 18,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715762",
    "slug": "laptop-battery-for-hp-630-635-636-631-hp-cq42-cq-62-cq-57-cq-30715762",
    "brand": "HP",
    "name": "Laptop Battery for HP 630 635, 636, 631 HP CQ42, CQ 62, CQ 57, CQ 43, HP G4.....",
    "tagline": "HP Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Laptop Battery for HP 630 635, 636, 631 HP CQ42, CQ 62, CQ 57, CQ 43, HP G4, HP G6 6 Cell Battery...",
    "price": 1200,
    "mrp": 2999,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715762",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/Degpp1bq.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/Degpp1bq.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "HP Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery for HP 630 635, 636, 631 HP CQ42, CQ 62, CQ 57, CQ 43, HP G4.....",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 30,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715766",
    "slug": "lappy-hs04-4-cell-replacement-laptop-battery-for-hp-pavilion-30715766",
    "brand": "HP",
    "name": "Lappy HS04 4-Cell Replacement Laptop Battery for Hp Pavilion 15-AY542TU, 15-AY54",
    "tagline": "HP Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Lappy HS04 4-Cell Replacement Laptop Battery for Hp Pavilion 15-AY542TU, 15-AY54 available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1350,
    "mrp": 2800,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715766",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/zXCMEDLp.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/zXCMEDLp.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "HP Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Lappy HS04 4-Cell Replacement Laptop Battery for Hp Pavilion 15-AY542TU, 15-AY54",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 25,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715773",
    "slug": "laptop-battery-for-acer-aspire-e1-571-e1-531-e1-421-e1-431-e-30715773",
    "brand": "Acer",
    "name": "Laptop Battery for Acer Aspire E1-571 E1-531, E1-421 E1-431 E1-471, Acer V3-571",
    "tagline": "Acer Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Laptop Battery for Acer Aspire E1-571 E1-531, E1-421 E1-431 E1-471, Acer V3-571 available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1200,
    "mrp": 2499,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715773",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/PhDZBrlt.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/PhDZBrlt.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Acer Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery for Acer Aspire E1-571 E1-531, E1-421 E1-431 E1-471, Acer V3-571",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 9,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715783",
    "slug": "laptop-adapter-for-dell-15r-5521-3521-battery-mr90y-65wh-11--30715783",
    "brand": "Dell",
    "name": "Laptop Adapter for DELL 15R-5521 3521 Battery MR90Y 65Wh 11.1v 6 Cell Laptop Bat",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Laptop Adapter for DELL 15R-5521 3521 Battery MR90Y 65Wh 11.1v 6 Cell Laptop BatteryDELL 3437 Series 11.1V 6 Cell Battery for Inspiron 14 3421/14R 5421 5437/15 3521 3537/15R 5521 5537/17 3721 3737 (Black)...",
    "price": 1650,
    "mrp": 2800,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715783",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/SQkiBl7A.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/SQkiBl7A.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Adapter for DELL 15R-5521 3521 Battery MR90Y 65Wh 11.1v 6 Cell Laptop Bat",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 26,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715788",
    "slug": "laptop-battery-compatible-for-dell-j1knd-dell-inspiron-13r-1-30715788",
    "brand": "Dell",
    "name": "Laptop Battery Compatible for Dell J1KND Dell inspiron 13r/14r/15r/17r N5010...",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Compatible Models: M501, M501R, M5010, M5010R, M501D, M5110, M5030, M5030R, M411R, M511R, M4110, 3550, 3550N, M5010D, M5020 13R, N3010, N3010D, N3010D-148, N3010D-168, N3010D-178, N3010D-248, N3010D-268, 3010-D330, 3010-D370HK 3010-D370TW, ...",
    "price": 1250,
    "mrp": 2800,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715788",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/cSkJt4FH.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/cSkJt4FH.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery Compatible for Dell J1KND Dell inspiron 13r/14r/15r/17r N5010...",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 19,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715794",
    "slug": "laptop-battery-compatible-for-dell-inspiron-15r-5420-15r-552-30715794",
    "brand": "Dell",
    "name": "Laptop Battery Compatible for Dell Inspiron 15R 5420 15R 5520 15R 5525 15R 7520.",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Laptop Battery Compatible for Dell Inspiron ￼\n\nBack\n\nDescription\n\nCompatible for : -Inspiron 4420 4520 4720 5420 5425 5520 5525 5720 7420 7520 7720 14R (5420) 14R 4420 14R 5420 14R 5425 14R 7420 14R SE 4420 14R SE 5420 14R SE 7420 14R TURBO...",
    "price": 1700,
    "mrp": 2900,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715794",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/uHLHZl6N.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/uHLHZl6N.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery Compatible for Dell Inspiron 15R 5420 15R 5520 15R 5525 15R 7520.",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 15,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717432",
    "slug": "laptop-battery-for-sony-vaio-sve15115en-series-laptops-4000--30717432",
    "brand": "LAPPY Verified",
    "name": "Laptop Battery for Sony VAIO SVE15115EN Series Laptops (4000 mAh, 10.8V / 11.1V",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Compatible Part Numbers BPS26, VGP-BPS26, BPL26, VGP-BPL26...",
    "price": 2200,
    "mrp": 4000,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717432",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/eAhOdu4c.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/eAhOdu4c.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery for Sony VAIO SVE15115EN Series Laptops (4000 mAh, 10.8V / 11.1V",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 28,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717446",
    "slug": "laptop-battery-for-sony-vaio-svf15329sw-bps35-30717446",
    "brand": "LAPPY Verified",
    "name": "Laptop Battery for Sony VAIO SVF15329SW BPS35",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Laptop Battery for Sony VAIO SVF15329SW BPS35 available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 2250,
    "mrp": 3900,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717446",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/Gd3sSBlt.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/Gd3sSBlt.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery for Sony VAIO SVF15329SW BPS35",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 23,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717453",
    "slug": "laptop-battery-for-lenovo-b590-e430-e530-30717453",
    "brand": "Lenovo",
    "name": "Laptop Battery for Lenovo B590, E430, E530",
    "tagline": "Lenovo Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Laptop Battery for Lenovo B590, E430, E530 available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1700,
    "mrp": 3600,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717453",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/tsL9oMM6.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/tsL9oMM6.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lenovo Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Laptop Battery for Lenovo B590, E430, E530",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 19,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33105026",
    "slug": "frontech-ups-battery-12v-7-aah-33105026",
    "brand": "Frontech",
    "name": "FRONTECH UPS BATTERY 12V, 7 Aah.",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine FRONTECH UPS BATTERY 12V, 7 Aah. available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 750,
    "mrp": 900,
    "badge": "TRENDING",
    "sku": "LAPPY-33105026",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/3e1Af0TX.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/3e1Af0TX.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "FRONTECH UPS BATTERY 12V, 7 Aah.",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 19,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33144391",
    "slug": "frontech-ups-battery-12v-4-5ah-33144391",
    "brand": "Frontech",
    "name": "FRONTECH UPS BATTERY 12V 4.5AH",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine FRONTECH UPS BATTERY 12V 4.5AH available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 700,
    "mrp": 1500,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33144391",
    "inStock": true,
    "categorySlug": "batteries-adapters",
    "categoryName": "Batteries & Adapters",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/LpUB6RTB.webp",
      "hover": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/LpUB6RTB.webp"
        },
        {
          "label": "Pin Connector & Jack",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Voltage & Rating Label",
          "src": "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Cable & Power Brick",
          "src": "https://images.unsplash.com/photo-1609592424361-b5527814421b?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "FRONTECH UPS BATTERY 12V 4.5AH",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 30,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30704761",
    "slug": "frontech-wifi-dongle-150-mbps-mini-wireless-network-usb-wi-f-30704761",
    "brand": "Frontech",
    "name": "FRONTECH WiFi Dongle 150 Mbps Mini Wireless Network USB Wi-Fi Adapter",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "USB WiFi Adapter: Upgrade your WiFi speeds up to 150Mbps for lag-free video streaming and Internet calls...",
    "price": 150,
    "mrp": 599,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30704761",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/wKrEAIJw.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/wKrEAIJw.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "FRONTECH WiFi Dongle 150 Mbps Mini Wireless Network USB Wi-Fi Adapter",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 26,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30738510",
    "slug": "bios-cmos-3v-lithium-battery-30738510",
    "brand": "LAPPY Verified",
    "name": "BIOS CMOS 3V Lithium-Battery",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine BIOS CMOS 3V Lithium-Battery available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 10,
    "mrp": 40,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30738510",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/Uef53r8P.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/Uef53r8P.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "BIOS CMOS 3V Lithium-Battery",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 28,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33104951",
    "slug": "frontech-12v-4-5-ah-battery-33104951",
    "brand": "Frontech",
    "name": "Frontech 12V 4.5 Ah battery",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Frontech 12V 4.5 Ah battery available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 550,
    "mrp": 1200,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33104951",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/wyybIsFG.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/wyybIsFG.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Frontech 12V 4.5 Ah battery",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 25,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33130723",
    "slug": "consistent-wifi-mini-usb-adapter-300mbps-33130723",
    "brand": "Consistent",
    "name": "Consistent WiFi Mini USB Adapter 300Mbps",
    "tagline": "Consistent Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Consistent WiFi Mini USB Adapter 300Mbps  connects easily to all devices supporting speed of up to 150 Mbps and 300 Mbps....",
    "price": 400,
    "mrp": 800,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33130723",
    "inStock": true,
    "categorySlug": "laptops-computers",
    "categoryName": "Computers & Laptops",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/dNj6HxOJ.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/dNj6HxOJ.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Consistent Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Consistent WiFi Mini USB Adapter 300Mbps",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 8,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30711559",
    "slug": "lapcare-2-in-1-type-c-and-usb-3-0-gigabit-ethernet-adapter-30711559",
    "brand": "Lapcare",
    "name": "Lapcare 2 in 1 Type C and USB 3.0 Gigabit Ethernet Adapter",
    "tagline": "Lapcare Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Lapcare 2 in 1 Type C and USB 3.0 Gigabit Ethernet Adapter available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1100,
    "mrp": 1959,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30711559",
    "inStock": true,
    "categorySlug": "cctv-networking",
    "categoryName": "CCTV & Accessories",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/NLShkPMj.webp",
      "hover": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/NLShkPMj.webp"
        },
        {
          "label": "Camera Array & Night Lens",
          "src": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Rear BNC & Coaxial I/O",
          "src": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Power Supply & Mount",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lapcare Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Lapcare 2 in 1 Type C and USB 3.0 Gigabit Ethernet Adapter",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 8,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715676",
    "slug": "power-adapter-cable-cord-for-sata-hard-drives-and-cd-rom-dri-30715676",
    "brand": "LAPPY Verified",
    "name": "Power Adapter Cable Cord for SATA Hard Drives and CD ROM Drives",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Power Adapter Cable Cord for SATA Hard Drives and CD ROM Drives available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 75,
    "mrp": 350,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715676",
    "inStock": true,
    "categorySlug": "cctv-networking",
    "categoryName": "CCTV & Accessories",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/PczHzhMq.webp",
      "hover": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/PczHzhMq.webp"
        },
        {
          "label": "Camera Array & Night Lens",
          "src": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Rear BNC & Coaxial I/O",
          "src": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Power Supply & Mount",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Power Adapter Cable Cord for SATA Hard Drives and CD ROM Drives",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 32,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30711529",
    "slug": "lenovo-300-wired-plug-play-usb-mouse-high-resolution-1600-dp-30711529",
    "brand": "Lenovo",
    "name": "Lenovo 300 Wired Plug & Play USB Mouse, High Resolution 1600 DPI Optical Sensor",
    "tagline": "Lenovo Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Lenovo 300 Wired Plug & Play USB Mouse, High Resolution 1600 DPI Optical Sensor available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 300,
    "mrp": 577,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30711529",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/l8yQaKvM.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/l8yQaKvM.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lenovo Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Lenovo 300 Wired Plug & Play USB Mouse, High Resolution 1600 DPI Optical Sensor",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 29,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715621",
    "slug": "zebronics-zeb-transformer-gaming-keyboard-and-mouse-combo-us-30715621",
    "brand": "Zebronics",
    "name": "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
    "tagline": "Zebronics Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1100,
    "mrp": 2399,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715621",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/VeQlAfCf.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/VeQlAfCf.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Zebronics Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 31,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715861",
    "slug": "logitech-k120-wired-keyboard-30715861",
    "brand": "Logitech",
    "name": "Logitech K120 Wired Keyboard",
    "tagline": "Logitech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Logitech K120 Wired Keyboard available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 620,
    "mrp": 795,
    "sku": "LAPPY-30715861",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/ny9k2GOn.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/ny9k2GOn.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Logitech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Logitech K120 Wired Keyboard",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 14,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715872",
    "slug": "frontech-wired-keyboard-1672-30715872",
    "brand": "Frontech",
    "name": "FRONTECH Wired Keyboard\n(1672)",
    "tagline": "Frontech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine FRONTECH Wired Keyboard\n(1672) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 220,
    "mrp": 450,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715872",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/mUTBayF6.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/mUTBayF6.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Frontech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "FRONTECH Wired Keyboard\n(1672)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 30,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715878",
    "slug": "lapcare-alfa-keyboard-30715878",
    "brand": "Lapcare",
    "name": "LAPCARE Alfa Keyboard",
    "tagline": "Lapcare Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine LAPCARE Alfa Keyboard available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 220,
    "mrp": 599,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715878",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/KdTSOfZL.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/KdTSOfZL.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lapcare Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "LAPCARE Alfa Keyboard",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 9,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715879",
    "slug": "lapcare-d-lite-plus-wired-mini-keyboard-with-chocolate-keys--30715879",
    "brand": "Lapcare",
    "name": "Lapcare D Lite Plus Wired Mini Keyboard with Chocolate Keys (Black)",
    "tagline": "Lapcare Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Lapcare D Lite Plus Wired Mini Keyboard with Chocolate Keys (Black) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 350,
    "mrp": 699,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715879",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/5iVuNjZe.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/5iVuNjZe.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lapcare Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Lapcare D Lite Plus Wired Mini Keyboard with Chocolate Keys (Black)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 18,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30715890",
    "slug": "dell-kb216-kb216d1-multimedia-usb-keyboard-30715890",
    "brand": "Dell",
    "name": "Dell KB216/KB216d1 Multimedia USB Keyboard",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Dell KB216/KB216d1 Multimedia USB Keyboard available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 550,
    "mrp": 1799,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30715890",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/FAFlXPew.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/FAFlXPew.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Dell KB216/KB216d1 Multimedia USB Keyboard",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 25,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717561",
    "slug": "dell-usb-wireless-keyboard-and-mouse-set-km3322w-30717561",
    "brand": "Dell",
    "name": "Dell USB Wireless Keyboard and Mouse Set- KM3322W",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Dell USB Wireless Keyboard and Mouse Set- KM3322W available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1299,
    "mrp": 2499,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717561",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/iGmdV1Zu.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/iGmdV1Zu.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Dell USB Wireless Keyboard and Mouse Set- KM3322W",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 28,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30717574",
    "slug": "dell-ms116-wired-optical-mouse-1000dpi-led-tracking-scrollin-30717574",
    "brand": "Dell",
    "name": "Dell MS116 Wired Optical Mouse, 1000Dpi, Led Tracking, Scrolling Wheel",
    "tagline": "Dell Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Dell MS116 Wired Optical Mouse, 1000Dpi, Led Tracking, Scrolling Wheel, Plug and Play...",
    "price": 299,
    "mrp": 650,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30717574",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/jucELXLz.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/jucELXLz.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Dell Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Dell MS116 Wired Optical Mouse, 1000Dpi, Led Tracking, Scrolling Wheel",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 29,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30719124",
    "slug": "logitech-m90-usb-mouse-30719124",
    "brand": "Logitech",
    "name": "Logitech M90 USB Mouse",
    "tagline": "Logitech Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Logitech M90 USB Mouse available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 280,
    "mrp": 395,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30719124",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/guSPBHRX.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/guSPBHRX.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Logitech Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Logitech M90 USB Mouse",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 25,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30719127",
    "slug": "fingers-superhit-usb-wired-mouse-30719127",
    "brand": "LAPPY Verified",
    "name": "Fingers SuperHit USB Wired Mouse",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Fingers SuperHit USB Wired Mouse available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 280,
    "mrp": 699,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30719127",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/0IXaPATr.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/0IXaPATr.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Fingers SuperHit USB Wired Mouse",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 30,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30719129",
    "slug": "zebion-elfin-wired-optical-mouse-usb-2-0-black-30719129",
    "brand": "LAPPY Verified",
    "name": "zebion ELFIN Wired Optical Mouse  (USB 2.0, Black)",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine zebion ELFIN Wired Optical Mouse  (USB 2.0, Black) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 150,
    "mrp": 225,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30719129",
    "inStock": true,
    "categorySlug": "keyboards-mice",
    "categoryName": "Keyboards & Mice",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/3C7mZA4f.webp",
      "hover": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/3C7mZA4f.webp"
        },
        {
          "label": "Top Keycap Layout",
          "src": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Ergonomic Profile",
          "src": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Optical Sensor & Cable",
          "src": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Desk Setup Perspective",
          "src": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "zebion ELFIN Wired Optical Mouse  (USB 2.0, Black)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 28,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30711001",
    "slug": "hp-158x-toner-reload-kit-for-hp-laserjet-tank-1005w-1020w-mf-30711001",
    "brand": "HP",
    "name": "HP 158X Toner Reload Kit for HP Laserjet Tank 1005w, 1020w, MFP 2606sdw, 1020, 1",
    "tagline": "HP Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Print Page 158X Toner Cartridge (Print 5000 Pages) for HP 158X Toner Reload Kit for HP Laserjet Tank 1005w, 1020w, MFP 2606sdw, 1020, 1005, 2605sdw, 1604w, 1602, 2602, 2603, 2604, 2606 Series (158X - 1 pc)...",
    "price": 1850,
    "mrp": 1980,
    "sku": "LAPPY-30711001",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/RGXkPW7M.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/RGXkPW7M.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "HP Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "HP 158X Toner Reload Kit for HP Laserjet Tank 1005w, 1020w, MFP 2606sdw, 1020, 1",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 26,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33140122",
    "slug": "lapcare-88a-laser-toner-printer-cartridge-33140122",
    "brand": "Lapcare",
    "name": "LAPCARE 88A Laser Toner Printer Cartridge",
    "tagline": "Lapcare Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine LAPCARE 88A Laser Toner Printer Cartridge available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 380,
    "mrp": 1400,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33140122",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/va97afXr.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/va97afXr.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Lapcare Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "LAPCARE 88A Laser Toner Printer Cartridge",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 21,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-33144869",
    "slug": "frontech-laserjet-cartridge-for-b-tnb020-b021-b022-b023-tc-0-33144869",
    "brand": "HP",
    "name": "Frontech Laserjet Cartridge For B-TNB020/B021/B022/B023|TC-0030",
    "tagline": "HP Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Frontech Laserjet Cartridge For B-TNB020/B021/B022/B023|TC-0030 available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 450,
    "mrp": 1000,
    "badge": "TOP DEAL",
    "sku": "LAPPY-33144869",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/MtiD27p9.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/MtiD27p9.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "HP Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Frontech Laserjet Cartridge For B-TNB020/B021/B022/B023|TC-0030",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 12,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30724717",
    "slug": "cp-plus-3-1-coaxial-pure-copper-cctv-camera-cable-90-meter-w-30724717",
    "brand": "LAPPY Verified",
    "name": "CP PLUS 3+1 Coaxial Pure Copper CCTV Camera Cable (90 Meter) White",
    "tagline": "LAPPY Verified Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine CP PLUS 3+1 Coaxial Pure Copper CCTV Camera Cable (90 Meter) White available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 1350,
    "mrp": 2200,
    "badge": "TOP DEAL",
    "sku": "LAPPY-30724717",
    "inStock": true,
    "categorySlug": "cctv-networking",
    "categoryName": "CCTV & Accessories",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/vAMyg30g.webp",
      "hover": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/vAMyg30g.webp"
        },
        {
          "label": "Camera Array & Night Lens",
          "src": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Rear BNC & Coaxial I/O",
          "src": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Power Supply & Mount",
          "src": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "LAPPY Verified Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "CP PLUS 3+1 Coaxial Pure Copper CCTV Camera Cable (90 Meter) White",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 20,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30719168",
    "slug": "hp-laserjet-pro-mfp-m126nw-multi-function-wifi-monochrome-la-30719168",
    "brand": "HP",
    "name": "HP LaserJet Pro MFP M126nw Multi-function WiFi Monochrome Laser Printer  (Black, Toner Cartridge)",
    "tagline": "HP Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine HP LaserJet Pro MFP M126nw Multi-function WiFi Monochrome Laser Printer  (Black, Toner Cartridge) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 21300,
    "mrp": 23525,
    "badge": "TRENDING",
    "sku": "LAPPY-30719168",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/CAQMU33d.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/CAQMU33d.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "HP Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "HP LaserJet Pro MFP M126nw Multi-function WiFi Monochrome Laser Printer  (Black, Toner Cartridge)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 11,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "lappy-scraped-30719400",
    "slug": "canon-lbp6030b-single-function-monochrome-laser-printer-blac-30719400",
    "brand": "Canon",
    "name": "Canon LBP6030B Single Function Monochrome Laser Printer  (Black, Toner Cartridge)",
    "tagline": "Canon Certified Hardware · Store Pickup & All India Delivery",
    "editorialSummary": "Genuine Canon LBP6030B Single Function Monochrome Laser Printer  (Black, Toner Cartridge) available at LAPPY SOLUTION store (Chiniya Road, Garhwa, Jharkhand). 100% genuine tested unit with warranty.",
    "price": 10800,
    "mrp": 12995,
    "sku": "LAPPY-30719400",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://cdn.dotpe.in/longtail/store-items/8473996/vOf06I1N.webp",
      "hover": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      "angles": [
        {
          "label": "Original Unit View",
          "src": "https://cdn.dotpe.in/longtail/store-items/8473996/vOf06I1N.webp"
        },
        {
          "label": "Front Display Open",
          "src": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Tactile Keyboard & Deck",
          "src": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Side Ports & Profile",
          "src": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
          "label": "Full System Workspace",
          "src": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Canon Genuine Sealed Pack",
        "priceModifier": 0
      }
    ],
    "specs": {
      "processor": "Standard Commercial Grade",
      "ram": "Compatible with Laptop/Desktop",
      "storage": "N/A",
      "display": "N/A",
      "graphics": "N/A",
      "battery": "Brand Verified Capacity",
      "weight": "Standard Unit Weight",
      "os": "Universal Compatibility",
      "ports": "Standard Connectivity"
    },
    "highlights": [
      "100% Genuine product directly from LAPPY SOLUTION Garhwa Inventory",
      "Tested for stability and performance before dispatch",
      "GST Invoice with HSN code provided for business claiming",
      "Prompt customer care support on WhatsApp and phone: 9608828288"
    ],
    "inTheBox": [
      "Canon LBP6030B Single Function Monochrome Laser Printer  (Black, Toner Cartridge)",
      "Store Warranty Receipt & GST Invoice"
    ],
    "warranty": "Official Brand / Store Warranty by LAPPY SOLUTION Garhwa",
    "rating": 4.7,
    "reviewCount": 27,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp101",
    "slug": "hp-smart-tank-750-all-in-one-print-scan-copy-adf-wifi-color-inkjet-printer-hp-101",
    "brand": "HP",
    "name": "HP Smart Tank 750 All in One • Print • Scan • Copy • ADF Wifi Color Inkjet Printer",
    "tagline": "HP Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "The HP Smart Tank 750 All-in-One Duplex is designed to provide a comprehensive printing solution with features such as high-volume ink tanks, duplex printing, and a user-friendly interface.",
    "price": 24990,
    "mrp": 29762,
    "badge": "CURATED",
    "sku": "PRN-HP-HP101",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/139/615xeSG-XSL._SL1500_-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/139/61GcbwyspsL._SL1500_-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/139/615xeSG-XSL._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/139/61GcbwyspsL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/139/61vC7RPx02L._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/139/71QAaOBbrbL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/139/615xeSG-XSL._SL1500_-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Auto Document Feeder (ADF)",
      "High-Res Flatbed Scanner",
      "High-Speed Copier"
    ],
    "inTheBox": [
      "HP HP Smart Tank 750 All in One Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 12,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-epson-l3352",
    "slug": "epson-ecotank-a4-wi-fi-all-in-one-ink-tank-printer-scanner-copy-wi-fi-air-print--l3352",
    "brand": "Epson",
    "name": "Epson EcoTank A4 Wi-Fi All-in-One Ink Tank Printer • Scanner • copy • Wi-Fi • Air Print • Black • L3352",
    "tagline": "Epson Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "The EcoTank L3352 multi-function printer is designed for printing with true convenience at home. One can expect a high print yield of up to 7,500 pages colour - for non-stop printing. It can even print borderless photos - up to 4R in size. The integrated ink tanks and designated nozzles ensure spill-free and error-free refilling. Wireless connectivity enables printing from smart devices. Epson’s Heat-Free Technology helps keep power consumption to a minimum, giving it the capability to print even on a UPS. The Epson Smart Panel app can be downloaded on mobile to manage the printer’s functions and setup with ease.",
    "price": 14990,
    "mrp": 17999,
    "badge": "TRENDING",
    "sku": "PRN-EPSON-L3352",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/136/411DeCgsHsL-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/136/L3313.jpg-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/411DeCgsHsL-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/L3313.jpg-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/L2213_Side.jpg-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/250523_Lou3MCX_BodyBlack_TankBlack_FET13_Final.jpg-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/250523_Lou3MDX_BodyBlack_TankBlack_FET11_1_Final.jpg-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/61C-6tvqQ1L._SL1080_.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/136/61l_2NAui1L._SL1080_.jpg.png"
        },
        {
          "label": "Detailed Angle 8",
          "src": "https://www.myg.in/images/detailed/136/411DeCgsHsL-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Crisp Monochrome Output"
    ],
    "inTheBox": [
      "Epson Epson EcoTank A4 Wi-Fi All-in-One Ink Tank Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 19,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-canon-g2012",
    "slug": "canon-inkjet-printer-with-2-additional-ink-bottle-black-g2012-g2012",
    "brand": "Canon",
    "name": "Canon Inkjet Printer with 2 Additional Ink bottle • Black • G2012",
    "tagline": "Canon Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Canon PIXMA G2012.Refillable Ink Tank All-In-One for High Volume Printing with 2 additional black ink bottles. This printer is designed for high-volume printing at a low running cost. Available in Black, this printer supports Print, Scan & Copy, with an ISO Standard print speed (A4): 8.8 images per minute (mono) / 5.0 images per minute (colour) and Photo Speed (10.16 x 15.24cm): 60s (borderless). It has USB 2.0, connectivity. The recommended print volume: is 1000 to 1500 prints.",
    "price": 12990,
    "mrp": 15275,
    "badge": "TRENDING",
    "sku": "PRN-CANON-G2012",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/135/51nTc7SYIxL._SL1500-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/135/61_aGCmqx4L._SL1500-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/51nTc7SYIxL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/61_aGCmqx4L._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/61ffVtT4zsL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/71y_wfGgo0L._SL1500.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/135/51nTc7SYIxL._SL1500-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Inkjet Printer with 2 Additional Ink bottle Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 26,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-canon-g3780",
    "slug": "canon-pixma-all-in-one-inktank-colour-printer-with-atomix-grab-speaker-white-g37-g3780",
    "brand": "Canon",
    "name": "Canon Pixma All-in-one Inktank Colour Printer With Atomix Grab Speaker • White • G3780",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon Pixma All-in-one Inktank Colour Printer With Atomix Grab Speaker | White | G3780 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 19290,
    "mrp": 23095,
    "badge": "TRENDING",
    "sku": "PRN-CANON-G3780",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/135/61PZD2DeqrL._SL1500-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/135/71x0lfLLVZL._SL1500-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/61PZD2DeqrL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/71x0lfLLVZL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/71sDCqqx4zL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/135/71sVjKAnQiL._SL1500-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/135/61PZD2DeqrL._SL1500-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Pixma All-in-one Inktank Colour Printer With Atomix Grab Speaker Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 33,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-epson-l3310",
    "slug": "epson-ecotank-all-in-one-ink-tank-printer-l3310-l3310",
    "brand": "Epson",
    "name": "Epson EcoTank All in One Ink Tank Printer • L3310",
    "tagline": "Epson Ink Tank Printer • USB High Yield",
    "editorialSummary": "The multifunctional printing solutions - EcoTank L3310 is designed to improve business cost savings and print productivity. One can expect a high print yield of up to 4,500 pages colour - for non-stop printing. You can even print borderless photos up to 4R size. The integrated ink tanks and designated nozzles ensure spill-free and error-free refilling",
    "price": 12990,
    "mrp": 14999,
    "badge": "NEW",
    "sku": "PRN-EPSON-L3310",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/134/L3350_frontBodyBlack_TankGrey_360_01-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/134/250430_Lou3MDX_BodyBlack_TankGrey_STD6_Final-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/134/L3350_frontBodyBlack_TankGrey_360_01-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/134/250430_Lou3MDX_BodyBlack_TankGrey_STD6_Final-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/134/250430_Lou3MDX_BodyBlack_TankGrey_STD5_Final-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/134/250523_Lou3MDX_BodyBlack_TankGrey_FET11_1_Final-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/134/L3350_frontBodyBlack_TankGrey_360_01-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "USB 2.0 High Speed",
      "Plug & Play Setup",
      "Authentic Epson India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Epson Epson EcoTank All in One Ink Tank Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 40,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-canon-g3012",
    "slug": "canon-pixma-all-in-one-wireless-ink-tank-colour-printer-black-g3012-g3012",
    "brand": "Canon",
    "name": "Canon Pixma All-in-One Wireless Ink Tank Colour Printer • Black • G3012",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Canon Canon Pixma All-in-One Wireless Ink Tank Colour Printer | Black | G3012 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14990,
    "mrp": 18775,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G3012",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/130/209335_zxdzit-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/130/209335_1_vrboat-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/130/209335_zxdzit-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/130/209335_1_vrboat-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/130/71sTgjjl4dL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/130/61adx5OopnL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/130/209335_zxdzit-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Canon Canon Pixma All-in-One Wireless Ink Tank Colour Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 47,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-brother-t230",
    "slug": "brother-multifunction-ink-tank-printer-print-scan-copy-dcp-t230-t230",
    "brand": "Brother",
    "name": "brother Multifunction Ink Tank Printer • Print Scan Copy • DCP-T230",
    "tagline": "Brother Ink Tank Printer • USB High Yield",
    "editorialSummary": "Brother brother Multifunction Ink Tank Printer | Print Scan Copy | DCP-T230 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12290,
    "mrp": 15590,
    "badge": "TOP DEAL",
    "sku": "PRN-BROTHER-T230",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/123/DCP-T230-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/123/HT1_CGImage_DCP_T230W_3QL-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/DCP-T230-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/HT1_CGImage_DCP_T230W_3QL-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/HT1_CGImage_DCP_T230W_3QR-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/123/DCP-T230-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Authentic Brother India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Brother brother Multifunction Ink Tank Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 54,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-hp-hp102",
    "slug": "hp-single-function-monochrome-laser-printer-black-white-1008a-hp-102",
    "brand": "HP",
    "name": "HP Single Function Monochrome Laser Printer • Black & White • 1008A",
    "tagline": "HP Laser Printer • USB High Yield",
    "editorialSummary": "HP HP Single Function Monochrome Laser Printer | Black & White | 1008A delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced laser printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12600,
    "mrp": 14204,
    "badge": "NEW",
    "sku": "PRN-HP-HP102",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61E2Iie0P5L._SL1500_-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81TPrJ8evWL._SL1500_.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61E2Iie0P5L._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81TPrJ8evWL._SL1500_.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61WzHCtInGL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81U0anH6cNL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/106/61E2Iie0P5L._SL1500_-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP Single Function Monochrome Laser Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 61,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-canon-g1010",
    "slug": "canon-pixma-ink-efficient-g1010-single-function-color-ink-tank-printer-borderles-g1010",
    "brand": "Canon",
    "name": "Canon PIXMA Ink Efficient G1010 • Single Function Color Ink Tank Printer • Borderless Printing",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon PIXMA Ink Efficient G1010 | Single Function Color Ink Tank Printer | Borderless Printing delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 9390,
    "mrp": 12500,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G1010",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/90/1_gloa-k9-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/90/2_6gkg-gv-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/1_gloa-k9-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/2_6gkg-gv-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/3_cr63-um-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/4_u9wa-lh-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/5_qr1f-db.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/90/1_gloa-k9-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA Ink Efficient G1010 Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 68,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-hp-hp104",
    "slug": "hp-single-function-wifi-monochrome-laser-printer-1008w-hp-104",
    "brand": "HP",
    "name": "HP Single Function WiFi Monochrome Laser Printer • 1008W",
    "tagline": "HP Laser Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Product Description Effective Performance Courtesy of its excellent and speedy performance, the HP Laser 1008w Printer renders high-quality results for every print. Sophisticated Technology Featuring LaserJet printing technology, this printer ensures a consistent production of professional-grade results, page after page. Detailed Results Capable of producing clear text, deep black tones, and sharp graphics, this printer eliminates the hassles of dealing with blurry documents. Compact Build Boasting a compact design, this printer occupies minimal storage space in your workspace, effortlessly fitting into small areas for a hassle-free printing setup. User-friendly Laser Printing Experience Compatible with the HP Smart app, this printer offers a hassle-free setup. And, it lets you print and scan documents using your smartphone. So, no more hassle of transferring files to your computer before printing. Energy Efficiency Featuring HP Auto-Off technology, this printer ensures energy-efficient operation by automatically powering off when not in use, thereby helping you reduce energy consumption. Optimal Security Thanks to its password-protected network-embedded web server, this printer ensures safe operation. Exceptional Speed Offering enhanced productivity with high print speeds of up to 20 ppm, this printer empowers you to efficiently manage tasks. So, you won’t have to wait around too long to get your printouts. Network Connectivity Owing to its inbuilt wireless operations, this printer lets you conveniently access, print, and share documents using a network.",
    "price": 13590,
    "mrp": 15840,
    "badge": "NEW",
    "sku": "PRN-HP-HP104",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/85/hp1_5s3d-fy-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/hp2_l6o3-02.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/hp1_5s3d-fy-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/hp2_l6o3-02.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/hp4_b1th-nh.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/hp3_6g85-d2.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/hp5_nrba-es.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/85/hp1_5s3d-fy-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "HP HP Single Function WiFi Monochrome Laser Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 75,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-epson-l130",
    "slug": "epson-l130-single-function-inkjet-printer-l130",
    "brand": "Epson",
    "name": "Epson L130 Single Function Inkjet Printer",
    "tagline": "Epson Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Page Yield A 70 ml refill ink bottle (sold separately) can yield up to 4000 pages (black) and up to 6500 pages (color) at low running costs. High Print Speed This printer offers up to 27 black and white pages per minute and up to 15 colored pages per minute. Print Quality Print high-quality documents for all your personal and creative needs. Boasting a high resolution of up to 5760X1440 dpi, this printer ensures bold text and sharp images. Space-saving Design Perfectly designed for modern homes and offices, this printer is compact and does not take too much space.",
    "price": 10200,
    "mrp": 12999,
    "badge": "TOP DEAL",
    "sku": "PRN-EPSON-L130",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl3_ji8n-jz-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl1_82oe-17-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl3_ji8n-jz-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl1_82oe-17-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl2_f8z9-e1-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl4_7m4q-i0-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/bl5_z3uu-ki-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/92/bl3_ji8n-jz-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "USB 2.0 High Speed",
      "Plug & Play Setup",
      "Authentic Epson India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Epson Epson L130 Single Function Inkjet Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 17,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-hp-hp106",
    "slug": "hp-smart-tank-525-all-in-one-printer-hp-106",
    "brand": "HP",
    "name": "HP Smart Tank 525 All-in-One Printer",
    "tagline": "HP Ink Tank Printer • USB High Yield",
    "editorialSummary": "HP Smart Tank 525 All-in-One Printer",
    "price": 11399,
    "mrp": 14552,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP106",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/75/Screenshot_2024-02-12_114547-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/75/Screenshot_2024-02-12_114635-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/Screenshot_2024-02-12_114547-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/Screenshot_2024-02-12_114635-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/detailed/75/Screenshot_2024-02-12_114547-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "USB 2.0 High Speed",
      "Plug & Play Setup",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "HP HP Smart Tank 525 All-in-One Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 24,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": true
  },
  {
    "id": "prn-hp-hp101",
    "slug": "hp-smart-tank-675-wi-fi-all-in-one-printer-duplexer-hp-101",
    "brand": "HP",
    "name": "HP Smart Tank 675 Wi Fi All-in-One Printer Duplexer",
    "tagline": "HP Ink Tank Printer • USB High Yield",
    "editorialSummary": "HP Smart Tank 675 Wi Fi All-in-One Printer Duplexer",
    "price": 19500,
    "mrp": 21802,
    "badge": "NEW",
    "sku": "PRN-HP-HP101",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/81/smart-tank-675-all-in-one-printer-hp-original-imagczycpp35mh6z-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/51/smart-tank-675-all-in-one-printer-hp-original-imagczycpjugjjmn.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/81/smart-tank-675-all-in-one-printer-hp-original-imagczycpp35mh6z-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/51/smart-tank-675-all-in-one-printer-hp-original-imagczycpjugjjmn.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/81/smart-tank-675-all-in-one-printer-hp-original-imagczycjakdkcpm-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/81/smart-tank-675-all-in-one-printer-hp-original-imagczycvz7a9hxm-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/81/smart-tank-675-all-in-one-printer-hp-original-imagczycpp35mh6z-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Auto Two-Sided Printing",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP Smart Tank 675 Wi Fi All-in-One Printer Duplexer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 31,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-l3250",
    "slug": "epson-multi-function-wifi-color-inkjet-printer-l3250-black-l3250",
    "brand": "Epson",
    "name": "Epson Multi-function WiFi Color Inkjet Printer • L3250 • Black",
    "tagline": "Epson Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Printer Type - All-in-One Ink Tank Printer (Print, scan, copy); Printer Output - Colour; Connectivity - USB, Wi-Fi; Scanner Resolution - 1200 x 2400 dpi; Airprint - No OS Compatibility - Windows XP / XP Professional / Vista / 7 / 8 / 8.1 / 10Windows Server 2003 / 2008 / 2012 / 2016 / 2019Mac OS X 10.6.8 or later; Mobile connectivity - Yes; Enlarge/reduce option - Yes; Duplex- Manual Maximum Print Speed- 15 ppm (Color), 33 ppm (Monochrome); Print cost - 7 paise (Black & White); 18 paise (Colour) Page size supported - A4, Legal size, letter; Max paper thickness -256 GSM; Power wattage - 12W Save up to 90% on printing costs1 with Epson’s cartridge-free EcoTank printers. Supplied with high yield ink bottles, the integrated ink tanks are easy to fill thanks to the specially engineered ink bottles. With no cartridges to replace, and flexible connectivity features, this is the perfect printer for anyone looking for high-quality prints at an incredibly low cost per page.",
    "price": 14600,
    "mrp": 17999,
    "badge": "TRENDING",
    "sku": "PRN-EPSON-L3250",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/75/ep1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/detailed/75/ep1-removebg-preview.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/ep1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/detailed/75/ep1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Epson India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Epson Epson Multi-function WiFi Color Inkjet Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 38,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp103",
    "slug": "hp-smart-tank-585-all-in-one-multi-function-wifi-color-inkjet-printer-grey-white-hp-103",
    "brand": "HP",
    "name": "HP Smart Tank 585 All-in-One Multi-function WiFi Color Inkjet Printer • Grey White",
    "tagline": "HP Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "HP HP Smart Tank 585 All-in-One Multi-function WiFi Color Inkjet Printer | Grey White delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14490,
    "mrp": 17828,
    "badge": "TRENDING",
    "sku": "PRN-HP-HP103",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/85/image-removebg-preview__81__akbc-kx.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf2.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/image-removebg-preview__81__akbc-kx.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf2.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf3.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf4.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf5.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/mf6.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/85/image-removebg-preview__81__akbc-kx.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "HP HP Smart Tank 585 All-in-One Multi-function WiFi Color Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 45,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp104",
    "slug": "hp-smart-tank-all-in-one-580-multi-function-wifi-color-inkjet-printer-grey-white-hp-104",
    "brand": "HP",
    "name": "HP Smart Tank All In One 580 Multi-function WiFi Color Inkjet Printer • Grey White",
    "tagline": "HP Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "You can print assignments and documents with vibrant colours and legible texts using the HP Smart Tank 580 All-in-one Colour Printer. It helps you accomplish printing tasks in less time with its hassle-free mobile setup, guided buttons, two-sided printing, low-ink sensors, self-healing Wi-Fi, and exceptional print quality. In addition, with the powerful HP Smart app features, this printer lets you easily print and scan from anywhere. Moreover, this printer boasts smart-guided buttons that illuminate and provide assistance as you print.",
    "price": 15300,
    "mrp": 18848,
    "badge": "TRENDING",
    "sku": "PRN-HP-HP104",
    "inStock": true,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/74/HP_Smart_Tank_All_In_One_580-1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/39/HP_Smart_Tank_All_In_One_580-2.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/74/HP_Smart_Tank_All_In_One_580-1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/39/HP_Smart_Tank_All_In_One_580-2.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/39/HP_Smart_Tank_All_In_One_580-3.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/39/HP_Smart_Tank_All_In_One_580-4.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/74/HP_Smart_Tank_All_In_One_580-1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "HP HP Smart Tank All In One 580 Multi-function WiFi Color Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 52,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-l2440dw",
    "slug": "brother-auto-duplex-laser-printer-30-ppm-print-speed-lcd-display-64-mb-memory-hl-l2440dw",
    "brand": "Brother",
    "name": "Brother Auto Duplex Laser Printer • 30 PPM Print Speed • LCD Display • 64 MB Memory • HL-L2440DW",
    "tagline": "Brother Laser Printer • USB High Yield",
    "editorialSummary": "Brother Brother Auto Duplex Laser Printer | 30 PPM Print Speed | LCD Display | 64 MB Memory | HL-L2440DW delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced laser printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14490,
    "mrp": 17990,
    "badge": "TRENDING",
    "sku": "PRN-BROTHER-L2440DW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/128/61MNRCsaVcL._SL1500_-removebg-preview_9e19-hz.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/128/717KIgs4gUL._SL1500_-removebg-preview_30sr-42.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/128/61MNRCsaVcL._SL1500_-removebg-preview_9e19-hz.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/128/717KIgs4gUL._SL1500_-removebg-preview_30sr-42.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/128/713f6mxlIvL._SL1500__n1l1-nk.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/128/71up_idxEsL._SL1500__h9dk-86.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/128/61MNRCsaVcL._SL1500_-removebg-preview_9e19-hz.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Auto Two-Sided Printing",
      "Authentic Brother India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Brother Brother Auto Duplex Laser Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 59,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-t830dw",
    "slug": "brother-wifi-ink-tank-printer-copy-with-auto-duplex-black-dcp-t830dw-t830dw",
    "brand": "Brother",
    "name": "Brother WiFi Ink Tank Printer • Copy with Auto Duplex • Black • DCP-T830DW",
    "tagline": "Brother Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "This Brother’s printer, designed for high-volume use in homes or small offices, offers exceptional print yields with an ultra-high-yield ink system, producing up to 15,000 black pages and 5,000 colour pages. It boasts fast print speeds of up to 30 ppm for black and 26 ppm for colour, along with automatic two-sided printing and a 20-sheet Automatic Document Feeder for efficient multi-page document handling. With a versatile 150-sheet standard tray and an 80-sheet multi-purpose tray, it accommodates various printing tasks and also features Wi-Fi and mobile connectivity for convenient smartphone printing and scanning.",
    "price": 20990,
    "mrp": 25590,
    "badge": "CURATED",
    "sku": "PRN-BROTHER-T830DW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/126/61uol69EEvL._SL1500_-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/126/71SumIww8XL._SL1500_.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/61uol69EEvL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/71SumIww8XL._SL1500_.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/71rZ6tcCgkL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/719o8Q8bcqL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/71W-1C7aa_L._SL1500_.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/126/71WJQldu3GL._SL1500_.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/126/61uol69EEvL._SL1500_-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Auto Two-Sided Printing",
      "High-Speed Copier",
      "Crisp Monochrome Output"
    ],
    "inTheBox": [
      "Brother Brother WiFi Ink Tank Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 66,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-m126nw",
    "slug": "hp-laserjet-pro-mfp-multi-function-wi-fi-monochrome-laser-printer-wireless-direc-m126nw",
    "brand": "HP",
    "name": "HP LaserJet Pro MFP Multi Function Wi-Fi Monochrome Laser Printer • Wireless Direct Printing • Black • M126nw",
    "tagline": "HP Laser Printer • Wireless High Yield",
    "editorialSummary": "HP HP LaserJet Pro MFP Multi Function Wi-Fi Monochrome Laser Printer | Wireless Direct Printing | Black | M126nw delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced laser printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 22990,
    "mrp": 23526,
    "badge": "CURATED",
    "sku": "PRN-HP-M126NW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/123/laserjet-pro-mfp-m126nw-hp-original-imah52ea8rwhztdb-removebg-preview_t7qb-30.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/123/51ytS-7znNL.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/laserjet-pro-mfp-m126nw-hp-original-imah52ea8rwhztdb-removebg-preview_t7qb-30.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/51ytS-7znNL.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/51QyH0_ME0L.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/123/51Cf6pI1HyL_eryo-v4.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/123/laserjet-pro-mfp-m126nw-hp-original-imah52ea8rwhztdb-removebg-preview_t7qb-30.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "HP HP LaserJet Pro MFP Multi Function Wi-Fi Monochrome Laser Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 73,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-l3560",
    "slug": "epson-ecotank-multi-function-wifi-color-ink-tank-printer-l3560-l3560",
    "brand": "Epson",
    "name": "Epson EcoTank Multi-function WiFi Color Ink Tank Printer • L3560",
    "tagline": "Epson Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Epson Epson EcoTank Multi-function WiFi Color Ink Tank Printer | L3560 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 16800,
    "mrp": 19500,
    "badge": "NEW",
    "sku": "PRN-EPSON-L3560",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/119/pp1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/119/pp2.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/119/pp1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/119/pp2.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/119/pp3.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/119/pp1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Epson India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Epson Epson EcoTank Multi-function WiFi Color Ink Tank Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 15,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-generic-ic0250",
    "slug": "fujifilm-instax-square-link-printer-starter-kit-ic0250-green-ic0250",
    "brand": "Generic",
    "name": "Fujifilm Instax Square Link Printer Starter Kit • IC0250 • Green",
    "tagline": "Generic All-in-One Multifunction • USB High Yield",
    "editorialSummary": "Generic Fujifilm Instax Square Link Printer Starter Kit | IC0250 | Green delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced all-in-one multifunction technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14999,
    "mrp": 21999,
    "badge": "TOP DEAL",
    "sku": "PRN-GENERIC-IC0250",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/118/Kit2-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/118/Kit3-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/118/Kit2-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/118/Kit3-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/118/kit4-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/118/kit5-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/118/kit1.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/118/Kit2-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "USB 2.0 High Speed",
      "Plug & Play Setup",
      "Authentic Generic India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Generic Fujifilm Instax Square Link Printer Starter Kit Unit",
      "Genuine Generic Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 22,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-m1050",
    "slug": "epson-single-function-wifi-monochrome-inkjet-printer-m1050-m1050",
    "brand": "Epson",
    "name": "Epson Single Function WiFi Monochrome Inkjet Printer • M1050",
    "tagline": "Epson Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "Compact and Durable Ecological Design Replaceable Maintenance Box reduces downtime Rear feeding printer with input tray capacity of 100 A4 sheets which supports thicker media like legal paper. Easy operation with Epson Smart Panel Easy refill with high capacity ink tank (6,000 pages) Support Wi-Fi and Ethernet connectivity Water resistant pigment ink with high yield of up to 6,000 pages 1-year warranty or 50,000 pages, whichever comes first (inclusive of printhead) Powered by Epson Heat-Free Technology (Operating power 12W)",
    "price": 12990,
    "mrp": 13990,
    "badge": "NEW",
    "sku": "PRN-EPSON-M1050",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jwagvaac8-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jzgvtz9sp-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jwagvaac8-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jzgvtz9sp-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jhggz7nfp-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jwgzr8bzf-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/117/eco-tank-m1050-inktank-printer-epson-original-imagyh9jwagvaac8-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic Epson India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Epson Epson Single Function WiFi Monochrome Inkjet Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 29,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp105",
    "slug": "hp-deskjet-ink-advantage-ultra-multi-function-wifi-color-inkjet-printer-4929-hp-105",
    "brand": "HP",
    "name": "HP DeskJet Ink Advantage Ultra • Multi-function WiFi Color Inkjet Printer • 4929",
    "tagline": "HP Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "HP HP DeskJet Ink Advantage Ultra | Multi-function WiFi Color Inkjet Printer | 4929 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced color inkjet printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 8699,
    "mrp": 10938,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP105",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/117/image-removebg-preview__40_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nztygfxzq.webp.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/image-removebg-preview__40_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nztygfxzq.webp.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nfgykj3zy.webp.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nshw2jqqa.webp.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nd57dwbh4.webp.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nvmvghmjx.webp.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/117/-original-imaguy2nnq8as9bj.webp.png"
        },
        {
          "label": "Detailed Angle 8",
          "src": "https://www.myg.in/images/detailed/117/image-removebg-preview__40_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "HP HP DeskJet Ink Advantage Ultra Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 36,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp106",
    "slug": "hp-smart-tank-521-all-in-one-printer-multi-function-color-ink-tank-black-hp-106",
    "brand": "HP",
    "name": "HP Smart Tank 521 All in One Printer • Multi function Color Ink Tank • Black",
    "tagline": "HP Ink Tank Printer • USB High Yield",
    "editorialSummary": "The HP Printer 521 is a powerful all-in-one printer designed for home and office use. With high-quality printing, scanning, and copying features, it delivers crisp and vibrant results every time. This printer offers wireless connectivity, allowing you to print directly from your smartphone, tablet, or computer for maximum convenience. It’s designed to work efficiently, providing fast print speeds and low energy consumption, making it an eco-friendly choice. The HP Printer 521 combines reliability and ease of use with a compact design that saves space, ensuring excellent performance for your daily printing, scanning, and copying tasks.",
    "price": 12250,
    "mrp": 18848,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP106",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/110/31gT5Y1ppFL-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/110/41rSHA_46UL._SL1000_-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/110/31gT5Y1ppFL-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/110/41rSHA_46UL._SL1000_-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/110/41vRTA1SVvL._SL1000_-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/110/510BnZJ3M9L._SL1000_-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/110/31juPFXrF5L._SL1000_-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/110/31gT5Y1ppFL-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP Smart Tank 521 All in One Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 43,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-lbp6030b",
    "slug": "canon-image-class-lbp6030b-single-function-laser-monochrome-printer-black-6030b-lbp6030b",
    "brand": "Canon",
    "name": "Canon image CLASS LBP6030B Single Function Laser Monochrome Printer • Black • 6030B",
    "tagline": "Canon Laser Printer • USB High Yield",
    "editorialSummary": "Canon Canon image CLASS LBP6030B Single Function Laser Monochrome Printer | Black | 6030B delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced laser printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12290,
    "mrp": 12500,
    "badge": "NEW",
    "sku": "PRN-CANON-LBP6030B",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/510YZlOSuAL._SL1500_-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/5150IShAoTL._SL1500_-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/510YZlOSuAL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/5150IShAoTL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61grIMRiRgL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/51YFp_TmUyL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61mgNZ1ySwL._SL1500_.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71aZ2WFG2zL._SL1500___1_-removebg-preview.png.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/106/510YZlOSuAL._SL1500_-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon image CLASS LBP6030B Single Function Laser Monochrome Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 50,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-m1120",
    "slug": "epson-ecotank-monochrome-wi-fi-ink-tank-printer-m1120-m1120",
    "brand": "Epson",
    "name": "Epson EcoTank Monochrome Wi Fi Ink Tank Printer • M1120",
    "tagline": "Epson Ink Tank Printer • USB High Yield",
    "editorialSummary": "Epson Epson EcoTank Monochrome Wi Fi Ink Tank Printer | M1120 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12990,
    "mrp": 13990,
    "badge": "NEW",
    "sku": "PRN-EPSON-M1120",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/512WOhSkElL._SL1500_-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/31sE45enIcL-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/512WOhSkElL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/31sE45enIcL-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/21Ei6J7ylRL-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/314K6ZyCElL-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/106/512WOhSkElL._SL1500_-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Epson India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Epson Epson EcoTank Monochrome Wi Fi Ink Tank Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 57,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-l2321d",
    "slug": "brother-automatic-duplex-laser-printer-high-speed-mono-laser-black-hl-l2321d-l2321d",
    "brand": "Brother",
    "name": "Brother Automatic Duplex Laser Printer • High-Speed Mono Laser • Black • HL-L2321D",
    "tagline": "Brother Laser Printer • USB High Yield",
    "editorialSummary": "Brother Brother Automatic Duplex Laser Printer | High-Speed Mono Laser | Black | HL-L2321D delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced laser printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 10900,
    "mrp": 12390,
    "badge": "NEW",
    "sku": "PRN-BROTHER-L2321D",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/20240519044421_HL_L2321D-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/HL-L2321D-R-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/20240519044421_HL_L2321D-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/HL-L2321D-R-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/HL-L2321D-L-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/106/20240519044421_HL_L2321D-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Auto Two-Sided Printing",
      "Crisp Monochrome Output",
      "Authentic Brother India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Brother Brother Automatic Duplex Laser Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 64,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-t820dw",
    "slug": "brother-multi-function-ink-tank-printer-wifi-auto-duplex-color-black-dcp-t820dw-t820dw",
    "brand": "Brother",
    "name": "Brother Multi-function Ink Tank Printer • WiFi & Auto Duplex Color • Black • DCP-T820DW",
    "tagline": "Brother Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Brother Brother Multi-function Ink Tank Printer | WiFi & Auto Duplex Color | Black | DCP-T820DW delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 18700,
    "mrp": 18900,
    "badge": "NEW",
    "sku": "PRN-BROTHER-T820DW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/515yRecAYfL._SL1500_-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtzvzwgkkaqze.webp.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/515yRecAYfL._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtzvzwgkkaqze.webp.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtzvzufw7xzuq.webp.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtzvzx3h8hpce.webp.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtzvzuefbwujh.webp.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/106/515yRecAYfL._SL1500_-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Auto Two-Sided Printing",
      "Vivid Color Output",
      "Authentic Brother India Certified Retail Unit"
    ],
    "inTheBox": [
      "Brother Brother Multi-function Ink Tank Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 71,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp105",
    "slug": "hp-deskjet-multi-function-inkjet-printer-copy-scan-wifi-cement-2876-hp-105",
    "brand": "HP",
    "name": "HP DeskJet Multi function Inkjet Printer • Copy • Scan • WiFi • Cement • 2876",
    "tagline": "HP Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "HP HP DeskJet Multi function Inkjet Printer | Copy | Scan | WiFi | Cement | 2876 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced color inkjet printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 8090,
    "mrp": 12500,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP105",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61HcutgfDML._SL1500_-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61e_N22S1dL._SL1500_.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61HcutgfDML._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61e_N22S1dL._SL1500_.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71C8PZ76amL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81Pgybnl5mL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/-original-imagtxh5zgjr8gsf.webp.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/106/61HcutgfDML._SL1500_-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Authentic HP India Certified Retail Unit"
    ],
    "inTheBox": [
      "HP HP DeskJet Multi function Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 13,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2010",
    "slug": "canon-pixma-multi-function-ink-tank-printer-black-g2010-g2010",
    "brand": "Canon",
    "name": "Canon Pixma Multi function Ink Tank Printer • Black • G2010",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon Pixma Multi function Ink Tank Printer | Black | G2010 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12200,
    "mrp": 13200,
    "badge": "NEW",
    "sku": "PRN-CANON-G2010",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61-5VB07SlL._SL1500_-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/617hTRJTgFL._SL1500_-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61-5VB07SlL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/617hTRJTgFL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61e7KTK0ygL._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61cM94xbP4L._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/712RfaoFR8L._SL1500_.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/719aRcWoF6L._SL1500_.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/106/61-5VB07SlL._SL1500_-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Pixma Multi function Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 20,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g1737",
    "slug": "canon-pixma-ink-tank-printer-single-function-black-g1737-g1737",
    "brand": "Canon",
    "name": "Canon PIXMA Ink Tank Printer • Single Function • Black • G1737",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon PIXMA Ink Tank Printer | Single Function | Black | G1737 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 9990,
    "mrp": 12000,
    "badge": "TRENDING",
    "sku": "PRN-CANON-G1737",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/51aA1_FcZ7L._SL1500_-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61PrsA8Wy-L._SL1500_-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/51aA1_FcZ7L._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61PrsA8Wy-L._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/519CGQSPl0L._SL1500_-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/519CGQSPl0L._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61SKghJjijL._SL1500_.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71_zv1278zL._SL1500_.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71wMTA59nSL._SL1500_.jpg.png"
        },
        {
          "label": "Detailed Angle 8",
          "src": "https://www.myg.in/images/detailed/106/51aA1_FcZ7L._SL1500_-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 27,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp102",
    "slug": "hp-deskjet-multi-function-inkjet-printer-print-scan-copy-blue-breeze-2878-hp-102",
    "brand": "HP",
    "name": "HP DeskJet Multi function Inkjet Printer • Print • Scan • Copy • Blue Breeze • 2878",
    "tagline": "HP Color Inkjet Printer • USB High Yield",
    "editorialSummary": "HP HP DeskJet Multi function Inkjet Printer | Print | Scan | Copy | Blue Breeze | 2878 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced color inkjet printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 6500,
    "mrp": 12500,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP102",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/106/513O2L5njBL._SL1500_-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61HHkkzqt4L._SL1500_.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/513O2L5njBL._SL1500_-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/61HHkkzqt4L._SL1500_.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71A2npwwPlL._SL1500_.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81lY8b6pxrL._SL1500_.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71GhF56hqzL._SL1500_.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/81MqEVdvrwL._SL1500_.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/106/71cIF0nkYML._SL1500_.jpg.png"
        },
        {
          "label": "Detailed Angle 8",
          "src": "https://www.myg.in/images/detailed/106/513O2L5njBL._SL1500_-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "HP HP DeskJet Multi function Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 34,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp103",
    "slug": "hp-deskjet-ink-advantage-printer-printing-and-scanning-multi-function-color-inkj-hp-103",
    "brand": "HP",
    "name": "HP DeskJet Ink Advantage Printer • printing and scanning • Multi function Color Inkjet Printer • 2338",
    "tagline": "HP Color Inkjet Printer • USB High Yield",
    "editorialSummary": "HP HP DeskJet Ink Advantage Printer | printing and scanning | Multi function Color Inkjet Printer | 2338 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced color inkjet printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 6190,
    "mrp": 6458,
    "badge": "NEW",
    "sku": "PRN-HP-HP103",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/81/1_zdaf-nh-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/71/3_h2nh-ei.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/81/1_zdaf-nh-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/71/3_h2nh-ei.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/71/4_8pp8-vn.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/71/5_f28t-2j.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/81/2_t2fh-hr-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/81/1_zdaf-nh-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "High-Res Flatbed Scanner",
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "HP HP DeskJet Ink Advantage Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 41,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g3730",
    "slug": "canon-pixma-all-in-one-wireless-inktank-printer-small-size-ink-bottles-g3730-g3730",
    "brand": "Canon",
    "name": "Canon PIXMA • All in one Wireless Inktank Printer • Small Size Ink Bottles • G3730",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Canon Canon PIXMA | All in one Wireless Inktank Printer | Small Size Ink Bottles | G3730 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14300,
    "mrp": 16295,
    "badge": "NEW",
    "sku": "PRN-CANON-G3730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/73/1_jhc8-18-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/73/2_o9tz-mz-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/73/1_jhc8-18-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/73/2_o9tz-mz-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/73/3_wa7r-3m-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/73/4_kiut-z9-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/73/1_jhc8-18-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 48,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp105",
    "slug": "hp-smart-tank-581-multi-function-wifi-color-ink-tank-printer-scan-copy-with-2-ex-hp-105",
    "brand": "HP",
    "name": "HP Smart Tank 581 • Multi-function WiFi Color Ink Tank Printer • Scan• Copy with 2 Extra Black Ink Bottle",
    "tagline": "HP Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "You can meet almost all of your printing and scanning requirements with the HP Smart Tank 581 All-in-one Printer. It provides a convenient and efficient printing solution with its smart guided buttons, user-friendly interface, easy mobile setup, and automatic Wi-Fi recovery. In addition, thanks to this advanced printer, you can easily save your scanned documents as searchable and editable PDF, TXT, and DOCX files. Furthermore, this printer's auto image correction makes scanning books a breeze.",
    "price": 15000,
    "mrp": 18848,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP105",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/75/1_72lp-hs-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/69/2_6h20-up.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/1_72lp-hs-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/2_6h20-up.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/3_16kz-yd.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/4_kkqx-y5.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/5_vchu-fd.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/6_yxt5-yn.jpg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/7_rrbp-1u.jpg.png"
        },
        {
          "label": "Detailed Angle 8",
          "src": "https://www.myg.in/images/detailed/75/1_72lp-hs-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Vivid Color Output"
    ],
    "inTheBox": [
      "HP HP Smart Tank 581 Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 55,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g3730",
    "slug": "canon-pixma-g3730-multi-function-wi-fi-ink-tank-printer-small-ink-bottles-mobile-g3730",
    "brand": "Canon",
    "name": "Canon Pixma • G3730 Multi Function Wi-Fi Ink Tank Printer Small Ink Bottles Mobile Cloud Printing • Black",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Canon Canon Pixma | G3730 Multi Function Wi-Fi Ink Tank Printer Small Ink Bottles Mobile Cloud Printing | Black delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 14300,
    "mrp": 16295,
    "badge": "NEW",
    "sku": "PRN-CANON-G3730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/79/1_8csp-sj-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/79/2_ldkp-nt-removebg-preview__1_.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/79/1_8csp-sj-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/79/2_ldkp-nt-removebg-preview__1_.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/3_ehkm-x4.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/4_8zh3-vy.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/5_i8b9-75.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/6_88gq-1k.jpeg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/79/1_8csp-sj-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Canon Canon Pixma Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 62,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2730",
    "slug": "canon-pixma-g2730-multi-function-ink-tank-printer-small-ink-bottles-dot-count-in-g2730",
    "brand": "Canon",
    "name": "Canon Pixma G2730 • Multi Function Ink Tank Printer Small Ink Bottles • Dot Count Ink End Sensor • Black",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon Pixma G2730 | Multi Function Ink Tank Printer Small Ink Bottles | Dot Count Ink End Sensor | Black delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 11800,
    "mrp": 13365,
    "badge": "NEW",
    "sku": "PRN-CANON-G2730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/73/1_sk9f-8y-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/69/2_xpsf-9u.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/73/1_sk9f-8y-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/2_xpsf-9u.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/4_axdv-dp.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/5_1s4n-43.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/6_nkt6-vi.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/69/7_m1oh-3b.jpeg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/73/1_sk9f-8y-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Pixma G2730 Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 69,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp102",
    "slug": "hp-deskjet-printer-2820-printscancopy-wifi-printer-printer-hp-102",
    "brand": "HP",
    "name": "HP DESKJET PRINTER 2820 PRINTSCANCOPY WIFI PRINTER : PRINTER",
    "tagline": "HP All-in-One Multifunction • Wireless High Yield",
    "editorialSummary": "Simple print app Get started fast by following simple steps on the best and easiest-to-use print app. More done with one device Easily print shipping labels or your favourite recipes and get a lot from one device – print, scan, and copy. Intuitive panel Handle all your printing tasks quickly from the intuitively easy-to-use control panel with buttons. Easy mobile printing Print, scan, copy, or fax right from your smartphone with the best and easiest-to-use HP app.",
    "price": 6200,
    "mrp": 7435,
    "badge": "TRENDING",
    "sku": "PRN-HP-HP102",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p_v53l-4y-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p2_xe1n-2e-removebg-preview__1_.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p_v53l-4y-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p2_xe1n-2e-removebg-preview__1_.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p3_su8u-bj-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/89/p5_vdaj-gc-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/89/p_v53l-4y-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "High-Res Flatbed Scanner",
      "High-Speed Copier",
      "Authentic HP India Certified Retail Unit"
    ],
    "inTheBox": [
      "HP HP DESKJET PRINTER 2820 PRINTSCANCOPY WIFI PRINTER : PRINTER Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 76,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-lbp6030w",
    "slug": "canon-lbp6030w-single-function-wifi-monochrome-laser-printer-lbp6030w",
    "brand": "Canon",
    "name": "Canon LBP6030W Single Function WiFi Monochrome Laser Printer",
    "tagline": "Canon Laser Printer • Wireless High Yield",
    "editorialSummary": "Product Description Sophisticated Technology Sporting Canon's exclusive On-Demand Fixing technology, the Canon imageCLASS LBP6030w Printer ensures less power consumption and quickly warms up. As a result, it delivers a fast warm-up time and rapid first print. Hassle-free Operation Owing to Canon's advanced mobile business solution, this printer allows you to print various documents, photos, web pages, and emails using a single application. All-in-one Device Equipped with the Canon all-in-one toner cartridge 925, this printer combines the photosensitive drum, cleaning unit, and toner reservoir into a single, compact package. This results in cost savings and hassle-free cartridge replacements. Efficient Performance By configuring the printer to enter sleep mode and auto shut down after a specified period of inactivity, this printer reduces energy consumption. Moreover, it has a low power consumption value of only 0.48 kWh/week, which helps you save on electricity bills while also being",
    "price": 13990,
    "mrp": 13995,
    "badge": "NEW",
    "sku": "PRN-CANON-LBP6030W",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/86/ca1-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca5.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/86/ca1-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca5.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca4.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca3.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/86/ca2-removebg-preview__1_.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/86/ca1-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Canon Canon LBP6030W Single Function WiFi Monochrome Laser Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 18,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-canon104",
    "slug": "canon-canoscan-lide-300-scanner-canon-104",
    "brand": "Canon",
    "name": "Canon CanoScan LiDE 300 Scanner",
    "tagline": "Canon All-in-One Multifunction • USB High Yield",
    "editorialSummary": "This compact, portable and fast flatbed scanner from Canon efficiently captures fast, accurate scans of documents and photos. Its 4EZ buttons enable one-touch operation for this scanner. Its advanced Z-lid ensures that even a bulky book can be accommodated in the device while taking a scan.",
    "price": 5500,
    "mrp": 8999,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-CANON104",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/80/scan1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/80/scan4-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/80/scan1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/80/scan4-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/scan2.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/80/scan3-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/80/scan1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "High-Res Flatbed Scanner",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon CanoScan LiDE 300 Scanner Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 25,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2730",
    "slug": "canon-pixma-megatank-g2730-multi-function-wifi-color-ink-tank-printer-with-black-g2730",
    "brand": "Canon",
    "name": "Canon PIXMA MegaTank G2730 • Multi-function WiFi Color Ink Tank Printer with Black",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Product Description High-page-yield Printing With this Canon printer, you can print often for conventional applications without worrying about ink costs. It can print up to 7,600 copies in monochrome and 8,100 pages in colour thanks to high-page-yield ink bottles. Convenient Ink-refill Each nozzle on the ink bottle is specifically designed to fit into the proper ink tank, minimising mixing errors and ensuring a faultless ink-refill process. Highly Durable Even when printing in huge volumes, the simple-to-replace cartridge makes operating hassle-free, extending the printer's lifespan. Sleek Build You can enjoy the printer's exceptional performance wherever it is put thanks to its slender design, which makes it possible for it to fit comfortably in small spaces.",
    "price": 13365,
    "mrp": 13365,
    "badge": "NEW",
    "sku": "PRN-CANON-G2730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/87/can1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/can5.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/87/can1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/can5.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/can4.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/can3.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/can2.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/87/can1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Canon Canon PIXMA MegaTank G2730 Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 32,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-e470",
    "slug": "canon-pixma-e470-multi-function-wifi-color-inkjet-printer-e470",
    "brand": "Canon",
    "name": "Canon PIXMA E470 Multi-function WiFi Color Inkjet Printer",
    "tagline": "Canon Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "Product Description From making your child's homework more attractive to printing those last minute tickets, you can depend on the Canon PIXMA E470 Multifunction Wireless Printer to finish everything faster. Wireless Connectivity You don't have to connect your device via USB to the printer for printing. With this printer, you can get all your printing tasks done on time by connecting your device to the printer wirelessly. One App, Many Advantages You can print, scan, and perform all tasks easily by downloading the Canon PRINT Inkjet/SELPHY application on your smartphone. You can also monitor the ink level status and set up cloud services from wherever you are. Auto Power ON The Auto Power ON feature automatically switches on the printer, as soon as it detects a USB connection.",
    "price": 5499,
    "mrp": 6355,
    "badge": "NEW",
    "sku": "PRN-CANON-E470",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/90/canon1_tuuc-ic-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/90/canon2_wteg-9z-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/canon1_tuuc-ic-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/canon2_wteg-9z-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/detailed/90/canon1_tuuc-ic-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Canon Canon PIXMA E470 Multi-function WiFi Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 39,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp101",
    "slug": "hp-deskjet-ink-advantage-2338-multi-function-color-inkjet-printer-hp-101",
    "brand": "HP",
    "name": "HP DeskJet Ink Advantage 2338 Multi-function Color Inkjet Printer",
    "tagline": "HP Color Inkjet Printer • USB High Yield",
    "editorialSummary": "HP DeskJet Ink Advantage 2338 Multi-function Color Inkjet Printer&nbsp;",
    "price": 5600,
    "mrp": 6980,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP101",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de2-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de2-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de3-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de4-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/de5-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/82/de1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP DeskJet Ink Advantage 2338 Multi-function Color Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 46,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp102",
    "slug": "hp-deskjet-2332-multi-function-color-inkjet-printer-hp-102",
    "brand": "HP",
    "name": "HP DeskJet 2332 Multi-function Color Inkjet Printer",
    "tagline": "HP Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Multipurpose Use Offering reliable, easy-to-use technology, the HP DeskJet 2332 All-in-one Printer allows you to easily print, scan, and copy from one device, thereby fulfilling your daily printing requirements. High-quality Prints Specially designed for high-volume printing, this printer can print a host of documents with ease and in no time. So, whether it be for professional or personal use, this printer is an appropriate choice. Versatile Use Designed to handle everyday printing, scanning, and copying needs, this printer can seamlessly provide dependable and efficient performance. Smooth Setup This printer offers a hassle-free setup from your PC and reliable printing, enabling you to handle your day-to-day printing, scanning, and copying requirements. Also, using the HP Smart app, the setup process is straightforward, and you can quickly get started. Furthermore, you can download the HP Smart app, connect via USB, and set up your printer in just a few clicks. Print Learn Centre With this printer, your child can access over 2000 free learning worksheets. User-friendly Interface Courtesy of its simple setup, user-friendly interface, and smart features, this printer can help you quickly and easily print your everyday documents. Exceptional Print Quality Thanks to its dark and crisp text and vivid graphics, this printer allows you to easily print brochures, business documents, and more in no time. Seamless Connection By simply downloading the HP Smart app and connecting it to this printer, you can easily set it up and print in a jiffy.",
    "price": 4800,
    "mrp": 4972,
    "badge": "NEW",
    "sku": "PRN-HP-HP102",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/image-removebg-preview_-_2024-11-01T120212.209.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/image-removebg-preview_-_2024-11-01T120200.129.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/image-removebg-preview_-_2024-11-01T120212.209.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/image-removebg-preview_-_2024-11-01T120200.129.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/image-removebg-preview_-_2024-11-01T120210.150.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/w1_ajv2-in.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/w4_i5n3-u0.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/92/image-removebg-preview_-_2024-11-01T120212.209.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP DeskJet 2332 Multi-function Color Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 53,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-l8050",
    "slug": "epson-eco-tank-l8050-single-function-color-ink-tank-printer-l8050",
    "brand": "Epson",
    "name": "Epson Eco Tank L8050 Single Function Color Ink Tank Printer",
    "tagline": "Epson Ink Tank Printer • USB High Yield",
    "editorialSummary": "Epson Eco Tank L8050 Single Function Color Ink Tank Printer&nbsp;&nbsp;",
    "price": 24490,
    "mrp": 29999,
    "badge": "CURATED",
    "sku": "PRN-EPSON-L8050",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr2_0k28-i5-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr1_3wyi-ep-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr2_0k28-i5-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr1_3wyi-ep-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr3_2e83-6d-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr4_dk1c-fi-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/92/gr2_0k28-i5-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Epson India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Epson Epson Eco Tank L8050 Single Function Color Ink Tank Printer Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 60,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-t820dw",
    "slug": "brother-dcp-t820dw-multi-function-wifi-color-ink-tank-printer-black-t820dw",
    "brand": "Brother",
    "name": "Brother DCP-T820DW Multi-function WiFi Color Ink Tank Printer • Black",
    "tagline": "Brother Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; High-speed Printing This printer lets you print documents at a speed of up to 30/26 ppm. So, you can print a large number of pages in no time. Also, this computer accessory features Brother's duplex (two-sided) printing function to reduce the wastage of paper and toner while helping you save money. You can easily print 2-up and 4-up on single sheets to save paper while checking drafts and layouts. Efficient Handling This printer comes with a 150 sheets paper tray that can be adjusted as per different sizes of papers to let you efficiently perform a number of printing tasks. Also, there is an additional single-sheet manual feed slot to accommodate different paper types. Furthermore, the 20-sheets auto-document feeder lets you scan and copy multiple pages conveniently. Easy and Accurate Refilling The refill tank system of this printer comes with a transparent cover. So, you can easily access its embedded ink tank from the front. Furthermore, the user-friendly design minimises the chances of leakage and mess. Print from Anywhere This printer comes with a built-in Wi-Fi that allows you to print from multiple sources. Also, it has a direct mobile print option to let you print wirelessly from mobile devices.",
    "price": 18500,
    "mrp": 21590,
    "badge": "NEW",
    "sku": "PRN-BROTHER-T820DW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/86/dc1-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/dc2.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/86/dc1-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/dc2.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/dc3.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/dc4.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/86/dc1-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Brother India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Brother Brother DCP-T820DW Multi-function WiFi Color Ink Tank Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 67,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-gx3070",
    "slug": "canon-maxify-megatank-gx3070-all-in-one-wifi-inktank-printer-white-gx3070",
    "brand": "Canon",
    "name": "Canon MAXIFY MegaTank GX3070 All in One WiFi Inktank Printer • White",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Printer type: Inktank ; Functions: Print, Scan, Copy; Printer output: Colour ; Connectivity: WiFi, Direct Wireless, USB ; Scanner: Yes ; Scanner resolution: 1200x2400 dpi OS Compatibility: Windows 11 / 10 / 8.1 / 7 SP1(operation can only be guaranteed on a PC with a pre-installed Windows 7 or later.), macOS 10.14.16 ~ 12 or later, Chrome OS; Mobile connectivity :Yes (Canon Print Service, Apple AirPrint, Mopria Print Service,MAXIFY Cloud Link, Canon PRINT Inkjet/SELPHY); Hardware Interface: High Speed USB; Enlarge/reduce option: No ; Duplex: No Maximum Print Speed (color): 13 ipm , Maximum Print Speed (Monochrome):18 ipm; Maximum Print Resolution(Color): 600x1200 dpi, Maximum Print Resolution(Monochrome): 600x1200 dpi Page size :A4, A5, A6, B5, LTR, LGL, B-Oficio, M-Oficio, Foolscap, FS, Executive, Envelope [COM10, DL, C5, Monarch]; Max paper thickness: 64 to 275 GSM; Maximum Input Sheet Capacity: 250 sheets (A4) Compatible Ink GI-76 CYMK; Additional Printer Function: High volume printing; Power wattage of printer: OFF- 0.1W, Standby- 0.8W, Copying- 18W Special Features: Duty Cycle- Upto 33,000 prints/ month; Ideal Usage: Office; Included Components: Printer, Power Cord, USB cable, Instruction Manual, 1 set of GI 76 CYMK ink bottles",
    "price": 26860,
    "mrp": 37325,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-GX3070",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/91/wh1_ikbh-he-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/91/wh2_bq9z-zx-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/wh1_ikbh-he-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/wh2_bq9z-zx-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/wh3_k1x0-fq-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/91/wh1_ikbh-he-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon MAXIFY MegaTank GX3070 All in One WiFi Inktank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 74,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2770",
    "slug": "canon-pixma-megatank-g2770-multi-function-color-ink-tank-printer-black-g2770",
    "brand": "Canon",
    "name": "Canon PIXMA MegaTank G2770 Multi-function Color Ink Tank Printer • Black",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "&nbsp; High-page-yield Printing With this Canon printer, you can experience heavy-duty business printing without having to worry about the cost of ink. High-page-yield ink bottles enable it to print up to 7,600 pages in mono and 8,100 pages in colour. Convenient Ink-refill Every nozzle on the ink bottle is made to fit perfectly and solely into the appropriate ink tank, minimising mixing mishaps and ensuring a flawless ink-refill procedure. LCD Panel Device operation and configuration adjustments are made simple without requiring you to reference the user manual owing to the device's 3.04 cm (1.2) Segment LCD display with guided directions. Highly Durable The easy-to-replace cartridge makes operation hassle-free even when printing in large quantities, increasing the life of this printer. Sleek Build The printer's slim form allows it to fit snugly in cramped locations, allowing you to take advantage of its outstanding performance wherever it is placed.",
    "price": 12000,
    "mrp": 15840,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G2770",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/79/me1_qco7-ok-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/me2_4pbd-9h.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/79/me1_qco7-ok-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/me2_4pbd-9h.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/me3_bk1c-5s.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/me4_b3hd-rx.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/79/me1_qco7-ok-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA MegaTank G2770 Multi-function Color Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 16,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g3770",
    "slug": "canon-pixma-g3770-multi-function-wifi-color-inkjet-printer-black-g3770",
    "brand": "Canon",
    "name": "Canon PIXMA G3770 Multi-function WiFi Color Inkjet Printer • Black",
    "tagline": "Canon Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Experience convenient and efficient printing with the&nbsp;Canon Pixma G3770 Wireless Color All-in-One InkTank Printer&nbsp;in an eye-catching design. This printer combines functionality, reliability, and style to meet all your printing needs. Whether you're printing documents, photos, or labels, this printer delivers exceptional quality and performance. Say goodbye to cumbersome cables and enjoy the freedom to print from anywhere within your network. Equipped with WiFi connectivity, it allows you to print wirelessly from your smartphone, tablet, or computer. This&nbsp;Canon Pixma G3770 Wireless Color All-in-One InkTank Printer&nbsp;delivers exceptional print quality with sharp details and vibrant colors up to 11 ppm. The&nbsp;Canon Pixma G3770 Wireless Color All-in-One InkTank Printer's use and settings are simplified by the 3.4cm (1.35in) intuitive LCD screen with guided directions. The simple-to-replace maintenance cartridge simplifies maintenance and increases printer life even when printing in high quantities. The printer also features a scanning and copying function, making it a versatile all-in-one solution for your home or office. The free Canon Print Inkjet/SELPHY and Canon Easy-PhotoPrint Editor apps allow you to print from smartphones, tablets, laptops, and cloud storage.",
    "price": 15500,
    "mrp": 20270,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G3770",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/77/no1-removebg-preview_ns8q-gu.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/no3.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/no1-removebg-preview_ns8q-gu.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/no3.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/no2-removebg-preview_b031-o2.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/no3-removebg-preview_s0n9-lw.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/77/no1-removebg-preview_ns8q-gu.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Canon Canon PIXMA G3770 Multi-function WiFi Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 23,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-mf3010",
    "slug": "canon-image-class-mf3010-multi-function-monochrome-laser-printer-black-mf3010",
    "brand": "Canon",
    "name": "Canon Image CLASS MF3010 Multi-function Monochrome Laser Printer • Black",
    "tagline": "Canon Laser Printer • USB High Yield",
    "editorialSummary": "&nbsp; Fast Heating Performance Integrated with Canon's exclusive On-Demand Fixing technology, the Canon imageCLASS MF3010 Printer facilitates the direct transfer of heat to its ceramic heating element, resulting in a fast warm-up time and rapid first print. Stylish Design Boasting a new operation panel design that seamlessly integrates with its body, this printer provides an attractive and intuitive layout for hassle-free operation. Convenient to Use Featuring the Canon all-in-one toner cartridge 925, this printer integrates the photosensitive drum, cleaning unit, and toner reservoir into a compact package, resulting in cost savings and easy cartridge replacements.",
    "price": 18190,
    "mrp": 20695,
    "badge": "NEW",
    "sku": "PRN-CANON-MF3010",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mo1-removebg-preview_oxx1-8c.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mo2-removebg-preview_a4p7-i5.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mo1-removebg-preview_oxx1-8c.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mo2-removebg-preview_a4p7-i5.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/mo3.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/92/mo1-removebg-preview_oxx1-8c.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Image CLASS MF3010 Multi-function Monochrome Laser Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 30,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-mf272dw",
    "slug": "canon-multi-function-wifi-monochrome-laser-printer-black-mf272dw-mf272dw",
    "brand": "Canon",
    "name": "Canon Multi-function WiFi Monochrome Laser Printer • Black • MF272dw",
    "tagline": "Canon Laser Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Up to Five Line LCD Display Boasting an up to 5.3 cm LCD 5-line display, the Canon imageCLASS MF272dw Printer facilitates effortless navigation and configuration of printer settings, making device management a breeze. Hassle-free Connectivity Featuring a versatile connectivity option, the printer enables you to utilise its inbuilt Access Point mode or connect wirelessly to your office network without the need for an additional router. Auto Duplex Printing Owing to its Auto Duplex Printing, this printer allows you to reduce operational costs and minimise your carbon footprint. This feature enables automatic double-sided printing, even on A5-size media. Minimal Maintenance Thanks to this printer's Canon all-in-one toner cartridge, you can experience hassle-free and low-maintenance operation. And, the printer is compatible with both standard and high-yield options, including Cartridge 071 and Cartridge 071H, catering to different print volumes. Space-saving Design Sporting a compact design, this printer effortlessly fits into tight spaces. As a result, this printer is an ideal choice for offices or work environments where space is limited.",
    "price": 21500,
    "mrp": 32695,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-MF272DW",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co1-removebg-preview_71rx-r8.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co2-removebg-preview_2f2k-dv.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co1-removebg-preview_71rx-r8.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co2-removebg-preview_2f2k-dv.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co5-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/co4-removebg-preview_npx9-g5.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/82/co1-removebg-preview_71rx-r8.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Canon Canon Multi-function WiFi Monochrome Laser Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 37,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2020",
    "slug": "canon-pixma-g2020-all-in-one-multi-function-color-ink-tank-printer-black-g2020",
    "brand": "Canon",
    "name": "Canon PIXMA G2020 All-in-one Multi-function Color Ink Tank Printer • Black",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon PIXMA G2020 Black Easy Refillable Ink Tank, All-In-One Printer for High Volume Printing Designed for high volume printing, this affordable 3-in-1 printer combines low-cost printing with convenient maintenance. -Print, Scan, Copy -ISO standard print speed (A4): up to 9.1 image per minute black / 5.0 image per minute colour -USB 2.0 -Recommended print volume: 150 to 1 500 pages",
    "price": 11400,
    "mrp": 14203,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G2020",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi1_q7e6-9x-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi2_e174-1c-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi1_q7e6-9x-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi2_e174-1c-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi3_7onj-bx-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi4_syvi-uc-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/pi5-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/85/pi1_q7e6-9x-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA G2020 All-in-one Multi-function Color Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 44,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-e410",
    "slug": "canon-pixma-e410-multi-function-color-inkjet-printer-black-e410",
    "brand": "Canon",
    "name": "Canon PIXMA E410 Multi-function Color Inkjet Printer • Black",
    "tagline": "Canon Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Auto Power ON Featuring an Auto Power ON feature, the Canon PIXMA E410 Printer allows for effortless printing as it can identify print instructions and automatically turn on the printer through a USB connection. Lightweight and Compact Design Thanks to its compact and lightweight design, this printer is ideal for small spaces and shelves. Its small size allows for easy placement, making it an excellent addition to your home or office. Efficient Cartridges Boasting efficient ink cartridges, this printer allows for maximum page yield and optimal printing. This makes it suitable for medium to heavy printing output needs. Low-noise Operation Owing to its Quiet Mode, this printer ensures silent printing. This way, it allows you to create a peaceful environment in your space, making it ideal for your work or study spaces.",
    "price": 4499,
    "mrp": 5550,
    "badge": "TRENDING",
    "sku": "PRN-CANON-E410",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/77/ca1_nvr8-0p-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca3_0tzt-8l.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/ca1_nvr8-0p-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/ca3_0tzt-8l.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/ca2_krn0-8k-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/77/ca1_nvr8-0p-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA E410 Multi-function Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 51,
    "isTopDeal": true,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2060",
    "slug": "canon-multi-function-color-ink-tank-printer-black-g2060-g2060",
    "brand": "Canon",
    "name": "Canon Multi function Color Ink Tank Printer • Black • G2060",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon Multi function Color Ink Tank Printer | Black | G2060 delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 11090,
    "mrp": 14203,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G2060",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mu1-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mu2-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mu1-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/mu2-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/detailed/92/mu1-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Multi function Color Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 58,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-t420w",
    "slug": "brother-multi-function-wifi-color-ink-tank-printer-dcp-t420w-black-t420w",
    "brand": "Brother",
    "name": "Brother Multi-function WiFi Color Ink Tank Printer • DCP-T420W • Black",
    "tagline": "Brother Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "&nbsp; Print at High Speed You can quickly print multiple pages at a speed of up to 28/11 ppm. So, printing brochures, pamphlets, and other similar works become easy and fast with this computer accessory. Efficient Performance This printer comes with an adjustable 150 sheets paper tray that supports different paper sizes to let you perform a number of tasks. There is also an additional single-sheet manual feed slot for different types of papers. Also, for easy scanning and copying of multiple pages, it has a 20 sheets auto-document feeder. Easy Refilling The refill tank system of this printer has a transparent cover. So, you can easily, quickly, and without any mess access the embedded ink tank from the front. Print Remotely This printer is equipped with a built-in Wi-Fi that lets you print from different devices effortlessly. This computer accessory also has a direct mobile print feature to print directly and wirelessly from your mobile devices.",
    "price": 13500,
    "mrp": 15590,
    "badge": "NEW",
    "sku": "PRN-BROTHER-T420W",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/85/bo1-removebg-preview__2_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/85/bo3-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/bo1-removebg-preview__2_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/bo3-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/85/bo2-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/85/bo1-removebg-preview__2_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Brother India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Brother Brother Multi-function WiFi Color Ink Tank Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 65,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-b2000d",
    "slug": "brother-mono-laser-printer-hl-b2000d-auto-duplex-printing-toner-box-technology-g-b2000d",
    "brand": "Brother",
    "name": "Brother Mono Laser Printer • HL-B2000D • Auto Duplex Printing Toner Box Technology • Grey",
    "tagline": "Brother Laser Printer • USB High Yield",
    "editorialSummary": "Printer Type : Laser Printer ; Functionality : Print Only ; Print Output : Monochrome ; Connectivity - USB ; Scanner Type - NA OS Compatibility -Windows, Mac & Linux ; Mobile connectivity : No ; Compatibility – None ; Hardware Interface: USB ; Enlarge/reduce option: No ; Auto double print: Yes Maximum Print Speed (color): NA, Maximum Print Speed (Monochrome): 34 ppm ; Print cost Monochrome - NA ; Maximum Print Resolution (Color): NA ; Maximum Print Resolution (Color):NA;Maximum Print Resolution (Monochrome): 1200 x 1200 dpi Paper Size : A4, Letter, A5, A5 (Long Edge), A6, Executive, Legal, Folio, Mexico Legal, India Legal ; Max paper thickness (in GSM) - 163 GSM ; [Maximum Input Sheet Capacity] - 250 Sheets ; TN-B021 Toner Cartridge ; Additional Printer Function : Print Only ; Power wattage of printer - 510W Special Features : 2 Sided Printing ; Included Components : Power Cable, USB Cable, Installation CD, Genuine Inbox Toner: Toner TN-B021 (Black) (2600 Pages Yield) (needs to be installed)",
    "price": 12500,
    "mrp": 14690,
    "badge": "TRENDING",
    "sku": "PRN-BROTHER-B2000D",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr1_f77h-ds-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/54/gr2_64kw-gu.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/gr1_f77h-ds-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/gr2_64kw-gu.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/gr3_ff8e-yb.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/54/gr4_6d65-fy.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/92/gr1_f77h-ds-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Auto Two-Sided Printing",
      "Authentic Brother India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Brother Brother Mono Laser Printer Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 72,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-lbp6030b",
    "slug": "canon-lbp6030b-single-function-monochrome-laser-printer-lbp6030b",
    "brand": "Canon",
    "name": "Canon LBP6030B • Single Function Monochrome Laser Printer",
    "tagline": "Canon Laser Printer • USB High Yield",
    "editorialSummary": "If you are looking for a high-performance and energy-efficient printing solution, the Canon imageCLASS LBP6030B Printer is a must-have. With Canon's exclusive On-Demand Fixing technology, this printer consumes less power and quickly warms up, providing a fast warm-up time and quick first print. Furthermore, this printer boasts the Canon UFR II LT print language, which allows it to fully leverage the processing power of the PC without the need for costly memory upgrades. Product Description On-Demand Fixing technology Featuring Canon's exclusive On-Demand Fixing technology, the Canon imageCLASS LBP6030B Printer consumes less power and warms up quickly. This way, it ensures a quick warm-up time and rapid first print. Powerful Performance Boasting Canon UFR II LT print language, this printer can take full advantage of the PC's processing power without requiring expensive memory upgrades. All-in-one Printer Sporting the Canon all-in-one toner cartridge 925, this printer integrates the photosensitive drum, cleaning unit, and toner reservoir in one compact package. As a result, this printer helps you save costs and makes cartridge replacements hassle-free. Energy-efficient Operation Thanks to the printer's configurable sleep mode and auto-shutdown features, it consumes less energy. In addition, this printer has a low power consumption value of up to 0.48 kWh/week, making it easy to keep your electricity bills in check and be environmentally friendly",
    "price": 12300,
    "mrp": 12995,
    "badge": "NEW",
    "sku": "PRN-CANON-LBP6030B",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/82/canon1-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/82/canon2-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/canon1-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/canon2-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/canon3-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/51/canon4.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/detailed/82/canon1-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Precision Monochrome Laser Beam Engine (Quick Warm-up)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon LBP6030B Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 14,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g3010",
    "slug": "canon-pixma-g3010-multi-function-wifi-color-ink-tank-printer-g3010",
    "brand": "Canon",
    "name": "Canon Pixma G3010 Multi-function WiFi Color Ink Tank Printer",
    "tagline": "Canon Ink Tank Printer • Wireless High Yield",
    "editorialSummary": "Bring home this Canon G3010 Multi-function Wireless Color Printer that features High Page Yield Ink Bottles and an Integrated Ink Tank System and enjoy printing up to 7000 pages. This printer can be linked to your smartphone via the One-Touch Direct Wireless Connection function. The ink bottle tips are designed to prevent spills during the refilling process.",
    "price": 13990,
    "mrp": 17595,
    "badge": "TOP DEAL",
    "sku": "PRN-CANON-G3010",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-1-1200Wx1200H-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-3-1200Wx1200H-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-1-1200Wx1200H-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-3-1200Wx1200H-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/50/pixma-g3010-canon-original-imagmy4tphtuyf3j_yl92-g9.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/50/pixma-g3010-canon-original-imagmy4tecyekuus_o5dj-4g.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-2-1200Wx1200H-removebg-preview.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/91/Canon-PIXMAG3010-Printers-491419970-i-1-1200Wx1200H-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Canon Canon Pixma G3010 Multi-function WiFi Color Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 21,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-pantum-p3302dn",
    "slug": "pantum-p3302dn-single-finction-duplex-high-speed-network-printer-p3302dn",
    "brand": "Pantum",
    "name": "PANTUM P3302DN Single finction Duplex,high Speed Network Printer",
    "tagline": "Pantum All-in-One Multifunction • USB High Yield",
    "editorialSummary": "PANTUM P3302DN Single finction Duplex,high Speed Network Printer",
    "price": 12900,
    "mrp": 15990,
    "badge": "TRENDING",
    "sku": "PRN-PANTUM-P3302DN",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/84/pr1-removebg-preview__1_.png.png",
      "hover": "https://www.myg.in/images/detailed/84/pr1-removebg-preview__1_.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/84/pr1-removebg-preview__1_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/detailed/84/pr1-removebg-preview__1_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Auto Two-Sided Printing",
      "Authentic Pantum India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Pantum PANTUM P3302DN Single finction Duplex,high Speed Network Printer Unit",
      "Genuine Pantum Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 28,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-canon106",
    "slug": "canon-multi-function-color-inkjet-printer-black-canon-106",
    "brand": "Canon",
    "name": "Canon Multi-function Color Inkjet Printer • Black",
    "tagline": "Canon Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Compact and Lightweight Sporting a compact size, the Canon PIXMA MG2570S Inkjet Printer is easy to store and can effortlessly fit on even small shelves and spaces. Furthermore, with its lightweight design, this printer can be easily moved from one place to another. Auto Power ON Feature Owing to its Auto Power ON feature, this printer is capable of detecting a print command and automatically turning on when a USB cable is connected. Ink Cartridges This printer comes with ink cartridges for high-quality prints. Thus, whether you require it for your artistic concepts or crucial assignments, this printer is an ideal option.",
    "price": 3399,
    "mrp": 3875,
    "badge": "NEW",
    "sku": "PRN-CANON-CANON106",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3yad3taxnn-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3ypdzxq3wb-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3yad3taxnn-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3ypdzxq3wb-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3ykghcgyty-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/canon-pixma-mg3070s-original-imafbu3y8zujycus-removebg-preview.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/canon-pixma-mg3070s-original-imafbu3y4znw7jrg.JPEG.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagreqbyhb6std4.JPEG.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/92/canon-pixma-mg3070s-original-imafbu3yad3taxnn-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Multi-function Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 35,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2730",
    "slug": "canon-pixma-g2730-multifunction-refillable-ink-tank-printer-with-small-ink-bottl-g2730",
    "brand": "Canon",
    "name": "Canon PIXMA G2730 Multifunction Refillable Ink Tank Printer • with small Ink Bottles • Black",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Canon Canon PIXMA G2730 Multifunction Refillable Ink Tank Printer | with small Ink Bottles | Black delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced ink tank printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 11800,
    "mrp": 13365,
    "badge": "NEW",
    "sku": "PRN-CANON-G2730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/75/g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/75/-original-imagrynfshtrvuqt-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/75/-original-imagrynfshtrvuqt-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagrj4jvwdptmgv.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagrynf2bxdhy5v.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagrynfgysjhx2a.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagrynfyzszcyas.jpeg.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/75/g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Crisp Monochrome Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon PIXMA G2730 Multifunction Refillable Ink Tank Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 42,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g2010",
    "slug": "canon-pixma-ink-efficient-g2010-multi-function-color-inkjet-printer-black-g2010",
    "brand": "Canon",
    "name": "Canon Pixma Ink Efficient G2010 Multi-function Color Inkjet Printer • Black",
    "tagline": "Canon Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Canon Canon Pixma Ink Efficient G2010 Multi-function Color Inkjet Printer | Black delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced color inkjet printer technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 12200,
    "mrp": 13200,
    "badge": "NEW",
    "sku": "PRN-CANON-G2010",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/87/7-removebg-preview__1__hqxw-q0.png.png",
      "hover": "https://www.myg.in/images/detailed/87/7-removebg-preview__1__hqxw-q0.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/87/7-removebg-preview__1__hqxw-q0.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/detailed/87/7-removebg-preview__1__hqxw-q0.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Pixma Ink Efficient G2010 Multi-function Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 49,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g1730",
    "slug": "canon-inktank-single-function-color-inkjet-printer-black-g1730-g1730",
    "brand": "Canon",
    "name": "Canon Inktank Single Function Color Inkjet Printer • Black • G1730",
    "tagline": "Canon Ink Tank Printer • USB High Yield",
    "editorialSummary": "Compatible with Low-cost Ink Bottles Small and standard ink bottles are included with this Canon printer to accommodate various print volume requirements. By doing this, you can reduce the amount of needless ink wastage. Hassle-free Ink-refill Each ink bottle nozzle is intended to fit perfectly only into the allocated ink tank, minimising any mixing incidents, consequently, making the Ink-refill flawless procedure. Easy Upkeep Even when printing in huge volumes, the simple-to-replace cartridge makes the upkeep hassle-free. Sleek Design Owing to the printer's compact size, it can easily fit in confined locations, allowing you to take advantage of its amazing performance wherever it is placed.",
    "price": 9300,
    "mrp": 10325,
    "badge": "NEW",
    "sku": "PRN-CANON-G1730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/76/-original-imags7tkzufgvx5k-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imags7tktd5guuh4.jpeg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/76/-original-imags7tkzufgvx5k-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imags7tktd5guuh4.jpeg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imags7tksdeg4m8k.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imags7q2s3fnjucf.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/45/-original-imagrgy5f5m2easc.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/76/-original-imags7tkhxhgeeqt-removebg-preview.png.png"
        },
        {
          "label": "Retail Packaging & Box",
          "src": "https://www.myg.in/images/detailed/76/-original-imags7tkzufgvx5k-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon Inktank Single Function Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 56,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-brother-t220",
    "slug": "brother-dcp-t220-multi-function-color-inkjet-printer-borderless-printing-black-t220",
    "brand": "Brother",
    "name": "Brother DCP-T220 Multi-function Color Inkjet Printer Borderless Printing • Black",
    "tagline": "Brother Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Print at High Speed This printer can print at a speed of up to 28/11 ppm. So, you can print multiple copies in less time. Thus, whether you want to print brochures, pamphlets, or anything else, you can easily print anything that you want using this Brother printer. Cost-effective Printing With the Brother’s Ultra High Yield Ink bottles, you can print up to 7,500 black and white pages and 5,000 colour pages. As a result, you can print at a low cost at home. Easy to Refill The Refill Tank System of this printer has a transparent cover, so you can access the embedded ink tank easily from the front. As a result, it is a user-friendly computer accessory that has a low risk of leakage and mess.",
    "price": 10490,
    "mrp": 13990,
    "badge": "TOP DEAL",
    "sku": "PRN-BROTHER-T220",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/77/br3-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/77/br2-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/br3-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/br2-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/77/br1-removebg-preview_ejf6-1p.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/detailed/77/br3-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Piezo Inkjet Laminated Printhead Technology",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Brother India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Brother Brother DCP-T220 Multi-function Color Inkjet Printer Borderless Printing Unit",
      "Genuine Brother Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.6,
    "reviewCount": 63,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-g3730",
    "slug": "canon-g3730-multi-function-wifi-color-inkjet-printer-with-black-g3730",
    "brand": "Canon",
    "name": "Canon G3730 Multi-function WiFi Color Inkjet Printer with Black",
    "tagline": "Canon Color Inkjet Printer • Wireless High Yield",
    "editorialSummary": "You can print documents, photos, and other materials from the comfort of your own home or office with the Canon Pixma G3730 Printer. Thanks to its ability to work with low-cost, small, and standard ink bottles, this printer provides an efficient solution for achieving your printing needs. Moreover, this printer simplifies the ink refilling process, ensuring a smooth experience. Additionally, the ink bottle nozzles are designed to accurately fit into the designated ink tank, reducing the risk of any accidental mixing.",
    "price": 14300,
    "mrp": 16295,
    "badge": "NEW",
    "sku": "PRN-CANON-G3730",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/76/1_-g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/76/2-original-imagrynfshtrvuqt-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/76/1_-g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/76/2-original-imagrynfshtrvuqt-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/detailed/76/1_-g3730-canon-original-imagnqhcyyka7gzd-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output"
    ],
    "inTheBox": [
      "Canon Canon G3730 Multi-function WiFi Color Inkjet Printer with Black Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.7,
    "reviewCount": 70,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-canon-mg2570s",
    "slug": "canon-mg2570s-multi-function-color-inkjet-printer-black-mg2570s",
    "brand": "Canon",
    "name": "Canon MG2570S Multi-function Color Inkjet Printer • Black",
    "tagline": "Canon Color Inkjet Printer • USB High Yield",
    "editorialSummary": "Compact and Lightweight Sporting a compact size, the Canon PIXMA MG2570S Inkjet Printer is easy to store and can effortlessly fit on even small shelves and spaces. Furthermore, with its lightweight design, this printer can be easily moved from one place to another. Auto Power ON Feature Owing to its Auto Power ON feature, this printer is capable of detecting a print command and automatically turning on when a USB cable is connected. Ink Cartridges This printer comes with ink cartridges for high-quality prints. Thus, whether you require it for your artistic concepts or crucial assignments, this printer is an ideal option.",
    "price": 3399,
    "mrp": 3875,
    "badge": "NEW",
    "sku": "PRN-CANON-MG2570S",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/92/-original-imafbu3xfawfzamg-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/92/-original-imafbu3yybjz4uz3-removebg-preview.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/-original-imafbu3xfawfzamg-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/92/-original-imafbu3yybjz4uz3-removebg-preview.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/41/-original-imafbu3ybjsfyyvq.jpeg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/41/-original-imafbu3yshfhpgfn.jpeg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/41/-original-imafbu3ytzsvkufs.jpeg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/92/-original-imafbu3xfawfzamg-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Canon FINE Hybrid Ink Technology (Black Pigment & Color Dye)",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic Canon India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "Canon Canon MG2570S Multi-function Color Inkjet Printer Unit",
      "Genuine Canon Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.8,
    "reviewCount": 12,
    "isTopDeal": false,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp101",
    "slug": "hp-smart-tank-all-in-one-multi-function-color-inkjet-printer-520-grey-white-hp-101",
    "brand": "HP",
    "name": "HP Smart Tank All In One Multi-function Color Inkjet Printer • 520 • Grey White",
    "tagline": "HP Ink Tank Printer • USB High Yield",
    "editorialSummary": "Quick Performance Thanks to its effortless setup, manual two-sided printing, guided buttons, and low-ink sensors, the HP Smart Tank All-in-one 520 Multifunctional Colour Printer enables you to get your printing work done easily and in no time. High Print Quality Owing to its bright colours and sharp text, this printer offers exceptional print quality. So, be it for work or personal use, this printer can meet all your printing needs. Effortless Printing Experience This printer is equipped with smart-guided buttons that illuminate to provide easy-to-use guidance, making the printing process hassle-free. High-speed Connection Courtesy of its inbuilt speedy USB 2.0 port, this printer allows you to effortlessly connect it to your computer, resulting in an exceptional experience. Simple Ink Refilling With this printer, you can simply plug the bottle into the ink tank without squeezing or spilling ink, thereby ensuring effortless usage and cleaning.",
    "price": 12400,
    "mrp": 15981,
    "badge": "TOP DEAL",
    "sku": "PRN-HP-HP101",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/83/hp1_ol5e-x6-removebg-preview.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/40/hp2_4a2d-4s.jpg.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/83/hp1_ol5e-x6-removebg-preview.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/hp2_4a2d-4s.jpg.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/hp3_d9es-9s.jpg.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/hp4_n3la-ua.jpg.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/40/hp5_hrot-6s.jpg.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/83/hp1_ol5e-x6-removebg-preview.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "Vivid Color Output",
      "Authentic HP India Certified Retail Unit",
      "Ultra-low cost per page printing",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP Smart Tank All In One Multi-function Color Inkjet Printer Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.3,
    "reviewCount": 19,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": true,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-hp-hp102",
    "slug": "hp-deskjet-ink-advantage-2776-multifunction-wireless-printer-printer-hp-102",
    "brand": "HP",
    "name": "HP DESKJET INK ADVANTAGE 2776 MULTIFUNCTION WIRELESS PRINTER • PRINTER",
    "tagline": "HP All-in-One Multifunction • Wireless High Yield",
    "editorialSummary": "HP HP DESKJET INK ADVANTAGE 2776 MULTIFUNCTION WIRELESS PRINTER | PRINTER delivers high-efficiency, reliable output engineered for home offices, professional studios, and commercial workspaces. Featuring advanced all-in-one multifunction technology with ultra-low cost-per-page printing, seamless mobile and desktop connectivity, and crisp, smudge-resistant text and photo reproduction.",
    "price": 6950,
    "mrp": 8451,
    "badge": "TRENDING",
    "sku": "PRN-HP-HP102",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w1-removebg-preview__2_.png.png",
      "hover": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w4-removebg-preview__1_.png.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w1-removebg-preview__2_.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w4-removebg-preview__1_.png.png"
        },
        {
          "label": "Scanner Bed & Flatbed Lid",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w5-removebg-preview.png.png"
        },
        {
          "label": "Side Profile & Ports",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w3-removebg-preview__2_.png.png"
        },
        {
          "label": "Control Panel & Buttons",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/82/w2-removebg-preview__2_.png.png"
        },
        {
          "label": "Internal Ink Tank / Bay",
          "src": "https://www.myg.in/images/detailed/82/w1-removebg-preview__2_.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "High-Resolution Thermal Inkjet System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Laser Yield: Up to 2,000 Crisp Monochrome Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0, Wi-Fi 802.11b/g/n, Wi-Fi Direct, Apple AirPrint, Mopria"
    },
    "highlights": [
      "Wi-Fi & Mobile Printing",
      "Authentic HP India Certified Retail Unit",
      "High-speed crisp monochrome output",
      "Pre-dispatch inspected by LAPPY SOLUTION Garhwa"
    ],
    "inTheBox": [
      "HP HP DESKJET INK ADVANTAGE 2776 MULTIFUNCTION WIRELESS PRINTER Unit",
      "Genuine HP Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.4,
    "reviewCount": 26,
    "isTopDeal": true,
    "isTrending": false,
    "isLatest": false,
    "isNewlyLaunched": false
  },
  {
    "id": "prn-epson-epson103",
    "slug": "epson-3210-printer-all-in-one-ink-tank-epson-103",
    "brand": "Epson",
    "name": "EPSON 3210 PRINTER All in One ink tank",
    "tagline": "Epson Ink Tank Printer • USB High Yield",
    "editorialSummary": "In addition to its excellent features, the&nbsp;Epson EcoTank L3210 Colour All-in-one Ink&nbsp;Tank&nbsp;Printer's&nbsp;price is another advantage. Keep your printer’s monthly duty high if you don't want the interruption of your work. With a maximum monthly duty cycle of up to 0 pages, you can continue working uninterrupted. &nbsp;Choosing a high-power Printer will reduce your printing time, which will result in faster printing. This Printer has a power supply 14-watt power supply that consumes less energy. If you expect your printer to live up to your expectations, pick one that has premium ink cartridges.&nbsp; The resealable containers of this Printer help restore ink levels efficiently and reduce printing costs. You won't be able to print your important documents if your printer has poor print quality. This Printer enhances text visibility despite being used frequently. This Printer enhances text visibility despite being used frequently. The&nbsp;Epson EcoTank L3210 Colour All-in-one Ink&nbsp;Tank&nbsp;Printer's&nbsp;price is so reasonable it won't affect your budget. Make sure that the monthly duty for your Printer is high so that your work is not interrupted. This Printer allows you to work continuously without taking breaks up to 0 pages per month. A high-power Printer will significantly reduce your printing time, resulting in a faster printing speed. For smooth operation and optimal performance, this Printer needs 14 watts of power. If you expect your printer to live up to your expectations, pick one that has premium ink cartridges. With resealable bottles, this Printer helps restore ink levels efficiently and reduces printing costs. A Printer with poor print quality can damage your important papers.",
    "price": 11900,
    "mrp": 13999,
    "badge": "TRENDING",
    "sku": "PRN-EPSON-EPSON103",
    "inStock": false,
    "categorySlug": "printers-toners",
    "categoryName": "Printers & Consumables",
    "images": {
      "primary": "https://www.myg.in/images/thumbnails/500/500/detailed/90/1-removebg-preview_yf0y-ga.png.png",
      "hover": "https://www.myg.in/images/detailed/90/1-removebg-preview_yf0y-ga.png",
      "angles": [
        {
          "label": "Front Angle & Status",
          "src": "https://www.myg.in/images/thumbnails/500/500/detailed/90/1-removebg-preview_yf0y-ga.png.png"
        },
        {
          "label": "Paper Tray & Output Feeder",
          "src": "https://www.myg.in/images/detailed/90/1-removebg-preview_yf0y-ga.png"
        }
      ]
    },
    "configurations": [
      {
        "label": "Standard Retail Unit",
        "specs": "Complete Printer + Genuine Starter Ink/Toner Set",
        "priceModifier": 0
      },
      {
        "label": "Commercial Pack (+Extra Black Ink/Toner)",
        "specs": "Printer + Extra Genuine High-Capacity Black Bottle",
        "priceModifier": 650
      }
    ],
    "specs": {
      "processor": "Epson MicroPiezo Heat-Free Continuous Ink System",
      "ram": "128MB High-Speed Print Spooler Buffer",
      "storage": "Ultra-High Yield: Up to 7,500 Black / 6,000 Color Pages",
      "display": "Tactile Status Buttons + Multi-Color LED Indicators",
      "graphics": "Up to 4800 x 1200 Optimized DPI High-Precision Output",
      "battery": "Low Power EcoMode (12W Active, 0.7W Sleep)",
      "weight": "3.85 kg (Compact Footprint)",
      "os": "Windows 11 / 10 / 8.1, macOS 12+, Linux, Android & iOS",
      "ports": "High-Speed USB 2.0 Port (Plug & Play)"
    },
    "highlights": [
      "USB 2.0 High Speed",
      "Plug & Play Setup",
      "Authentic Epson India Certified Retail Unit",
      "Ultra-low cost per page printing"
    ],
    "inTheBox": [
      "Epson EPSON 3210 PRINTER All in One ink tank Unit",
      "Genuine Epson Starter Ink / Toner Bottles",
      "High-Speed USB 2.0 Cable & Power Cable",
      "Setup Guide, Documentation & LAPPY Warranty Card"
    ],
    "warranty": "1 Year Official Manufacturer Onsite Warranty + LAPPY Support",
    "rating": 4.5,
    "reviewCount": 33,
    "isTopDeal": false,
    "isTrending": true,
    "isLatest": false,
    "isNewlyLaunched": false
  }
];
