import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { blogPosts } from '../data/blogsData';
import type { BlogPost } from '../types';

interface BlogsSectionProps {
  onReadArticle: (post: BlogPost) => void;
  onExploreTours?: () => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
  onReadArticle,
  onExploreTours
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Visa & Documentation',
    'Travel Guides',
    'Honeymoon & Couples',
    'Pilgrimages',
    'Travel Tips'
  ];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    // Category match
    if (selectedCategory !== 'All' && post.category !== selectedCategory) {
      return false;
    }
    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchSubtitle = post.subtitle.toLowerCase().includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchTags = post.tags.some(t => t.toLowerCase().includes(q));
      const matchAuthor = post.author.name.toLowerCase().includes(q);
      return matchTitle || matchSubtitle || matchExcerpt || matchTags || matchAuthor;
    }
    return true;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        {/* Section Header */}
        <RevealOnScroll animation="fade-down" duration={750}>
          <div className="blogs-header-center">
            <div className="blogs-eyebrow-pill">
              <Sparkles size={14} className="text-amber-400" />
              <span>TRAVEL INTELLIGENCE & ADVISORIES • NATIONWIDE.LK</span>
            </div>
            <h2 className="blogs-main-title">
              Real Travel Guides, Visa Advice & Destination Intelligence
            </h2>
            <p className="blogs-subtitle">
              Authentic articles written by our Colombo visa consular specialists and destination tour directors 
              to ensure Sri Lankan travelers explore the world with complete confidence.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Tabs and Search Bar */}
        <div className="blogs-controls-row">
          <div className="blogs-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`blog-category-tab ${selectedCategory === cat ? 'active' : ''}`}
                id={`blog-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat === 'Visa & Documentation' && <ShieldCheck size={14} className="inline-icon" />}
                {cat === 'Travel Guides' && <Compass size={14} className="inline-icon" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          <div className="blogs-search-box">
            <Search size={16} className="blog-search-icon" />
            <input
              type="text"
              placeholder="Search guides (e.g. Schengen, Dubai, Bali, Currency)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
              id="search-blog-articles-input"
            />
          </div>
        </div>

        {/* Featured Hero Article Banner (Shown if searching 'All' or no active filter) */}
        {selectedCategory === 'All' && searchQuery.trim() === '' && featuredPost && (
          <RevealOnScroll animation="fade-up" duration={750}>
            <div 
              className="blog-featured-card"
              onClick={() => onReadArticle(featuredPost)}
              id="blog-featured-article-card"
              role="button"
              tabIndex={0}
            >
              <div className="featured-card-img-wrap">
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-card-img" />
                <span className="featured-banner-tag">
                  <Sparkles size={13} />
                  <span>Featured Advisory</span>
                </span>
              </div>

              <div className="featured-card-body">
                <div className="featured-meta-row">
                  <span className="featured-category-pill">{featuredPost.category}</span>
                  <span className="meta-text">
                    <Calendar size={13} /> {featuredPost.publishDate}
                  </span>
                  <span className="meta-text">
                    <Clock size={13} /> {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="featured-card-title">{featuredPost.title}</h3>
                <p className="featured-card-subtitle">{featuredPost.subtitle}</p>
                <p className="featured-card-excerpt">{featuredPost.excerpt}</p>

                <div className="featured-card-footer">
                  <div className="author-cluster">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="author-thumb" />
                    <div>
                      <span className="author-name-text">{featuredPost.author.name}</span>
                      <span className="author-role-text">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn-read-featured"
                    onClick={(e) => {
                      e.stopPropagation();
                      onReadArticle(featuredPost);
                    }}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Grid of Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="blogs-cards-grid">
            {filteredPosts.map((post, idx) => (
              <RevealOnScroll 
                key={post.id} 
                animation="fade-up" 
                delay={(idx % 3) * 100} 
                duration={700}
              >
                <div 
                  className="blog-card"
                  onClick={() => onReadArticle(post)}
                  id={`blog-card-${post.id}`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="blog-card-img-wrap">
                    <img src={post.image} alt={post.title} className="blog-card-img" loading="lazy" />
                    <span className="blog-card-category-badge">{post.category}</span>
                    <span className="blog-card-read-time">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-date-row">
                      <Calendar size={13} className="text-blue-600" />
                      <span>{post.publishDate}</span>
                    </div>

                    <h4 className="blog-card-title">{post.title}</h4>
                    <p className="blog-card-excerpt">{post.excerpt}</p>

                    <div className="blog-card-tags">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="blog-card-tag-item">#{tag}</span>
                      ))}
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img src={post.author.avatar} alt={post.author.name} className="card-author-avatar" />
                        <span className="card-author-name">{post.author.name}</span>
                      </div>

                      <span className="blog-card-read-link">
                        <span>Read Guide</span>
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="blogs-empty-state">
            <BookOpen size={48} className="empty-icon text-slate-400" />
            <h3 className="empty-title">No travel guides found matching "{searchQuery}"</h3>
            <p className="empty-desc">
              Try searching with another destination keyword (e.g., "Dubai", "Visa", "Bali", "Thailand") or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn-primary mt-4"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <RevealOnScroll animation="scale-up" duration={700}>
          <div className="blogs-help-banner">
            <div className="blogs-help-content">
              <span className="help-badge">DIRECT CONSULAR ASSISTANCE</span>
              <h3 className="help-title">Need Personalized Visa or Tour Guidance?</h3>
              <p className="help-desc">
                Our Colombo travel specialists will audit your travel documents, arrange your flights, and plan your itinerary with zero stress.
              </p>
            </div>
            <div className="blogs-help-actions">
              <a 
                href="https://wa.me/94716891891?text=Hello%20Nationwide.lk,%20I%20have%20questions%20about%20travel%20visas%20and%20packages"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-blogs"
              >
                Chat on WhatsApp: 0716 891 891
              </a>
              {onExploreTours && (
                <button
                  type="button"
                  onClick={onExploreTours}
                  className="btn-outline-blogs"
                  id="blogs-explore-tours-btn"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default BlogsSection;
