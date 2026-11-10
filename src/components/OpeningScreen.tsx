import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Plane,
  Compass
} from 'lucide-react';

interface OpeningScreenProps {
  onComplete: () => void;
}

interface DestinationNode {
  id: string;
  code: string;
  name: string;
  country: string;
  flag: string;
  x: number;
  y: number;
  highlightText: string;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onComplete }) => {
  // progress goes smoothly from 0.000 to 1.000 using requestAnimationFrame
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Key Global Destinations plotted on our 1200 x 700 World Map coordinate system
  const places: DestinationNode[] = useMemo(() => [
    { id: 'cmb', code: 'CMB', name: 'Colombo', country: 'Sri Lanka', flag: '🇱🇰', x: 620, y: 470, highlightText: 'Home Hub' },
    { id: 'dxb', code: 'DXB', name: 'Dubai', country: 'UAE', flag: '🇦🇪', x: 490, y: 350, highlightText: 'Burj Khalifa & Safari' },
    { id: 'eur', code: 'PAR', name: 'Paris / Europe', country: 'Europe', flag: '🇪🇺', x: 280, y: 220, highlightText: 'Eiffel & Swiss Alps' },
    { id: 'del', code: 'KSH', name: 'Kashmir & India', country: 'India', flag: '🇮🇳', x: 580, y: 280, highlightText: 'Dal Lake & Taj Mahal' },
    { id: 'bkk', code: 'BKK', name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', x: 780, y: 380, highlightText: 'Pattaya & Safari World' },
    { id: 'vnm', code: 'HAN', name: 'Vietnam', country: 'Vietnam', flag: '🇻🇳', x: 840, y: 330, highlightText: 'Halong Bay & Da Nang' },
    { id: 'sin', code: 'SIN', name: 'Singapore & Malaysia', country: 'Singapore', flag: '🇸🇬', x: 815, y: 490, highlightText: 'Universal & Genting' },
    { id: 'dps', code: 'DPS', name: 'Bali', country: 'Indonesia', flag: '🇮🇩', x: 920, y: 550, highlightText: 'Nusa Penida & Temples' }
  ], []);

  // Define the multi-leg flight legs connecting all places with curved great-circle control arcs
  // Arc curvature: positive or negative offset perpendicular to the chord
  const flightLegs = useMemo(() => {
    const legs = [];
    for (let i = 0; i < places.length - 1; i++) {
      const from = places[i];
      const to = places[i + 1];
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const len = Math.hypot(dx, dy);
      // Perpendicular unit vector (-dy/len, dx/len)
      const nx = -dy / len;
      const ny = dx / len;
      // Arc curvature height (curves northward for great-circle appearance)
      const arcHeight = Math.min(65, len * 0.22);
      const cx = (from.x + to.x) / 2 + nx * arcHeight;
      const cy = (from.y + to.y) / 2 + ny * arcHeight;

      legs.push({ from, to, cx, cy });
    }
    return legs;
  }, [places]);

  const totalLegs = flightLegs.length;

  // Calculate current airplane position & heading angle along the multi-curve trajectory
  const { currentX, currentY, headingAngle, activePlaceIndex, passedPlaces } = useMemo(() => {
    const t = Math.min(1, Math.max(0, progress));
    // Which leg are we on?
    const floatIndex = t * totalLegs;
    const legIndex = Math.min(totalLegs - 1, Math.floor(floatIndex));
    // Sub-progress within this leg [0, 1]
    const legT = Math.min(1, Math.max(0, floatIndex - legIndex));

    const currentLeg = flightLegs[legIndex];
    const { from, to, cx, cy } = currentLeg;

    // Quadratic Bezier formula for this leg:
    const inv = 1 - legT;
    const x = inv * inv * from.x + 2 * inv * legT * cx + legT * legT * to.x;
    const y = inv * inv * from.y + 2 * inv * legT * cy + legT * legT * to.y;

    // Tangent derivative for heading angle
    const dX = 2 * inv * (cx - from.x) + 2 * legT * (to.x - cx);
    const dY = 2 * inv * (cy - from.y) + 2 * legT * (to.y - cy);
    const angle = (Math.atan2(dY, dX) * 180) / Math.PI;

    // Which place is currently targeted / active?
    const currentActive = legT > 0.5 ? Math.min(places.length - 1, legIndex + 1) : legIndex;
    const passed = new Set<string>();
    for (let i = 0; i <= currentActive; i++) {
      passed.add(places[i].id);
    }

    return {
      currentX: x,
      currentY: y,
      headingAngle: angle,
      activePlaceIndex: currentActive,
      passedPlaces: passed
    };
  }, [progress, totalLegs, flightLegs, places]);

  // Audio effects
  const playAirportChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now);
      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.8);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(440, now + 0.35);
      gain2.gain.setValueAtTime(0.001, now + 0.35);
      gain2.gain.exponentialRampToValueAtTime(0.14, now + 0.42);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.35);
      osc2.stop(now + 1.2);
    } catch {
      // Audio autoplay gracefully handled
    }
  }, []);

  const playJetWhoosh = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === 'suspended') ctx.resume();

      const bufferSize = ctx.sampleRate * 1.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(680, ctx.currentTime + 0.8);
      filter.Q.value = 1.6;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.10, ctx.currentTime + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noise.stop(ctx.currentTime + 1.4);
    } catch {
      // Graceful fallback
    }
  }, []);

  const handleEnter = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    if (soundEnabled) playJetWhoosh();
    setTimeout(() => {
      onComplete();
    }, 1050);
  }, [isClosing, soundEnabled, onComplete, playJetWhoosh]);

  useEffect(() => {
    if (soundEnabled) {
      const chimeTimer = setTimeout(() => {
        playAirportChime();
      }, 500);
      return () => clearTimeout(chimeTimer);
    }
  }, [soundEnabled, playAirportChime]);

  // Smooth 60FPS / 120FPS Animation loop
  useEffect(() => {
    const TOTAL_DURATION_MS = 8200; // 8.2 seconds for full journey
    let startTime: number | null = null;

    const animateFlight = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawLinearProgress = Math.min(1, elapsed / TOTAL_DURATION_MS);

      // Smooth ease for natural acceleration & deceleration
      const eased = rawLinearProgress < 0.5
        ? 2 * rawLinearProgress * rawLinearProgress
        : 1 - Math.pow(-2 * rawLinearProgress + 2, 2) / 2;

      setProgress(eased);

      if (rawLinearProgress < 1) {
        animFrameRef.current = requestAnimationFrame(animateFlight);
      } else {
        setTimeout(() => {
          handleEnter();
        }, 500);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateFlight);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [handleEnter]);

  const activePlace = places[activePlaceIndex];

  return (
    <div className={`opening-splash-wrapper ${isClosing ? 'opening-curtain-open' : ''}`}>
      {/* Top & Bottom Sliding Luxury Velvet Curtains */}
      <div className="curtain-half curtain-top">
        <div className="curtain-fabric-lines"></div>
      </div>
      <div className="curtain-half curtain-bottom">
        <div className="curtain-fabric-lines"></div>
      </div>

      {/* Ambient Deep Blue Backlight */}
      <div className="opening-ambient-glow glow-blue-1"></div>
      <div className="opening-ambient-glow glow-blue-2"></div>

      {/* Sound Toggle */}
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

      {/* =========================================================================
          WORLD MAP RADAR FLIGHT CANVAS
          Real world map backdrop with curved geodesic flight paths and place nodes
          ========================================================================= */}
      <div className="world-map-flight-canvas-container">
        <svg 
          viewBox="0 0 1200 700" 
          className="world-map-svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="radarPulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.6)" />
              <stop offset="60%" stopColor="rgba(245, 158, 11, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <linearGradient id="flightArcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="jetFuselage" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>

            <linearGradient id="jetThrustGlow" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="rgba(56, 189, 248, 0.7)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* 1. Global Geodesic Longitude & Latitude Graticule Grid */}
          <g className="world-map-grid" opacity="0.16">
            {/* Latitude parallels */}
            <line x1="0" y1="140" x2="1200" y2="140" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="0" y1="260" x2="1200" y2="260" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="0" y1="380" x2="1200" y2="380" stroke="#38bdf8" strokeWidth="1" /> {/* Equator / Subtropical */}
            <line x1="0" y1="500" x2="1200" y2="500" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="0" y1="620" x2="1200" y2="620" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />

            {/* Longitude meridians */}
            <line x1="150" y1="0" x2="150" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="300" y1="0" x2="300" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="450" y1="0" x2="450" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="600" y1="0" x2="600" y2="700" stroke="#38bdf8" strokeWidth="1" /> {/* Prime Meridian Area */}
            <line x1="750" y1="0" x2="750" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="900" y1="0" x2="900" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="1050" y1="0" x2="1050" y2="700" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" />
          </g>

          {/* 2. Stylized World Map Continents Outline (Silhouette Art) */}
          <g className="world-continents-art" fill="rgba(15, 30, 60, 0.45)" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="1.2">
            {/* Europe Landmass */}
            <path d="M 220,160 Q 260,140 310,150 T 350,180 T 330,240 T 270,260 T 230,220 Z" />
            <path d="M 235,145 Q 255,130 260,160 T 240,175 Z" /> {/* UK & Ireland */}

            {/* Africa Landmass */}
            <path d="M 270,290 Q 340,290 370,350 T 380,450 T 330,550 T 290,520 T 250,380 T 260,310 Z" />

            {/* Middle East & Arabian Peninsula */}
            <path d="M 430,290 Q 480,280 510,320 T 520,380 T 470,390 T 440,340 Z" />

            {/* India & South Asia Peninsula */}
            <path d="M 540,240 Q 610,230 630,280 T 650,360 T 630,440 T 590,440 T 550,360 T 530,280 Z" />
            {/* Sri Lanka Pearl */}
            <ellipse cx="620" cy="470" rx="9" ry="14" fill="rgba(245, 158, 11, 0.35)" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Central & East Asia */}
            <path d="M 640,200 Q 750,180 880,200 T 960,260 T 920,320 T 800,310 T 680,270 Z" />

            {/* Southeast Asia & Indochina (Thailand / Vietnam / Malaysia) */}
            <path d="M 740,320 Q 820,310 850,340 T 830,420 T 790,450 T 760,390 Z" />
            {/* Malay Peninsula & Singapore */}
            <path d="M 780,430 Q 810,450 820,490 T 800,500 T 780,460 Z" />

            {/* Indonesian Archipelago & Bali Islands */}
            <ellipse cx="860" cy="530" rx="28" ry="7" />
            <ellipse cx="920" cy="550" rx="14" ry="6" fill="rgba(245, 158, 11, 0.35)" stroke="#f59e0b" strokeWidth="1.2" /> {/* Bali */}
            <ellipse cx="980" cy="540" rx="40" ry="9" />

            {/* Australia Silhouette */}
            <path d="M 980,590 Q 1060,570 1100,610 T 1070,680 T 990,670 T 960,620 Z" />
          </g>

          {/* 3. Curved Flight Arcs Connecting Every Place (Non-linear Great Circle Arcs) */}
          <g className="flight-route-arcs">
            {flightLegs.map((leg, idx) => {
              const pathD = `M ${leg.from.x},${leg.from.y} Q ${leg.cx},${leg.cy} ${leg.to.x},${leg.to.y}`;
              return (
                <g key={`leg-${idx}`}>
                  {/* Subtle Background Guide Arc */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="rgba(56, 189, 248, 0.18)" 
                    strokeWidth="1.8" 
                    strokeDasharray="5 7" 
                  />
                  {/* Glow Active Trajectory Arc */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="url(#flightArcGlow)" 
                    strokeWidth="2.5" 
                    strokeDasharray="8 8"
                    className="animated-flight-dash"
                  />
                </g>
              );
            })}
          </g>

          {/* 4. Destination Places Markers & Labels on the World Map */}
          <g className="destination-nodes-group">
            {places.map((place, idx) => {
              const isCurrent = activePlaceIndex === idx;
              const isPassed = passedPlaces.has(place.id);
              const isHomeHub = place.id === 'cmb';

              return (
                <g 
                  key={place.id} 
                  transform={`translate(${place.x}, ${place.y})`}
                  className={`destination-map-node ${isCurrent ? 'node-active' : isPassed ? 'node-visited' : ''}`}
                >
                  {/* Radar Wave Pulse Ring on Current Place */}
                  {isCurrent && (
                    <circle 
                      r="24" 
                      fill="url(#radarPulseGrad)" 
                      className="node-radar-wave" 
                    />
                  )}

                  {/* Outer Glowing Ring */}
                  <circle 
                    r={isCurrent ? "10" : isHomeHub ? "8" : "6"} 
                    fill={isCurrent ? "#f59e0b" : isPassed ? "#38bdf8" : "#1e293b"} 
                    stroke={isCurrent ? "#ffffff" : isPassed ? "#93c5fd" : "#475569"} 
                    strokeWidth={isCurrent ? "2.5" : "1.5"}
                    filter={isCurrent ? "drop-shadow(0 0 10px #f59e0b)" : "none"}
                  />

                  {/* Center Dot */}
                  <circle 
                    r={isCurrent ? "4" : "2.5"} 
                    fill={isCurrent ? "#ffffff" : "#0f172a"} 
                  />

                  {/* Place City Name, Flag & Code Banner */}
                  <g transform={`translate(0, ${place.y > 450 ? 24 : -18})`}>
                    <rect 
                      x="-55" 
                      y="-12" 
                      width="110" 
                      height="24" 
                      rx="12" 
                      fill={isCurrent ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.75)"} 
                      stroke={isCurrent ? "#f59e0b" : isPassed ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.15)"}
                      strokeWidth={isCurrent ? "1.5" : "1"}
                    />
                    <text 
                      x="0" 
                      y="4" 
                      textAnchor="middle" 
                      fill={isCurrent ? "#ffffff" : isPassed ? "#cbd5e1" : "#94a3b8"}
                      fontSize="11" 
                      fontWeight={isCurrent ? "800" : "600"}
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {place.flag} {place.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>

          {/* 5. The Commercial Jet Airliner Flying Across Curved Trajectories */}
          <g 
            transform={`translate(${currentX.toFixed(2)}, ${currentY.toFixed(2)}) rotate(${headingAngle.toFixed(2)}) ${isClosing ? 'scale(2.5) translate(80, 0)' : 'scale(1)'}`}
            className="airliner-jet-svg"
            style={{ 
              transition: isClosing ? 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease' : 'none' 
            }}
          >
            {/* Dual Glowing Engine Jet Vapor Exhaust (Orange/Cyan flame) */}
            <line x1="-16" y1="-16" x2="-80" y2="-16" stroke="url(#jetThrustGlow)" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
            <line x1="-16" y1="16" x2="-80" y2="16" stroke="url(#jetThrustGlow)" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />

            {/* Swept Wings */}
            <polygon points="8,6 -15,48 -24,45 -8,6" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />
            <polygon points="8,-6 -15,-48 -24,-45 -8,-6" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />

            {/* Jet Turbofan Engines */}
            <rect x="-14" y="12" width="18" height="8" rx="3" fill="#1e293b" />
            <ellipse cx="4" cy="16" rx="2" ry="3.5" fill="#f59e0b" />
            <rect x="-14" y="-20" width="18" height="8" rx="3" fill="#1e293b" />
            <ellipse cx="4" cy="-16" rx="2" ry="3.5" fill="#f59e0b" />

            {/* Horizontal Stabilizers */}
            <polygon points="-28,-2 -44,-16 -48,-14 -35,-2" fill="#cbd5e1" />
            <polygon points="-28,2 -44,16 -48,14 -35,2" fill="#cbd5e1" />

            {/* Fuselage / Aircraft Body */}
            <path 
              d="M 48,0 C 35,-6 -20,-6 -40,-3 C -44,-1.5 -44,1.5 -40,3 C -20,6 35,6 48,0 Z" 
              fill="url(#jetFuselage)" 
              stroke="#64748b" 
              strokeWidth="0.8" 
            />

            {/* Nationwide Airline Gold Cheatline */}
            <path d="M 30,-2 L -28,-2 L -28,2 L 30,2 Z" fill="#f59e0b" />

            {/* Cockpit Windshield */}
            <path d="M 36,-2 Q 42,0 36,2 Q 33,0 36,-2 Z" fill="#0f172a" />

            {/* Vertical Tail Fin */}
            <polygon points="-28,0 -42,0 -45,-12 -35,-10" fill="#0284c7" />

            {/* Flashing Strobe Lights */}
            <circle cx="-20" cy="46" r="2.5" fill="#22c55e" className="svg-strobe-green" />
            <circle cx="-20" cy="-46" r="2.5" fill="#ef4444" className="svg-strobe-red" />
            <circle cx="-42" cy="0" r="2" fill="#ffffff" className="svg-strobe-white" />
          </g>
        </svg>
      </div>

      {/* Floating Ambient Atmosphere Dust */}
      <div className="clouds-layer clouds-layer-1"></div>

      {/* =========================================================================
          CLEAN CINEMATIC BRANDING & FLIGHT STATUS OVERLAY
          No clutter, pure focus on Places & Journey
          ========================================================================= */}
      <div className="opening-content-box world-map-overlay-box">
        {/* Welcome Branding */}
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
            Connecting Sri Lanka to the World's Most Iconic Destinations
          </p>
        </div>

        {/* Dynamic Current Destination Tracker Pill */}
        <div className="current-place-flight-pill">
          <div className="flight-status-icon-wrap">
            <Plane size={16} className="text-amber-400 rotate-45" />
          </div>
          <div className="flight-destination-details">
            <span className="flight-status-tag">FLIGHT NW-2026 EN ROUTE</span>
            <div className="flight-city-headline">
              <span className="destination-flag">{activePlace.flag}</span>
              <strong className="destination-name">{activePlace.name}</strong>
              <span className="destination-sub-code">({activePlace.code})</span>
              <span className="destination-highlight-pill">{activePlace.highlightText}</span>
            </div>
          </div>
        </div>

        {/* Global Places Breadcrumb Strip */}
        <div className="places-breadcrumb-strip">
          {places.map((p, i) => (
            <React.Fragment key={p.id}>
              <span className={`place-strip-chip ${i === activePlaceIndex ? 'active' : passedPlaces.has(p.id) ? 'passed' : ''}`}>
                <span className="chip-flag">{p.flag}</span>
                <span className="chip-code">{p.code}</span>
              </span>
              {i < places.length - 1 && (
                <span className="chip-arrow">›</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Enter Site Button */}
        <div className="opening-actions-row">
          <button
            type="button"
            onClick={handleEnter}
            className="opening-enter-btn"
            id="enter-site-btn"
          >
            <Compass size={17} />
            <span>Touch Down & Explore Tours</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};
