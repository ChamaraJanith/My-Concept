import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Luggage, 
  Ticket, 
  Wind 
} from 'lucide-react';

interface OpeningScreenProps {
  onComplete: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onComplete }) => {
  // progress goes smoothly from 0.000 to 1.000 using requestAnimationFrame
  const [progress, setProgress] = useState(0);
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Flight Route Waypoints along the flight curve
  const routeWaypoints = useMemo(() => [
    { t: 0.0, code: 'CMB', city: 'Colombo', flag: '🇱🇰' },
    { t: 0.25, code: 'BKK', city: 'Bangkok', flag: '🇹🇭' },
    { t: 0.50, code: 'PTY', city: 'Pattaya', flag: '🇹🇭' },
    { t: 0.75, code: 'KHL', city: 'Coral Island', flag: '🇹🇭' },
    { t: 1.0, code: 'SFW', city: 'Safari World', flag: '🇹🇭' }
  ], []);

  // Featured destinations cycling during the intro
  const destinations = useMemo(() => [
    { name: 'BANGKOK (3D 2N)', nights: '2 Nights', price: 'Popular Break', img: '/images/bangkok-3d2n.jpg', landmark: 'Chao Phraya Dinner Cruise' },
    { name: 'BANGKOK (4D 3N)', nights: '3 Nights', price: 'Family Favorite', img: '/images/bangkok-4d3n.jpg', landmark: 'Safari World & Dreamworld' },
    { name: 'BANGKOK PATTAYA (5D 4N)', nights: '4 Nights', price: 'Popular Combo', img: '/images/bangkok-pattaya-5d4n.jpg', landmark: 'Alcazar Show & Coral Island' },
    { name: 'BANGKOK EXTRA TOUR (6D 5N)', nights: '5 Nights', price: 'Extra City Tour', img: '/images/bangkok-extra-6d5n.jpg', landmark: 'Ocean World & Madam Tussauds' },
    { name: 'BANGKOK PHUKET (5D 4N)', nights: '4 Nights', price: 'Island & City', img: '/images/bangkok-phuket-5d4n.jpg', landmark: 'Phi Phi / James Bond Island' },
    { name: 'BANGKOK PATTAYA (7D 6N)', nights: '6 Nights', price: 'Ultimate Holiday', img: '/images/bangkok-pattaya-7d6n.jpg', landmark: 'Tiger Park & Sanctuary of Truth' }
  ], []);

  // Mathematical Bezier Curve Coordinates for the Sky Flight Arc (ViewBox 1200 x 700)
  const p0x = 100, p0y = 580; // Colombo Airport
  const p1x = 550, p1y = 440; // Mid-climb control point
  const p2x = 1100, p2y = 120; // High cruise altitude destination

  // Calculate current plane position along the bezier curve with floating point precision
  const t = Math.min(1, Math.max(0, progress));
  const currentPlaneX = (1 - t) * (1 - t) * p0x + 2 * (1 - t) * t * p1x + t * t * p2x;
  const currentPlaneY = (1 - t) * (1 - t) * p0y + 2 * (1 - t) * t * p1y + t * t * p2y;

  // Calculate instantaneous tangent vector (heading direction)
  const dx = 2 * (1 - t) * (p1x - p0x) + 2 * t * (p2x - p1x);
  const dy = 2 * (1 - t) * (p1y - p0y) + 2 * t * (p2y - p1y);
  // Tangent angle in degrees: Nose points EXACTLY along this angle!
  const planeHeadingAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

  // Play airport chime (two-tone gentle ding-dong)
  const playAirportChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      // Tone 1: High chime (587.33 Hz - D5)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now);
      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.exponentialRampToValueAtTime(0.14, now + 0.05);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.9);

      // Tone 2: Harmonious second tone (440 Hz - A4)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(440, now + 0.45);
      gain2.gain.setValueAtTime(0.001, now + 0.45);
      gain2.gain.exponentialRampToValueAtTime(0.16, now + 0.52);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.45);
      osc2.stop(now + 1.4);
    } catch {
      // Audio autoplay gracefully handled
    }
  };

  // Play gentle jet engine whoosh sound
  const playJetWhoosh = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === 'suspended') ctx.resume();

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(300, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 1.1);
      filter.Q.value = 1.8;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.7);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noise.stop(ctx.currentTime + 1.7);
    } catch {
      // Graceful fallback
    }
  };

  useEffect(() => {
    if (soundEnabled) {
      const chimeTimer = setTimeout(() => {
        playAirportChime();
      }, 500);
      return () => clearTimeout(chimeTimer);
    }
  }, [soundEnabled]);

  // =========================================================================
  // ULTRA-SMOOTH 60FPS/120FPS REQUESTANIMATIONFRAME FLIGHT LOOP
  // Uses time delta and easing for silky-smooth, stutter-free movement!
  // =========================================================================
  useEffect(() => {
    const TOTAL_DURATION_MS = 6800; // 6.8 seconds total smooth flight
    let startTime: number | null = null;

    const animateFlight = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawLinearProgress = Math.min(1, elapsed / TOTAL_DURATION_MS);

      // Smooth ease-in-out curve for natural aerodynamic acceleration and deceleration
      const eased = rawLinearProgress < 0.5
        ? 2 * rawLinearProgress * rawLinearProgress
        : 1 - Math.pow(-2 * rawLinearProgress + 2, 2) / 2;

      setProgress(eased);

      if (rawLinearProgress < 1) {
        animFrameRef.current = requestAnimationFrame(animateFlight);
      } else {
        // Complete flight!
        if (soundEnabled) playJetWhoosh();
        setTimeout(() => {
          handleEnter();
        }, 650);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateFlight);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Cycle destination previews every 1.15s smoothly
  useEffect(() => {
    const destInterval = setInterval(() => {
      setActiveDestIndex((prev) => (prev + 1) % destinations.length);
    }, 1150);

    return () => clearInterval(destInterval);
  }, [destinations.length]);

  const handleEnter = () => {
    if (isClosing) return;
    setIsClosing(true);
    if (soundEnabled) playJetWhoosh();
    setTimeout(() => {
      onComplete();
    }, 1150); // 1.15s smooth curtain reveal
  };

  // Status message corresponding to progress
  const getStatusMessage = () => {
    if (t < 0.20) return 'Colombo (CMB) Runway 04: Clearance confirmed...';
    if (t < 0.45) return 'Full Throttle: Climbing through 10,000 feet...';
    if (t < 0.70) return 'Cruising Altitude: Approaching Asian archipelagos...';
    if (t < 0.95) return 'Cabin Announcement: Prepare for scenic arrival...';
    return 'Welcome aboard! Touching down at Nationwide Lanka...';
  };

  const currentDest = destinations[activeDestIndex];
  const progressPercentInt = Math.min(100, Math.round(t * 100));

  return (
    <div className={`opening-splash-wrapper ${isClosing ? 'opening-curtain-open' : ''}`}>
      {/* Top & Bottom Sliding Luxury Velvet Curtains with 3D hardware acceleration */}
      <div className="curtain-half curtain-top">
        <div className="curtain-fabric-lines"></div>
      </div>
      <div className="curtain-half curtain-bottom">
        <div className="curtain-fabric-lines"></div>
      </div>

      {/* =========================================================
          MATHEMATICALLY SYNCHRONIZED SVG SKY FLIGHT SYSTEM
          Both the trajectory line and the airplane live in the exact
          same coordinate space (1200 x 700), guaranteeing 100% alignment!
          ========================================================= */}
      <div className="sky-flight-svg-container">
        <svg 
          viewBox="0 0 1200 700" 
          className="sky-flight-canvas"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Contrail Glowing Gradient */}
            <linearGradient id="contrailGlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.05)" />
              <stop offset="60%" stopColor="rgba(56, 189, 248, 0.45)" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Jet Fuselage Gradient */}
            <linearGradient id="jetBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="85%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Wing Gradient */}
            <linearGradient id="jetWingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Engine Thrust Glow */}
            <linearGradient id="thrustGlowGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="rgba(56, 189, 248, 0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Background Reference Flight Path (Dashed Guide) */}
          <path 
            d={`M ${p0x},${p0y} Q ${p1x},${p1y} ${p2x},${p2y}`}
            fill="none"
            stroke="rgba(56, 189, 248, 0.15)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Active Jet Contrail (Starts at Colombo and touches the plane's engines in continuous sub-pixels) */}
          <path 
            d={`M ${p0x},${p0y} Q ${p1x},${p1y} ${p2x},${p2y}`}
            fill="none"
            stroke="url(#contrailGlowGrad)"
            strokeWidth="3.5"
            pathLength="100"
            strokeDasharray={`${t * 100} 100`}
            strokeLinecap="round"
            filter="drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))"
          />

          {/* Route Waypoint Nodes along the Path */}
          {routeWaypoints.map((wp) => {
            const wpt = wp.t;
            const wx = (1 - wpt) * (1 - wpt) * p0x + 2 * (1 - wpt) * wpt * p1x + wpt * wpt * p2x;
            const wy = (1 - wpt) * (1 - wpt) * p0y + 2 * (1 - wpt) * wpt * p1x + wpt * wpt * p2y;
            const isPassed = t >= wpt;
            const isCurrent = Math.abs(t - wpt) < 0.08;

            return (
              <g key={wp.code} transform={`translate(${wx}, ${wy})`}>
                <circle 
                  r={isCurrent ? "8" : "4.5"} 
                  fill={isCurrent ? "#38bdf8" : isPassed ? "#0ea5e9" : "#334155"} 
                  stroke="#ffffff"
                  strokeWidth={isCurrent ? "2" : "1"}
                  className={isCurrent ? "wp-circle-pulse" : ""}
                />
                <text 
                  x="0" 
                  y={wy > 350 ? "20" : "-14"} 
                  textAnchor="middle" 
                  fill={isCurrent ? "#ffffff" : isPassed ? "#93c5fd" : "#64748b"}
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  {wp.code} {wp.flag}
                </text>
              </g>
            );
          })}

          {/* =======================================================
              COMMERCIAL AIRLINER JET (FLUID SUB-PIXEL MOTION)
              Modeled pointing EAST (0°), then rotated by planeHeadingAngle!
              Nose points 100% PERFECTLY in the direction of flight!
              ======================================================= */}
          <g 
            transform={`translate(${currentPlaneX.toFixed(2)}, ${currentPlaneY.toFixed(2)}) rotate(${planeHeadingAngle.toFixed(2)}) ${isClosing ? 'scale(2.8) translate(140, 0)' : 'scale(1)'}`}
            className="commercial-jet-group"
            style={{ 
              transition: isClosing ? 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease' : 'none' 
            }}
          >
            {/* Twin Engine Vapor Exhaust Trails (Trailing behind engines along -X) */}
            <line 
              x1="-24" 
              y1="-22" 
              x2="-95" 
              y2="-22" 
              stroke="url(#thrustGlowGrad)" 
              strokeWidth="4" 
              strokeLinecap="round"
              opacity="0.9"
            />
            <line 
              x1="-24" 
              y1="22" 
              x2="-95" 
              y2="22" 
              stroke="url(#thrustGlowGrad)" 
              strokeWidth="4" 
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Swept-back Wings (Port & Starboard) */}
            {/* Starboard Wing (Bottom) */}
            <polygon 
              points="10,7 -20,62 -32,58 -10,7" 
              fill="url(#jetWingGrad)" 
              stroke="#64748b" 
              strokeWidth="0.8" 
            />
            {/* Port Wing (Top) */}
            <polygon 
              points="10,-7 -20,-62 -32,-58 -10,-7" 
              fill="url(#jetWingGrad)" 
              stroke="#64748b" 
              strokeWidth="0.8" 
            />

            {/* Jet Turbofan Engines under wings */}
            {/* Starboard Engine */}
            <rect x="-18" y="17" width="22" height="10" rx="4" fill="#334155" stroke="#475569" strokeWidth="0.8" />
            <ellipse cx="4" cy="22" rx="2" ry="4" fill="#38bdf8" />
            {/* Port Engine */}
            <rect x="-18" y="-27" width="22" height="10" rx="4" fill="#334155" stroke="#475569" strokeWidth="0.8" />
            <ellipse cx="4" cy="-22" rx="2" ry="4" fill="#38bdf8" />

            {/* Horizontal Tail Stabilizers */}
            <polygon points="-36,-3 -55,-22 -60,-19 -44,-3" fill="#cbd5e1" />
            <polygon points="-36,3 -55,22 -60,19 -44,3" fill="#cbd5e1" />

            {/* Main Streamlined Fuselage (Aircraft Body) */}
            {/* Nose is at (+60, 0), Tail is at (-52, 0) */}
            <path 
              d="M 60,0 C 45,-8 -25,-8 -50,-4 C -54,-2 -54,2 -50,4 C -25,8 45,8 60,0 Z" 
              fill="url(#jetBodyGrad)" 
              stroke="#94a3b8" 
              strokeWidth="1" 
            />

            {/* Nationwide Airline Blue Cheatline Livery */}
            <path 
              d="M 38,-3 L -35,-3 L -35,3 L 38,3 Z" 
              fill="#1e60f2" 
            />

            {/* Cockpit Windshield (Black tinted glass facing nose at right) */}
            <path 
              d="M 46,-2.5 Q 52,0 46,2.5 Q 43,0 46,-2.5 Z" 
              fill="#0f172a" 
            />

            {/* Vertical Tail Fin */}
            <polygon points="-35,0 -52,0 -56,-14 -44,-12" fill="#1e60f2" />

            {/* Navigation Strobe Lights */}
            {/* Starboard wingtip: Green */}
            <circle cx="-26" cy="60" r="3" fill="#22c55e" className="svg-strobe-green" />
            {/* Port wingtip: Red */}
            <circle cx="-26" cy="-60" r="3" fill="#ef4444" className="svg-strobe-red" />
            {/* Tail beacon: White */}
            <circle cx="-52" cy="0" r="2.5" fill="#ffffff" className="svg-strobe-white" />
          </g>
        </svg>
      </div>

      {/* Floating Animated Cloud Layers */}
      <div className="clouds-layer clouds-layer-1"></div>
      <div className="clouds-layer clouds-layer-2"></div>

      {/* Ambient Blue & Cyan Glow Spots */}
      <div className="opening-ambient-glow glow-blue-1"></div>
      <div className="opening-ambient-glow glow-blue-2"></div>
      <div className="opening-ambient-glow glow-blue-3"></div>

      {/* Sound Toggle (Top Right) */}
      <button 
        type="button" 
        onClick={() => {
          if (!soundEnabled) {
            playAirportChime();
            playJetWhoosh();
          }
          setSoundEnabled(!soundEnabled);
        }} 
        className="opening-sound-btn"
        title={soundEnabled ? 'Mute Airline Audio' : 'Enable Airline Audio'}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span>{soundEnabled ? 'Sound On' : 'Muted'}</span>
      </button>

      {/* Main Center Cinematic Content */}
      <div className="opening-content-box">
        {/* Boarding Pass Header Badge */}
        <div className="boarding-pass-pill">
          <Ticket size={14} className="text-amber-400" />
          <span>FLIGHT NW-2026</span>
          <span className="pill-dot">•</span>
          <Luggage size={14} className="text-cyan-400" />
          <span>CMB ➔ WORLDWIDE</span>
          <span className="pill-dot">•</span>
          <span className="text-emerald-400 font-bold">IN FLIGHT ✈</span>
        </div>

        {/* Welcome Typography */}
        <div className="opening-text-group">
          <p className="opening-greeting">
            <Sparkles size={14} className="greeting-sparkle" />
            WELCOME TO
            <Sparkles size={14} className="greeting-sparkle" />
          </p>
          <h1 className="opening-brand-name">
            Nationwide <span className="brand-lanka-highlight">Lanka</span>
          </h1>
          <p className="opening-tagline">
            Your Premier Gateway to Unforgettable International Journeys
          </p>
        </div>

        {/* TOURISM SHOWCASE: Live Destination Preview Carousel Card with smooth crossfade */}
        <div className="destination-preview-card">
          <div className="dest-preview-image-wrap">
            <img 
              key={currentDest.name}
              src={currentDest.img} 
              alt={currentDest.name} 
              className="dest-preview-image" 
            />
            <div className="dest-preview-overlay"></div>
            <span className="dest-live-tag">
              <MapPin size={12} /> Exploring Destination
            </span>
          </div>

          <div className="dest-preview-info">
            <div className="dest-preview-title-row">
              <h3 className="dest-preview-name">{currentDest.name}</h3>
              <span className="dest-preview-price">{currentDest.price}</span>
            </div>
            <p className="dest-preview-meta">
              <span>{currentDest.landmark}</span> • <strong>{currentDest.nights}</strong>
            </p>
          </div>

          {/* Destination Mini Indicator Dots */}
          <div className="dest-dots-bar">
            {destinations.map((_, idx) => (
              <span 
                key={idx} 
                className={`dest-dot ${idx === activeDestIndex ? 'active' : ''}`}
                onClick={() => setActiveDestIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar & Realtime Flight Status */}
        <div className="opening-loader-container">
          <div className="opening-loader-track">
            <div 
              className="opening-loader-fill" 
              style={{ width: `${t * 100}%` }}
            >
              <div className="loader-shimmer-highlight"></div>
            </div>
          </div>
          <div className="opening-status-row">
            <span className="opening-status-text">
              <Wind size={13} className="text-cyan-400 mr-1 inline" /> {getStatusMessage()}
            </span>
            <span className="opening-percentage">{progressPercentInt}%</span>
          </div>
        </div>

        {/* Interactive Enter / Skip Button */}
        <div className="opening-actions-row">
          <button
            type="button"
            onClick={handleEnter}
            className="opening-enter-btn"
            id="enter-site-btn"
          >
            <span>Touch Down & Explore Tours</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};
