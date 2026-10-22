import React, { useEffect, useRef } from 'react';
import { X, Sparkles, MapPin, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface PromoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDubai?: () => void;
}

export const PromoVideoModal: React.FC<PromoVideoModalProps> = ({
  isOpen,
  onClose,
  onExploreDubai
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  // Pause video if modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

        {/* Modal Header */}
        <div className="promo-video-header">
          <div className="promo-video-pill">
            <Sparkles size={14} className="text-amber-400" />
            <span>NATIONWIDE TRAVELS • EXCLUSIVE DESTINATION SHOWCASE</span>
          </div>
          <h2 className="promo-video-title">
            Experience Dubai & Abu Dhabi Like Never Before
          </h2>
          <p className="promo-video-subtitle">
            <MapPin size={15} className="inline-icon text-amber-400" />
            Burj Khalifa 124th Level • Desert Safari with Dune Bashing & BBQ • Marina Dhow Cruise • Ferrari World
          </p>
        </div>

        {/* Video Player Box */}
        <div className="promo-video-player-wrap">
          <video
            ref={videoRef}
            src="/videos/dubai tour.mp4"
            controls
            autoPlay
            playsInline
            className="promo-html5-video"
            poster="/images/dubai.jpg"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Highlights Bar */}
        <div className="promo-video-highlights-row">
          <div className="promo-video-highlight-item">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>All-Inclusive Ground Transfers</span>
          </div>
          <div className="promo-video-highlight-item">
            <Sparkles size={16} className="text-amber-400" />
            <span>4-Star Deluxe City Hotels</span>
          </div>
          <div className="promo-video-highlight-item">
            <Compass size={16} className="text-sky-400" />
            <span>Curated 4D 3N & 5D 4N Itineraries</span>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="promo-video-footer">
          <div className="promo-video-footer-info">
            <span className="footer-tagline">Ready to live this extraordinary experience?</span>
            <span className="footer-sub">Custom quotes, free consultation & visa assistance available</span>
          </div>

          <div className="promo-video-footer-actions">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onExploreDubai) onExploreDubai();
              }}
              className="btn-primary promo-modal-cta-btn"
              id="promo-modal-explore-dubai-btn"
            >
              <span>Explore Dubai Tour Packages</span>
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
