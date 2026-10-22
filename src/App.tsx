import { useState } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { PromotionBanner } from './components/PromotionBanner';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogsSection } from './components/BlogsSection';
import { BlogArticleModal } from './components/BlogArticleModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TourDetailsModal } from './components/TourDetailsModal';
import { LoginModal } from './components/LoginModal';
import { AllToursPage } from './components/AllToursPage';
import { PromoVideoModal } from './components/PromoVideoModal';
import { tourPackages } from './data/toursData';
import type { TourPackage, FilterState, BlogPost } from './types';
import './App.css';

export function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'all-tours'>('home');
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('LKR');
  const [filter, setFilter] = useState<FilterState>({
    keyword: '',
    destination: '',
    date: '',
    category: 'all'
  });

  const [bookingPackage, setBookingPackage] = useState<TourPackage | null>(null);
  const [detailsPackage, setDetailsPackage] = useState<TourPackage | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPromoVideoOpen, setIsPromoVideoOpen] = useState(false);
  const [promoVideoId, setPromoVideoId] = useState<'dubai' | 'velankanni'>('dubai');

  const handleOpenPromoVideo = (videoId: 'dubai' | 'velankanni' = 'dubai') => {
    setPromoVideoId(videoId);
    setIsPromoVideoOpen(true);
  };

  const handleToggleCurrency = () => {
    setCurrency(prev => (prev === 'LKR' ? 'USD' : 'LKR'));
  };

  const handleFilterChange = (newValues: Partial<FilterState>) => {
    setFilter(prev => ({ ...prev, ...newValues }));
  };

  const handleResetFilters = () => {
    setFilter({
      keyword: '',
      destination: '',
      date: '',
      category: 'all'
    });
  };

  const handleOpenAllTours = (countryId?: string | null) => {
    setCurrentPage('all-tours');
    setSelectedCountryId(countryId || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCountryId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = () => {
    const dest = (filter.destination + ' ' + filter.keyword).toLowerCase();
    if (
      dest.includes('singapore') || 
      dest.includes('gardens by the bay') || 
      dest.includes('universal')
    ) {
      handleOpenAllTours('singapore');
    } else if (
      dest.includes('malaysia') || 
      dest.includes('kuala lumpur') || 
      dest.includes('genting') || 
      dest.includes('sunway') || 
      dest.includes('batu caves')
    ) {
      handleOpenAllTours('malaysia');
    } else if (
      dest.includes('dubai') || 
      dest.includes('abu dhabi') || 
      dest.includes('abudhabi') || 
      dest.includes('ferrari world') || 
      dest.includes('burj khalifa') || 
      dest.includes('miracle garden') || 
      dest.includes('global village')
    ) {
      handleOpenAllTours('dubai');
    } else if (
      dest.includes('europe') || 
      dest.includes('london') || 
      dest.includes('paris') || 
      dest.includes('swiss') || 
      dest.includes('lucerne') || 
      dest.includes('rome') || 
      dest.includes('pisa') || 
      dest.includes('milan') || 
      dest.includes('venice') || 
      dest.includes('florence') || 
      dest.includes('como') || 
      dest.includes('vatican') || 
      dest.includes('colosseum') || 
      dest.includes('italy') || 
      dest.includes('france') || 
      dest.includes('titlis') || 
      dest.includes('jungfrau')
    ) {
      handleOpenAllTours('europe');
    } else if (
      dest.includes('india') || 
      dest.includes('kashmir') || 
      dest.includes('delhi') || 
      dest.includes('agra') || 
      dest.includes('taj') || 
      dest.includes('jaipur') || 
      dest.includes('golden triangle') || 
      dest.includes('kerala') || 
      dest.includes('cochin') || 
      dest.includes('munnar') || 
      dest.includes('alleppey') || 
      dest.includes('shimla') || 
      dest.includes('manali') || 
      dest.includes('pilgrimage') || 
      dest.includes('chennai') || 
      dest.includes('thirupathi') || 
      dest.includes('tirupati') || 
      dest.includes('velankanni') || 
      dest.includes('vailankanni') || 
      dest.includes('bodhgaya') || 
      dest.includes('varanasi') || 
      dest.includes('sarnath') || 
      dest.includes('buddhist') || 
      dest.includes('dambadiva')
    ) {
      handleOpenAllTours('india');
    } else if (
      dest.includes('thailand') || 
      dest.includes('bangkok') || 
      dest.includes('pattaya') || 
      dest.includes('phuket')
    ) {
      handleOpenAllTours('thailand');
    } else if (
      dest.includes('bali') || 
      dest.includes('indonesia') || 
      dest.includes('uluwatu') || 
      dest.includes('penida') || 
      dest.includes('kintamani') ||
      dest.includes('ubud') ||
      dest.includes('tanah lot') ||
      dest.includes('tanahlot') ||
      dest.includes('lempuyang') ||
      dest.includes('tirta gangga') ||
      dest.includes('benoa')
    ) {
      handleOpenAllTours('bali');
    } else if (
      dest.includes('vietnam') || 
      dest.includes('hanoi') || 
      dest.includes('halong') || 
      dest.includes('da nang') || 
      dest.includes('danang') || 
      dest.includes('hoi an') || 
      dest.includes('hoian') || 
      dest.includes('bana hills') || 
      dest.includes('bana') || 
      dest.includes('ninh binh') || 
      dest.includes('trang an') ||
      dest.includes('ho chi minh') ||
      dest.includes('hochiminh') ||
      dest.includes('saigon') ||
      dest.includes('mekong') ||
      dest.includes('cu chi') ||
      dest.includes('vung tau')
    ) {
      handleOpenAllTours('vietnam');
    } else {
      handleOpenAllTours(null);
    }
  };

  const handleSeePromotions = () => {
    handleOpenAllTours(null);
  };

  const handlePlanTrip = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDestinationsClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const destinationsSection = document.getElementById('destinations');
        if (destinationsSection) {
          destinationsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogsClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const blogsSection = document.getElementById('blogs');
        if (blogsSection) {
          blogsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const blogsSection = document.getElementById('blogs');
      if (blogsSection) {
        blogsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="nationwide-app">
      {/* 0. Luxury Welcome Curtain Opening Screen */}
      {showOpening && (
        <OpeningScreen onComplete={() => setShowOpening(false)} />
      )}

      {/* 1. Header Top Bar */}
      <TopBar 
        onOpenLogin={() => setIsLoginOpen(true)}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onReplayIntro={() => {
          if (currentPage !== 'home') setCurrentPage('home');
          setShowOpening(true);
        }}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar 
        onPlanTripClick={handlePlanTrip}
        onViewAllTours={() => handleOpenAllTours(null)}
        onHomeClick={handleBackToHome}
        onDestinationsClick={handleDestinationsClick}
        onAboutClick={handleAboutClick}
        onBlogsClick={handleBlogsClick}
      />

      {/* CONDITIONAL PAGE RENDERING */}
      {currentPage === 'home' ? (
        <>
          {/* 3. Hero Section with Search Engine & Feature Cards */}
          <Hero 
            filter={filter}
            onFilterChange={handleFilterChange}
            onSearchSubmit={handleSearchSubmit}
            isOpeningDone={!showOpening}
            onOpenPromoVideo={handleOpenPromoVideo}
          />

          {/* 4. Popular Tour Packages Section (Curated Featured) */}
          <PackagesSection 
            packages={tourPackages}
            filter={filter}
            currency={currency}
            onResetFilters={handleResetFilters}
            onBookNow={(pkg) => setBookingPackage(pkg)}
            onViewDetails={(pkg) => setDetailsPackage(pkg)}
            onViewAllTours={(cId) => handleOpenAllTours(cId || null)}
            onWatchVideo={handleOpenPromoVideo}
          />

          {/* 5. Special Season Offer / Promo Card (10-30% Off) */}
          <PromotionBanner 
            onSeePromotions={handleSeePromotions} 
            onOpenPromoVideo={handleOpenPromoVideo}
          />

          {/* 6. Our Services Section */}
          <ServicesSection />

          {/* 7. About Us Section */}
          <AboutSection 
            onViewAllTours={() => handleOpenAllTours(null)}
            onContactClick={handlePlanTrip}
          />

          {/* 8. Client Testimonials */}
          <TestimonialsSection />

          {/* 9. Travel Intelligence & Blogs Section */}
          <BlogsSection 
            onReadArticle={(post) => setSelectedBlogPost(post)}
            onExploreTours={() => handleOpenAllTours(null)}
          />

          {/* 10. Contact & Inquiry Section */}
          <ContactSection />
        </>
      ) : (
        /* ========================================================
           DEDICATED ALL TOURS BY COUNTRY DIRECTORY PAGE
           ======================================================== */
        <AllToursPage 
          packages={tourPackages}
          currency={currency}
          selectedCountryId={selectedCountryId}
          onSelectCountry={(cId) => setSelectedCountryId(cId)}
          onBackToHome={handleBackToHome}
          onBookNow={(pkg) => setBookingPackage(pkg)}
          onViewDetails={(pkg) => setDetailsPackage(pkg)}
          onOpenPromoVideo={handleOpenPromoVideo}
        />
      )}

      {/* 9. Comprehensive Footer & WhatsApp Widget */}
      <Footer />

      {/* Modals & Overlays */}
      <BookingModal 
        pkg={bookingPackage}
        currency={currency}
        onClose={() => setBookingPackage(null)}
      />

      <TourDetailsModal 
        pkg={detailsPackage}
        currency={currency}
        onClose={() => setDetailsPackage(null)}
        onBookNow={(pkg) => {
          setDetailsPackage(null);
          setBookingPackage(pkg);
        }}
        onWatchVideo={handleOpenPromoVideo}
      />

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* 10. Promotional Video Modal (Dubai 4K & Velankanni Pilgrimage) */}
      <PromoVideoModal 
        isOpen={isPromoVideoOpen}
        initialVideo={promoVideoId}
        onClose={() => setIsPromoVideoOpen(false)}
        onExploreDestination={(countryId) => handleOpenAllTours(countryId)}
      />

      {/* 11. Full Blog Article Modal */}
      <BlogArticleModal 
        post={selectedBlogPost}
        isOpen={Boolean(selectedBlogPost)}
        onClose={() => setSelectedBlogPost(null)}
        onExploreTour={(pkgId) => {
          setSelectedBlogPost(null);
          handleOpenAllTours(pkgId);
        }}
      />
    </div>
  );
}

export default App;
