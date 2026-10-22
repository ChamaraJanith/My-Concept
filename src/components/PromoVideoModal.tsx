import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, Film } from 'lucide-react';

export type PromoVideoId = 'dubai' | 'velankanni';

interface PromoVideoModalProps {
  isOpen: boolean;
  initialVideo?: PromoVideoId;
  onClose: () => void;
  onExploreDestination?: (countryId: string) => void;
}

interface VideoConfig {
  id: PromoVideoId;
  tabLabel: string;
  flag: string;
  badge: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  poster: string;
  countryId: string;
  ctaText: string;
  highlights: {
    icon: 'shield' | 'sparkle' | 'compass';
    text: string;
  }[];
}

const VIDEO_CONFIGS: Record<PromoVideoId, VideoConfig> = {
  dubai: {
    id: 'dubai',
    tabLabel: 'Dubai 4K Showcase',
    flag: '🇦🇪',
    badge: 'NATIONWIDE TRAVELS • DUBAI LUXURY SHOWCASE',
    title: 'Experience Dubai & Abu Dhabi Like Never Before',
    subtitle: 'Burj Khalifa 124th Level • Desert Safari Dune Bashing & BBQ • Marina Dhow Cruise • Ferrari World',
    videoUrl: '/videos/dubai tour.mp4',
    poster: '/images/dubai.jpg',
    countryId: 'dubai',
    ctaText: 'Explore Dubai Tour Packages',
    highlights: [
      { icon: 'shield', text: 'All-Inclusive Ground Transfers' },
      { icon: 'sparkle', text: '4-Star Deluxe City Hotels' },
      { icon: 'compass', text: 'Curated 4D 3N & 5D 4N Itineraries' }
    ]
  },
  velankanni: {
    id: 'velankanni',
    tabLabel: 'Velankanni Pilgrimage',
    flag: '🇮🇳',
    badge: 'NATIONWIDE TRAVELS • SACRED PILGRIMAGE SHOWCASE',
    title: 'Sacred Velankanni & Chennai Pilgrimage Tour',
    subtitle: 'Basilica of Our Lady of Good Health • San Thome Cathedral • St. Thomas Mount • Chennai Silks & Shopping',
    videoUrl: '/videos/india-velakkani-tour.mp4',
    poster: '/images/india-chennai-5d4n.jpg',
    countryId: 'india',
    ctaText: 'Explore Velankanni & India Packages',
    highlights: [
      { icon: 'shield', text: 'Indian Tourist Visa Included' },
      { icon: 'sparkle', text: 'Basilica of Our Lady of Good Health' },
      { icon: 'compass', text: 'Private A/C Vehicle & Dedicated Chauffeur' }
    ]
  }
};

export const PromoVideoModal: React.FC<PromoVideoModalProps> = ({
  isOpen,
  initialVideo = 'dubai',
  onClose,
  onExploreDestination
}) => {
  const [activeVideoId, setActiveVideoId] = useState<PromoVideoId>(initialVideo);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Sync with initialVideo prop when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveVideoId(initialVideo);
    }
  }, [isOpen, initialVideo]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Pause video if modal closes or video changes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  // When active video changes, reload video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled autoplay gracefully
        });
      }
    }
  }, [activeVideoId]);

  if (!isOpen) return null;

  const currentConfig = VIDEO_CONFIGS[activeVideoId] || VIDEO_CONFIGS.dubai;

  return (
    <div className="modal-backdrop promo-video-modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container promo-video-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn promo-video-close-btn"
          aria-label="Close promotional video"
          id="close-promo-video-modal-btn"
        >
          <X size={20} />
        </button>

        {/* Modal Top Bar: Video Selector Tabs */}
        <div className="promo-video-tabs-bar">
          <div className="promo-video-tabs">
            {(Object.keys(VIDEO_CONFIGS) as PromoVideoId[]).map((vidKey) => {
              const cfg = VIDEO_CONFIGS[vidKey];
              const isActive = activeVideoId === vidKey;
              return (
                <button
                  key={vidKey}
                  type="button"
                  onClick={() => setActiveVideoId(vidKey)}
                  className={`promo-video-tab-btn ${isActive ? 'active' : ''}`}
                  id={`tab-promo-video-${vidKey}`}
                >
                  <span className="tab-video-flag">{cfg.flag}</span>
                  <span className="tab-video-label">{cfg.tabLabel}</span>
                  <Film size={14} className="tab-film-icon" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Header */}
        <div className="promo-video-header">
          <div className="promo-video-pill">
            <Sparkles size={14} className="text-amber-400" />
            <span>{currentConfig.badge}</span>
          </div>
          <h2 className="promo-video-title">
            {currentConfig.title}
          </h2>
          <p className="promo-video-subtitle">
            <MapPin size={15} className="inline-icon text-amber-400" />
            {currentConfig.subtitle}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="promo-video-player-wrap">
          <video
            ref={videoRef}
            src={currentConfig.videoUrl}
            controls
            autoPlay
            playsInline
            className="promo-html5-video"
            poster={currentConfig.poster}
            key={currentConfig.videoUrl}
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Highlights Bar */}
        <div className="promo-video-highlights-row">
          {currentConfig.highlights.map((hl, i) => (
            <div key={i} className="promo-video-highlight-item">
              {hl.icon === 'shield' && <ShieldCheck size={16} className="text-emerald-400" />}
              {hl.icon === 'sparkle' && <Sparkles size={16} className="text-amber-400" />}
              {hl.icon === 'compass' && <Compass size={16} className="text-sky-400" />}
              <span>{hl.text}</span>
            </div>
          ))}
        </div>

        {/* Modal Footer with Actions */}
        <div className="promo-video-footer">
          <div className="promo-video-footer-info">
            <span className="footer-tagline">Ready to experience this extraordinary journey?</span>
            <span className="footer-sub">Official itineraries, transparent rates & hassle-free visa processing</span>
          </div>

          <div className="promo-video-footer-actions">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onExploreDestination) onExploreDestination(currentConfig.countryId);
              }}
              className="btn-primary promo-modal-cta-btn"
              id="promo-modal-explore-dest-btn"
            >
              <span>{currentConfig.ctaText}</span>
              <ArrowRight size={17} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-outline-modal"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
