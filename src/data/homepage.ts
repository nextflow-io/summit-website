import { sanityClient } from "sanity:client";

export interface Button {
  buttonText: string;
  buttonUrl?: string;
  buttonLink?: string;
  isExternal?: boolean;
  externalLink?: boolean;
}

export interface Hero {
  headline: string;
  headlineSize?: 'small' | 'medium' | 'large';
  bodycopy: any; 
  button1?: Button;
  button2?: Button;
  image?: string; 
}

export interface ContentBox {
  title?: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  imageAlt?: string;
  bottomSubtitleLeft?: string;
  bottomSubtitleRight?: string;
  href?: string;
  externalLink?: boolean;
  [key: string]: any; 
}

export interface FeatureSection {
  headline?: string;
  boxes?: ContentBox[];
  bodycopy?: any;
  button?: Button;
}

export interface PastEvent {
  title: string;
  year?: number;
  location?: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  href?: string;
}

export interface PastEventsSection {
  headline?: string;
  events?: PastEvent[];
  button?: Button;
}

export interface FAQItem {
  question: string;
  answer: any;
}

export interface PageData {
  _id: string;
  _type: string;
  hero: Hero;
  featureSection?: FeatureSection;
  pastEventsSection?: PastEventsSection;
  faqSection?: FAQItem[];
}

export async function fetchHomepage(): Promise<PageData> {
  const data = await sanityClient.fetch(`*[_type == "homepage"][0]{
    _id,
    _type,
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
    },
    featureSection {
      headline,
      boxes[]{
        title {
          title,
          href {
            url,
            href,
            external
          }
        },
        subtitle {
          subtitleLeft,
          subtitleRight
        },
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        headline,
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
      bodycopy[]{
        ...,
      },
      button {
        buttonText,
        buttonLink,
        externalLink
      }
    },
      nextflowNumbers {
        headline,
        featuredStats {
          featuredStatLeft,
          featuredDescriptionLeft,
          featuredStatRight,
          featuredDescriptionRight,
        },
        statsSection[]{
            statNumber,
            statDescription,
        },
    },
    pastEvents {
      headline,
      boxes[]{
        title {
          title,
          href {
            url,
            href,
            external
          }
        },
        subtitle {
          subtitleLeft,
          subtitleRight
        },
        image {
          asset->{
            _id,
            url
          },
          alt
        },
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
      bodycopy[]{
        ...,
      },
      button {
        buttonText,
        buttonLink,
        externalLink
      }
    },
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
  }`);
  
  return data;
}