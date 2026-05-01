// Portrait asset from Figma MCP — expires after 7 days.
// Replace with a local /public image before deploying.
const PORTRAIT =
  "https://www.figma.com/api/mcp/asset/fe7d13c9-c31e-4f52-96d8-c01d5050ebb9";

const ABOUT_TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono, monospace)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

// ── Corner brackets ──────────────────────────────────────────────────────────
type CornerPos = "tl" | "bl" | "tr" | "br";
const CORNER_PATHS: Record<CornerPos, string> = {
  tl: "M 0 16 L 0 0 L 16 0",
  bl: "M 0 0 L 0 16 L 16 16",
  tr: "M 0 0 L 16 0 L 16 16",
  br: "M 0 16 L 16 16 L 16 0",
};

function Corner({ pos }: { pos: CornerPos }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={CORNER_PATHS[pos]} stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

// ── Bracketed text wrapper ───────────────────────────────────────────────────
function BracketedText({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      {/* Left bracket column — stretches to full text height */}
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tl" />
        <Corner pos="bl" />
      </div>

      <div className="flex-1 min-w-0 py-3 px-1">{children}</div>

      {/* Right bracket column */}
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tr" />
        <Corner pos="br" />
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-[80px]">

      {/* ── Mobile: stacked ─────────────────────────────────────── */}
      <div className="flex flex-col gap-5 md:hidden">
        <p className="uppercase" style={monoLabel}>002</p>
        <p className="uppercase" style={monoLabel}>[ About ]</p>

        <BracketedText>
          <p style={bodyText}>{ABOUT_TEXT}</p>
        </BracketedText>

        {/* Portrait — maintains Figma aspect ratio */}
        <div className="w-full aspect-[422/594] overflow-hidden">
          <img
            src={PORTRAIT}
            alt="Studio portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Desktop: two-column ─────────────────────────────────── */}
      <div className="hidden md:flex items-start justify-between">

        {/* [ About ] label — far left */}
        <p className="uppercase shrink-0" style={monoLabel}>[ About ]</p>

        {/* Right column: items-end so short text block aligns to image bottom */}
        <div className="flex items-end gap-8 w-[72%]">

          {/* Bracketed text block */}
          <div className="flex-1 min-w-0">
            <BracketedText>
              <p style={bodyText}>{ABOUT_TEXT}</p>
            </BracketedText>
          </div>

          {/* 002 label + portrait */}
          <div className="flex items-start gap-6 shrink-0">
            <p className="uppercase" style={monoLabel}>002</p>

            {/* Portrait scales with viewport, locks aspect ratio */}
            <div
              className="overflow-hidden shrink-0 aspect-[436/614]"
              style={{ width: "clamp(200px, 30.3vw, 436px)" }}
            >
              <img
                src={PORTRAIT}
                alt="Studio portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
