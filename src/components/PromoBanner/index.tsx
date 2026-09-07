import { motion, useReducedMotion } from 'framer-motion';
import Button from '@components/Button';
import PortableText from '@components/PortableText';
import { urlFor } from '@data/sanity-image';
import { getButtonUrl } from '@utils/linkFormatter';
import type { PromoBanner as PromoBannerType } from '@data/types';

// A GIF served through Sanity's image CDN (urlFor) is flattened to a still frame,
// so animated GIFs must use the raw asset URL. PNG/JPG can go through urlFor.
const isGifUrl = (url?: string): boolean => !!url && /\.gif(\?|$)/i.test(url);

const PromoBanner: React.FC<PromoBannerType> = ({
  hideSection,
  headline,
  bodycopy,
  button,
  image,
}) => {
  const reduceMotion = useReducedMotion();

  const asset = image?.image?.asset;
  const rawUrl = asset?.url;
  const gif = isGifUrl(rawUrl);
  // GIFs render with hard pixel edges and use the raw URL; other assets go through
  // the image CDN and render normally.
  const imageSrc = gif
    ? rawUrl
    : asset?._id
      ? urlFor(asset._id).url()
      : rawUrl;
  const imageAlt = image?.imageAlt || image?.alt || '';

  // No CMS-side copy defaults: render nothing unless there's something to show.
  if (hideSection) return null;
  if (!headline && !imageSrc) return null;

  const ctaText = button?.buttonText;
  const ctaUrl = getButtonUrl(button);

  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.35, ease: 'linear' as const },
      };

  return (
    <section className="w-full bg-nextflow-400 text-black">
      <motion.div
        {...fade}
        className="container-xl py-14 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-14"
      >
        {/* Copy + CTA */}
        <div className="w-full md:flex-1 text-center md:text-left">
          {headline && <h2 className="h3 mb-4">{headline}</h2>}
          {bodycopy && (
            <div className="max-w-[500px] mx-auto md:mx-0 text-[1.05rem] leading-relaxed">
              <PortableText value={bodycopy} />
            </div>
          )}
          {ctaText && ctaUrl && (
            <Button dark className="mt-8" href={ctaUrl}>
              {ctaText}
            </Button>
          )}
        </div>

        {/* Image */}
        {imageSrc && (
          <div className="w-full max-w-[260px] md:max-w-[300px] shrink-0">
            <div className="bg-nextflow-200 p-4">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-auto"
                style={gif ? { imageRendering: 'pixelated' } : undefined}
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PromoBanner;
