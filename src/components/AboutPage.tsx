import React from 'react';
import { 
  ArrowLeft, 
  Award, 
  Compass, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  Star, 
  Building2, 
  HeartHandshake, 
  FileCheck
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface AboutPageProps {
  onBackToHome: () => void;
  onExploreTours: () => void;
  onPlanTrip: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onExploreTours,
  onPlanTrip
}) => {
  const stats = [
    {
      value: '12+',
      label: 'Years of Excellence',
      sub: 'Trusted outbound travel firm in Sri Lanka'
    },
    {
      value: '15,000+',
      label: 'Happy Travelers',
      sub: 'Sri Lankan families, couples & corporate teams'
    },
    {
      value: '99.2%',
      label: 'Visa Approval Rate',
      sub: 'Schengen, UK, Dubai, Singapore, Vietnam'
    },
    {
      value: '100%',
      label: 'Transparent Rates',
      sub: 'Zero hidden surcharges or surprise taxes'
    }
  ];

  const pillars = [
    {
      icon: <Award className="text-amber-500" size={28} />,
      title: 'SLTDA Licensed & Accredited',
      desc: 'Officially registered with the Sri Lanka Tourism Development Authority, guaranteeing regulatory compliance, traveler safety, and complete financial security.'
    },
    {
      icon: <Building2 className="text-blue-600" size={28} />,
      title: 'Direct Global Contracting',
      desc: 'We contract directly with premier 4★ and 5★ hotel chains, luxury transport fleets, and rail operators across Europe and Asia, passing maximum savings onto you.'
    },
    {
      icon: <HeartHandshake className="text-rose-500" size={28} />,
      title: 'Dedicated Ground Concierge',
      desc: 'Our travelers are never left stranded. Dedicated Sinhala and English speaking coordinators stay connected with you via WhatsApp 24/7 throughout your journey.'
    },
    {
      icon: <FileCheck className="text-emerald-600" size={28} />,
      title: 'Complete Visa Assistance',
      desc: 'Our seasoned visa specialists handle VFS appointments, biometric guidance, bank statement vetting, and document translation to maximize your approval chances.'
    }
  ];

  const comparison = [
    {
      feature: 'Pricing Transparency',
      nationwide: '100% Fixed, All-Inclusive pricing with taxes & service charges upfront.',
      others: 'Low initial quotes that inflate with hidden departure taxes and surcharge fees.'
    },
    {
      feature: 'Hotel Standards',
      nationwide: 'Handpicked, central 4★ and 5★ hotels close to city centers and transit.',
      others: 'Distant, suburban motels located far away from key shopping and tourist sights.'
    },
    {
      feature: 'Ground Assistance',
      nationwide: '24/7 dedicated Sinhala & English concierge support on WhatsApp throughout the trip.',
      others: 'Handed off to third-party agents with no active assistance when delays occur.'
    },
    {
      feature: 'Itinerary Quality',
      nationwide: 'Balanced itineraries with relaxed timings, quality meals, and free shopping time.',
      others: 'Rushed group tours packed with aggressive tourist shopping commission traps.'
    },
    {
      feature: 'Payment Options',
      nationwide: '0% interest bank installment plans up to 36 months with all leading Sri Lankan banks.',
      others: 'Strict full-cash upfront policies with no easy banking installment support.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Inception', desc: 'Nationwide Travels launched in Colombo with specialized tours to Bangkok and Singapore.' },
    { year: '2017', title: 'SLTDA Accreditation', desc: 'Officially awarded full outbound travel license and expanded into Dubai and India pilgrimage circuits.' },
    { year: '2020', title: 'European Expansion', desc: 'Formed direct partnerships with European transport and hotel operators across France, Italy, and Swiss Alps.' },
    { year: '2023', title: '10,000th Traveler Milestone', desc: 'Celebrated serving over 10,000 Sri Lankan vacationers with a 99.2% positive client satisfaction score.' },
    { year: '2026', title: 'Digital Luxury Platform', desc: 'Unveiled nationwide.lk digital booking platform with transparent currency calculators and instant quotes.' }
  ];

  return (
    <div className="about-page page-container-root">
      {/* 1. Page Header Breadcrumbs & Back Navigation */}
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
            <span className="breadcrumb-current">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Banner */}
      <section className="page-hero-banner about-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <Compass size={15} />
                <span>OUR STORY & HERITAGE</span>
              </span>
              <h1 className="page-main-title">
                Crafting Exceptional World Journeys for Sri Lankans
              </h1>
              <p className="page-lead-text">
                For over 12 years, Nationwide.lk has been the gold standard in premium outbound leisure and corporate travel in Sri Lanka. 
                We combine meticulous planning with unmatched personalized care so every trip feels like a five-star vacation.
              </p>

              <div className="hero-cta-buttons-row">
                <button type="button" onClick={onExploreTours} className="btn-primary">
                  <span>Explore Tour Packages</span>
                  <ArrowRight size={16} />
                </button>
                <button type="button" onClick={onPlanTrip} className="btn-secondary-outline">
                  <PhoneCall size={16} />
                  <span>Talk to a Travel Director</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Key Stats */}
      <section className="about-stats-strip">
        <div className="container">
          <div className="stats-strip-grid">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} animation="fade-up" delay={i * 100} duration={600}>
                <div className="stat-strip-box">
                  <span className="stat-number">{s.value}</span>
                  <h4 className="stat-title">{s.label}</h4>
                  <p className="stat-caption">{s.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <RevealOnScroll animation="fade-right" duration={750} className="w-full">
              <div className="story-image-wrap">
                <img 
                  src="/images/europe-marvels-12d11n.jpg" 
                  alt="Nationwide Travels Europe Journey" 
                  className="story-main-img" 
                />
                <div className="story-badge-floating">
                  <Star size={20} className="text-amber-400 fill-amber-400" />
                  <div>
                    <strong>4.9 / 5.0 Star Rating</strong>
                    <span>From 1,450+ Verified Reviews</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-left" duration={750} className="w-full">
              <div className="story-content-col">
                <span className="section-pretitle">WHO WE ARE</span>
                <h2 className="section-main-title">Born from a Passion for Flawless Travel</h2>
                <p className="story-lead-para">
                  Nationwide.lk was established with a singular vision: to dismantle the stress, inflated hidden costs, 
                  and impersonal service that often plague outbound holiday planning in Sri Lanka.
                </p>
                <p className="story-body-para">
                  We believe that an international holiday is more than just booking flights and hotels; it is about cherished family memories, 
                  recharging from busy corporate lives, and experiencing the wonders of the world in comfort. 
                  That is why we personally inspect hotels, negotiate directly with overseas airlines and tour operators, 
                  and maintain a dedicated concierge desk ready to assist you anytime.
                </p>

                <div className="story-key-points">
                  <div className="point-item">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                    <span>Registered under Sri Lanka Tourism Development Authority (SLTDA).</span>
                  </div>
                  <div className="point-item">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                    <span>Direct ground operations in 12+ international destinations.</span>
                  </div>
                  <div className="point-item">
                    <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                    <span>0% interest bank installment partnerships for stress-free budgeting.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. Four Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="section-header-center">
              <span className="section-pretitle">THE NATIONWIDE ADVANTAGE</span>
              <h2 className="section-main-title">Built on Four Uncompromising Pillars</h2>
              <p className="section-subtitle">
                Everything we do is designed to protect your holiday investment and deliver the highest standard of travel comfort.
              </p>
            </div>
          </RevealOnScroll>

          <div className="pillars-grid-layout">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} animation="fade-up" delay={i * 120} duration={650}>
                <div className="pillar-feature-card">
                  <div className="pillar-icon-box">{p.icon}</div>
                  <h3 className="pillar-card-title">{p.title}</h3>
                  <p className="pillar-card-desc">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Nationwide vs Others Comparison Table */}
      <section className="about-comparison-section">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="section-header-center">
              <span className="section-pretitle">HONEST COMPARISON</span>
              <h2 className="section-main-title">Why Smart Travelers Choose Nationwide.lk</h2>
              <p className="section-subtitle">
                See how our transparent, quality-first approach compares to ordinary tour agencies.
              </p>
            </div>
          </RevealOnScroll>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="nationwide-col">Nationwide.lk Standard</th>
                  <th className="others-col">Ordinary Tour Operators</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="feature-name"><strong>{row.feature}</strong></td>
                    <td className="nationwide-cell">
                      <div className="cell-flex">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                        <span>{row.nationwide}</span>
                      </div>
                    </td>
                    <td className="others-cell">
                      <span>{row.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Milestones */}
      <section className="about-milestones-section">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="section-header-center">
              <span className="section-pretitle">OUR JOURNEY</span>
              <h2 className="section-main-title">Milestones of Growth & Trust</h2>
            </div>
          </RevealOnScroll>

          <div className="milestones-timeline-grid">
            {milestones.map((m) => (
              <div key={m.year} className="milestone-box">
                <span className="milestone-year">{m.year}</span>
                <h4 className="milestone-title">{m.title}</h4>
                <p className="milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <div className="about-cta-card">
            <h3>Start Planning Your Next Journey with Confidence</h3>
            <p>
              Join over 15,000 delighted Sri Lankan travelers who trust Nationwide.lk for their international holidays.
            </p>
            <div className="about-cta-btn-group">
              <button type="button" onClick={onExploreTours} className="btn-primary">
                <span>View All Tour Packages</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" onClick={onPlanTrip} className="btn-secondary-white">
                <PhoneCall size={16} />
                <span>Contact Colombo Office</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
