import { sanityClient } from "sanity:client";
import { getDraftClient } from "./draftClient";
import { buildPageQuery, buildHomepageQuery,  buildFaqPageQuery , buildBostonGalleryQuery, buildBcnGalleryQuery} from "./queries";
import type { PageData, HomepageData,  FAQPageData  } from "./types";

// Generic page fetcher
async function fetchPage(contentType: string, draftMode = false): Promise<PageData> {
  const client = draftMode ? getDraftClient() : sanityClient;
  const query = buildPageQuery(contentType);
  return client.fetch(query);
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
export async function fetchBostonOverview(draftMode = false): Promise<PageData> {
  return fetchPage("bostonOverview", draftMode);
}

export async function fetchBostonTravel(draftMode = false): Promise<PageData> {
  return fetchPage("bostonTravel", draftMode);
}

export async function fetchBostonGallery(draftMode = false): Promise<PageData> {
  const client = draftMode ? getDraftClient() : sanityClient;
  const query = buildBostonGalleryQuery();
  return client.fetch(query);
}

export async function fetchBostonHackathon(draftMode = false): Promise<PageData> {
  return fetchPage("bostonHackathon", draftMode);
}

export async function fetchBostonTraining(draftMode = false): Promise<PageData> {
  return fetchPage("bostonTraining", draftMode);
}

export async function fetchBostonRegister(draftMode = false): Promise<PageData> {
  return fetchPage("bostonRegister", draftMode);
}

// bcn pages
export async function fetchBcnRegister(draftMode = false): Promise<PageData> {
  return fetchPage("bcnRegister", draftMode);
}

export async function fetchBcnGallery(draftMode = false): Promise<PageData> {
  const client = draftMode ? getDraftClient() : sanityClient;
  const query = buildBcnGalleryQuery();
  return client.fetch(query);
}
export async function fetchBcnTravel(draftMode = false): Promise<PageData> {
  return fetchPage("bcnTravel", draftMode);
}

export async function fetchBcnHackathon(draftMode = false): Promise<PageData> {
  return fetchPage("bcnHackathon", draftMode);
}

export async function fetchBcnTraining(draftMode = false): Promise<PageData> {
  return fetchPage("bcnTraining", draftMode);
}

// virtual pages
export async function fetchVirtualRegister(draftMode = false): Promise<PageData> {
  return fetchPage("virtualRegister", draftMode);
}
export async function fetchVirtualOverview(draftMode = false): Promise<PageData> {
  return fetchPage("virtualOverview", draftMode);
}

