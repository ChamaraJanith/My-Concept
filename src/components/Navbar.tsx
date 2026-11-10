import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, PhoneCall } from 'lucide-react';

export type PageType = 
  | 'home' 
  | 'destinations' 
  | 'all-tours' 
  | 'services' 
  | 'about' 
  | 'testimonials' 
  | 'blogs' 
  | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onPlanTripClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage,
  onNavigate,
  onPlanTripClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: PageType }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Destinations', page: 'destinations' },
    { name: 'All Tours', page: 'all-tours' },
    { name: 'Our Services', page: 'services' },
    { name: 'About Us', page: 'about' },
    { name: 'Testimonials', page: 'testimonials' },
    { name: 'Blogs', page: 'blogs' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`main-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="logo-icon-wrap">
            <Compass className="logo-compass-icon" size={26} />
          </div>
          <span className="logo-text">
            Nationwide<span className="logo-dot-lk">.lk</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.page}`}
              className={`nav-link-item ${currentPage === link.page ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.page)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="navbar-actions-desktop">
          <button 
            type="button" 
            onClick={onPlanTripClick}
            className="btn-primary navbar-cta-btn"
          >
            <PhoneCall size={16} />
            <span>Plan My Trip</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.page}`}
                className={`mobile-menu-item ${currentPage === link.page ? 'active font-bold text-amber-500' : ''}`}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, link.page);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-menu-actions">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="btn-primary w-full"
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
