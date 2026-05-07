"use client";
import { useRef } from "react";
import gsap from "gsap";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

const interMedium: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
  letterSpacing: "-0.04em",
};

export default function PrimaryButton({
  children,
  className = "",
  variant = "solid",
  ...props
}: Props) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const onEnter = () => {
    gsap.killTweensOf([fillRef.current, textRef.current]);
    gsap.to(fillRef.current, { xPercent: 0, duration: 0.55, ease: "power3.inOut" });
    gsap.to(textRef.current, { color: "#000000", duration: 0.25, delay: 0.1, ease: "power2.out" });
  };

  const onLeave = () => {
    gsap.killTweensOf([fillRef.current, textRef.current]);
    gsap.to(fillRef.current, { xPercent: 100, duration: 0.55, ease: "power3.inOut" });
    gsap.to(textRef.current, { color: "#ffffff", duration: 0.2, ease: "power2.out" });
  };

  const variantClass =
    variant === "solid"
      ? "bg-black text-white rounded-3xl"
      : "bg-transparent text-white border border-white rounded-full";

  return (
    <button
      className={`relative overflow-hidden px-4 py-3 text-sm cursor-pointer ${variantClass} ${className}`}
      style={interMedium}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...props}
    >
      <span
        ref={fillRef}
        className="absolute inset-0 bg-white"
        style={{ transform: "translateX(100%)" }}
        aria-hidden
      />
      <span ref={textRef} className="relative" style={{ color: "#ffffff" }}>
        {children}
      </span>
    </button>
  );
}
