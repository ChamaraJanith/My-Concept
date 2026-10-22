import { Compass, Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <RevealOnScroll animation="fade-up" duration={700}>
            <div className="footer-top-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-brand-col">
              <div className="footer-logo">
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
                <li><a href="#destinations">🇸🇬 Singapore & Universal Studios</a></li>
                <li><a href="#destinations">🇲🇾 Malaysia Genting & Sunway Lagoon</a></li>
                <li><a href="#destinations">🇦🇪 Dubai & Abu Dhabi: Burj Khalifa, Safari & Ferrari World</a></li>
                <li><a href="#destinations">🇪🇺 European Marvels: UK, France, Swiss & Italy (12D 11N)</a></li>
                <li><a href="#destinations">🇪🇺 Paris, Milan, Venice, Florence & Rome (12D 11N)</a></li>
                <li><a href="#destinations">🇮🇳 Golden Triangle: Delhi, Agra & Jaipur</a></li>
                <li><a href="#destinations">🇻🇳 Vietnam: Halong Bay, Da Nang & Ho Chi Minh</a></li>
                <li><a href="#destinations">🇮🇩 Bali, Indonesia: Uluwatu & Nusa Penida</a></li>
                <li><a href="#destinations">🇹🇭 Thailand: Bangkok, Pattaya & Phuket</a></li>
              </ul>
            </div>

            {/* Column 3: Travel Services */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Travel Services</h4>
              <ul className="footer-link-list">
                <li><a href="#services">Worldwide Air Ticket Booking</a></li>
                <li><a href="#services">Express Tourist Visa Assistance</a></li>
                <li><a href="#services">Corporate & MICE Group Travel</a></li>
                <li><a href="#services">Tailor-Made Honeymoon Packages</a></li>
                <li><a href="#services">Travel Insurance & Forex Advisory</a></li>
                <li><a href="#services">Airport VIP Transfers</a></li>
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
              © {new Date().getFullYear()} <strong>Nationwide.lk</strong>. All Rights Reserved. Crafted for premium Sri Lankan travelers.
            </p>

            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms & Conditions</a>
              <span>•</span>
              <a href="#faq">Travel FAQs</a>
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
