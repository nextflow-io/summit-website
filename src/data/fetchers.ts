import { sanityClient } from "sanity:client";
import { buildPageQuery, buildHomepageQuery, buildFaqPageQuery } from "./queries";
import type { PageData, HomepageData, FAQPageData } from "./types";

// Helper to get the right client based on preview mode
function getClient(previewMode: boolean = false) {
  if (previewMode) {
    return sanityClient({ 
      perspective: 'previewDrafts',
      useCdn: false 
    });
  }
  return sanityClient;
}

// Generic page fetcher with preview support
async function fetchPage(contentType: string, previewMode: boolean = false): Promise<PageData> {
  const query = buildPageQuery(contentType);
  const client = getClient(previewMode);
  const data = await client.fetch(query);
  return data;
}

// Homepage fetcher with preview support
export async function fetchHomepage(previewMode: boolean = false): Promise<HomepageData> {
  const query = buildHomepageQuery();
  const client = getClient(previewMode);
  const data = await client.fetch(query);
  return data;
}

// FAQ page fetcher with preview support
export async function fetchFaq(previewMode: boolean = false): Promise<FAQPageData> {
  const query = buildFaqPageQuery();
  const client = getClient(previewMode);
  const data = await client.fetch(query);
  return data;
}

// Specific page fetchers with preview support
export async function fetchCFA(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("cfa", previewMode);
}

export async function fetchBostonOverview(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("bostonOverview", previewMode);
}

export async function fetchBostonTravel(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("bostonTravel", previewMode);
}

export async function fetchWhyAttend(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("whyAttend", previewMode);
}

export async function fetchPastEvents(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("pastEvents", previewMode);
}

export async function fetchBostonHackathon(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("bostonHackathon", previewMode);
}

export async function fetchBostonTraining(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("bostonTraining", previewMode);
}

export async function fetchFAQ(previewMode: boolean = false): Promise<PageData> {
  return fetchPage("faqPage", previewMode);
}