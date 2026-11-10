import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import type { PageType } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
  onSelectCountry?: (countryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCountry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountryClick = (e: React.MouseEvent, countryId: string) => {
    e.preventDefault();
    if (onSelectCountry) onSelectCountry(countryId);
    if (onNavigate) onNavigate('all-tours');
    scrollToTop();
  };

  const handleNavClick = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
    scrollToTop();
  };

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <RevealOnScroll animation="fade-up" duration={700}>
            <div className="footer-top-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-brand-col">
              <div 
                className="footer-logo cursor-pointer" 
                onClick={(e) => handleNavClick(e, 'home')}
              >
                <Compass className="footer-compass-icon" size={26} />
                <span className="footer-brand-name">
                  Nationwide<span className="dot-lk">.lk</span>
                </span>
              </div>
              <p className="footer-bio">
                Sri Lanka's trusted gateway to unforgettable international adventures. 
                Offering curated holiday packages, direct air tickets, fast visas, and five-star client experiences.
              </p>

              <div className="sltda-badge-card">
                <span className="sltda-dot"></span>
                <span>Registered with Sri Lanka Tourism Development Authority (SLTDA)</span>
              </div>
            </div>

            {/* Column 2: Popular Tours */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Popular Destinations</h4>
              <ul className="footer-link-list">
                <li><a href="#singapore" onClick={(e) => handleCountryClick(e, 'singapore')}>🇸🇬 Singapore & Universal Studios</a></li>
                <li><a href="#malaysia" onClick={(e) => handleCountryClick(e, 'malaysia')}>🇲🇾 Malaysia Genting & Sunway Lagoon</a></li>
                <li><a href="#dubai" onClick={(e) => handleCountryClick(e, 'dubai')}>🇦🇪 Dubai & Abu Dhabi: Burj Khalifa, Safari</a></li>
                <li><a href="#europe" onClick={(e) => handleCountryClick(e, 'europe')}>🇪🇺 European Marvels: UK, France, Swiss & Italy</a></li>
                <li><a href="#india" onClick={(e) => handleCountryClick(e, 'india')}>🇮🇳 Kashmir & Golden Triangle: Delhi, Agra</a></li>
                <li><a href="#vietnam" onClick={(e) => handleCountryClick(e, 'vietnam')}>🇻🇳 Vietnam: Halong Bay, Da Nang</a></li>
                <li><a href="#bali" onClick={(e) => handleCountryClick(e, 'bali')}>🇮🇩 Bali, Indonesia: Uluwatu & Nusa Penida</a></li>
                <li><a href="#thailand" onClick={(e) => handleCountryClick(e, 'thailand')}>🇹🇭 Thailand: Bangkok, Pattaya & Phuket</a></li>
              </ul>
            </div>

            {/* Column 3: Travel Services */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Travel Services</h4>
              <ul className="footer-link-list">
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Worldwide Air Ticket Booking</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Express Tourist Visa Assistance</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Corporate & MICE Group Travel</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Tailor-Made Honeymoon Packages</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Travel Insurance & Forex Advisory</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Airport VIP Transfers & Inquiries</a></li>
              </ul>
            </div>

            {/* Column 4: Colombo Office Info */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Contact Colombo Desk</h4>
              <div className="footer-contact-items">
                <div className="f-contact-line">
                  <Phone size={15} className="f-icon" />
                  <span>
                    <a href="tel:0112909010">0112 90 90 10</a> / <a href="tel:0716891891">0716 891 891</a>
                  </span>
                </div>
                <div className="f-contact-line">
                  <Mail size={15} className="f-icon" />
                  <span>
                    <a href="mailto:travels@nationwide.lk">travels@nationwide.lk</a>
                  </span>
                </div>
                <div className="f-contact-line">
                  <MapPin size={15} className="f-icon" />
                  <span>Level 4, Colombo 03, Sri Lanka</span>
                </div>
              </div>

              <div className="working-hours-pill">
                <span>Open Mon–Sat: 8:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

          <div className="footer-bottom-divider"></div>

          <div className="footer-bottom-bar">
            <p className="copyright-text">
              © 2026 <strong>Nationwide.lk</strong>. All Rights Reserved. Crafted for premium Sri Lankan travelers.
            </p>

            <div className="footer-legal-links">
              <a href="#privacy" onClick={(e) => handleNavClick(e, 'about')}>Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => handleNavClick(e, 'about')}>Terms & Conditions</a>
              <span>•</span>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'services')}>Travel FAQs</a>
            </div>

            <button 
              type="button" 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20am%20interested%20in%20booking%20a%20tour%20package."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-widget"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
      </a>
    </>
  );
};
