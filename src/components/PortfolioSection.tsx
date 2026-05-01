// Portfolio section images from Figma MCP — expire after 7 days.
// Replace with local /public images before deploying.
const IMG_SURFERS =
  "https://www.figma.com/api/mcp/asset/3c662654-0c2d-4128-8afe-373705f2faad";
const IMG_CYBERPUNK =
  "https://www.figma.com/api/mcp/asset/a9383ec7-2a34-4934-81b8-411460bdc9d7";
const IMG_AGENCY =
  "https://www.figma.com/api/mcp/asset/d7cc83ba-96eb-4a18-8aeb-bcabd6dab5ab";
const IMG_MINIMAL =
  "https://www.figma.com/api/mcp/asset/9ef3cd29-5d12-45db-8655-a4616455c9b8";

const PROJECTS = [
  { title: "Surfers paradise",   image: IMG_SURFERS,   tags: ["Social Media", "Photography"] },
  { title: "Cyberpunk caffe",    image: IMG_CYBERPUNK, tags: ["Social Media", "Photography"] },
  { title: "Agency 976",         image: IMG_AGENCY,    tags: ["Social Media", "Photography"] },
  { title: "Minimal Playground", image: IMG_MINIMAL,   tags: ["Social Media", "Photography"] },
];

// ── Shared styles ─────────────────────────────────────────────────────────────

const mono: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono, monospace)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#1f1f1f",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  letterSpacing: "-0.08em",
  lineHeight: 0.86,
  color: "#000",
  textTransform: "uppercase",
};

const projectTitleDesktop: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 900,
  fontSize: "36px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#000",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const projectTitleMobile: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 900,
  fontSize: "24px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#000",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const pillTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "normal",
  letterSpacing: "-0.04em",
  color: "#111",
  whiteSpace: "nowrap",
};

const ctaDescStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 400,
  fontStyle: "italic",
  fontSize: "14px",
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

const ctaButtonTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "normal",
  letterSpacing: "-0.04em",
  color: "#fff",
  whiteSpace: "nowrap",
};

// ── Corner brackets ───────────────────────────────────────────────────────────

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

// ── Arrow icon ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="15.5" stroke="#000" strokeWidth="1" />
      <path
        d="M10.5 21.5L21.5 10.5M21.5 10.5H13.5M21.5 10.5V18.5"
        stroke="#000"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  title,
  image,
  tags,
  imgClass,
  titleStyle,
}: {
  title: string;
  image: string;
  tags: string[];
  imgClass: string;
  titleStyle: React.CSSProperties;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className={`relative overflow-hidden w-full ${imgClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3 items-center">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center justify-center px-2 py-1 rounded-full overflow-hidden"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.3)",
              }}
            >
              <p style={pillTextStyle}>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p style={titleStyle}>{title}</p>
        <ArrowIcon />
      </div>
    </div>
  );
}

// ── CTA block ─────────────────────────────────────────────────────────────────

function CTABlock({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-center ${className ?? ""}`}>
      {/* Left bracket */}
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tl" />
        <Corner pos="bl" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-[10px] items-start justify-center py-3">
        <p style={ctaDescStyle}>
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button className="flex items-center justify-center px-4 py-3 rounded-full bg-black">
          <span style={ctaButtonTextStyle}>Let's talk</span>
        </button>
      </div>

      {/* Right bracket */}
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tr" />
        <Corner pos="br" />
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function PortfolioSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-[80px]">
      <div className="flex flex-col gap-8 md:gap-[61px]">

        {/* ── Mobile header ───────────────────────────────────────── */}
        <div className="flex flex-col gap-4 md:hidden">
          <p className="uppercase" style={mono}>[ portfolio ]</p>
          <div className="flex items-start justify-between w-full uppercase">
            <div>
              <p className="text-[32px]" style={headingStyle}>Selected</p>
              <p className="text-[32px]" style={headingStyle}>Work</p>
            </div>
            <p style={mono}>004</p>
          </div>
        </div>

        {/* ── Desktop header ──────────────────────────────────────── */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex gap-[10px] items-start uppercase">
            <div>
              <p className="text-[96px]" style={headingStyle}>Selected</p>
              <p className="text-[96px]" style={headingStyle}>Work</p>
            </div>
            <p style={mono}>004</p>
          </div>
          {/* [ portfolio ] rotated vertically on the right */}
          <div className="h-[110px] w-[15px] flex items-center justify-center">
            <p className="-rotate-90 whitespace-nowrap uppercase" style={mono}>
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* ── Mobile: single column ───────────────────────────────── */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              image={p.image}
              tags={p.tags}
              imgClass="h-[390px]"
              titleStyle={projectTitleMobile}
            />
          ))}
          <CTABlock />
        </div>

        {/* ── Desktop: two-column masonry ─────────────────────────── */}
        <div className="hidden md:flex gap-6 items-end">

          {/* Left column — self-stretch fills row height, justify-between spaces items */}
          <div className="flex-1 self-stretch">
            <div className="h-full flex flex-col justify-between items-start">
              <ProjectCard
                title={PROJECTS[0].title}
                image={PROJECTS[0].image}
                tags={PROJECTS[0].tags}
                imgClass="h-[744px]"
                titleStyle={projectTitleDesktop}
              />
              <ProjectCard
                title={PROJECTS[1].title}
                image={PROJECTS[1].image}
                tags={PROJECTS[1].tags}
                imgClass="h-[699px]"
                titleStyle={projectTitleDesktop}
              />
              <CTABlock className="w-[465px]" />
            </div>
          </div>

          {/* Right column — offset 240px down, 117px between projects */}
          <div className="flex-1 flex flex-col pt-[240px] gap-[117px]">
            <ProjectCard
              title={PROJECTS[2].title}
              image={PROJECTS[2].image}
              tags={PROJECTS[2].tags}
              imgClass="h-[699px]"
              titleStyle={projectTitleDesktop}
            />
            <ProjectCard
              title={PROJECTS[3].title}
              image={PROJECTS[3].image}
              tags={PROJECTS[3].tags}
              imgClass="h-[744px]"
              titleStyle={projectTitleDesktop}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
