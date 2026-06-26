import { useState, useEffect, useRef } from 'react';
import Button from '@components/Button';
import styles from './styles.module.css';
import clsx from 'clsx';
import SeqeraLogo from '@icons/SeqeraLogo';
import Link from './Link';
import { motion, AnimatePresence } from 'framer-motion';
import PortableText from '@components/PortableText';
import Pixels from '@modules/Pixels';
import shareOverlay from '@images/pixel-share-overlay.svg';
import SeqeraLogoDarkmode from '@icons/seqera-logo-darkmode.svg';

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
  isHome?: boolean;
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

// Right-facing pacman in a 0–20 viewBox (circle centred at 10,10, radius 10 so
// it touches the box edges). The mouth is the wedge cut out on the right; the
// open/closed pair is morphed by the SMIL <animate> below to make it chomp.
const PAC_MOUTH_OPEN = 'M10 10 L2.12 3.84 A10 10 0 1 1 2.12 16.16 Z';
const PAC_MOUTH_CLOSED = 'M10 10 L0.02 9.3 A10 10 0 1 1 0.02 10.7 Z';

// Smallest signed rotation (degrees) from `current` to `target`, so the icon
// always turns the short way (e.g. left → down is 90°, never 270°).
const shortestAngleDelta = (target: number, current: number) =>
  ((((target - current) % 360) + 540) % 360) - 180;

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
  isHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pacmanMode, setPacmanMode] = useState(false);
  const pixelsRef = useRef<{ getCanvas: () => HTMLCanvasElement | null }>(null);

  // Pacman launch icon faces the cursor, snapped to the nearest 90°
  const pacBtnRef = useRef<HTMLButtonElement>(null);
  const [pacDir, setPacDir] = useState(0);

  const [hashtagCopied, setHashtagCopied] = useState(false);

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

  // Point the pacman launch icon's mouth towards the cursor, in 90° jumps.
  // Throttled to one update per frame since this listens on the whole window.
  useEffect(() => {
    if (pacmanMode) return;
    let queued = false;
    let last = { x: 0, y: 0 };
    const update = () => {
      queued = false;
      const btn = pacBtnRef.current;
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const dx = last.x - (r.left + r.width / 2);
      const dy = last.y - (r.top + r.height / 2);
      // atan2 yields [-180,180]; +180 maps it to [0,360] for the snap below.
      const deg = (Math.atan2(dy, dx) * 180) / Math.PI + 180;
      const target = ((Math.round(deg / 90) * 90) % 360 + 360) % 360;
      // pacDir is a continuous accumulator: adding the shortest delta keeps the
      // CSS rotation turning the short way (returning prev unchanged when the
      // direction holds, so React skips the re-render).
      setPacDir((prev) => prev + shortestAngleDelta(target, ((prev % 360) + 360) % 360));
    };
    const handleMove = (e: MouseEvent) => {
      last = { x: e.clientX, y: e.clientY };
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [pacmanMode]);

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

    const sourceWidth = canvas.width;
    const sourceHeight = canvas.height;

    // Target 1.91:1 aspect ratio for social sharing
    let targetWidth = sourceWidth;
    let targetHeight = Math.round(sourceWidth / 1.91);

    // If source is already wider than 1.91:1, pad sides instead
    if (targetHeight < sourceHeight) {
      targetHeight = sourceHeight;
      targetWidth = Math.round(sourceHeight * 1.91);
    }

    // Artwork position: bottom-aligned, horizontally centered
    const xOffset = Math.round((targetWidth - sourceWidth) / 2);
    const yOffset = targetHeight - sourceHeight;

    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = targetWidth;
    downloadCanvas.height = targetHeight;
    const ctx = downloadCanvas.getContext('2d');
    if (!ctx) return;

    // Fill with black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    // Draw pixel art (bottom-aligned, horizontally centered)
    ctx.drawImage(canvas, xOffset, yOffset);

    // Load and draw the share overlay, then export
    const overlay = new Image();
    overlay.onload = () => {
      ctx.drawImage(overlay, 0, 0, targetWidth, targetHeight);

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
    overlay.src = shareOverlay.src;
  };

  return (
    <section
      className={`bg-black  text-white py-20 md:py-20 relative w-full  flex flex-row justify-between items-center container-xl
        ${isHome ? 'min-h-[95vh]' : 'h-full'}`}
    >
      <Pixels
        ref={pixelsRef}
        initialCellSize={18}
        initialSpeed={100}
        initialDensity={0.002}
        colorScheme="green"
        pacmanMode={pacmanMode}
      />

      <div className={clsx(styles.landingHero, 'w-full h-full relative')}>
        <div className="flex flex-col-reverse sm:flex-row h-full items-center relative">
          {/* Left Column */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.3, ease: 'linear' }}
            className="w-full h-full sm:pr-10 md:mt-10 md:pb-15"
          >
            <div className="flex flex-col">
              <h1
                className={`w-full md:max-w-[800px] relative
                  ${!headlineSize && 'h3'}
                  ${headlineSize === 'xl' ? 'h1' : ''} 
                  ${headlineSize === 'large' ? 'h2' : ''} 
                  ${headlineSize === 'medium' ? 'h3' : ''} 
                  ${headlineSize === 'small' ? 'h4' : ''} 
                `}
              >
                <span
                  className="bg-black box-decoration-clone w-fit relative z-30"
                  style={{
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone',
                  }}
                >
                  {title}
                </span>
              </h1>
              <div
                className={`md:mt-1.5 ${isHome ? 'inline-flex flex-row' : 'hidden'} w-fit items-center py-2 mb-6 z-30 bg-black box-decoration-clone`}
              >
                by{' '}
                <img
                  className=" ml-3 w-full max-w-[90px] md:max-w-[140px] inline"
                  src={SeqeraLogoDarkmode.src}
                />
              </div>
            </div>
            <h1 className="h1 my-4 sm:max-w-[500px]  ">{subtitle}</h1>

            <div className="flex flex-col sm:max-w-[550px] relative">
              <div className={clsx('z-50 pointer-events-auto bg-black')}>
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
          </motion.div>

          {/* Right Column */}
          {image && (
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.3, delay: 0.3, ease: 'linear' }}
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
      </div>

      {/* Pacman Button */}
      <button
        ref={pacBtnRef}
        onClick={() => setPacmanMode((v) => !v)}
        className={`z-50 cursor-pointer absolute top-4 right-8 w-[18px] h-[18px] flex justify-center items-center transition-colors monospace text-[10px] leading-none ${
          pacmanMode
            ? 'bg-nextflow-600 text-black hover:bg-nextflow-800'
            : 'text-nextflow-600'
        }`}
        aria-label={pacmanMode ? 'Exit Pacman' : 'Play Pacman'}
        title={pacmanMode ? 'Exit Pacman (Esc)' : 'Play Pacman'}
      >
        {pacmanMode ? (
          'x'
        ) : (
          <svg
            viewBox="0 0 20 20"
            width="18"
            height="18"
            aria-hidden="true"
            focusable="false"
            style={{
              transform: `rotate(${pacDir}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <path fill="#0DC09D">
              <animate
                attributeName="d"
                dur="0.4s"
                repeatCount="indefinite"
                values={`${PAC_MOUTH_OPEN};${PAC_MOUTH_CLOSED};${PAC_MOUTH_OPEN}`}
              />
            </path>
          </svg>
        )}
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
                <p className="text-[.8rem]">
                  This year's design is inspired by{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    target="_blank"
                    className="text-nextflow-800"
                  >
                    John Conway's Game of Life.
                  </a>
                  <br />
                  <br /> Share your pixel art.{' '}
                  <span
                    className="text-nextflow-800 monospace text-[.825rem] cursor-pointer hover:underline inline-flex items-center gap-1"
                    onClick={() => {
                      navigator.clipboard.writeText('#NextflowSummit');
                      setHashtagCopied(true);
                      setTimeout(() => setHashtagCopied(false), 2000);
                    }}
                  >
                    {hashtagCopied ? 'Hashtag copied!' : '#NextflowSummit'}
                    {hashtagCopied ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </span>
                </p>

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
    </section>
  );
};

export default LandingHero;
