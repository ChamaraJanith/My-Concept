import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Share2, 
  Tag, 
  Compass, 
  Check
} from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogArticleModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onExploreTour?: (packageId: string) => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  post,
  isOpen,
  onClose,
  onExploreTour
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Check out this travel guide from Nationwide.lk: ${post.title} - https://nationwide.lk/#blogs`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop blog-modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container blog-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn blog-close-btn"
          aria-label="Close article"
          id="close-blog-article-btn"
        >
          <X size={20} />
        </button>

        {/* Modal Scrollable Article Content */}
        <div className="blog-article-scrollable">
          {/* Article Header Meta */}
          <div className="blog-article-header">
            <div className="blog-meta-pills-row">
              <span className="blog-category-badge">{post.category}</span>
              <span className="blog-meta-item">
                <Calendar size={13} /> {post.publishDate}
              </span>
              <span className="blog-meta-item">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            <h1 className="blog-article-title">{post.title}</h1>
            <p className="blog-article-subtitle">{post.subtitle}</p>

            {/* Author Byline Bar */}
            <div className="blog-author-bar">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="author-avatar-img" 
              />
              <div className="author-details">
                <span className="author-name">{post.author.name}</span>
                <span className="author-role">{post.author.role} • Nationwide Travels Colombo</span>
              </div>
              <button 
                type="button" 
                onClick={handleShareWhatsApp}
                className="btn-share-article"
                title="Share this travel guide on WhatsApp"
              >
                <Share2 size={15} />
                <span>Share Guide</span>
              </button>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="blog-article-hero-wrap">
            <img src={post.image} alt={post.title} className="blog-article-hero-img" />
            <div className="blog-hero-overlay"></div>
            <span className="blog-hero-tag">Verified Travel Intelligence • Nationwide.lk</span>
          </div>

          {/* Key Takeaways Box */}
          <div className="blog-takeaways-box">
            <div className="takeaways-header">
              <Sparkles size={18} className="text-amber-500" />
              <h3>Key Travel Takeaways for Sri Lankan Travelers</h3>
            </div>
            <ul className="takeaways-list">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Sections */}
          <div className="blog-body-sections">
            {post.sections.map((section, idx) => (
              <div key={idx} className="blog-section-block">
                <h2 className="blog-section-heading">{section.heading}</h2>
                <p className="blog-section-p">{section.content}</p>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="blog-section-bullets">
                    {section.bulletPoints.map((bp, i) => (
                      <li key={i}>
                        <Check size={14} className="text-blue-600 shrink-0 mt-1" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Article Tags */}
          <div className="blog-tags-row">
            <span className="tags-label">
              <Tag size={15} /> Topic Tags:
            </span>
            {post.tags.map((t, i) => (
              <span key={i} className="blog-tag-chip">#{t}</span>
            ))}
          </div>

          {/* Related Package Action Box */}
          {post.relatedPackageName && (
            <div className="blog-related-package-box">
              <div className="related-box-info">
                <div className="related-badge">
                  <Compass size={15} />
                  <span>FEATURED OUTBOUND TOUR</span>
                </div>
                <h4 className="related-title">Ready to Experience This Destination?</h4>
                <p className="related-desc">
                  Nationwide Travels arranges official verified itineraries, luxury hotel accommodation, private transfers, and hassle-free visa handling for <strong>{post.relatedPackageName}</strong>.
                </p>
              </div>
              <div className="related-box-action">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onExploreTour && post.relatedPackageId) {
                      onExploreTour(post.relatedPackageId);
                    }
                  }}
                  className="btn-primary related-tour-btn"
                  id="blog-modal-view-tour-btn"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="blog-modal-footer">
          <span className="footer-advice">
            Have specific questions about this travel guide?
          </span>
          <div className="footer-actions">
            <a 
              href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20have%20an%20inquiry%20regarding%20your%20travel%20guide" 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp-sm"
            >
              Ask Travel Desk on WhatsApp
            </a>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-outline-modal"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleModal;
