export interface TourPackage {
  id: string;
  name: string;
  country: string;
  tagline: string;
  nights: number;
  days: number;
  basePriceLKR?: number;
  discountedPriceLKR?: number;
  formattedPriceString?: string;
  showPrice?: boolean;
  travelDates?: string;
  hasTiers?: boolean;
  tier3StarLKR?: number;
  tier4StarLKR?: number;
  minPax?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  category: 
    | 'southeast-asia' 
    | 'island-escapes' 
    | 'luxury-vacations' 
    | 'trending' 
    | 'thailand-tours' 
    | 'bangkok' 
    | 'bangkok-pattaya' 
    | 'bangkok-phuket'
    | 'india-tours'
    | 'india-north'
    | 'india-kashmir'
    | 'india-golden-triangle'
    | 'india-kerala'
    | 'india-pilgrimage'
    | 'india-chennai'
    | 'europe-tours'
    | 'europe-marvels'
    | 'europe-paris-italy'
    | 'singapore-tours'
    | 'malaysia-tours'
    | 'singapore-malaysia'
    | 'dubai-tours'
    | 'bali-tours'
    | 'vietnam-tours'
    | 'vietnam-hanoi'
    | 'vietnam-danang'
    | 'vietnam-hcmc'
    | string;
}

export interface BookingFormState {
  packageId: string;
  packageName: string;
  tier: 'standard' | 'luxury';
  paxCount: number;
  departureDate: string;
  includeFlights: boolean;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface FilterState {
  keyword: string;
  destination: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  destinationVisited: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogSectionItem {
  heading: string;
  content: string;
  bulletPoints?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Visa & Documentation' | 'Travel Guides' | 'Honeymoon & Couples' | 'Pilgrimages' | 'Travel Tips';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  excerpt: string;
  keyTakeaways: string[];
  sections: BlogSectionItem[];
  relatedPackageId?: string;
  relatedPackageName?: string;
  tags: string[];
}

