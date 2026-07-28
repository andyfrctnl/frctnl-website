import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0d0c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#16a34a",
            }}
          />
          <span
            style={{
              color: "#a7b0a9",
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            Marketing Agency · El Paso, TX
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#f6f7f4",
            fontSize: 108,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a7b0a9",
            fontSize: 32,
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
