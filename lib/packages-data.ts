export interface Package {
  id: number;
  title: string;
  duration: string;
  highlights: string;
  image: string;
  description?: string;
  itinerary?: string[];
}

export const allPackages: Package[] =[
  {
    "id": 10,
    "title": "Arupadai Veedu Murugan Tour",
    "duration": "6 Nights / 7 Days",
    "highlights": "All 6 sacred Murugan temples, Meenakshi Temple",
    "image": "/Arupadai Veedu Murugan.jpg",
    "description": "A dedicated pilgrimage to all six Arupadai Veedu (battlefield abodes) of Lord Murugan across Tamil Nadu.",
    "itinerary": [
      "Day 1: Arrival in Chennai – Transfer to hotel",
      "Day 2: Chennai to Tiruvannamalai – Tirutani Murugan temple en route",
      "Day 3: Tiruvannamalai to Kumbakonam – Tanjore temple & Swamimalai",
      "Day 4: Kumbakonam to Madurai – Palamudircholai & Tiruparankundram",
      "Day 5: Madurai to Tiruchendur – Seaside Murugan temple & return",
      "Day 6: Madurai to Trichy – Palani Murugan temple en route",
      "Day 7: Trichy temple visits & airport departure"
    ]
  },
  {
    "id": 11,
    "title": "Arupadai Veedu & Panchabootha Stalam",
    "duration": "9 Nights / 10 Days",
    "highlights": "6 Murugan temples, 5 Elemental Shiva temples",
    "image": "/Arupadai Veedu & Panchabootha Stalam.jpg",
    "description": "A comprehensive spiritual journey covering both the 6 Arupadai Veedu Murugan temples and the 5 Panchabootha (elemental) Shiva temples.",
    "itinerary": [
      "Day 1: Arrival in Trichy – Transfer to hotel",
      "Day 2: Trichy to Rameswaram – Water element temple en route",
      "Day 3: Rameswaram to Madurai – Arupadai Veedu temples",
      "Day 4: Madurai to Palani – More Arupadai Veedu temples",
      "Day 5: Palani to Kumbakonam – Tanjore Big Temple",
      "Day 6: Kumbakonam to Tiruvannamalai – Sky & Fire element temples",
      "Day 7: Tiruvannamalai to Kanchipuram – Earth element temple",
      "Day 8: Kanchipuram to Sri Kalahasti – Air element temple",
      "Day 9: Sri Kalahasti to Chennai – Temple visits",
      "Day 10: Chennai airport departure"
    ]
  },
  {
    "id": 12,
    "title": "Kerala & Tamil Nadu Fusion",
    "duration": "13 Nights / 14 Days",
    "highlights": "Houseboat stay, Meenakshi Temple, Kanyakumari, Temples",
    "image": "/chinese-fishing-nets-kochi-sunset-kerala-tradition.jpg",
    "description": "A perfect blend of Kerala's backwaters and hill stations with Tamil Nadu's iconic temples and spiritual destinations.",
    "itinerary": [
      "Day 1: Arrival in Cochin – City tour",
      "Day 2: Cochin to Alleppey – Houseboat stay",
      "Day 3: Alleppey to Munnar – Tea plantations",
      "Day 4: Munnar to Coimbatore – Eravikulam Park & Isha Yoga Center",
      "Day 5: Coimbatore to Madurai – Palani & temple visits",
      "Day 6: Madurai to Kanyakumari – Sunset point & temple",
      "Day 7: Kanyakumari to Rameswaram – Tiruchendur temple en route",
      "Day 8: Rameswaram to Kumbakonam – Ramanathaswamy temple",
      "Day 9: Kumbakonam to Trichy – Tanjore Big Temple",
      "Day 10: Trichy to Tiruvannamalai – Arunachaleshwarar temple",
      "Day 11: Tiruvannamalai to Tirupati – Golden temple en route",
      "Day 12: Tirupati to Chennai – Tirutani temple en route",
      "Day 13: Chennai exploration – Sightseeing & shopping",
      "Day 14: Chennai airport departure"
    ]
  },
  {
    "id": 1,
    "title": "Karnataka Heritage Grand Tour",
    "duration": "14 Nights / 15 Days",
    "highlights": "Hampi UNESCO site, Badami caves, Gokarna beaches",
    "image": "/hampi-ancient-temple-ruins-stone-chariot-karnataka.jpg",
    "description": "A comprehensive journey through Karnataka's rich history, architecture, and coastal beauty, covering ancient ruins, temples, and serene beaches.",
    "itinerary": [
      "Day 1: Arrival in Bangalore – Transfer to hotel & relax",
      "Day 2: Bangalore to Hospet – Visit Kalinga Kote Fort",
      "Day 3: Hospet to Hampi – Full day UNESCO world heritage site sightseeing",
      "Day 4: Hospet to Badami – Explore Aihole & Pattadakal temples",
      "Day 5: Badami to Bidar – Badami cave temples & fort tour",
      "Day 6: Bidar to Bijapur – Visit Bidar Fort & Bahmani tombs",
      "Day 7: Bijapur to Hubli – Gol Gumbaz & Ibrahim Roza",
      "Day 8: Hubli to Gokarna – Beach visit & temple tour",
      "Day 9: Gokarna to Murudeshwar – World's second-tallest Shiva statue",
      "Day 10: Murudeshwar to Udupi – Temple visits & Krishna temple",
      "Day 11: Udupi to Hassan – Explore Belur & Halebid temples",
      "Day 12: Hassan to Mysore – Shravanabelagola & Brindavan Gardens",
      "Day 13: Mysore to Bangalore – Maharaja Palace & Somnathpur temple",
      "Day 14: Bangalore to Kolar – Temple tour & return to Bangalore",
      "Day 15: Bangalore airport departure"
    ]
  },
  {
    "id": 2,
    "title": "Kerala Backwater Retreat",
    "duration": "7 Nights / 8 Days",
    "highlights": "Alleppey houseboat, Kathakali show, Spice plantation",
    "image": "/kerala-houseboat-on-backwaters-with-palm-trees--se.jpg",
    "description": "A serene journey through Kerala's backwaters, hill stations, and cultural landmarks, featuring traditional houseboat stays and wildlife experiences.",
    "itinerary": [
      "Day 1: Arrival in Trivandrum – Transfer to Alleppey houseboat",
      "Day 2: Alleppey to Thekkady – Spice plantation visit & cultural shows",
      "Day 3: Thekkady to Munnar – Periyar wildlife sanctuary & tea plantations",
      "Day 4: Munnar exploration – Eravikulam sanctuary, tea gardens, Echo Point",
      "Day 5: Munnar to Kumarakom – Lake activities & bird watching",
      "Day 6: Kumarakom leisure day – Relaxation & backwater views",
      "Day 7: Kumarakom to Cochin – Fort Cochin sightseeing",
      "Day 8: Cochin airport departure"
    ]
  },
  {
    "id": 3,
    "title": "Classic Kerala Experience",
    "duration": "10 Nights / 11 Days",
    "highlights": "Athirapally falls, Periyar boat ride, Backwater houseboat",
    "image": "/munnar-tea.png",
    "description": "An extensive Kerala tour covering hill stations, wildlife sanctuaries, backwaters, and beaches, with authentic cultural performances.",
    "itinerary": [
      "Day 1: Arrival in Cochin – Transfer to hotel",
      "Day 2: Cochin to Munnar – Visit Athirapally waterfalls & tea plantations",
      "Day 3: Munnar sightseeing – Eravikulam National Park & Rajamalai Hills",
      "Day 4: Munnar to Thekkady – Periyar Lake boat ride & wildlife watching",
      "Day 5: Thekkady exploration – Tribal villages & plantation tours",
      "Day 6: Thekkady to Kumarakom – Backwater resort stay",
      "Day 7: Kumarakom to Alleppey – 22-hour houseboat cruise",
      "Day 8: Alleppey to Kovalam – Beach relaxation",
      "Day 9: Kovalam to Trivandrum – Padmanabhaswamy Temple visit",
      "Day 10: Kovalam to Cochin – City tour & cultural dance show",
      "Day 11: Cochin airport departure"
    ]
  },
  {
    "id": 4,
    "title": "Kashmir Valley Paradise",
    "duration": "5 Nights / 6 Days",
    "highlights": "Gulmarg gondola, Pahalgam valleys, Dal Lake shikara",
    "image": "/kashmir.jpg",
    "description": "Experience the breathtaking beauty of Kashmir with mountain vistas, lush valleys, iconic gardens, and a serene houseboat stay on Dal Lake.",
    "itinerary": [
      "Day 1: Arrival in Srinagar – Transfer to hotel",
      "Day 2: Srinagar to Gulmarg – Gondola ride & scenic exploration",
      "Day 3: Gulmarg to Pahalgam – Auru Valley, Betab Valley & Chandan Vadi",
      "Day 4: Pahalgam exploration – Baisaran valley & horse riding",
      "Day 5: Pahalgam to Srinagar – Mughal gardens & Dal Lake shikara ride",
      "Day 6: Srinagar airport departure"
    ]
  },
  {
    "id": 5,
    "title": "Sri Lanka Cultural Discovery",
    "duration": "5 Nights / 6 Days",
    "highlights": "Elephant Orphanage, Temple of Tooth, Tea plantations",
    "image": "/kanyakumari-sunrise.png",
    "description": "Discover Sri Lanka's cultural treasures, from ancient temples and tea plantations to golden beaches and wildlife encounters.",
    "itinerary": [
      "Day 1: Arrival in Colombo – Transfer to Kandy via Pinnawala Elephant Orphanage",
      "Day 2: Kandy exploration – Temple of Tooth, Botanical Gardens & cultural show",
      "Day 3: Kandy to Nuwara Eliya – Tea factory visit & city tour",
      "Day 4: Nuwara Eliya to Bentota – Beach relaxation",
      "Day 5: Bentota exploration – Madhu River boat ride & turtle hatchery",
      "Day 6: Bentota to Colombo – City tour & airport departure"
    ]
  },
  {
    "id": 6,
    "title": "South India Temple Pilgrimage",
    "duration": "14 Nights / 15 Days",
    "highlights": "9 Navagraha temples, 6 Arupadai Veedu, Major Shiva temples",
    "image": "/South India Temple Pilgrimage.jpg",
    "description": "A spiritual pilgrimage covering the most sacred temples of Tamil Nadu, including all Navagraha temples and Arupadai Veedu Murugan shrines.",
    "itinerary": [
      "Day 1: Arrival in Trichy – Temple visits",
      "Day 2: Trichy to Rameswaram – Temple visits en route",
      "Day 3: Rameswaram to Kanyakumari – Ramanathaswamy temple & bathing",
      "Day 4: Kanyakumari to Madurai – Vivekananda rock & Meenakshi temple",
      "Day 5: Madurai to Coimbatore – Palani & other Murugan temples",
      "Day 6: Coimbatore to Kodaikanal – Isha Yoga center & hill station",
      "Day 7: Kodaikanal to Tanjore – Brihadeeswarar Temple",
      "Day 8: Tanjore to Kumbakonam – Navagraha temple visits",
      "Day 9: Kumbakonam to Vaitheeswaran Koil – More Navagraha temples",
      "Day 10: Vaitheeswaran Koil to Tiruvannamalai – Arunachaleshwarar temple",
      "Day 11: Tiruvannamalai to Kanchipuram – Golden temple & Kamakshi temple",
      "Day 12: Kanchipuram to Tirupati – Tirutani Murugan temple",
      "Day 13: Tirupati to Chennai – Sri Kalahasti temple",
      "Day 14: Chennai leisure day – Shopping",
      "Day 15: Chennai airport departure"
    ]
  },
  {
    "id": 7,
    "title": "Karnataka Spiritual Circuit",
    "duration": "8 Nights / 9 Days",
    "highlights": "Shravanabelagola, Sringeri, Murudeshwar, Mysore Palace",
    "image": "/mysore-palace-illuminated-at-night--grand-royal-in.jpg",
    "description": "A spiritual journey through Karnataka's most revered temples and monasteries, combined with coastal beauty and royal heritage.",
    "itinerary": [
      "Day 1: Arrival in Bangalore – Transfer to hotel",
      "Day 2: Bangalore to Hassan – Shravanabelagola & Belur/Halebid temples",
      "Day 3: Hassan to Kollur – Sringeri Sharada Peetham & Mookambika temple",
      "Day 4: Kollur to Murudeshwar – World's second-tallest Shiva statue",
      "Day 5: Kollur to Murudeshwar – World's second-tallest Shiva statue",
      "Day 6: Murudeshwar to Mangalore – Udupi Krishna temple en route",
      "Day 7: Mangalore to Madikere – Dharmasthala & Subramanya temples",
      "Day 8: Madikere to Mysore – Tibetan Monastery & Maharaja Palace",
      "Day 9: Mysore to Bangalore – Chamundeshwari temple",
      "Day 10: Bangalore airport departure"
    ]
  },
  {
    "id": 8,
    "title": "Tamil Nadu with Tirupathi",
    "duration": "9 Nights / 10 Days",
    "highlights": "Meenakshi Temple, Palani Murugan, Tirupati Balaji",
    "image": "/tamil Nadu with Tirupathi.jpg",
    "description": "A condensed pilgrimage covering major Tamil Nadu temples culminating with a visit to the sacred Tirupati Venkateswara temple.",
    "itinerary": [
      "Day 1: Arrival in Trichy – Temple visits",
      "Day 2: Trichy to Rameswaram – Temple visits en route",
      "Day 3: Rameswaram to Madurai – Ramanathaswamy temple & Meenakshi temple",
      "Day 4: Madurai to Palani – Multiple Murugan temple visits",
      "Day 5: Palani to Kumbakonam – Tanjore Big Temple & Swamimalai",
      "Day 6: Kumbakonam to Tiruvannamalai – Arunachaleshwarar temple",
      "Day 7: Tiruvannamalai to Tirupati – Ekambaranathar temple en route",
      "Day 8: Tirupati to Chennai – Tirutani Murugan temple",
      "Day 9: Chennai exploration – Temple visits & shopping",
      "Day 10: Chennai airport departure"
    ]
  },
  {
    "id": 9,
    "title": "Maharashtra Pilgrimage Tour",
    "duration": "5 Nights / 6 Days",
    "highlights": "Shirdi Sai Baba, Trimbakeshwar, Bhimashankar, Mumbai",
    "image": "/Maharashtra Pilgrimage Tour.jpg",
    "description": "A spiritual tour of Maharashtra covering Sai Baba's shrine, important Jyotirlingas, vineyards, and Mumbai's landmarks.",
    "itinerary": [
      "Day 1: Arrival in Mumbai – Transfer to hotel",
      "Day 2: Mumbai to Shirdi – Sai Baba temple darshan",
      "Day 3: Shirdi exploration – Shani Shingnapur temple visit",
      "Day 4: Shirdi to Nashik – Sula Vineyards & Trimbakeshwar temple",
      "Day 5: Nashik to Mumbai – Bhimashankar Jyotirlinga en route",
      "Day 6: Mumbai exploration & airport departure"
    ]
  },
  {
    "id": 13,
    "title": "Three States Explorer",
    "duration": "9 Nights / 10 Days",
    "highlights": "Mysore Palace, Ooty toy train, Cochin backwaters",
    "image": "/ooty-train.png",
    "description": "A diverse tour covering the highlights of Tamil Nadu, Karnataka, and Kerala – from palaces and hill stations to backwaters and temples.",
    "itinerary": [
      "Day 1: Arrival in Chennai – Sightseeing",
      "Day 2: Chennai to Bangalore – Transfer & church visits",
      "Day 3: Bangalore to Mysore – Palace & Brindavan Gardens",
      "Day 4: Mysore to Ooty – Mudumalai sanctuary & botanical gardens",
      "Day 5: Ooty to Coimbatore – Isha Yoga center to Cochin",
      "Day 6: Cochin to Alleppey – Fort Cochin & houseboat stay",
      "Day 7: Alleppey to Kovalam – Padmanabhaswamy temple",
      "Day 8: Kovalam to Madurai – Meenakshi & other temples",
      "Day 9: Madurai to Trichy – Transfer & free time",
      "Day 10: Trichy temple visits & airport departure"
    ]
  },
  {
    "id": 14,
    "title": "Tamil Nadu & Varanasi Spiritual",
    "duration": "14 Nights / 15 Days",
    "highlights": "Varanasi ghats, Bodh Gaya, Major Tamil temples",
    "image": "/kanyakumari-sunrise.png",
    "description": "A unique spiritual journey combining the sacred sites of North India (Varanasi, Bodh Gaya) with the temple wonders of Tamil Nadu.",
    "itinerary": [
      "Day 1: Arrival in Chennai – Fly to Varanasi",
      "Day 2: Varanasi exploration – Ghats, temples & Ganga Aarti",
      "Day 3: Varanasi to Ayodhya – Ram Temple visit",
      "Day 4: Varanasi to Vindhyachal – Temple visits",
      "Day 5: Varanasi to Bodh Gaya – Buddhist pilgrimage sites",
      "Day 6: Bodh Gaya to Varanasi – Fly to Chennai",
      "Day 7: Chennai to Kumbakonam – Temple visits",
      "Day 8: Kumbakonam exploration – Multiple temple visits",
      "Day 9: Kumbakonam to Madurai – Temple visits en route",
      "Day 10: Madurai exploration – Temples & shopping",
      "Day 11: Madurai to Trichy – Temple visits",
      "Day 12: Trichy to Tiruvannamalai – Arunachaleshwarar temple",
      "Day 13: Tiruvannamalai to Chennai – Temple visits en route",
      "Day 14: Chennai leisure day – Shopping",
      "Day 15: Chennai airport departure"
    ]
  },
  {
    "id": 15,
    "title": "Tamil Nadu Shiva Temple Trail",
    "duration": "14 Nights / 15 Days",
    "highlights": "Pancha Bhoota Stalam, Major Shiva temples",
    "image": "/hampi-ancient-temple-ruins-stone-chariot-karnataka.jpg",
    "description": "An in-depth pilgrimage to the most important Shiva temples across Tamil Nadu, covering various manifestations and architectural styles.",
    "itinerary": [
      "Day 1: Arrival in Chennai – Transfer to hotel",
      "Day 2: Chennai to Tiruvannamalai – Temples en route",
      "Day 3: Tiruvannamalai exploration – Arunachaleshwarar temple",
      "Day 4: Tiruvannamalai – Parvathamalai visit",
      "Day 5: Tiruvannamalai to Chidambaram – Temple visits en route",
      "Day 6: Chidambaram to Kumbakonam – Natarajar & other temples",
      "Day 7: Kumbakonam to Tiruvarur – Multiple temple visits",
      "Day 8: Tiruvarur to Ramnad – Temple visits en route",
      "Day 9: Ramnad to Tirunelveli – Temple visits",
      "Day 10: Tirunelveli to Courtralam – Waterfall temple visits",
      "Day 11: Courtralam exploration – Multiple temple visits",
      "Day 12: Courtralam to Madurai – Meenakshi temple",
      "Day 13: Madurai to Trichy – Major temple visits",
      "Day 14: Trichy to Chennai – Temple visits en route",
      "Day 15: Chennai temple visits & airport departure"
    ]
  },
  {
    "id": 16,
    "title": "Tamil Nadu Amman Temple Special",
    "duration": "7 Nights / 8 Days",
    "highlights": "Kamakshi Amman, Mariamman temples",
    "image": "/madurai-meenakshi-temple-with-colorful-gopuram-tow.jpg",
    "description": "A unique pilgrimage focusing on the worship of Goddess (Amman) temples across Tamil Nadu, covering various forms of the divine feminine.",
    "itinerary": [
      "Day 1: Arrival in Chennai – Transfer to Kanchipuram",
      "Day 2: Kanchipuram to Tiruvannamalai – Amman temple visits",
      "Day 3: Tiruvannamalai to Karur – Mariamman temple visits",
      "Day 4: Karur to Palani – Amman temple visits en route",
      "Day 5: Palani to Trichy – Temple visits",
      "Day 6: Trichy to Chennai – Major Amman temple visits en route",
      "Day 7: Chennai exploration – Karumariamman temple & shopping",
      "Day 8: Chennai airport departure"
    ]
  },
  {
    "id": 17,
    "title": "Classic Kerala Itinerary (Winter)",
    "duration": "10 Nights / 11 Days",
    "highlights": "Athirapally falls, Houseboat cruise, Kovalam beach",
    "image": "/goa-beach-sunset-palm-trees-colorful-fishing-boats.jpg",
    "description": "A detailed Kerala tour perfect for winter travel, covering waterfalls, wildlife, backwaters, beaches, and cultural experiences.",
    "itinerary": [
      "Day 1: Arrival in Cochin – Transfer to hotel",
      "Day 2: Cochin to Munnar – Visit Athirapally waterfalls",
      "Day 3: Munnar sightseeing – Eravikulam National Park & Top Station",
      "Day 4: Munnar to Thekkady – Periyar Lake boat ride",
      "Day 5: Thekkady exploration – Tribal villages & elephant ride",
      "Day 6: Thekkady to Kumarakom – Backwater resort stay",
      "Day 7: Kumarakom to Alleppey – Houseboat cruise",
      "Day 8: Alleppey to Kovalam – Beach relaxation",
      "Day 9: Kovalam to Trivandrum – Padmanabhaswamy Temple visit",
      "Day 10: Kovalam to Cochin – City tour & cultural dance show",
      "Day 11: Cochin airport departure"
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
