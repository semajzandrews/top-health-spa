"use client";

import { useEffect, useState } from "react";

const PHONE = "(973) 743-5282";
const TEL = "tel:+19737435282";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-linen/90 backdrop-blur-md shadow-[0_1px_0_var(--hairline-dark)]" : ""
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between h-16">
          <a
            href="#top"
            className={`display text-lg md:text-xl tracking-tight transition-colors duration-500 ${
              scrolled ? "text-pine" : "text-linen"
            }`}
          >
            Top Health <span className="italic text-blush-deep">Spa</span>
          </a>
          <div
            className={`hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-500 ${
              scrolled ? "text-pine/70" : "text-linen/80"
            }`}
          >
            <a href="#ritual" className="hover:text-blush-deep transition-colors">The Ritual</a>
            <a href="#table" className="hover:text-blush-deep transition-colors">The Table</a>
            <a href="#visit" className="hover:text-blush-deep transition-colors">Visit</a>
          </div>
          <a
            href={TEL}
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-500 ${
              scrolled
                ? "bg-pine text-linen hover:bg-pine-3"
                : "bg-linen text-pine hover:bg-sand"
            }`}
          >
            <PhoneIcon />
            {PHONE}
          </a>
          <a
            href={TEL}
            aria-label={`Call Top Health Spa at ${PHONE}`}
            className={`sm:hidden inline-flex items-center justify-center rounded-full transition-colors duration-500 ${
              scrolled ? "bg-pine text-linen" : "bg-linen text-pine"
            }`}
            style={{ width: 40, height: 40 }}
          >
            <PhoneIcon />
          </a>
        </nav>
      </header>

      {/* fixed mobile call dock — collapses to a thumb circle */}
      <a
        href={TEL}
        aria-label={`Call Top Health Spa at ${PHONE}`}
        className="sm:hidden fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-blush-deep text-linen shadow-lg"
        style={{ width: 52, height: 52 }}
      >
        <PhoneIcon />
      </a>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h2.9l1.4 4.1-2 1.5a13.6 13.6 0 0 0 6.5 6.5l1.5-2 4.1 1.4v2.9c0 1-.8 1.8-1.8 1.8C10.7 19.2 4.8 13.3 4.8 4.8 4.8 3.8 5.6 3 6.6 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
