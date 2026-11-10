import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  CreditCard, 
  PhoneCall, 
  Sparkles
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ContactPageProps {
  onBackToHome: () => void;
  onExploreTours: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onExploreTours
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Bangkok & Pattaya (4D 3N)',
    travelMonth: 'Next 30 Days',
    adults: '2 Adults',
    children: '0 Children',
    tier: '4-Star Luxury',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="contact-page page-container-root">
      {/* 1. Subnav Bar */}
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
            <span className="breadcrumb-current">Contact Us</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="page-hero-banner contact-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <PhoneCall size={15} />
                <span>24/7 TRAVEL CONCIERGE</span>
              </span>
              <h1 className="page-main-title">
                Get in Touch with Our Senior Tour Directors
              </h1>
              <p className="page-lead-text">
                Whether you need a custom family itinerary, group corporate booking, visa advisory, or want to book an advertised package, 
                our travel consultants in Colombo are ready to assist you.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Main Form and Info Cards Grid */}
      <section className="contact-main-grid-section">
        <div className="container">
          <div className="contact-page-two-col">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-page-info-col">
              <RevealOnScroll animation="fade-right" duration={750}>
                <div className="info-cards-stack">
                  {/* Phone Hotlines */}
                  <div className="contact-feature-card">
                    <div className="card-icon-circle bg-blue-50 text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div className="card-info-content">
                      <h4 className="card-info-title">Call Direct Hotlines</h4>
                      <p className="card-info-numbers">
                        <a href="tel:0112909010" className="phone-link">0112 90 90 10</a>
                        <span className="divider-slash">/</span>
                        <a href="tel:0716891891" className="phone-link">0716 891 891</a>
                      </p>
                      <span className="card-info-timing">Active 8:30 AM – 7:30 PM (Mon – Sat)</span>
                    </div>
                  </div>

                  {/* WhatsApp Support */}
                  <div className="contact-feature-card highlight-whatsapp">
                    <div className="card-icon-circle bg-emerald-50 text-emerald-600">
                      <MessageCircle size={24} />
                    </div>
                    <div className="card-info-content">
                      <h4 className="card-info-title">WhatsApp Instant Chat</h4>
                      <p className="card-info-numbers">
                        <a 
                          href="https://wa.me/94716891891?text=Hello%20Nationwide%20Lanka,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="whatsapp-live-link"
                        >
                          +94 716 891 891 (Chat Now)
                        </a>
                      </p>
                      <span className="card-info-timing">Quick response within 15 minutes</span>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="contact-feature-card">
                    <div className="card-icon-circle bg-amber-50 text-amber-600">
                      <Mail size={24} />
                    </div>
                    <div className="card-info-content">
                      <h4 className="card-info-title">Official Travel Desk Email</h4>
                      <p className="card-info-numbers">
                        <a href="mailto:travels@nationwide.lk" className="email-link">travels@nationwide.lk</a>
                      </p>
                      <span className="card-info-timing">Send us your itinerary for a 24h detailed quote</span>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="contact-feature-card">
                    <div className="card-icon-circle bg-purple-50 text-purple-600">
                      <MapPin size={24} />
                    </div>
                    <div className="card-info-content">
                      <h4 className="card-info-title">Colombo Head Office</h4>
                      <p className="card-address-text">
                        Nationwide Travels (Pvt) Ltd<br />
                        Colombo, Sri Lanka
                      </p>
                      <span className="card-info-timing">SLTDA Registered Outbound Tour Operator</span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="contact-feature-card">
                    <div className="card-icon-circle bg-slate-100 text-slate-700">
                      <Clock size={24} />
                    </div>
                    <div className="card-info-content">
                      <h4 className="card-info-title">Office Hours</h4>
                      <p className="card-address-text">
                        Monday – Friday: 8:30 AM – 6:30 PM<br />
                        Saturday: 9:00 AM – 3:30 PM<br />
                        Sunday & Poya: Closed (Emergency WhatsApp Active)
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-page-form-col">
              <RevealOnScroll animation="fade-left" duration={750}>
                <div className="contact-form-glass-card">
                  {!isSent ? (
                    <form onSubmit={handleSubmit} className="page-inquiry-form">
                      <div className="form-head-block">
                        <Sparkles size={22} className="text-amber-500" />
                        <h3>Plan Your Vacation or Request a Quote</h3>
                        <p>Fill in your details below and a senior travel specialist will contact you with a customized quote.</p>
                      </div>

                      <div className="form-grid-duo">
                        <div className="form-field-unit">
                          <label>Full Name *</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Kasun Fernando" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="form-field-unit">
                          <label>Contact Phone / WhatsApp *</label>
                          <input 
                            type="tel" 
                            placeholder="e.g. 077 123 4567" 
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-field-unit">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          placeholder="e.g. kasun@gmail.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="form-grid-duo">
                        <div className="form-field-unit">
                          <label>Destination *</label>
                          <select 
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          >
                            <option value="Bangkok & Pattaya (4D 3N)">Bangkok & Pattaya (4D 3N)</option>
                            <option value="Bangkok, Pattaya & Phuket (5D 4N)">Bangkok, Pattaya & Phuket (5D 4N)</option>
                            <option value="Singapore & Universal Studios (4D 3N)">Singapore & Universal (4D 3N)</option>
                            <option value="Malaysia Genting & Sunway (4D 3N)">Malaysia Genting (4D 3N)</option>
                            <option value="Dubai & Abu Dhabi Safari (4D 3N)">Dubai & Abu Dhabi (4D 3N)</option>
                            <option value="European Marvels: UK, Paris & Swiss (12D 11N)">European Marvels (12D 11N)</option>
                            <option value="Kashmir Dal Lake & Gulmarg (6D 5N)">Kashmir Dal Lake (6D 5N)</option>
                            <option value="Golden Triangle: Delhi, Agra, Jaipur (6D 5N)">Golden Triangle India (6D 5N)</option>
                            <option value="Bali Romance & Nusa Penida (5D 4N)">Bali Romance (5D 4N)</option>
                            <option value="Vietnam: Halong Bay & Da Nang (6D 5N)">Vietnam Marvels (6D 5N)</option>
                            <option value="Sacred Dambadiva Pilgrimage">Sacred Dambadiva Pilgrimage</option>
                            <option value="Other Custom Destination">Other Custom Destination</option>
                          </select>
                        </div>

                        <div className="form-field-unit">
                          <label>Approx. Travel Month</label>
                          <select 
                            value={formData.travelMonth}
                            onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                          >
                            <option value="Next 30 Days">Next 30 Days (Immediate)</option>
                            <option value="November 2026">November 2026</option>
                            <option value="December 2026 / New Year">December 2026 / New Year</option>
                            <option value="January 2027">January 2027</option>
                            <option value="February - April 2027">February – April 2027 (School Holidays)</option>
                            <option value="Mid 2027 or Later">Mid 2027 or Later</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-grid-trio">
                        <div className="form-field-unit">
                          <label>Adults (12+ yrs)</label>
                          <select 
                            value={formData.adults}
                            onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                          >
                            <option value="1 Adult">1 Adult</option>
                            <option value="2 Adults">2 Adults (Couple)</option>
                            <option value="3 Adults">3 Adults</option>
                            <option value="4 Adults">4 Adults</option>
                            <option value="5+ Adults Group">5+ Adults Group</option>
                          </select>
                        </div>

                        <div className="form-field-unit">
                          <label>Children (0-11 yrs)</label>
                          <select 
                            value={formData.children}
                            onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                          >
                            <option value="0 Children">0 Children</option>
                            <option value="1 Child">1 Child</option>
                            <option value="2 Children">2 Children</option>
                            <option value="3+ Children">3+ Children</option>
                          </select>
                        </div>

                        <div className="form-field-unit">
                          <label>Hotel Category</label>
                          <select 
                            value={formData.tier}
                            onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                          >
                            <option value="3-Star Comfort">3-Star Comfort</option>
                            <option value="4-Star Luxury">4-Star Luxury (Recommended)</option>
                            <option value="5-Star Ultra Luxury">5-Star Ultra Luxury</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-field-unit">
                        <label>Special Requests or Notes</label>
                        <textarea 
                          rows={3}
                          placeholder="Tell us about specific attractions, flight preferences, dietary needs, or anniversary/honeymoon perks..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full submit-inquiry-btn">
                        <Send size={18} />
                        <span>Send Free Trip Inquiry</span>
                      </button>

                      <p className="privacy-micro-note">
                        🔒 Your personal information is 100% confidential. No spam guaranteed.
                      </p>
                    </form>
                  ) : (
                    <div className="form-success-card">
                      <div className="success-icon-wrap">
                        <CheckCircle2 size={56} className="text-emerald-600" />
                      </div>
                      <h3>Thank You, {formData.name}!</h3>
                      <p className="success-msg-lead">
                        Your inquiry for <strong>{formData.destination}</strong> has been received by our senior tour team.
                      </p>
                      <p className="success-msg-sub">
                        One of our travel directors will review your dates and WhatsApp or call you at <strong>{formData.phone}</strong> with a detailed itinerary and quote within a few hours.
                      </p>
                      <div className="success-btn-group">
                        <button 
                          type="button" 
                          onClick={() => setIsSent(false)} 
                          className="btn-secondary-outline"
                        >
                          Submit Another Inquiry
                        </button>
                        <button 
                          type="button" 
                          onClick={onExploreTours} 
                          className="btn-primary"
                        >
                          Browse Other Tours
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Payment & Bank Information */}
      <section className="contact-payment-section">
        <div className="container">
          <div className="payment-guide-card">
            <div className="payment-guide-header">
              <CreditCard size={28} className="text-amber-500" />
              <div>
                <h3>Bank Wire & 0% Credit Card Installment Options</h3>
                <p>Easy, transparent payment options designed for Sri Lankan travelers.</p>
              </div>
            </div>

            <div className="payment-grid-info">
              <div className="payment-col-box">
                <h4>Official Company Bank Account</h4>
                <p className="bank-name"><strong>Commercial Bank of Ceylon PLC</strong></p>
                <p className="bank-detail">Account Name: <strong>Nationwide Travels (Pvt) Ltd</strong></p>
                <p className="bank-detail">Branch: <strong>Colombo Main Branch</strong></p>
                <p className="bank-detail">Account Number: <strong>1000 293 849 101</strong></p>
                <span className="bank-badge">Direct LKR & USD Deposits Accepted</span>
              </div>

              <div className="payment-col-box">
                <h4>0% Bank Credit Card Installments</h4>
                <p className="card-partners">
                  Convert your holiday package into easy monthly payments up to <strong>12, 24, or 36 months</strong> with 0% interest:
                </p>
                <ul className="bank-partner-list">
                  <li>✓ Commercial Bank (Credit Cards)</li>
                  <li>✓ Sampath Bank (Credit Cards)</li>
                  <li>✓ Hatton National Bank - HNB</li>
                  <li>✓ Nations Trust Bank - American Express (Amex)</li>
                  <li>✓ Seylan Bank & Standard Chartered</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
