// Thumbnail assets from Figma MCP — expire after 7 days.
// Replace with local /public images before deploying.
const SERVICES = [
  {
    number: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/7ce87b3a-fb9f-4a9e-a703-70848e318a34",
    alt: "Brand discovery work",
  },
  {
    number: "[ 2 ]",
    title: "Web design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/5b166a0e-590a-4e3f-85a0-a9225685ba1d",
    alt: "Web design and development",
  },
  {
    number: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/7ba63695-72b3-46a0-8014-c862bfba7ef1",
    alt: "Marketing",
  },
  {
    number: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/b162205a-ecf2-4168-82a1-44eb38232c59",
    alt: "Photography",
  },
];

// ── Shared styles ────────────────────────────────────────────────────────────
const mono: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono, monospace)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#fff",
};

const displayLight: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  letterSpacing: "-0.08em",
  lineHeight: "normal",
  color: "#fff",
  textTransform: "uppercase",
};

const serviceTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: "36px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#fff",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const descriptionStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#fff",
};

// ── Component ────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section className="w-full bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12">

      {/* [ services ] */}
      <p className="uppercase" style={mono}>[ services ]</p>

      {/* [4] ·········· DELIVERABLES */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[32px] md:text-[6.67vw]" style={displayLight}>[4]</span>
        <span className="text-[32px] md:text-[6.67vw]" style={displayLight}>Deliverables</span>
      </div>

      {/* ── Service rows ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-12 w-full">
        {SERVICES.map((svc) => (
          <div key={svc.number} className="flex flex-col gap-[9px] w-full">

            {/* Number + hairline */}
            <p className="uppercase" style={mono}>{svc.number}</p>
            <hr className="border-0 border-t border-white/30 m-0" />

            {/* Content row
                Desktop: title left, description+image right (justify-between)
                Mobile:  stacked vertically */}
            <div className="pt-2 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">

              {/* Service title */}
              <p style={serviceTitleStyle}>{svc.title}</p>

              {/* Description + thumbnail
                  Desktop: side by side, shrink-0 to stay right
                  Mobile:  stacked */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start md:shrink-0">
                <p style={descriptionStyle} className="md:w-[393px]">
                  {svc.description}
                </p>
                <div className="w-[151px] h-[151px] shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt={svc.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
