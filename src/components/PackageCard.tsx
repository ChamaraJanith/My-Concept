import React from 'react';
import { Moon, Star, Users, Info, Sparkles } from 'lucide-react';
import type { TourPackage } from '../types';

interface PackageCardProps {
  pkg: TourPackage;
  currency: 'LKR' | 'USD';
  onBookNow: (pkg: TourPackage) => void;
  onViewDetails: (pkg: TourPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currency,
  onBookNow,
  onViewDetails
}) => {
  // Exchange rate approximation: 1 USD ≈ 305 LKR
  const formatPrice = (lkrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(lkrAmount / 305);
      return `$${usd.toLocaleString()}`;
    }
    return `LKR ${lkrAmount.toLocaleString()}`;
  };

  return (
    <div className="package-card" id={`package-${pkg.id}`}>
      {/* Top Image Container */}
      <div className="package-image-wrap">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="package-image" 
          loading="lazy" 
        />
        {pkg.badge && (
          <span className="package-badge-tag">{pkg.badge}</span>
        )}
        <div className="package-rating-badge">
          <Star size={14} className="star-icon-filled" />
          <span>{pkg.rating.toFixed(1)}</span>
          <span className="reviews-count">({pkg.reviewsCount})</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="package-body">
        {/* Title */}
        <h3 className="package-title">{pkg.name}</h3>

        {/* Nights & Travelers */}
        <div className="package-meta-row">
          <span className="package-meta-item">
            <Moon size={14} className="package-meta-icon" />
            No of Nights: <strong>{pkg.nights}</strong>
          </span>
          {pkg.minPax && (
            <span className="package-meta-item min-pax-tag">
              <Users size={14} className="package-meta-icon" />
              Min: {pkg.minPax} pax
            </span>
          )}
        </div>

        {/* Price Box */}
        <div className="package-price-box">
          {pkg.showPrice === false || (!pkg.basePriceLKR && !pkg.hasTiers) ? (
            <div className="price-on-request-line">
              <span className="price-label">Package Rate:</span>
              <div className="price-request-badge">
                <Sparkles size={14} className="price-request-sparkle" />
                <span className="price-request-text">Price on Request</span>
              </div>
              {pkg.travelDates && (
                <span className="travel-validity-text">Travel: {pkg.travelDates}</span>
              )}
            </div>
          ) : pkg.hasTiers && pkg.tier3StarLKR && pkg.tier4StarLKR ? (
            <div className="tiered-prices">
              <div className="tier-line">
                <span className="tier-star">3★ :</span>
                <span className="tier-cost">{formatPrice(pkg.tier3StarLKR)}</span>
              </div>
              <div className="tier-line">
                <span className="tier-star">4★ :</span>
                <span className="tier-cost">{formatPrice(pkg.tier4StarLKR)}</span>
              </div>
            </div>
          ) : (
            <div className="single-price-line">
              <span className="price-label">Cost Per Head:</span>
              <span className="price-value">{formatPrice(pkg.basePriceLKR || 0)}</span>
            </div>
          )}
        </div>

        {/* Highlights Preview */}
        <ul className="package-highlights-list">
          {pkg.highlights.slice(0, 2).map((h, idx) => (
            <li key={idx} className="highlight-item">
              <span className="bullet-dot">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons Row */}
        <div className="package-actions-row">
          <button
            type="button"
            onClick={() => onBookNow(pkg)}
            className="package-book-btn"
            id={`book-now-${pkg.id}`}
          >
            BOOK NOW
          </button>
          
          <button
            type="button"
            onClick={() => onViewDetails(pkg)}
            className="package-info-btn"
            title="View Full Tour Itinerary"
          >
            <Info size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
