const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono, monospace)",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1.1,
  color: "#1f1f1f",
};

const displayText: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  letterSpacing: "-0.08em",
  lineHeight: 0.84,
  color: "#000",
  textTransform: "uppercase",
};

const ampersand: React.CSSProperties = {
  fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
  fontStyle: "italic",
  fontWeight: 400,
  fontVariationSettings: "'opsz' 12, 'wdth' 100",
};

export default function IntroSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-[120px]">

      {/* ── Header: label + divider ───────────────────────────────── */}
      <div className="flex flex-col gap-3 items-end w-full mb-6">
        <p className="text-right uppercase tracking-wide" style={monoLabel}>
          [ 8+ years in industry ]
        </p>
        <hr className="w-full border-0 border-t border-[#1f1f1f] m-0" />
      </div>

      {/* ── Text block ───────────────────────────────────────────── */}
      <div className="flex flex-col items-center md:items-start gap-2 w-full">

        {/* "001" — mobile: centered above line 1 */}
        <p className="md:hidden" style={monoLabel}>001</p>

        {/* Line 1: "A creative director   /" — desktop: left + "001" beside */}
        <div className="flex items-start gap-3">
          <p
            className="text-[32px] md:text-[6.67vw] whitespace-pre"
            style={displayText}
          >
            {`A creative director   /`}
          </p>
          <span
            className="hidden md:block shrink-0 mt-1"
            style={monoLabel}
          >
            001
          </span>
        </div>

        {/* Line 2: "Photographer" — desktop: pl 15.55% */}
        <div className="w-full flex justify-center md:justify-start md:pl-[15.55%]">
          <p
            className="text-[32px] md:text-[6.67vw] whitespace-nowrap"
            style={displayText}
          >
            Photographer
          </p>
        </div>

        {/* Line 3: "Born & raised" — desktop: pl 44.33% */}
        <div className="w-full flex justify-center md:justify-start md:pl-[44.33%]">
          <p
            className="text-[32px] md:text-[6.67vw] whitespace-nowrap"
            style={displayText}
          >
            Born <span style={ampersand}>&amp;</span> raised
          </p>
        </div>

        {/* Line 4: "on the south side" — desktop: left-aligned */}
        <div className="w-full flex justify-center md:justify-start">
          <p
            className="text-[32px] md:text-[6.67vw] whitespace-nowrap"
            style={displayText}
          >
            on the south side
          </p>
        </div>

        {/* Line 5: "of chicago." + "[ creative freelancer ]"
            Desktop: pl 44.04%, label absolutely positioned at ~78.42% from left
            Mobile: centered, label below */}
        <div className="relative w-full flex flex-col items-center md:items-start md:pl-[44.04%]">
          <p
            className="text-[32px] md:text-[6.67vw] whitespace-nowrap"
            style={displayText}
          >
            of chicago.
          </p>

          {/* Label — below "of chicago." on both mobile and desktop */}
          <p className="mt-3 md:mt-1" style={monoLabel}>
            [ creative freelancer ]
          </p>
        </div>

      </div>
    </section>
  );
}
