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
  imageCover?: boolean;
  tags?: string[];
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
  imageCover,
  tags,
}) => {
  const cn = clsx(styles.box, className, {});

  return (
    <div className={`${cn} ${imageCover ? '' : 'px-4 pb-4 md:px-6 md:pb-6'}`}>
      <div className="relative flex flex-col justify-between h-full z-10">
        <div className="relative">
          {/* {tag && (
            <div className="uppercase monospace bg-white px-2 text-[.65rem] inline-flex justify-center items-center">{tag}</div>
          )} */}

          {/* Multiple tags display */}
          {tags && tags.length > 0 && (
            <div className="pt-4 md:pt-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tagItem, index) => (
                <div
                  key={index}
                  className="uppercase monospace bg-[#F8F8F8] px-3 py-1 text-[.6rem] inline-flex justify-center items-center"
                >
                  {tagItem}
                </div>
              ))}
            </div>
            </div>
          )}
          {title && (
            <div
              className={` pt-4 pb-2w-full flex flex-row justify-between items-center]`}
            >
              <h5 className="text-[2rem] font-display leading-none">{title}</h5>
              {href && <div className="mt-2"><ArrowUpRight /></div>}
            </div>
          )}
          {/* {subtitleLeft && (
            <div className="py-2 monospace border-b border-b-white md:flex md:flex-row md:justify-between">
              <p className="pr-4">{subtitleLeft}</p>
              <p>{subtitleRight}</p>
            </div>
          )} */}

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
        <div
          className={`${imageCover ? '' : 'mt-2'} h-full flex flex-col justify-between`}
        >
          {/* {headline && (
            <div>
              <h3 className="h6">{headline}</h3>
            </div>
          )} */}

          {/* Only render PortableText if bodycopy is an array */}
          {Array.isArray(bodycopy) && bodycopy.length > 0 && (
            <div className="my-2">
              <PortableText value={bodycopy} variant="box" />
            </div>
          )}
          {/* If bodycopy is a ReactNode, render it directly */}

          {!Array.isArray(bodycopy) && bodycopy && (
            <div className="my-2">{bodycopy}</div>
          )}

          {image && (
            <div className={`relative ${imageCover ? 'min-h-[320px]  w-full h-full' : ''} `}>
            <div
              className={`r ${imageCover ? 'absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover' : 'relative w-full h-0 overflow-hidden pb-[75%] '}`}
            >
              <img
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
                src={image}
                alt={imageAlt || 'Image'}
              />
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
            </div>
          )}
        </div>
{/* 
        {bottomSubtitleLeft && (
          <div className="pt-2 mt-4 border-t border-t-nextflow">
            <p className="monospace">{bottomSubtitleLeft}</p>
            {bottomSubtitleRight && (
              <p className="monospace">{bottomSubtitleRight}</p>
            )}
          </div>
        )} */}

        {buttonText && (
          <div className={` w-full ${image ? '' : ''}`}>
            <Button className="mt-6 relative w-full" light arrow href={buttonUrl}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
