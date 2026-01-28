import clsx from 'clsx';
import styles from './styles.module.css';
import ArrowUpRight from '@icons/ArrowUpRight';
import type { ReactNode } from 'react';
import PortableText from '@components/PortableText';
import Button from '@components/Button';

type Props = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  externalLink?: boolean;
  title?: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  headline?: string;
  bodycopy?: ReactNode;
  image?: string;
  imageAlt?: string;
  bottomSubtitleLeft?: string;
  bottomSubtitleRight?: string;
  bottomSubtitleLine?: boolean;
  buttonText?: string;
  buttonUrl?: string;
};

const Box: React.FC<Props> = ({
  children,
  className,
  href,
  externalLink,
  title,
  subtitleLeft,
  subtitleRight,
  headline,
  bodycopy,
  image,
  imageAlt,
  bottomSubtitleLeft,
  bottomSubtitleRight,
  bottomSubtitleLine,
  buttonText,
  buttonUrl,
}) => {
  const cn = clsx(styles.box, className, {});

  return (
    <div className={cn}>
      <div className="relative flex flex-col z-10">
        <div className="relative">
          {title && (
            <div className="pb-2 border-b border-b-white w-full flex flex-row justify-between items-center">
              <h5 className="text-lg monospace font-normal">{title}</h5>
              {href && <ArrowUpRight />}
            </div>
          )}
          {subtitleLeft && (
            <div className="py-2 monospace border-b border-b-white md:flex md:flex-row md:justify-between">
              <p className="pr-4">{subtitleLeft}</p>
              <p>{subtitleRight}</p>
            </div>
          )}

          {href && (
            <a
              href={href}
              target={externalLink ? '_blank' : '_self'}
              rel={externalLink ? 'noopener noreferrer' : undefined}
              className={`absolute w-full h-full top-0 left-0 z-10`}
            >
              {children}
            </a>
          )}
        </div>

        {headline && (
          <div>
            <h3>{headline}</h3>
          </div>
        )}

        {/* Only render PortableText if bodycopy is an array */}
        {Array.isArray(bodycopy) && bodycopy.length > 0 && (
          <div className="my-2">
            <PortableText value={bodycopy} />
          </div>
        )}
        {/* If bodycopy is a ReactNode, render it directly */}

        {!Array.isArray(bodycopy) && bodycopy && (
          <div className="my-2">{bodycopy}</div>
        )}

        {image && (
          <div className="mt-6 relative w-full h-0 pb-[75%] overflow-hidden">
            <img
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
              src={image}
              alt={imageAlt || 'Image'}
            />
          </div>
        )}

        {bottomSubtitleLeft && (
          <div className="pt-2 mt-4 border-t border-t-nextflow">
            <p className="monospace">{bottomSubtitleLeft}</p>
            {bottomSubtitleRight && (
              <p className="monospace">{bottomSubtitleRight}</p>
            )}
          </div>
        )}

        {buttonText && (
          <div className="border-t border-white">
            <Button className="mt-10 relative" dark href={buttonUrl}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
