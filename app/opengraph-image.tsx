import { ImageResponse } from "next/og";
import {
  LOGO_VIEWBOX,
  N_POLYGON,
  F_TOP_BAR,
  F_MID_BAR,
  ONE_PATH_FIXED,
  SPEED_POLYGONS_FIXED,
} from "@/lib/logoGeometry";

export const alt =
  "NForce One — Enterprise Pega Architecture & IT Delivery Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The NF1 official fixed brand mark, built from the shared geometry and inlined as a data URI
 * because Satori renders <img> but not arbitrary inline SVG children.
 */
const MARK = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}" width="950" height="550">`,
  "<defs>",
  '<linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">',
  '<stop offset="0%" stop-color="#E10600"/>',
  '<stop offset="60%" stop-color="#800000"/>',
  '<stop offset="100%" stop-color="#220000"/>',
  "</linearGradient>",
  "</defs>",
  `<polygon points="${N_POLYGON}" fill="#FFFFFF"/>`,
  `<polygon points="${F_TOP_BAR}" fill="#FFFFFF"/>`,
  `<polygon points="${F_MID_BAR}" fill="#FFFFFF"/>`,
  `<path d="${ONE_PATH_FIXED}" fill="url(#redGradient)"/>`,
  '<g fill="url(#redGradient)">',
  ...SPEED_POLYGONS_FIXED.map((pts) => `<polygon points="${pts}"/>`),
  "</g>",
  '<g font-family="sans-serif" font-weight="900" font-size="62" letter-spacing="2">',
  '<text x="140" y="475" fill="#FFFFFF">Let\'s Do</text>',
  '<text x="610" y="475" fill="#E10600">IT!</text>',
  "</g>",
  "</svg>",
].join("");

const markSrc = `data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`;





export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          backgroundImage:
            "linear-gradient(to right, rgba(40,40,48,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(40,40,48,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "68px 76px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={303} height={80} alt="" />
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 20,
              letterSpacing: 6,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            LET&apos;S DO <span style={{ color: "#E50914" }}>&nbsp;IT!</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 3,
              color: "#E50914",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            [SYS.SPEC] ENTERPRISE IT ARCHITECTURE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              lineHeight: 1.1,
              fontWeight: 800,
              color: "#FFFFFF",
              maxWidth: 940,
            }}
          >
            Turn Complex IT Systems into Competitive Advantages.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ display: "flex", width: 74, height: 5, backgroundColor: "#E50914" }}
          />
          <div
            style={{
              display: "flex",
              marginLeft: 22,
              fontSize: 23,
              color: "#9CA3AF",
            }}
          >
            Certified Pega CLSA · Cloud Data Platforms · QA Engineering
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
