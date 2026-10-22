import type { TourPackage, Testimonial } from '../types';

export const tourPackages: TourPackage[] = [
  // ==========================================
  // THAILAND ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'bangkok-3d2n',
    name: 'BANGKOK (3D 2N)',
    country: 'Thailand',
    tagline: 'Chao Phraya Dinner Cruise, Safari World Open Zoo & City Stay',
    nights: 2,
    days: 3,
    showPrice: false,
    basePriceLKR: 78000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-3d2n.jpg',
    rating: 4.9,
    reviewsCount: 156,
    badge: 'Popular Short Break',
    highlights: [
      'Chao Phraya River Scenic Dinner Cruise with Entertainment',
      'Safari World Open-Air Zoo Excursion with Buffet Lunch',
      '2 Nights at 3-Star P. J. Watergate Hotel Bangkok',
      'All Ground Transfers in Private Car with Airport Pickup'
    ],
    inclusions: [
      '2 nights P. J. Watergate Hotel Bangkok (3 star)',
      '2 breakfast at the hotel (3 star)',
      'Safari World with Lunch',
      'Dinner Cruise',
      'Return Bangkok Airport Transfers',
      'All Transfers in Private Car'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dinner Cruise',
        description: 'Arrival at the airport, transfer into hotel & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World – Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species from around the world. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer into Airport for departure.'
      }
    ],
    category: 'bangkok'
  },
  {
    id: 'bangkok-4d3n',
    name: 'BANGKOK (4D 3N)',
    country: 'Thailand',
    tagline: 'Dinner Cruise, Safari World & Dreamworld Snow Town Experience',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 98500,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-4d3n.jpg',
    rating: 4.9,
    reviewsCount: 188,
    badge: 'Family Favorite',
    highlights: [
      'Chao Phraya Scenic Dinner Cruise with Live Entertainment',
      'Safari World Open-Air Zoo Encounter with Buffet Lunch',
      'Dream World Theme Park & Sub-Zero Snow Town with Lunch',
      '3 Nights at 3-Star P. J. Watergate Hotel Bangkok',
      'Return Airport & Sightseeing Transfers in Private Car'
    ],
    inclusions: [
      '3 nights P. J. Watergate Bangkok (3 star)',
      '3 breakfast at the hotel',
      'Dreamworld with Snow Town and Lunch',
      'Safari World with Lunch',
      'Dinner Cruise',
      'Return Airport Transfers',
      'All Transfers in Private Car'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dinner Cruise',
        description: 'Arrival at the airport, transfer into hotel & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World – Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species from around the world. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Dreamworld with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Snow Town. The Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances in a bright, lively atmosphere and a variety of enthralling rides. Snow Town Bangkok is an indoor snow park that provides guests with a one-of-a-kind opportunity to enjoy winter sports in a tropical environment. With snow-covered landscapes, visitors can feel as if they are in a winter wonderland within a simulated icy indoor setting. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer into Airport for departure.'
      }
    ],
    category: 'bangkok'
  },
  {
    id: 'bangkok-pattaya-5d4n',
    name: 'BANGKOK PATTAYA (5D 4N)',
    country: 'Thailand',
    tagline: 'Alcazar Show, Coral Island, Dinner Cruise & Safari World',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 112000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-pattaya-5d4n.jpg',
    rating: 5.0,
    reviewsCount: 245,
    badge: 'Popular Combo',
    highlights: [
      'Dazzling World-Renowned Alcazar Cabaret Show in Pattaya',
      'Speedboat Tour to Coral Island (Koh Larn) with Beach Lunch',
      'Romantic Chao Phraya River Dinner Cruise in Bangkok',
      'Safari World Wildlife Safari & Marine Park with Lunch',
      '2 Nights Pattaya (Heeton Concept) + 2 Nights Bangkok (P.J. Watergate)'
    ],
    inclusions: [
      '2 nights Heeton Concept Hotel Pattaya (3 star)',
      '2 nights P. J. Watergate Hotel Bangkok (3 star)',
      '4 breakfasts at the hotel',
      'Coral Island Tour with Lunch - SIC',
      'Alcazar Show',
      'Safari World with Lunch',
      'Dinner Cruise',
      'Transfers - Bangkok Airport to Pattaya Hotel to Bangkok Hotel to Bangkok Airport',
      'All Transfers in Private Car, unless specified SIC'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Alcazar Show',
        description: 'Arrival at the airport, transfer into hotel at Pattaya & check-in. In the evening, visit the Alcazar Show. The Alcazar Show stands as a beacon of entertainment, offering a unique blend of culture, performance, and dazzling glamour. The Alcazar Cabaret Show is an experience that transports you into a world of vibrant costumes, dramatic performances, and breathtaking stage designs. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Coral Island Tour with Lunch',
        description: 'Breakfast at hotel. Visit Coral Island. Coral Island, also known as Koh Larn, is a picturesque island located just a short ferry ride from Pattaya, Thailand. Renowned for its pristine beaches, crystal-clear waters, and vibrant marine life, this island paradise offers a captivating escape from the bustling city. Lunch at Coral Island. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Dinner Cruise & Bangkok Transfer',
        description: 'Breakfast at hotel. Transfer from Pattaya to Bangkok & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World. Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species from around the world. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer to the Airport for departure.'
      }
    ],
    category: 'bangkok-pattaya'
  },
  {
    id: 'bangkok-extra-6d5n',
    name: 'BANGKOK EXTRA TOUR (6D 5N)',
    country: 'Thailand',
    tagline: 'Ocean World, Madame Tussauds, Safari World, Dreamworld & City Temples',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 135000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-extra-6d5n.jpg',
    rating: 4.9,
    reviewsCount: 210,
    badge: 'Extra City Grand Tour',
    highlights: [
      'SEA LIFE Ocean World Giant Aquarium in Siam Paragon',
      'Madame Tussauds Wax Museum with Celebrities & Superheroes',
      'Dream World Theme Park & Sub-Zero Snow Town with Lunch',
      'Safari World Open-Air Zoo & Marine Park with Lunch',
      'Chao Phraya Dinner Cruise & Comprehensive City and Temple Tour'
    ],
    inclusions: [
      '5 nights Bangkok',
      '5 breakfast at the hotel (3 star)',
      'Dreamworld with Snow Town and Lunch',
      'Safari World with Lunch',
      'Dinner Cruise',
      'Ocean World and Madam Tussaud',
      'City and Temple Tour',
      'Return Airport Transfers',
      'All Transfers in Private Car'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dinner Cruise',
        description: 'Arrival at the airport, transfer into hotel & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World. Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species from around the world. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Dreamworld with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Snow Town. The Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances in a bright, lively atmosphere and a variety of enthralling rides. Snow Town Bangkok is an indoor snow park providing guests with a one-of-a-kind opportunity to enjoy winter sports in a tropical environment. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Ocean World & Madame Tussauds',
        description: 'Breakfast at hotel. Visit Ocean World – Ocean World in Bangkok is one of the biggest aquariums in Thailand, housing over 5-million-liter tanks across a 10,000 sqm space in the basement of Siam Paragon with eleven zones to explore with various animals, including sharks, rays, seahorses, and penguins. Visit Madame Tussauds – Madame Tussauds is a really cool place where you can see wax figures of famous people from around the world, including super heroes, international stars and local celebrities. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'City & Temple Tour',
        description: 'Breakfast at hotel. City & temple tour exploring Bangkok’s architectural marvels, heritage Buddhist temples, and bustling cultural sights. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer into Airport for departure.'
      }
    ],
    category: 'bangkok'
  },
  {
    id: 'bangkok-4d3n-leisure',
    name: 'BANGKOK LEISURE (4D 3N)',
    country: 'Thailand',
    tagline: 'Dinner Cruise, Free Day for Shopping & Dreamworld Snow Town',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 85000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-4d3n-leisure.jpg',
    rating: 4.8,
    reviewsCount: 164,
    badge: 'Shopping & Leisure',
    highlights: [
      'Chao Phraya River Scenic Dinner Cruise with Entertainment',
      'Full Free Day for Shopping at Siam Paragon & Pratunam Markets',
      'Dream World Theme Park & Sub-Zero Snow Town with Lunch',
      '3 Nights at 3-Star P. J. Watergate Hotel Bangkok',
      'Return Airport & Sightseeing Transfers in Private Car'
    ],
    inclusions: [
      '3 nights P. J. Watergate Bangkok (3 star)',
      '3 breakfast at the hotel',
      'Dreamworld with Snow Town and Lunch',
      'Dinner Cruise',
      'Return Airport Transfers',
      'All Transfers in Private Car'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dinner Cruise',
        description: 'Arrival at the airport, transfer into hotel & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Free Day (Leisure & Shopping)',
        description: 'Breakfast at hotel. Full day at leisure for exploring Bangkok’s world-class shopping malls like Siam Paragon, CentralWorld, MBK Center, and Pratunam wholesale fashion markets. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Dreamworld with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Snow Town. The Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances in a bright, lively atmosphere and a variety of enthralling rides. Snow Town Bangkok is an indoor snow park. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer into Airport for departure.'
      }
    ],
    category: 'bangkok'
  },
  {
    id: 'bangkok-5d4n',
    name: 'BANGKOK CITY EXPLORER (5D 4N)',
    country: 'Thailand',
    tagline: 'Dinner Cruise, Dream World Snow Town, Safari World & Ocean World',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 120000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-5d4n.jpg',
    rating: 4.9,
    reviewsCount: 220,
    badge: 'City Explorer',
    highlights: [
      'Chao Phraya River Scenic Dinner Cruise with Entertainment',
      'Dream World Theme Park & Sub-Zero Snow Town with Lunch',
      'Safari World Open-Air Zoo Safari Drive with Lunch',
      'SEA LIFE Ocean World Giant Aquarium & Madame Tussauds',
      '4 Nights at 3-Star P. J. Watergate Hotel Bangkok',
      'All Transfers in Private Car with Airport Pickup'
    ],
    inclusions: [
      '4 nights P. J. Watergate Bangkok (3 star)',
      '4 breakfasts at the hotel (3 star)',
      'Dreamworld with Snow Town and Lunch',
      'Dinner Cruise',
      'Safari World with Lunch',
      'Ocean World and Madam Tussaud',
      'Return Bangkok Airport Transfers',
      'All Transfers in Private Car Package'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dinner Cruise',
        description: 'Arrival at the airport, transfer into hotel & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, often accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Dream World with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Snow Town. The Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances and a variety of thrilling rides. Snow Town Bangkok is an indoor snow park simulated icy wonderland. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World – Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Ocean World & Madame Tussauds',
        description: 'Breakfast at hotel. Visit Ocean World – Ocean World in Bangkok is one of the biggest aquariums in Thailand, housing over 5-million-liter tanks across a 10,000 sqm space in the basement of Siam Paragon with eleven zones to explore. Visit Madame Tussauds wax museum. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer into Airport for departure.'
      }
    ],
    category: 'bangkok'
  },
  {
    id: 'bangkok-phuket-5d4n',
    name: 'BANGKOK PHUKET (5D 4N)',
    country: 'Thailand',
    tagline: 'Phi Phi / James Bond Island, Chao Phraya Dinner Cruise & Dreamworld Snow Town',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 99000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-phuket-5d4n.jpg',
    rating: 4.9,
    reviewsCount: 198,
    badge: 'Island & City Combo',
    highlights: [
      'Phi Phi Island or James Bond Island Speedboat / Longtail Cruise',
      'Chao Phraya River Scenic Dinner Cruise with Entertainment',
      'Dream World Theme Park & Sub-Zero Snow Town with Lunch',
      '2 Nights Ashlee Plaza Phuket + 2 Nights P.J. Watergate Bangkok',
      'Return Phuket & Bangkok Airport Transfers in Private Car'
    ],
    inclusions: [
      '2 nights Ashlee Plaza Phuket (3 star)',
      '2 nights P. J. Watergate Bangkok (3 star)',
      '4 breakfasts at the hotel',
      'Dreamworld with Snow Town and Lunch',
      'Dinner Cruise',
      'Return Phuket Airport Transfers',
      'Return Bangkok Airport Transfers',
      'All Transfers in Private Car'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions',
      'Optional: James Bond Island in Long Tail Boat with Canoeing, National Park Fees and Lunch - SIC',
      'Optional: Phi Phi Island in Speed boat with National Park Fees and Lunch - SIC'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Phuket',
        description: 'Arrival at Phuket airport, transfer into hotel at Phuket & check-in. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Phi Phi Island / James Bond Island (Optional)',
        description: 'Breakfast at hotel. As both Phi Phi Island and James Bond Island cannot be covered in two nights stay, optional excursions are available: James Bond Island in Long Tail Boat with Canoeing, National Park Fees and Lunch (SIC) or Phi Phi Island in Speed boat with National Park Fees and Lunch (SIC). Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Transfer to Bangkok + Dinner Cruise',
        description: 'Breakfast at hotel. Transfer from Phuket to Bangkok & check-in. In the evening, enjoy the Dinner Cruise – a leisurely boat excursion where passengers enjoy a meal while sailing on a waterway, accompanied by scenic views and entertainment. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Dreamworld with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Snow Town – Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances and thrilling rides. Snow Town is an indoor snow park simulated icy wonderland. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer to the Airport for departure.'
      }
    ],
    category: 'bangkok-phuket'
  },
  {
    id: 'bangkok-pattaya-7d6n',
    name: 'BANGKOK PATTAYA (7D 6N)',
    country: 'Thailand',
    tagline: 'Coral Island, Tiger Park, Sanctuary of Truth, Dreamworld & Safari World',
    nights: 6,
    days: 7,
    showPrice: false,
    basePriceLKR: 135000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/bangkok-pattaya-7d6n.jpg',
    rating: 5.0,
    reviewsCount: 312,
    badge: 'Ultimate Holiday',
    highlights: [
      'Pattaya Tiger Park Big Cats Encounter & Photo Opportunity',
      'The Sanctuary of Truth Monumental All-Wood Castle Temple',
      'Coral Island (Koh Larn) Turquoise Sea Boat Tour with Lunch',
      'Dream World Theme Park & Indoor Snow Town with Lunch',
      'Safari World Open-Air Zoo Safari Drive with Lunch',
      '3 Nights Golden Beach Pattaya + 3 Nights P.J. Watergate Bangkok'
    ],
    inclusions: [
      '3 nights Golden Beach Hotel Pattaya (3 star)',
      '3 nights P. J. Watergate Bangkok (3 star)',
      '6 breakfast at the hotel',
      'Coral Island Tour with Lunch - SIC',
      'Tiger Park + Sanctuary of Truth',
      'Dreamworld with Snow Town and Lunch',
      'Safari World with Lunch',
      'Transfers - Bangkok Airport to Pattaya Hotel to Bangkok Hotel to Bangkok Airport',
      'All Transfers in Private Car, unless specified SIC'
    ],
    exclusions: [
      'Anything not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival',
        description: 'Arrival at the airport, transfer into hotel at Pattaya & check-in. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Coral Island with Lunch',
        description: 'Breakfast at hotel. Visit Coral Island. Coral Island, also known as Koh Larn, is a picturesque island located just a short ferry ride from Pattaya, Thailand. Renowned for its pristine beaches, crystal-clear waters, and vibrant marine life, this island paradise offers a captivating escape from the bustling city. Lunch at Coral Island. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Tiger Park + Sanctuary of Truth',
        description: 'Breakfast at hotel. Visit Tiger Park. Dare yourself to beat the tiger-phobia in your Pattaya tour by taking a ride to Pattaya Tiger Park. A heart-pounding encounter with big cats is one of the not-to-miss things while in Pattaya. From young cubs to fully grown tigers surely expect some genuine love from you; and in return, they pour the same by giving you a chance of cuddling, hugging, and feeding them. Visit Sanctuary of Truth. The Sanctuary of Truth is an unfinished museum in Pattaya, Thailand designed by Thai businessman Lek Viriyaphan. The museum structure is a hybrid of a temple and a castle that is themed on the Ayutthaya Kingdom and of Buddhist and Hindu beliefs. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Transfer to Bangkok',
        description: 'Breakfast at hotel. Transfer from Pattaya to Bangkok & check-in. Overnight at Hotel.'
      },
      {
        day: 5,
        title: 'Dreamworld with Snow Town & Lunch',
        description: 'Breakfast at hotel. Visit Dreamworld & Visit Snow Town. The Dream World Bangkok offers vibrant displays, flowery gardens, waterworks, a snow park, entertainment performances in a bright, lively atmosphere and a variety of enthralling rides. Snow Town Bangkok is an indoor snow park that provides guests with a one-of-a-kind opportunity to enjoy winter sports in a tropical environment. With snow-covered landscapes, visitors can feel as if they are in a winter wonderland within a simulated icy indoor setting. Lunch at Dreamworld. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Safari World with Lunch',
        description: 'Breakfast at hotel. Visit Safari World. Safari World Bangkok is a popular tourist attraction located in the heart of the capital city of Thailand. It is one of the largest open-air zoos in Asia and is home to a wide variety of animal species from around the world. Lunch at Safari World. Overnight at Hotel.'
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Breakfast at hotel. Check out hotel & transfer to the Airport.'
      }
    ],
    category: 'bangkok-pattaya'
  },

  // ==========================================
  // INDIA ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'india-shimla-manali-7d6n',
    name: 'CHANDIGARH, SHIMLA & MANALI (7D 6N)',
    country: 'India',
    tagline: 'Himalayan Vistas, Solang Valley Snow Point, Hadimba Temple & British Hill Station Charm',
    nights: 6,
    days: 7,
    showPrice: false,
    basePriceLKR: 135000,
    hasTiers: true,
    tier3StarLKR: 135000,
    tier4StarLKR: 165000,
    minPax: 2,
    travelDates: '01 April 2026 – 31 Mar 2027',
    image: '/images/india-shimla-manali-7d6n.jpg',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Himalayan Highlands',
    highlights: [
      'Chandigarh Rock Garden, Sukhna Lake & Impressive Govt. Architecture',
      'Shimla English Hill Station Ridge, Christ Church & Scandal Point',
      'Scenic Kullu Valley ("Valley of the Gods") Himalayan Mountain Drive',
      'Solang Valley Snow Point Adventure Sports & Lord Shiva Shrine',
      'Hadimba Dhoongri Temple & Vashisht Hot-Sulphur Springs',
      'Chandigarh Famous Sector 17 Market Shopping'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by A/C Vehicle/s with driver (Non-A/C in Hill Areas)',
      '6 Night’s accommodation on twin/double sharing basis at hotels',
      'Breakfast at the hotels',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Delhi & Drive to Chandigarh (5/6 hrs drive)',
        description: 'Arrival at Airport. Drive to Chandigarh. Transfer to hotel & check in. Visit Rock Garden, Sukhna Lake & Drive past of impressive Govt. buildings. Overnight Stay at Hotel.'
      },
      {
        day: 2,
        title: 'Chandigarh – Shimla (4.5 hrs drive)',
        description: 'Breakfast at hotel. Drive to Shimla. Shimla, 6900 ft, spread 7 miles along the ridge; it presents substantial evidence of an attempt of the "Sahibs" to build an English town in India. Relics of styles long forgotten in England are still evident here. It is a charming town with an almost palpable British presence manifest in buildings like Christ Church, Neo-Tudor Library Building, the famous Scandal Point & many cottages. St. Michael’s Cathedral located just off the Mall is cruciform in design and has fine stained glass. Visit "The Mall", take the lift at own costs to get to Mall road, the nerve centre of Shimla, take a stroll, the shops along and around are worth exploring. Open spaces & plenty of enchanting walks present excellent views of mountain ranges. Check-in at hotel & overnight at hotel.'
      },
      {
        day: 3,
        title: 'Shimla - Manali (8/9 hrs drive)',
        description: 'Breakfast at Hotel. Drive to Manali through beautiful Mountain Roads with fantastic scenery, drive past the Kullu Valley to get to Manali, popularly called as the Valley of the Gods because of its mind-blowing beauty. Check in & Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Manali - Solang Valley Exploration',
        description: 'Breakfast at hotel. Visit Solang Valley. A gorgeous dale, nestling between Beas Kund & Solang village, presents picturesque scenery of snow-clad mountains and glaciers (usually during winter times), popularly called Snow Point, it’s a perfect place for skiing usually during End Dec to Feb/March months. It’s also a spot for adventure activities like horse riding, paragliding, skiing etc. which based on your period of travel & local conditions during your visit. Valley holds a shrine of Lord Shiva on top of a hill. Check-in at hotel & overnight at hotel.'
      },
      {
        day: 5,
        title: 'Manali - Dhoongri Temple & Mall Road',
        description: 'Breakfast at hotel. Today visit Dhoongri Temple, dedicated to the goddess Hadimba. Nearby are the hot-Sulphur springs at Vashisht perched on a steep hill-side below the Temple. Afternoon/evening free for a stroll on the Mall Road, where you can pick up famous Kullu Shawls and colorful caps.'
      },
      {
        day: 6,
        title: 'Manali – Chandigarh (9 hrs drive)',
        description: 'Breakfast at hotel. Morning drive to Chandigarh. Visit famous Sector 17 market for some good shopping. Overnight at hotel.'
      },
      {
        day: 7,
        title: 'Chandigarh – Delhi – Departure (6 hrs drive)',
        description: 'Breakfast at hotel. Transfer to Airport for your departure flight.'
      }
    ],
    category: 'india-north'
  },
  {
    id: 'india-buddhist-pilgrimage-8d7n',
    name: 'BUDDHIST PILGRIMAGE (8D 7N)',
    country: 'India',
    tagline: 'Sacred Dambadiva: Varanasi, Bodhgaya, Rajgir, Nalanda, Vaishali, Kushinagar, Lumbini & Sravasti',
    nights: 7,
    days: 8,
    showPrice: false,
    basePriceLKR: 195000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-buddhist-pilgrimage-8d7n.jpg',
    rating: 5.0,
    reviewsCount: 215,
    badge: 'Sacred Pilgrimage',
    highlights: [
      'Sarnath First Sermon Site, Dhamek Stupa & Sarnath Museum',
      'Bodhgaya Mahabodhi Temple & Enlightenment Bodhi Tree',
      'Rajgir Vulture Peak, World Peace Stupa & Ancient Nalanda University Ruins',
      'Vaishali Last Sermon site & Kushinagar Mahaparinirvana Temple & Rambhar Stupa',
      'Lumbini (Nepal) Birthplace of Lord Buddha & Sacred Ashokan Pillar',
      'Kapilavastu Royal Palace Ruins, Sravasti Jetavana Monastery & Sri Lankan Temple',
      'Full Board / Meals Included as Specified (B/L/D) & English Speaking Guides'
    ],
    inclusions: [
      'All transfers, tours & inter-city drives by A/C Vehicle',
      '7 Nights accommodation on twin/triple sharing at hotel specified below/similar local 3* type',
      'Meals as specified above (B-denotes: Breakfast, L-Lunch & D-Dinner)',
      'English Speaking Guide/s at Sarnath, Bodhgaya, Rajgir/Nalanda (Other Places No Guides)',
      'Visa fees'
    ],
    exclusions: [
      'Airfare',
      'Meals other than specified above',
      'Entry fees at the places of visit',
      'Rajgir Cable Car Charges',
      'Mineral Water/Drinks',
      'Tips to Driver/Guides',
      'Tips at Borders or any other expenses NOT specified above as included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Varanasi (Dinner)',
        description: 'Arrive Varanasi and transfer to hotel. Afternoon visit Sarnath, where Buddha delivered his first sermon to his five disciples. Also visit Sarnath Museum & Sarnath temple. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Varanasi – Bodhgaya (Breakfast / Lunch / Dinner) (> 6 hrs drive)',
        description: 'Morning drive to Bodhgaya. Check-in at your hotel. Visit Mahabodhi Temple. Overnight at the Hotel.'
      },
      {
        day: 3,
        title: 'Bodhgaya Sacred Sites (Breakfast / Lunch / Dinner)',
        description: 'Morning visit Mahabodhi Temple, Bodhi Tree where Lord Buddha was enlightened, Great Buddha Statue & other close-by temples. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Bodhgaya – Rajgir – Nalanda – Patna (Breakfast / Dinner) (> 5.5 hrs + 3 hrs visits)',
        description: 'Morning leave for Rajgir (90 Kms, 3 hrs) & visit Vulture Peak (where Lord Buddha meditated), world Peace Stupa by Cable Car, Bimbisara Jail, Caves etc. Then drive 45 minutes to Nalanda to visit the ruins of the world\'s oldest Nalanda University containing ruins of numerous Buddhist stupas, monasteries etc. Thereafter, drive 3 hours to Patna. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Patna – Vaishali – Kushinagar (Breakfast / Lunch / Dinner) (> 6 hrs + 2 enroute visit/lunch)',
        description: 'Morning drive to Kushinagar. Enroute visit Vaishali, where Lord Buddha delivered his last sermon. Arrive Kushinagar & Check-in at Hotel. Later visit Mahaparinirvana Temple & also visit Rambhar Stupa (cremation site). Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Kushinagar – Lumbini (Nepal) (Breakfast / Lunch / Dinner) (> 5 hrs + 2 hrs Border)',
        description: 'Morning drive to Lumbini. Complete your immigration/customs formalities at India & Nepal Borders (Ensure you have a Double Entry visa for India & Single Entry for Nepal). Arrive Lumbini, Check-in at your Hotel. Later visit LUMBINI, Birth place of Lord Buddha, Ashokan Pillar etc. Overnight at hotel.'
      },
      {
        day: 7,
        title: 'Lumbini – Kapilavastu – Sravasti (Breakfast / Lunch / Dinner) (> 6.5 hrs drive + 1 hr visit + 1 hr Border)',
        description: 'AM drive to Sravasti via visiting Kapilavastu – where Buddha’s childhood was spent. Visit ruins of the Palaces. On arrival, Check-in at the hotel. Later visit Jet Vana & perform your religious activities, Angulimal Caves & also Sri Lankan Temple. Overnight at hotel.'
      },
      {
        day: 8,
        title: 'Sravasti – Lucknow – Departure (Breakfast) (4.5 hrs Drive)',
        description: 'AM drive 4.5 hrs to Lucknow & connect your onward flight.'
      }
    ],
    category: 'india-pilgrimage'
  },
  {
    id: 'india-buddhist-pilgrimage-5d4n',
    name: 'SPECIAL BUDDHIST PILGRIMAGE (5D 4N)',
    country: 'India',
    tagline: 'Sacred Dambadiva: Varanasi First Sermon at Sarnath, Bodhgaya Mahabodhi Temple, Rajgir Vulture Peak & Nalanda Ruins',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 150000,
    minPax: 4,
    travelDates: '01st Apr. 2026 – 31st Mar. 2027',
    image: '/images/india-buddhist-pilgrimage-8d7n.jpg',
    rating: 4.96,
    reviewsCount: 168,
    badge: 'Dambadiva Special',
    highlights: [
      'Sarnath: Deer Park First Sermon Site, Dhamek Stupa & Sarnath Archaeological Museum',
      'Bodhgaya: Mahabodhi Temple, Sacred Bodhi Tree of Enlightenment & Great Buddha Statue',
      'Rajgir: Vulture Peak (Gridhakuta) Meditation Site & World Peace Stupa by Cable Car',
      'Nalanda: Ancient Ruins of World-Oldest Buddhist University & Monasteries',
      'Full Board Meals Included (Breakfast, Lunch & Dinner as Specified)',
      'Dedicated English-Speaking Buddhist Pilgrimage Guides & Indian Visa Included'
    ],
    inclusions: [
      'All transfers, tours & inter-city drives by A/C Vehicle',
      '4 Nights accommodation on twin/triple sharing at local 3* hotel',
      'Meals as specified above (B-denotes: Breakfast, L-Lunch & D-Dinner)',
      'English Speaking Guide/s at Sarnath, Bodhgaya, Rajgir/Nalanda',
      'Visa fees'
    ],
    exclusions: [
      'Airfare',
      'Meals other than specified above',
      'Entry fees at the places of visit',
      'Rajgir Cable Car Charges',
      'Mineral Water',
      'Tips to Driver/Guides, Tips at Borders or any other expenses NOT specified above as included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Varanasi (Lunch / Dinner)',
        description: 'Arrive Varanasi and transfer to hotel. Afternoon visit Sarnath, where Buddha delivered his first sermon to his five disciples. Also visit Sarnath Museum & Sarnath temple. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Varanasi – Bodhgaya (Breakfast / Lunch / Dinner) (> 6 hrs drive)',
        description: 'Morning drive to Bodhgaya. Check-in at your hotel. Visit Mahabodhi Temple. Overnight at the Hotel.'
      },
      {
        day: 3,
        title: 'Bodhgaya Sacred Sites (Breakfast / Lunch / Dinner)',
        description: 'Morning visit Mahabodhi Temple, Bodhi Tree where Lord Buddha was enlightened, Great Buddha Statue & other close-by temples. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Bodhgaya – Rajgir – Nalanda – Patna (Breakfast / Lunch / Dinner) (> 5.5 hrs + 3 hrs visits)',
        description: 'Morning leave for Rajgir (90 Kms, 3 hrs) & visit Vulture Peak (where Lord Buddha meditated), world Peace Stupa by Cable Car, Bimbisara Jail, Caves etc. Then drive 45 minutes to Nalanda to visit the ruins of world oldest Nalanda University containing ruins of numerous Buddhist stupas, monasteries etc. Thereafter, drive 3 hours to Patna. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Patna – Departure (Breakfast)',
        description: 'Breakfast at hotel. Connect your onward Flight for departure.'
      }
    ],
    category: 'india-pilgrimage'
  },
  {
    id: 'india-chennai-3d2n',
    name: 'CHENNAI SHOPPING (3D 2N)',
    country: 'India',
    tagline: 'Leader Memorial, Marina Beach & Exclusive South Indian Shopping Spree',
    nights: 2,
    days: 3,
    showPrice: false,
    basePriceLKR: 55000,
    minPax: 2,
    travelDates: '01st Apr. 2026 – 31st Mar 2027',
    image: '/images/india-chennai-3d2n.jpg',
    rating: 4.8,
    reviewsCount: 168,
    badge: 'Popular Weekend Break',
    highlights: [
      'Marina Beach Scenic Promenade & Leader Memorial Visit',
      'Unrestricted Free Shopping Time in Chennai\'s Famous Markets',
      'Explore T. Nagar Silks, Ranganathan Street & Express Avenue Mall',
      '2 Nights Twin/Double Sharing Accommodation at 3-Star Hotels',
      'Breakfast at Hotel Included',
      'Private Air-Conditioned Vehicle with Driver for All Transfers',
      'Visa Fees Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '2 Night’s accommodation on twin/double sharing basis at 3* hotels',
      'Breakfast at hotel',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Chennai',
        description: 'Arrival at Airport. Visit leader memorial and marina beach. Transfer to hotel & check in. Evening free for shopping. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Chennai Shopping Exploration',
        description: 'Breakfast at hotel. Full day free for shopping. Explore vibrant textiles, world-famous Kanchipuram silk sarees, traditional South Indian gold and jewelry, handicrafts, and modern shopping centers. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Chennai Shopping & Departure',
        description: 'Breakfast at hotel. Free for shopping. Transfer to the airport in the evening for your departure flight.'
      }
    ],
    category: 'india-chennai'
  },
  {
    id: 'india-chennai-5d4n',
    name: 'CHENNAI SHOPPING (5D 4N)',
    country: 'India',
    tagline: 'Extended 5-Day South Indian Shopping Holiday: Silk Sarees, Gold Jewellery & Marina Coast',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 75000,
    minPax: 2,
    travelDates: '01 Apr. 2026 – 31 Mar. 2027',
    image: '/images/india-chennai-5d4n.jpg',
    rating: 4.9,
    reviewsCount: 182,
    badge: 'Best Value Shopping Tour',
    highlights: [
      'Marina Beach & Leader Memorial Sightseeing',
      '4 Days of Dedicated Free Shopping Time across Chennai',
      'Shop Kanchipuram Pure Silks, Gold & Diamond Jewellery, Spices & Fashion',
      '4 Nights Accommodation on Twin/Double Sharing Basis at 3-Star Hotels',
      'Daily Breakfast at Hotel Included',
      'Private Aircon Vehicle with Chauffeur for All Transfers',
      'Visa Fees Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '4 Night’s accommodation on twin/double sharing basis at 3* hotels',
      'Breakfast at hotel',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Chennai',
        description: 'Arrival at Airport. Visit leader memorial and marina beach. Transfer to hotel & check in. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Chennai - Free for Shopping',
        description: 'Breakfast at hotel. Free for shopping. Enjoy an unhurried shopping excursion through T. Nagar silk emporiums and department stores. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Chennai - Free for Shopping',
        description: 'Breakfast at hotel. Free for shopping. Explore Pondy Bazaar, Spencer Plaza, Phoenix MarketCity and local boutiques. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Chennai - Free for Shopping',
        description: 'Breakfast at hotel. Free for shopping. Discover specialized textile centers, tailoring hubs, and South Indian spice markets. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Chennai - Final Shopping & Departure',
        description: 'Breakfast at hotel. Morning Free for shopping. Evening transfer to the airport for your flight.'
      }
    ],
    category: 'india-chennai'
  },
  {
    id: 'india-thirupathi-4d3n',
    name: 'THIRUPATHI VENKATESWARA TEMPLE (4D 3N)',
    country: 'India',
    tagline: 'Sacred Lord Venkateswara Balaji Darshan in Tirumala Hills, Scenic Ghat Roads & Chennai Shopping Spree',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 65000,
    minPax: 4,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-chennai-3d2n.jpg',
    rating: 4.94,
    reviewsCount: 146,
    badge: 'Spiritual Darshan',
    highlights: [
      'Sacred Tirumala Lord Venkateswara (Balaji) Temple Visit & Darshan',
      'Scenic Drive through Eastern Ghats Mountain Roads to Tirupati',
      'Drive to Chennai with City Exploration & Sightseeing',
      'Full Day Free for Chennai Silks, Jewellery & Bazaar Shopping',
      '3 Nights at 3-Star Hotels with Daily Buffet Breakfast',
      'Private Air-Conditioned Vehicle with Dedicated Chauffeur & Indian Visa Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '3 Night at 3star Hotels with breakfast',
      'Indian Visa',
      'Transport'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Chennai & Transfer to Thirupathi',
        description: 'Arrival at Airport. Met and transfer to the Thirupathi Hotel & check in. Relax and prepare for darshan. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Thirupathi Temple Darshan | Drive to Chennai',
        description: 'Breakfast at hotel. Visit sacred Thirupathi Venkateswara Temple for blessings. Checkout and drive to Chennai. Check in at hotel. Evening you may visit Chennai town and enjoy shopping. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Chennai Shopping & Leisure',
        description: 'Breakfast at hotel. Full day at leisure for shopping Chennai silks, sarees, jewellery, and local handicrafts. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Chennai – Departure',
        description: 'Breakfast at hotel. In time transfer to Airport for your departure flight.'
      }
    ],
    category: 'india-chennai'
  },
  {
    id: 'india-velankanni-4d3n',
    name: 'VELANKANNI & CHENNAI (4D 3N)',
    country: 'India',
    tagline: 'Sacred Basilica of Our Lady of Good Health, San Thome Cathedral, St. Thomas Mount & Chennai Shopping',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 75000,
    minPax: 4,
    travelDates: '01st Apr. 2026 – 31st Mar. 2027',
    image: '/images/india-chennai-5d4n.jpg',
    rating: 4.95,
    reviewsCount: 152,
    badge: 'Sacred Pilgrimage',
    highlights: [
      'Basilica of Our Lady of Good Health in Velankanni (Lourdes of the East)',
      'Historic San Thome Basilica built over Tomb of Apostle St. Thomas',
      'St. Thomas Mount Sacred Shrine with Panoramic City Views',
      'Little Mount (Chinnamalai) Ancient Cave Shrine & Spring',
      'Comfortable Stay at 3-Star Hotels with Daily Breakfast',
      'Private AC Vehicle with Dedicated Chauffeur, Tolls, Taxes & Indian Visa Included'
    ],
    inclusions: [
      'Indian Visa',
      '3* Hotel Accommodation',
      'Daily Breakfast at hotel',
      'All Transport in AC vehicle',
      'Tolls & Parking',
      'Permit & Taxes',
      'Driver Bata'
    ],
    exclusions: [
      'Laundry & Medical expenses',
      'Lunch & Dinner',
      'Driver Tips',
      'Anything not mentioned in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chennai – Velankanni',
        description: 'Chennai Airport pickup and travel to Velankanni. Visit the sacred Basilica of Our Lady of Good Health (Velankanni Church) to offer prayers and explore the holy shrine grounds. Overnight stay at Velankanni hotel.'
      },
      {
        day: 2,
        title: 'Velankanni to Chennai & Leisure Shopping',
        description: 'Breakfast at hotel. Optional morning visit to Velankanni Church for blessings, then proceed on a comfortable drive to Chennai. Check in at Chennai hotel. Evening free time for leisure activities and shopping in Chennai. Overnight stay at Chennai hotel.'
      },
      {
        day: 3,
        title: 'Chennai Sacred Shrines & City Tour',
        description: 'Breakfast at hotel. Easy morning free for shopping silks, jewellery, and local handicrafts. Visit historic St. Thomas Basilica (San Thome), St. Thomas Mount with panoramic city vistas, and Little Mount Church cave shrine. Overnight stay at hotel.'
      },
      {
        day: 4,
        title: 'Chennai – Departure',
        description: 'Breakfast at hotel. Check out and transfer to Chennai International Airport for your departure flight.'
      }
    ],
    category: 'india-chennai'
  },
  {
    id: 'india-shimla-manali-6d5n',
    name: 'CHANDIGARH, SHIMLA & MANALI (6D 5N)',
    country: 'India',
    tagline: 'Scenic 6-Day Himalayan Gateway: Chandigarh Gardens, Shimla Mall Road & Solang Valley Snow Point',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 130000,
    hasTiers: true,
    tier3StarLKR: 130000,
    tier4StarLKR: 160000,
    minPax: 2,
    travelDates: '01 Apr. 2026 – 31 Mar. 2027',
    image: '/images/india-shimla-manali-6d5n.jpg',
    rating: 4.9,
    reviewsCount: 134,
    badge: 'Himalayan Express',
    highlights: [
      'Chandigarh Rock Garden, Sukhna Lake & Impressive Govt. Buildings',
      'Shimla English Hill Station Ridge, Christ Church & Scandal Point Walk',
      'Kullu Valley Mountain Drive ("Valley of the Gods")',
      'Solang Valley Snow Point Skiing, Paragliding & Lord Shiva Hill Shrine',
      'Historic Hadimba Dhoongri Temple & Vashisht Hot Sulphur Springs',
      'Chandigarh Famous Sector 17 Market Shopping'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by A/C Vehicle/s with driver (Non-A/C in Hill Areas)',
      '5 Night’s accommodation on twin/double sharing basis at hotels',
      'Breakfast at the hotels',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Delhi & Drive to Chandigarh (5/6 hrs drive)',
        description: 'Arrival at Airport. Drive to Chandigarh. Transfer to hotel & check in. Visit Rock Garden, Sukhna Lake & Drive past of impressive Govt. buildings. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Chandigarh – Shimla (4.5 hrs drive)',
        description: 'Breakfast at hotel. Drive to Shimla. Shimla, 6900 ft, spread 7 miles along the ridge; it presents substantial evidence of an attempt of the "Sahibs" to build an English town in India. Relics of styles long forgotten in England are still evident here. It is a charming town with an almost palpable British presence manifest in buildings like Christ Church, Neo-Tudor Library Building, the famous Scandal Point & many cottages. St. Michael’s Cathedral located just off the Mall is cruciform in design and has fine stained glass. Visit "The Mall", take the lift at own costs to get to Mall road, the nerve centre of Shimla, take a stroll, the shops along and around are worth exploring. Open spaces & plenty of enchanting walks present excellent views of mountain ranges. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Shimla - Manali (8/9 hrs drive)',
        description: 'Breakfast at hotel. Drive to Manali through beautiful Mountain Roads with fantastic scenery, drive past the Kullu Valley to get to Manali, popularly called as the Valley of the Gods because of its mind-blowing beauty. Check in hotel & overnight at hotel.'
      },
      {
        day: 4,
        title: 'Manali - Solang Valley & Hadimba Temple',
        description: 'Breakfast at hotel. Visit Solang Valley. A gorgeous dale, nestling between Beas Kund & Solang village, presents picturesque scenery of snow clad mountains and glaciers (usually during winter times), popularly called Snow Point, it’s a perfect place for skiing usually during End Dec to Feb/March months. It’s also a spot for adventure activities like horse riding, paragliding, skiing etc. which based on your period of travel & local conditions during your visit. Valley holds a shrine of Lord Shiva on top of a hill. Later visit Dhoongri Temple, dedicated to the goddess Hadimba. Nearby are the hot-Sulphur springs at Vashisht perched on a steep hill-side below the Temple. Evening time permitting take a stroll on the Mall Road, and you may pick up famous Kullu Shawls and colorful caps. Check in hotel & Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Manali – Chandigarh (9 hrs drive)',
        description: 'Breakfast at hotel. Morning drive to Chandigarh. Visit famous Sector 17 market for some good shopping. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Chandigarh – Delhi – Departure (6 hrs drive)',
        description: 'Breakfast at hotel. Transfer to Airport for onward departure.'
      }
    ],
    category: 'india-north'
  },
  {
    id: 'india-kashmir-delhi-6d5n',
    name: 'KASHMIR & DELHI (6D 5N)',
    country: 'India',
    tagline: 'Srinagar Deluxe Houseboats, Romantic Shikara Lake Ride, Gulmarg Gondola & Pahalgam Shepherds Valley',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 160000,
    minPax: 2,
    travelDates: '1st April 2026 – 31st March 2027',
    image: '/images/india-kashmir-delhi-6d5n.jpg',
    rating: 4.95,
    reviewsCount: 178,
    badge: 'Paradise on Earth',
    highlights: [
      'Stay in Deluxe Carved Houseboat on Serene Dal Lake',
      'Romantic Shikara Boat Ride on Srinagar\'s Sparkling Waters',
      'Gulmarg Gondola Cable Car Ride to Alpine Snow Peaks (Phase 1)',
      'Famous Mughal Gardens (Shalimar & Nishat Bagh) Exploration',
      'Pahalgam "Valley of Shepherds", Saffron Fields & Avantipur Ruins',
      'Delhi City Stays with Free Time for Capital Shopping'
    ],
    inclusions: [
      'All transfers & Tours as per itinerary',
      '5 Night’s stay on Double/Triple sharing in Dlx Houseboat/Hotels as listed (Breakfast & Dinner)',
      'Gondola Cable Car Ride upto Phase 1 (Sub to Operation)',
      'Shikara Boat Ride',
      'Visa fees'
    ],
    exclusions: [
      'Airfares',
      'Meals other than specified above',
      'Guide Services',
      'Mineral Water/drinks',
      'Tips to Drivers etc',
      'Local Vehicle at Pahalgam',
      'Travel Insurance or any other expenses/Items NOT specified above as included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Srinagar (Dinner)',
        description: 'Arrive Srinagar (Kashmir by your connecting flight). Met on arrival and transfer to Deluxe Houseboats. Afternoon visit the famous Mughal Gardens (Shalimar & Nishat Gardens). Dinner & Overnight at Houseboat.'
      },
      {
        day: 2,
        title: 'Srinagar – Gulmarg – Srinagar (Breakfast / Dinner)',
        description: 'AM drive 2 hrs to Gulmarg, one of the most beautiful Hill Resorts of Kashmir Valley. It’s also a popular Golf Course (during summers), and a Skiing Resort during the Winter Season (Dec to March/April months). Enjoy a Gondola Cable Car Ride upto Phase 1 (Sub to operation). Return to Srinagar & enjoy a Romantic Shikara Boat Ride on the Lake. Overnight Houseboat.'
      },
      {
        day: 3,
        title: 'Srinagar – Pahalgam (Breakfast / Dinner) (> 2.5-3 hrs drive)',
        description: 'AM drive to Pahalgam (Valley of shepherds). On the way visit Saffron fields, Avantipur Ruins & Anantnag Sulphur Spring. Check-into your hotel. Here you may hire Pony\'s or Local Jeeps at Own Costs to visit Betab and Aru Valley (Srinagar vehicles not allowed for Local use).'
      },
      {
        day: 4,
        title: 'Pahalgam – Srinagar (Breakfast / Dinner) (> 2.5-3 hrs drive)',
        description: 'Morning free to relax & enjoy the beauty. Check-out & drive back to Srinagar & check-into your hotel. Rest of the day free to enjoy your last minute shopping in the local markets. Dinner & Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Srinagar – Delhi (Breakfast) by Flight',
        description: 'Morning after Breakfast, transfer in time to airport for your flight to Delhi. Met and transfer to hotel. Rest of the day free for shopping etc on your own. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Delhi – Departure (Breakfast)',
        description: 'Breakfast at Hotel. Check-out at 12 Noon. In time transfer to airport for your return flight.'
      }
    ],
    category: 'india-kashmir'
  },
  {
    id: 'india-delhi-agra-4d3n',
    name: 'DELHI + AGRA (4D 3N)',
    country: 'India',
    tagline: 'World-Famous Taj Mahal, Massive Agra Fort, Qutab Tower & Historic Delhi City Landmarks',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 92000,
    hasTiers: true,
    tier3StarLKR: 92000,
    tier4StarLKR: 102000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-delhi-agra-4d3n.jpg',
    rating: 4.88,
    reviewsCount: 165,
    badge: 'Wonder of the World',
    highlights: [
      'Morning Visit to World-Famous Taj Mahal built by Emperor Shahjehan',
      'Massive UNESCO World Heritage Agra Fort Exploration',
      'Qutab Tower — One of the World\'s Most Perfect Towers',
      'National War Memorial & Iconic India Gate Monument',
      'Drive past Presidential Palace, Parliament House, Jama Mosque & Red Fort',
      'Private Air-Conditioned Vehicle with Chauffeur & English Guide'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '3 Night’s accommodation on twin/double sharing basis at hotels',
      'Breakfast at the hotels',
      'Local English Speaking Guides during sightseeing',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Delhi & Drive to Agra (5 hrs drive)',
        description: 'Arrive Delhi by flight, Met & straight drive 5 hours to Agra (Hotel\'s Check-in time 1400 hrs). Overnight stay at Agra.'
      },
      {
        day: 2,
        title: 'Agra – Delhi (Taj Mahal, Agra Fort & Qutab Tower)',
        description: 'Morning visit world famous TAJ MAHAL, built by Mughal Emperor Shahjehan in memory of his queen Mumtaz Mahal to enshrine her mortal remains. Also visit Massive Agra Fort. Arrive Delhi & Visit Qutab Tower, one of the most perfect towers in the world. Afternoon leave to Delhi. Overnight stay at Delhi.'
      },
      {
        day: 3,
        title: 'Delhi City Tour & Shopping',
        description: 'Morning visit National War Memorial & India Gate, drive past Embassy areas, Govt. buildings, President & Parliament Houses, Jama Mosque & Red Fort. Evening free for shopping. Overnight stay at Delhi.'
      },
      {
        day: 4,
        title: 'Delhi – Departure',
        description: 'Breakfast at Hotel (Check-Out time 12 Noon). Transfer to Airport for departure.'
      }
    ],
    category: 'india-golden-triangle'
  },
  {
    id: 'india-golden-triangle-5d4n',
    name: 'GOLDEN TRIANGLE (5D 4N)',
    country: 'India',
    tagline: 'Delhi, Agra & Jaipur: Taj Mahal, Amber Fort, Hawa Mahal, Jantar Mantar Observatory & Qutab Tower',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 130000,
    hasTiers: true,
    tier3StarLKR: 130000,
    tier4StarLKR: 143500,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-golden-triangle-5d4n.jpg',
    rating: 4.96,
    reviewsCount: 194,
    badge: 'Classic Heritage Circuit',
    highlights: [
      'The "Pink City" Jaipur: Hawa Mahal Photo Stop & Ancient Hindu Temple',
      'Amber Fort with Views of Sheesh Mahal, Dewan-e-Khas & Dewan-e-Aam',
      'Picturesque Jal Mahal & 18th Century Astronomical Observatory (Jantar Mantar)',
      'World-Famous Taj Mahal & Massive Agra Fort (Mughal Heritage)',
      'Delhi Highlights: Qutab Tower, India Gate, War Memorial, Jama Mosque & Red Fort',
      'Private Air-Conditioned Vehicle, English-Speaking Guides & Visa Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '4 Night’s accommodation on twin/double sharing basis at hotels',
      'Breakfast at the hotels',
      'Local English Speaking Guides during sightseeing',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Delhi – Jaipur',
        description: 'Arrival at Airport. Drive to Jaipur. Transfer to hotel & check in. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Jaipur Sightseeing (Hawa Mahal, Amber Fort & Observatory)',
        description: 'Breakfast at hotel. Visit Hawa Mahal (Photo stop). Visit Meena Panna Ka Kund & Ancient Hindu Temple. Visit Amber Fort (View of Sheesh Mahal, Dewan-e-Khas & Dewan-e-Aam). View the Jal Mahal & proceed to city to view the Observatory (built in 18th century by Jai Singh). Check-in at hotel & overnight at hotel.'
      },
      {
        day: 3,
        title: 'Jaipur – Agra (4 hrs drive) (Taj Mahal & Agra Fort)',
        description: 'Breakfast at hotel. Drive to Agra. Visit famous Taj Mahal (Friday closed) - Taj Mahal is built by Mughal Emperor Shahjahan in memory of his queen Mumtaz Mahal to enshrine her mortal remains. Visit Agra Fort. Check-in at hotel & overnight at hotel.'
      },
      {
        day: 4,
        title: 'Agra – Delhi (4 hrs drive) (Qutab Tower & India Gate)',
        description: 'Breakfast at hotel. Drive to Delhi. Visit Qutab Tower (one of the most perfect towers in the world). Visit National War Memorial & India Gate. Drive Past Embassy areas, Govt. buildings, President & Parliament Houses, Jama Mosque & Red Fort. Check-in at hotel & overnight at hotel.'
      },
      {
        day: 5,
        title: 'Delhi – Departure',
        description: 'Breakfast at hotel. Free to enjoy shopping. Transfer to Airport for return flight.'
      }
    ],
    category: 'india-golden-triangle'
  },
  {
    id: 'india-kerala-4d3n',
    name: 'EXCITING KERALA (4D 3N)',
    country: 'India',
    tagline: 'Cochin Heritage City, Alleppey Private A/C Houseboat Backwaters Cruise & Historic Colonial Fort Kochi',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 115000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-kerala-5d4n.jpg',
    rating: 4.92,
    reviewsCount: 148,
    badge: 'Serene Backwaters',
    highlights: [
      'Private A/C Bedroom Houseboat Cruise across Emerald Palm-Fringed Alleppey Backwaters',
      'Full Board Traditional Meals on Board the Houseboat (Lunch & Dinner)',
      'Historic Cochin: St. Francis Church & 1568 Jewish Synagogue in Jew Town',
      '1555 Portuguese Mattancherry Dutch Palace & Museum',
      'Iconic Giant Chinese Fishing Nets Silhouetted against the Cochin Sunset',
      'All Private Air-Conditioned Vehicle Transfers with Chauffeur & English Guide',
      'Indian Tourist Visa Fees Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '2 Night’s accommodation on twin/double sharing basis at hotels',
      '1 Night stay in a Private A/C Bedroom Houseboat with cruise on the backwaters',
      'Meals as per program (3B, 1L & 1D)',
      'Local English Speaking Guides during city tour only, including entry fees',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Cochin',
        description: 'Arrival at Airport. Transfer to hotel & check in. Relax and unwind after your journey. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Cochin – Backwaters Houseboat (2 hrs drive) (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. Morning transfer to Alleppey to board your Private A/C Bedroom Houseboat (A/C Operates in Bedroom at Night from 9 PM to 6 AM) for a cruise on the Backwaters. The complex network of lagoons, lakes, rivers and canals fringing the coast of Kerala forms the basis of a distinct regional lifestyle. After Lunch Enjoy a cruise on the emerald palm fringed backwaters of Kerala. Dinner & overnight on board your Houseboat.'
      },
      {
        day: 3,
        title: 'Backwaters Houseboat – Cochin (2 hrs drive) (Breakfast)',
        description: 'Breakfast at hotel. Enjoy a short cruise. Transfer to Cochin & Visit St. Francis Church (the oldest European built church in India). Walk around Jew Street & visit Jewish Synagogue (Closed on Fri/Sat, built in 1568 AD, the oldest in the commonwealth, adorned by hundreds of blue and white hand-painted tiles). Visit 1555 Portuguese built Mattancherry Palace (gifted to Maharaja of Kochi, now a museum). Continue to giant Chinese Fishing nets at the harbor’s entrance that silhouetted against sunset, present a magnificent sight of the water-front. Check-in at hotel & overnight at hotel.'
      },
      {
        day: 4,
        title: 'Cochin – Departure (Breakfast)',
        description: 'Breakfast at hotel. Transfer to Airport in time for your return flight.'
      }
    ],
    category: 'india-kerala'
  },
  {
    id: 'india-kerala-5d4n',
    name: 'KERALA HIGHLIGHTS (5D 4N)',
    country: 'India',
    tagline: 'Cochin Heritage, Alleppey Private Houseboat Backwaters Cruise & Munnar Misty Tea Plantations',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 150000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/india-kerala-5d4n.jpg',
    rating: 4.94,
    reviewsCount: 162,
    badge: 'God\'s Own Country',
    highlights: [
      'Private A/C Bedroom Houseboat Cruise across Emerald Palm-Fringed Backwaters',
      'Full Board Dining Experience on Board the Alleppey Houseboat (Lunch & Dinner)',
      'Munnar Misty Hill Station, Mattupetty Dam Reservoir & Sprawling Tea Estates',
      'Cochin Historic St. Francis Church & 1568 Jewish Synagogue Hand-Painted Tiles',
      '1555 Portuguese Mattancherry Palace & Giant Chinese Fishing Nets Sunset',
      'English-Speaking City Guide with Entry Fees & Visa Fees Included'
    ],
    inclusions: [
      'All transfers, tour & intercity drives by Private Aircon Vehicle with driver',
      '3 Night’s accommodation on twin/double sharing basis at hotels',
      '1 Night stay in a Private A/C Bedroom Houseboat with cruise on the backwaters',
      'Meals as per program (4B, 1L & 1D)',
      'Local English-Speaking Guide in Cochin/Munnar during City tour only including entry fees',
      'Visa fees'
    ],
    exclusions: [
      'Personal expenses or any other items not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Cochin',
        description: 'Arrival at Airport. Transfer to hotel & check in. Transfer to Cochin & Visit St. Francis Church (the oldest European built church in India). Walk around Jew Street & visit Jewish Synagogue (Closed on Fri/Sat, built in 1568 AD, the oldest in the commonwealth, adorned by hundreds of blue and white hand-painted tiles). Visit 1555 Portuguese built Mattancherry Palace (gifted to Maharaja of Kochi, now a museum). Continue to giant Chinese Fishing nets at the harbor’s entrance silhouetted against sunset. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Cochin – Backwaters Houseboat (2 hrs drive) (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. Morning transfer to Alleppey to board your Private A/C Bedroom Houseboat (A/C operates in bedroom at night from 9 PM to 6 AM) for a cruise on the Backwaters. The complex network of lagoons, lakes, rivers and canals forms a distinct regional lifestyle. After Lunch enjoy a cruise on emerald palm-fringed backwaters. Dinner & overnight on board your Houseboat.'
      },
      {
        day: 3,
        title: 'Backwaters Houseboat – Munnar (6 hrs drive) (Breakfast)',
        description: 'Breakfast at Houseboat. Enjoy a short cruise & checkout. Drive to Hill station of Munnar — responsible for a good portion of South India\'s tea production. It\'s a nature lover\'s paradise with winding lanes and heady fragrance of fresh tea. Check-in at hotel. Evening, you may visit Munnar Town. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Munnar – Cochin (4 hrs drive) (Breakfast)',
        description: 'Breakfast at hotel. Explore Mattupetty Dam & Reservoir (Optional Boat Ride at own cost), Tea museum, View Point, Munnar Town & drive around Tea plantations. Afternoon Transfer to Cochin. Check-in at hotel. Evening time for shopping. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Cochin – Departure (4 hrs drive) (Breakfast)',
        description: 'Breakfast at hotel. Transfer to Airport for your departure flight.'
      }
    ],
    category: 'india-kerala'
  },

  // ==========================================
  // EUROPE ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'europe-marvels-12d11n',
    name: 'EUROPEAN MARVELS (12D 11N)',
    country: 'Europe',
    tagline: 'London Double Decker & Thames, Paris Eiffel Tower & Disneyland, Swiss Alps Titlis & Jungfraujoch, Pisa & Rome',
    nights: 11,
    days: 12,
    showPrice: false,
    formattedPriceString: 'EUR 2,050',
    basePriceLKR: 685000,
    minPax: 2,
    image: '/images/europe-marvels-12d11n.jpg',
    rating: 5.0,
    reviewsCount: 189,
    badge: 'Ultimate Grand Tour',
    highlights: [
      'London Double Decker Hop-On Hop-Off, River Thames Cruise & Buckingham Palace Guard Change',
      'High-Speed Eurostar Train from London to Paris with Reserved Seats',
      'Paris Eiffel Tower 2nd Level, Seine River Cruise & Full Day at Disneyland® Paris',
      'Scenic Rail Journey through France into Alpine Lucerne, Switzerland',
      'Mount Titlis: Rotair Rotating Cable Car to 10,000 ft, Glacier Ice Grotto & Ice Flyer',
      'Jungfraujoch "Top of Europe": Cogwheel Train to Europe\'s Highest Railway Station & Ice Palace',
      'Florence & Tuscany Countryside Excursion to the Famous Leaning Tower of Pisa',
      'The Eternal City Rome: Hop-on Hop-off Bus, Colosseum, Trevi Fountain & Pantheon',
      '11 Buffet Breakfasts, High-Speed Trains & All Private Hotel Station Transfers'
    ],
    inclusions: [
      '3 nights’ accommodation in a 3*** hotel in London',
      '2 nights’ accommodation in a 3*** hotel in Paris',
      '3 nights’ accommodation in a 3*** hotel in Lucerne',
      '1 nights’ accommodation in a 3*** hotel in Florence',
      '2 nights’ accommodation in a 3*** hotel in Rome',
      '11 buffet breakfasts - Hop on Hop off London Sightseeing Tour',
      'Tickets on Eurostar to Paris, with seat reservations',
      'Hop-on/hop-off sightseeing tour of Paris',
      'Visit to the second level of the Eiffel Tower',
      'Cruise on the River Seine in Paris',
      'Return Transfers to Disneyland including 1 day 1 park ticket on SIC',
      'Train tickets from Paris to Lucerne',
      'Private Transfer from Lucerne Station to hotel',
      'Mount Titlis Trip from Lucerne on SIC basis',
      'Jungfraujoch top of Europe trip from Lucerne on SIC basis',
      'Train tickets from Lucerne– Florence',
      'Private Transfer from Florence Station to hotel',
      'Pisa and leaning tower trip from Florence',
      'Train tickets from Florence - Rome',
      'Private Transfer from Rome Station to hotel',
      'Hop on Hop off Rome Sightseeing Tour',
      'Arrival transfer from Heathrow Airport to your London hotel',
      'Departure transfer from your hotel to Rome Airport'
    ],
    exclusions: [
      'Air Fare',
      'Visa',
      'Anything not mention in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in London + Thames River Cruise & City Sights',
        description: 'Upon arrival in London, meet your car at the airport and transfer to the hotel and check in. Begin your discovery of London with a city Hop on Hop off tour conducted on the original London Double Decker bus. Sights include Change of Guards at Buckingham Palace, Houses of Parliament, Westminster Abbey, Big Ben, London Eye, Downing Street, St. Pauls Cathedral, Tower of London, Trafalgar Square and Piccadilly Circus. Includes free walks and River Thames Cruise. In the evening, explore Leicester Square. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'London (Optional Windsor Castle, Stonehenge & Bath)',
        description: 'Post breakfast option of selecting tour to Windsor Castle (home of the Royal Family for 900 years, lavishly decorated State Apartments and St. George\'s Chapel), mysterious prehistoric Stonehenge (5,000 years old), and Georgian Bath with preserved ancient Roman Baths and Pump Rooms. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'London (Optional Oxford, Cotswolds, Stratford-upon-Avon & Warwick Castle)',
        description: 'Option to visit Oxford (Christ Church College and Hogwarts dining hall Harry Potter film locations), drive through Cotswolds scenic villages with thatched cottages, visit Stratford-upon-Avon (birthplace of William Shakespeare), and 1,000-year-old medieval Warwick Castle. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'London to Paris via Eurostar + Eiffel Tower Visit',
        description: 'Early morning private car to St Pancras Station. Board the Eurostar arriving into Paris in just 2 hours and 15 minutes. Met at Paris Gare du Nord and transferred to hotel. Afternoon Hop on Hop Off bus: Champs-Élysées, Arc de Triomphe, Place de la Concorde, and Eiffel Tower second level with panoramic city views. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Magical Disneyland® Paris Full Day Experience',
        description: 'After breakfast discover Disneyland® Paris with return transfers and 1-day park ticket included. Enjoy a beautiful day in a magical kingdom with fairytale attractions, Disney characters, and thrilling rides. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Paris to Lucerne (Switzerland) by Scenic Train',
        description: 'Morning board the train and travel across France taking in breathtaking scenery to Switzerland. Early evening arrival in picturesque Lucerne. Overnight at hotel.'
      },
      {
        day: 7,
        title: 'Full Day Excursion to Mount Titlis (Rotair Rotating Cable Car)',
        description: 'Travel over Albis Pass and shores of Lake Lucerne with city orientation (Lion Monument, Chapel Bridge). Continue to Engelberg and board Rotair, the revolving cable car ascending 10,000 feet (3,020 meters) for panoramic views of alpine glaciers. Visit the Ice Grotto, ride the Ice Flyer and Fun Lift. Evening option for a boat trip on Lake Lucerne. Overnight at hotel.'
      },
      {
        day: 8,
        title: 'Jungfraujoch Excursion – "Top of Europe"',
        description: 'Experience the Swiss Alps by taking the cogwheel train to Europe\'s highest railway station Jungfraujoch. Scenic coach through Bernese Oberland to Lauterbrunnen, cogwheel train via Kleine Scheidegg at the foot of the Eiger North Face. Visit the Ice Palace and ice sculptures. Return via Grindelwald to Lucerne. Overnight at hotel.'
      },
      {
        day: 9,
        title: 'Lucerne to Florence (Italy)',
        description: 'Leave Switzerland and board the train towards historical Italy, arriving in Renaissance Florence in the evening. Overnight at hotel.'
      },
      {
        day: 10,
        title: 'Florence – Pisa Leaning Tower – Rome',
        description: 'After breakfast visit the famous Renaissance city of Pisa. Panoramic drive through Tuscan countryside along River Arno. Guided visit of Piazza dei Miracoli, famous Leaning Tower of Pisa (exterior), baptistery and cathedral. Afternoon scenic train to the majestic capital Rome. Overnight at hotel.'
      },
      {
        day: 11,
        title: 'Rome "The Eternal City" Discovery Tour',
        description: 'Hop-on hop-off bus through the heart of Rome: Trevi Fountain, Colosseum, Pantheon, Michelangelo\'s Piazza del Campidoglio, Vatican City Swiss Guards, Spanish Steps, and charming Trastevere trattorias. Overnight at hotel.'
      },
      {
        day: 12,
        title: 'Rome – Departure',
        description: 'After breakfast say goodbye to Rome and take your private transfer to the airport for your onward flight.'
      }
    ],
    category: 'europe-marvels'
  },
  {
    id: 'paris-italy-12d11n',
    name: 'PARIS, MILAN, VENICE, FLORENCE & ROME (12D 11N)',
    country: 'Europe',
    tagline: 'Louvre & Eiffel Tower, Lake Como & Bellagio, Venice Gondola & Islands, Florence & Pisa, Colosseum & Vatican',
    nights: 11,
    days: 12,
    showPrice: false,
    formattedPriceString: 'EUR 1,900',
    basePriceLKR: 635000,
    minPax: 4,
    travelDates: '17-Apr – 28-Apr (Twin/DBL Sharing)',
    image: '/images/paris-italy-12d11n.jpg',
    rating: 4.95,
    reviewsCount: 164,
    badge: 'Paris & Italy Highlights',
    highlights: [
      'Louvre Museum Entrance with Audio Guide & Official Timed Tickets',
      'Panoramic Paris City Tour, Seine River Cruise & Eiffel Tower 2nd Level Access',
      'Direct High-Speed Train through the Alps from Paris Gare de Lyon to Milan Centrale',
      'Milan Walking Tour & Full-Day Excursion to Lake Como & Bellagio with Scenic Lake Cruise',
      'Exclusive Venice Gondola 30-Minute Charter Ride & Murano-Burano Islands with Glass Factory',
      'Best of Florence Guided Walking Tour & Half-Day Tuscan Excursion to Pisa & the Leaning Tower',
      'Rome 48-Hour Hop-On Hop-Off Panoramic Bus, Ancient Colosseum & Roman Forum Tickets',
      'Vatican Museums & Michelangelo\'s Sistine Chapel Official Timed Entrance Tickets',
      '11 Nights Hotel Accommodation with Daily Breakfasts & Private Airport/Station Transfers'
    ],
    inclusions: [
      '2 nights accommodation in Paris at ibis Styles Paris Gare Saint-Lazare or similar with Breakfast (17-19 Apr)',
      '2 nights accommodation in Milan at UNAHOTELS Galles Milano or similar with Breakfast (19-21 Apr)',
      '2 nights accommodation in Venice at Il Mercante di Venezia or similar with Breakfast (21-23 Apr)',
      '2 nights accommodation in Florence at Hotel Palazzo Ognissanti or similar with Breakfast (23-25 Apr)',
      '3 nights accommodation in Rome at Osimar Hotel or similar with Breakfast (25-28 Apr)',
      'Daily breakfast at all hotels (11 Buffet Breakfasts)',
      'Louvre Museum Official Entrance Ticket with Audio Guide (Time slot ticket, official tickets)',
      'Paris City Tour, Seine River Cruise & Eiffel Tower 2nd Floor Access (5-hour evening tour)',
      'Milan Guided Walking Tour (2 Hours)',
      'Best of Lake Como and Bellagio Full-Day Tour from Milan with scenic Cruise on Lake Como (10-11 Hours)',
      'Venice: Exclusive Venice Gondola Charter Ride 30 Minutes (up to 5 persons maximum)',
      'Venice: Murano and Burano Island Boat Tour with Murano Glass Factory Visit (4.5 Hours)',
      'Florence: Best of Florence Walking Tour (90 Minutes Duration)',
      'From Florence: Half-Day Tour of Pisa & Square of Miracles (5 Hours Approx)',
      'Rome: 48 hours Hop-On Hop-Off Sightseeing Bus Tour pass',
      'Rome: Official Colosseum & Roman Forum Entrance Ticket',
      'Rome: Vatican Museums & Sistine Chapel Official Timed Entrance Ticket',
      '2nd Class Train Ticket: Paris Gare de Lyon to Milan Centrale (07:30 - 14:07, direct 6h 37m)',
      '2nd Class Train Ticket: Milan Centrale to Venice S. Lucia (09:35 - 12:03, direct 2h 28m)',
      '2nd Class Train Ticket: Venice S. Lucia to Florence S.M.N. (09:26 - 11:39, direct 2h 13m)',
      '2nd Class Train Ticket: Florence S.M.N. to Rome Termini (08:33 - 10:15, direct 1h 42m)',
      'Private Transfer: Paris Airport to Paris Hotel (Baggage: 1 Medium Bag + 1 Handbag per person)',
      'Private Transfer: Paris Hotel to Paris Train Station',
      'Private Transfer: Rome Train Station to Rome Hotel',
      'Private Transfer: Rome Hotel to Rome Airport'
    ],
    exclusions: [
      'International Airfare',
      'Schengen Tourist Visa Fees & Travel Insurance',
      'City Tax / Tourist Tax (To be paid directly by client at each hotel in EUR)',
      'Driver Tips & Guide Gratuities (To be paid by client)',
      'Entrance inside Pisa Cathedral & Leaning Tower (exterior view included; tower tickets not included)',
      'Transportation to and from sightseeing excursion meeting points (Sightseeing tours operate on SIC sharing basis; clients reach starting points independently)',
      'Personal expenses, lunches, dinners, beverages, and optional activities not mentioned in Inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paris + Private Airport Transfer (17-Apr, Fri)',
        description: 'Welcome to Paris, the romantic capital of France! Upon arrival at Paris Airport, meet your private transfer driver and transfer to ibis Styles Paris Gare Saint-Lazare (or similar). Check in and enjoy the rest of your evening at leisure exploring Paris\'s charming cafes, picturesque boulevards, and vibrant neighborhood bistros. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Louvre Museum + Paris City Tour, Seine Cruise & Eiffel Tower 2nd Level (18-Apr, Sat)',
        description: 'Breakfast at hotel. In the morning, make your way independently to the world-renowned Louvre Museum with your included official timed entrance ticket and audio guide. Admire timeless treasures including the Mona Lisa, Venus de Milo, and the Great Sphinx of Tanis. At 17:15 hrs, arrive at the starting point (Place de Sydney, 75015 Paris) for an unforgettable 5-hour guided experience: a panoramic Paris City Tour with audio commentary, an enchanting Seine River Cruise passing Notre-Dame and historic bridges, followed by priority access to the 2nd Level of the Eiffel Tower for breathtaking sunset views over the City of Light. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'High-Speed Train Paris to Milan + Milan Walking Tour (19-Apr, Sun)',
        description: 'Breakfast at hotel. Check out and meet your private transfer from hotel to Paris Gare de Lyon. Board the direct 2nd class high-speed train departing Paris at 07:30 hrs, gliding through the scenic French countryside and Alpine mountain landscapes into Italy, arriving at Milan Centrale at 14:07 hrs (6h 37m). Check in at UNAHOTELS Galles Milano (or similar). At 17:00 hrs, join the 2-hour guided Milan Walking Tour discovering Italy\'s fashion and design capital, including the iconic Duomo di Milano, the grand Galleria Vittorio Emanuele II, and Piazza della Scala. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Best of Lake Como & Bellagio Full-Day Tour with Lake Cruise (20-Apr, Mon)',
        description: 'Breakfast at hotel. At 08:00 hrs, gather at Piazza IV Novembre for an incredible 10 to 11-hour full-day excursion to Lake Como, celebrated for its dramatic Alpine scenery and glamorous lakeside villas. Embark on a scenic boat cruise across the shimmering waters of Lake Como, and explore the enchanting cobblestone streets, boutique artisan shops, and lush gardens of Bellagio ("The Pearl of the Lake"). Return to Milan in the evening. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'High-Speed Train Milan to Venice + Romantic Gondola Charter Ride (21-Apr, Tue)',
        description: 'Breakfast at hotel. Check out and board the direct high-speed 2nd class train from Milan Centrale at 09:35 hrs, arriving at Venice Santa Lucia station along the Grand Canal at 12:03 hrs (2h 28m). Check in at Il Mercante di Venezia (or similar). Later in the afternoon (scheduled at 2:00 PM, 4:00 PM or 5:30 PM), meet at San Marco Square for an exclusive 30-minute Venice Gondola Charter Ride (up to 5 persons maximum), gliding peacefully along serene Venetian canals and historic palazzos. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Venice: Murano & Burano Islands Boat Tour with Glass Factory (22-Apr, Wed)',
        description: 'Breakfast at hotel. At 10:45 hrs, meet at Riva degli Schiavoni for a delightful 4.5-hour boat excursion across the Venetian Lagoon. Cruise first to the island of Murano, famous worldwide for centuries-old glassblowing, where you will witness an authentic glass-master demonstration in a historic factory. Next, cruise to picturesque Burano, renowned for colorful pastel fishermen\'s cottages and intricate lace-making traditions. Free time to explore, sample Venetian seafood, and take iconic photos before cruising back. Overnight at hotel.'
      },
      {
        day: 7,
        title: 'High-Speed Train Venice to Florence + Best of Florence Walking Tour (23-Apr, Thu)',
        description: 'Breakfast at hotel. Check out and board the direct 2nd class train from Venice Santa Lucia at 09:26 hrs to Florence Santa Maria Novella, arriving at 11:39 hrs (2h 13m). Check in at Hotel Palazzo Ognissanti (or similar). At 16:00 hrs (4:00 PM), meet at Via Camillo for a 90-minute Best of Florence Guided Walking Tour. Experience the cradle of the Renaissance as your expert guide brings to life the magnificent Florence Duomo (Santa Maria del Fiore), Giotto\'s Bell Tower, Piazza della Signoria, open-air sculptures, and the famous Ponte Vecchio spanning the River Arno. Overnight at hotel.'
      },
      {
        day: 8,
        title: 'Half-Day Excursion from Florence to Pisa & Leaning Tower (24-Apr, Fri)',
        description: 'Breakfast at hotel. At 08:00 hrs, report to Montelungo Bus Terminal for a scenic 5-hour excursion through the rolling hills and vineyards of Tuscany to Pisa. Arrive at the UNESCO World Heritage Piazza dei Miracoli (Field of Miracles) to marvel at the world-famous Leaning Tower of Pisa, the marble Baptistery, and the Cathedral exterior. Enjoy free time for memorable photographs and souvenirs before returning by coach to Florence for an afternoon at leisure. Overnight at hotel.'
      },
      {
        day: 9,
        title: 'High-Speed Train Florence to Rome + Private Station Transfer (25-Apr, Sat)',
        description: 'Breakfast at hotel. Check out and take the high-speed 2nd class train departing Florence S.M.N. at 08:33 hrs, arriving into the Eternal City at Rome Termini at 10:15 hrs (1h 42m). Meet your private transfer driver at the station and transfer comfortably to Osimar Hotel (or similar). Check in and spend your afternoon immersing yourself in ancient Rome—toss a lucky coin into the Trevi Fountain, marvel at the Pantheon, and relax at the Spanish Steps. Overnight at hotel.'
      },
      {
        day: 10,
        title: 'Rome 48-Hour Hop-On Hop-Off Bus + Ancient Colosseum & Roman Forum (26-Apr, Sun)',
        description: 'Breakfast at hotel. Begin your comprehensive Roman adventure with an included 48-hour Hop-On Hop-Off panoramic sightseeing bus pass. Head to ancient Rome with your official Colosseum & Roman Forum Entrance Ticket. Walk through the monumental arena where gladiators once fought, ascend the Palatine Hill overlooking the Circus Maximus, and wander the Roman Forum amidst the ruins of temples and basilicas that shaped western civilization. Continue exploring Rome\'s legendary piazzas at your own pace. Overnight at hotel.'
      },
      {
        day: 11,
        title: 'Vatican Museums, Sistine Chapel & Hop-On Hop-Off Rome (27-Apr, Mon)',
        description: 'Breakfast at hotel. Head to the Vatican for your official reserved entry ticket to the world-renowned Vatican Museums and Sistine Chapel (Note: Vatican Museums are closed on Sundays, perfectly scheduled for Monday). Walk through the Hall of Tapestries, Gallery of Maps, and Raphael\'s Rooms, culminating in Michelangelo\'s breathtaking frescoes on the ceiling of the Sistine Chapel and The Last Judgment. Spend the rest of the day hopping on and off your tour bus to visit Castel Sant\'Angelo, Piazza Navona, and the charming Trastevere district. Overnight at hotel.'
      },
      {
        day: 12,
        title: 'Rome Departure + Private Airport Transfer (28-Apr, Tue)',
        description: 'Breakfast at hotel. Check out of Osimar Hotel. Meet your private transfer driver at the hotel lobby for a seamless private transfer to Rome Airport (Baggage: 1 medium bag + 1 handbag per person) for your flight back home. Tour concludes with cherished memories of an extraordinary 12-day journey across Paris, Milan, Lake Como, Venice, Florence, Pisa, Rome, and Vatican City. Tour Ends.'
      }
    ],
    category: 'europe-paris-italy'
  },

  // ==========================================
  // SINGAPORE ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'singapore-4d3n',
    name: 'SINGAPORE (4D 3N)',
    country: 'Singapore',
    tagline: 'Gardens by the Bay & Supertrees, Marina Bay Sands, Universal Studios & Guided City Tour',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 120000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/singapore-4d3n.jpg',
    rating: 4.95,
    reviewsCount: 172,
    badge: 'Garden City Fantasy',
    highlights: [
      'Gardens by the Bay: Flower Dome, Cloud Forest & Impression of Monet',
      'Iconic Marina Bay Sands & Waterfront Promenade Views',
      'Full-Day Adventure at Sentosa Universal Studios Singapore',
      'Comprehensive Guided Singapore City Tour',
      '3 Nights Accommodation at 3-Star Hotel with Daily Breakfast',
      'Private Airport Pickup, Drop-off & Daily Air-Conditioned Tours'
    ],
    inclusions: [
      '3 nights in a 3-star hotel in Singapore with breakfast',
      '3 breakfasts (hotel)',
      'Private airport pickup and drop-off',
      'Daily private tours in an air-conditioned vehicle',
      'Gardens by the Bay, Marina Bay Sands',
      'GBB (Flower Dome + Cloud Forest + IMPRESSION OF MONET)',
      'Universal Studios',
      'Guided Singapore City Tour'
    ],
    exclusions: [
      'Entry tickets for optional activities',
      'Personal expenses, tips, and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Gardens by the Bay + Marina Bay Sands',
        description: 'Arrival: Airport pickup and transfer to a 3-star hotel in Singapore. Visit Gardens by the Bay & Marina Bay Sands. Stay: Overnight at a 3-star hotel in Singapore.'
      },
      {
        day: 2,
        title: 'Guided Singapore City Tour',
        description: 'Morning: Breakfast at the hotel. Singapore City tour exploring top cultural, historical, and modern architectural sights. Stay: Overnight at a 3-star hotel in Singapore.'
      },
      {
        day: 3,
        title: 'Universal Studios Singapore',
        description: 'Morning: Breakfast at the hotel. Full day visiting Universal Studios on Sentosa Island with blockbuster rides, shows, and attractions. Stay: Overnight at a 3-star hotel in Singapore.'
      },
      {
        day: 4,
        title: 'Departure from Singapore',
        description: 'Breakfast at the hotel and leisure time until checkout. Private transfer to Singapore International Airport for departure.'
      }
    ],
    category: 'singapore-tours'
  },

  // ==========================================
  // MALAYSIA ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'malaysia-4d3n',
    name: 'MALAYSIA (4D 3N)',
    country: 'Malaysia',
    tagline: 'Kuala Lumpur City, Genting Highlands Awana Cable Car, Batu Caves & Sunway Lagoon Theme Park',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 98000,
    minPax: 2,
    travelDates: '01st Apr. 2026 – 31st Mar. 2027',
    image: '/images/malaysia-4d3n.jpg',
    rating: 4.9,
    reviewsCount: 164,
    badge: 'Theme Park Special',
    highlights: [
      'Half-Day Kuala Lumpur City Tour (Petronas Twin Towers & Merdeka Square)',
      'Full-Day Genting Highlands with 2-Way Awana SkyWay Cable Car Tickets',
      'Batu Caves, Ramayana Cave & Chin Swee Chinese Temple Visits',
      'Full-Day Thrills at Sunway Lagoon Water & Amusement Theme Park',
      '3 Nights at 3-Star Hotel in Kuala Lumpur with Daily Breakfast',
      'Private Airport Transfers, Ground Tours & Malaysian Visa Included'
    ],
    inclusions: [
      '3 nights in a 3-star hotel in Kuala Lumpur with breakfast',
      '3 breakfasts (hotel)',
      'Private airport pickup and drop-off',
      'Daily private tours in an air-conditioned vehicle',
      'Half-day Kuala Lumpur city tour',
      'Full-day Genting Highlands tour with Batu Caves stop and 2-way cable car tickets',
      'Sunway Lagoon',
      'Malaysian Visa'
    ],
    exclusions: [
      'Entry tickets for optional activities (Genting SkyWorlds Theme Park, Genting indoor & KL Tower)',
      'Personal expenses, tips, and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kuala Lumpur + KL City Tour',
        description: 'Arrival: Airport pickup and transfer to a 3-star hotel in Kuala Lumpur. KL City tour. Return to the hotel in the evening for leisure time. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 2,
        title: 'Full-Day Genting Highlands Tour + Ramayana Cave + Chin Swee Chinese Temple + Batu Caves',
        description: 'Morning: Breakfast at the hotel and transfer to Genting Highlands. Ramayana Cave + Chin Swee Chinese Temple + Batu Caves. Activities in Genting Highlands: Cable car ride (2-way tickets included). Explore Genting SkyWorlds Theme Park (optional entry), indoor attractions (optional entry), or shopping at SkyAvenue Mall. Evening return to Kuala Lumpur. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 3,
        title: 'Full-Day Sunway Lagoon',
        description: 'Sunway tour, pick up by 0930 hrs. Enjoy the rides at Sunway Lagoon. 18:00 – pick up from Sunway and drop of the hotel. Meals: Breakfast included. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 4,
        title: 'Departure from Kuala Lumpur',
        description: 'Breakfast at the hotel and leisure time until checkout. Private transfer to Kuala Lumpur International Airport for departure.'
      }
    ],
    category: 'malaysia-tours'
  },
  {
    id: 'malaysia-5d4n',
    name: 'MALAYSIA (5D 4N)',
    country: 'Malaysia',
    tagline: 'Extended 5-Day KL Holiday: Genting Cable Car, Batu Caves, Sunway Lagoon & KL Aquarium',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 110000,
    minPax: 2,
    travelDates: '01st Apr. 2026 – 31st Mar. 2027',
    image: '/images/malaysia-5d4n.jpg',
    rating: 4.94,
    reviewsCount: 185,
    badge: 'Family Favorite',
    highlights: [
      'Kuala Lumpur City Tour & Famous Landmarks',
      'Genting Highlands Tour with 2-Way SkyWay Cable Car Tickets',
      'Batu Caves, Ramayana Cave & Scenic Chin Swee Temple',
      'Full-Day Rides & Waves at Sunway Lagoon Theme Park',
      'Aquaria KLCC (KL Aquarium) Underwater Tunnel Experience',
      '4 Nights at 3-Star Hotel in KL with Breakfast & Malaysian Visa Included'
    ],
    inclusions: [
      '4 nights in a 3-star hotel in Kuala Lumpur with breakfast',
      '4 breakfasts (hotel)',
      'Private airport pickup and drop-off',
      'Daily private tours in an air-conditioned vehicle',
      'Half-day Kuala Lumpur city tour',
      'Full-day Genting Highlands tour with Batu Caves stop and 2-way cable car tickets',
      'Sunway Lagoon',
      'KL Aquarium',
      'Malaysian Visa'
    ],
    exclusions: [
      'Entry tickets for optional activities (Genting SkyWorlds Theme Park, Genting indoor & KL Tower)',
      'Personal expenses, tips, and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kuala Lumpur + KL City tour',
        description: 'Arrival: Airport pickup and transfer to a 3-star hotel in Kuala Lumpur. KL City tour. Return to the hotel in the evening for leisure time. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 2,
        title: 'Full-Day Genting Highlands Tour + Ramayana Cave + Chin Swee Chinese Temple + Batu Caves',
        description: 'Morning: Breakfast at the hotel and transfer to Genting Highlands. Ramayana Cave + Chin Swee Chinese Temple + Batu Caves. Activities in Genting Highlands: Cable car ride (2-way tickets included). Explore Genting SkyWorlds Theme Park (optional entry), indoor attractions (optional entry), or shopping at SkyAvenue Mall. Evening return to Kuala Lumpur. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 3,
        title: 'Full-Day Sunway Lagoon',
        description: 'Breakfast at the hotel. Sunway tour, pick up by 0930 hrs. Enjoy the rides at Sunway Lagoon. 1800 hrs. – pick up from Sunway and drop of the hotel. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 4,
        title: 'KL Aquarium (Aquaria KLCC)',
        description: 'Breakfast at the hotel. KL Aquarium. Explore transparent underwater tunnels, majestic sharks, rays, and thousands of marine species. Meals: Breakfast included. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 5,
        title: 'Departure from Kuala Lumpur',
        description: 'Meals: Breakfast included. Breakfast at the hotel and leisure time until checkout. Private transfer to Kuala Lumpur International Airport for departure.'
      }
    ],
    category: 'malaysia-tours'
  },

  // ==========================================
  // SINGAPORE & MALAYSIA COMBOS (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'singapore-malaysia-6d5n',
    name: 'SINGAPORE & MALAYSIA (6D 5N)',
    country: 'Singapore & Malaysia',
    tagline: 'Gardens by the Bay, Universal Studios Singapore, Genting Highlands Awana Cable Car & Sunway Lagoon',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 190000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar. 2027',
    image: '/images/singapore-4d3n.jpg',
    rating: 4.97,
    reviewsCount: 198,
    badge: 'Popular Combo',
    highlights: [
      'Gardens by the Bay (Flower Dome, Cloud Forest & Impression of Monet)',
      'Iconic Marina Bay Sands & Waterfront Promenade',
      'Full Day at Universal Studios Singapore Theme Park',
      'Comfortable Cross-Border Coach Journey to Kuala Lumpur',
      'Genting Highlands with 2-Way Cable Car, Ramayana Cave & Chin Swee Temple',
      'Full Day Thrills at Sunway Lagoon with 6 Parks Entrance',
      'Comprehensive KL City Tour with Chocolate Factory Visit & Malaysian Visa Included'
    ],
    inclusions: [
      '2 Nights at Hotel in SIN & 3 nights at Hotel in KUL',
      'Meal plan: BB (plus Genting lunch)',
      'Arrival & Departure transfers',
      'GBB (Flower dome + Cloud Forest + IMPRESSION OF MONET)',
      'MBS',
      'Universal studio Singapore',
      'SIN to KUL coach ticket / preferred coach time 11:00 to 11:30hrs',
      'KL City tour with Chocolate factory',
      'Genting tour with 2way cable car rides with local Guide + Ramayana Cave with entrance ticket (1 Hr) with local Guide + Chin Swee Chinese Temple',
      'Visit with local Guide',
      'Sunway Lagoon Park with 6 parks entrance',
      'All the taxes including Tourism Tax',
      '24hour assistance in English via Hotline',
      'All on SIC basis',
      'Malaysian Visa'
    ],
    exclusions: [
      'Entry tickets for optional activities',
      'Personal expenses, tips, and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Gardens by the Bay + Marina Bay Sands',
        description: 'Arrival: Airport pickup and transfer to a 3-star hotel in Singapore. Gardens by the Bay & Marina Bay Sands. Stay: Overnight at a 3-star hotel in Singapore.'
      },
      {
        day: 2,
        title: 'Universal Studios Singapore',
        description: 'Morning: Breakfast at the hotel. Full day visit to Universal Studios on Sentosa Island with movie-themed rides, shows, and attractions. Stay: Overnight at a 3-star hotel in Singapore.'
      },
      {
        day: 3,
        title: 'Singapore to Malaysia',
        description: 'Breakfast at the hotel. Coach transfer from Singapore to Malaysia (SIN to KUL preferred coach time 11:00 to 11:30 hrs). Arrival and check-in. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 4,
        title: 'Full-Day Genting Highlands Tour + Ramayana Cave + Chin Swee Temple + Batu Caves',
        description: 'Morning: Breakfast at the hotel and transfer to Genting Highlands. Ramayana Cave + Chin Swee Chinese Temple + Batu Caves. Activities in Genting Highlands: Cable car ride (2-way tickets included), explore Genting SkyWorlds Theme Park (optional entry), indoor attractions or shopping at SkyAvenue Mall. Lunch included. Evening return to Kuala Lumpur. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 5,
        title: 'Full-Day Sunway Lagoon',
        description: 'Breakfast at the hotel. Sunway tour, pick up by 09:30. Enjoy the rides at Sunway Lagoon with access to all 6 parks. 18:00 pick up from Sunway and drop off at the hotel. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 6,
        title: 'KL City tour + Departure',
        description: 'Breakfast at the hotel. KL City tour with Chocolate factory visit. Private transfer to Kuala Lumpur International Airport for departure.'
      }
    ],
    category: 'singapore-malaysia'
  },
  {
    id: 'singapore-malaysia-7d6n',
    name: 'SINGAPORE & MALAYSIA (7D 6N)',
    country: 'Singapore & Malaysia',
    tagline: 'Dual Country Grand Tour: Singapore City Tour, Universal Studios, Gardens by the Bay, Genting Highlands & Sunway Lagoon',
    nights: 6,
    days: 7,
    showPrice: false,
    basePriceLKR: 220000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/malaysia-4d3n.jpg',
    rating: 4.98,
    reviewsCount: 224,
    badge: 'Ultimate Dual Country',
    highlights: [
      '3 Nights in Singapore & 3 Nights in Kuala Lumpur at 3-Star Hotels',
      'Gardens by the Bay (Flower Dome + Cloud Forest + Impression of Monet)',
      'Guided Singapore City Tour & Marina Bay Sands',
      'Full Day at Universal Studios Singapore Theme Park',
      'Cross-Border Coach Transfer to Kuala Lumpur with City Tour & Chocolate Factory',
      'Sunway Lagoon Theme Park with Full 6-Parks Admission',
      'Full-Day Genting Highlands with 2-Way Cable Car, Ramayana Cave & Batu Caves',
      'Malaysian Tourist Visa & All Tourism Taxes Included'
    ],
    inclusions: [
      '3 Nights at 3 Star Hotel in SIN & 3 nights at 3 Star Hotel in KUL',
      'Breakfast at hotel',
      'Arrival & Departure transfers',
      'GBB (Flower dome + Cloud Forest + IMPRESSION OF MONET), MBS',
      'Universal studio Singapore',
      'Singapore City tour',
      'SIN to KUL coach ticket / preferred coach time 11:00 to 11:30hrs',
      'KL City tour with Chocolate factory',
      'Genting tour with 2way cable car rides with local Guide + Ramayana Cave with entrance ticket (1 Hr) with local Guide + Chin Swee Chinese Temple',
      'Visit with local Guide',
      'Sunway Lagoon Park with 6 parks entrance',
      'All the taxes including Tourism Tax',
      '24hour assistance in English via Hotline',
      'All on SIC basis',
      'Malaysian Visa'
    ],
    exclusions: [
      'Entry tickets for optional activities',
      'Personal expenses, tips, and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Gardens by the Bay + Marina Bay Sands',
        description: 'Arrival: Airport pickup and transfer to a 3-star hotel in Singapore. Visit Gardens by the Bay & Marina Bay Sands. Overnight stay at a 3-star hotel in Singapore.'
      },
      {
        day: 2,
        title: 'Guided Singapore City Tour',
        description: 'Breakfast at hotel. Singapore City Tour covering Merlion Park, Padang, and iconic heritage and cultural districts. Overnight stay at a 3-star hotel in Singapore.'
      },
      {
        day: 3,
        title: 'Universal Studios Singapore',
        description: 'Breakfast at the hotel. Full day visiting Universal Studios on Sentosa Island. Overnight stay at a 3-star hotel in Singapore.'
      },
      {
        day: 4,
        title: 'Singapore to Kuala Lumpur + KL City Tour',
        description: 'Breakfast at hotel. Departure transfer to SIN coach station. Coach transfer from Singapore to Malaysia. Arrival transfer to KUL hotel + KL City tour with Chocolate factory. Overnight stay at 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 5,
        title: 'Full-Day Sunway Lagoon',
        description: 'Breakfast at the hotel. Sunway tour, pick up by 09:30. Enjoy the rides at Sunway Lagoon with access to all 6 parks. 18:00 pick up from Sunway and drop off at hotel. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 6,
        title: 'Full-Day Genting Highlands Tour + Ramayana Cave + Chin Swee Temple + Batu Caves',
        description: 'Morning: Breakfast at the hotel and transfer to Genting Highlands. Ramayana Cave + Chin Swee Chinese Temple + Batu Caves. Activities: 2-way cable car ride, explore Genting SkyWorlds Theme Park (optional entry), indoor attractions or shopping at SkyAvenue Mall. Stay: Overnight at a 3-star hotel in Kuala Lumpur.'
      },
      {
        day: 7,
        title: 'Departure from Kuala Lumpur',
        description: 'Breakfast at hotel. Leisure time until checkout. Private transfer to Kuala Lumpur International Airport for departure.'
      }
    ],
    category: 'singapore-malaysia'
  },

  // ==========================================
  // DUBAI ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'dubai-4d3n',
    name: 'DUBAI (4D 3N)',
    country: 'Dubai',
    tagline: 'Dubai Marina Dinner Cruise, Burj Khalifa 124th Floor & 4x4 Desert Safari with BBQ Dinner',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 128000,
    minPax: 6,
    travelDates: 'Month of December (Winter Season 2026/2027)',
    image: '/images/dubai-4d3n.jpg',
    rating: 4.92,
    reviewsCount: 154,
    badge: 'Luxury Desert Oasis',
    highlights: [
      'Dubai Marina Evening Dhow Cruise with International Buffet Dinner',
      'Burj Khalifa 124th Floor Observation Deck Tickets Included',
      'Dubai Guided Half-Day City Tour of Ultra-Modern & Heritage Landmarks',
      '4x4 Desert Safari: Dune Bashing, Sand Boarding & Camel Rides',
      'BBQ Dinner in the Dunes with Tanoura, Fire & Belly Dance Shows',
      '3 Nights at Wescott Hotel Bur Dubai with Airport Transfers & Tourism Dirham Fees'
    ],
    inclusions: [
      'Stay with Breakfast for 3 Nights in Wescott Hotel Bur Dubai or similar',
      'Airport Transfers on Private Basis',
      'Tourism Dirham Fees',
      'Marina Cruise with Dinner on Sharing basis',
      'Dubai Half Day Guided City Tour on Sharing basis',
      'Desert Safari with BBQ Dinner and shows on Land Cruiser sharing Basis'
    ],
    exclusions: [
      'Anything Not Mentioned in Inclusions',
      'Visa (Dubai Visa - AED 350 | Sharjah - AED 750)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dubai Marina Dinner Cruise',
        description: 'Meet and Greet. Transfer to Hotel. 06:30 PM: Pickup for Marina Cruise with Dinner. 08:30 PM: Boarding Time of Cruise. 10:45 PM: Return. Overnight at Hotel.'
      },
      {
        day: 2,
        title: 'Dubai City Tour + Burj Khalifa 124th Floor',
        description: 'Breakfast at Hotel. 08:30am: Pickup for City Tour. 13:30 After City Tour | Drop to Hotel | Enjoy Burj Khalifa Views (Tickets for 124th Floor included). 20:00 Drop Off to Hotel. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Desert Safari with BBQ Dinner & Shows',
        description: 'Breakfast at Hotel. 02:30 PM: Desert Safari with BBQ Dinner and Shows. After Pickup they will drop you to a Place where ATB Bike Ride Happens (ATB Bike is not included, can pay directly). Dune Bashing, Sand Boarding, Camel Ride, Unlimited Drinks, Tanoura Show, Fire Show, Belly Dance, BBQ Dinner. 22:00 Return to Hotel. Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Departure from Dubai',
        description: 'Breakfast at hotel. Check out Hotel. Transfer to Airport. Fly Back Home.'
      }
    ],
    category: 'dubai-tours'
  },
  {
    id: 'dubai-5d4n',
    name: 'DUBAI (5D 4N)',
    country: 'Dubai',
    tagline: 'Burj Khalifa 124th Floor, Marina Cruise, Desert Safari, Miracle Garden & Global Village',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 155000,
    minPax: 6,
    travelDates: 'Month of December (Winter Season 2026/2027)',
    image: '/images/dubai-5d4n.jpg',
    rating: 4.97,
    reviewsCount: 198,
    badge: 'Grand Arabian Experience',
    highlights: [
      'Dubai Marina Luxury Cruise with Dinner Under the Stars',
      'Burj Khalifa 124th Floor Tickets & Dubai Mall Fountain Show',
      'Photo Stop at Iconic Wings of Mexico',
      'Spectacular Dubai Miracle Garden Giant Floral Sculptures',
      'Global Village Cultural Pavilions & Evening Entertainment',
      '4x4 Land Cruiser Desert Safari with Dune Bashing, Camel Rides & BBQ Shows',
      '4 Nights at Wescott Hotel Bur Dubai with Airport Transfers & Tourism Dirham Fees'
    ],
    inclusions: [
      'Stay with Breakfast for 4 Nights in Wescott Hotel Bur Dubai or similar',
      'Airport Transfers on Private Basis',
      'Tourism Dirham Fees',
      'Marina Cruise with Dinner on Sharing basis',
      'Dubai Half Day Guided City Tour on Sharing basis',
      'Desert Safari with BBQ Dinner and shows on Land Cruiser sharing Basis',
      'Miracle Garden',
      'Global Village'
    ],
    exclusions: [
      'Anything Not Mentioned in Inclusions',
      'Visa (Dubai Visa - AED 350 | Sharjah - AED 750)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dubai Marina Dinner Cruise',
        description: 'Meet and Greet. Transfer to Hotel. 06:30 PM: Pickup for Marina Cruise with Dinner. 08:30 PM: Boarding Time of Cruise. 10:45 PM: Return. Overnight at Hotel.'
      },
      {
        day: 2,
        title: 'City Tour + Burj Khalifa 124th Floor + Dubai Mall & Wings of Mexico',
        description: 'Breakfast at Hotel. 08:30am: Pickup for City Tour. 13:30 After City Tour | Drop to Hotel | Enjoy Burj Khalifa Views (Tickets for 124th Floor). 18:00 Pick up From Hotel for Dubai Mall. Evening Fountain show & visit Wings of Mexico. 20:00 Drop Off to Hotel. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Desert Safari with BBQ Dinner & Shows',
        description: 'Breakfast at Hotel. 02:30 PM: Desert Safari with BBQ Dinner and Shows. After Pickup they will drop you to a Place where ATB Bike Ride Happens (ATB Bike optional). Dune Bashing, Sand Boarding, Camel Ride, Unlimited Drinks, Tanoura Show, Fire Show, Belly Dance, BBQ Dinner. 22:00 Return to Hotel. Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Miracle Garden & Global Village Extravaganza',
        description: 'Breakfast at hotel. 15:00: Pick up from hotel for Miracle Garden. 17:00: Pick up from Miracle Garden for Global Village. 22:00: Pick up from Global Village drop to Hotel. Overnight at Hotel.'
      },
      {
        day: 5,
        title: 'Departure from Dubai',
        description: 'Breakfast at hotel. Check out Hotel. Transfer to Airport. Fly Back Home.'
      }
    ],
    category: 'dubai-tours'
  },
  {
    id: 'dubai-abudhabi-6d5n',
    name: 'DUBAI & ABU DHABI (6D 5N)',
    country: 'Dubai',
    tagline: 'Dubai Marina Cruise, Burj Khalifa 124th Floor, Miracle Garden, Global Village, Desert Safari & Abu Dhabi Ferrari World',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 215000,
    minPax: 6,
    travelDates: 'Month of December (Winter Season 2026/2027)',
    image: '/images/dubai.jpg',
    rating: 4.98,
    reviewsCount: 210,
    badge: 'Two Emirates Tour',
    highlights: [
      'Dubai Marina Evening Luxury Dhow Cruise with Dinner Under the Stars',
      'Burj Khalifa 124th Floor Observation Deck Tickets Included',
      'Dubai City Tour, Dubai Mall Fountain Show & Wings of Mexico Photo Stop',
      '4x4 Desert Safari: Dune Bashing, Sand Boarding, Camel Rides & BBQ Dinner with Shows',
      'Dubai Miracle Garden Floral Sculptures & Global Village Multi-Cultural Pavilions',
      'Full-Day Abu Dhabi City Tour with Admission Tickets to Ferrari World',
      '5 Nights at Wescott Hotel Bur Dubai with Airport Transfers & Tourism Dirham Fees'
    ],
    inclusions: [
      'Stay with Breakfast for 5 Nights in Wescott Hotel Bur Dubai or similar',
      'Airport Transfers on Private Basis',
      'Tourism Dirham Fees',
      'Marina Cruise with Dinner on Sharing basis',
      'Dubai Half Day Guided City Tour on Sharing basis',
      'Tickets for Burj Khalifa 124 Floor Non-prime time',
      'Desert Safari with BBQ Dinner and shows on Land Cruiser sharing Basis',
      'Global Village and Miracle Garden transfer on private basis',
      'Abu Dhabi City tour on Sharing basis',
      'Tickets for Ferrari World'
    ],
    exclusions: [
      'Anything Not Mentioned in Inclusions',
      'Visa (Dubai Visa - AED 350 | Sharjah - AED 750)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival + Dubai Marina Dinner Cruise',
        description: 'Meet and Greet. Transfer to Hotel. 06:30 PM: Pickup for Marina Cruise with Dinner. 08:30 PM: Boarding Time of Cruise. 10:45 PM: Return. Overnight at Hotel.'
      },
      {
        day: 2,
        title: 'City Tour + Burj Khalifa 124th Floor + Dubai Mall & Wings of Mexico',
        description: 'Breakfast at Hotel. 08:30am: Pickup for City Tour. 13:30 After City Tour | Drop to Hotel | Enjoy Burj Khalifa Views (Tickets for 124th Floor included). 18:00 Pick up From Hotel for Dubai Mall. Evening Fountain show & visit Wings of Mexico. 20:00 Drop Off to Hotel. Overnight at Hotel.'
      },
      {
        day: 3,
        title: 'Desert Safari with BBQ Dinner & Shows',
        description: 'Breakfast at Hotel. 02:30 PM: Desert Safari with BBQ Dinner and Shows. After Pickup they will drop you to a Place where ATB Bike Ride Happens (ATB Bike optional, pay directly). Dune Bashing, Sand Boarding, Camel Ride, Unlimited Drinks, Tanoura Show, Fire Show, Belly Dance, BBQ Dinner. 22:00 Return to Hotel. Overnight at Hotel.'
      },
      {
        day: 4,
        title: 'Miracle Garden & Global Village Extravaganza',
        description: 'Breakfast at hotel. 15:00: Pick up from hotel for Miracle Garden. 17:00: Pick up from Miracle Garden for Global Village. 22:00: Pick up from Global Village drop to Hotel. Overnight at Hotel.'
      },
      {
        day: 5,
        title: 'Abu Dhabi City Tour & Ferrari World Theme Park',
        description: 'Breakfast at hotel. 08:00 AM: Pick up from hotel for Abu Dhabi City tour. Visit world-famous Ferrari World on Yas Island with thrilling rollercoasters and Ferrari racing experiences. Drop off at Dubai Hotel in the evening. Overnight at Hotel.'
      },
      {
        day: 6,
        title: 'Departure from Dubai',
        description: 'Breakfast at hotel. Check out Hotel (12:00 noon). Transfer to Airport. Fly Back Home.'
      }
    ],
    category: 'dubai-tours'
  },

  // ==========================================
  // BALI ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'bali-explore-4d3n',
    name: 'EXPLORE BALI (4D 3N)',
    country: 'Bali',
    tagline: 'Uluwatu Cliff Temple & Sunset Kecak Fire Dance, Kintamani Volcano, Ubud Art Villages & Nusa Penida Island Speedboat Tour',
    nights: 3,
    days: 4,
    showPrice: false,
    hasTiers: true,
    tier3StarLKR: 115000,
    tier4StarLKR: 123000,
    basePriceLKR: 115000,
    minPax: 2,
    travelDates: '01 Feb. 2026 – 31 Mar. 2027',
    image: '/images/bali.jpg',
    rating: 4.95,
    reviewsCount: 174,
    badge: 'Tropical Paradise',
    highlights: [
      'Uluwatu Ancient Cliff Temple with Ocean Views & Sunset Kecak Fire Dance',
      'Candlelit Jimbaran Bay Beachfront Seafood BBQ Dinner Experience',
      'Kintamani Active Volcano & Scenic Lake Batur Panoramic Viewpoint',
      'Ubud Cultural Art Villages (Batik, Silver, Gold & Traditional Woodcarving)',
      'Tegalalang Emerald Rice Terraces & Balinese Coffee Plantation Visit',
      'Nusa Penida Island Excursion by Fast Boat: Kelingking Beach, Angel’s Billabong & Broken Beach',
      'Private AC Transportation with English-Speaking Driver Cum Guide'
    ],
    inclusions: [
      '3 Nights stay at 3 star / 4 star hotel',
      'Welcome flower at the Airport',
      'All transportation by AC vehicle (Transport depending on the number of participants)',
      'English speaking driver cum guide',
      'Entrance Tickets to all attractions',
      'Kecak Dance Ticket',
      'Return Fast Boat Tickets: Bali – Nusa Penida Island',
      'Full-Day Island Tour in Nusa Penida',
      '3 Breakfast, 4 Lunch, 3 Dinner',
      'Daily mineral water'
    ],
    exclusions: [
      'Air Ticket',
      'Visa',
      'Anything not mention in includes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Uluwatu Cliff Temple with Kecak Fire Dance (Lunch / Dinner)',
        description: '14:00 Airport Pick-Up with warm welcome and flower garland at Ngurah Rai International Airport by your driver/guide. Transfer to your hotel to drop off luggage and freshen up. Lunch at local restaurant. Visit Uluwatu Temple perched on a majestic cliff overlooking the Indian Ocean. Witness the enchanting Kecak fire dance during sunset. Enjoy a memorable seafood BBQ dinner at Jimbaran Beach café. Check in & overnight stay at hotel.'
      },
      {
        day: 2,
        title: 'Kintamani Volcano & Ubud Cultural Tour (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. Pick up for a full-day discovery tour. Visit Ubud — central hub of Balinese Batik weaving, woodcarving, silver & gold handicrafts. Explore Tampak Siring (Tirta Empul Holy Water Temple). Ascend to Kintamani to admire breathtaking views of Mount Batur Volcano and Lake Batur. Enjoy a buffet lunch at a scenic local restaurant. Visit a local coffee plantation and marvel at the emerald Tegalalang Rice Terraces. Dinner at local restaurant. Return to hotel for overnight stay.'
      },
      {
        day: 3,
        title: 'Nusa Penida Island Excursion by Fast Boat (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. 06:30 early pick-up and transfer to Sanur Sea Port. Board the high-speed boat to Nusa Penida Island. Explore world-famous Kelingking Beach (T-Rex Cliff), Angel\'s Billabong natural infinity pool, and Broken Beach. Delicious lunch at local restaurant at Crystal Bay. Return to mainland Bali by fast boat. Arrive at Sanur Sea Port and transfer for dinner at local restaurant. Return to hotel for overnight stay.'
      },
      {
        day: 4,
        title: 'Departure from Bali (Breakfast / Lunch)',
        description: 'Breakfast at hotel. Check out of hotel at 12:00 noon. Pick up by your driver. Enjoy lunch at a local restaurant before transfer to Bali Ngurah Rai International Airport for your departure flight.'
      }
    ],
    category: 'bali-tours'
  },
  {
    id: 'bali-explore-5d4n-lempuyang',
    name: 'EXPLORE BALI & GATE OF HEAVEN (5D 4N)',
    country: 'Bali',
    tagline: 'Lempuyang Gate of Heaven, Tirta Gangga Water Palace, Uluwatu Sunset Kecak Dance, Kintamani Volcano & Nusa Penida Island',
    nights: 4,
    days: 5,
    showPrice: false,
    hasTiers: true,
    tier3StarLKR: 145000,
    tier4StarLKR: 155000,
    basePriceLKR: 145000,
    minPax: 2,
    travelDates: '01 Feb. 2026 – 31 Mar. 2027',
    image: '/images/bali.jpg',
    rating: 4.98,
    reviewsCount: 192,
    badge: 'Instagram Iconic',
    highlights: [
      'Uluwatu Ancient Cliff Temple Ocean Views & Sunset Kecak Fire Dance',
      'Candlelit Jimbaran Beachfront Seafood BBQ Dinner Experience',
      'Kintamani Active Volcano, Lake Batur Panoramic View & Buffet Lunch',
      'Iconic Lempuyang Temple "Gate of Heaven" Mount Agung Photo Stop',
      'Tirta Gangga Royal Water Palace with Stepping Stones & Sacred Koi Ponds',
      'Full-Day Nusa Penida Island Speedboat Tour: Kelingking, Broken Beach & Angel’s Billabong',
      'Full Board Included: 4 Breakfasts, 5 Lunches & 4 Dinners with Private Chauffeur'
    ],
    inclusions: [
      '4 Nights stay at 3 star / 4 star hotel',
      'Welcome flower at the Airport',
      'All transportation by AC vehicle (Transport depending on the number of participants)',
      'English speaking driver cum guide',
      'Entrance Tickets to all listed attractions',
      'Kecak Dance Ticket',
      'Return Fast Boat Tickets: Bali – Nusa Penida Island',
      'Full-Day Island Tour in Nusa Penida',
      '4 Breakfast, 5 Lunch, 4 Dinner',
      'Daily mineral water'
    ],
    exclusions: [
      'Air Ticket',
      'Visa',
      'Anything not mention in includes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Uluwatu Temple (Lunch / Dinner)',
        description: '14:00 Airport Pick-Up. Warm welcome at Ngurah Rai International Airport by your driver/guide with welcome flower garland. Transfer to hotel to drop luggage and freshen up. Lunch at local restaurant. Visit cliffside Uluwatu Temple with breathtaking ocean views. Witness the enchanting Kecak fire dance against dramatic sunset. Dinner at Jimbaran Beach café with seafood BBQ. Check in & overnight stay at hotel.'
      },
      {
        day: 2,
        title: 'Kintamani Volcano & Ubud Tour (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. Pick up for a full-day tour. Visit Ubud (Central hub of Batik, woodcarving, silver & gold handicrafts). Explore Tampak Siring (Tirta Empul) Temple. Ascend to Kintamani Volcano & admire Lake Batur views. Buffet lunch at local restaurant. Visit coffee plantation & Tegalalang Rice Terraces. Dinner at local restaurant. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Lempuyang Temple "Gate of Heaven" & Tirta Gangga (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. Pick up from hotel. Excursion to eastern Bali to visit iconic Lempuyang Temple, famously known as the "Gate of Heaven" overlooking Mount Agung. Delicious lunch at local restaurant. Visit Tirta Gangga Royal Water Palace with sacred pools, fountains, and stepping stones surrounded by lush gardens. Dinner at local restaurant. Return to hotel for overnight stay.'
      },
      {
        day: 4,
        title: 'Nusa Penida Island Excursion by Fast Boat (Breakfast / Lunch / Dinner)',
        description: 'Breakfast at hotel. 06:30 early pick-up and transfer to Sanur Sea Port. Board the high-speed boat to Nusa Penida Island. Explore Kelingking Beach (T-Rex Cliff), Angel\'s Billabong natural pool, Broken Beach, and Crystal Bay. Lunch at local restaurant. Return to Bali by fast boat. Dinner at local restaurant. Overnight stay at hotel.'
      },
      {
        day: 5,
        title: 'Departure from Bali (Breakfast / Lunch)',
        description: 'Breakfast at hotel. Check out of hotel at 12:00 noon. Pick up by your driver. Enjoy lunch at a local restaurant before transfer to Bali Ngurah Rai International Airport for your departure flight.'
      }
    ],
    category: 'bali-tours'
  },
  {
    id: 'bali-explore-5d4n-tanahlot',
    name: 'EXPLORE BALI: TANAH LOT & WATERSPORTS (5D 4N)',
    country: 'Bali',
    tagline: 'Tanah Lot Ocean Sunset Temple, Tanjung Benoa Watersports, Melasti Beach, Uluwatu Kecak Dance, Kintamani Volcano & Nusa Penida',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 93000,
    minPax: 2,
    travelDates: '01st May 2026 – 30th Apr. 2027',
    image: '/images/bali.jpg',
    rating: 4.96,
    reviewsCount: 165,
    badge: 'Watersports & Adventure',
    highlights: [
      'Iconic Tanah Lot Sea Temple Sunset on Offshore Rock Formation',
      'Exhilarating Watersports at Tanjung Benoa (Banana Boat Ride Included)',
      'Relax on the White Sands and Turquoise Waters of Melasti Beach',
      'Cliffside Uluwatu Temple & Sunset Kecak Dance Performance',
      'Kintamani Active Volcano, Lake Batur Viewpoint & Ubud Art Villages',
      'High-Speed Fast Boat to Nusa Penida Island: Kelingking, Broken Beach & Crystal Bay',
      '4 Nights Accommodation at 4-Star Hotel with Daily Breakfast & Lunch'
    ],
    inclusions: [
      '4 Nights stay at 4 star hotel',
      'All transportation by AC vehicle (Transport depending on the number of participants)',
      'English speaking driver / driver cum guide',
      'Entrance Tickets to all listed attractions',
      'Banana Boat ride at Tanjung Benoa',
      'Ticket fast boat Bali – Nusa Penida Island return',
      'Full-Day Tour in Nusa Penida Island',
      '4 Breakfast, Lunch as specified',
      'Daily mineral water'
    ],
    exclusions: [
      'Air Ticket',
      'Visa',
      'Anything not mention in includes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Tanah Lot Sunset Temple',
        description: '14:00 Airport Transfer. Meet your driver at Ngurah Rai International Airport for a warm welcome. Enjoy a comfortable ride to begin your Bali adventure. 16:30 Visit Tanah Lot Temple: explore this iconic sea temple perched on an offshore rock formation amidst breaking waves. Witness breathtaking ocean panoramas and mesmerizing sunset views. Overnight at 4-star hotel.'
      },
      {
        day: 2,
        title: 'Tanjung Benoa Watersports, Melasti Beach & Uluwatu Kecak Dance (Breakfast)',
        description: '09:00 Watersports at Tanjung Benoa: kick off your day with exhilarating watersport activities including an included Banana Boat ride (optional parasailing, jet-skiing, or snorkeling). 14:00 Melasti Beach: relax on white sands surrounded by dramatic limestone cliffs and crystal-clear waters. 16:30 Visit iconic cliffside Uluwatu Temple. 18:00 Experience the enchanting sunset Kecak dance performance against the Indian Ocean backdrop. Overnight at 4-star hotel.'
      },
      {
        day: 3,
        title: 'Kintamani Volcano & Ubud Cultural Tour (Breakfast)',
        description: 'Breakfast at hotel. Pick up for a full-day discovery tour. Visit Ubud (Central hub of Batik, woodcarving, silver & gold handicrafts). Explore Tampak Siring (Tirta Empul Holy Water Temple). Ascend to Kintamani to admire Mount Batur Volcano and Lake Batur vistas. Visit local coffee plantation and picturesque Tegalalang Rice Terraces. Return to hotel for overnight stay.'
      },
      {
        day: 4,
        title: 'Nusa Penida Island Excursion by Fast Boat (Breakfast / Lunch)',
        description: 'Breakfast at hotel. 06:30 early pick-up and transfer to Sanur Sea Port. Fast boat to Nusa Penida Island. Tour Kelingking Beach (T-Rex Cliff), Angel\'s Billabong, Broken Beach, and Crystal Bay. Lunch at local restaurant. High-speed boat return to Sanur Sea Port. Transfer back to hotel. Overnight stay at 4-star hotel.'
      },
      {
        day: 5,
        title: 'Departure from Bali (Breakfast)',
        description: 'Breakfast at hotel. Check out of 4-star hotel at 12:00 noon. Pick up by your driver and transfer to Bali Ngurah Rai International Airport for departure.'
      }
    ],
    category: 'bali-tours'
  },

  // ==========================================
  // VIETNAM ITINERARIES (NATIONWIDE TRAVELS)
  // Displayed correctly without showing prices
  // ==========================================
  {
    id: 'vietnam-hanoi-halong-5d4n',
    name: 'VIETNAM: HANOI, HOA LU & HALONG BAY (5D 4N)',
    country: 'Vietnam',
    tagline: 'Hanoi City, Ninh Binh Hoa Lu Ancient Capital, Trang An Caves, Mua Cave Dragon Peak & Halong Bay Luxury Overnight Cruise',
    nights: 4,
    days: 5,
    showPrice: false,
    basePriceLKR: 130000,
    minPax: 2,
    travelDates: '01st April 2026 – 31st March 2027',
    image: '/images/vietnam.jpg',
    rating: 4.97,
    reviewsCount: 188,
    badge: 'Overnight Cruise Special',
    highlights: [
      'Luxury Overnight Boutique Cruise in UNESCO World Heritage Halong Bay & Lan Ha Bay',
      'Kayaking & Swimming in Emerald Waters of Ong Cam Area and Dark & Bright Cave',
      'Sunset Party on Cruise Sundeck with Local Wine, Fresh Fruit & Spring Roll Cooking Demo',
      'Ninh Binh: Hoa Lu Ancient Feudal Capital of Dinh, Le & Ly Dynasties',
      'Trang An UNESCO Cave Boat Trip (Filming Location of "Kong: Skull Island")',
      'Mua Cave: Climb 500 Steps to Lying Dragon Mountain for 360° Views of Tam Coc',
      'Superior Room at TK123 Hotel Hanoi & Private Airport Transfers with Vietnam Visa Included'
    ],
    inclusions: [
      'Transfer by private vehicle / shuttle bus',
      'Meals in program (Breakfasts, Lunches & Cruise Gourmet Dinner)',
      'English speaking Guide',
      'Entrance tickets to all listed attractions',
      'Hotels in Hanoi (Superior Room at TK123 Hotel or similar)',
      'Luxury Cabin on La Pandora Boutique Cruise in Halong Bay',
      'Government taxes',
      'Vietnam Visa'
    ],
    exclusions: [
      'Travel insurance',
      'Drinks, laundry, telephone, and other private services',
      'Tip for guide and driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi Arrival & Hotel Check-in',
        description: 'Our car will pick you up from Noi Bai International Airport and transfer to hotel to relax and freshen up. Check-in time is 14:00. Feel free to explore the vibrant Hanoi Old Quarter and Hoan Kiem Lake. Overnight at TK123 Hotel Hanoi or similar.'
      },
      {
        day: 2,
        title: 'Ninh Binh: Hoa Lu Ancient Capital, Trang An Caves & Mua Cave (Breakfast / Lunch)',
        description: '07:30 – 08:00 Depart for Ninh Binh province. 10:30 Visit Hoa Lu ancient capital of Vietnam (968–1010 AD) under Dinh, Le, and Ly Dynasties. 11:45 Buffet lunch with local specialities (goat meat, fish, chicken, vegetarian options). 13:00 Visit Trang An UNESCO World Heritage Site with a 2-hour scenic boat trip through limestone cave tunnels (filming site of Kong: Skull Island). 15:45 Visit Mua Cave (Dancing Cave); climb 500 steps to the summit of Lying Dragon Mountain for a panoramic view of Tam Coc. Return to Hanoi. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Halong Bay & Lan Ha Bay Overnight Luxury Cruise (Breakfast / Lunch / Dinner)',
        description: '08:15 Shuttle bus pickup to Tuan Chau marina. Transfer by tender to La Pandora Cruise. Welcome drink and safety briefing. 13:00 Vietnamese seafood lunch while sailing past Con Vit islets. 16:00 Cruise through Lan Ha Bay surrounded by dramatic limestone karsts. Kayaking and swimming in crystal-clear waters of Ong Cam Area. 17:30 Traditional spring roll cooking demonstration and sunset party on the sundeck with local wine and fresh fruit. 19:00 Gourmet dinner onboard, followed by evening squid fishing, movies, or relaxing at the bar. Overnight in cabin on board La Pandora Boutique Cruise.'
      },
      {
        day: 4,
        title: 'Halong Bay Sunrise, Dark & Bright Cave – Return to Hanoi (Breakfast / Lunch)',
        description: '06:00 Admire sunrise over the bay. 06:30 Light breakfast, coffee & tea. 07:15 Visit Dark & Bright Cave by local rowing boats. 09:15 Return to cruise to freshen up and checkout. 10:00 Farewell lunch served onboard. 12:00 Disembark at Tuan Chau marina and take shuttle bus back to Hanoi. 15:00 Arrival at hotel in Hanoi. Free evening for shopping. Overnight at TK123 Hotel or similar.'
      },
      {
        day: 5,
        title: 'Hanoi Departure (Breakfast)',
        description: 'Breakfast at hotel. Free time for last-minute shopping until checkout at 12:00 noon. Private transfer to Hanoi Airport for your departure flight.'
      }
    ],
    category: 'vietnam-hanoi'
  },
  {
    id: 'vietnam-danang-bana-4d3n',
    name: 'VIETNAM: DA NANG, HOI AN & BA NA HILLS (4D 3N)',
    country: 'Vietnam',
    tagline: 'Da Nang Beachfront, Marble Mountains Lady Buddha, Hoi An Ancient Lantern Town & Ba Na Hills Golden Bridge',
    nights: 3,
    days: 4,
    showPrice: false,
    basePriceLKR: 93000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st March 2027',
    image: '/images/vietnam-danang.jpg',
    rating: 4.96,
    reviewsCount: 175,
    badge: 'Golden Bridge Special',
    highlights: [
      'World-Famous Golden Bridge held by Giant Stone Hands at Ba Na Hills',
      'Modern Cable Car Ride with Panoramas of Da Nang & Quang Nam Mountains',
      'French Village, Le Jardin D\'Amour Flower Gardens & Lava Train Sun Kingdom',
      'Fantasy Park Underground Adventure with over 90 Free Rides and Games',
      'UNESCO World Heritage Hoi An Ancient Town: Japanese Covered Bridge & Night Lantern Market',
      'Marble Mountains, Tang Chon Cave, Non Nuoc Stone Village & 70m Lady Buddha at Linh Ung Pagoda',
      '3 Nights at Sepon Blue Hotel Da Nang Near My Khe Beach with Vietnam Visa Included'
    ],
    inclusions: [
      'Airport & sightseeing transfers by private vehicle / minivan',
      'Meals in program (Breakfasts & Lunches with Hoi An dinner specialties)',
      'English speaking Guide',
      'Entrance tickets to Ba Na Hills cable car, Fantasy Park & Golden Bridge',
      'Hotels in Da Nang (Superior Room at Sepon Blue Hotel or similar)',
      'Government taxes',
      'Vietnam Visa'
    ],
    exclusions: [
      'Travel insurance',
      'Drinks, laundry, telephone, and other private services',
      'Tip for guide and driver',
      'All things not mentioned in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Da Nang Arrival & My Khe Beach Relaxation',
        description: 'Our car will meet you at Da Nang International Airport and transfer to hotel to check in and relax. Enjoy free time discovering Da Nang coastal city and walking along famous My Khe Beach. Overnight at Sepon Blue Hotel Da Nang or similar.'
      },
      {
        day: 2,
        title: 'Linh Ung Lady Buddha, Marble Mountains & Hoi An Ancient Town (Breakfast / Lunch)',
        description: '14:00 Guide and car pick up for Linh Ung Pagoda on Son Tra Peninsula, featuring the majestic 70m high Lady Buddha statue. 15:30 Explore Marble Mountains and Tang Chon Cave, followed by Non Nuoc Stone Carving Village. 17:00 Head to UNESCO World Heritage Hoi An Ancient Town: walk through lantern-lit streets, Japanese Covered Bridge, Phuc Kien Assembly Hall, and Hoai River. 18:30 Dinner with authentic Hoi An delicacies (Cao Lau, chicken rice, wonton). Transfer back to hotel. Overnight at Sepon Blue Hotel.'
      },
      {
        day: 3,
        title: 'Ba Na Hills, Golden Bridge & Fantasy Park (Breakfast / Lunch)',
        description: '07:30 – 08:00 Minivan and tour guide pickup for Ba Na Hills. Board Southeast Asia\'s most modern cable car to Dream Stream Station. Visit the world-renowned Golden Bridge held aloft by giant stone hands, French wine cellar, Le Jardin D\'Amour (9 themed gardens), and Linh Ung Pagoda. Take the 2nd cable car to the French Village with carnival performances, street music, and Tube Car slide. Enjoy a lavish buffet lunch. Board the Lava Train to Sun Kingdom, Helios Waterfall, Time Gate, and Moon Kingdom. Explore Fantasy Park with over 90 games, 4D/5D rides, and Dinosaur Park. 15:00 Return by cable car. Transfer back to Da Nang hotel. Overnight stay.'
      },
      {
        day: 4,
        title: 'Da Nang Departure (Breakfast)',
        description: 'Breakfast at hotel. Free time for shopping in Da Nang until checkout. Private car transfer to Da Nang International Airport for your departure flight.'
      }
    ],
    category: 'vietnam-danang'
  },
  {
    id: 'vietnam-hcmc-danang-6d5n',
    name: 'VIETNAM: HO CHI MINH & DA NANG (6D 5N)',
    country: 'Vietnam',
    tagline: 'Saigon River Dinner Cruise, Mekong Delta Sampan Tour, Ba Na Hills Golden Bridge & Cam Thanh Coconut Basket Boat Hoi An',
    nights: 5,
    days: 6,
    showPrice: false,
    basePriceLKR: 147000,
    minPax: 2,
    travelDates: '01st May 2026 – 31st Mar. 2027',
    image: '/images/vietnam-hcmc.jpg',
    rating: 4.98,
    reviewsCount: 164,
    badge: 'South & Central Combo',
    highlights: [
      'Saigon River Evening Luxury Dinner Cruise with City Skyline Views',
      'Full-Day Mekong Delta Tour: Tien River 4 Islands, Tan Thach Canal & Hand-Rowed Sampan',
      'Visit Vinh Trang Pagoda, Coconut Candy Mill & Enjoy Southern Folk Music with Honey Tea',
      'Ba Na Hills Modern Cable Car, Iconic Golden Bridge & French Village',
      'Sun Kingdom Lava Train, Helios Waterfall & Fantasy Park with over 90 Free Rides',
      'Cam Thanh Coconut Jungle: Traditional Fishing & Bamboo Basket Boat Rowing',
      'Hoi An UNESCO Ancient Town: Phuc Kien Hall, Japanese Bridge & Hoai River Flower Lanterns',
      '3-Star Hotel Stays in Ho Chi Minh City & Da Nang with Vietnam Visa Included'
    ],
    inclusions: [
      'Vietnam Visa included',
      'Meals in program (Daily Breakfasts & Lunches)',
      'English speaking Guide',
      'Entrance tickets to all listed attractions & Ba Na Hills cable car',
      '3 star hotels in Ho Chi Minh City and Da Nang',
      'Government taxes'
    ],
    exclusions: [
      'Airfare (Domestic & International flights)',
      'Travel insurance',
      'Drinks, laundry, telephone, and other private services',
      'Tip for guide and driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ho Chi Minh Arrival & Saigon River Dinner Cruise',
        description: 'Arrival at Tan Son Nhat International Airport in Ho Chi Minh City. Meet your driver and transfer to hotel to check in and freshen up. In the evening, embark on a spectacular Saigon River dinner cruise with panoramic night views of the illuminated city skyline. Overnight at hotel in Ho Chi Minh.'
      },
      {
        day: 2,
        title: 'Full Day Mekong Delta Tour (Breakfast / Lunch)',
        description: '07:30 – 08:00 Scenic drive through rural rice field landscapes along National Highway 1 to Trung Luong and My Tho. Visit historic Vinh Trang Pagoda. Cruise along the Tien River viewing Dragon, Unicorn, Phoenix, and Tortoise Islands. Stroll village roads, visit fruit orchards, and enjoy honey tea with traditional Southern folk music. Experience hand-rowed sampan rides through shaded water coconut palm canals of Tan Thach. Visit a coconut candy workshop. Return to Ho Chi Minh City around 17:00 – 17:30. Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Ho Chi Minh to Da Nang Flight & My Khe Beach Relaxation (Breakfast)',
        description: 'Breakfast at hotel. Private car transfer to the airport for your domestic flight to Da Nang. On arrival at Da Nang Airport, our car will meet you and transfer to your hotel. Free time to relax and explore Da Nang coastal city and famous My Khe Beach. Overnight at hotel in Da Nang.'
      },
      {
        day: 4,
        title: 'Ba Na Hills, Golden Bridge & Fantasy Park (Breakfast)',
        description: '07:30 – 08:00 Car and tour guide pick up for Ba Na Hills. Board Southeast Asia’s most modern cable car to Dream Stream Station. Walk on the world-famous Golden Bridge held up by giant mossy stone hands. Explore Le Jardin D’Amour (9 themed flower gardens) and Linh Ung Pagoda. Take the 2nd cable car to the French Village with carnival shows, street music, and Tube Car slide. Ride the Lava Train to Sun Kingdom (Helios Waterfall, Time Gate, Moon Kingdom). Experience Fantasy Park with over 90 free games, 4D/5D cinema, and Dinosaur Park. 15:00 Return by cable car and transfer back to your hotel. Overnight in Da Nang.'
      },
      {
        day: 5,
        title: 'Cam Thanh Coconut Basket Boats & Hoi An Ancient Lantern Town (Breakfast)',
        description: '12:00 – 12:15 Van and tour guide pick up for Cam Thanh Coconut Village. Experience traditional fishing techniques and learn to row unique round bamboo basket boats along tranquil water coconut waterways. Proceed to UNESCO World Heritage Hoi An Ancient Town: visit Phuc Kien Chinese Assembly Hall, 200-year-old Tan Ky or Phung Hung Ancient House, Hoi An Traditional Performing Arts House, and the 400-year-old Japanese Covered Bridge. At 18:00, take a scenic boat ride on Hoai River and release glowing flower lanterns for good fortune. Explore the lantern street and night market. 18:30 Return to hotel. Overnight in Da Nang.'
      },
      {
        day: 6,
        title: 'Da Nang Departure (Breakfast)',
        description: 'Breakfast at hotel. Leisure time until checkout. Our car will pick you up and transfer to Da Nang Airport for your departure flight.'
      }
    ],
    category: 'vietnam-hcmc'
  },
  {
    id: 'vietnam-hochiminh-vungtau-6d5n',
    name: 'VIETNAM: HO CHI MINH CITY & VUNG TAU (6D 5N)',
    country: 'Vietnam',
    tagline: 'Saigon River Dinner Cruise, Mekong Delta Islands, Vung Tau Beach & Giant Jesus Statue, Cu Chi Tunnels & French Colonial Landmarks',
    nights: 5,
    days: 6,
    showPrice: false,
    hasTiers: true,
    tier3StarLKR: 120000,
    tier4StarLKR: 150000,
    basePriceLKR: 120000,
    minPax: 2,
    travelDates: '01st Apr 2026 – 31st Mar 2027',
    image: '/images/vietnam-hcmc.jpg',
    rating: 4.97,
    reviewsCount: 178,
    badge: 'Southern Vietnam Special',
    highlights: [
      'Ho Chi Minh City French Colonial Landmarks: Notre Dame Cathedral, Post Office & Independence Palace',
      'War Remnants Museum & Cho Lon China Town with Thien Hau Pagoda',
      'Saigon River Waterbus Cruise with Views of Landmark 81 and Bitexco Tower',
      'Full-Day Mekong Delta River Cruise: Tien River 4 Islands & Hand-Rowed Sampan Canals',
      'Vung Tau Coastal Day Tour: Thuy Van Back Beach, Giant Jesus Christ Statue & Cape Nghinh Phong',
      'Historical Cu Chi Tunnels: Underground Living Systems, Trapdoors, Weapons & Cassava Tasting',
      'Saigon River Evening Luxury Dinner Cruise with Live Music & Flamenco Dances',
      'Choice of 3-Star (Kiko Hotel) or 4-Star (Muong Thanh Grand Hotel) with Vietnam Visa Included'
    ],
    inclusions: [
      'All airport & tour transfers by private vehicle / AC bus',
      'Meals in program (Daily Breakfasts, Lunches & Saigon River Dinner Cruise)',
      'English speaking Guide',
      'Entrance tickets to all listed attractions (Independence Palace, War Museum, Cu Chi Tunnels)',
      '5 Nights Hotel in Ho Chi Minh City (3* Kiko Hotel or 4* Muong Thanh Grand Hotel)',
      'Government taxes',
      'Vietnam Visa'
    ],
    exclusions: [
      'Flight tickets',
      'VAT for card/online payment (8%)',
      'Travel insurance',
      'Drinks, laundry, telephone, and other private services',
      'Tip for guide and driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ho Chi Minh City Arrival & Free Day',
        description: 'Pick up from Tan Son Nhat Airport and private transfer to your hotel. Check-in time is 14:00. Enjoy a relaxed free day discovering the bustling streets, cafes, and markets of Ho Chi Minh City. Overnight at 3* Kiko Hotel or 4* Muong Thanh Grand Hotel.'
      },
      {
        day: 2,
        title: 'Ho Chi Minh City Landmarks & Saigon River Waterbus (Breakfast / Lunch)',
        description: '07:30 Morning tour visiting Independence Palace (Reunification Palace) designed by architect Ngo Viet Thu. View iconic French colonial architecture including Notre Dame Cathedral and the historic Central Post Office. Visit the War Remnants Museum. Authentic lunch at local restaurant. In the afternoon, explore Cho Lon (China Town) and Thien Hau Pagoda. Board the public Waterbus at Bach Dang Harbor along the Saigon River with stunning views of Landmark 81, Bitexco Financial Tower, and District 2. 18:00 Return to hotel. Overnight stay.'
      },
      {
        day: 3,
        title: 'Full Day Mekong Delta Tour (Breakfast / Lunch)',
        description: '07:30 – 08:00 Journey through scenic rice field landscapes to My Tho in the Mekong Delta. Visit Vinh Trang Pagoda. Cruise on the Tien River around Dragon, Unicorn, Phoenix, and Tortoise Islands. Stroll village paths, visit orchards, taste seasonal tropical fruits and honey tea while enjoying traditional Southern folk music. Take a hand-rowed sampan through shaded water coconut palm canals at Tan Thach and visit a coconut candy mill. Enjoy local lunch before returning to Ho Chi Minh City. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Vung Tau Coastal Beach Day Tour (Breakfast / Lunch)',
        description: '07:30 Pick up for the seaside resort city of Vung Tau. 09:00 Arrive at Thuy Van Beach (Back Beach) with 10km of golden sand and gentle surf. Delicious Vietnamese lunch at local beachfront restaurant. In the afternoon, visit the iconic 32-meter giant Jesus Christ Statue perched on Small Mountain, Thang Tam Temple (Whale Temple), Bach Dinh (Villa Blanche), and scenic Cape Nghinh Phong. Return to Ho Chi Minh City by 18:00. Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Cu Chi Tunnels & Evening Saigon River Dinner Cruise (Breakfast / Dinner)',
        description: '07:30 Drive to the historic Cu Chi Tunnels. Watch an introductory documentary and explore the underground tunnel network: living quarters, kitchens, command centers, and trap doors used during the war. Taste boiled cassava with sesame salt (guerilla food) and visit the optional firing range. 14:00 Return to hotel to freshen up. 18:00 – 18:45 Pickup for the Saigon River Dinner Cruise. Board at 19:45 for a gourmet Vietnamese dinner accompanied by live musical performances and Flamenco dances while cruising past sparkling skyscrapers. Cruise concludes around 21:30 – 22:00. Overnight at hotel.'
      },
      {
        day: 6,
        title: 'Ho Chi Minh Departure (Breakfast)',
        description: 'Breakfast at hotel. Free time for last minute shopping at Ben Thanh Market until checkout at 12:00 noon. Private car transfer to Tan Son Nhat Airport for your departure flight.'
      }
    ],
    category: 'vietnam-hcmc'
  },
  {
    id: 'vietnam-hanoi-danang-7d6n',
    name: 'VIETNAM: HANOI, HALONG & DA NANG (7D 6N)',
    country: 'Vietnam',
    tagline: 'Halong Bay Cruise & Titov Island, Ninh Binh Trang An Caves, Ba Na Hills Golden Bridge & Hoi An Basket Boat Tour',
    nights: 6,
    days: 7,
    showPrice: false,
    basePriceLKR: 142000,
    minPax: 2,
    travelDates: '22nd Aug. 2026 – 28th Aug. 2026 (Summer Special 2026/2027)',
    image: '/images/vietnam-halong.jpg',
    rating: 4.98,
    reviewsCount: 196,
    badge: 'North & Central Grand Tour',
    highlights: [
      'Halong Bay Scenic Day Cruise: Sung Sot Amazing Cave, Luon Cave & Titov Island Peak Hike',
      'Kayaking or Bamboo Rowing in Luon Water Cave & Swimming at Titov White Sand Beach',
      'Sunset Tea Break on Halong Cruise Sundeck sailing past Cock Fighting Rocks',
      'Ninh Binh: Hoa Lu Ancient Capital & Trang An UNESCO Cave Boat Trip (Kong: Skull Island)',
      'Climb 500 Steps to Mua Cave Lying Dragon Peak with Panoramas of Tam Coc Valley',
      'Da Nang Coastal Stay & Free Relaxation at My Khe Beach',
      'Ba Na Hills Modern Cable Car, World-Famous Golden Bridge & French Village with Buffet Lunch',
      'Cam Thanh Coconut Forest Basket Boat Ride, Hoi An Ancient Lantern Town & Night Market',
      'Hotels in Hanoi & Da Nang (TK123 Hotel & Sepon Blue Hotel) with Vietnam Visa Included'
    ],
    inclusions: [
      'All airport & tour transfers by private vehicle / AC bus',
      'Meals in program (Daily Breakfasts, Lunches & Hoi An Dinner)',
      'English speaking Guide',
      'Entrance tickets to all listed attractions & Ba Na Hills cable car',
      'Hotels in Hanoi (TK123 Hotel or similar) & Da Nang (Deluxe Room at Sepon Blue Hotel)',
      'Day cruise boat in Halong Bay',
      'Government taxes',
      'Vietnam Visa'
    ],
    exclusions: [
      'Travel insurance',
      'Domestic / International flight tickets',
      'Drinks, laundry, telephone, and other private services',
      'Tip for guide and driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hanoi Arrival & Free Day',
        description: 'Car pickup from Noi Bai Airport and transfer to hotel in Hanoi. Check in at 14:00. Free day to explore Hanoi Old Quarter, Hoan Kiem Lake, and French colonial quarters. Superior Room at TK123 Hotel or similar.'
      },
      {
        day: 2,
        title: 'Halong Bay Scenic Day Cruise & Titov Island (Breakfast / Lunch)',
        description: '08:30 – 09:00 Pickup around Hanoi Old Quarter for a comfortable highway drive to Tuan Chau Harbor. 12:00 Board the cruise boat and enjoy a Vietnamese set menu lunch while sailing past iconic islets (Incense Burner, Cock Fighting). 13:30 Explore Sung Sot (Amazing Cave) – Halong Bay’s largest and most magnificent cave. 14:45 Discover Luon Cave by kayak or bamboo rowing boat. 15:45 Visit Titov Island for beach swimming and a hike up Titov Peak for breathtaking 360° panoramas. 17:00 Sunset tea break on the sundeck. 17:45 Return to harbor and transfer back to Hanoi by 20:00. Overnight at TK123 Hotel.'
      },
      {
        day: 3,
        title: 'Ninh Binh Day Tour: Hoa Lu, Trang An Caves & Mua Cave (Breakfast / Lunch)',
        description: '07:30 – 08:00 Depart for Ninh Binh. 10:30 Visit Hoa Lu ancient capital (968–1010 AD). 11:45 Lavish buffet lunch with local delicacies (goat meat, fish, chicken, vegetarian options). 13:00 Scenic 2-hour boat tour through Trang An UNESCO World Heritage cave system (Kong: Skull Island filming location). 15:45 Visit Mua Cave and hike 500 stone steps to the summit of Lying Dragon Mountain for panoramic views of Tam Coc. Return to Hanoi by 19:00. Overnight at TK123 Hotel.'
      },
      {
        day: 4,
        title: 'Hanoi to Da Nang Flight & My Khe Beach (Breakfast)',
        description: 'Breakfast at hotel. Private car transfer to Noi Bai Airport for flight to Da Nang. On arrival in Da Nang, car transfer to hotel. Check in and enjoy free time exploring Da Nang city and relaxing on My Khe Beach. Deluxe Room at Sepon Blue Hotel or similar.'
      },
      {
        day: 5,
        title: 'Ba Na Hills, Golden Bridge & Fantasy Park (Breakfast / Lunch)',
        description: '07:30 – 08:00 Minivan and tour guide pickup for Ba Na Hills. Board Southeast Asia’s most modern cable car to Dream Stream Station. Walk on the world-famous Golden Bridge held up by giant mossy stone hands. Explore Le Jardin D’Amour flower gardens and Linh Ung Pagoda. Take the 2nd cable car to the French Village with carnival performances and street music. Lavish buffet lunch included. Ride the Lava Train to Sun Kingdom (Helios Waterfall, Time Gate, Moon Kingdom). Experience Fantasy Park with over 90 games and rides. 15:00 Return by cable car. Transfer back to Sepon Blue Hotel. Overnight stay.'
      },
      {
        day: 6,
        title: 'Cam Thanh Coconut Forest Basket Boat & Hoi An Ancient Town (Breakfast / Dinner)',
        description: 'Afternoon excursion to Cam Thanh Coconut Forest: hop onto traditional Vietnamese round bamboo basket boats and row through palm waterways with spinning boat performances. Continue to UNESCO World Heritage Hoi An Ancient Town: visit Phuc Kien Assembly Hall, old merchant houses, and the 400-year-old Japanese Covered Bridge. Stroll through the shimmering lantern street and night market. Enjoy dinner with Hoi An specialties. Return to Sepon Blue Hotel for overnight stay.'
      },
      {
        day: 7,
        title: 'Da Nang Departure (Breakfast)',
        description: 'Breakfast at hotel. Free time for shopping until checkout. Private car transfer to Da Nang International Airport for your departure flight.'
      }
    ],
    category: 'vietnam-danang'
  }
];

export const customerTestimonials: Testimonial[] = [
  {
    id: 't-0',
    name: 'Pradeep & Shamila Wickrematunge',
    city: 'Colombo 07, Sri Lanka',
    destinationVisited: 'Bangkok & Pattaya Grand Tour (5D 4N)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Our family tour with Nationwide Travels to Bangkok and Pattaya was beyond expectations! The private car transfers, Safari World experience, and Coral Island boat trip were organized seamlessly. Best travel agency in Colombo!',
    date: 'April 2026'
  },
  {
    id: 't-1',
    name: 'Dr. Kasun & Dinithi Jayawardena',
    city: 'Kandy, Sri Lanka',
    destinationVisited: 'Bangkok (4D 3N) Dreamworld & Dinner Cruise',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Nationwide.lk arranged our dream family trip to Bangkok! The kids loved Dreamworld Snow Town and Safari World. The private transfers made traveling so relaxed and hassle-free.',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Rohan Wickramasinghe',
    city: 'Kurunegala, Sri Lanka',
    destinationVisited: 'Bangkok Pattaya (7D 6N) Ultimate Holiday',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Everything was on schedule: Coral Island speedboat, Tiger Park, Sanctuary of Truth, and Safari World. P.J. Watergate and Golden Beach hotels were very convenient. 10/10 service!',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Sachini Perera',
    city: 'Galle, Sri Lanka',
    destinationVisited: 'Bangkok Extra Tour (6D 5N)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Ocean World at Siam Paragon and Madame Tussauds were incredible! Nationwide team answered all our questions immediately. Truly a 5-star travel agency experience.',
    date: 'March 2026'
  }
];
