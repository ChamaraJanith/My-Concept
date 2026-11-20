import React, { useState } from 'react';
import { 
  Plane, 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare,
  Sparkles,
  Luggage,
  Globe2,
  Award
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface EuropeVisaFlightsSectionProps {
  onExploreEuropeTours: () => void;
  onContactClick: () => void;
}

export const EuropeVisaFlightsSection: React.FC<EuropeVisaFlightsSectionProps> = ({
  onExploreEuropeTours,
  onContactClick
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'visa' | 'flights'>('all');

  const europeanDestinations = [
    { country: 'France', flag: '🇫🇷', cities: 'Paris, Nice, Lyon' },
    { country: 'Switzerland', flag: '🇨🇭', cities: 'Zurich, Lucerne, Interlaken' },
    { country: 'Italy', flag: '🇮🇹', cities: 'Rome, Venice, Milan, Florence' },
    { country: 'United Kingdom', flag: '🇬🇧', cities: 'London, Manchester, Edinburgh' },
    { country: 'Germany', flag: '🇩🇪', cities: 'Frankfurt, Munich, Berlin' },
    { country: 'Spain', flag: '🇪🇸', cities: 'Barcelona, Madrid, Seville' },
    { country: 'Austria', flag: '🇦🇹', cities: 'Vienna, Salzburg, Innsbruck' },
    { country: 'Netherlands', flag: '🇳🇱', cities: 'Amsterdam, Rotterdam' },
  ];

  const visaPerks = [
    'Fast VFS Global appointment booking & priority submission assistance in Colombo',
    'Financial document vetting: 6-month bank statements, fixed deposits & tax records audit',
    'Embassy-compliant Schengen travel medical insurance with €30,000 emergency cover',
    'Confirmed round-trip flight reservations & hotel accommodation vouchers',
    'Personalized cover letter drafting & step-by-step biometric appointment guidance',
    '99.2% verified approval track record across Schengen, UK & European visa categories'
  ];

  const flightPerks = [
    'Direct ticketing partnerships: Qatar Airways, Emirates, SriLankan, Turkish Airlines & Etihad',
    'Exclusive discounted airfares with transparent all-inclusive taxes (Zero hidden charges)',
    'Enhanced baggage allowances (up to 35kg – 40kg) for European long-haul routes',
    'Flexible date re-routing & ticket rescheduling options for unexpected changes',
    '0% interest credit card installment plans up to 36 months with all leading Sri Lankan banks (Commercial, Sampath, HNB, NTB, DFCC)',
    'Dedicated 24/7 flight delay & transit monitoring support via WhatsApp hotline'
  ];

  const partnerAirlines = [
    'Qatar Airways',
    'Emirates',
    'SriLankan Airlines',
    'Turkish Airlines',
    'Etihad Airways',
    'Singapore Airlines',
    'Air France',
    'KLM'
  ];

  const handleOpenWhatsApp = (inquiryType: string) => {
    const message = encodeURIComponent(
      `🌟 *EUROPE VISA & FLIGHT INQUIRY - NATIONWIDE TRAVELS*\n\n` +
      `Hello! I would like to inquire about ${inquiryType} for European destinations from Sri Lanka.\n\n` +
      `Please connect me with an Europe Travel Director for consultation.`
    );
    window.open(`https://wa.me/94716891891?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="europe-visa-flights-section" id="europe-visa-flights">
      <div className="container">
        {/* Section Header */}
        <RevealOnScroll animation="fade-down" duration={700}>
          <div className="europe-section-header">
            <div className="europe-badge-pill">
              <Sparkles size={14} className="text-amber-400 shrink-0" />
              <span>EUROPE SPECIALIST DESK • SCHENGEN & UK VISAS + AIR TICKETS</span>
              <span className="pill-dot">•</span>
              <span className="text-sky-300 font-bold">COLOMBO OFFICE</span>
            </div>

            <h2 className="europe-main-heading">
              Fast-Track <span className="europe-heading-gradient">Europe Schengen Visas</span> & Best Airfares from Sri Lanka
            </h2>

            <p className="europe-sub-lead">
              Planning your dream European getaway to France, Switzerland, Italy or the UK? 
              Nationwide Travels takes the stress out of your journey with comprehensive VFS consular visa assistance, 
              confirmed flight reservations, and direct airline ticketing with 0% bank installment plans.
            </p>

            {/* Destination Flag Strip */}
            <div className="europe-countries-scroll-row">
              {europeanDestinations.map((dest) => (
                <div key={dest.country} className="europe-country-chip">
                  <span className="country-flag">{dest.flag}</span>
                  <div className="country-text">
                    <span className="country-name">{dest.country}</span>
                    <span className="country-cities">{dest.cities}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Interactive Service Toggle Tabs */}
        <div className="europe-filter-tabs">
          <button 
            type="button" 
            className={`europe-tab-btn ${selectedTab === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTab('all')}
          >
            <Globe2 size={16} />
            <span>All Europe Services</span>
          </button>
          <button 
            type="button" 
            className={`europe-tab-btn ${selectedTab === 'visa' ? 'active' : ''}`}
            onClick={() => setSelectedTab('visa')}
          >
            <FileCheck size={16} />
            <span>Schengen & UK Visa Desk</span>
          </button>
          <button 
            type="button" 
            className={`europe-tab-btn ${selectedTab === 'flights' ? 'active' : ''}`}
            onClick={() => setSelectedTab('flights')}
          >
            <Plane size={16} />
            <span>Direct Europe Airfares</span>
          </button>
        </div>

        {/* Dual Pillar Feature Grid */}
        <div className="europe-pillars-grid">
          {/* Pillar 1: Schengen Visa Desk */}
          {(selectedTab === 'all' || selectedTab === 'visa') && (
            <RevealOnScroll animation="fade-right" duration={750} className="w-full">
              <div className="europe-pillar-card visa-card-theme">
                <div className="pillar-card-top">
                  <div className="pillar-icon-badge visa-badge-bg">
                    <FileCheck size={28} className="text-amber-400" />
                  </div>
                  <div className="pillar-header-text">
                    <span className="pillar-kicker">CONSULAR COMPLIANCE EXPERTS</span>
                    <h3 className="pillar-title">Europe Schengen & UK Visa Assistance</h3>
                  </div>
                  <div className="approval-stat-badge">
                    <Award size={15} className="text-amber-400" />
                    <span>99.2% Approval Track Record</span>
                  </div>
                </div>

                <p className="pillar-lead-desc">
                  Applying for a Schengen visa (France, Italy, Switzerland, Germany) or UK visitor visa from Colombo? 
                  Our senior visa officers meticulously audit your financial documents, book official VFS appointment slots, 
                  and generate genuine flight & hotel vouchers that satisfy European consular standards.
                </p>

                <ul className="pillar-perks-list">
                  {visaPerks.map((perk, i) => (
                    <li key={i} className="pillar-perk-item">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-1" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="pillar-card-footer">
                  <button 
                    type="button" 
                    onClick={() => handleOpenWhatsApp('Schengen / UK Visa Assistance')}
                    className="europe-action-btn visa-primary-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire Visa on WhatsApp</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={onContactClick}
                    className="europe-action-btn outline-light-btn"
                  >
                    <PhoneCall size={16} />
                    <span>Call Colombo Visa Desk</span>
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Pillar 2: Europe Air Ticketing Desk */}
          {(selectedTab === 'all' || selectedTab === 'flights') && (
            <RevealOnScroll animation="fade-left" duration={750} className="w-full">
              <div className="europe-pillar-card flights-card-theme">
                <div className="pillar-card-top">
                  <div className="pillar-icon-badge flight-badge-bg">
                    <Plane size={28} className="text-sky-400" />
                  </div>
                  <div className="pillar-header-text">
                    <span className="pillar-kicker">DIRECT GLOBAL AIRLINE STOCKS</span>
                    <h3 className="pillar-title">Europe Air Ticketing & Best Fares</h3>
                  </div>
                  <div className="approval-stat-badge flight-stat">
                    <Luggage size={15} className="text-sky-400" />
                    <span>Up to 40kg Baggage Allowance</span>
                  </div>
                </div>

                <p className="pillar-lead-desc">
                  Enjoy the lowest published and corporate airfares connecting Colombo to London, Paris, Rome, Zurich, 
                  Milan and Frankfurt. We contract directly with premier global carrier alliances to guarantee flexible travel dates, 
                  generous baggage allowances, and transparent all-inclusive fares.
                </p>

                <ul className="pillar-perks-list">
                  {flightPerks.map((perk, i) => (
                    <li key={i} className="pillar-perk-item">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-1" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="airline-partner-logos-row">
                  <span className="airline-partner-caption">Official Ticketing Partner For:</span>
                  <div className="airline-pills-wrap">
                    {partnerAirlines.map((air) => (
                      <span key={air} className="airline-name-chip">{air}</span>
                    ))}
                  </div>
                </div>

                <div className="pillar-card-footer">
                  <button 
                    type="button" 
                    onClick={() => handleOpenWhatsApp('Europe Flight Ticket Quotation')}
                    className="europe-action-btn flight-primary-btn"
                  >
                    <Plane size={16} />
                    <span>Request Best Airfare Quote</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={onExploreEuropeTours}
                    className="europe-action-btn outline-light-btn"
                  >
                    <span>View Europe Tour Packages</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          )}
        </div>

        {/* Visual Trust Ribbon Banner */}
        <RevealOnScroll animation="scale-up" duration={750}>
          <div className="europe-trust-ribbon">
            <div className="trust-ribbon-col">
              <div className="trust-icon-circle">
                <ShieldCheck size={22} className="text-amber-400" />
              </div>
              <div className="trust-col-text">
                <strong>SLTDA Licensed & Bonded</strong>
                <span>Official government accredited outbound travel agency in Sri Lanka</span>
              </div>
            </div>

            <div className="trust-ribbon-divider" />

            <div className="trust-ribbon-col">
              <div className="trust-icon-circle">
                <CreditCard size={22} className="text-sky-400" />
              </div>
              <div className="trust-col-text">
                <strong>0% Card Installment Plans</strong>
                <span>Up to 36 months easy banking plans with Commercial, Sampath, HNB, NTB, DFCC</span>
              </div>
            </div>

            <div className="trust-ribbon-divider" />

            <div className="trust-ribbon-col">
              <div className="trust-icon-circle">
                <Clock size={22} className="text-emerald-400" />
              </div>
              <div className="trust-col-text">
                <strong>24/7 Dedicated Concierge</strong>
                <span>Instant WhatsApp assistance throughout your European transit and holiday</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default EuropeVisaFlightsSection;
