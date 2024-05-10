import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";
import speakers from "https://summit.nextflow.io/2024/boston/speakers.json" assert { type: "json" };

export default function handler(request: Request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  const defaultTitle =
    "Join us for the latest developments and innovations from the Nextflow world.";

  let img;
  let speaker;
  let title = params.get("title") || defaultTitle;
  let subtitle = params.get("subtitle") || "";
  const speakerSlug = params.get("speaker");
  if (speakerSlug) speaker = speakers.find((s) => s.slug === speakerSlug);

  if (speaker) {
    title = speaker.fullName;
    subtitle = speaker.tagLine;
    img = speaker.profilePicture;
  }

  console.log(">>", img);
  return new ImageResponse(
    (
      <div
        className="container"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "32px",
          color: "#F8F9FA",
          backgroundColor: "#212528",
          backgroundImage:
            "url(https://summit.nextflow.io/share/card-bg_boston.png)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "40rem",
            }}
          >
            <h1
              style={{
                marginBottom: "1rem",
                fontSize: "64px",
                fontWeight: "700",
                fontFamily: "mavenpro",
              }}
            >
              {title}
            </h1>
            {!subtitle ? null : (
              <div style={{ fontWeight: "400", fontFamily: "inter" }}>
                {subtitle}
              </div>
            )}
          </div>
          {!!img && (
            <img
              src={img}
              style={{
                width: "200px",
                height: "200px",
                mixBlendMode: "luminosity",
                borderRadius: "100%",
              }}
            />
          )}
        </div>
      </div>
    ),
  );
}
