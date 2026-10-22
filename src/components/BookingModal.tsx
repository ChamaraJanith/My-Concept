import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  CheckCircle, 
  Plane, 
  Phone, 
  Mail, 
  User, 
  FileText,
  Send
} from 'lucide-react';
import type { TourPackage } from '../types';

interface BookingModalProps {
  pkg: TourPackage | null;
  currency: 'LKR' | 'USD';
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  pkg,
  currency,
  onClose
}) => {
  if (!pkg) return null;

  const [paxCount, setPaxCount] = useState<number>(pkg.minPax || 2);
  const [tier, setTier] = useState<'3-star' | '4-star'>('3-star');
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [departureDate, setDepartureDate] = useState<string>('2026-11-15');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Calculate base rate per head
  let pricePerHead = pkg.basePriceLKR || 0;
  if (pkg.hasTiers && pkg.tier3StarLKR && pkg.tier4StarLKR) {
    pricePerHead = tier === '3-star' ? pkg.tier3StarLKR : pkg.tier4StarLKR;
  }

  // Estimated flights addition if toggled: e.g. approx 65,000 LKR per head
  const flightAddonPerPax = includeFlights ? 65000 : 0;
  const totalPriceLKR = (pricePerHead + flightAddonPerPax) * paxCount;

  const formatPrice = (lkrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(lkrAmount / 305);
      return `$${usd.toLocaleString()}`;
    }
    return `LKR ${lkrAmount.toLocaleString()}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please enter your Name and Contact Number');
      return;
    }
    const ref = `NW-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container booking-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="booking-modal-header">
              <span className="booking-modal-subtitle">Quick Reservation Request</span>
              <h2 className="booking-modal-title">Book Tour: {pkg.name}</h2>
              <p className="booking-modal-tagline">{pkg.tagline} • {pkg.nights} Nights</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="booking-form-grid">
              {/* Package Snapshot Card */}
              <div className="booking-summary-card">
                <img src={pkg.image} alt={pkg.name} className="booking-summary-img" />
                <div className="booking-summary-info">
                  <span className="booking-dest-name">{pkg.name}</span>
                  <span className="booking-dest-duration">{pkg.nights} Nights / {pkg.days} Days Package</span>
                  <div className="booking-package-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-num">{pkg.rating} (Verified Tour)</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Pax and Tier */}
              <div className="booking-form-section">
                <label className="form-label">
                  <Users size={16} /> Number of Travelers (Pax):
                </label>
                <div className="pax-counter-wrap">
                  <button
                    type="button"
                    className="pax-btn"
                    onClick={() => setPaxCount(Math.max(pkg.minPax || 1, paxCount - 1))}
                  >
                    -
                  </button>
                  <span className="pax-count-display">{paxCount} {paxCount === 1 ? 'Traveler' : 'Travelers'}</span>
                  <button
                    type="button"
                    className="pax-btn"
                    onClick={() => setPaxCount(paxCount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tier Selection if available */}
              {pkg.hasTiers && (
                <div className="booking-form-section">
                  <label className="form-label">Choose Hotel Category:</label>
                  <div className="tier-choice-group">
                    <button
                      type="button"
                      className={`tier-choice-btn ${tier === '3-star' ? 'active' : ''}`}
                      onClick={() => setTier('3-star')}
                    >
                      <span>3★ Deluxe Hotel</span>
                      <strong>{formatPrice(pkg.tier3StarLKR || 0)} / pax</strong>
                    </button>
                    <button
                      type="button"
                      className={`tier-choice-btn ${tier === '4-star' ? 'active' : ''}`}
                      onClick={() => setTier('4-star')}
                    >
                      <span>4★ Premium Luxury Resort</span>
                      <strong>{formatPrice(pkg.tier4StarLKR || 0)} / pax</strong>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Flights Option */}
              <div className="form-row-2col">
                <div className="booking-form-section">
                  <label className="form-label">
                    <Calendar size={16} /> Preferred Departure Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="booking-form-section">
                  <label className="form-label">
                    <Plane size={16} /> Flights from Colombo:
                  </label>
                  <label className="toggle-flight-checkbox">
                    <input
                      type="checkbox"
                      checked={includeFlights}
                      onChange={(e) => setIncludeFlights(e.target.checked)}
                    />
                    <span>
                      {pkg.showPrice === false || !pkg.basePriceLKR 
                        ? 'Include return flights from Colombo' 
                        : `Include return flights (+${formatPrice(65000)}/pax)`}
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 3: Traveler Contact Info */}
              <div className="form-row-2col">
                <div className="booking-form-section">
                  <label className="form-label">
                    <User size={16} /> Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Silva"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="booking-form-section">
                  <label className="form-label">
                    <Phone size={16} /> Sri Lanka Mobile / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="booking-form-section">
                <label className="form-label">
                  <Mail size={16} /> Email Address (for Voucher & Itinerary):
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="booking-form-section">
                <label className="form-label">
                  <FileText size={16} /> Special Requests / Dietary Needs (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Honeymoon setup, vegetarian meals, airport wheelchair..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Dynamic Live Price Breakdown or Custom Quote Summary */}
              {pkg.showPrice === false || !pkg.basePriceLKR ? (
                <div className="live-pricing-summary no-price-summary">
                  <div className="quote-status-row">
                    <span className="quote-status-label">Pricing Status:</span>
                    <span className="quote-status-badge">Price on Request (Free Instant Quotation)</span>
                  </div>
                  <div className="quote-details-list">
                    <div className="quote-detail-item">
                      <span>Travelers:</span>
                      <strong>{paxCount} {paxCount === 1 ? 'Traveler' : 'Travelers'} (Min {pkg.minPax || 2} Pax)</strong>
                    </div>
                    <div className="quote-detail-item">
                      <span>Flights Preference:</span>
                      <strong>{includeFlights ? 'Include Return Flights from Colombo' : 'Land Package & Ground Transfers Only'}</strong>
                    </div>
                    {pkg.travelDates && (
                      <div className="quote-detail-item">
                        <span>Season Validity:</span>
                        <strong>{pkg.travelDates}</strong>
                      </div>
                    )}
                  </div>
                  <div className="pricing-calc-divider"></div>
                  <span className="pricing-disclaimer">
                    *Zero upfront payment. A Nationwide Travels specialist will calculate the best promotional rate and confirm availability within 30 minutes.
                  </span>
                </div>
              ) : (
                <div className="live-pricing-summary">
                  <div className="pricing-calc-row">
                    <span>Land Package ({paxCount} pax @ {formatPrice(pricePerHead)}):</span>
                    <span>{formatPrice(pricePerHead * paxCount)}</span>
                  </div>
                  {includeFlights && (
                    <div className="pricing-calc-row">
                      <span>Round-trip Flights ({paxCount} pax):</span>
                      <span>{formatPrice(flightAddonPerPax * paxCount)}</span>
                    </div>
                  )}
                  <div className="pricing-calc-divider"></div>
                  <div className="pricing-total-row">
                    <span className="total-label">Estimated Total:</span>
                    <span className="total-amount">{formatPrice(totalPriceLKR)}</span>
                  </div>
                  <span className="pricing-disclaimer">
                    *No immediate payment required today. Nationwide.lk travel advisor will confirm availability within 30 minutes.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <div className="booking-actions">
                <button
                  type="submit"
                  className="btn-primary w-full booking-submit-btn"
                >
                  <Send size={18} />
                  <span>Submit Booking Reservation</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Voucher */
          <div className="booking-success-view">
            <div className="booking-success-hero-wrap">
              <img 
                src="/images/travel-ticketing-booking.jpg" 
                alt="Pack your bags - Tour Confirmed" 
                className="booking-success-hero-img" 
              />
              <div className="booking-success-hero-badge">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>BOOKING REQUEST LOGGED</span>
              </div>
            </div>

            <h2 className="success-title">Reservation Request Received!</h2>
            <p className="success-subtitle">
              Thank you, <strong>{fullName}</strong>. Your provisional booking reference is:
            </p>
            <div className="booking-ref-badge">{bookingRef}</div>

            <div className="voucher-details-box">
              <div className="voucher-line">
                <span>Destination:</span>
                <strong>{pkg.name} ({pkg.nights} Nights)</strong>
              </div>
              <div className="voucher-line">
                <span>Travelers:</span>
                <strong>{paxCount} Pax</strong>
              </div>
              <div className="voucher-line">
                <span>Departure Date:</span>
                <strong>{departureDate}</strong>
              </div>
              <div className="voucher-line">
                <span>Estimated Quote:</span>
                <strong className="text-blue-600">
                  {pkg.showPrice === false || !pkg.basePriceLKR ? 'Custom Quote on Request' : formatPrice(totalPriceLKR)}
                </strong>
              </div>
              <div className="voucher-line">
                <span>Contact Phone:</span>
                <strong>{phone}</strong>
              </div>
            </div>

            <div className="success-actions-wrap">
              <a 
                href={`https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20have%20submitted%20a%20booking%20reservation%20for%20${encodeURIComponent(pkg.name)}%20(Ref:%20${bookingRef})`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full whatsapp-connect-btn"
              >
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="btn-secondary w-full mt-2"
              >
                Back to Tour Packages
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
