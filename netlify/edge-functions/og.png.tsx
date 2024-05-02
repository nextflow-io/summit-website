import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default function handler(request: Request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  const defaultTitle =
    "Join us for the latest developments and innovations from the Nextflow world.";

  let title = params.get("title") || defaultTitle;
  let subtitle = params.get("subtitle") || "";
  let img;

  let speaker;
  // if (params.speaker) speaker = speakers.find((s) => s.slug === params.speaker);

  if (speaker) {
    title = speaker.fullName;
    subtitle = speaker.tagLine;
    img = speaker.profilePicture;
  }

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
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            paddingRight: "26rem",
            paddingLeft: "2rem",
            paddingTop: "2rem",
            paddingBottom: "0.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
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
        </div>
      </div>
    ),
  );
}
