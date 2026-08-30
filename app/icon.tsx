import { ImageResponse } from "next/og";
import {
  LOGO_VIEWBOX,
  N_POLYGON,
  F_TOP_BAR,
  F_MID_BAR,
  ONE_PATH_FIXED,
  SPEED_POLYGONS_FIXED,
} from "@/lib/logoGeometry";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const MARK = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}" width="950" height="550">`,
    "<defs>",
    '<linearGradient id="favRed" x1="0%" y1="0%" x2="0%" y2="100%">',
    '<stop offset="0%" stop-color="#E10600"/>',
    '<stop offset="60%" stop-color="#800000"/>',
    '<stop offset="100%" stop-color="#220000"/>',
    "</linearGradient>",
    "</defs>",
    `<polygon points="${N_POLYGON}" fill="#FFFFFF"/>`,
    `<polygon points="${F_TOP_BAR}" fill="#FFFFFF"/>`,
    `<polygon points="${F_MID_BAR}" fill="#FFFFFF"/>`,
    `<path d="${ONE_PATH_FIXED}" fill="url(#favRed)"/>`,
    '<g fill="url(#favRed)">',
    ...SPEED_POLYGONS_FIXED.map((pts) => `<polygon points="${pts}"/>`),
    "</g>",
    "</svg>",
  ].join("");

  const markSrc = `data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          borderRadius: 14,
          padding: 6,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={56} height={32} alt="" />
      </div>
    ),
    { ...size }
  );
}
