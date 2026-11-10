import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { blogPosts } from '../data/blogsData';
import type { BlogPost } from '../types';

interface BlogsPageProps {
  onBackToHome: () => void;
  onReadArticle: (post: BlogPost) => void;
  onExploreTours: () => void;
  onPlanTrip: () => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onBackToHome,
  onReadArticle,
  onExploreTours,
  onPlanTrip
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
      if (!matchTitle && !matchSubtitle && !matchExcerpt && !matchTags && !matchAuthor) {
        return false;
      }
    }
    return true;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="blogs-page page-container-root">
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
            <span className="breadcrumb-current">Blogs & Travel Guides</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="page-hero-banner blogs-hero">
        <div className="container">
          <RevealOnScroll animation="fade-down" duration={700}>
            <div className="page-hero-center-content">
              <span className="page-badge-pill">
                <BookOpen size={15} />
                <span>TRAVEL INTELLIGENCE</span>
              </span>
              <h1 className="page-main-title">
                Travel Guides, Visa Tips & Insights for Sri Lankan Voyagers
              </h1>
              <p className="page-lead-text">
                Authoritative travel advice written by senior consular visa specialists, seasoned tour directors, 
                and destination experts to help you travel smarter, safer, and with complete peace of mind.
              </p>
            </div>
          </RevealOnScroll>

          {/* Search & Categories Filter */}
          <div className="destinations-filter-wrapper">
            <div className="destinations-search-box">
              <Search className="search-icon-svg" size={20} />
              <input 
                type="text" 
                placeholder="Search articles, visa checklists, destinations (e.g. Schengen, Bangkok, Kashmir)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="destination-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="region-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`region-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Article Spotlight (when not searching or All is selected) */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="blogs-featured-section">
          <div className="container">
            <RevealOnScroll animation="fade-up" duration={700}>
              <div className="featured-article-card" onClick={() => onReadArticle(featuredPost)}>
                <div className="featured-img-wrap">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="featured-cover-img" 
                  />
                  <span className="featured-pill-tag">★ Featured Guide</span>
                </div>
                <div className="featured-content-col">
                  <div className="featured-meta-row">
                    <span className="article-category-badge">{featuredPost.category}</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-time">
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                    <span className="meta-dot">•</span>
                    <span className="meta-date">
                      <Calendar size={13} /> {featuredPost.publishDate}
                    </span>
                  </div>

                  <h2 className="featured-post-title">{featuredPost.title}</h2>
                  <p className="featured-post-subtitle">{featuredPost.subtitle}</p>
                  <p className="featured-post-excerpt">{featuredPost.excerpt}</p>

                  <div className="featured-author-box">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="author-avatar-img" 
                    />
                    <div>
                      <h4 className="author-name-text">{featuredPost.author.name}</h4>
                      <span className="author-role-text">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <div className="featured-action-row">
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onReadArticle(featuredPost);
                      }}
                      className="btn-primary"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* 4. Blog Posts Grid */}
      <section className="blogs-grid-section">
        <div className="container">
          <div className="blogs-cards-layout">
            {filteredPosts.map((post, index) => (
              <RevealOnScroll 
                key={post.id} 
                animation="fade-up" 
                delay={(index % 3) * 100} 
                duration={650}
              >
                <div 
                  className="blog-card-item" 
                  onClick={() => onReadArticle(post)}
                >
                  <div className="blog-card-image-wrap">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="blog-card-thumb" 
                      loading="lazy" 
                    />
                    <span className="blog-card-category-tag">{post.category}</span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="meta-time">
                        <Clock size={13} /> {post.readTime}
                      </span>
                      <span className="meta-dot">•</span>
                      <span className="meta-date">
                        <Calendar size={13} /> {post.publishDate}
                      </span>
                    </div>

                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>

                    <div className="blog-card-tags">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="blog-chip-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="blog-card-footer">
                      <div className="author-mini-wrap">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="author-avatar-mini" 
                        />
                        <span className="author-name-mini">{post.author.name}</span>
                      </div>

                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          onReadArticle(post);
                        }} 
                        className="read-more-link"
                      >
                        <span>Read</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts-found-box">
              <BookOpen size={48} className="text-slate-400 mb-2" />
              <h3>No articles found</h3>
              <p>We couldn't find any articles matching your search query. Try another keyword or reset filters.</p>
              <button 
                type="button" 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-secondary-outline mt-3"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Bottom Travel Advice CTA */}
      <section className="blogs-bottom-cta">
        <div className="container">
          <div className="blogs-cta-banner">
            <div className="cta-left-text">
              <h3>Have a Specific Visa or Travel Question?</h3>
              <p>
                Our senior consular travel desk provides free 1-on-1 consultations for Schengen, UK, and Asian tourist visas.
              </p>
            </div>
            <div className="cta-right-btns">
              <button type="button" onClick={onPlanTrip} className="btn-primary">
                <span>Book Free Visa Consultation</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" onClick={onExploreTours} className="btn-secondary-white">
                <span>View All Tour Packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
