// src/lib/sanity.js
import createClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "o2y1bt2g",
  dataset: "summit",
  apiVersion: '2023-01-01',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}