// Testimonials section logos from Figma MCP — expire after 7 days.
// Replace with local /public images before deploying.
const LOGO_LUKAS =
  "https://www.figma.com/api/mcp/asset/550e3404-485b-4137-9b1d-6c8a2116c295";
const LOGO_MARKO =
  "https://www.figma.com/api/mcp/asset/139a4c71-2b18-47ca-9363-1563c5042769";
const LOGO_SARAH =
  "https://www.figma.com/api/mcp/asset/db717fe4-232a-436c-9f14-cc7410940676";
const LOGO_SOFIA =
  "https://www.figma.com/api/mcp/asset/cdf692be-2632-4a88-861f-2dac06dfd7bf";

type Testimonial = {
  name: string;
  quote: string;
  logo: string;
  logoW: number;
  logoH: number;
  desktopLeft: string;
  desktopTop: number;
  desktopRotate: string;
};

// Cards are split into two groups to control z-ordering against the title text:
//   BEHIND_TITLE renders before the title in DOM (paints underneath it)
//   FRONT_TITLE  renders after  the title in DOM (paints on top of it)
const BEHIND_TITLE: Testimonial[] = [
  {
    name: "Lukas Weber",
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: LOGO_LUKAS,
    logoW: 138,
    logoH: 19,
    desktopLeft: "46.9%",
    desktopTop: 272,
    desktopRotate: "2.9deg",
  },
];

const FRONT_TITLE: Testimonial[] = [
  {
    name: "Marko Stojković",
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: LOGO_MARKO,
    logoW: 143,
    logoH: 19,
    desktopLeft: "7.1%",
    desktopTop: 142,
    desktopRotate: "-6.85deg",
  },
  {
    name: "Sarah Jenkins",
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: LOGO_SARAH,
    logoW: 109,
    logoH: 31,
    desktopLeft: "21.2%",
    desktopTop: 553,
    desktopRotate: "2.23deg",
  },
  {
    name: "Sofia Martínez",
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: LOGO_SOFIA,
    logoW: 81,
    logoH: 36,
    desktopLeft: "68.5%",
    desktopTop: 546,
    desktopRotate: "-4.15deg",
  },
];

// ── Shared styles ─────────────────────────────────────────────────────────────

const quoteStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

const nameStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 900,
  fontSize: "16px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#000",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

// ── Testimonial card ──────────────────────────────────────────────────────────

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  name,
  cardW = 353,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  cardW?: number;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 shrink-0"
      style={{ width: `${cardW}px` }}
    >
      <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-left"
        />
      </div>
      <p style={quoteStyle}>{quote}</p>
      <p style={nameStyle}>{name}</p>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden">

      {/* ── Mobile: title + two-card peek ───────────────────────── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontWeight: 500,
            fontSize: "64px",
            lineHeight: 0.8,
            letterSpacing: "-0.07em",
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          Testimonials
        </p>

        {/* Marko full-card + Sofia peeking from the right */}
        <div className="flex gap-4 -mr-4">
          <div className="shrink-0" style={{ transform: "rotate(-3.5deg)" }}>
            <TestimonialCard
              logo={FRONT_TITLE[0].logo}
              logoW={FRONT_TITLE[0].logoW}
              logoH={FRONT_TITLE[0].logoH}
              quote={FRONT_TITLE[0].quote}
              name={FRONT_TITLE[0].name}
              cardW={260}
            />
          </div>
          <div className="shrink-0" style={{ transform: "rotate(2deg)" }}>
            <TestimonialCard
              logo={FRONT_TITLE[2].logo}
              logoW={FRONT_TITLE[2].logoW}
              logoH={FRONT_TITLE[2].logoH}
              quote={FRONT_TITLE[2].quote}
              name={FRONT_TITLE[2].name}
              cardW={260}
            />
          </div>
        </div>
      </div>

      {/* ── Desktop: scattered cards around big centred title ────── */}
      <div className="hidden md:flex relative w-full min-h-[870px] flex-col items-center justify-center px-8 py-[120px]">

        {/* Lukas — paints BELOW the title (first in DOM) */}
        {BEHIND_TITLE.map((t) => (
          <div
            key={t.name}
            className="absolute"
            style={{
              left: t.desktopLeft,
              top: `${t.desktopTop}px`,
              transform: `rotate(${t.desktopRotate})`,
            }}
          >
            <TestimonialCard
              logo={t.logo}
              logoW={t.logoW}
              logoH={t.logoH}
              quote={t.quote}
              name={t.name}
            />
          </div>
        ))}

        {/* Big centred "Testimonials" — above Lukas, below the other three */}
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontWeight: 500,
            fontSize: "198px",
            lineHeight: 1.1,
            letterSpacing: "-0.07em",
            color: "#000",
            textTransform: "capitalize",
            textAlign: "center",
            position: "relative",
          }}
        >
          Testimonials
        </p>

        {/* Marko, Sarah, Sofia — paint ON TOP of the title (last in DOM) */}
        {FRONT_TITLE.map((t) => (
          <div
            key={t.name}
            className="absolute"
            style={{
              left: t.desktopLeft,
              top: `${t.desktopTop}px`,
              transform: `rotate(${t.desktopRotate})`,
            }}
          >
            <TestimonialCard
              logo={t.logo}
              logoW={t.logoW}
              logoH={t.logoH}
              quote={t.quote}
              name={t.name}
            />
          </div>
        ))}

      </div>

    </section>
  );
}
