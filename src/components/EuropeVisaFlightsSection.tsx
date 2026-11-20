import React from 'react';
import { 
  Plane, 
  FileCheck, 
  CreditCard, 
  MessageSquare, 
  PhoneCall 
} from 'lucide-react';

interface EuropeVisaFlightsSectionProps {
  onExploreEuropeTours?: () => void;
  onContactClick?: () => void;
}

export const EuropeVisaFlightsSection: React.FC<EuropeVisaFlightsSectionProps> = () => {
  const targetCountries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Italy', flag: '🇮🇹' }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      '🌟 *VISA & AIR TICKET INQUIRY - NATIONWIDE TRAVELS*\n\n' +
      'Hello! I would like to inquire about Visa Consultation & Air Tickets for USA, UK, France, or Italy.\n\n' +
      'Please assist me with details.'
    );
    window.open(`https://wa.me/94716891891?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="compact-visa-flights-section" id="visa-flights-strip">
      <div className="container">
        <div className="compact-visa-card">
          <div className="compact-visa-main-row">
            {/* Title & Country Badges */}
            <div className="compact-visa-text-col">
              <h3 className="compact-visa-title">
                Visa & Air Tickets <span className="highlight-gradient">Facilities</span>
              </h3>
              <div className="compact-country-pills">
                {targetCountries.map((c) => (
                  <span key={c.name} className="compact-country-pill">
                    <span className="compact-flag">{c.flag}</span>
                    <strong className="compact-cname">{c.name}</strong>
                  </span>
                ))}
              </div>
            </div>

            {/* Simple Features */}
            <div className="compact-features-col">
              <div className="compact-feat-item">
                <FileCheck size={18} className="feat-ico-amber" />
                <span>Fast & Easy Visa Assistance</span>
              </div>
              <div className="compact-feat-item">
                <Plane size={18} className="feat-ico-cyan" />
                <span>Best Air Ticket Rates</span>
              </div>
              <div className="compact-feat-item">
                <CreditCard size={18} className="feat-ico-emerald" />
                <span>0% Installments (Commercial, Sampath, HNB, NTB, DFCC)</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="compact-actions-col">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="compact-whatsapp-btn"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us</span>
              </button>

              <a
                href="tel:0112909010"
                className="compact-call-btn"
              >
                <PhoneCall size={15} />
                <span>0112 90 90 10</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuropeVisaFlightsSection;
