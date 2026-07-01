import { useRef, useState } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import {
  categories,
  defaultSelection,
  pickableCategories,
  resolveLayers,
  type Selection,
} from './manifest';
import { composeCard } from './compose';

/** Decorative checkered corner, echoing the arcade "console" motif on the site. */
const Corner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 40 40"
    className={clsx('w-8 h-8 text-nextflow-600', className)}
    aria-hidden="true"
  >
    <g fill="currentColor">
      <rect x="0" y="0" width="10" height="10" />
      <rect x="10" y="10" width="10" height="10" opacity="0.5" />
      <rect x="20" y="20" width="10" height="10" opacity="0.25" />
    </g>
  </svg>
);

const LivePreview: React.FC<{ selection: Selection }> = ({ selection }) => {
  const layers = resolveLayers(selection);
  return (
    <div
      className="relative w-full max-w-[280px] mx-auto bg-nextflow-100"
      style={{ aspectRatio: '300 / 432' }}
    >
      {layers.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      ))}
    </div>
  );
};

const AvatarConsole: React.FC = () => {
  const [selection, setSelection] = useState<Selection>(defaultSelection);
  const [generating, setGenerating] = useState(false);
  const [cardUrl, setCardUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const cycle = (categoryId: string, dir: 1 | -1) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;
    setSelection((prev) => {
      const currentId = prev[categoryId] ?? category.variants[0].id;
      const i = category.variants.findIndex((v) => v.id === currentId);
      const next =
        category.variants[
          (i + dir + category.variants.length) % category.variants.length
        ];
      return { ...prev, [categoryId]: next.id };
    });
    setCardUrl(null);
  };

  const randomize = () => {
    setSelection(() =>
      Object.fromEntries(
        categories.map((c) => {
          const v = c.variants[Math.floor(Math.random() * c.variants.length)];
          return [c.id, v.id];
        })
      )
    );
    setCardUrl(null);
  };

  const generate = async () => {
    setGenerating(true);
    setError(null);
    try {
      const blob = await composeCard(selection);
      if (cardUrl) URL.revokeObjectURL(cardUrl);
      const url = URL.createObjectURL(blob);
      setCardUrl(url);
      requestAnimationFrame(() =>
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      );
    } catch (e) {
      setError('Something went wrong generating your card. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const download = () => {
    if (!cardUrl) return;
    const link = document.createElement('a');
    link.download = 'nextflow-summit-2026-attending.png';
    link.href = cardUrl;
    link.click();
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white container-xl w-full py-20 md:py-28">
        <p className="monospace text-nextflow-600 text-sm mb-4">
          October 13&ndash;14 &middot; Virtual
        </p>
        <h1 className="h1 max-w-[900px]">
          I&rsquo;m Attending
          <br />
          Nextflow Summit
        </h1>
        <p className="text-lg text-gray-400 max-w-[560px] mt-6">
          Build a pixel-style avatar and generate a shareable card to let the
          community know you&rsquo;ll be there. Pick your look, hit generate, and
          download a ready-to-post image &mdash; all in your browser.
        </p>
        <Button arrow href="#console" className="mt-10">
          Build your avatar
        </Button>
      </section>

      {/* Console */}
      <section id="console" className="bg-black text-white container-xl w-full pb-24">
        <div className="relative border border-nextflow-600/60 bg-[#020806]">
          <Corner className="absolute -top-1 -left-1" />
          <Corner className="absolute -top-1 -right-1 rotate-90" />
          <Corner className="absolute -bottom-1 -left-1 -rotate-90" />
          <Corner className="absolute -bottom-1 -right-1 rotate-180" />

          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-nextflow-600/40 px-6 py-3 monospace text-xxs uppercase tracking-widest text-nextflow-600">
            <span>Avatar Builder</span>
            <span className="hidden xs:inline">1UP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 md:p-10">
            {/* Live preview */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full bg-black border border-nextflow-600/20 p-6">
                <LivePreview selection={selection} />
              </div>
              <button
                type="button"
                onClick={randomize}
                className="mt-4 monospace text-xxs uppercase tracking-widest text-nextflow-600 hover:text-nextflow-400 transition-colors"
              >
                &#8635; Randomize
              </button>
            </div>

            {/* Pickers */}
            <div className="flex flex-col gap-4">
              {pickableCategories.map((category) => {
                const currentId =
                  selection[category.id] ?? category.variants[0].id;
                const i = category.variants.findIndex((v) => v.id === currentId);
                const variant = category.variants[i] ?? category.variants[0];
                return (
                  <div key={category.id}>
                    <div className="monospace text-xxs uppercase tracking-widest text-gray-600 mb-1">
                      {category.label}
                    </div>
                    <div className="flex items-center justify-between border border-nextflow-600/30 bg-black">
                      <button
                        type="button"
                        aria-label={`Previous ${category.label}`}
                        onClick={() => cycle(category.id, -1)}
                        className="px-4 py-3 text-nextflow-600 hover:bg-nextflow-600 hover:text-black transition-colors"
                      >
                        &#9664;
                      </button>
                      <span className="monospace text-sm text-white text-center flex-1">
                        {variant.label}
                        <span className="text-gray-700 ml-2 text-xxs">
                          {i + 1}/{category.variants.length}
                        </span>
                      </span>
                      <button
                        type="button"
                        aria-label={`Next ${category.label}`}
                        onClick={() => cycle(category.id, 1)}
                        className="px-4 py-3 text-nextflow-600 hover:bg-nextflow-600 hover:text-black transition-colors"
                      >
                        &#9654;
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="mt-4">
                <Button arrow onClick={generate} className="w-full">
                  {generating ? 'Generating…' : 'Generate my asset'}
                </Button>
                {error && (
                  <p className="text-fusion-600 monospace text-xs mt-3">{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        {cardUrl && (
          <div ref={resultRef} className="mt-16 scroll-mt-24">
            <h2 className="h3 mb-6">Your card is ready</h2>
            <div className="border border-nextflow-600/40">
              <img
                src={cardUrl}
                alt="Your I'm Attending Nextflow Summit card"
                className="w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button arrow onClick={download}>
                Download my asset
              </Button>
              <Button light arrow onClick={generate}>
                Regenerate
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Share it with <span className="monospace text-nextflow-600">#NextflowSummit</span>
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default AvatarConsole;
