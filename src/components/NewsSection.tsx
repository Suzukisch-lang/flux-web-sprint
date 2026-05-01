// News section images from Figma MCP — expire after 7 days.
// Replace with local /public images before deploying.
const IMG_POST_1 =
  "https://www.figma.com/api/mcp/asset/67fdf31d-b78b-4a69-a73e-e55eedcee887";
const IMG_POST_2 =
  "https://www.figma.com/api/mcp/asset/58429def-1181-4087-b047-36fdb37f35b1";
const IMG_POST_3 =
  "https://www.figma.com/api/mcp/asset/48f7470b-9719-48f8-87d4-71c459e37951";

const POSTS = [
  {
    image: IMG_POST_1,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: IMG_POST_2,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: IMG_POST_3,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// ── Shared styles ─────────────────────────────────────────────────────────────

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1.3,
  letterSpacing: "-0.04em",
  color: "#1f1f1f",
};

const readMoreTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "normal",
  letterSpacing: "-0.04em",
  color: "#000",
  whiteSpace: "nowrap",
};

const desktopTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  fontSize: "64px",
  lineHeight: 0.86,
  letterSpacing: "-0.08em",
  color: "#000",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const mobileTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  fontSize: "32px",
  lineHeight: 0.86,
  letterSpacing: "-0.08em",
  color: "#000",
  textTransform: "uppercase",
};

// ── Arrow icon (18 px) ────────────────────────────────────────────────────────

function ReadMoreArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="9" cy="9" r="8.5" stroke="#000" strokeWidth="1" />
      <path
        d="M5.5 12.5L12.5 5.5M12.5 5.5H7.5M12.5 5.5V10.5"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Post card ─────────────────────────────────────────────────────────────────

function PostCard({
  image,
  excerpt,
  imgH,
  cardClass,
  flexText = false,
}: {
  image: string;
  excerpt: string;
  imgH: number;
  cardClass?: string;
  flexText?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-4 shrink-0 ${cardClass ?? ""}`}>
      <div className="relative overflow-hidden w-full" style={{ height: imgH }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p style={bodyTextStyle} className={flexText ? "flex-1 min-h-0" : ""}>
        {excerpt}
      </p>
      <div className="border-b border-black flex gap-[10px] items-center py-1 shrink-0 self-start">
        <p style={readMoreTextStyle}>Read more</p>
        <ReadMoreArrow />
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function NewsSection() {
  return (
    <section className="w-full bg-[#f3f3f3] overflow-hidden">

      {/* ── Mobile: title + horizontal peek strip ───────────────── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p style={mobileTitleStyle}>
          Keep up with my latest news &amp; achievements
        </p>

        {/* Three cards; first fills viewport width, second + third peek right */}
        <div className="flex gap-4 -mr-4">
          {POSTS.map((post, i) => (
            <PostCard
              key={i}
              image={post.image}
              excerpt={post.excerpt}
              imgH={398}
              cardClass="w-[300px]"
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: rotated title + staggered 3-card grid ──────── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">

        {/* Vertical title — rotated -90° so it reads bottom-to-top */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: 110, height: 706 }}
        >
          <div style={{ transform: "rotate(-90deg)" }} className="shrink-0">
            <div style={desktopTitleStyle}>
              <p style={{ marginBottom: 0 }}>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>
        </div>

        {/* Three post cards separated by thin vertical dividers */}
        <div className="flex gap-[31px] items-end">

          {/* Card 1 — fixed height, text fills remaining space */}
          <PostCard
            image={POSTS[0].image}
            excerpt={POSTS[0].excerpt}
            imgH={469}
            cardClass="w-[353px] h-[581px]"
            flexText
          />

          <div className="self-stretch w-px bg-[#ddd]" />

          {/* Card 2 — offset 120 px down, no fixed height */}
          <PostCard
            image={POSTS[1].image}
            excerpt={POSTS[1].excerpt}
            imgH={469}
            cardClass="w-[353px] pt-[120px]"
          />

          <div className="self-stretch w-px bg-[#ddd]" />

          {/* Card 3 — mirrors card 1 */}
          <PostCard
            image={POSTS[2].image}
            excerpt={POSTS[2].excerpt}
            imgH={469}
            cardClass="w-[353px] h-[581px]"
            flexText
          />

        </div>
      </div>

    </section>
  );
}
