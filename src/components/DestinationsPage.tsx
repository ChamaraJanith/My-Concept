import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Calendar, 
  Compass, 
  Plane, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Clock, 
  FileText
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { COUNTRY_DIRECTORY } from './AllToursPage';
import type { TourPackage } from '../types';

interface DestinationsPageProps {
  packages: TourPackage[];
  onSelectCountry: (countryId: string) => void;
  onBackToHome: () => void;
  onPlanTrip: () => void;
  onOpenPromoVideo?: (videoId: 'dubai' | 'velankanni') => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  packages,
  onSelectCountry,
  onBackToHome,
  onPlanTrip,
  onOpenPromoVideo
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extended destination meta details for Sri Lankan travelers
  const destinationMeta: Record<string, {
    flightTime: string;
    visaStatus: string;
    bestSeason: string;
    currencyName: string;
    description: string;
  }> = {
    thailand: {
      flightTime: '3h 30m direct (CMB to BKK)',
      visaStatus: 'Visa-Free / Easy Entry for Sri Lankans',
      bestSeason: 'November to April',
      currencyName: 'Thai Baht (THB)',
      description: 'The ultimate tropical getaway with vibrant street food, Bangkok shopping paradises, Chao Phraya luxury dinner cruises, Safari World, and Phuket turquoise beaches.'
    },
    india: {
      flightTime: '1h 15m to 4h (Chennai, Delhi, Srinagar)',
      visaStatus: 'Express Online e-Tourist Visa (30 Days)',
      bestSeason: 'September to May',
      currencyName: 'Indian Rupee (INR)',
      description: 'From romantic snowy Kashmir Dal Lake houseboats and the marble wonder of the Taj Mahal to sacred Buddhist Dambadiva pilgrimages and Chennai shopping sprees.'
    },
    singapore: {
      flightTime: '4h 00m direct (CMB to SIN)',
      visaStatus: 'Online Electronic Visa (e-Visa)',
      bestSeason: 'Year-Round Tropical',
      currencyName: 'Singapore Dollar (SGD)',
      description: 'Futuristic Gardens by the Bay, Impression of Monet exhibitions, Sentosa Universal Studios, Marina Bay Sands, and world-class luxury shopping.'
    },
    malaysia: {
      flightTime: '3h 45m direct (CMB to KUL)',
      visaStatus: 'Electronic Visa (eVisa) / MDAC Arrival',
      bestSeason: 'Year-Round Warm & Sunny',
      currencyName: 'Malaysian Ringgit (MYR)',
      description: 'Iconic Petronas Twin Towers, cool mountain air at Genting Highlands with Awana cable car, Batu Caves sacred steps, and Sunway Lagoon water theme parks.'
    },
    dubai: {
      flightTime: '4h 30m direct (CMB to DXB)',
      visaStatus: 'Pre-Arranged 30-Day e-Tourist Visa',
      bestSeason: 'October to April',
      currencyName: 'UAE Dirham (AED)',
      description: 'The golden jewel of the Middle East featuring Burj Khalifa 124th floor, red-dune 4x4 desert safaris with belly dance BBQs, Dubai Marina yachts, and Ferrari World.'
    },
    europe: {
      flightTime: '10h - 12h (via Gulf hubs to CDG/FCO/LHR)',
      visaStatus: 'Schengen Visa (Type C) / UK Standard Visitor',
      bestSeason: 'April to October',
      currencyName: 'Euro (EUR) & British Pound (GBP)',
      description: 'Grand multi-country journeys across Paris Eiffel Tower, Swiss Alps Titlis snow point, Lake Como, Venice Gondolas, Florence, and the Colosseum in Rome.'
    },
    bali: {
      flightTime: '5h 30m to 7h (via KUL/SIN to DPS)',
      visaStatus: 'Visa on Arrival (e-VOA) 30 Days',
      bestSeason: 'April to October',
      currencyName: 'Indonesian Rupiah (IDR)',
      description: 'Tropical paradise of sacred cliff temples, Tanah Lot sunset, Lempuyang Gate of Heaven, Ubud rice terraces, and Nusa Penida turquoise fast-boat adventures.'
    },
    vietnam: {
      flightTime: '5h 30m (via BKK/KUL/SIN to HAN/SGN)',
      visaStatus: 'Official 90-Day Electronic Visa (e-Visa)',
      bestSeason: 'September to April',
      currencyName: 'Vietnamese Dong (VND)',
      description: 'Emerald waters and limestone islands of Halong Bay luxury cruises, Da Nang Ba Na Hills Golden Hand Bridge, and Hoi An magical lantern village.'
    }
  };

  const regions = [
    { id: 'all', label: 'All Destinations' },
    { id: 'southeast-asia', label: 'Southeast Asia' },
    { id: 'middle-east', label: 'Middle East' },
    { id: 'europe', label: 'Europe' },
    { id: 'south-asia', label: 'South Asia' },
    { id: 'island-escapes', label: 'Island Escapes' }
  ];

  // Filter countries
  const filteredCountries = COUNTRY_DIRECTORY.filter((country) => {
    // Region match
    if (selectedRegion === 'southeast-asia') {
      if (!['thailand', 'singapore', 'malaysia', 'vietnam'].includes(country.id)) return false;
    } else if (selectedRegion === 'middle-east') {
      if (country.id !== 'dubai') return false;
    } else if (selectedRegion === 'europe') {
      if (country.id !== 'europe') return false;
    } else if (selectedRegion === 'south-asia') {
      if (country.id !== 'india') return false;
    } else if (selectedRegion === 'island-escapes') {
      if (!['bali', 'thailand'].includes(country.id)) return false;
    }

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = country.name.toLowerCase().includes(q);
      const matchRegion = country.region.toLowerCase().includes(q);
      const matchTagline = country.tagline.toLowerCase().includes(q);
      const matchHighlights = country.highlights.some(h => h.toLowerCase().includes(q));
      if (!matchName && !matchRegion && !matchTagline && !matchHighlights) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="destinations-page page-container-root">
      {/* 1. Page Header Breadcrumbs & Back Navigation */}
      <div className="page-subnav-bar">
        <div className="container subnav-inner">
          <button 
            type="button" 
            onClick={onBackToHome}
            className="back-to-home-btn"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>

          <div className="page-breadcrumbs">
            <button type="button" onClick={onBackToHome} className="breadcrumb-crumb">Home</button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Destinations</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Banner */}
      <section className="page-hero-banner destinations-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <Compass size={15} />
                <span>GLOBAL DIRECTORY</span>
              </span>
              <h1 className="page-main-title">
                Explore World Destinations with Nationwide<span className="gold-dot">.lk</span>
              </h1>
              <p className="page-lead-text">
                From the bustling shopping centers of Bangkok and the futuristic skyline of Singapore to the snowy peaks of Kashmir, 
                desert safaris in Dubai, and the historic charm of Europe. Select your dream destination to explore curated packages.
              </p>
            </div>
          </RevealOnScroll>

          {/* Search & Filter Bar */}
          <div className="destinations-filter-wrapper">
            <div className="destinations-search-box">
              <Search className="search-icon-svg" size={20} />
              <input 
                type="text" 
                placeholder="Search destination, city or attraction (e.g. Dubai, Halong Bay, Kashmir)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="destination-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="region-pills-row">
              {regions.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegion(region.id)}
                  className={`region-pill-btn ${selectedRegion === region.id ? 'active' : ''}`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Destination Country Cards Grid */}
      <section className="destinations-grid-section">
        <div className="container">
          <div className="destinations-cards-layout">
            {filteredCountries.map((country, index) => {
              const meta = destinationMeta[country.id] || {
                flightTime: 'Direct / 1-Stop flight',
                visaStatus: 'Tourist Visa available',
                bestSeason: 'Peak Season Now',
                currencyName: 'Local Currency',
                description: country.tagline
              };
              const packageCount = packages.filter(p => 
                p.country.toLowerCase() === country.name.toLowerCase() || 
                p.country.toLowerCase().includes(country.name.toLowerCase())
              ).length;

              return (
                <RevealOnScroll 
                  key={country.id} 
                  animation="fade-up" 
                  delay={(index % 2) * 120} 
                  duration={750}
                >
                  <div className="destination-country-card">
                    {/* Image Banner */}
                    <div className="dest-card-image-wrap">
                      <img 
                        src={country.image} 
                        alt={country.name} 
                        className="dest-card-image"
                        loading="lazy" 
                      />
                      <div className="dest-image-gradient-overlay" />
                      
                      <div className="dest-card-top-tags">
                        <span className="dest-flag-badge">
                          <span className="flag-emoji">{country.flag}</span>
                          <span className="flag-name">{country.name}</span>
                        </span>
                        <span className="dest-count-tag">
                          {packageCount > 0 ? `${packageCount} Packages` : 'Custom Tours'}
                        </span>
                      </div>

                      <div className="dest-region-subtitle">
                        <MapPin size={14} />
                        <span>{country.region}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="dest-card-body">
                      <p className="dest-description-paragraph">
                        {meta.description}
                      </p>

                      {/* Travel Quick Meta */}
                      <div className="dest-quick-meta-grid">
                        <div className="meta-info-item">
                          <Plane size={15} className="meta-icon" />
                          <div>
                            <span className="meta-label">Flight Time</span>
                            <span className="meta-value">{meta.flightTime}</span>
                          </div>
                        </div>

                        <div className="meta-info-item">
                          <ShieldCheck size={15} className="meta-icon text-emerald-600" />
                          <div>
                            <span className="meta-label">Sri Lankan Visa</span>
                            <span className="meta-value text-emerald-700 font-semibold">{meta.visaStatus}</span>
                          </div>
                        </div>

                        <div className="meta-info-item">
                          <Calendar size={15} className="meta-icon" />
                          <div>
                            <span className="meta-label">Best Season</span>
                            <span className="meta-value">{meta.bestSeason}</span>
                          </div>
                        </div>

                        <div className="meta-info-item">
                          <Clock size={15} className="meta-icon" />
                          <div>
                            <span className="meta-label">Currency</span>
                            <span className="meta-value">{meta.currencyName}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights Pills */}
                      <div className="dest-highlights-box">
                        <span className="highlights-heading">Top Sights & Inclusions:</span>
                        <div className="highlights-tags-cloud">
                          {country.highlights.map((hl, i) => (
                            <span key={i} className="highlight-tag-chip">
                              ✓ {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="dest-card-actions-row">
                        <button
                          type="button"
                          onClick={() => onSelectCountry(country.id)}
                          className="btn-primary dest-view-tours-btn"
                        >
                          <span>Explore {country.name} Packages</span>
                          <ArrowRight size={16} />
                        </button>

                        {country.id === 'dubai' && onOpenPromoVideo && (
                          <button
                            type="button"
                            onClick={() => onOpenPromoVideo('dubai')}
                            className="dest-video-btn"
                            title="Watch Dubai 4K Video Tour"
                          >
                            <Play size={15} />
                            <span>4K Video</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Travel Advisory for Sri Lankan Voyagers */}
      <section className="dest-advisory-section">
        <div className="container">
          <div className="advisory-card-banner">
            <div className="advisory-icon-circle">
              <FileText size={32} />
            </div>
            <div className="advisory-text-block">
              <h3>Looking for a Destination Not Listed Above?</h3>
              <p>
                We also organize custom private holiday itineraries for <strong>Japan, South Korea, Turkey, Azerbaijan, Georgia, Egypt, Maldives, 
                Australia, and the United Kingdom</strong>. Contact our international tour desk for personalized quotes.
              </p>
            </div>
            <button 
              type="button" 
              onClick={onPlanTrip}
              className="btn-primary advisory-action-btn"
            >
              <span>Custom Trip Inquiry</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
