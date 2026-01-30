import { urlFor } from '@data/sanity-image';
import { getButtonUrl, getHrefUrl } from './linkFormatter';

export const transformFeatureBox = (box: any) => {
  const link = box?.title?.href;
  const href = getHrefUrl(link);
  const buttonUrl = getButtonUrl(box?.cta);

  return {
    boxStyle: box?.boxStyle,
    title: box?.title?.title,
    href: href || null,
    externalLink: link?.isExternal || false,
    tags: box?.tags,
    image: box?.image?.image ? urlFor(box.image.image).url() : null,
    imageAlt: box?.image?.imageAlt || box?.image?.alt,
    imageCover: box?.imageCover,
    headline: box?.headline,
    bodycopy: box?.bodycopy,
    buttonText: box?.cta?.buttonText,
    buttonUrl: buttonUrl || null,
  };
};