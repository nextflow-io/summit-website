import { motion, useReducedMotion } from 'framer-motion';
import Button from '@components/Button';
import PortableText from '@components/PortableText';
import { SquarePixel } from '@components/SquarePixel';
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
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.3, ease: 'linear' as const },
      };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Editable pixel-art accents, matching the FAQ section's SquarePixel dots. */}
      <div className="hidden md:block absolute top-6 left-0 z-10">
        <SquarePixel className="absolute top-0 left-0" initialColor="#31C9AC" />
        <SquarePixel className="absolute top-[18px] left-[18px]" />
        <SquarePixel
          className="absolute top-[36px] left-0"
          initialColor="#B6ECE2"
        />
      </div>
      <div className="hidden md:block absolute bottom-6 right-0 z-10">
        <SquarePixel
          className="absolute bottom-0 right-0"
          initialColor="#56D3BA"
        />
        <SquarePixel
          className="absolute bottom-[18px] right-[18px]"
          initialColor="#fff"
        />
        <SquarePixel
          className="absolute bottom-[36px] right-0"
          initialColor="#31C9AC"
        />
      </div>

      <motion.div
        {...fade}
        className="container-xl relative z-20 py-10 md:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        {/* Copy + CTA */}
        <div className="w-full md:w-2/3 text-left">
          {headline && <h2 className="h4 mb-3 text-balance">{headline}</h2>}
          {bodycopy && (
            <div className=" mx-auto md:mx-0 text-[1rem] leading-relaxed  text-white/80">
              <PortableText value={bodycopy} />
            </div>
          )}
          {ctaText && ctaUrl && (
            <Button className="mt-6 w-full sm:w-auto" href={ctaUrl}>
              {ctaText}
            </Button>
          )}
        </div>

        {/* Image — kept in a mint tile so the GIF's transparent areas resolve to
            a solid backdrop on the black banner (and it echoes the pixel dots). */}
        {imageSrc && (
          <div className="w-ful flex justify-center max-w-[250px] md:max-w-none md:w-1/3">
            <div className="bg-nextflow-200 justify-center items-center p-2 max-w-[250px] ">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-auto "
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
