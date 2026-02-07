import { fetchSettings, type SettingsData } from '../../data/settings'; 

const siteTitle = "Nextflow Summit";
const descDefault = `Join us at Nextflow Summit for the latest developments and innovations from the Nextflow world.`;

type Props = {
  description?: string;
  title?: string;
  img?: number;
  imgUrl?: string;
  author?: string;
  dynamicImage?: {
    title?: string;
    subtitle?: string;
    abovetitle?: string;
    speaker?: string;
    location?: "barcelona" | "virtual" | "boston";
  };
  sanityImage?: "default" | "boston" | "barcelona" | "virtual";
  settings?: SettingsData; // Pass settings from parent component
};

const SEO: React.FC<Props> = ({
  img,
  imgUrl,
  author,
  dynamicImage,
  sanityImage,
  settings,
  ...props
}) => {
  let shareImg: string;

  // Use Sanity image if specified and settings are available
  if (sanityImage && settings) {
    switch (sanityImage) {
      case "boston":
        shareImg = settings.imageBoston?.asset?.url || "";
        break;
      case "barcelona":
        shareImg = settings.imageBarcelona?.asset?.url || "";
        break;
      case "virtual":
        shareImg = settings.imageVirtual?.asset?.url || "";
        break;
      case "default":
      default:
        shareImg = settings.mainImage?.asset?.url || "";
        break;
    }
  } else if (imgUrl) {
    shareImg = imgUrl;
  } else if (settings?.mainImage?.asset?.url) {
    // Fallback to main image from settings
    shareImg = settings.mainImage.asset.url;
  } else {
    // Final fallback
    shareImg = "";
  }

  if (dynamicImage) {
    const url = "https://summit.nextflow.io/og.png";
    let queryString = "";
    for (const key in dynamicImage) {
      if (queryString) queryString += "&";
      queryString += key + "=" + encodeURIComponent(dynamicImage[key]);
    }
    shareImg = `${url}?${queryString}`;
  }

  const description = props.description || descDefault;
  let title = siteTitle;
  if (props.title) title = `${props.title} | ${siteTitle}`;
  
  const tags = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:image`,
      content: shareImg,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      property: `twitter:image`,
      content: shareImg,
    },
  ];
  
  return (
    <>
      <title>{title}</title>
      {tags.map((tag, i) => (
        <meta key={i} {...tag} />
      ))}
    </>
  );
};

export default SEO;