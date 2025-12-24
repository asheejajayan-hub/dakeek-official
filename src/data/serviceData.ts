import {
    Wind, Droplets, Zap, Paintbrush,
    Fan, Cylinder, Flame, Gauge,
    ChefHat, ThermometerSnowflake, CalendarClock, ShieldAlert,
    Wrench, Thermometer,
    Droplet, Activity,
    Search, Hammer,
    Sparkles, ShieldCheck
} from "lucide-react";

export interface ServiceDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    details: string[];
    image: string;
}

export interface ServicePageData {
    id: string;
    slug: string;
    theme: {
        primaryText: string;
        primaryBg: string; // Dark bg
        secondaryBg: string; // Light bg
        accentText: string; // Lighter text for dark bg
        iconBg: string;
        hero1: string; // Hex for canvas
        hero2: string; // Hex for canvas
    };
    hero: {
        tag: string;
        title: string;
        description: string;
    };
    intro: {
        heading: string;
        stats: { value: string; label: string; sub: string }[];
    };
    details: ServiceDetail[];
    addOn?: {
        title: string;
        tag: string;
        description: string;
        benefits: string[];
        image: string;
    };
    techSpecs: {
        grid: { label: string; value: string }[];
        tools: string;
        list: string[];
    };
}

export const serviceData: Record<string, ServicePageData> = {
    ac: {
        id: "01",
        slug: "ac",
        theme: {
            primaryText: "text-blue-600",
            primaryBg: "bg-blue-950",
            secondaryBg: "bg-blue-50",
            accentText: "text-blue-400",
            iconBg: "bg-blue-500/10",
            hero1: "#bfdbfe",
            hero2: "#eff6ff"
        },
        hero: {
            tag: "AC & Cooling",
            title: "AC Care",
            description: "Fixing leaks, noise, and heat. Fast."
        },
        intro: {
            heading: "Excellence shouldn't have an entry fee. That’s why we start with a free inspection and finish with a guaranteed warranty.",
            stats: [
                { value: "Free", label: "Inspection", sub: "Diagnosis" },
                { value: "149 AED", label: "Starts at", sub: "Service" },
                { value: "30", label: "Days", sub: "Warranty" },
                { value: "100%", label: "Transparent", sub: "Pricing" }
            ]
        },
        details: [
            {
                id: "installation",
                title: "Installation",
                subtitle: "The Perfect Start",
                description: "A flawless installation is the foundation of a decade of comfort. We calculate load, optimize placement, and calibrate airflow.",
                icon: Wind,
                details: ["Load Calculation", "Ductwork Design", "Efficiency Audits", "Smart Thermostats"],
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
            },
            {
                id: "maintenance",
                title: "Maintenance",
                subtitle: "Peak Performance",
                description: "Silence the noise and lower the bills. Our comprehensive tune-up restores your unit to factory specs.",
                icon: Thermometer,
                details: ["Coil Cleaning", "Refrigerant Check", "Electrical Inspection", "Drain Flushing"],
                image: "/images/ac/maintenance_new.png"
            },
            {
                id: "repair",
                title: "Repair",
                subtitle: "Rapid Response",
                description: "When the heat rises, we drop it. Our emergency repair team identifies the root cause instantly.",
                icon: Wrench,
                details: ["Compressor Diagnostics", "Leak Repair", "Circuit Board Fix", "24/7 Service"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            }
        ],
        addOn: {
            title: "Deep Clean",
            tag: "Add-On Service",
            description: "Dirty ducts mean dirty air. Dust, mold, and allergens hide inside your walls. We use industrial vacuums to clear them out.",
            benefits: ["Removes bad smells", "Reduces dust", "Improves airflow"],
            image: "/images/ac/deep_clean_new.png"
        },
        techSpecs: {
            grid: [
                { label: "COOLING", value: "RESTORED" },
                { label: "NOISE", value: "SILENT" },
                { label: "AIR FLOW", value: "OPTIMIZED" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "We use digital tools to measure gas pressure, airflow, and temperature.",
            list: ["Filter cleaning", "Gas check", "Motor inspection", "Coil washing", "Leak test"]
        }
    },
    plumbing: {
        id: "02",
        slug: "plumbing",
        theme: {
            primaryText: "text-cyan-600",
            primaryBg: "bg-cyan-950",
            secondaryBg: "bg-cyan-50",
            accentText: "text-cyan-400",
            iconBg: "bg-cyan-500/10",
            hero1: "#06b6d4",
            hero2: "#ecfeff"
        },
        hero: {
            tag: "Hydraulics",
            title: "Plumbing",
            description: "Flow restored. Leaks stopped. Pressure optimized."
        },
        intro: {
            heading: "Water belongs in pipes, not on your floor. We use ultrasonic detection to find leaks you can't see.",
            stats: [
                { value: "Free", label: "Detection", sub: "With Repair" },
                { value: "129 AED", label: "Starts at", sub: "Service" },
                { value: "30", label: "Days", sub: "Warranty" },
                { value: "24/7", label: "Emergency", sub: "Response" }
            ]
        },
        details: [
            {
                id: "leaks",
                title: "Leak Detection",
                subtitle: "Precision Tracing",
                description: "Hidden leaks ruin foundations. We find them without tearing up your walls using thermal and acoustic sensors.",
                icon: Search,
                details: ["Ultrasonic Detection", "Thermal Imaging", "Pressure Testing", "Non-Invasive"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            },
            {
                id: "heaters",
                title: "Water Heaters",
                subtitle: "Thermodynamics",
                description: "Cold showers are a choice. We repair and install all major brands of electric and gas water heaters.",
                icon: Flame,
                details: ["Element Replacement", "Tank Flushing", "Thermostat Calib", "Safety Valves"],
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
            },
            {
                id: "pumps",
                title: "Booster Pumps",
                subtitle: "Flow Dynamics",
                description: "Low pressure is frustrating. We balance your system to ensure consistent, strong flow from every tap.",
                icon: Activity,
                details: ["Pressure Switch", "Motor Rewind", "Impeller Check", "System Balancing"],
                image: "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "PRESSURE", value: "BALANCED" },
                { label: "LEAKS", value: "SEALED" },
                { label: "DRAINS", value: "CLEAR" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "We use acoustic leak detectors and thermal cameras to see inside walls.",
            list: ["Pressure testing", "Drain snaking", "Heater flush", "Valve seating", "Pipe insulation"]
        }
    },
    electrical: {
        id: "03",
        slug: "electrical",
        theme: {
            primaryText: "text-amber-500",
            primaryBg: "bg-stone-950",
            secondaryBg: "bg-amber-50",
            accentText: "text-amber-400",
            iconBg: "bg-amber-500/10",
            hero1: "#f59e0b",
            hero2: "#fffbeb"
        },
        hero: {
            tag: "Power Systems",
            title: "Electrical",
            description: "Safe. Stable. Certified. Lighting up your life."
        },
        intro: {
            heading: "Electricity is dangerous. Don't risk it. Our certified technicians ensure your home is wired for safety and efficiency.",
            stats: [
                { value: "Free", label: "Safety", sub: "Check" },
                { value: "149 AED", label: "Starts at", sub: "Service" },
                { value: "100%", label: "Safe", sub: "Certified" },
                { value: "0", label: "Hazards", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "wiring",
                title: "Wiring & Panels",
                subtitle: "The Nervous System",
                description: "Old wiring is a fire hazard. We inspect, upgrade, and organize your distribution boards for maximum safety.",
                icon: Zap,
                details: ["Load Balancing", "Breaker Testing", "Short Circuit Fix", "Rewiring"],
                image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
            },
            {
                id: "lights",
                title: "Lighting",
                subtitle: "Illumination",
                description: "From ambiance to security. We design and install LED systems that save energy and look stunning.",
                icon: Sparkles,
                details: ["LED Upgrades", "Dimmer Switches", "Garden Lighting", "Hidden Strips"],
                image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80"
            },
            {
                id: "smart",
                title: "Smart Home",
                subtitle: "Automation",
                description: "Control your world. We integrate smart switches, sensors, and hubs for a truly connected experience.",
                icon: Activity,
                details: ["IoT Integration", "Sensor Install", "Voice Control", "Wifi Setup"],
                image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "VOLTAGE", value: "STABLE" },
                { label: "LOAD", value: "BALANCED" },
                { label: "SAFETY", value: "CERTIFIED" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "Fluke Multimeters and thermal scanners to detect hotspots before they burn.",
            list: ["Load check", "Breaker test", "Grounding", "Insulation test", "Socket polarity"]
        }
    },
    ducts: {
        id: "04",
        slug: "ducts",
        theme: {
            primaryText: "text-slate-600",
            primaryBg: "bg-slate-950",
            secondaryBg: "bg-slate-50",
            accentText: "text-slate-400",
            iconBg: "bg-slate-500/10",
            hero1: "#94a3b8",
            hero2: "#f8fafc"
        },
        hero: {
            tag: "Air Quality",
            title: "Duct Cleaning",
            description: "Breathe easier. Eliminate dust, mold, and allergens."
        },
        intro: {
            heading: "What you can't see can hurt you. Your ducts hide kilos of dust and mold. We bring it all to light.",
            stats: [
                { value: "99.9%", label: "Removal", sub: "Dust/Mold" },
                { value: "Free", label: "Camera", sub: "Inspection" },
                { value: "Organic", label: "Sanitizer", sub: "Safe" },
                { value: "High", label: "Power", sub: "Suction" }
            ]
        },
        details: [
            {
                id: "cleaning",
                title: "Deep Cleaning",
                subtitle: "Negative Pressure",
                description: "We use heavy-duty rotary brushes and medical-grade HEPA vacuums to physically remove stuck-on debris.",
                icon: Fan,
                details: ["Rotary Brushing", "HEPA Vacuuming", "Grille Washing", "Filter Change"],
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
            },
            {
                id: "sanitization",
                title: "Disinfection",
                subtitle: "Organic Fogging",
                description: "After cleaning, we kill the invisible enemies. Our organic fogging eliminates bacteria, viruses, and mold spores.",
                icon: Sparkles,
                details: ["Non-Toxic", "Odor Removal", "Anti-Fungal", "Long-Lasting"],
                image: "/images/ac/deep_clean_new.png"
            },
            {
                id: "testing",
                title: "Air Testing",
                subtitle: "Verification",
                description: "Don't just take our word for it. We can measure your air quality before and after to prove the difference.",
                icon: Activity,
                details: ["Particle Count", "Flow Test", "Humidity Check", "Report"],
                image: "https://images.unsplash.com/photo-1531297461136-82lw8e5g23?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "DUST", value: "GONE" },
                { label: "MOLD", value: "KILLED" },
                { label: "SMELL", value: "FRESH" },
                { label: "AIR", value: "PURE" }
            ],
            tools: "Rotomax robotic brushes and commercial foggers for deep penetration.",
            list: ["Brush scrubbing", "Vacuum extraction", "Fogging", "Filter check", "Before/After photo"]
        }
    },
    hvac: {
        id: "05",
        slug: "hvac",
        theme: {
            primaryText: "text-indigo-600",
            primaryBg: "bg-indigo-950",
            secondaryBg: "bg-indigo-50",
            accentText: "text-indigo-400",
            iconBg: "bg-indigo-500/10",
            hero1: "#6366f1",
            hero2: "#e0e7ff"
        },
        hero: {
            tag: "Climate Control",
            title: "HVAC Systems",
            description: "Industrial grade cooling for villas and commercial spaces."
        },
        intro: {
            heading: "Complex systems require specialized engineers. We handle multi-zone VRF, chillers, and package units.",
            stats: [
                { value: "ISO", label: "Certified", sub: "Process" },
                { value: "VRF", label: "Experts", sub: "Systems" },
                { value: "24/7", label: "Support", sub: "Commercial" },
                { value: "ROI", label: "Focused", sub: "Efficiency" }
            ]
        },
        details: [
            {
                id: "chillers",
                title: "Chiller Maintenance",
                subtitle: "Heavy Duty",
                description: "For large estates and buildings. We maintain compressors, pumps, and cooling towers for maximum uptime.",
                icon: ThermometerSnowflake,
                details: ["Compressor Overhaul", "Water Treatment", "Pump Alignment", "Control Logic"],
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
            },
            {
                id: "vrf",
                title: "VRF Systems",
                subtitle: "Variable Flow",
                description: "Advanced diagnostics for Daikin, Mitsubishi, and LG VRF systems. We trace communication errors and refrigerant leaks.",
                icon: Activity,
                details: ["Inverter Check", "PCB Repair", "Leak Trace", "Firmware Update"],
                image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80"
            },
            {
                id: "ventilation",
                title: "Ventilation (FAHU)",
                subtitle: "Fresh Air",
                description: "Keep the air moving. We service Fresh Air Handling Units to ensure CO2 levels remain low and air stays crisp.",
                icon: Wind,
                details: ["Belt Tensioning", "Filter Bank", "Motor Bearings", "Damper Actuators"],
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "UPTIME", value: "99.9%" },
                { label: "EFFICIENCY", value: "MAX" },
                { label: "TEMP", value: "PRECISE" },
                { label: "NOISE", value: "MINIMAL" }
            ],
            tools: "Testo 557 manifolds and Fluke vibration analyzers for predictive maintenance.",
            list: ["Vibration analysis", "Oil analysis", "Thermography", "Laser alignment", "Flow balancing"]
        }
    },
    kitchen: {
        id: "06",
        slug: "kitchen",
        theme: {
            primaryText: "text-orange-600",
            primaryBg: "bg-orange-950",
            secondaryBg: "bg-orange-50",
            accentText: "text-orange-400",
            iconBg: "bg-orange-500/10",
            hero1: "#f97316",
            hero2: "#ffedd5"
        },
        hero: {
            tag: "Culinary Ops",
            title: "Kitchen Maintenance",
            description: "From fridge to exhaust. Keep your kitchen running."
        },
        intro: {
            heading: "The heart of the home shouldn't skip a beat. We repair high-end appliances and deep clean exhaust systems.",
            stats: [
                { value: "Brand", label: "Experts", sub: "All Major" },
                { value: "Same", label: "Day", sub: "Fix" },
                { value: "Fire", label: "Safety", sub: "Exhaust" },
                { value: "100%", label: "Clean", sub: "Hygiene" }
            ]
        },
        details: [
            {
                id: "appliances",
                title: "Appliance Repair",
                subtitle: "White Goods",
                description: "Sub-Zero, Wolf, Miele. We speak the language of luxury appliances. Genuine parts, factory procedures.",
                icon: ChefHat,
                details: ["Refrigerator Sealed System", "Dishwasher Pumps", "Oven Calib", "Ice Makers"],
                image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
            },
            {
                id: "exhaust",
                title: "Hood Cleaning",
                subtitle: "Grease Removal",
                description: "Grease buildup is a major fire risk. We scrape, soak, and polish your range hood and ductwork.",
                icon: Fan,
                details: ["Filter Soak", "Duct Scraping", "Fan Degreasing", "Fire Safety Check"],
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
            },
            {
                id: "gas",
                title: "Gas Safety",
                subtitle: "Leak Proof",
                description: "Smell gas? Don't wait. We test lines, replace valves, and ensure your cooking setup is 100% sealed.",
                icon: Flame,
                details: ["Pressure Test", "Valve Grease", "Burner Adjust", "Connection Seal"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "TEMP", value: "EXACT" },
                { label: "LEAKS", value: "NONE" },
                { label: "SAFETY", value: "CHECKED" },
                { label: "WARRANTY", value: "90 DAYS" }
            ],
            tools: "Certified gas detectors and digital thermometers for food-safe calibration.",
            list: ["Temp calibration", "Gas sniff", "Seal checks", "Motor amps", "Logic board scan"]
        }
    },
    painting: {
        id: "07",
        slug: "painting",
        theme: {
            primaryText: "text-rose-600",
            primaryBg: "bg-rose-950",
            secondaryBg: "bg-rose-50",
            accentText: "text-rose-400",
            iconBg: "bg-rose-500/10",
            hero1: "#e11d48",
            hero2: "#ffe4e6"
        },
        hero: {
            tag: "Aesthetics",
            title: "Painting",
            description: "Flawless finish. Sharp lines. Premium materials."
        },
        intro: {
            heading: "Paint is more than color; it's protection. We treat your walls like a canvas, ensuring perfect prep and finish.",
            stats: [
                { value: "Jotun", label: "Paints", sub: "Premium" },
                { value: "0", label: "Drips", sub: "Guarantee" },
                { value: "Laser", label: "Lines", sub: "Precision" },
                { value: "Fast", label: "Dry", sub: "Process" }
            ]
        },
        details: [
            {
                id: "interior",
                title: "Interior",
                subtitle: "Mood Setting",
                description: "Refresh your living space. We mask furniture, fill cracks, and apply double coats for deep, rich color.",
                icon: Paintbrush,
                details: ["Furniture Masking", "Crack Filling", "Sanding & Priming", "Double Coat"],
                image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80"
            },
            {
                id: "exterior",
                title: "Exterior",
                subtitle: "Weather Proof",
                description: "Protect your villa from the sun. We use UV-resistant paints and waterproofing sealants for long-lasting curb appeal.",
                icon: ShieldCheck,
                details: ["Pressure Wash", "Crack Seal", "UV Paint", "Waterproofing"],
                image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
            },
            {
                id: "waterproofing",
                title: "Waterproofing",
                subtitle: "Sealant",
                description: "Roof leaks? Balcony issues? We apply industrial-grade waterproofing membranes to stop water intrusion.",
                icon: Droplet,
                details: ["Roof Membrane", "Bathroom Tanking", "Balcony Seal", "Leak Test"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "FINISH", value: "SMOOTH" },
                { label: "EDGES", value: "SHARP" },
                { label: "COATS", value: "2+" },
                { label: "MESS", value: "NONE" }
            ],
            tools: "Airless sprayers for large areas and fine brushes for detail work.",
            list: ["Moisture check", "Surface sanding", "Primer bonding", "Final coat", "Cleanup"]
        }
    },
    gas: {
        id: "08",
        slug: "gas",
        theme: {
            primaryText: "text-red-600",
            primaryBg: "bg-red-950",
            secondaryBg: "bg-red-50",
            accentText: "text-red-400",
            iconBg: "bg-red-500/10",
            hero1: "#ef4444",
            hero2: "#fef2f2"
        },
        hero: {
            tag: "Critical Safety",
            title: "Gas Systems",
            description: "No leaks. No risks. Civil Defense compliant."
        },
        intro: {
            heading: "Gas is invisible and silent until it's too late. We use high-sensitivity sniffers to ensure your home is explosive-proof.",
            stats: [
                { value: "100%", label: "Sealed", sub: "Guarantee" },
                { value: "LPG", label: "Certified", sub: "Techs" },
                { value: "IGD", label: "Systems", sub: "Install" },
                { value: "24/7", label: "Emergency", sub: "Response" }
            ]
        },
        details: [
            {
                id: "detection",
                title: "Leak Detection",
                subtitle: "Zero Tolerance",
                description: "We pressure test your entire line. If there's a micro-leak, we find it and seal it. Period.",
                icon: Search,
                details: ["Pressure Testing", "Bubble Test", "Digital Sniffing", "Line Tracing"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            },
            {
                id: "installation",
                title: "Pipe Installation",
                subtitle: "Copper & PEX",
                description: "New kitchen? We run safe, compliant gas lines from your central cylinder to your appliances.",
                icon: Wrench,
                details: ["Copper Piping", "Safety Valves", "Regulator Setup", "Civil Defense Approved"],
                image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
            },
            {
                id: "igd",
                title: "IGD Systems",
                subtitle: "Auto-Shutoff",
                description: "Install an Intelligent Gas Detection system that automatically cuts off supply if a leak is detected.",
                icon: ShieldAlert,
                details: ["Sensor Mount", "Valve Control", "Panel Setup", "Annual Test"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "PRESSURE", value: "HOLDING" },
                { label: "LEAKS", value: "ZERO" },
                { label: "SAFETY", value: "MAX" },
                { label: "WARRANTY", value: "1 YEAR" }
            ],
            tools: "Calibrated manometers and combustible gas detectors.",
            list: ["Pressure hold", "Soap test", "Valve check", "Regulator flow", "Ventilation check"]
        }
    },
    stoves: {
        id: "09",
        slug: "stoves",
        theme: {
            primaryText: "text-orange-500",
            primaryBg: "bg-orange-950",
            secondaryBg: "bg-orange-50",
            accentText: "text-orange-400",
            iconBg: "bg-orange-500/10",
            hero1: "#f97316",
            hero2: "#fff7ed"
        },
        hero: {
            tag: "Cooking Heat",
            title: "Stove Repair",
            description: "Blue flames. Even heat. Safe cooking."
        },
        intro: {
            heading: "A bad stove ruins dinner. A broken gas stove risks your home. We fix both.",
            stats: [
                { value: "Blue", label: "Flame", sub: "Target" },
                { value: "Glass", label: "Top", sub: "Care" },
                { value: "Oven", label: "Heat", sub: "Calib" },
                { value: "Any", label: "Brand", sub: "Repair" }
            ]
        },
        details: [
            {
                id: "burners",
                title: "Burner Service",
                subtitle: "Combustion",
                description: "Yellow flame? Soot? We clean nozzles and adjust air mixers for a perfect, hot blue flame.",
                icon: Flame,
                details: ["Nozzle Cleaning", "Air Mix Adjust", "Igniter Fix", "Grate Cleaning"],
                image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80"
            },
            {
                id: "oven",
                title: "Oven Repair",
                subtitle: "Baking",
                description: "Cakes burning on one side? We calibrate thermostats and replace heating elements.",
                icon: Thermometer,
                details: ["Element Swap", "Thermostat Calib", "Door Seal", "Fan Motor"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            },
            {
                id: "safety",
                title: "Safety Check",
                subtitle: "Thermocouples",
                description: "Ensuring the gas cuts off if the flame blows out. A vital safety feature we test on every visit.",
                icon: ShieldCheck,
                details: ["Thermocouple Test", "Shutoff Valve", "Glass Integrity", "Knob Repair"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "FLAME", value: "BLUE" },
                { label: "IGNITION", value: "INSTANT" },
                { label: "HEAT", value: "EVEN" },
                { label: "WARRANTY", value: "30 DAYS" }
            ],
            tools: "Digital thermometers for oven calibration.",
            list: ["Flame adjust", "Igniter gap", "Gas flow", "Temp accuracy", "Leak check"]
        }
    },
    tanks: {
        id: "10",
        slug: "tanks",
        theme: {
            primaryText: "text-cyan-700",
            primaryBg: "bg-cyan-950",
            secondaryBg: "bg-cyan-50",
            accentText: "text-cyan-400",
            iconBg: "bg-cyan-500/10",
            hero1: "#0e7490",
            hero2: "#ecfeff"
        },
        hero: {
            tag: "Water Purity",
            title: "Water Tank Cleaning",
            description: "Clean water starts at the source. Sterile and safe."
        },
        intro: {
            heading: "Your tank accumulates sand, algae, and bacteria over time. We drain, scrub, and sterilize it so your tap water is pristine.",
            stats: [
                { value: "3", label: "Stage", sub: "Clean" },
                { value: "Municipality", label: "Approved", sub: "Chems" },
                { value: "Before", label: "After", sub: "Photos" },
                { value: "99%", label: "Bacteria", sub: "Kill" }
            ]
        },
        details: [
            {
                id: "drain",
                title: "Drain & Sludge",
                subtitle: "Extraction",
                description: "We drain the tank and manually remove the heavy sediment layer at the bottom using wet vacuums.",
                icon: Droplets,
                details: ["Pump Out", "Sludge Vacuum", "Manual Scrub", "Wall Descaling"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            },
            {
                id: "sterilize",
                title: "Chlorination",
                subtitle: "Disinfection",
                description: "We scrub walls with municipality-approved chlorine solution to kill biofilm and algae.",
                icon: Sparkles,
                details: ["Chlorine Scrub", "Rinse", "Biofilm Removal", "Pipe Flush"],
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            },
            {
                id: "testing",
                title: "Lab Testing",
                subtitle: "Verification",
                description: "Optional 3rd party lab testing to certify your water is drinkable and free of legionella.",
                icon: Activity,
                details: ["Sample Collection", "TDS Check", "Ph Check", "Lab Report"],
                image: "https://images.unsplash.com/photo-1531297461136-82lw8e5g23?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "SEDIMENT", value: "REMOVED" },
                { label: "WALLS", value: "CLEAN" },
                { label: "WATER", value: "CLEAR" },
                { label: "TDS", value: "NORMAL" }
            ],
            tools: "High-pressure washers and submersible pumps.",
            list: ["Drain", "Scrub", "Disinfect", "Refill", "Test"]
        }
    },
    amc: {
        id: "11",
        slug: "amc",
        theme: {
            primaryText: "text-emerald-600",
            primaryBg: "bg-emerald-950",
            secondaryBg: "bg-emerald-50",
            accentText: "text-emerald-400",
            iconBg: "bg-emerald-500/10",
            hero1: "#059669",
            hero2: "#ecfdf5"
        },
        hero: {
            tag: "Peace of Mind",
            title: "Annual Contracts",
            description: "Total home care. Priority response. One fee."
        },
        intro: {
            heading: "Stop reacting to breakdowns. Prevent them. An AMC gives you a dedicated team, scheduled maintenance, and 24/7 priority.",
            stats: [
                { value: "Unlimited", label: "Callouts", sub: "Emergency" },
                { value: "3", label: "Services", sub: "Per Year" },
                { value: "60", label: "Mins", sub: "Response" },
                { value: "15%", label: "Discount", sub: "Parts" }
            ]
        },
        details: [
            {
                id: "prevention",
                title: "Preventive Maint",
                subtitle: "Scheduled",
                description: "We come 3 times a year to service AC, electrical, and plumbing. We catch issues before they annoy you.",
                icon: CalendarClock,
                details: ["AC Service x3", "Electrical Check", "Plumbing Check", "Heater Service"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            },
            {
                id: "priority",
                title: "Priority Response",
                subtitle: "VIP Access",
                description: "Skip the queue. AMC customers get a dedicated hotline and guaranteed arrival times.",
                icon: ShieldCheck,
                details: ["Dedicated Number", "Jump Queue", "Senior Techs", "Spare Parts Stock"],
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            },
            {
                id: "handyman",
                title: "Handyman Included",
                subtitle: "Small Jobs",
                description: "Curtain rails, hanging pictures, assembling furniture. Minor works are often included.",
                icon: Hammer,
                details: ["Drilling", "Mounting", "Assembly", "Touch-ups"],
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "COST", value: "FIXED" },
                { label: "VISITS", value: "PLANNED" },
                { label: "TEAM", value: "DEDICATED" },
                { label: "STRESS", value: "ZERO" }
            ],
            tools: "Asset management software to track every asset in your home.",
            list: ["Asset tagging", "History tracking", "Report generation", "Proactive fixing", "Lifecycle mgmt"]
        },
    },
    emergency: {
        id: "12",
        slug: "emergency",
        theme: {
            primaryText: "text-red-700",
            primaryBg: "bg-red-950",
            secondaryBg: "bg-red-50",
            accentText: "text-red-400",
            iconBg: "bg-red-500/10",
            hero1: "#b91c1c",
            hero2: "#fef2f2"
        },
        hero: {
            tag: "SOS",
            title: "Emergency 24/7",
            description: "We are on the way. Right now."
        },
        intro: {
            heading: "Disasters don't keep office hours. Neither do we. If there is water flooding or power out, we deploy immediately.",
            stats: [
                { value: "<60", label: "Mins", sub: "Arrival" },
                { value: "24/7", label: "Open", sub: "Always" },
                { value: "Fully", label: "Stocked", sub: "Vans" },
                { value: "Fixed", label: "First Time", sub: "Goal" }
            ]
        },
        details: [
            {
                id: "flood",
                title: "Water Flood",
                subtitle: "Containment",
                description: "Burst pipe? Heater leak? We extract water and stop the flow immediately to protect your furniture.",
                icon: Droplet,
                details: ["Valve Shutoff", "Water Vac", "Pipe Repair", "Damage Control"],
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            },
            {
                id: "power",
                title: "Power Outage",
                subtitle: "Restoration",
                description: "Total blackout? We bring generators if needed and trace the short circuit to restore lights.",
                icon: Zap,
                details: ["Trip Trace", "Bypass", "Generator", "Safety Check"],
                image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80"
            },
            {
                id: "ac",
                title: "AC Failure",
                subtitle: "Heat Relief",
                description: "AC died in July? We consider this an emergency. We carry portable ACs and fix compressors ASAP.",
                icon: Wind,
                details: ["Rapid Cooling", "Portable Units", "Priority Fix", "Night Service"],
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
            }
        ],
        techSpecs: {
            grid: [
                { label: "SPEED", value: "MAX" },
                { label: "TOOLS", value: "READY" },
                { label: "TEAM", value: "AWAKE" },
                { label: "SOLUTION", value: "NOW" }
            ],
            tools: "Rapid Response Kits designed for triage and containment.",
            list: ["Stop leak", "Isolate power", "Cool down", "Clean up", "Report"]
        }
    }
};
