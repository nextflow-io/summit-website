// hero
export const heroFragment = `
  hero {
    headline,
    headlineSize,
    bodycopy[]{
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
    },
    button1 {
      buttonText,
      buttonUrl,
      isExternal
    },
    button2 {
      buttonText,
      buttonUrl,
      isExternal
    },
    "image": image.asset->url
  }
`;

// single featured section
export const singleFeaturedSectionFragment = `
  pastEvents {
    headline,
    boxes[]{
      title {
        title,
        href {
          isExternal,
          internalLink,
          externalUrl
        }
      },
      subtitle {
        subtitleLeft,
        subtitleRight
      },
      image {
        ...,
        image {
          asset->{
            _id,
            url
          }
        },
        imageAlt,
        alt
      },
      imageCover,
      headline,
      bodycopy[]{...},
      lowerSubtitle {
        lowerSubtitleLeft,
        lowerSubtitleRight
      },
      cta {
        buttonText,
        buttonLink,
        buttonUrl,
        externalLink
      }
    },
    bodycopy[]{...},
    button {
      buttonText,
      buttonLink,
      externalLink
    }
  }
`;

// featured sections as an array
export const featureSectionsArrayFragment = `
  featureSection[]{
    headline,
    bodycopy[]{
    ...,
    },
    boxes[]{
      title {
        title,
        href {
          isExternal,
          internalLink,
          externalUrl
        }
      },
      subtitle {
        subtitleLeft,
        subtitleRight
      },
      image {
        ...,
        image {
          asset->{
            _id,
            url
          }
        },
        imageAlt,
        alt
      },
      imageCover,
      headline,
      bodycopy[]{
        ...,
      },
      lowerSubtitle {
        lowerSubtitleLeft,
        lowerSubtitleRight
      },
      cta {
        buttonText,
        buttonLink,
        buttonUrl,
        externalLink
      }
    },
    bodycopy[]{...},
    button {
      buttonText,
      buttonLink,
      externalLink
    }
  }
`;

// nextflow numbers
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

// key dates
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

// faq module
export const faqSectionFragment = `
  faqSection[]{
    question,
    answer[]{
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
      }
    }
  }
`;

// Add FAQ page query builder
export const buildFaqPageQuery = () => `
  *[_type == "faqPage"][0]{
    _id,
    _type,
    ${heroFragment},
    ${faqPageSectionFragment}
  }
`;

// Base query builder, used on common page
export const buildPageQuery = (contentType: string) => `
  *[_type == "${contentType}"][0]{
    _id,
    _type,
    ${heroFragment},
    ${featureSectionsArrayFragment},
    ${faqSectionFragment}
  }
`;

// Homepage-specific query
export const buildHomepageQuery = () => `
  *[_type == "homepage"][0]{
    _id,
    _type,
    ${heroFragment},
    ${featureSectionsArrayFragment},
    ${nextflowNumbersFragment},
    ${keyDatesSectionFragment},
    ${singleFeaturedSectionFragment},
    ${faqSectionFragment}
  }
`;
