import { useState, useEffect, useRef } from 'react';
import Faq from '@components/Faq';
import PortableText from '@components/PortableText';
import { motion, AnimatePresence } from 'framer-motion';
import Pixels from '@modules/Pixels';

type Props = {
  data: any;
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const FaqPage: React.FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pixelsRef = useRef<{ getCanvas: () => HTMLCanvasElement | null }>(null);

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
    <div className="bg-black text-white">
      <section>
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.4, delay: 0.6, ease: 'linear' }}
          className="py-20 md:py-20 relative w-full h-full flex flex-row justify-between items-center container-xl"
        >
          <Pixels
            initialCellSize={18}
            initialSpeed={100}
            initialDensity={0.002}
            colorScheme="green"
          />

          <div className="w-full h-full sm:pr-10 md:mt-10 md:pb-15">
            <div className="pointer-events-none">
              <div className="relative inline-flex">
                <h1
                  className={` mb-4 md:max-w-[800px] z-30 relative h3
                `}
                >
                  {data.hero?.headline}
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:max-w-[550px] relative">
              <div className="z-50 pointer-events-none">
                <PortableText value={data.hero?.bodycopy} />
              </div>
            </div>

            <div className="mt-10 relative z-50">
              {data.faqSection && data.faqSection.length > 0 && (
                <div className="inline-flex flex-col text-xl">
                  {data.faqSection.map((section, index) => (
                    <a
                      className="hover:text-nextflow-600"
                      href={`#${section.faqTitle}`}
                    >
                      <h3 className="h6 mb-2">→ {section.faqTitle}</h3>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
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
                      This year's design is inspired by <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" className="text-nextflow-800">John Conway's Game of Life.</a>
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
        </motion.div>
      </section>

      {data.faqSection && data.faqSection.length > 0 && (
        <>
          {data.faqSection.map((section, index) => (
            <Faq
              key={index}
              title={section.faqTitle}
              data={section.faqs}
              noSticky
              noPixels
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FaqPage;
