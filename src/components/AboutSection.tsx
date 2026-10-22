import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  ArrowRight, 
  Star, 
  Building2, 
  HeartHandshake, 
  FileCheck,
  Clock
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface AboutSectionProps {
  onViewAllTours?: () => void;
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onViewAllTours,
  onContactClick
}) => {
  const stats = [
    {
      value: '12+',
      label: 'Years of Excellence',
      sub: 'Premier outbound travel'
    },
    {
      value: '15,000+',
      label: 'Happy Travelers',
      sub: 'Sri Lankan families & couples'
    },
    {
      value: '99.2%',
      label: 'Visa Approval Rate',
      sub: 'Schengen, UK, Dubai, India'
    },
    {
      value: '100%',
      label: 'Transparent Rates',
      sub: 'Zero hidden surcharges'
    }
  ];

  const pillars = [
    {
      icon: <Award className="text-amber-500" size={22} />,
      title: 'SLTDA Licensed & Accredited',
      desc: 'Officially registered with the Sri Lanka Tourism Development Authority, guaranteeing financial security and regulatory adherence.'
    },
    {
      icon: <Building2 className="text-blue-600" size={22} />,
      title: 'Direct Global Contracting',
      desc: 'Direct partnerships with 4★ & 5★ hotel chains, high-speed rail operators, and local transport fleets across Europe, Asia & the Middle East.'
    },
    {
      icon: <FileCheck className="text-emerald-600" size={22} />,
      title: 'Dedicated Visa Concierge',
      desc: 'In-house consular team providing step-by-step document preparation, biometric scheduling, and fast-track processing.'
    },
    {
      icon: <Clock className="text-purple-600" size={22} />,
      title: '24/7 On-Ground Support',
      desc: 'Dedicated Sinhala and English speaking travel specialists on call 24 hours a day via phone and WhatsApp throughout your voyage.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Sparkles size={24} className="text-amber-500" />,
      title: 'Private Chauffeured Travel',
      desc: 'No crowded tour buses. Enjoy private AC vehicles with dedicated English-speaking chauffeurs on your family and couple getaways.'
    },
    {
      icon: <ShieldCheck size={24} className="text-emerald-600" />,
      title: 'Guaranteed Inclusions',
      desc: 'All hotel breakfasts, airport transfers, city tours, and attraction passes are verified in writing before departure.'
    },
    {
      icon: <HeartHandshake size={24} className="text-sky-600" />,
      title: 'Personalized Care',
      desc: 'From custom dietary requirements to wheelchair assistance and special room arrangements, we cater to every travel detail.'
    },
    {
      icon: <Compass size={24} className="text-indigo-600" />,
      title: 'Bespoke Itineraries',
      desc: 'Flexible travel pacing whether you are exploring bustling Bangkok, romantic Bali, sacred Velankanni, or the Swiss Alps.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Top Header */}
        <RevealOnScroll animation="fade-down" duration={750}>
          <div className="about-header-center">
            <div className="about-eyebrow-pill">
              <Sparkles size={14} className="text-amber-400" />
              <span>ABOUT NATIONWIDE TRAVELS • SRI LANKA</span>
            </div>
            <h2 className="about-main-title">
              Crafting Unforgettable Journeys with Trust, Transparency & Heart
            </h2>
            <p className="about-subtitle">
              Sri Lanka's trusted outbound travel agency, bridging world-class international destinations 
              with seamless local service from our Colombo flagship office.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Two-Column Split Presentation */}
        <div className="about-split-grid">
          {/* Left Column: Narrative & Pillars */}
          <div className="about-left-col">
            <RevealOnScroll animation="fade-right" duration={750}>
              <div className="about-story-card">
                <span className="story-badge">Our Legacy & Purpose</span>
                <h3 className="story-heading">
                  Your Reliable Companion to the World's Most Captivating Horizons
                </h3>
                <p className="story-text">
                  Founded with a vision to revolutionize outbound holiday travel for Sri Lankans, 
                  <strong> Nationwide.lk</strong> has grown into one of the island's most respected travel agencies. 
                  We believe exploring the world should be exhilarating, completely stress-free, and accessible without compromise.
                </p>
                <p className="story-text">
                  Whether you are planning a dream honeymoon overlooking the turquoise cliffs of Bali, 
                  a sacred pilgrimage to Velankanni and the ancient shrines of India, a family holiday 
                  to the vibrant theme parks of Dubai and Singapore, or a bucket-list 12-day grand voyage 
                  across Paris, Venice, and Rome—our seasoned destination specialists curate every moment with unmatched attention to detail.
                </p>

                {/* 4 Trust Pillars */}
                <div className="about-pillars-grid">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="about-pillar-item">
                      <div className="pillar-icon-wrap">
                        {pillar.icon}
                      </div>
                      <div className="pillar-content">
                        <h4 className="pillar-title">{pillar.title}</h4>
                        <p className="pillar-desc">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Actions */}
                <div className="about-action-row">
                  {onContactClick ? (
                    <button 
                      type="button" 
                      onClick={onContactClick} 
                      className="btn-primary about-cta-btn"
                      id="about-contact-btn"
                    >
                      <PhoneCall size={17} />
                      <span>Speak with a Travel Expert</span>
                    </button>
                  ) : (
                    <a 
                      href="#contact" 
                      className="btn-primary about-cta-btn"
                    >
                      <PhoneCall size={17} />
                      <span>Speak with a Travel Expert</span>
                    </a>
                  )}

                  {onViewAllTours && (
                    <button 
                      type="button" 
                      onClick={onViewAllTours} 
                      className="btn-outline-about"
                      id="about-view-all-tours-btn"
                    >
                      <span>Explore All Tour Packages</span>
                      <ArrowRight size={17} />
                    </button>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Layered Visual Composition */}
          <div className="about-right-col">
            <RevealOnScroll animation="fade-left" duration={800}>
              <div className="about-visual-showcase">
                {/* Primary Large Image */}
                <div className="about-main-img-wrap">
                  <img 
                    src="/images/consultation.jpg" 
                    alt="Nationwide Travels Colombo consultation desk and travel planning" 
                    className="about-main-img" 
                  />
                  <div className="about-img-gradient-overlay"></div>

                  {/* Floating Badge 1: SLTDA Accreditation */}
                  <div className="about-floating-badge badge-top-left">
                    <div className="badge-pulse-dot"></div>
                    <div>
                      <span className="badge-kicker">GOVERNMENT ACCREDITED</span>
                      <strong className="badge-title">SLTDA Registered Agency</strong>
                    </div>
                  </div>

                  {/* Floating Badge 2: Colombo Flagship Desk */}
                  <div className="about-floating-badge badge-bottom-right">
                    <Building2 size={20} className="text-amber-400" />
                    <div>
                      <span className="badge-kicker">COLOMBO 03 FLAGSHIP</span>
                      <strong className="badge-title">Walk-In Lounge & Support</strong>
                    </div>
                  </div>
                </div>

                {/* Secondary Accent Card: Honeymoon & Worldwide Experience */}
                <div className="about-secondary-card">
                  <div className="secondary-img-wrap">
                    <img 
                      src="/images/bali-couple-escapes.jpg" 
                      alt="Romantic Bali holiday curated by Nationwide Travels" 
                      className="secondary-img" 
                    />
                  </div>
                  <div className="secondary-info">
                    <div className="secondary-rating-row">
                      <div className="stars-cluster">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="star-filled text-amber-400" fill="currentColor" />
                        ))}
                      </div>
                      <span className="rating-score">4.95 / 5.0</span>
                    </div>
                    <h5 className="secondary-title">1,500+ Verified Traveler Reviews</h5>
                    <p className="secondary-text">
                      "Nationwide handled our visas, private cars, and luxury hotels flawlessly. Best travel agency in Sri Lanka!"
                    </p>
                    <div className="secondary-tag">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>Verified Client Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Key Numerical Metrics Counter Row */}
        <RevealOnScroll animation="scale-up" duration={750}>
          <div className="about-metrics-bar">
            {stats.map((st, i) => (
              <div key={i} className="about-metric-cell">
                <span className="metric-num">{st.value}</span>
                <span className="metric-label">{st.label}</span>
                <span className="metric-sub">{st.sub}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Why Sri Lankans Choose Nationwide Grid */}
        <div className="about-why-us-wrap">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="why-us-header">
              <span className="why-us-tag">THE NATIONWIDE ADVANTAGE</span>
              <h3 className="why-us-title">Why Travelers Across Sri Lanka Rely On Us</h3>
            </div>
          </RevealOnScroll>

          <div className="why-us-cards-grid">
            {whyChooseUs.map((item, idx) => (
              <RevealOnScroll key={idx} animation="fade-up" delay={idx * 100} duration={650}>
                <div className="why-us-card">
                  <div className="why-us-icon-circle">
                    {item.icon}
                  </div>
                  <h4 className="why-us-card-title">{item.title}</h4>
                  <p className="why-us-card-desc">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Leadership Commitment Quote Banner */}
        <RevealOnScroll animation="fade-up" duration={750}>
          <div className="about-mission-banner">
            <div className="mission-content">
              <span className="mission-quote-mark">“</span>
              <p className="mission-quote-text">
                Our mission is simple: to eliminate every anxiety from international travel so that you, your family, 
                and your loved ones can focus on experiencing the joy of discovery and making lifelong memories.
              </p>
              <div className="mission-signature-row">
                <div className="sig-details">
                  <strong className="sig-name">The Nationwide Travels Team</strong>
                  <span className="sig-role">Colombo Flagship Operations • Sri Lanka</span>
                </div>
                <div className="mission-action">
                  <a 
                    href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-mission"
                  >
                    <PhoneCall size={16} />
                    <span>WhatsApp 24/7 Desk: 0716 891 891</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
