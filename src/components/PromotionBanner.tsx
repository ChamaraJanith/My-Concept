import React from 'react';
import { Check, ArrowRight, Sparkles, Play } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface PromotionBannerProps {
  onSeePromotions: () => void;
  onOpenPromoVideo?: () => void;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({ 
  onSeePromotions,
  onOpenPromoVideo 
}) => {
  return (
    <section className="promo-banner-section">
      <div className="container">
        <RevealOnScroll animation="scale-up" duration={800}>
          <div className="promo-card-wrapper">
            {/* Left Column: Image with Limited Time Badge */}
            <div className="promo-image-col">
              <div className="promo-image-container">
                <img 
                  src="/images/consultation.jpg" 
                  alt="Nationwide travel consultation offer" 
                  className="promo-image" 
                />
                <span className="limited-time-badge">
                  LIMITED TIME
                </span>
              </div>
            </div>

            {/* Right Column: Promotional Content (Exact match to Screenshot 4) */}
            <div className="promo-content-col">
              <div className="special-season-pill">
                <Sparkles size={14} className="star-icon" />
                <span>★ SPECIAL SEASON OFFER</span>
              </div>

              <h2 className="promo-main-heading">
                Discount <span className="discount-gradient-text">10–30% Off</span>
              </h2>

              <p className="promo-sub-text">
                Plan your dream getaway today and enjoy exclusive discounts across all popular holiday destinations.
              </p>

              <ul className="promo-checklist">
                <li className="promo-check-item">
                  <div className="check-icon-circle">
                    <Check size={16} className="check-icon" />
                  </div>
                  <span>Applicable on top-rated international & local packages</span>
                </li>
                <li className="promo-check-item">
                  <div className="check-icon-circle">
                    <Check size={16} className="check-icon" />
                  </div>
                  <span>Complimentary itinerary consultation included</span>
                </li>
                <li className="promo-check-item">
                  <div className="check-icon-circle">
                    <Check size={16} className="check-icon" />
                  </div>
                  <span>Zero cancellation fees on early bird bookings</span>
                </li>
              </ul>

              <div className="promo-action-wrap">
                <button
                  type="button"
                  onClick={onSeePromotions}
                  className="btn-navy promo-cta-btn"
                  id="see-promotion-tours-btn"
                >
                  <span>See Promotion Tours</span>
                  <ArrowRight size={18} />
                </button>

                {onOpenPromoVideo && (
                  <button
                    type="button"
                    onClick={onOpenPromoVideo}
                    className="btn-gold-promo-video"
                    id="promo-banner-watch-video-btn"
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Watch Dubai Tour Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
