import PrimaryButton from "./PrimaryButton";

// ── Shared styles ─────────────────────────────────────────────────────────────

const ctaHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 300,
  fontStyle: "italic",
  fontSize: "24px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#fff",
  textTransform: "uppercase",
};

const socialStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#fff",
  textTransform: "uppercase",
};


const legalStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  color: "#fff",
  textTransform: "uppercase",
  textDecoration: "underline",
  whiteSpace: "nowrap",
};

const monoStyle: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono, monospace)",
  fontWeight: 400,
  lineHeight: 1.1,
  color: "#fff",
  textTransform: "uppercase",
};

const studioStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter, Inter, sans-serif)",
  fontWeight: 600,
  lineHeight: 0.8,
  letterSpacing: "-0.06em",
  color: "#fff",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
};

// ── Footer ────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="w-full bg-black overflow-hidden">

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div className="md:hidden pt-12 px-4 flex flex-col gap-6">

        {/* CTA + social links */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p style={ctaHeadStyle}>
              Have a{" "}
              <span style={{ fontWeight: 900, fontStyle: "normal" }}>project</span>
              {" "}in mind?
            </p>
            <PrimaryButton variant="outline" className="self-start">
              Let&apos;s talk
            </PrimaryButton>
          </div>
          <div className="flex flex-col gap-4">
            {["Facebook", "Instagram", "X.com", "Linkedin"].map((name) => (
              <p key={name} style={socialStyle}>{name}</p>
            ))}
          </div>
        </div>

        <hr className="border-0 border-t border-white/30 m-0" />

        {/* Legal + wordmark */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-[34px] items-center justify-center">
            <p style={legalStyle}>licences</p>
            <p style={legalStyle}>Privacy policy</p>
          </div>
          <div className="flex flex-col gap-3">
            <p style={{ ...monoStyle, fontSize: "10px" }}>[ Coded By Claude ]</p>
            <p style={{ ...studioStyle, fontSize: "91px" }}>H.Studio</p>
          </div>
        </div>

      </div>

      {/* ── Desktop ─────────────────────────────────────────────── */}
      <div className="hidden md:flex flex-col gap-[120px] pt-[48px] px-8">

        {/* Top: CTA + social columns + divider */}
        <div className="flex flex-col gap-[48px]">
          <div className="flex items-start justify-between">

            {/* Left: CTA */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p style={ctaHeadStyle}>
                Have a{" "}
                <span style={{ fontWeight: 900, fontStyle: "normal" }}>project</span>
                {" "}in mind?
              </p>
              <PrimaryButton variant="outline" className="self-start">
                Let&apos;s talk
              </PrimaryButton>
            </div>

            {/* Centre: Facebook + Instagram */}
            <div className="w-[298px] text-center">
              <p style={socialStyle}>Facebook</p>
              <p style={socialStyle}>Instagram</p>
            </div>

            {/* Right: X.com + Linkedin */}
            <div className="w-[298px] text-right">
              <p style={socialStyle}>X.com</p>
              <p style={socialStyle}>Linkedin</p>
            </div>

          </div>
          <hr className="border-0 border-t border-white/30 m-0" />
        </div>

        {/* Bottom: giant wordmark left, legal links bottom-right */}
        <div className="flex items-end justify-between">

          {/* H.Studio — overflows bottom edge intentionally */}
          <div
            className="relative overflow-hidden flex-1 mr-8"
            style={{ height: 219 }}
          >
            {/* Vertical "[ Coded By Claude ]" label on the far left */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 0, top: "calc(50% - 75.5px)", width: 15, height: 160 }}
            >
              <p
                className="-rotate-90 whitespace-nowrap uppercase"
                style={{ ...monoStyle, fontSize: "14px" }}
              >
                [ Coded By Claude ]
              </p>
            </div>

            {/* Wordmark — vertically centred so top ~0px, bottom overflows */}
            <p
              className="absolute"
              style={{
                ...studioStyle,
                fontSize: "290px",
                left: 0,
                top: "calc(50% + 6.5px)",
                transform: "translateY(-50%)",
              }}
            >
              H.Studio
            </p>
          </div>

          {/* Legal links — pinned to bottom-right */}
          <div className="flex gap-[34px] items-center pb-8 shrink-0">
            <p style={legalStyle}>licences</p>
            <p style={legalStyle}>Privacy policy</p>
          </div>

        </div>

      </div>

    </footer>
  );
}
