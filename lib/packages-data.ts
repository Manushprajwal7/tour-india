export interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  highlights: string;
  image: string;
  description?: string;
  itinerary?: string[];
}

export const allPackages: Package[] = [
  {
    id: 1,
    title: "Kerala Backwater Bliss",
    duration: "7 Days",
    price: "$1,200",
    highlights: "Houseboat stay, Kathakali performance",
    image: "/kerala-houseboat-on-backwaters-with-palm-trees--se.jpg",
    description: "Experience the serene backwaters of Kerala with traditional houseboat stays, cultural performances, and authentic Kerala cuisine.",
    itinerary: [
      "Day 1: Arrival in Kochi - Welcome & orientation",
      "Day 2: Kochi sightseeing - Fort Kochi, Chinese fishing nets",
      "Day 3: Munnar - Tea plantations tour",
      "Day 4: Thekkady - Spice plantation visit",
      "Day 5-6: Alleppey - Houseboat cruise on backwaters",
      "Day 7: Kathakali performance & departure"
    ]
  },
  {
    id: 2,
    title: "Tamil Nadu Temple Trail",
    duration: "10 Days",
    price: "$1,500",
    highlights: "Ancient temples, French Quarter Pondicherry",
    image: "/madurai-meenakshi-temple-with-colorful-gopuram-tow.jpg",
    description: "Explore the architectural marvels and spiritual heritage of Tamil Nadu's ancient temples and colonial charm of Pondicherry.",
    itinerary: [
      "Day 1: Chennai arrival & city tour",
      "Day 2: Mahabalipuram - Shore Temple & rock carvings",
      "Day 3-4: Pondicherry - French Quarter exploration",
      "Day 5: Chidambaram - Nataraja Temple",
      "Day 6: Thanjavur - Brihadeeswarar Temple",
      "Day 7-8: Madurai - Meenakshi Temple & local markets",
      "Day 9: Rameswaram - Temple & beach",
      "Day 10: Return to Chennai & departure"
    ]
  },
  {
    id: 3,
    title: "Mysore Royal Splendour",
    duration: "5 Days",
    price: "$950",
    highlights: "Mysore Palace, Silk Saree weaving",
    image: "/mysore-palace-illuminated-at-night--grand-royal-in.jpg",
    description: "Discover the royal heritage of Mysore with palace tours, traditional silk weaving demonstrations, and local cultural experiences.",
    itinerary: [
      "Day 1: Bangalore to Mysore - Mysore Palace tour",
      "Day 2: Chamundi Hills & silk factory visit",
      "Day 3: Srirangapatna - Tipu Sultan's palace",
      "Day 4: Local market exploration & cultural show",
      "Day 5: Departure"
    ]
  },
  {
    id: 4,
    title: "Goa Beach Paradise",
    duration: "6 Days",
    price: "$1,100",
    highlights: "Pristine beaches, Portuguese heritage, water sports",
    image: "/goa-beach-sunset-palm-trees-colorful-fishing-boats.jpg",
    description: "Relax on Goa's beautiful beaches, explore Portuguese colonial architecture, and enjoy vibrant nightlife and water activities.",
    itinerary: [
      "Day 1: Arrival in Goa - Check-in at beach resort",
      "Day 2: North Goa beaches - Baga, Calangute, Anjuna",
      "Day 3: Water sports & beach activities",
      "Day 4: Old Goa heritage tour - Churches & forts",
      "Day 5: South Goa - Palolem beach & spice plantation",
      "Day 6: Leisure & departure"
    ]
  },
  {
    id: 5,
    title: "Karnataka Heritage Explorer",
    duration: "8 Days",
    price: "$1,350",
    highlights: "Hampi ruins, Badami caves, Belur temples",
    image: "/hampi-ancient-temple-ruins-stone-chariot-karnataka.jpg",
    description: "Journey through Karnataka's UNESCO World Heritage sites, ancient ruins, and magnificent cave temples.",
    itinerary: [
      "Day 1: Bangalore arrival & city tour",
      "Day 2-3: Hampi - Ancient ruins exploration",
      "Day 4: Badami - Cave temples visit",
      "Day 5: Pattadakal & Aihole temples",
      "Day 6: Belur & Halebidu - Hoysala architecture",
      "Day 7: Mysore Palace",
      "Day 8: Return to Bangalore & departure"
    ]
  },
  {
    id: 6,
    title: "Andhra Coastal Journey",
    duration: "7 Days",
    price: "$1,050",
    highlights: "Tirupati temple, coastal cuisine, Araku Valley",
    image: "/visakhapatnam-coast.png",
    description: "Experience the spiritual and natural beauty of Andhra Pradesh from sacred temples to lush valleys and coastal delights.",
    itinerary: [
      "Day 1: Arrival in Tirupati - Temple darshan",
      "Day 2: Tirumala hills exploration",
      "Day 3: Visakhapatnam - Beach & port city tour",
      "Day 4-5: Araku Valley - Coffee plantations & tribal culture",
      "Day 6: Vijayawada - Kanaka Durga Temple",
      "Day 7: Return journey & departure"
    ]
  },
  {
    id: 7,
    title: "Kerala Hill Station Retreat",
    duration: "6 Days",
    price: "$1,150",
    highlights: "Munnar tea estates, Thekkady wildlife, Wayanad",
    image: "/munnar-tea.png",
    description: "Escape to Kerala's misty hill stations, walk through tea gardens, spot wildlife, and enjoy cool mountain air.",
    itinerary: [
      "Day 1: Kochi to Munnar - Tea museum visit",
      "Day 2: Munnar - Tea plantation trek & Eravikulam Park",
      "Day 3: Thekkady - Periyar Wildlife Sanctuary",
      "Day 4: Spice plantation tour & boat ride",
      "Day 5: Wayanad - Waterfalls & viewpoints",
      "Day 6: Return journey"
    ]
  },
  {
    id: 8,
    title: "Rajasthan Desert & Forts",
    duration: "9 Days",
    price: "$1,650",
    highlights: "Jaipur palaces, Udaipur lakes, Jaisalmer desert",
    image: "/rajasthan-fort-amber-palace-golden-sunset-ancient-.jpg",
    description: "Explore the royal grandeur of Rajasthan's forts, palaces, and the golden sands of the Thar Desert.",
    itinerary: [
      "Day 1: Jaipur arrival - Amber Fort",
      "Day 2: City Palace, Hawa Mahal, Jantar Mantar",
      "Day 3: Pushkar - Sacred lake & temples",
      "Day 4-5: Udaipur - City Palace, Lake Pichola cruise",
      "Day 6: Jodhpur - Mehrangarh Fort",
      "Day 7-8: Jaisalmer - Golden Fort & desert safari",
      "Day 9: Departure"
    ]
  },
  {
    id: 9,
    title: "Coorg Coffee Country",
    duration: "4 Days",
    price: "$800",
    highlights: "Coffee plantations, Abbey Falls, Dubare Elephant Camp",
    image: "/coorg-coffee.png",
    description: "Immerse yourself in the aromatic coffee estates of Coorg, enjoy nature walks, and experience local Kodava culture.",
    itinerary: [
      "Day 1: Bangalore to Coorg - Coffee plantation stay",
      "Day 2: Abbey Falls, Raja's Seat, coffee estate tour",
      "Day 3: Dubare Elephant Camp & river rafting",
      "Day 4: Talakaveri temple & return journey"
    ]
  },
  {
    id: 10,
    title: "Pondicherry French Escape",
    duration: "3 Days",
    price: "$650",
    highlights: "French Quarter, Auroville, beach promenade",
    image: "/pondicherry-french-colony-colorful-colonial-buildi.jpg",
    description: "Stroll through French colonial streets, visit the spiritual Auroville, and relax by the Bay of Bengal.",
    itinerary: [
      "Day 1: Chennai to Pondicherry - French Quarter walk",
      "Day 2: Auroville visit, beach activities",
      "Day 3: Paradise Beach, shopping & departure"
    ]
  },
  {
    id: 11,
    title: "Kanyakumari Spiritual Journey",
    duration: "5 Days",
    price: "$900",
    highlights: "Tri-sea confluence, Vivekananda Rock, sunrise views",
    image: "/kanyakumari-sunrise.png",
    description: "Visit the southernmost tip of India, witness spectacular sunrises and sunsets, and explore spiritual landmarks.",
    itinerary: [
      "Day 1: Trivandrum to Kanyakumari - Sunset view",
      "Day 2: Vivekananda Rock, Thiruvalluvar Statue",
      "Day 3: Suchindram Temple, Padmanabhapuram Palace",
      "Day 4: Beach meditation & local markets",
      "Day 5: Sunrise view & departure"
    ]
  },
  {
    id: 12,
    title: "Ooty & Coonoor Hill Escape",
    duration: "5 Days",
    price: "$950",
    highlights: "Nilgiri Mountain Railway, tea estates, botanical gardens",
    image: "/ooty-train.png",
    description: "Ride the historic toy train through the Nilgiris, explore Colonial-era hill stations and verdant tea country.",
    itinerary: [
      "Day 1: Coimbatore to Ooty - Toy train ride",
      "Day 2: Botanical gardens, Ooty Lake, Rose Garden",
      "Day 3: Coonoor - Sim's Park, Dolphin's Nose",
      "Day 4: Tea factory tour & nature walks",
      "Day 5: Return journey"
    ]
  }
];

// Get featured packages (first 3)
export const getFeaturedPackages = (): Package[] => {
  return allPackages.slice(0, 3);
};

// Get all packages
export const getAllPackages = (): Package[] => {
  return allPackages;
};

// Get package by ID
export const getPackageById = (id: number): Package | undefined => {
  return allPackages.find(pkg => pkg.id === id);
};
