import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { customerTestimonials } from '../data/toursData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <RevealOnScroll animation="fade-down" duration={750}>
          <div className="testimonials-header-center">
            <span className="testimonials-pretitle">REAL EXPERIENCES</span>
            <h2 className="testimonials-main-title">Trusted by Thousands of Sri Lankan Travelers</h2>
            <p className="testimonials-subtitle">
              See what our delighted clients have to say about their unforgettable journeys arranged by Nationwide.lk.
            </p>
          </div>
        </RevealOnScroll>

        <div className="testimonials-grid">
          {customerTestimonials.map((t, index) => (
            <RevealOnScroll 
              key={t.id} 
              animation="fade-up" 
              delay={(index % 3) * 120} 
              duration={700}
            >
              <div className="testimonial-card">
                <Quote className="quote-watermark" size={40} />
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon-filled" />
                  ))}
                </div>

                <p className="testimonial-comment">"{t.comment}"</p>

                <div className="testimonial-author-box">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div className="author-meta">
                    <h4 className="author-name">
                      {t.name}
                      <CheckCircle size={14} className="verified-check" />
                    </h4>
                    <span className="author-city">{t.city}</span>
                    <span className="author-tour">{t.destinationVisited}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
