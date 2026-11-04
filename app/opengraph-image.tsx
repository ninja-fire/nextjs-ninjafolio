import { ImageResponse } from "next/og";

export const alt = "NinjaFire · Product & Brand Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs TTF/OTF, which next/font doesn't expose. Falls back to the default font if the fetch fails.
async function loadBrico(): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800")).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

// Social share card for the home page; case studies use their own cover instead.
export default async function OpengraphImage() {
  const brico = await loadBrico();
  const lime = { color: "#C6FE09", marginLeft: "0.25em" };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#151514",
          color: "#F5F7EF",
          fontFamily: brico ? "Brico" : undefined,
          fontWeight: 800,
        }}
      >
        <div style={{ display: "flex", fontSize: 36, color: "#C6FE09" }}>NinjaFire</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 120, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          <div style={{ display: "flex" }}>
            I<span style={lime}>fire</span>
            <span style={{ marginLeft: "0.25em" }}>design,</span>
          </div>
          <div style={{ display: "flex" }}>
            you<span style={lime}>launch</span>.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#A3A69C" }}>
          Product &amp; brand designer · UX/UI, brand identity, Web3
        </div>
      </div>
    ),
    { ...size, fonts: brico ? [{ name: "Brico", data: brico, weight: 800, style: "normal" }] : undefined },
  );
}
