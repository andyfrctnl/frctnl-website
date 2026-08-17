import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/frctnl-mark.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: 80,
          gap: 64,
          background: "#0b0d0c",
        }}
      >
        <img src={logoSrc} width={470} height={470} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
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
              color: "#a7b0a9",
              fontSize: 32,
              marginTop: 24,
              maxWidth: 560,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
