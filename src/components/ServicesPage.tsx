import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Plane, 
  FileCheck, 
  Hotel, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Briefcase, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ServicesPageProps {
  onBackToHome: () => void;
  onPlanTrip: () => void;
  onExploreTours: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onPlanTrip,
  onExploreTours
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const detailedServices = [
    {
      icon: <Plane size={32} className="text-blue-600" />,
      title: 'Worldwide Air Ticket Booking',
      tagline: 'Direct GDS access & exclusive negotiated airfares for Sri Lankans',
      description: 'We partner directly with leading international airlines including SriLankan Airlines, Singapore Airlines, Emirates, Qatar Airways, Malaysia Airlines, Thai Airways, and AirAsia. Whether you require flexible date modifications, student luggage allowances, or group airfare discounts, our ticketing desk guarantees the lowest transparent quotes.',
      benefits: [
        'Confirmed seat allocations & infant / bassinet arrangements',
        'Special extra 10kg-15kg student & holiday luggage allowances',
        'Instant re-issuance & date change assistance 24/7',
        'Direct connection options with minimum transit layovers'
      ]
    },
    {
      icon: <FileCheck size={32} className="text-amber-500" />,
      title: 'Express Tourist Visa Assistance Desk',
      tagline: '99.2% approval rate with comprehensive consular document vetting',
      description: 'Navigating foreign embassies and visa requirements can be daunting. Our seasoned visa officers guide you through every stage—from VFS Global appointment booking and biometric preparation to official cover letters, financial documentation audit, and embassy interview coaching for Schengen nations, UK, Dubai, Singapore, Vietnam, Thailand, Japan, and India.',
      benefits: [
        'Complete document verification before consular submission',
        'Official embassy appointment booking & biometric tracking',
        'Express 24-48 hour e-Visa processing for Dubai, Malaysia, Singapore & Vietnam',
        'High success record with Schengen (France, Italy, Swiss) & UK visit visas'
      ]
    },
    {
      icon: <Compass size={32} className="text-indigo-600" />,
      title: 'Tailor-Made Holiday Itineraries',
      tagline: 'Bespoke private tours designed around your exact schedule & budget',
      description: 'Do not settle for generic group buses if you prefer traveling at your own pace. We craft custom private travel itineraries complete with personal chauffeur-driven air-conditioned vehicles, handpicked sightseeing stops, kid-friendly theme park tickets, and free leisure days for shopping and relaxation.',
      benefits: [
        '100% customized travel dates with no rigid group schedules',
        'Private chauffeur-driven transport with English & Sinhala coordinators',
        'Curated combinations (e.g. Bangkok + Pattaya + Phuket or Singapore + Malaysia)',
        'VIP skip-the-line attraction tickets (Burj Khalifa, Universal Studios, Eiffel Tower)'
      ]
    },
    {
      icon: <Hotel size={32} className="text-emerald-600" />,
      title: 'Curated 4★ & 5★ Hotel Accommodations',
      tagline: 'Pre-inspected luxury stays with daily breakfast & prime city locations',
      description: 'A bad hotel can ruin an otherwise perfect vacation. Nationwide.lk only partners with verified 4-star and 5-star properties located in safe, central neighborhoods close to shopping malls, metro stations, and halal/Sri Lankan dining options, complete with complimentary daily buffet breakfasts.',
      benefits: [
        'Direct contracts with Marriott, Accor, Centara, Hilton & Shangri-La',
        'Prime locations in Pratunam (Bangkok), Bukit Bintang (KUL), and Dubai Marina',
        'Guaranteed twin, triple, and interconnecting family rooms',
        'Complimentary room upgrades & early check-in upon availability'
      ]
    },
    {
      icon: <HeartHandshake size={32} className="text-rose-500" />,
      title: 'Honeymoon & Romantic Escapes',
      tagline: 'Unforgettable moments in Bali, Maldives, Swiss Alps & Paris',
      description: 'Celebrate the beginning of your journey together with exquisite romantic experiences. From private overwater pool villas in the Maldives and candlelit seafood dinners on Jimbaran Beach Bali, to champagne cruises on the Seine in Paris, we attend to every intimate detail.',
      benefits: [
        'Complimentary honeymoon flower beds, cakes & wine upon arrival',
        'Couples spa sessions & private sunset yacht sailings',
        'Dedicated romantic photo spots with professional photography recommendations',
        'Flexible schedules giving newly married couples privacy and comfort'
      ]
    },
    {
      icon: <Briefcase size={32} className="text-cyan-600" />,
      title: 'Corporate Travel & MICE Tours',
      tagline: 'Meetings, incentives, conferences & exhibitions for corporate leaders',
      description: 'We handle end-to-end travel logistics for Sri Lankan corporate organizations, banks, insurance teams, and dealer incentive trips. From 20 to 300+ delegate groups, we manage flight charting, corporate conference hall setups, gala dinners, team building events, and tax-compliant documentation.',
      benefits: [
        'Official tax invoices & corporate credit billing facilities',
        'Dedicated senior tour manager accompanying large groups abroad',
        'Branded travel badges, corporate kits & gala dinner entertainment',
        'Custom team building activities & private chartered boat cruises'
      ]
    },
    {
      icon: <Sparkles size={32} className="text-yellow-600" />,
      title: 'Pilgrimage & Sacred Spiritual Journeys',
      tagline: 'Dambadiva Buddhist tours, Velankanni Church & Thirupathi Shrines',
      description: 'Embark on deeply fulfilling spiritual pilgrimages with complete comfort and peace of mind. Our sacred Dambadiva Buddhist tours to Bodh Gaya, Sarnath, and Kusinara include reputable monk guidance, three daily home-style Sri Lankan meals, and elderly friendly transport.',
      benefits: [
        'Accompanied by venerable monks and experienced pilgrimage guides',
        'Daily Sri Lankan rice and curry meals prepared by our onboard cooks',
        'Wheelchair friendly deluxe AC coaches for senior citizens',
        'Sacred puja arrangements at Velankanni, Madhu, Thirupathi & Varanasi'
      ]
    },
    {
      icon: <ShieldCheck size={32} className="text-teal-600" />,
      title: 'Travel Insurance & 24/7 Ground Concierge',
      tagline: 'Medical emergency coverage up to $100,000 & 24/7 Sinhala/English support',
      description: 'Your safety is our utmost priority. Every international journey is backed by comprehensive overseas travel insurance accepted by European Schengen and UK immigration, along with 24/7 emergency hotlines with ground representatives ready to assist you in case of any flight delay or medical necessity.',
      benefits: [
        'Emergency overseas medical hospitalization & repatriation up to $100,000',
        'Coverage for trip cancellation, flight delays & baggage loss',
        'Live WhatsApp emergency concierge active 24 hours a day',
        'Complimentary embassy insurance certificate printouts for visa filing'
      ]
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Share Your Travel Vision',
      desc: 'Tell us your destination, preferred dates, number of travelers, and budget via our online inquiry or direct WhatsApp hotline.'
    },
    {
      num: '02',
      title: 'Custom Itinerary & Fixed Quote',
      desc: 'Within 24 hours, our senior tour planner provides a detailed day-by-day itinerary with transparent 100% all-inclusive pricing.'
    },
    {
      num: '03',
      title: 'Seamless Visa & Flight Issuance',
      desc: 'We manage your visa documentation, secure airline tickets, and provide verified hotel vouchers and confirmed activity passes.'
    },
    {
      num: '04',
      title: 'Fly with 24/7 Concierge Care',
      desc: 'Touch down abroad with private airport transfers waiting and enjoy 24/7 WhatsApp concierge support throughout your vacation.'
    }
  ];

  const faqs = [
    {
      q: 'Do your holiday packages include airfare and visa costs?',
      a: 'Yes! Most of our popular packages (such as Bangkok, Malaysia, Dubai, and Singapore) come with confirmed airline tickets, tourist visa assistance, luxury hotel accommodation, daily breakfast, and sightseeing transfers included. If you already have your own air tickets, we can deduct the flight cost and provide the ground-only package.'
    },
    {
      q: 'Can I pay for my holiday in monthly credit card installments?',
      a: 'Absolutely! We offer 0% interest installment plans up to 12, 24, or 36 months with leading Sri Lankan banks including Commercial Bank, Sampath Bank, HNB, Nations Trust Bank, and Seylan Bank.'
    },
    {
      q: 'How early should I apply for my overseas visa?',
      a: 'For eVisa destinations like Dubai, Malaysia, Singapore, and Vietnam, 2 to 3 weeks prior to travel is sufficient. For European Schengen and UK visas, we strongly advise initiating document compilation at least 6 to 8 weeks before your intended travel date to secure VFS appointments.'
    },
    {
      q: 'Can we customize the tour itinerary for our family?',
      a: 'Yes, 100%! We specialize in tailor-made vacations. You can add extra nights, substitute attractions (e.g. adding Disney or Universal Studios), choose specific hotels, or change travel dates to suit your family.'
    },
    {
      q: 'What happens if our flight is delayed or rescheduled?',
      a: 'Our 24/7 flight operations desk monitors your flight status in real time. If an airline reschedules or delays your arrival, our ground team immediately re-adjusts your airport chauffeur transfer at no extra charge.'
    }
  ];

  return (
    <div className="services-page page-container-root">
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
            <span className="breadcrumb-current">Our Services</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="page-hero-banner services-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <Sparkles size={15} />
                <span>COMPLETE TRAVEL SOLUTIONS</span>
              </span>
              <h1 className="page-main-title">
                End-to-End Travel Services Tailored for Sri Lankans
              </h1>
              <p className="page-lead-text">
                From the moment you choose your destination until you touch down safely back in Colombo, 
                Nationwide.lk takes care of every single detail with zero hidden costs and 24/7 dedicated support.
              </p>
              
              <div className="hero-cta-buttons-row">
                <button type="button" onClick={onPlanTrip} className="btn-primary">
                  <PhoneCall size={16} />
                  <span>Request Custom Service Quote</span>
                </button>
                <button type="button" onClick={onExploreTours} className="btn-secondary-outline">
                  <span>Explore Holiday Packages</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="services-detailed-section">
        <div className="container">
          <div className="services-detailed-grid">
            {detailedServices.map((service, index) => (
              <RevealOnScroll 
                key={service.title} 
                animation="fade-up" 
                delay={(index % 2) * 120} 
                duration={700}
              >
                <div className="service-detail-card">
                  <div className="service-card-top-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <span className="service-card-tagline">{service.tagline}</span>
                  <p className="service-card-desc">{service.description}</p>
                  
                  <div className="service-benefits-list">
                    <span className="benefits-label">Key Highlights & Inclusions:</span>
                    {service.benefits.map((b, i) => (
                      <div key={i} className="service-benefit-item">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    type="button" 
                    onClick={onPlanTrip}
                    className="service-card-action-link"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The 4-Step Process */}
      <section className="services-process-section">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="section-header-center">
              <span className="section-pretitle">SEAMLESS JOURNEY</span>
              <h2 className="section-main-title">How Your Booking Works in 4 Easy Steps</h2>
              <p className="section-subtitle">
                We make planning your international holiday stress-free, transparent, and exciting.
              </p>
            </div>
          </RevealOnScroll>

          <div className="process-steps-grid">
            {steps.map((st, i) => (
              <RevealOnScroll key={st.num} animation="fade-up" delay={i * 120} duration={650}>
                <div className="process-step-box">
                  <span className="step-number-watermark">{st.num}</span>
                  <div className="step-circle-badge">{st.num}</div>
                  <h4 className="step-title">{st.title}</h4>
                  <p className="step-desc">{st.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="services-faq-section">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="section-header-center">
              <span className="section-pretitle">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="section-main-title">Got Questions About Our Services?</h2>
              <p className="section-subtitle">
                Find clear answers to common inquiries about booking, installment payments, and visa processing.
              </p>
            </div>
          </RevealOnScroll>

          <div className="services-faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="faq-question-btn"
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Banner */}
      <section className="services-cta-banner-section">
        <div className="container">
          <div className="service-bottom-cta-card">
            <div className="cta-content-col">
              <h3>Ready to Experience First-Class Travel?</h3>
              <p>
                Speak with a dedicated Nationwide senior travel consultant today for instant advice, customized quotations, and current season discounts.
              </p>
              <div className="cta-hotline-row">
                <a href="tel:0112909010" className="cta-hotline-item">
                  <PhoneCall size={18} />
                  <span>0112 90 90 10</span>
                </a>
                <a href="https://wa.me/94716891891" target="_blank" rel="noopener noreferrer" className="cta-hotline-item whatsapp-btn">
                  <span>Chat on WhatsApp (0716 891 891)</span>
                </a>
              </div>
            </div>
            <button type="button" onClick={onPlanTrip} className="btn-primary cta-action-btn">
              <span>Book Appointment / Plan Trip</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
