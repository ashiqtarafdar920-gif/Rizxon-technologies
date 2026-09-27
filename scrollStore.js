import { STATION_COUNT } from '../data/verticals.js';

// A plain mutable object, not React state. GSAP's ScrollTrigger writes to it
// on every scroll tick, and the R3F scene reads it inside useFrame — this
// keeps the 3D scene perfectly in sync with scroll without funnelling every
// scroll event through React's render cycle.
export const scrollState = {
  progress: 0, // 0..1 across the entire page
  section: 0, // 0..(STATION_COUNT - 1), fractional
  velocity: 0,
  reducedMotion:
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  isMobile: typeof window !== 'undefined' && window.innerWidth < 768
};

export const sectionMax = STATION_COUNT - 1;
