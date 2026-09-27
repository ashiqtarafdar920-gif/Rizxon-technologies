import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollState, sectionMax } from '../state/scrollStore.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives scrollState.progress / scrollState.section from a single scrubbed
 * ScrollTrigger spanning the whole document. One trigger, one source of
 * truth — every section and the 3D scene reads from it instead of each
 * running its own scroll listener.
 */
export function useScrollProgress(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          scrollState.progress = self.progress;
          scrollState.section = self.progress * sectionMax;
          scrollState.velocity = self.getVelocity() / 1000;
        }
      });

      // Refresh on webfont load / late layout shifts so pin/scrub math
      // stays correct.
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }, root);

    const onResize = () => {
      scrollState.isMobile = window.innerWidth < 768;
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, [rootRef]);
}

/**
 * Small helper for one-off reveal animations on DOM section content.
 * Respects prefers-reduced-motion by skipping the transform and only
 * fading opacity.
 */
export function revealOnEnter(target, options = {}) {
  const reduced = scrollState.reducedMotion;
  gsap.fromTo(
    target,
    { opacity: 0, y: reduced ? 0 : 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      ...options
    }
  );
}
