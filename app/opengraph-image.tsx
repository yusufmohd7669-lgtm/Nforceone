import { ImageResponse } from "next/og";
import {
  LOGO_VIEWBOX,
  LETTER_N,
  LETTER_F,
  NUMERAL_ONE,
  SPEEDLINES,
} from "@/lib/logoGeometry";

export const alt =
  "NForce One — Enterprise Pega Architecture & IT Delivery Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The NF1 wordmark, built from the shared geometry and inlined as a data URI
 * because Satori renders <img> but not arbitrary inline SVG children.
 */
const MARK = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}" width="212" height="56">`,
  "<defs>",
  '<linearGradient id="w" x1="0" y1="0" x2="80" y2="52" gradientUnits="userSpaceOnUse">',
  '<stop offset="0%" stop-color="#FFFFFF"/><stop offset="55%" stop-color="#F2F2F4"/><stop offset="100%" stop-color="#C9CBD2"/>',
  "</linearGradient>",
  '<linearGradient id="r" x1="116" y1="0" x2="152" y2="52" gradientUnits="userSpaceOnUse">',
  '<stop offset="0%" stop-color="#FF2A33"/><stop offset="45%" stop-color="#E50914"/><stop offset="100%" stop-color="#8A0005"/>',
  "</linearGradient>",
  '<linearGradient id="s" x1="138" y1="0" x2="210" y2="0" gradientUnits="userSpaceOnUse">',
  '<stop offset="0%" stop-color="#FF3A42"/><stop offset="30%" stop-color="#E50914"/><stop offset="100%" stop-color="#E50914" stop-opacity="0"/>',
  "</linearGradient>",
  "</defs>",
  '<g fill="url(#s)">',
  ...SPEEDLINES.map((d) => `<path d="${d}"/>`),
  "</g>",
  `<path d="${LETTER_N}" fill="url(#w)"/>`,
  `<path d="${LETTER_F}" fill="url(#w)"/>`,
  `<path d="${NUMERAL_ONE}" fill="url(#r)"/>`,
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
