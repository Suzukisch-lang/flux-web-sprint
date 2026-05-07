"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

// data-nav-theme="light"  → navbar over a dark section  → white text, white CTA
// data-nav-theme="dark"   → navbar over a light section → black text, black CTA

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

    // ── Color helpers ──────────────────────────────────────────────────────
    const navItems = () => el.querySelectorAll<HTMLElement>("[data-nav-item]");
    const navCta = () => el.querySelector<HTMLElement>("[data-nav-cta]");

    const applyTheme = (theme: string, animate = true) => {
      const isLight = theme === "light"; // light = over dark bg = white nav
      const textColor = isLight ? "#ffffff" : "#000000";
      const btnBg   = isLight ? "#ffffff" : "#000000";
      const btnText = isLight ? "#000000" : "#ffffff";
      const dur = animate ? 0.38 : 0;

      gsap.to(navItems(), {
        color: textColor,
        duration: dur,
        ease: "power2.inOut",
        overwrite: "auto",
      });

      const cta = navCta();
      if (cta) {
        gsap.to(cta, {
          backgroundColor: btnBg,
          color: btnText,
          duration: dur,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      }
    };

    // ── Scroll hide / show (desktop only via matchMedia) ───────────────────
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial theme: page starts on hero (dark bg → light nav)
      applyTheme("light", false);

      // ── ScrollTrigger: colour change per section ───────────────────────
      const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
      sections.forEach((section) => {
        const theme = section.getAttribute("data-nav-theme") ?? "light";
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          onEnter: ()      => applyTheme(theme),
          onEnterBack: ()  => applyTheme(theme),
        });
      });

      // ── Scroll hide / show ────────────────────────────────────────────
      const onScroll = () => {
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        // Background: frosted glass fades in over first 120 px
        gsap.set(bg, { opacity: Math.min(y / 120, 1) });

        // Always visible near the top
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

        // Scroll down → slide out
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

        // Scroll up → snap back
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

      return () => {
        window.removeEventListener("scroll", onScroll);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 right-0 z-50 hidden md:block"
    >
      {/* Frosted glass background — fades in on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-black/10"
        style={{ opacity: 0 }}
      />

      {/* Nav content */}
      <div className="relative px-8">
        <Navbar />
      </div>
    </div>
  );
}
