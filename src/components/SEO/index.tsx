const siteTitle = "Nextflow SUMMIT 2024";
const descDefault = `Join us at the Nextflow SUMMIT 2024 for the latest developments and innovations from the Nextflow world.`;
import imgDefault from "./share-default.jpg";
import imgBoston from "./share-boston.png";
import imgBarcelona from "./share-barcelona.png";
const images = [imgDefault, imgBoston, imgBarcelona];

type Props = {
  description?: string;
  title?: string;
  img?: number;
  imgUrl?: string;
  author?: string;
  bcn?: boolean;
  dynamicImage?: {
    title?: string;
    subtitle?: string;
    abovetitle?: string;
    speaker?: string;
    location?: string;
  };
};

const SEO: React.FC<Props> = ({
  img,
  imgUrl,
  author,
  dynamicImage,
  bcn,
  ...props
}) => {
  let shareImg: string;
  if (img) {
      shareImg = images[img].src;
  } else if (imgUrl) {
      shareImg = imgUrl;
  } else if (bcn) {
      shareImg = imgBarcelona.src;
  } else {
      shareImg = imgDefault.src;
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
  if (bcn) title += " Barcelona";
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
