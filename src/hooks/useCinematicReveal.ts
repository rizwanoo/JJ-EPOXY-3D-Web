import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCinematicReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance choreography
      const heroItems = container.querySelectorAll('[data-hero-animate]');
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      // Subtle parallax on hero background media
      const heroMedia = container.querySelector('[data-hero-parallax]');
      if (heroMedia) {
        gsap.to(heroMedia, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroMedia,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Editorial section reveals
      const revealBlocks = container.querySelectorAll('[data-reveal]');
      revealBlocks.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
