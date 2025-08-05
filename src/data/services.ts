export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  detailedDescription: string;
  packages: ServicePackage[];
  addOns?: string[];
  galleryImages: string[];
}

export const services: Service[] = [
  {
    id: "photography",
    icon: "📸",
    title: "Photography",
    description: "Capture the most beautiful moments of your event through our professional, cinematic, and candid photography services.",
    detailedDescription: "Our photography services combine artistic vision with technical expertise to document your special moments. We use state-of-the-art equipment and creative techniques to capture the essence of your celebration, from intimate moments to grand celebrations.",
    packages: [
      {
        name: "Essential",
        price: "₹25,000",
        features: [
          "4 hours coverage",
          "1 photographer",
          "200+ edited photos",
          "Online gallery",
          "Basic editing"
        ]
      },
      {
        name: "Premium",
        price: "₹50,000",
        recommended: true,
        features: [
          "8 hours coverage",
          "2 photographers",
          "400+ edited photos",
          "Online gallery + USB",
          "Advanced editing",
          "Pre-event consultation"
        ]
      },
      {
        name: "Luxury",
        price: "₹80,000",
        features: [
          "Full day coverage",
          "3 photographers",
          "600+ edited photos",
          "Premium album + USB",
          "Cinematic editing",
          "Same-day preview",
          "Dedicated coordinator"
        ]
      }
    ],
    addOns: ["Drone photography (+₹15,000)", "Additional photographer (+₹8,000)", "Premium album (+₹12,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "videography",
    icon: "🎥",
    title: "Videography",
    description: "Relive your special day with high-definition, creatively edited videos that tell your story perfectly.",
    detailedDescription: "Our videography team creates cinematic masterpieces that tell your unique story. From highlight reels to full ceremony coverage, we capture every emotion and detail with professional-grade equipment and creative storytelling techniques.",
    packages: [
      {
        name: "Highlight Reel",
        price: "₹35,000",
        features: [
          "6 hours coverage",
          "1 videographer",
          "3-5 minute highlight video",
          "HD quality",
          "Basic color grading"
        ]
      },
      {
        name: "Complete Story",
        price: "₹65,000",
        recommended: true,
        features: [
          "Full day coverage",
          "2 videographers",
          "Highlight reel + ceremony video",
          "4K quality",
          "Professional editing",
          "Drone footage included"
        ]
      },
      {
        name: "Cinematic Experience",
        price: "₹1,00,000",
        features: [
          "Multi-day coverage",
          "3 videographers",
          "Multiple video deliverables",
          "4K + slow motion",
          "Cinematic editing",
          "Same-day edit",
          "Multiple camera angles"
        ]
      }
    ],
    addOns: ["Drone videography (+₹20,000)", "Same-day edit (+₹15,000)", "Additional videographer (+₹12,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "event-decor",
    icon: "🌸",
    title: "Event Décor & Theme Setup",
    description: "Transform any space into a dream venue with customized themes, floral arrangements, lighting, and décor concepts tailored to your style.",
    detailedDescription: "Our décor team specializes in creating immersive environments that reflect your personality and vision. From traditional setups to contemporary themes, we handle everything from conceptualization to execution.",
    packages: [
      {
        name: "Basic Décor",
        price: "₹40,000",
        features: [
          "Stage decoration",
          "Basic floral arrangements",
          "Backdrop setup",
          "Table centerpieces",
          "Basic lighting"
        ]
      },
      {
        name: "Premium Theme",
        price: "₹80,000",
        recommended: true,
        features: [
          "Complete venue transformation",
          "Custom theme design",
          "Premium floral arrangements",
          "Decorative lighting",
          "Entrance decoration",
          "Photo booth setup"
        ]
      },
      {
        name: "Luxury Experience",
        price: "₹1,50,000",
        features: [
          "Designer venue makeover",
          "Custom installations",
          "Premium florals & draping",
          "Ambient lighting design",
          "Complete venue styling",
          "Luxury furniture rental",
          "Dedicated design consultant"
        ]
      }
    ],
    addOns: ["LED wall backdrop (+₹25,000)", "Additional floral arrangements (+₹10,000)", "Luxury furniture (+₹20,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "sound-system",
    icon: "🔊",
    title: "Professional Sound System",
    description: "Enjoy crystal-clear audio with our top-tier sound setup for every kind of event — from weddings to concerts.",
    detailedDescription: "Our professional sound systems ensure every word, note, and moment is heard with crystal clarity. We provide comprehensive audio solutions for events of all sizes.",
    packages: [
      {
        name: "Basic Audio",
        price: "₹15,000",
        features: [
          "Basic PA system",
          "2 wireless microphones",
          "Music playback system",
          "Basic mixing console",
          "6 hours operation"
        ]
      },
      {
        name: "Professional Setup",
        price: "₹30,000",
        recommended: true,
        features: [
          "Professional PA system",
          "4 wireless microphones",
          "Advanced mixing console",
          "Monitor speakers",
          "Full day operation",
          "Sound technician included"
        ]
      },
      {
        name: "Concert Grade",
        price: "₹60,000",
        features: [
          "Line array sound system",
          "8 wireless microphones",
          "Digital mixing console",
          "Stage monitors",
          "Lighting integration",
          "Professional sound engineer",
          "Backup equipment"
        ]
      }
    ],
    addOns: ["Additional microphones (+₹2,000 each)", "Recording services (+₹10,000)", "Extended hours (+₹5,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "flute-concerts",
    icon: "🎶",
    title: "Live Flute Concerts by Gokula Dwani",
    description: "Add a soulful, divine touch to your event with live flute performances by the renowned Gokula Dwani.",
    detailedDescription: "Experience the divine and soulful melodies of Gokula Dwani, a renowned flautist who brings spiritual and artistic excellence to your celebrations. Perfect for traditional ceremonies and special moments.",
    packages: [
      {
        name: "Solo Performance",
        price: "₹25,000",
        features: [
          "30-minute solo performance",
          "Classical and devotional pieces",
          "Basic sound amplification",
          "Traditional setup"
        ]
      },
      {
        name: "Extended Concert",
        price: "₹45,000",
        recommended: true,
        features: [
          "1-hour performance",
          "Varied repertoire",
          "Professional sound setup",
          "Audience interaction",
          "Custom song requests"
        ]
      },
      {
        name: "Grand Concert",
        price: "₹70,000",
        features: [
          "90-minute performance",
          "Full concert experience",
          "Premium sound system",
          "Stage setup included",
          "Meet and greet session",
          "Recorded performance"
        ]
      }
    ],
    addOns: ["Additional performance time (+₹15,000/hour)", "Recording services (+₹10,000)", "Accompanist (+₹12,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "dance-choreography",
    icon: "💃",
    title: "Sangeet & Dance Choreography",
    description: "Make your celebrations more fun and memorable with expertly choreographed dance routines for all age groups.",
    detailedDescription: "Our expert choreographers create engaging and memorable dance performances tailored to your event. From traditional Bollywood to contemporary styles, we ensure everyone can participate and enjoy.",
    packages: [
      {
        name: "Basic Choreography",
        price: "₹20,000",
        features: [
          "1 group dance routine",
          "3 practice sessions",
          "Basic costume guidance",
          "Song selection help",
          "Performance coordination"
        ]
      },
      {
        name: "Complete Sangeet",
        price: "₹40,000",
        recommended: true,
        features: [
          "Multiple group routines",
          "6 practice sessions",
          "Costume consultation",
          "Music editing",
          "Event day coordination",
          "Props arrangement"
        ]
      },
      {
        name: "Grand Production",
        price: "₹70,000",
        features: [
          "Professional choreography",
          "Unlimited practice sessions",
          "Complete costume design",
          "Live music coordination",
          "Stage design input",
          "Professional dancers",
          "Video documentation"
        ]
      }
    ],
    addOns: ["Additional routines (+₹8,000 each)", "Professional dancers (+₹5,000 each)", "Costume rental (+₹15,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "makeovers",
    icon: "💄",
    title: "Bridal & Non-Bridal Makeovers",
    description: "Look and feel your best with professional makeover services tailored to suit traditional and modern styles.",
    detailedDescription: "Our professional makeup artists and stylists ensure you look absolutely stunning on your special day. We specialize in both traditional and contemporary looks, using premium products and techniques.",
    packages: [
      {
        name: "Essential Makeover",
        price: "₹8,000",
        features: [
          "Professional makeup",
          "Basic hair styling",
          "1 outfit styling",
          "Touch-up kit",
          "2 hours service"
        ]
      },
      {
        name: "Bridal Package",
        price: "₹18,000",
        recommended: true,
        features: [
          "Bridal makeup",
          "Hair styling & accessories",
          "2 outfit changes",
          "Pre-wedding trial",
          "Touch-up services",
          "Draping assistance"
        ]
      },
      {
        name: "Complete Transformation",
        price: "₹35,000",
        features: [
          "Premium bridal makeup",
          "Multiple hair looks",
          "Complete wardrobe styling",
          "Jewelry consultation",
          "Photography-ready makeup",
          "Full day service",
          "Assistant included"
        ]
      }
    ],
    addOns: ["Additional outfit change (+₹3,000)", "Family member makeover (+₹5,000)", "Mehendi design (+₹2,000)"],
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
];