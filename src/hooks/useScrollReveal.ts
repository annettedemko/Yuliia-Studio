import { useCallback, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  triggerOnce = true,
}: ScrollRevealOptions = {}) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (el: HTMLDivElement | null) => {
      // Cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!el) return;

      // Respect prefers-reduced-motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        el.classList.add('revealed');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            if (triggerOnce) observer.unobserve(el);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(el);
      observerRef.current = observer;
    },
    [threshold, rootMargin, triggerOnce]
  );

  return ref;
}
