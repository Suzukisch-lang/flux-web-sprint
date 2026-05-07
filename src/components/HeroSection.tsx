import Navbar from "./Navbar";

const HERO_IMAGE = "/hero-bg.jpg";

const interMedium: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-[635px] md:h-[847px]">
      {/* Background photo — covers full section, slightly top-anchored to show face */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-[50%_20%] pointer-events-none select-none"
      />

      {/* Frosted glass overlay — fades from no blur at top to full blur at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[349px] pointer-events-none"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(217,217,217,0.01)",
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* In-flow content — renders after the absolutes so it sits on top */}
      <div className="relative h-full flex flex-col px-4 md:px-8 justify-between md:justify-start pb-6 md:pb-0">
        <Navbar />

        {/* 240 px gap below navbar (desktop only — matches Figma spacing) */}
        <div className="hidden md:block shrink-0" style={{ height: "240px" }} />

        {/* Hero text block
            Mobile: h=341px, items-center (horizontally), justify-between
            Desktop: h=366px, justify-start (stacked, matching Figma frames) */}
        <div className="flex flex-col items-center justify-between md:justify-start h-[341px] md:h-[366px] w-full shrink-0">

          {/* Name area */}
          <div className="w-full relative">
            {/* "[ Hello i'm ]" label — Geist Mono, mix-blend-overlay white */}
            <div
              className="flex items-center px-[18px] relative"
              style={{ marginBottom: "-15px" }}
            >
              <p
                className="text-white uppercase mix-blend-overlay whitespace-nowrap leading-[1.1]"
                style={{
                  fontFamily: "var(--font-geist-mono, monospace)",
                  fontSize: "14px",
                }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>

            {/* "Harvey   Specter" — large display text, mix-blend-overlay white
                Desktop: 198px / tracking -0.07em / leading 1.1
                Mobile: 96px / tracking -0.07em / leading 0.8 */}
            <p
              className="text-white mix-blend-overlay text-center capitalize w-full
                         text-[96px] leading-[0.8] whitespace-pre-wrap
                         md:text-[13.75vw] md:leading-[1.1] md:whitespace-nowrap"
              style={{ ...interMedium, letterSpacing: "-0.07em" }}
            >
              {"Harvey   Specter"}
            </p>
          </div>

          {/* Description + CTA
              Mobile: centered (parent items-center constrains the 293px block)
              Desktop: right-aligned */}
          <div className="flex w-full justify-center md:justify-end">
            <div className="flex flex-col gap-[17px] w-[293px] md:w-[294px]">
              <p
                className="text-[14px] uppercase text-[#1f1f1f] italic font-bold leading-[1.1]"
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  letterSpacing: "-0.04em",
                }}
              >
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>{" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal">award winning</span>{" "}
                desing and art group specializing in branding, web design and
                engineering.
              </p>
              <button
                className="self-start bg-black text-white px-4 py-3 rounded-3xl text-sm cursor-pointer transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
