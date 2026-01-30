// Reusable sub-fragments
const portableTextFragment = `
  ...,
  _type,
  style,
  children[]{
    ...,
    _type,
    text,
    marks
  },
  markDefs[]{
    ...,
    _type
  }
`;

const linkFragment = `
  isExternal,
  internalLink,
  externalUrl
`;

const imageObjectFragment = `
  ...,
  image {
    asset->{
      _id,
      url
    }
  },
  imageAlt,
  alt
`;

const buttonFragment = `
  buttonText,
  buttonUrl {
    ${linkFragment}
  }
`;

const contentBoxFragment = `
  title {
    title,
    href {
      ${linkFragment}
    }
  },
  boxStyle,
  tags[],
  image {
    ${imageObjectFragment}
  },
  imageCover,
  bodycopy[]{
    ${portableTextFragment}
  },
  cta {
    ${buttonFragment}
  }
`;

const featureSectionBaseFragment = `
  bgStyle,
  headline,
  bodycopy[]{
    ${portableTextFragment}
  },
  boxes[]{
    ${contentBoxFragment}
  },
  button {
    ${buttonFragment}
  }
`;

// Hero fragment
export const heroFragment = `
  hero {
    headline,
    headlineSize,
    bodycopy[]{
      ${portableTextFragment}
    },
    button1 {
      ${buttonFragment}
    },
    button2 {
      ${buttonFragment}
    },
    image {
    ${imageObjectFragment}
    },
  }
`;

// Featured sections as an array
export const featureSectionsArrayFragment = `
  featureSection[]{
    ${featureSectionBaseFragment}
  }
`;

// Past events (single featured section)
export const pastEventsFragment = `
  pastEvents {
    ${featureSectionBaseFragment}
  }
`;

// Nextflow numbers
export const nextflowNumbersFragment = `
  nextflowNumbers {
    headline,
    featuredStats {
      featuredStatLeft,
      featuredDescriptionLeft,
      featuredStatRight,
      featuredDescriptionRight
    },
    statsSection[]{
      statNumber,
      statDescription
    }
  }
`;

// Key dates
export const keyDatesSectionFragment = `
  keyDatesSection {
    dates[] {
      date,
      dateInfo[]
    },
    images[] {
      asset->{
        _id,
        url
      }
    }
  }
`;

// FAQ module
export const faqSectionFragment = `
  faqSection[]{
    question,
    answer[]{
      ${portableTextFragment}
    }
  }
`;

// FAQ page
export const faqPageSectionFragment = `
  faqSection[]{
    faqTitle,
    faqs[]{
      question,
      answer[]{
        ${portableTextFragment}
      }
    }
  }
`;

// Query builders
export const buildFaqPageQuery = () => `
  *[_type == "faqPage"][0]{
    _id,
    _type,
    ${heroFragment},
    ${faqPageSectionFragment}
  }
`;

export const buildPageQuery = (contentType: string) => `
  *[_type == "${contentType}"][0]{
    _id,
    _type,
    ${heroFragment},
    ${featureSectionsArrayFragment},
    ${faqSectionFragment},
    swoogoUrl,
  }
`;

export const buildHomepageQuery = () => `
  *[_type == "homepage"][0]{
    _id,
    _type,
    ${heroFragment},
    ${featureSectionsArrayFragment},
    ${nextflowNumbersFragment},
    ${keyDatesSectionFragment},
    ${pastEventsFragment},
    ${faqSectionFragment}
  }
`;
