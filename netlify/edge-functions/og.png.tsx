import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";
import speakersBoston from "https://summit.nextflow.io/2024/boston/speakers.json" assert { type: "json" };
import speakersBcn from "https://summit.nextflow.io/2024/barcelona/speakers.json" assert { type: "json" };

const baseUrl = "https://summit.nextflow.io/";
// netlify dev
// const baseUrl = "http://localhost:8888/";

const InterFont = fetch(
  `${baseUrl}/fonts/Inter-Regular.ttf`,
).then((res) => res.arrayBuffer());

const DegularFont = fetch(
  `${baseUrl}/fonts/Degular-Bold.ttf`,
).then((res) => res.arrayBuffer());

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const speakers = {
    boston: speakersBoston,
    barcelona: speakersBcn,
  };

  let eventLocation = "boston";
  if (params.get("location") === "barcelona") eventLocation = "barcelona";
  const bgImg = `${baseUrl}/share/card-bg_${eventLocation}.png`;

  const defaultTitle =
    "Join us for the latest developments and innovations from the Nextflow world.";

  let img;
  let speaker;
  let title = params.get("title") || defaultTitle;
  let subtitle = params.get("subtitle") || "";
  let abovetitle = params.get("abovetitle") || "";
  const speakerSlug = params.get("speaker");
  if (speakerSlug)
    speaker = speakers[eventLocation]?.find((s) => s.slug === speakerSlug);

  if (speaker && !params.get("title")) {
    title = speaker.fullName;
    subtitle = speaker.tagLine;
    img = speaker.profilePicture;
  }

  const meta: any = {};
  if (speaker && params.get("title")) {
    meta.speaker = speaker;
    img = speaker.profilePicture;
  }

  let titleSize = 64;
  let titleLineHeight = 60;
  if (title.length > 50){
    titleSize = 54;
    titleLineHeight = 45;
  }
  if (title.length > 70){
    titleSize = 48;
    titleLineHeight = 40;
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
            padding: "5rem 5rem 5rem 3.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "40rem",
              width: "100%",
              paddingRight: "2rem",
            }}
          >
            {!abovetitle ? null : (
              <div
                style={{
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontFamily: "Degular",
                  fontSize: "26px",
                  color: "#4E95FF",
                  marginBottom: "0.5rem",
                }}
              >
                {abovetitle}
              </div>
            )}
            <h1
              style={{
                marginTop: "0",
                marginBottom: "0",
                fontSize: `${titleSize}px`,
                fontWeight: 400,
                fontFamily: "Degular",
                lineHeight: `${titleLineHeight}px`,
              }}
            >
              {title}
            </h1>

            {!!meta.speaker?.fullName && (
              <h1 style={{
                fontFamily: "Degular",
                marginTop: "1.5rem",
                marginBottom: 0,
               }}>
                with {meta.speaker.fullName}
              </h1>
            )}
            {!!meta.speaker?.tagLine && (
              <div
                  style={{
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    width: "100%",
                  }}
                  >
                    {meta.speaker.tagLine}
                </div>
            )}

            {!subtitle ? null : (
              <div
                style={{
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontFamily: "Inter",
                  fontSize: "40px",
                  opacity: 0.8,
                  marginTop: "1.5rem",
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
                width: "450px",
                height: "450px",
                borderRadius: "100%",
                filter: "grayscale(100%)",
              }}
            />
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
