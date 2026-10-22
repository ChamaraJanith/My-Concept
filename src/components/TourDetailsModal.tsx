import React from 'react';
import { X, Calendar, Check, Ban, Sparkles, MapPin, Moon } from 'lucide-react';
import type { TourPackage } from '../types';

interface TourDetailsModalProps {
  pkg: TourPackage | null;
  currency: 'LKR' | 'USD';
  onClose: () => void;
  onBookNow: (pkg: TourPackage) => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  pkg,
  currency,
  onClose,
  onBookNow
}) => {
  if (!pkg) return null;

  const formatPrice = (lkrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(lkrAmount / 305);
      return `$${usd.toLocaleString()}`;
    }
    return `LKR ${lkrAmount.toLocaleString()}`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
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
              <MapPin size={16} /> {pkg.country}
            </span>
            <h2 className="tour-modal-title">{pkg.name}</h2>
            <p className="tour-modal-tagline">{pkg.tagline}</p>
            <div className="tour-modal-badges">
              <span className="pill-badge-blue">
                <Moon size={14} /> {pkg.nights} Nights / {pkg.days} Days
              </span>
              {pkg.showPrice === false || !pkg.basePriceLKR ? (
                <span className="pill-badge-price price-request-pill">
                  <Sparkles size={14} className="text-amber-300" /> Price on Request
                </span>
              ) : (
                <span className="pill-badge-price">
                  From {formatPrice(pkg.basePriceLKR)} per person
                </span>
              )}
              {pkg.travelDates && (
                <span className="pill-badge-gold">
                  <Calendar size={14} /> Travel: {pkg.travelDates}
                </span>
              )}
              {pkg.minPax && (
                <span className="pill-badge-blue">
                  Min: {pkg.minPax} Pax
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="tour-modal-body">
          {/* Highlights */}
          <div className="tour-modal-section">
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

          {/* Itinerary */}
          <div className="tour-modal-section">
            <h3 className="section-subheading">
              <Calendar size={18} className="text-blue-600" /> Day-by-Day Itinerary
            </h3>
            <div className="itinerary-timeline">
              {pkg.itinerary.map((item) => (
                <div key={item.day} className="timeline-item">
                  <div className="timeline-day-marker">Day {item.day}</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="inclusions-grid">
            <div className="inclusions-col">
              <h4 className="inclusions-title text-emerald-700">
                <Check size={18} /> Inclusions:
              </h4>
              <ul className="inc-list">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i}>
                    <Check size={14} className="text-emerald-500" />
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
                    <Ban size={14} className="text-rose-400" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
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
            >
              {pkg.showPrice === false || !pkg.basePriceLKR ? 'INQUIRE / BOOK TOUR' : 'BOOK THIS TOUR NOW'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
