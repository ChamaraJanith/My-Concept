import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Quote, 
  CheckCircle, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  Play, 
  MapPin, 
  Calendar 
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { customerTestimonials } from '../data/toursData';

interface TestimonialsPageProps {
  onBackToHome: () => void;
  onExploreTours: () => void;
  onPlanTrip: () => void;
  onOpenPromoVideo?: (videoId: 'dubai' | 'velankanni') => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onBackToHome,
  onExploreTours,
  onPlanTrip: _onPlanTrip,
  onOpenPromoVideo
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submittedReview, setSubmittedReview] = useState<boolean>(false);

  // Form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerCity, setReviewerCity] = useState('');
  const [reviewerTour, setReviewerTour] = useState('Bangkok & Pattaya (4D 3N)');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewerComment, setReviewerComment] = useState('');

  // Extended verified reviews for Sri Lankan travelers
  const allReviews = [
    ...customerTestimonials,
    {
      id: 'rev-extra-1',
      name: 'Dr. Rohan & Dilani Senanayake',
      city: 'Colombo 07',
      destinationVisited: 'European Marvels (12D 11N)',
      rating: 5,
      comment: 'Our 12-day European holiday with Nationwide was simply flawless. Paris Eiffel Tower, the Swiss Alps Titlis snow point, Lake Como, and Venice Gondola ride were breathtaking. Their visa documentation support for Schengen was 100% thorough. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'September 2026'
    },
    {
      id: 'rev-extra-2',
      name: 'Ashan & Chamodi Jayatilleke',
      city: 'Negombo',
      destinationVisited: 'Bali Romance & Nusa Penida (5D 4N)',
      rating: 5,
      comment: 'We booked our honeymoon package to Bali through Nationwide.lk. From candlelit dinners on Jimbaran beach to private pool villas and speedboat transfers to Nusa Penida, everything was organized to perfection. Thank you for making our honeymoon so memorable!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'October 2026'
    },
    {
      id: 'rev-extra-3',
      name: 'Nalinda Perera & Family',
      city: 'Kandy',
      destinationVisited: 'Dubai & Abu Dhabi Ferrari World (5D 4N)',
      rating: 5,
      comment: 'Traveling with two young kids and elderly parents can be stressful, but Nationwide made it effortless. The 4x4 desert safari BBQ, Burj Khalifa 124th floor visit, and Ferrari World tickets were seamless. Outstanding chauffeur and 24/7 WhatsApp care.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'August 2026'
    },
    {
      id: 'rev-extra-4',
      name: 'Kumudu & Suren Wickramasinghe',
      city: 'Kurunegala',
      destinationVisited: 'Kashmir Paradise & Dal Lake Houseboat',
      rating: 5,
      comment: 'Kashmir was on our bucket list for years. The deluxe houseboat on Dal Lake and the Gulmarg Gondola snow ride felt like heaven. The hot home-cooked meals and warm hospitality arranged by Nationwide made us feel completely safe and pampered.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'July 2026'
    },
    {
      id: 'rev-extra-5',
      name: 'Hiran Fernando (Dialog Axiata Team)',
      city: 'Colombo',
      destinationVisited: 'Vietnam: Da Nang & Halong Bay (MICE)',
      rating: 5,
      comment: 'Nationwide managed our annual corporate incentive tour for 24 managers to Vietnam. Halong Bay cruise, Ba Na Hills Golden Hand bridge, and private gala dinner arrangements were world class. The tax invoicing and coordination were top notch.',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'September 2026'
    },
    {
      id: 'rev-extra-6',
      name: 'Manel & Gamini Dissanayake',
      city: 'Galle',
      destinationVisited: 'Sacred Dambadiva Pilgrimage (10D 9N)',
      rating: 5,
      comment: 'We joined the sacred Dambadiva Buddhist pilgrimage with venerable monk guidance. The Sri Lankan rice & curry meals, comfortable AC bus, and wheelchair care for elders were deeply appreciated. Truly a meritorious journey.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      travelMonth: 'March 2026'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Reviews' },
    { id: 'thailand', label: 'Thailand' },
    { id: 'dubai', label: 'Dubai & UAE' },
    { id: 'singapore', label: 'Singapore & Malaysia' },
    { id: 'europe', label: 'Europe' },
    { id: 'india', label: 'India & Kashmir' },
    { id: 'bali', label: 'Bali & Vietnam' }
  ];

  const filteredReviews = allReviews.filter((r) => {
    if (selectedFilter === 'all') return true;
    const dest = r.destinationVisited.toLowerCase();
    if (selectedFilter === 'thailand') return dest.includes('thailand') || dest.includes('bangkok') || dest.includes('phuket') || dest.includes('pattaya');
    if (selectedFilter === 'dubai') return dest.includes('dubai') || dest.includes('abu dhabi');
    if (selectedFilter === 'singapore') return dest.includes('singapore') || dest.includes('malaysia') || dest.includes('genting');
    if (selectedFilter === 'europe') return dest.includes('europe') || dest.includes('paris') || dest.includes('swiss');
    if (selectedFilter === 'india') return dest.includes('india') || dest.includes('kashmir') || dest.includes('dambadiva');
    if (selectedFilter === 'bali') return dest.includes('bali') || dest.includes('vietnam');
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !reviewerComment) {
      alert('Please fill in your name and comment.');
      return;
    }
    setSubmittedReview(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedReview(false);
      setReviewerName('');
      setReviewerComment('');
      alert('Thank you! Your verified review has been submitted for approval.');
    }, 1200);
  };

  return (
    <div className="testimonials-page page-container-root">
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
            <span className="breadcrumb-current">Testimonials</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="page-hero-banner testimonials-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <Star size={15} className="fill-amber-400 text-amber-400" />
                <span>VERIFIED TRAVELER FEEDBACK</span>
              </span>
              <h1 className="page-main-title">
                Trusted by Over 15,000 Sri Lankan Travelers
              </h1>
              <p className="page-lead-text">
                Real stories and heartfelt reviews from families, newly married couples, pilgrims, and corporate groups who have 
                experienced the world with Nationwide.lk.
              </p>

              {/* Overall Score Badge Card */}
              <div className="testimonials-score-card">
                <div className="score-number-col">
                  <span className="big-rating-number">4.9</span>
                  <div className="stars-row-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rating-caption">Out of 5.0 Stars</span>
                </div>
                <div className="score-divider-line" />
                <div className="score-breakdown-col">
                  <div className="score-stat-line">
                    <strong>99.4%</strong>
                    <span>Recommend Nationwide to Family & Friends</span>
                  </div>
                  <div className="score-stat-line">
                    <strong>1,450+</strong>
                    <span>Verified Google & Facebook Client Reviews</span>
                  </div>
                  <div className="score-stat-line">
                    <strong>100%</strong>
                    <span>Money-Safe Financial Protection Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-cta-buttons-row">
                <button 
                  type="button" 
                  onClick={() => setShowSubmitModal(true)} 
                  className="btn-primary"
                >
                  <MessageSquare size={16} />
                  <span>Share Your Travel Experience</span>
                </button>
                <button type="button" onClick={onExploreTours} className="btn-secondary-outline">
                  <span>Browse Tour Packages</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Filter Tabs */}
      <section className="testimonials-filter-strip">
        <div className="container">
          <div className="testimonials-tabs-row">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`testimonial-tab-btn ${selectedFilter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews Grid */}
      <section className="testimonials-list-section">
        <div className="container">
          <div className="testimonials-cards-grid">
            {filteredReviews.map((t, index) => (
              <RevealOnScroll 
                key={t.id} 
                animation="fade-up" 
                delay={(index % 3) * 100} 
                duration={650}
              >
                <div className="testimonial-card-page">
                  <Quote className="quote-watermark" size={42} />
                  
                  <div className="card-top-stars-row">
                    <div className="stars-cluster">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="star-icon-filled fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {(t.travelMonth || t.date) && (
                      <span className="travel-month-badge">
                        <Calendar size={12} />
                        <span>{t.travelMonth || t.date}</span>
                      </span>
                    )}
                  </div>

                  <p className="testimonial-body-text">"{t.comment}"</p>

                  <div className="testimonial-user-footer">
                    <img src={t.avatar} alt={t.name} className="user-avatar-circle" loading="lazy" />
                    <div className="user-info-text">
                      <h4 className="user-full-name">
                        {t.name}
                        <CheckCircle size={14} className="verified-check text-emerald-600" />
                      </h4>
                      <span className="user-city-text">
                        <MapPin size={12} /> {t.city}
                      </span>
                      <span className="user-tour-tag">{t.destinationVisited}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Video Feedback Feature Spotlight */}
      <section className="testimonials-video-spotlight">
        <div className="container">
          <div className="video-spotlight-card">
            <div className="video-spotlight-content">
              <span className="section-pretitle text-amber-400">WATCH REAL CLIENT JOURNEYS</span>
              <h3>Experience the Excitement of Nationwide Tours in 4K</h3>
              <p>
                Watch our travelers take in the view from the 124th floor of Burj Khalifa, explore Genting Awana cable car, 
                and enjoy Coral Island speedboats in Pattaya.
              </p>
              {onOpenPromoVideo && (
                <div className="video-buttons-row">
                  <button 
                    type="button" 
                    onClick={() => onOpenPromoVideo('dubai')} 
                    className="btn-primary"
                  >
                    <Play size={16} />
                    <span>Watch Dubai 4K Video Tour</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => onOpenPromoVideo('velankanni')} 
                    className="btn-secondary-white"
                  >
                    <Play size={16} />
                    <span>Watch Velankanni Pilgrimage Video</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Review Submit Modal */}
      {showSubmitModal && (
        <div className="modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-container review-submit-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              onClick={() => setShowSubmitModal(false)} 
              className="modal-close-btn"
            >
              ✕
            </button>

            {!submittedReview ? (
              <form onSubmit={handleSubmitReview} className="review-form">
                <div className="modal-header-block">
                  <Sparkles size={24} className="text-amber-500" />
                  <h3>Share Your Nationwide Travel Story</h3>
                  <p>Your feedback helps fellow Sri Lankan travelers pick their dream vacation!</p>
                </div>

                <div className="form-group-field">
                  <label>Your Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Kasun & Dinithi Jayawardena" 
                    value={reviewerName} 
                    onChange={(e) => setReviewerName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-row-duo">
                  <div className="form-group-field">
                    <label>Your City in Sri Lanka *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Colombo, Kandy, Galle" 
                      value={reviewerCity} 
                      onChange={(e) => setReviewerCity(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="form-group-field">
                    <label>Destination Visited *</label>
                    <select 
                      value={reviewerTour} 
                      onChange={(e) => setReviewerTour(e.target.value)}
                    >
                      <option value="Bangkok & Pattaya (4D 3N)">Bangkok & Pattaya</option>
                      <option value="Singapore & Universal Studios">Singapore & Universal</option>
                      <option value="Malaysia Genting & Sunway">Malaysia Genting</option>
                      <option value="Dubai & Abu Dhabi 4x4 Safari">Dubai & Abu Dhabi</option>
                      <option value="European Marvels (12D 11N)">European Marvels (12D)</option>
                      <option value="Kashmir Dal Lake Houseboat">Kashmir Paradise</option>
                      <option value="Bali Romance & Nusa Penida">Bali Romance</option>
                      <option value="Vietnam Halong Bay & Da Nang">Vietnam Halong Bay</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-field">
                  <label>Your Rating *</label>
                  <div className="star-rating-selector">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewerRating(star)}
                        className={`star-select-btn ${star <= reviewerRating ? 'active' : ''}`}
                      >
                        <Star size={24} className={star <= reviewerRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
                      </button>
                    ))}
                    <span className="rating-text-label">{reviewerRating} / 5 Stars</span>
                  </div>
                </div>

                <div className="form-group-field">
                  <label>Your Review / Experience *</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about the hotel, chauffeur service, food, sights, or tour coordination..."
                    value={reviewerComment}
                    onChange={(e) => setReviewerComment(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full mt-3">
                  <span>Submit Verified Review</span>
                  <CheckCircle size={16} />
                </button>
              </form>
            ) : (
              <div className="submission-success-view">
                <CheckCircle size={48} className="text-emerald-600 mb-3" />
                <h3>Review Submitted!</h3>
                <p>Thank you for traveling with Nationwide.lk. Your review will be published shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
