import React, { useRef, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Check, 
  Ban, 
  Sparkles, 
  MapPin, 
  Moon, 
  Play, 
  Clock, 
  Compass, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import type { TourPackage } from '../types';

interface TourDetailsModalProps {
  pkg: TourPackage | null;
  currency: 'LKR' | 'USD';
  scrollToItinerary?: boolean;
  onClose: () => void;
  onBookNow: (pkg: TourPackage) => void;
  onWatchVideo?: (videoId: 'dubai' | 'velankanni') => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  pkg,
  currency,
  scrollToItinerary = false,
  onClose,
  onBookNow,
  onWatchVideo
}) => {
  const modalScrollRef = useRef<HTMLDivElement | null>(null);
  const itinerarySectionRef = useRef<HTMLDivElement | null>(null);
  const highlightsSectionRef = useRef<HTMLDivElement | null>(null);
  const inclusionsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pkg && scrollToItinerary) {
      // Small timeout to allow DOM mounting and layout to settle
      const timer = setTimeout(() => {
        if (itinerarySectionRef.current) {
          itinerarySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pkg, scrollToItinerary]);

  if (!pkg) return null;

  const formatPrice = (lkrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(lkrAmount / 305);
      return `$${usd.toLocaleString()}`;
    }
    return `LKR ${lkrAmount.toLocaleString()}`;
  };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        ref={modalScrollRef}
        className="modal-container tour-details-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close tour details"
        >
          <X size={20} />
        </button>

        {/* Modal Banner Hero */}
        <div className="tour-modal-hero">
          <img src={pkg.image} alt={pkg.name} className="tour-modal-hero-img" />
          <div className="tour-modal-hero-overlay">
            <span className="tour-modal-country">
              <MapPin size={15} /> {pkg.country}
            </span>
            <h2 className="tour-modal-title">{pkg.name}</h2>
            <p className="tour-modal-tagline">{pkg.tagline}</p>
            <div className="tour-modal-badges">
              <span className="pill-badge-blue">
                <Moon size={13} /> {pkg.nights} Nights / {pkg.days} Days
              </span>
              {pkg.showPrice === false || !pkg.basePriceLKR ? (
                <span className="pill-badge-price price-request-pill">
                  <Sparkles size={13} className="text-amber-300" /> Price on Request
                </span>
              ) : (
                <span className="pill-badge-price">
                  From {formatPrice(pkg.basePriceLKR)} per person
                </span>
              )}
              {pkg.travelDates && (
                <span className="pill-badge-gold">
                  <Calendar size={13} /> Travel: {pkg.travelDates}
                </span>
              )}
              {pkg.minPax && (
                <span className="pill-badge-blue">
                  Min: {pkg.minPax} Pax
                </span>
              )}
              {onWatchVideo && (pkg.id === 'india-velankanni-4d3n' || pkg.id.includes('dubai')) && (
                <button
                  type="button"
                  onClick={() => onWatchVideo(pkg.id === 'india-velankanni-4d3n' ? 'velankanni' : 'dubai')}
                  className="pill-badge-video"
                  id={`modal-watch-video-${pkg.id}`}
                  title="Watch Official Tour Video"
                >
                  <Play size={12} fill="currentColor" /> Watch Tour Video
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Quick-Jump Navigation Tabs */}
        <div className="tour-modal-quick-nav">
          <button 
            type="button" 
            className="quick-nav-pill"
            onClick={() => handleScrollTo(highlightsSectionRef)}
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>Highlights</span>
          </button>
          <button 
            type="button" 
            className="quick-nav-pill active-itinerary-pill"
            onClick={() => handleScrollTo(itinerarySectionRef)}
          >
            <Calendar size={13} className="text-blue-500" />
            <span>Day-by-Day Plan ({pkg.itinerary.length} Days)</span>
          </button>
          <button 
            type="button" 
            className="quick-nav-pill"
            onClick={() => handleScrollTo(inclusionsSectionRef)}
          >
            <Check size={13} className="text-emerald-500" />
            <span>Inclusions</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="tour-modal-body">
          {/* Highlights Section */}
          <div ref={highlightsSectionRef} className="tour-modal-section">
            <h3 className="section-subheading">
              <Sparkles size={18} className="text-amber-500" /> Tour Highlights
            </h3>
            <div className="highlights-tag-cloud">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="highlight-tag">
                  <span>✓ {h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary Section */}
          <div ref={itinerarySectionRef} id="day-by-day-section" className="tour-modal-section itinerary-section-anchor">
            <div className="itinerary-section-header">
              <div className="itinerary-header-left">
                <span className="itinerary-pre-badge">
                  <Compass size={13} />
                  <span>Verified Travel Schedule</span>
                </span>
                <h3 className="section-subheading itinerary-title-highlight">
                  <Calendar size={19} className="text-blue-600" /> Complete Day-by-Day Itinerary
                </h3>
              </div>
              <span className="itinerary-count-tag">
                <Clock size={13} /> {pkg.days} Days / {pkg.nights} Nights
              </span>
            </div>

            <div className="itinerary-timeline">
              {pkg.itinerary.map((item) => (
                <div key={item.day} className="timeline-item">
                  <div className="timeline-day-col">
                    <div className="timeline-day-marker">
                      <span className="marker-day-label">DAY</span>
                      <span className="marker-day-number">{item.day < 10 ? `0${item.day}` : item.day}</span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-card-header">
                      <span className="timeline-day-pill-mobile">Day {item.day}</span>
                      <h4 className="timeline-title">{item.title}</h4>
                    </div>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div ref={inclusionsSectionRef} className="inclusions-grid">
            <div className="inclusions-col">
              <h4 className="inclusions-title text-emerald-700">
                <Check size={18} /> Inclusions:
              </h4>
              <ul className="inc-list">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i}>
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inclusions-col">
              <h4 className="inclusions-title text-rose-700">
                <Ban size={18} /> Exclusions:
              </h4>
              <ul className="exc-list">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i}>
                    <Ban size={14} className="text-rose-400 shrink-0" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="itinerary-support-guarantee">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>
              <strong>Personalized Itinerary Support:</strong> All daily tours and private transfers are managed with 24/7 dedicated Sinhala & English concierge support on WhatsApp.
            </span>
          </div>

          {/* Sticky Bottom Bar */}
          <div className="tour-modal-footer">
            <div className="modal-price-display">
              <span className="price-small-caption">
                {pkg.showPrice === false || !pkg.basePriceLKR ? 'Package Pricing' : 'Starting Package Price'}
              </span>
              <span className="price-big-highlight">
                {pkg.showPrice === false || !pkg.basePriceLKR ? 'Price on Request' : formatPrice(pkg.basePriceLKR)}
              </span>
              {pkg.travelDates && (
                <span className="modal-validity-note">Season: {pkg.travelDates} • Min {pkg.minPax || 2} Pax</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="btn-primary modal-action-book-btn"
              id="modal-book-now-action-btn"
            >
              <span>{pkg.showPrice === false || !pkg.basePriceLKR ? 'INQUIRE / BOOK TOUR' : 'BOOK THIS TOUR NOW'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
