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
  bodycopy?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageCover?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  tags?: string[];
  boxStyle?: string;
};

const Box: React.FC<Props> = ({
  children,
  className,
  href,
  externalLink,
  title,
  bodycopy,
  image,
  imageAlt,
  buttonText,
  buttonUrl,
  imageCover,
  tags,
  boxStyle,
}) => {
  const cn = clsx(styles.box, className, {});

  return (
    <div
      className={`
      ${boxStyle === 'green' || !boxStyle ? 'bg-nextflow-500 text-black border border-nextflow-400' : ''}
      ${boxStyle === 'lightGreen' ? 'bg-nextflow-200 text-black border border-nextflow-200' : ''}
      ${boxStyle === 'outline' ? 'bg-white text-black border border-black' : ''}
      ${cn} ${imageCover ? '' : 'px-4 pb-4 md:px-6 md:pb-6'}
      
      `}
    >
      <div className="relative flex flex-col justify-between h-full z-10">
        <div className="relative">
          {tags && tags.length > 0 && (
            <div className="pt-4 md:pt-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tagItem, index) => (
                  <div
                    key={index}
                    className={`uppercase monospace px-3 py-[3px] text-[.65rem] tracking-wider inline-flex justify-center items-center
                       bg-[#000] text-white
                      `}
                  >
                    {tagItem}
                  </div>
                ))}
              </div>
            </div>
          )}
          {title && (
            <div
              className={` pt-4 pb-2 w-full flex flex-row justify-between items-center]`}
            >
              <h5 className="text-[2.25rem] font-display leading-none">{title}</h5>
              {href && (
                <div className="mt-2">
                  <ArrowUpRight />
                </div>
              )}
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
        <div
          className={`${imageCover ? '' : 'mt-2'} h-full flex flex-col justify-between`}
        >
          {Array.isArray(bodycopy) && bodycopy.length > 0 && (
            <div className="my-2">
              <PortableText value={bodycopy} variant="box" />
            </div>
          )}
          {image && (
            <div
              className={`relative ${imageCover ? 'min-h-[320px]  w-full h-full' : ''} `}
            >
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

        {buttonText && (
          <div className={` w-full ${image ? '' : ''}`}>
            <Button
              className="mt-6 relative w-full"
              light={boxStyle !== 'outline'}
              dark={boxStyle === 'outline'}
              arrow
              href={buttonUrl}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
