import { sanityClient } from "sanity:client";
import { buildPageQuery, buildHomepageQuery,  buildFaqPageQuery } from "./queries";
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

export async function fetchBostonOverview(): Promise<PageData> {
  return fetchPage("bostonOverview");
}

export async function fetchBostonTravel(): Promise<PageData> {
  return fetchPage("bostonTravel");
}

export async function fetchWhyAttend(): Promise<PageData> {
  return fetchPage("whyAttend");
}

export async function fetchPastEvents(): Promise<PageData> {
  return fetchPage("pastEvents");
}

export async function fetchBostonHackathon(): Promise<PageData> {
  return fetchPage("bostonHackathon");
}

export async function fetchBostonTraining(): Promise<PageData> {
  return fetchPage("bostonTraining");
}

export async function fetchFAQ(): Promise<PageData> {
  return fetchPage("faqPage");
}

