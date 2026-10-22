import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  Compass, 
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Globe2
} from 'lucide-react';
import { PackageCard } from './PackageCard';
import { RevealOnScroll } from './RevealOnScroll';
import type { TourPackage } from '../types';

export interface CountryDirectoryItem {
  id: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  image: string;
  highlights: string[];
}

export const COUNTRY_DIRECTORY: CountryDirectoryItem[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    region: 'Bangkok, Pattaya & Phuket',
    tagline: 'Chao Phraya River luxury dinner cruises, Safari World open-air zoo safari, Coral Island turquoise beaches, Phi Phi Island speedboat tours, Dream World Snow Town & historic temples.',
    image: '/images/bangkok-phuket-5d4n.jpg',
    highlights: [
      'Chao Phraya Dinner Cruise', 
      'Safari World Open Zoo', 
      'Phi Phi / James Bond Island',
      'Coral Island (Koh Larn)', 
      'Dream World Snow Town', 
      'Sanctuary of Truth'
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    region: 'Kashmir, Golden Triangle, Kerala, Chennai & Shrines',
    tagline: 'Srinagar Dal Lake deluxe houseboats & Gulmarg Gondola, Taj Mahal & Pink City Jaipur, Shimla Snow Point, Kerala backwaters, Dambadiva, Thirupathi & Velankanni.',
    image: '/images/india-kashmir-delhi-6d5n.jpg',
    highlights: [
      'Kashmir Dal Lake Deluxe Houseboats',
      'Taj Mahal & Jaipur Golden Triangle',
      'Shimla & Solang Valley Snow Point',
      'Kerala Alleppey Backwaters Cruise',
      'Sacred Dambadiva Buddhist Pilgrimage',
      'Chennai Silks, Thirupathi & Velankanni'
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Marina Bay, Sentosa & Gardens by the Bay',
    tagline: 'Gardens by the Bay Flower Dome & Cloud Forest, Impression of Monet, Sentosa Universal Studios Singapore and guided city landmark tours.',
    image: '/images/singapore-4d3n.jpg',
    highlights: [
      'Gardens by the Bay & Supertrees',
      'Flower Dome + Cloud Forest + Monet',
      'Marina Bay Sands Waterfront',
      'Sentosa Universal Studios Full-Day',
      'Guided Singapore City Tour',
      'Private Airport Transfers'
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    region: 'Kuala Lumpur, Genting & Sunway',
    tagline: 'Kuala Lumpur iconic city tour, Genting Highlands Awana SkyWay cable car, Batu Caves rainbow steps, Sunway Lagoon adventure rides & Aquaria KLCC.',
    image: '/images/malaysia-4d3n.jpg',
    highlights: [
      'Genting Highlands Awana SkyWay',
      'Batu Caves & Murugan Golden Statue',
      'Sunway Lagoon Water & Adventure Park',
      'Aquaria KLCC Marine Life Aquarium',
      'Kuala Lumpur City Landmarks',
      'Malaysian Visa Included'
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    flag: '🇦🇪',
    region: 'Burj Khalifa, Marina, Desert Safari & Abu Dhabi',
    tagline: 'Dubai Marina luxury dhow dinner cruise, Burj Khalifa 124th floor observation deck, 4x4 desert safari with BBQ shows, Miracle Garden, Global Village & Abu Dhabi Ferrari World.',
    image: '/images/dubai-4d3n.jpg',
    highlights: [
      'Burj Khalifa 124th Floor Views',
      'Dubai Marina Evening Dinner Cruise',
      '4x4 Desert Safari & BBQ Shows',
      'Dubai Miracle Garden & Global Village',
      'Abu Dhabi City Tour & Ferrari World',
      'Private Airport Transfers & Hotel Stays'
    ]
  },
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    region: 'France, Italy, Switzerland & United Kingdom',
    tagline: 'Grand 12-day European journeys: Paris Eiffel Tower & Louvre, Venice Gondola, Lake Como & Bellagio, Florence, Rome Colosseum & Vatican, Swiss Alps and London.',
    image: '/images/europe-marvels-12d11n.jpg',
    highlights: [
      'Paris Eiffel Tower & Louvre Museum',
      'Lake Como & Bellagio Scenic Cruise',
      'Venice Gondola & Murano Glass Island',
      'Florence Duomo & Leaning Tower of Pisa',
      'Rome Colosseum & Vatican Sistine Chapel',
      'London Double Decker & Swiss Alps Titlis'
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    flag: '🇮🇩',
    region: 'Tanah Lot, Lempuyang, Ubud & Nusa Penida',
    tagline: 'Tanah Lot ocean sunset temple & watersports, Lempuyang Gate of Heaven, Uluwatu cliff temple & Kecak fire dance, Kintamani Volcano, and Nusa Penida island speedboat tours.',
    image: '/images/bali.jpg',
    highlights: [
      'Tanah Lot & Lempuyang "Gate of Heaven"',
      'Uluwatu Cliff Temple & Sunset Kecak Fire Dance',
      'Jimbaran Beachfront Seafood BBQ Dinner',
      'Kintamani Mount Batur Volcano & Batur Lake',
      'Tanjung Benoa Watersports & Melasti Beach',
      'Nusa Penida Fast Boat: Kelingking & Broken Beach'
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    region: 'Hanoi, Halong Bay, Da Nang & Ho Chi Minh',
    tagline: 'Halong Bay luxury cruise, Ninh Binh Trang An caves, Da Nang Ba Na Hills Golden Bridge, Hoi An ancient lantern town & Ho Chi Minh Mekong Delta.',
    image: '/images/vietnam.jpg',
    highlights: [
      'Halong Bay Cruise, Kayaking & Titov Island Peak',
      'Ninh Binh: Hoa Lu Ancient Capital & Trang An Caves',
      'Da Nang Ba Na Hills Cable Car & Golden Bridge',
      'Hoi An Ancient Lantern Town & Coconut Basket Boat',
      'Ho Chi Minh City, Saigon River Cruise & Cu Chi Tunnels',
      'Mekong Delta River 4 Islands & Vung Tau Beach'
    ]
  }
];

interface AllToursPageProps {
  packages: TourPackage[];
  currency: 'LKR' | 'USD';
  selectedCountryId: string | null;
  onSelectCountry: (countryId: string | null) => void;
  onBackToHome: () => void;
  onBookNow: (pkg: TourPackage) => void;
  onViewDetails: (pkg: TourPackage) => void;
}

export const AllToursPage: React.FC<AllToursPageProps> = ({
  packages,
  currency,
  selectedCountryId,
  onSelectCountry,
  onBackToHome,
  onBookNow,
  onViewDetails
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Reset category filter and scroll to top on country selection change
  useEffect(() => {
    setActiveCategory('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCountryId]);

  // Find info of the active country if selected
  const activeCountry = COUNTRY_DIRECTORY.find(c => c.id === selectedCountryId) || COUNTRY_DIRECTORY[0];

  // Packages belonging to the currently selected country
  const countryPackages = selectedCountryId
    ? packages.filter(pkg => 
        pkg.country.toLowerCase() === activeCountry.name.toLowerCase() ||
        pkg.country.toLowerCase().includes(activeCountry.name.toLowerCase())
      )
    : packages;

  // Filter country packages based on active category and search query
  const displayedPackages = countryPackages.filter((pkg) => {
    // Category filter
    if (activeCategory !== 'all' && pkg.category !== activeCategory) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(q);
      const matchTagline = pkg.tagline.toLowerCase().includes(q);
      const matchHighlights = pkg.highlights.some(h => h.toLowerCase().includes(q));
      const matchInclusions = pkg.inclusions.some(inc => inc.toLowerCase().includes(q));
      const matchItinerary = pkg.itinerary.some(it => it.title.toLowerCase().includes(q) || it.description.toLowerCase().includes(q));
      if (!matchName && !matchTagline && !matchHighlights && !matchInclusions && !matchItinerary) {
        return false;
      }
    }

    return true;
  });

  // Category counts helper
  const getCategoryCount = (countryName: string, catId: string) => {
    return packages.filter(p => 
      (p.country.toLowerCase() === countryName.toLowerCase() || p.country.toLowerCase().includes(countryName.toLowerCase())) && 
      p.category === catId
    ).length;
  };

  return (
    <div className="all-tours-page">
      {/* 1. Sticky Navigation Sub-Header */}
      <div className="all-tours-top-nav">
        <div className="container all-tours-nav-inner">
          <div className="all-tours-nav-left">
            {selectedCountryId ? (
              <button 
                type="button" 
                onClick={() => onSelectCountry(null)}
                className="back-to-home-btn"
                id="back-to-country-select-btn"
              >
                <ArrowLeft size={18} />
                <span>← Back to Select Country</span>
              </button>
            ) : (
              <button 
                type="button" 
                onClick={onBackToHome}
                className="back-to-home-btn"
                id="back-to-home-btn"
              >
                <ArrowLeft size={18} />
                <span>Back to Home</span>
              </button>
            )}

            <span className="all-tours-nav-sep">/</span>

            {/* Breadcrumb */}
            <div className="all-tours-breadcrumbs">
              {!selectedCountryId ? (
                <span className="breadcrumb-current">Select Your Country</span>
              ) : (
                <>
                  <button 
                    type="button" 
                    onClick={() => onSelectCountry(null)}
                    className="breadcrumb-link"
                  >
                    Select Your Country
                  </button>
                  <span className="breadcrumb-arrow">›</span>
                  <span className="breadcrumb-current">
                    {activeCountry.flag} {activeCountry.name} ({countryPackages.length} Tours)
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Search */}
          <div className="all-tours-nav-right">
            <div className="all-tours-search-box">
              <Search size={16} className="search-box-icon" />
              <input
                type="text"
                placeholder={
                  selectedCountryId === 'india' 
                    ? "Search Kashmir, Taj Mahal, Kerala, Shimla, Chennai..." 
                    : selectedCountryId === 'singapore'
                      ? "Search Gardens by the Bay, Universal Studios..."
                      : selectedCountryId === 'malaysia'
                        ? "Search Genting, Batu Caves, Sunway Lagoon..."
                        : selectedCountryId === 'dubai'
                          ? "Search Burj Khalifa, Marina Cruise, Miracle Garden..."
                          : selectedCountryId === 'europe'
                            ? "Search Paris, Milan, Como, Venice, Florence, Rome, London..."
                            : selectedCountryId === 'thailand' 
                              ? "Search Safari World, Cruise, Coral Island..." 
                              : "Search destination or tour name..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="all-tours-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          VIEW 1: SELECT YOUR COUNTRY (WHEN NO COUNTRY IS SELECTED)
          ======================================================== */}
      {!selectedCountryId ? (
        <>
          {/* Page Hero Banner */}
          <div className="all-tours-hero">
            <div className="container all-tours-hero-inner">
              <RevealOnScroll animation="fade-down" duration={700}>
                <div className="all-tours-pill">
                  <Compass size={15} className="text-amber-300" />
                  <span>NATIONWIDE TRAVELS • DESTINATION DIRECTORY</span>
                </div>

                <h1 className="all-tours-hero-title">
                  Select Your <span className="highlight-gradient">Country</span>
                </h1>

                <p className="all-tours-hero-sub">
                  Choose your destination country below to view verified day-by-day itineraries, hotel inclusions, private transfers, and customized quotations.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Main Country Selection Grid */}
          <div className="container all-tours-content-wrap">
            <div className="country-selector-section">
              <div className="country-selector-header">
                <div>
                  <h2 className="country-selector-title">Available Tour Destinations</h2>
                  <p className="country-selector-subtitle">
                    Click on any country card below to explore official tour packages and day-by-day schedules.
                  </p>
                </div>
                <div className="country-selector-count">
                  <span>{COUNTRY_DIRECTORY.length} Destinations</span> • <span>{packages.length} Verified Packages</span>
                </div>
              </div>

              <div className="country-cards-grid">
                {/* Dynamically Render All Destination Cards */}
                {COUNTRY_DIRECTORY.map((country, idx) => {
                  const countryTourCount = packages.filter(
                    p => p.country.toLowerCase() === country.name.toLowerCase() ||
                         p.country.toLowerCase().includes(country.name.toLowerCase())
                  ).length;

                  return (
                    <RevealOnScroll 
                      key={country.id} 
                      animation="fade-up" 
                      delay={(idx % 3) * 100} 
                      duration={700}
                    >
                      <div 
                        className="country-showcase-card active-destination-card"
                        onClick={() => onSelectCountry(country.id)}
                        id={`country-card-${country.id}`}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="country-card-image-wrap">
                          <img src={country.image} alt={country.name} className="country-card-image" />
                          <div className="country-card-image-overlay"></div>
                          
                          <div className="country-card-top-badges">
                            <span className="country-card-flag">{country.flag}</span>
                            <span className="country-card-count-badge">
                              {countryTourCount} {countryTourCount === 1 ? 'Tour Package' : 'Tour Packages'}
                            </span>
                          </div>

                          <div className="country-card-bottom-info">
                            <span className="country-card-region">{country.region}</span>
                            <h3 className="country-card-name">{country.name}</h3>
                          </div>
                        </div>

                        <div className="country-card-body">
                          <p className="country-card-tagline">{country.tagline}</p>
                          
                          <div className="country-card-highlights">
                            {country.highlights.map((h, i) => (
                              <span key={i} className="country-highlight-chip">
                                ✓ {h}
                              </span>
                            ))}
                          </div>

                          <div className="country-card-footer">
                            <span className="country-card-action-text font-bold text-blue-600">
                              Explore {country.name} Packages ({countryTourCount} {countryTourCount === 1 ? 'Tour' : 'Tours'})
                            </span>
                            <div className="country-card-arrow-circle">
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealOnScroll>
                  );
                })}

                {/* Custom / Other Destinations Worldwide Travel Desk Card */}
                <RevealOnScroll animation="fade-up" delay={COUNTRY_DIRECTORY.length * 60} duration={700}>
                  <div 
                    className="country-showcase-card custom-inquiry-destination-card"
                    style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
                  >
                    <div className="country-card-image-wrap" style={{ height: '210px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                      <div className="p-6 h-full flex flex-col justify-between text-white" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', gap: '8px', fontSize: '1.8rem' }}>
                          <span>🇲🇻</span>
                          <span>🇮🇩</span>
                          <span>🇻🇳</span>
                          <span>🇯🇵</span>
                          <span>🇦🇺</span>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.08em' }}>
                            Tailor-Made Holidays
                          </span>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                            Other Worldwide Destinations
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="country-card-body">
                      <p className="country-card-tagline">
                        Planning trips to Maldives, Vietnam, Japan, Australia, or China? Our travel specialists design tailor-made packages with flight bookings, VIP hotels, and fast-track visas.
                      </p>
                      
                      <div className="country-card-highlights">
                        <span className="country-highlight-chip">✓ Custom Flight Booking</span>
                        <span className="country-highlight-chip">✓ Fast-Track Visas</span>
                        <span className="country-highlight-chip">✓ VIP Hotel Stays</span>
                      </div>

                      <div className="country-card-footer">
                        <a 
                          href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20tour%20package"
                          target="_blank"
                          rel="noreferrer"
                          className="country-card-action-text text-emerald-600 font-bold"
                          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <PhoneCall size={14} />
                          <span>WhatsApp Travel Desk</span>
                        </a>
                        <div className="country-card-arrow-circle" style={{ background: '#ecfdf5', color: '#059669' }}>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ========================================================
            VIEW 2: COUNTRY PACKAGES LIST (WHEN A COUNTRY IS SELECTED)
            ======================================================== */
        <>
          {/* Page Hero Banner */}
          <div className="all-tours-hero">
            <div className="container all-tours-hero-inner">
              <RevealOnScroll animation="fade-down" duration={700}>
                <div className="all-tours-pill">
                  <Compass size={15} className="text-amber-300" />
                  <span>NATIONWIDE TRAVELS • OFFICIAL {activeCountry.name.toUpperCase()} PACKAGES</span>
                </div>

                <h1 className="all-tours-hero-title">
                  <span>{activeCountry.flag} {activeCountry.name}</span> Tour Packages
                </h1>

                <p className="all-tours-hero-sub">
                  {activeCountry.tagline}
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="container all-tours-content-wrap">
            <div className="country-packages-view">
              {/* Back to Choose Country button bar */}
              <div className="country-view-header-bar" style={{ marginBottom: '18px' }}>
                <button 
                  type="button" 
                  onClick={() => onSelectCountry(null)}
                  className="btn-back-countries"
                  id="btn-back-to-countries-view"
                >
                  <ArrowLeft size={16} />
                  <span>← Choose Another Country</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe2 size={16} className="text-blue-600" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Showing {countryPackages.length} Verified Itineraries
                  </span>
                </div>
              </div>

              {/* Active Country Banner Details */}
              <div className="active-country-banner-card">
                <div className="banner-left-info">
                  <span className="active-country-flag">{activeCountry.flag}</span>
                  <div>
                    <div className="active-country-title-row">
                      <h2 className="active-country-title">{activeCountry.name} ({activeCountry.region})</h2>
                      <span className="active-country-tours-tag">
                        {countryPackages.length} {countryPackages.length === 1 ? 'Package' : 'Packages'} Available
                      </span>
                    </div>
                    <p className="active-country-summary">{activeCountry.tagline}</p>

                    {/* Features row */}
                    <div className="active-country-features-row">
                      <span className="feature-item">
                        <CheckCircle2 size={15} className="text-emerald-500" />
                        <span>Private Vehicles & Scheduled Transport</span>
                      </span>
                      <span className="feature-item">
                        <Calendar size={15} className="text-blue-500" />
                        <span>Travel Season: 2026 – 2027</span>
                      </span>
                      <span className="feature-item">
                        <Users size={15} className="text-purple-500" />
                        <span>Minimum 2 Pax per Booking</span>
                      </span>
                      <span className="feature-item">
                        <Sparkles size={15} className="text-amber-500" />
                        <span>Verified Inclusions & Instant Quotation</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="banner-right-cta">
                  <a 
                    href={`https://wa.me/94716891891?text=${encodeURIComponent(`Hello Nationwide.lk, I would like to inquire about ${activeCountry.name} tour packages.`)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-whatsapp-inquiry"
                  >
                    <PhoneCall size={16} />
                    <span>WhatsApp Travel Desk</span>
                  </a>
                </div>
              </div>

              {/* Dynamic Category Filter Tabs per Country */}
              {selectedCountryId === 'thailand' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Thailand Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('bangkok')}
                    className={`country-switcher-pill ${activeCategory === 'bangkok' ? 'active' : ''}`}
                  >
                    <span>Bangkok City Breaks</span>
                    <span className="pill-count">{getCategoryCount('thailand', 'bangkok')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('bangkok-pattaya')}
                    className={`country-switcher-pill ${activeCategory === 'bangkok-pattaya' ? 'active' : ''}`}
                  >
                    <span>Bangkok & Pattaya Combos</span>
                    <span className="pill-count">{getCategoryCount('thailand', 'bangkok-pattaya')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('bangkok-phuket')}
                    className={`country-switcher-pill ${activeCategory === 'bangkok-phuket' ? 'active' : ''}`}
                  >
                    <span>Bangkok & Phuket Combos</span>
                    <span className="pill-count">{getCategoryCount('thailand', 'bangkok-phuket')}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'india' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All India Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-kashmir')}
                    className={`country-switcher-pill ${activeCategory === 'india-kashmir' ? 'active' : ''}`}
                  >
                    <span>Kashmir & Delhi</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-kashmir')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-golden-triangle')}
                    className={`country-switcher-pill ${activeCategory === 'india-golden-triangle' ? 'active' : ''}`}
                  >
                    <span>Golden Triangle & Taj Mahal</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-golden-triangle')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-north')}
                    className={`country-switcher-pill ${activeCategory === 'india-north' ? 'active' : ''}`}
                  >
                    <span>Shimla & Manali (Himalayas)</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-north')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-kerala')}
                    className={`country-switcher-pill ${activeCategory === 'india-kerala' ? 'active' : ''}`}
                  >
                    <span>Kerala Backwaters</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-kerala')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-pilgrimage')}
                    className={`country-switcher-pill ${activeCategory === 'india-pilgrimage' ? 'active' : ''}`}
                  >
                    <span>Buddhist Pilgrimage</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-pilgrimage')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('india-chennai')}
                    className={`country-switcher-pill ${activeCategory === 'india-chennai' ? 'active' : ''}`}
                  >
                    <span>Chennai, Thirupathi & Velankanni</span>
                    <span className="pill-count">{getCategoryCount('india', 'india-chennai')}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'malaysia' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Malaysia Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('malaysia-tours')}
                    className={`country-switcher-pill ${activeCategory === 'malaysia-tours' ? 'active' : ''}`}
                  >
                    <span>KL, Genting & Sunway Lagoon</span>
                    <span className="pill-count">{getCategoryCount('malaysia', 'malaysia-tours')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('singapore-malaysia')}
                    className={`country-switcher-pill ${activeCategory === 'singapore-malaysia' ? 'active' : ''}`}
                  >
                    <span>Singapore & Malaysia Combos</span>
                    <span className="pill-count">{getCategoryCount('malaysia', 'singapore-malaysia')}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'dubai' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Dubai Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('dubai-tours')}
                    className={`country-switcher-pill ${activeCategory === 'dubai-tours' ? 'active' : ''}`}
                  >
                    <span>Burj Khalifa, Desert Safari & Miracle Garden</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'singapore' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Singapore Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('singapore-tours')}
                    className={`country-switcher-pill ${activeCategory === 'singapore-tours' ? 'active' : ''}`}
                  >
                    <span>Universal Studios & Gardens by the Bay</span>
                    <span className="pill-count">{getCategoryCount('singapore', 'singapore-tours')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('singapore-malaysia')}
                    className={`country-switcher-pill ${activeCategory === 'singapore-malaysia' ? 'active' : ''}`}
                  >
                    <span>Singapore & Malaysia Combos</span>
                    <span className="pill-count">{getCategoryCount('singapore', 'singapore-malaysia')}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'europe' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Europe Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('europe-marvels')}
                    className={`country-switcher-pill ${activeCategory === 'europe-marvels' ? 'active' : ''}`}
                  >
                    <span>UK, France, Swiss & Italy (12D 11N)</span>
                    <span className="pill-count">{getCategoryCount('europe', 'europe-marvels')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('europe-paris-italy')}
                    className={`country-switcher-pill ${activeCategory === 'europe-paris-italy' ? 'active' : ''}`}
                  >
                    <span>Paris, Milan, Venice, Florence & Rome (12D 11N)</span>
                    <span className="pill-count">{getCategoryCount('europe', 'europe-paris-italy')}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'bali' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Bali Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('bali-tours')}
                    className={`country-switcher-pill ${activeCategory === 'bali-tours' ? 'active' : ''}`}
                  >
                    <span>Uluwatu, Kintamani & Nusa Penida</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                </div>
              ) : selectedCountryId === 'vietnam' ? (
                <div className="country-switcher-tabs mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`country-switcher-pill ${activeCategory === 'all' ? 'active' : ''}`}
                  >
                    <span>All Vietnam Tours</span>
                    <span className="pill-count">{countryPackages.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('vietnam-hanoi')}
                    className={`country-switcher-pill ${activeCategory === 'vietnam-hanoi' ? 'active' : ''}`}
                  >
                    <span>Hanoi & Halong Bay Cruise</span>
                    <span className="pill-count">{getCategoryCount('vietnam', 'vietnam-hanoi')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('vietnam-danang')}
                    className={`country-switcher-pill ${activeCategory === 'vietnam-danang' ? 'active' : ''}`}
                  >
                    <span>Da Nang, Hoi An & Ba Na Hills</span>
                    <span className="pill-count">{getCategoryCount('vietnam', 'vietnam-danang')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('vietnam-hcmc')}
                    className={`country-switcher-pill ${activeCategory === 'vietnam-hcmc' ? 'active' : ''}`}
                  >
                    <span>Ho Chi Minh & Mekong Delta</span>
                    <span className="pill-count">{getCategoryCount('vietnam', 'vietnam-hcmc')}</span>
                  </button>
                </div>
              ) : null}

              {/* Grid of Packages */}
              {displayedPackages.length > 0 ? (
                <div className="packages-grid mt-6">
                  {displayedPackages.map((pkg, index) => (
                    <RevealOnScroll 
                      key={pkg.id} 
                      animation="fade-up" 
                      delay={(index % 4) * 100} 
                      duration={650}
                    >
                      <PackageCard
                        pkg={pkg}
                        currency={currency}
                        onBookNow={onBookNow}
                        onViewDetails={onViewDetails}
                      />
                    </RevealOnScroll>
                  ))}
                </div>
              ) : (
                <div className="no-results-box mt-8">
                  <MapPin size={48} className="no-results-icon" />
                  <h3>No tour packages found matching "{searchQuery}"</h3>
                  <p>Try searching with another keyword or clear the search to view all {activeCountry.name} packages.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="btn-primary mt-4"
                  >
                    Clear Filter & Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllToursPage;
