import {getContentClient} from './client'
import {
  buildPageQuery,
  buildHomepageQuery,
  buildFaqPageQuery,
  buildBostonGalleryQuery,
  buildBcnGalleryQuery,
} from './queries'
import type {PageData, HomepageData, FAQPageData} from './types'

async function fetchPage(contentType: string, draftMode = false): Promise<PageData> {
  const query = buildPageQuery(contentType)
  return getContentClient(draftMode).fetch(query)
}

export async function fetchHomepage(draftMode = false): Promise<HomepageData> {
  const query = buildHomepageQuery()
  return getContentClient(draftMode).fetch(query)
}

export async function fetchFaq(draftMode = false): Promise<FAQPageData> {
  const query = buildFaqPageQuery()
  return getContentClient(draftMode).fetch(query)
}

export async function fetchCFA(draftMode = false): Promise<PageData> {
  return fetchPage('cfa', draftMode)
}

export async function fetchWhyAttend(draftMode = false): Promise<PageData> {
  return fetchPage('whyAttend', draftMode)
}

export async function fetchPastEvents(draftMode = false): Promise<PageData> {
  return fetchPage('pastEvents', draftMode)
}

export async function fetchFAQ(draftMode = false): Promise<PageData> {
  return fetchPage('faqPage', draftMode)
}

export async function fetchBostonOverview(draftMode = false): Promise<PageData> {
  return fetchPage('bostonOverview', draftMode)
}

export async function fetchBostonTravel(draftMode = false): Promise<PageData> {
  return fetchPage('bostonTravel', draftMode)
}

export async function fetchBostonGallery(draftMode = false): Promise<PageData> {
  const query = buildBostonGalleryQuery()
  return getContentClient(draftMode).fetch(query)
}

export async function fetchBostonHackathon(draftMode = false): Promise<PageData> {
  return fetchPage('bostonHackathon', draftMode)
}

export async function fetchBostonTraining(draftMode = false): Promise<PageData> {
  return fetchPage('bostonTraining', draftMode)
}

export async function fetchBostonRegister(draftMode = false): Promise<PageData> {
  return fetchPage('bostonRegister', draftMode)
}

export async function fetchBcnRegister(draftMode = false): Promise<PageData> {
  return fetchPage('bcnRegister', draftMode)
}

export async function fetchBcnGallery(draftMode = false): Promise<PageData> {
  const query = buildBcnGalleryQuery()
  return getContentClient(draftMode).fetch(query)
}

export async function fetchBcnTravel(draftMode = false): Promise<PageData> {
  return fetchPage('bcnTravel', draftMode)
}

export async function fetchBcnHackathon(draftMode = false): Promise<PageData> {
  return fetchPage('bcnHackathon', draftMode)
}

export async function fetchBcnTraining(draftMode = false): Promise<PageData> {
  return fetchPage('bcnTraining', draftMode)
}

export async function fetchVirtualRegister(draftMode = false): Promise<PageData> {
  return fetchPage('virtualRegister', draftMode)
}

export async function fetchVirtualOverview(draftMode = false): Promise<PageData> {
  return fetchPage('virtualOverview', draftMode)
}
