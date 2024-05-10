import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";
import speakers from "https://summit.nextflow.io/2024/boston/speakers.json" assert { type: "json" };

const InterFont = fetch(
  "https://summit.nextflow.io/fonts/Inter-Regular.ttf",
).then((res) => res.arrayBuffer());

const DegularFont = fetch(
  "https://summit.nextflow.io/fonts/Degular-Bold.ttf",
).then((res) => res.arrayBuffer());

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  let eventLocation = "boston";
  if (params.get("location") === "barcelona") eventLocation = "barcelona";
  const bgImg = `https://summit.nextflow.io/share/card-bg_${eventLocation}.png`;

  const defaultTitle =
    "Join us for the latest developments and innovations from the Nextflow world.";

  let img;
  let speaker;
  let title = params.get("title") || defaultTitle;
  let subtitle = params.get("subtitle") || "";
  const speakerSlug = params.get("speaker");
  if (speakerSlug) speaker = speakers.find((s) => s.slug === speakerSlug);

  if (speaker && !params.get("title")) {
    title = speaker.fullName;
    subtitle = speaker.tagLine;
    img = speaker.profilePicture;
  }

  const meta: any = {};
  if (speaker && params.get("title")) {
    meta.speaker = speaker;
  }

  let titleSize = 64;
  if (title.length > 50) titleSize = 48;
  if (title.length > 70) titleSize = 40;

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
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            <h1
              style={{
                marginBottom: "1rem",
                fontSize: `${titleSize}px`,
                fontWeight: 400,
                fontFamily: "Degular",
              }}
            >
              {title}
            </h1>
            {!subtitle ? null : (
              <div
                style={{
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontFamily: "Inter",
                  fontSize: "40px",
                  opacity: 0.8,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>
          {!!img && (
            <img
              src={img}
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "100%",
              }}
            />
          )}
          {!!meta.speaker && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={meta.speaker.profilePicture}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "100%",
                }}
              />
              <h1 style={{ fontFamily: "Degular" }}>{meta.speaker.fullName}</h1>
            </div>
          )}
        </div>
      </div>
    ),
    {
      fonts: [
        { name: "Inter", data: await InterFont, style: "normal", weight: 400 },
        {
          name: "Degular",
          data: await DegularFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
