import { sanityClient } from 'sanity:client';

export interface SettingsData {
  _id: string;
  _type: string;
  title?: string;
  description?: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  imageBoston?: {
    asset: {
      url: string;
    };
  };
  imageBarcelona?: {
    asset: {
      url: string;
    };
  };
  imageVirtual?: {
    asset: {
      url: string;
    };
  };
}

export async function fetchSettings(): Promise<SettingsData> {
  const data = await sanityClient.fetch(`*[_type == "settings"][0]{
    _id,
    _type,
    title,
    description,
    mainImage {
      asset-> {
        url
      }
    },
    imageBoston {
      asset-> {
        url
      }
    },
    imageBarcelona {
      asset-> {
        url
      }
    },
    imageVirtual {
      asset-> {
        url
      }
    }
  }`);

  return data;
}