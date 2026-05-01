// Full-bleed photo — Figma asset expires after 7 days.
// Replace with a local /public image before deploying.
const IMAGE =
  "https://www.figma.com/api/mcp/asset/61d1e95c-8c19-408c-9eb4-0dee15f17d58";

export default function FullImageSection() {
  return (
    <section className="w-full h-[565px] md:h-[900px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGE}
        alt="Photographer with camera"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}
