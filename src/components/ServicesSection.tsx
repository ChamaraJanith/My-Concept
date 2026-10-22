import React from 'react';
import { Plane, FileCheck, Hotel, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Plane className="service-icon" size={28} />,
      title: 'Worldwide Flight Ticketing',
      desc: 'Exclusive airfare deals with SriLankan Airlines, Singapore Airlines, Emirates, AirAsia & Qatar Airways.'
    },
    {
      icon: <FileCheck className="service-icon" size={28} />,
      title: 'Express Visa Processing',
      desc: 'Hassle-free tourist visa assistance for Singapore, Malaysia, Vietnam, Dubai, Thailand, UK & Schengen nations.'
    },
    {
      icon: <Hotel className="service-icon" size={28} />,
      title: 'Curated 4★ & 5★ Hotels',
      desc: 'Pre-vetted luxury hotels, beach villas, and boutique resorts with complimentary daily breakfast and transfers.'
    },
    {
      icon: <Compass className="service-icon" size={28} />,
      title: 'Tailor-Made Holiday Itineraries',
      desc: 'Customized family trips, solo adventures, and group travel created around your exact budget and dates.'
    },
    {
      icon: <HeartHandshake className="service-icon" size={28} />,
      title: 'Honeymoon & Romantic Escapes',
      desc: 'Dream packages to Bali and Maldives with candlelit dinners, overwater villas, and complimentary honeymoon perks.'
    },
    {
      icon: <ShieldCheck className="service-icon" size={28} />,
      title: '24/7 Ground Assistance',
      desc: 'Dedicated Sinhala and English speaking tour coordinators on call around the clock during your trip abroad.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <RevealOnScroll animation="fade-down" duration={750}>
          <div className="services-header-center">
            <span className="services-pretitle">WHY CHOOSE NATIONWIDE</span>
            <h2 className="services-main-title">End-to-End Travel Services</h2>
            <p className="services-subtitle">
              From the moment you pick your destination until you touch down back home in Sri Lanka, 
              Nationwide.lk ensures seamless care.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Visual Services Showcase Cards */}
        <div className="services-visual-showcase">
          <RevealOnScroll animation="fade-right" duration={750}>
            <div className="service-visual-card">
              <div className="service-visual-img-wrap">
                <img 
                  src="/images/travel-ticketing-booking.jpg" 
                  alt="Worldwide flight tickets and ready to fly holiday travel" 
                  className="service-visual-img" 
                  loading="lazy"
                />
                <span className="service-visual-badge">AIR TICKETING DESK</span>
              </div>
              <div className="service-visual-body">
                <span className="service-visual-category">IATA Accredited Airfares</span>
                <h3 className="service-visual-title">Worldwide Airline Flight Reservations</h3>
                <p className="service-visual-desc">
                  Exclusive flight booking rates with SriLankan Airlines, Emirates, Singapore Airlines, Qatar Airways & AirAsia. Complete seat reservation, meal selection & baggage allowance assistance.
                </p>
                <div className="service-visual-features">
                  <span className="service-perk-item">✓ Best Fare Guarantee</span>
                  <span className="service-perk-item">✓ 24/7 Re-scheduling Support</span>
                  <span className="service-perk-item">✓ Group Flight Deals</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-left" duration={750}>
            <div className="service-visual-card">
              <div className="service-visual-img-wrap">
                <img 
                  src="/images/visa-consultation.jpg" 
                  alt="Professional tourist visa consultation and document assistance" 
                  className="service-visual-img" 
                  loading="lazy"
                />
                <span className="service-visual-badge">OFFICIAL VISA DESK</span>
              </div>
              <div className="service-visual-body">
                <span className="service-visual-category">Senior Visa Specialists</span>
                <h3 className="service-visual-title">Express Tourist Visa Assistance</h3>
                <p className="service-visual-desc">
                  Hassle-free, step-by-step document preparation and fast-track submission for UK, Schengen Europe, Dubai, Singapore, Malaysia, Vietnam, Thailand and India.
                </p>
                <div className="service-visual-features">
                  <span className="service-perk-item">✓ 99%+ Approval Track Record</span>
                  <span className="service-perk-item">✓ In-person Document Review</span>
                  <span className="service-perk-item">✓ Form Filling & Interview Prep</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="services-grid">
          {services.map((srv, index) => (
            <RevealOnScroll 
              key={index} 
              animation="fade-up" 
              delay={(index % 3) * 120} 
              duration={700}
            >
              <div className="service-card">
                <div className="service-icon-box">
                  {srv.icon}
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
