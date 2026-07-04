"use client";

import { useEffect, useRef } from "react";

/**
 * The signature move — a scroll-linked breath.
 * A small circle fixed at the right edge inhales (grows) and exhales
 * (shrinks) as you move through the page: four full breath cycles over
 * the scroll length, driven by a CSS variable so paint stays cheap.
 * A thin outer ring counter-breathes.
 */
export default function Breath() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--breath", "0.5");
      return;
    }
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      // 4 breath cycles across the page; smooth sinusoid 0..1
      const breath = 0.5 - 0.5 * Math.cos(p * Math.PI * 2 * 4);
      el.style.setProperty("--breath", breath.toFixed(4));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden sm:flex items-center justify-center"
      style={{ width: 34, height: 34 }}
    >
      <span
        className="breath-ring absolute inset-0 rounded-full border"
        style={{ borderColor: "var(--blush-deep)" }}
      />
      <span
        className="breath-dot block rounded-full"
        style={{ width: 14, height: 14, background: "var(--blush-deep)" }}
      />
    </div>
  );
}
