import { html } from "satori-html";
import satori, { init as initSatori } from "satori/wasm";
import type { APIRoute } from "astro";
import sharp from "sharp";
import initYoga from "yoga-wasm-web/asm";
import speakers from "@data/speakers";

const YOGA = initYoga();
initSatori(YOGA);

export const GET: APIRoute = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const params = Object.fromEntries(searchParams);
  const defaultTitle =
    "Join us for the latest developments and innovations from the Nextflow world.";

  let title = params.title || defaultTitle;
  let subtitle = params.subtitle || "";
  let img;

  let speaker;
  if (params.speaker) speaker = speakers.find((s) => s.slug === params.speaker);

  if (speaker) {
    title = speaker.fullName;
    subtitle = speaker.tagLine;
    img = speaker.profilePicture;
  }

  const html_string = `
    <div class="container"
        style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 32px;

        color: #F8F9FA;
        background-color: #212528;
        background-image: url('http://localhost:4321/share/card-bg_boston2.png');">
            <div style="display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            padding-right: 26rem;
            padding-left: 2rem;
            padding-top: 2rem;
            padding-bottom: 0.5rem;">
                <div style="display: flex;flex-direction: column;">
                    <h1 style="margin-bottom: 1rem;
                        font-size: 64px;
                        font-weight: 700;"
                        font-family: 'mavenpro';">
                        ${title}
                    </h1>
                    ${
                      !subtitle
                        ? ""
                        : `<div style="font-weight: 400;font-family: 'inter'; text-wrap: balance;">${subtitle}</div>`
                    }
                </div>
            </div>
    </div>`;

  const imageOptions = {
    site: request.url,
    width: 1200,
    height: 630,
    debug: false,
  };
  const jsx = html(html_string);
  const buffer = await generateImage(jsx, imageOptions);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "max-age=31536000, immutable",
    },
  });
};

type ImageOptions = {
  site: string;
  width: number;
  height: number;
  debug?: boolean;
};

async function generateImage(jsx: any, { width, height, debug }: ImageOptions) {
  const mavenpro = await fetch(
    "https://fonts.gstatic.com/s/mavenpro/v32/7Auup_AqnyWWAxW2Wk3swUz56MS91Eww8cLx1nejpBh8CvRBOA.woff",
  ).then((res) => res.arrayBuffer());
  const inter = await fetch(
    `https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff`,
  ).then((res) => res.arrayBuffer());
  const svg = await satori(jsx, {
    debug: debug,
    width: width,
    height: height,
    fonts: [
      {
        name: "mavenpro",
        data: mavenpro,
        weight: 700,
        style: "normal",
      },
      {
        name: "inter",
        data: inter,
        weight: 400,
        style: "normal",
      },
    ],
  });

  return await sharp(Buffer.from(svg)).png().toBuffer();
}

export const prerender = false;
