import { useState, useEffect, useRef } from 'react';
import Button from '@components/Button';
import styles from './styles.module.css';
import clsx from 'clsx';
import SeqeraLogo from '@icons/SeqeraLogo';
import Link from './Link';
import { motion, AnimatePresence } from 'framer-motion';
import PortableText from '@components/PortableText';
import Pixels from '@modules/Pixels';

interface HeroProps {
  title?: string;
  subtitle?: string;
  content: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaExternal1?: boolean;
  ctaText2?: string;
  ctaLink2?: string;
  ctaExternal2?: boolean;
  namespace?: string;
  headlineSize?: 'small' | 'medium' | 'large' | 'xl';
  image?: any;
  imageAlt?: string;
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const fadeInUp = {
  initial: { opacity: 0, y: 5 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const LandingHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  content,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  ctaExternal1,
  ctaExternal2,
  headlineSize = 'medium',
  image,
  imageAlt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pacmanMode, setPacmanMode] = useState(false);
  const pixelsRef = useRef<{ getCanvas: () => HTMLCanvasElement | null }>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Exit pacman mode on Escape key
  useEffect(() => {
    if (!pacmanMode) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPacmanMode(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [pacmanMode]);

  const handleDownload = () => {
    const canvas = pixelsRef.current?.getCanvas();
    if (!canvas) return;

    // Create a new canvas with black background
    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = canvas.width;
    downloadCanvas.height = canvas.height;
    const ctx = downloadCanvas.getContext('2d');

    if (!ctx) return;

    // Fill with black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

    // Draw the original canvas on top
    ctx.drawImage(canvas, 0, 0);

    // Download
    downloadCanvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `nextflow-summit-2026-${Date.now()}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.4, delay: 0.6, ease: 'linear' }}
      className="py-20 md:py-20 relative w-full h-full flex flex-row justify-between items-center container-xl"
    >
      <Pixels
        ref={pixelsRef}
        initialCellSize={18}
        initialSpeed={100}
        initialDensity={0.002}
        colorScheme="green"
        pacmanMode={pacmanMode}
      />

      <section className={clsx(styles.landingHero, 'h-full relative w-full')}>
        <div className="flex flex-col-reverse sm:flex-row h-full items-center relative">
          {/* Left Column */}
          <div className="w-full h-full sm:pr-10 md:mt-10 md:pb-15">
            <div className="pointer-events-none">
              <div className="relative inline-flex">
                <h1
                  className={` mb-4 md:max-w-[800px]   z-30 relative
                  ${!headlineSize && 'h3'}
                  ${headlineSize === 'xl' ? 'h1' : ''} 
                  ${headlineSize === 'large' ? 'h2' : ''} 
                  ${headlineSize === 'medium' ? 'h3' : ''} 
                  ${headlineSize === 'small' ? 'h4' : ''} 
                `}
                >
                  {title}
                </h1>
              </div>
              <h1 className="h1 mb-4 sm:max-w-[500px]  ">{subtitle}</h1>
            </div>

            <div className="flex flex-col sm:max-w-[550px] relative">
              <div className="z-50 pointer-events-none">
                <PortableText value={content} />
              </div>

              <div className="inline-flex flex-col sm:flex-row sm:items-center">
                {ctaText1 && (
                  <Button
                    arrow
                    className="mt-10 z-50 relative"
                    href={ctaLink1}
                    target={ctaExternal1 ? '_blank' : '_self'}
                  >
                    {ctaText1}
                  </Button>
                )}

                {ctaText2 && (
                  <Button
                    light
                    arrow
                    className="sm:ml-4 mt-3 sm:mt-10 z-50 relative"
                    href={ctaLink2}
                    target={ctaExternal2 ? '_blank' : '_self'}
                  >
                    {ctaText2}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          {image && (
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.3, delay: 0.5, ease: 'linear' }}
              className="h-full flex flex-col w-full "
            >
              <div>
                <div
                  className={`mb-6 md:mb-0 relative w-full h-0 overflow-hidden pb-[100%] `}
                >
                  <img
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
                    src={image}
                    alt={imageAlt || 'Image'}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pacman Button */}
      <button
        onClick={() => setPacmanMode((v) => !v)}
        className={`z-50 cursor-pointer absolute top-4 right-8 w-[18px] h-[18px] flex justify-center items-center transition-colors monospace text-[10px] leading-none ${
          pacmanMode
            ? 'bg-nextflow-600 text-black hover:bg-nextflow-800'
            : 'bg-gray-100 text-black hover:bg-gray-300'
        }`}
        aria-label={pacmanMode ? 'Exit Pacman' : 'Play Pacman'}
        title={pacmanMode ? 'Exit Pacman (Esc)' : 'Play Pacman'}
      >
        {pacmanMode ? 'x' : '\u25CF'}
      </button>

      {/* Help Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="z-50 cursor-pointer absolute bottom-4 right-4 bg-gray-100 text-black w-[18px] h-[18px] flex justify-center items-center  hover:bg-gray-300 transition-colors "
        aria-label="Help"
      >
        ?
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 z-[100] "
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-6 right-6 z-[100] bg-white shadow-xl max-w-[300px] w-full mx-4 text-black"
            >
              <div className="p-4">
                <div className="text-black">
                  <p className="text-[.8rem]">
                    Share your pixel art.{' '}
                    <span className="text-nextflow-800">
                      #NextflowSummit2026
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex justify-start gap-2">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-1 bg-nextflow-600 monospace uppercase text-xs text-black hover:bg-nextflow-800 transition-colors"
                  >
                    Download Artwork
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-1 bg-gray-200 monospace uppercase text-xs text-black hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LandingHero;
