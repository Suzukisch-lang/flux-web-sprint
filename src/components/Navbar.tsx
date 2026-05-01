"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

const interSemiBold: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 600,
  letterSpacing: "-0.04em",
};

const interMedium: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
  letterSpacing: "-0.04em",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative flex items-center justify-between py-6 shrink-0 w-full">
        {/* Logo */}
        <span className="text-base text-black capitalize" style={interSemiBold}>
          H.Studio
        </span>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-14" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base text-black capitalize transition-opacity hover:opacity-60"
              style={interSemiBold}
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center justify-center bg-black text-white px-4 py-3 rounded-3xl text-sm cursor-pointer transition-opacity hover:opacity-80"
          style={interMedium}
        >
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <line x1="3" y1="6" x2="21" y2="6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="3" y1="13" x2="21" y2="13" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="3" y1="20" x2="21" y2="20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-6 pt-8 pb-10">
          <div className="flex items-center justify-between mb-10">
            <span className="text-base text-black capitalize" style={interSemiBold}>
              H.Studio
            </span>
            <button
              className="p-1 cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-2xl text-black capitalize border-b border-gray-100 pb-4"
                style={interSemiBold}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>

          <button
            className="self-start bg-black text-white px-4 py-3 rounded-3xl text-sm cursor-pointer mt-6"
            style={interMedium}
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
