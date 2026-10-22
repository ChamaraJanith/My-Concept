import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade';
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.12,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Appears when entering viewport, disappears when leaving viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px' // triggers slightly before full bottom
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`reveal-wrapper reveal-${animation} ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
