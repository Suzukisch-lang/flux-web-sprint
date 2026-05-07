"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

export default function StickyNavbar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);
  const activeTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      // Frosted background fades in over the first 120 px of scroll
      gsap.set(bg, { opacity: Math.min(y / 120, 1) });

      // Always visible when near the top of the page
      if (y < 80) {
        if (isHidden.current) {
          isHidden.current = false;
          activeTween.current?.kill();
          activeTween.current = gsap.to(el, {
            yPercent: 0,
            opacity: 1,
            duration: 0.55,
            ease: "expo.out",
          });
        }
        return;
      }

      // Scrolling down → slide out upward
      if (delta > 4 && !isHidden.current) {
        isHidden.current = true;
        activeTween.current?.kill();
        activeTween.current = gsap.to(el, {
          yPercent: -115,
          opacity: 0.6,
          duration: 0.48,
          ease: "power3.inOut",
        });
        return;
      }

      // Scrolling up → snap back down with an expo deceleration
      if (delta < -3 && isHidden.current) {
        isHidden.current = false;
        activeTween.current?.kill();
        activeTween.current = gsap.to(el, {
          yPercent: 0,
          opacity: 1,
          duration: 0.58,
          ease: "expo.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 right-0 z-50 hidden md:block"
    >
      {/* Frosted glass background — transparent on hero, fades in on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-black/10"
        style={{ opacity: 0 }}
      />

      {/* Nav content — sits above the background layer */}
      <div className="relative px-8">
        <Navbar />
      </div>
    </div>
  );
}
