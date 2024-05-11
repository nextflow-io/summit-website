const siteTitle = "Nextflow SUMMIT 2024";
const descDefault = `Join us at the Nextflow SUMMIT 2024 for the latest developments and innovations from the Nextflow world.`;
import imgDefault from "./share-default.jpg";
import imgBoston from "./share-boston.png";
const images = [imgDefault, imgBoston];

type Props = {
  description?: string;
  title?: string;
  img?: number;
  imgUrl?: string;
  author?: string;
  dynamicImage?: {
    title?: string;
    subtitle?: string;
    speaker?: string;
    location?: string;
  };
};

const SEO: React.FC<Props> = ({
  img,
  imgUrl,
  author,
  dynamicImage,
  ...props
}) => {
  let shareImg = img ? images[img].src : imgUrl ? imgUrl : imgDefault.src;

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
