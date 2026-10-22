import React, { useRef, useEffect, useState } from 'react';
import { 
  MapPin, 
  Tag, 
  Headphones, 
  Zap, 
  Search, 
  Calendar,
  Sparkles,
  Play,
  Pause
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import type { FilterState } from '../types';

interface HeroProps {
  filter: FilterState;
  onFilterChange: (newFilter: Partial<FilterState>) => void;
  onSearchSubmit: () => void;
  isOpeningDone: boolean;
  onOpenPromoVideo?: (videoId: 'dubai' | 'velankanni') => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  filter, 
  onFilterChange, 
  onSearchSubmit,
  isOpeningDone,
  onOpenPromoVideo
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  // Attempt playback on mount and ensure immediate rewind/play when opening completes
  useEffect(() => {
    const playMedia = () => {
      if (videoRef.current) {
        const vid = videoRef.current;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch(() => {
              // Autoplay policy handled gracefully
            });
        }
      }
    };

    playMedia();

    if (isOpeningDone) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      playMedia();
    }
  }, [isOpeningDone]);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
    const target = document.getElementById('destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureCards = [
    {
      id: 'destinations',
      title: '500+ Destinations',
      subtitle: 'Worldwide handpicked spots',
      icon: <MapPin className="feature-icon" size={24} />
    },
    {
      id: 'price',
      title: 'Best Price Guarantee',
      subtitle: 'Direct local partner rates',
      icon: <Tag className="feature-icon" size={24} />
    },
    {
      id: 'service',
      title: 'Great Customer Service',
      subtitle: '24/7 friendly support',
      icon: <Headphones className="feature-icon" size={24} />
    },
    {
      id: 'booking',
      title: 'Super Fast Booking',
      subtitle: 'Instant visa & vouchers',
      icon: <Zap className="feature-icon" size={24} />
    }
  ];

  return (
    <header id="home" className="hero-section">
      {/* Background Video with Dark-to-Translucent Gradient Overlay */}
      <div className="hero-bg-container">
        <video 
          ref={videoRef}
          src="/videos/background.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          className="hero-bg-video"
          poster="/images/hero.jpg"
        />
        {/* Fallback image behind video */}
        <img 
          src="/images/hero.jpg" 
          alt="Luxury travel background" 
          className="hero-bg-fallback-img" 
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Floating Video Status & Controls in Top-Right of Hero */}
      <div className="hero-video-controls">
        <div className="video-status-indicator" title="Dynamic 4K Aerial Video Background">
          <span className={`live-pulse-dot ${isVideoPlaying ? 'active' : ''}`}></span>
          <span className="live-badge-text">{isVideoPlaying ? 'Live Motion' : 'Paused'}</span>
        </div>

        <button 
          type="button" 
          onClick={toggleVideoPlay} 
          className="video-ctrl-btn"
          title={isVideoPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isVideoPlaying ? 'Pause Video' : 'Play Video'}</span>
        </button>
      </div>

      <div className="container hero-content-wrapper">
        {/* Hero Tagline and Titles with Scroll Reveal */}
        <RevealOnScroll animation="fade-up" duration={850}>
          <div className="hero-text-block">
            <div className="hero-pill-badge">
              <Sparkles size={16} className="text-amber-300" />
              <span>Sri Lanka's Premier Outbound Travel Agency</span>
            </div>

            <h1 className="hero-main-title">
              Explore The World With Complete Peace of Mind
            </h1>
            <p className="hero-subtext">
              Unbeatable holiday packages to Thailand, India, Bali, Vietnam, Singapore, Malaysia, Dubai & Europe. 
              All-inclusive hotel stays, private car ground transfers, and verified itineraries.
            </p>

            {onOpenPromoVideo && (
              <div className="hero-video-action-row">
                <button
                  type="button"
                  onClick={() => onOpenPromoVideo('dubai')}
                  className="hero-watch-promo-btn hero-watch-dubai-btn"
                  id="hero-watch-dubai-video-btn"
                  title="Watch Dubai Promotional Video"
                >
                  <span className="hero-promo-play-circle gold-circle">
                    <Play size={15} fill="currentColor" />
                  </span>
                  <span className="hero-promo-label">
                    Watch Dubai Tour Video
                  </span>
                  <span className="hero-promo-tag">4K HD</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenPromoVideo('velankanni')}
                  className="hero-watch-promo-btn hero-watch-velankanni-btn"
                  id="hero-watch-velankanni-video-btn"
                  title="Watch Velankanni & Chennai Pilgrimage Video"
                >
                  <span className="hero-promo-play-circle cyan-circle">
                    <Play size={15} fill="currentColor" />
                  </span>
                  <span className="hero-promo-label">
                    Watch Velankanni Tour Video
                  </span>
                  <span className="hero-promo-tag pilgrim-tag">PILGRIMAGE</span>
                </button>
              </div>
            )}
          </div>
        </RevealOnScroll>

        {/* Feature Highlight Cards with Staggered Scroll Reveal */}
        <div className="features-grid">
          {featureCards.map((feat, index) => (
            <RevealOnScroll 
              key={feat.id} 
              animation="fade-up" 
              delay={index * 120} 
              duration={700}
            >
              <div className="feature-card">
                <div className="feature-icon-circle">
                  {feat.icon}
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Search Engine Bar with Scale-up Scroll Reveal */}
        <RevealOnScroll animation="scale-up" delay={200} duration={800} className="w-full max-w-search">
          <form onSubmit={handleSubmit} className="search-bar-container">
            <div className="search-bar-row">
              {/* Field 1: Keywords / Tour name */}
              <div className="search-field search-field-keyword">
                <Search className="search-input-icon" size={19} />
                <input
                  type="text"
                  placeholder="Keywords / Tour name..."
                  value={filter.keyword}
                  onChange={(e) => onFilterChange({ keyword: e.target.value })}
                  className="search-input"
                  id="search-keywords"
                />
              </div>

              {/* Field 2: Any Destination dropdown */}
              <div className="search-field search-field-destination">
                <MapPin className="search-input-icon" size={19} />
                <select
                  value={filter.destination}
                  onChange={(e) => onFilterChange({ destination: e.target.value })}
                  className="search-select"
                  id="search-destination"
                >
                  <option value="">All Destinations</option>
                  <option value="Thailand">Thailand (8 Packages)</option>
                  <option value="India">India (13 Packages)</option>
                  <option value="Bali">Bali, Indonesia (3 Packages)</option>
                  <option value="Vietnam">Vietnam (5 Packages)</option>
                  <option value="Singapore">Singapore & Combos (3 Packages)</option>
                  <option value="Malaysia">Malaysia & Combos (4 Packages)</option>
                  <option value="Dubai">Dubai & Abu Dhabi (3 Packages)</option>
                  <option value="Europe">Europe Tours (All Packages)</option>
                  <option value="European Marvels">European Marvels (12D 11N) - UK, France, Swiss & Italy</option>
                  <option value="Paris, Milan, Venice, Florence & Rome">Paris, Milan, Venice, Florence & Rome (12D 11N)</option>
                  <option value="Kashmir">Kashmir & Delhi Houseboats</option>
                  <option value="Golden Triangle">Golden Triangle (Delhi, Agra, Jaipur)</option>
                  <option value="Kerala">Kerala Backwaters & Munnar</option>
                  <option value="Shimla">Shimla & Manali (Himalayas)</option>
                  <option value="Pilgrimage">Buddhist Pilgrimage (Dambadiva)</option>
                  <option value="Chennai">Chennai, Thirupathi & Velankanni</option>
                  <option value="Bangkok">Bangkok City Breaks</option>
                  <option value="Pattaya">Pattaya & Coral Island</option>
                  <option value="Phuket">Phuket (Phi Phi Island)</option>
                </select>
              </div>

              {/* Field 3: Date picker */}
              <div className="search-field search-field-date">
                <Calendar className="search-input-icon" size={19} />
                <input
                  type="date"
                  value={filter.date}
                  onChange={(e) => onFilterChange({ date: e.target.value })}
                  className="search-input search-date-input"
                  id="search-date"
                />
              </div>

              {/* Action: SEARCH Button */}
              <button 
                type="submit" 
                className="search-submit-btn"
                id="search-submit-btn"
              >
                SEARCH
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </header>
  );
};
