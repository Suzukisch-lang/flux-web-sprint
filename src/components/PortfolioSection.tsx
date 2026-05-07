import { client, urlFor } from '@/lib/sanity'
import { FEATURED_PORTFOLIO_QUERY, type PortfolioItem } from '@/lib/queries'
import PrimaryButton from './PrimaryButton'

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
  item,
  imgClass,
  titleStyle,
}: {
  item: PortfolioItem;
  imgClass: string;
  titleStyle: React.CSSProperties;
}) {
  const imageUrl = item.image
    ? urlFor(item.image).width(900).height(900).fit('crop').url()
    : null;

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className={`relative overflow-hidden w-full ${imgClass}`}>
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-100" />
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute bottom-4 left-4 flex gap-3 items-center">
            {item.tags.map((tag) => (
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
        )}
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <p style={titleStyle}>{item.title}</p>
          {(item.category || item.year) && (
            <p style={mono} className="text-neutral-500">
              {[item.category, item.year].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
        <ArrowIcon />
      </div>
    </div>
  );
}

// ── CTA block ─────────────────────────────────────────────────────────────────

function CTABlock({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-center ${className ?? ""}`}>
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tl" />
        <Corner pos="bl" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-[10px] items-start justify-center py-3">
        <p style={ctaDescStyle}>
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <PrimaryButton className="border border-black">
          Let&apos;s talk
        </PrimaryButton>
      </div>

      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <Corner pos="tr" />
        <Corner pos="br" />
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default async function PortfolioSection() {
  const projects: PortfolioItem[] = await client.fetch(
    FEATURED_PORTFOLIO_QUERY,
    {},
    { next: { tags: ['portfolio'] } }
  )

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
            <p style={mono}>{String(projects.length).padStart(3, '0')}</p>
          </div>
        </div>

        {/* ── Desktop header ──────────────────────────────────────── */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex gap-[10px] items-start uppercase">
            <div>
              <p className="text-[96px]" style={headingStyle}>Selected</p>
              <p className="text-[96px]" style={headingStyle}>Work</p>
            </div>
            <p style={mono}>{String(projects.length).padStart(3, '0')}</p>
          </div>
          <div className="h-[110px] w-[15px] flex items-center justify-center">
            <p className="-rotate-90 whitespace-nowrap uppercase" style={mono}>
              [ portfolio ]
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <p style={mono} className="text-neutral-400">
            No portfolio items yet — add some in the Studio at /studio.
          </p>
        ) : (
          <>
            {/* ── Mobile: single column ───────────────────────────────── */}
            <div className="flex flex-col gap-6 md:hidden">
              {projects.map((p) => (
                <ProjectCard
                  key={p._id}
                  item={p}
                  imgClass="h-[390px]"
                  titleStyle={projectTitleMobile}
                />
              ))}
              <CTABlock />
            </div>

            {/* ── Desktop: two-column masonry ─────────────────────────── */}
            <div className="hidden md:flex gap-6 items-end">
              <div className="flex-1 self-stretch">
                <div className="h-full flex flex-col justify-between items-start">
                  {projects[0] && (
                    <ProjectCard
                      item={projects[0]}
                      imgClass="h-[744px]"
                      titleStyle={projectTitleDesktop}
                    />
                  )}
                  {projects[1] && (
                    <ProjectCard
                      item={projects[1]}
                      imgClass="h-[699px]"
                      titleStyle={projectTitleDesktop}
                    />
                  )}
                  <CTABlock className="w-[465px]" />
                </div>
              </div>

              <div className="flex-1 flex flex-col pt-[240px] gap-[117px]">
                {projects[2] && (
                  <ProjectCard
                    item={projects[2]}
                    imgClass="h-[699px]"
                    titleStyle={projectTitleDesktop}
                  />
                )}
                {projects[3] && (
                  <ProjectCard
                    item={projects[3]}
                    imgClass="h-[744px]"
                    titleStyle={projectTitleDesktop}
                  />
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
