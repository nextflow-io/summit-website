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
  imageCover?: boolean;
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

export interface NextflowNumbers {
  headline?: string;
  featuredStats?: {
    featuredStatLeft: string;
    featuredDescriptionLeft: string;
    featuredStatRight: string;
    featuredDescriptionRight: string;
  };
  statsSection?: Array<{
    statNumber: string;
    statDescription: string;
  }>;
}

export interface KeyDate {
  date: string;
  dateInfo: string[];
}

export interface KeyDatesSection {
  dates: KeyDate[];
  images: Array<{
    asset: {
      _id: string;
      url: string;
    };
  }>;
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

export interface FAQPageData {
  _id: string;
  _type: string;
  hero: Hero;
  featureSection?: FeatureSection[];
  faqSection?: FAQItem[];
  faqTitle: string;
  faqs: FAQItem[];
}

export interface PageData {
  _id: string;
  _type: string;
  hero: Hero;
  featureSection?: FeatureSection[];
  faqSection?: FAQItem[];
  swoogoUrl?: string;
}

export interface HomepageData extends PageData {
  nextflowNumbers?: NextflowNumbers;
  keyDatesSection?: KeyDatesSection;
  pastEvents?: FeatureSection;
}
