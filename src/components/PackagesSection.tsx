import React, { useState } from 'react';
import { PackageCard } from './PackageCard';
import { RevealOnScroll } from './RevealOnScroll';
import type { TourPackage, FilterState } from '../types';
import { Globe, RefreshCw, ArrowRight, Compass, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  packages: TourPackage[];
  filter: FilterState;
  currency: 'LKR' | 'USD';
  onResetFilters: () => void;
  onBookNow: (pkg: TourPackage) => void;
  onViewDetails: (pkg: TourPackage) => void;
  onViewAllTours: (countryCode?: string) => void;
  onWatchVideo?: (videoId: 'dubai' | 'velankanni') => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  filter,
  currency,
  onResetFilters,
  onBookNow,
  onViewDetails,
  onViewAllTours,
  onWatchVideo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Featured (4 Packages)' },
    { id: 'bangkok', label: 'Bangkok City Tours' },
    { id: 'bangkok-pattaya', label: 'Bangkok & Pattaya Combos' },
  ];

  // Landing page displays strictly 4 featured packages from the real itineraries.
  // The full collection of all packages is accessible via "View All Tours".
  const filteredPackages = packages.filter((pkg) => {
    // Keyword match
    if (filter.keyword.trim() !== '') {
      const q = filter.keyword.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(q);
      const matchCountry = pkg.country.toLowerCase().includes(q);
      const matchTagline = pkg.tagline.toLowerCase().includes(q);
      const matchHighlights = pkg.highlights.some(h => h.toLowerCase().includes(q));
      if (!matchName && !matchCountry && !matchTagline && !matchHighlights) {
        return false;
      }
    }

    // Destination match
    if (filter.destination !== '') {
      const destLower = filter.destination.toLowerCase();
      const matchCountry = pkg.country.toLowerCase().includes(destLower);
      const matchName = pkg.name.toLowerCase().includes(destLower);
      const matchTagline = pkg.tagline.toLowerCase().includes(destLower);
      if (!matchCountry && !matchName && !matchTagline) {
        return false;
      }
    }

    // Category match
    if (selectedCategory !== 'all' && pkg.category !== selectedCategory) {
      return false;
    }

    return true;
  }).slice(0, 4); // STRICT LIMIT: EXACTLY 4 PACKAGES ON LANDING PAGE

  return (
    <section id="destinations" className="packages-section">
      <div className="container">
        {/* Section Header with Scroll Reveal */}
        <RevealOnScroll animation="fade-down" duration={700}>
          <div className="section-header">
            <div className="section-title-wrap">
              <h2 className="section-title">Popular Tour Packages</h2>
              <span className="section-title-slash">/</span>
              <button
                type="button"
                onClick={() => onViewAllTours()}
                className="section-title-link view-all-link-special"
                id="view-all-tours-header-btn"
                title="View All Tours"
              >
                <Globe size={18} />
                <span>View All Tours</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="category-tabs-container">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Filter status indicator */}
        {(filter.keyword || filter.destination) && (
          <RevealOnScroll animation="fade" duration={500}>
            <div className="active-filters-bar">
              <span>
                Showing results for: <strong>{filter.keyword || filter.destination}</strong> ({filteredPackages.length} tours found)
              </span>
              <button 
                type="button" 
                onClick={onResetFilters}
                className="reset-filter-btn"
              >
                <RefreshCw size={14} />
                Reset Filters
              </button>
            </div>
          </RevealOnScroll>
        )}

        {/* Tour Cards Grid: EXACTLY 4 PACKAGES IN ONE ROW */}
        {filteredPackages.length > 0 ? (
          <div className="packages-grid">
            {filteredPackages.map((pkg, index) => (
              <RevealOnScroll 
                key={pkg.id} 
                animation="fade-up" 
                delay={index * 110} 
                duration={700}
              >
                <PackageCard
                  pkg={pkg}
                  currency={currency}
                  onBookNow={onBookNow}
                  onViewDetails={onViewDetails}
                  onWatchVideo={onWatchVideo}
                />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <Globe size={48} className="no-results-icon" />
            <h3>No tour packages found matching your search</h3>
            <p>Try clearing your keywords or destination filter to explore our full catalog.</p>
            <button
              type="button"
              onClick={onResetFilters}
              className="btn-primary mt-4"
            >
              Show All Tours
            </button>
          </div>
        )}

        {/* Bottom Banner: All Tours Directory Callout */}
        <RevealOnScroll animation="scale-up" duration={700}>
          <div className="explore-all-countries-banner">
            <div className="explore-banner-content">
              <div className="explore-banner-pill">
                <Sparkles size={14} className="text-amber-400" />
                <span>COMPLETE TOUR DIRECTORY</span>
              </div>
              <h3 className="explore-banner-title">
                Explore All {packages.length} Verified Tour Itineraries
              </h3>
              <p className="explore-banner-desc">
                Browse our complete collection of tailor-made Thailand holidays: Bangkok city breaks, Chao Phraya dinner cruises, Safari World excursions, and Bangkok & Pattaya 7-Day grand combos.
              </p>
            </div>

            <div className="explore-banner-action">
              <button 
                type="button" 
                onClick={() => onViewAllTours()}
                className="btn-primary explore-banner-btn"
                id="browse-tours-country-btn"
              >
                <Compass size={18} />
                <span>View All Tours</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PackagesSection;
