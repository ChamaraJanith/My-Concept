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
