import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Plane, 
  Phone, 
  User, 
  FileText,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck
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
  const [paxCount, setPaxCount] = useState<number>(pkg?.minPax || 2);
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [departureDate, setDepartureDate] = useState<string>(() => {
    // Default to a date 3 weeks from today
    const d = new Date();
    d.setDate(d.getDate() + 21);
    return d.toISOString().split('T')[0];
  });
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!pkg) return null;

  const formatPrice = (lkrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(lkrAmount / 305);
      return `$${usd.toLocaleString()}`;
    }
    return `LKR ${lkrAmount.toLocaleString()}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please enter your Name and WhatsApp Contact Number.');
      return;
    }

    const ref = `NW-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    // Format professional, structured WhatsApp reservation message
    const lines = [
      `🌟 *NEW TOUR RESERVATION - NATIONWIDE LANKA* 🌟`,
      ``,
      `🌴 *Tour:* ${pkg.name}`,
      `⏱️ *Duration:* ${pkg.nights} Nights / ${pkg.days} Days`,
      `👤 *Traveler:* ${fullName.trim()}`,
      `📱 *WhatsApp:* ${phone.trim()}`,
      `📅 *Preferred Date:* ${departureDate}`,
      `👥 *Travelers:* ${paxCount} ${paxCount === 1 ? 'Person' : 'Persons'}`,
      `✈️ *Flights from Colombo:* ${includeFlights ? 'Yes, please include flights' : 'Land package & hotels only'}`,
      notes.trim() ? `📝 *Notes:* ${notes.trim()}` : null,
      `🔖 *Ref:* #${ref}`,
      ``,
      `_Hello Nationwide Travels, I would like to confirm this tour and discuss the details with your team on WhatsApp._`
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/94716891891?text=${waText}`;

    // Directly open WhatsApp with prefilled message
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container booking-modal-content simple-booking-modal"
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
            {/* Header */}
            <div className="booking-modal-header">
              <span className="booking-modal-badge">
                <Sparkles size={13} />
                <span>Quick WhatsApp Reservation</span>
              </span>
              <h2 className="booking-modal-title">Book Tour: {pkg.name}</h2>
              <p className="booking-modal-tagline">
                Fill details below — we confirm everything quickly and seamlessly via WhatsApp!
              </p>
            </div>

            {/* Compact Tour Snapshot Card */}
            <div className="booking-compact-tour-card">
              <img src={pkg.image} alt={pkg.name} className="booking-compact-tour-img" />
              <div className="booking-compact-tour-details">
                <div className="booking-compact-tour-header">
                  <h4 className="booking-compact-tour-name">{pkg.name}</h4>
                  <span className="booking-compact-tour-nights">
                    {pkg.nights}N / {pkg.days}D
                  </span>
                </div>
                <p className="booking-compact-tour-sub">{pkg.tagline}</p>
                {pkg.showPrice !== false && pkg.basePriceLKR && (
                  <div className="booking-compact-price-pill">
                    <span>From</span>
                    <strong>{formatPrice(pkg.basePriceLKR)}</strong>
                    <span className="price-unit">/ person</span>
                  </div>
                )}
              </div>
            </div>

            {/* Streamlined Simple Form */}
            <form onSubmit={handleBookingSubmit} className="simple-booking-form">
              {/* Row 1: Name and WhatsApp Number */}
              <div className="form-row-2col">
                <div className="booking-field-group">
                  <label className="simple-form-label">
                    <User size={15} className="text-blue-600" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Perera"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="simple-form-input"
                    autoFocus
                  />
                </div>

                <div className="booking-field-group">
                  <label className="simple-form-label">
                    <Phone size={15} className="text-emerald-600" />
                    <span>WhatsApp Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="simple-form-input"
                  />
                </div>
              </div>

              {/* Row 2: Date & Travelers */}
              <div className="form-row-2col">
                <div className="booking-field-group">
                  <label className="simple-form-label">
                    <Calendar size={15} className="text-amber-500" />
                    <span>Preferred Departure Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="simple-form-input"
                  />
                </div>

                <div className="booking-field-group">
                  <label className="simple-form-label">
                    <Users size={15} className="text-blue-500" />
                    <span>Number of Travelers</span>
                  </label>
                  <div className="simple-pax-picker">
                    <button
                      type="button"
                      className="simple-pax-btn"
                      onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                    >
                      −
                    </button>
                    <span className="simple-pax-number">
                      {paxCount} {paxCount === 1 ? 'Traveler' : 'Travelers'}
                    </span>
                    <button
                      type="button"
                      className="simple-pax-btn"
                      onClick={() => setPaxCount(paxCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Flights Quick Toggle */}
              <div className="simple-flight-toggle-row">
                <label className="simple-flight-checkbox-label">
                  <input
                    type="checkbox"
                    checked={includeFlights}
                    onChange={(e) => setIncludeFlights(e.target.checked)}
                    className="simple-checkbox-input"
                  />
                  <Plane size={16} className="text-blue-600 shrink-0" />
                  <span className="simple-flight-text">
                    <strong>Include Return Flights</strong> from Colombo (CMB)
                  </span>
                </label>
              </div>

              {/* Special Requests (Optional) */}
              <div className="booking-field-group">
                <label className="simple-form-label">
                  <FileText size={15} className="text-slate-500" />
                  <span>Special Requests / Notes (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Traveling with family, need vegetarian meals, child cot..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="simple-form-input"
                />
              </div>

              {/* Reassurance Notice */}
              <div className="simple-whatsapp-note">
                <div className="note-pulse-dot"></div>
                <span>
                  <strong>Instant WhatsApp Confirmation:</strong> Our 24/7 travel desk will confirm availability, dates, and customize your quote directly on WhatsApp within minutes.
                </span>
              </div>

              {/* Big Prominent WhatsApp Action Button */}
              <button
                type="submit"
                className="simple-whatsapp-submit-btn"
                id="booking-whatsapp-submit-btn"
              >
                <MessageCircle size={20} className="whatsapp-icon-spin" />
                <span className="btn-main-text">Book Now via WhatsApp</span>
                <ArrowRight size={18} />
              </button>

              <div className="simple-trust-footer">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Zero upfront charge • Direct chat with licensed travel experts</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="booking-success-view">
            <div className="booking-success-icon-ring">
              <MessageCircle size={38} className="text-emerald-500" />
            </div>

            <h2 className="success-title">Connecting to WhatsApp...</h2>
            <p className="success-subtitle">
              Thank you, <strong>{fullName}</strong>! Your tour reservation details for <strong>{pkg.name}</strong> have been prepared.
            </p>

            <div className="booking-ref-badge">Booking Ref: #{bookingRef}</div>

            <div className="voucher-details-box">
              <div className="voucher-line">
                <span>Destination:</span>
                <strong>{pkg.name} ({pkg.nights}N / {pkg.days}D)</strong>
              </div>
              <div className="voucher-line">
                <span>Travelers:</span>
                <strong>{paxCount} {paxCount === 1 ? 'Traveler' : 'Travelers'}</strong>
              </div>
              <div className="voucher-line">
                <span>Travel Date:</span>
                <strong>{departureDate}</strong>
              </div>
              <div className="voucher-line">
                <span>Flights:</span>
                <strong>{includeFlights ? 'Included' : 'Land Package Only'}</strong>
              </div>
              <div className="voucher-line">
                <span>Your WhatsApp:</span>
                <strong>{phone}</strong>
              </div>
            </div>

            <p className="success-chat-hint">
              If WhatsApp didn't open automatically on your device, click below to start chatting:
            </p>

            <div className="success-actions-wrap">
              <a 
                href={`https://wa.me/94716891891?text=${encodeURIComponent(
                  `🌟 *TOUR RESERVATION - NATIONWIDE LANKA*\n\n🌴 *Tour:* ${pkg.name}\n👤 *Name:* ${fullName}\n📱 *WhatsApp:* ${phone}\n📅 *Date:* ${departureDate}\n👥 *Travelers:* ${paxCount} Pax\n✈️ *Flights:* ${includeFlights ? 'Yes' : 'Land only'}\n${notes ? `📝 *Notes:* ${notes}\n` : ''}🔖 *Ref:* #${bookingRef}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="simple-whatsapp-submit-btn"
              >
                <MessageCircle size={20} />
                <span>Open WhatsApp Chat Now</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="btn-secondary w-full mt-2"
              >
                Close & Return to Tours
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
