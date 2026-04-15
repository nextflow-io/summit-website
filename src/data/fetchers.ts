import { sanityClient } from "sanity:client";
import { buildPageQuery, buildHomepageQuery,  buildFaqPageQuery , buildBostonGalleryQuery, buildBcnGalleryQuery} from "./queries";
import type { PageData, HomepageData,  FAQPageData  } from "./types";

// Generic page fetcher
async function fetchPage(contentType: string): Promise<PageData> {
  const query = buildPageQuery(contentType);
  const data = await sanityClient.fetch(query);
  return data;
}

// Homepage fetcher 
export async function fetchHomepage(): Promise<HomepageData> {
  const query = buildHomepageQuery();
  const data = await sanityClient.fetch(query);
  return data;
}

// FAQ page fetcher 
export async function fetchFaq(): Promise<FAQPageData> {
  const query = buildFaqPageQuery();
  const data = await sanityClient.fetch(query);
  return data;
}

// Specific page fetchers
export async function fetchCFA(): Promise<PageData> {
  return fetchPage("cfa");
}

export async function fetchWhyAttend(): Promise<PageData> {
  return fetchPage("whyAttend");
}

export async function fetchPastEvents(): Promise<PageData> {
  return fetchPage("pastEvents");
}

export async function fetchFAQ(): Promise<PageData> {
  return fetchPage("faqPage");
}

// boston pages
export async function fetchBostonOverview(): Promise<PageData> {
  return fetchPage("bostonOverview");
}

export async function fetchBostonTravel(): Promise<PageData> {
  return fetchPage("bostonTravel");
}

export async function fetchBostonGallery(): Promise<PageData> {
  const query = buildBostonGalleryQuery();
  const data = await sanityClient.fetch(query);
  return data;
}

export async function fetchBostonHackathon(): Promise<PageData> {
  return fetchPage("bostonHackathon");
}

export async function fetchBostonTraining(): Promise<PageData> {
  return fetchPage("bostonTraining");
}

export async function fetchBostonRegister(): Promise<PageData> {
  return fetchPage("bostonRegister");
}

// bcn pages
export async function fetchBcnRegister(): Promise<PageData> {
  return fetchPage("bcnRegister");
}

export async function fetchBcnGallery(): Promise<PageData> {
  const query = buildBostonGalleryQuery();
  const data = await sanityClient.fetch(query);
  return data;
}
export async function fetchBcnTravel(): Promise<PageData> {
  return fetchPage("bcnTravel");
}

export async function fetchBcnHackathon(): Promise<PageData> {
  return fetchPage("bcnHackathon");
}

export async function fetchBcnTraining(): Promise<PageData> {
  return fetchPage("bcnTraining");
}

// virtual pages
export async function fetchVirtualRegister(): Promise<PageData> {
  return fetchPage("virtualRegister");
}
export async function fetchVirtualOverview(): Promise<PageData> {
  return fetchPage("virtualOverview");
}

