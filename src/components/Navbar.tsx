import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
  onViewAllTours?: () => void;
  onHomeClick?: () => void;
  onDestinationsClick?: () => void;
  onAboutClick?: () => void;
  onBlogsClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onPlanTripClick, 
  onViewAllTours,
  onHomeClick,
  onDestinationsClick,
  onAboutClick,
  onBlogsClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'All Tours', href: '#all-tours' },
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    if (linkName === 'All Tours' && onViewAllTours) {
      e.preventDefault();
      onViewAllTours();
      setActiveSection('all-tours');
      return;
    }
    if (linkName === 'Destinations') {
      if (onDestinationsClick) {
        e.preventDefault();
        onDestinationsClick();
      }
      setActiveSection('destinations');
      return;
    }
    if (linkName === 'About Us') {
      if (onAboutClick) {
        e.preventDefault();
        onAboutClick();
      }
      setActiveSection('about');
      return;
    }
    if (linkName === 'Blogs') {
      if (onBlogsClick) {
        e.preventDefault();
        onBlogsClick();
      }
      setActiveSection('blogs');
      return;
    }
    if (linkName === 'Home' && onHomeClick) {
      e.preventDefault();
      onHomeClick();
      setActiveSection('home');
      return;
    }
    setActiveSection(linkName.toLowerCase());
  };

  return (
    <nav className={`main-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="navbar-logo"
          onClick={(e) => {
            if (onHomeClick) {
              e.preventDefault();
              onHomeClick();
            }
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
              href={link.href}
              className={`nav-link-item ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.name)}
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
                href={link.href}
                className="mobile-menu-item"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, link.name);
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
