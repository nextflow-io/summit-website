import { urlFor } from '@data/sanity-image';
import { getButtonUrl, getHrefUrl } from './linkFormatter';

export const transformFeatureBox = (box: any) => {
  const link = box?.title?.href;
  const href = getHrefUrl(link);
  const buttonUrl = getButtonUrl(box?.cta);

  return {
    title: box?.title?.title,
    href: href || null,
    externalLink: link?.isExternal || false,
    subtitleLeft: box?.subtitle?.subtitleLeft,
    subtitleRight: box?.subtitle?.subtitleRight,
    image: box?.image?.image ? urlFor(box.image.image).url() : null,
    imageAlt: box?.image?.imageAlt || box?.image?.alt,
    imageCover: box?.imageCover,
    bottomSubtitleLeft: box?.lowerSubtitle?.lowerSubtitleLeft,
    bottomSubtitleRight: box?.lowerSubtitle?.lowerSubtitleRight,
    headline: box?.headline,
    bodycopy: box?.bodycopy,
    buttonText: box?.cta?.buttonText,
    buttonUrl: buttonUrl || null,
    tags: box?.tags
  };
};