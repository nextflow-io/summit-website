import {getContentClient} from './client'

const posterProjection = `
  posters[]-> {
    name,
    role,
    keynote,
    linkedin,
    github,
    twitter,
    company,
    bio,
    image {
      ...,
      asset-> { url }
    },
    associatedEvents[]-> {
      title,
      "slug": slug.current,
      publishedAt,
      endTime,
      associatedPerson[] { name },
      coauthors,
      associatedCategory,
      mainImage {
        asset-> { url }
      }
    }
  }
`

export async function getAllPosters(draftMode = false) {
  return getContentClient(draftMode).fetch(`*[_type == "bostonPosters"] { ${posterProjection} }`)
}

export async function getAllVirtualPosters(draftMode = false) {
  return getContentClient(draftMode).fetch(`*[_type == "virtualPosters"] { ${posterProjection} }`)
}
