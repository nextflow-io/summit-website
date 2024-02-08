const siteTitle = "Nextflow SUMMIT 2024";
import imgDefault from "./share-default.png";
const descDefault = `Join us at the Nextflow SUMMIT 2024 for the latest developments and innovations from the Nextflow world.`;

type Props = {
  description?: string;
  title?: string;
  img?: string;
  author?: string;
};

const SEO: React.FC<Props> = ({ img, author, ...props }) => {
  const shareImg = img || imgDefault.src;
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
