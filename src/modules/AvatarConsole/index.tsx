import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import {
  categories,
  defaultColors,
  defaultEvent,
  defaultSelection,
  events,
  palette,
  pickableCategories,
  type ColorSelection,
  type Selection,
} from './manifest';
import { composeCard, renderAvatar } from './compose';

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

const LivePreview: React.FC<{ selection: Selection; colors: ColorSelection }> = ({
  selection,
  colors,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      renderAvatar(selection, colors, canvasRef.current).catch(() => {});
    }
  }, [selection, colors]);
  return (
    <div
      className="relative w-full max-w-[280px] mx-auto bg-nextflow-200"
      style={{ aspectRatio: '300 / 432' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-contain p-10"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};

type Mode = 'avatar' | 'photo';

const AvatarConsole: React.FC = () => {
  const [mode, setMode] = useState<Mode>('avatar');
  const [selection, setSelection] = useState<Selection>(defaultSelection);
  const [colors, setColors] = useState<ColorSelection>(defaultColors);
  const [event, setEvent] = useState<string>(defaultEvent);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [cardUrl, setCardUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhoto = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
    setCardUrl(null);
    setError(null);
  };

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

  const setColor = (channelId: string, optionId: string) => {
    setColors((prev) => ({ ...prev, [channelId]: optionId }));
    setCardUrl(null);
  };

  const randomize = () => {
    setSelection(
      Object.fromEntries(
        categories.map((c) => {
          const v = c.variants[Math.floor(Math.random() * c.variants.length)];
          return [c.id, v.id];
        })
      )
    );
    setColors(
      Object.fromEntries(
        palette.map((ch) => {
          const o = ch.options[Math.floor(Math.random() * ch.options.length)];
          return [ch.id, o.id];
        })
      )
    );
    setCardUrl(null);
  };

  const generate = async () => {
    if (mode === 'photo' && !photoUrl) {
      setError('Please upload a photo first.');
      return;
    }
    setGenerating(true);
    setError(null);
    try {
      const blob = await composeCard(
        selection,
        colors,
        event,
        mode === 'photo' ? photoUrl : null
      );
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
          Build a pixel-style avatar &mdash; or upload your own photo &mdash; and
          generate a shareable card to let the community know you&rsquo;ll be there.
          Pick your look, hit generate, and download a ready-to-post image, all in
          your browser.
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
            <span>{mode === 'photo' ? 'Photo Card' : 'Avatar Builder'}</span>
            <span className="hidden xs:inline">1UP</span>
          </div>

          {/* Step: mode */}
          <div className="border-b border-nextflow-600/40 p-6 md:px-10">
            <div className="monospace text-xxs uppercase tracking-widest text-gray-600 mb-2">
              How do you want to appear?
            </div>
            <div className="grid grid-cols-1 xxs:grid-cols-2 gap-2 max-w-[520px]">
              {(
                [
                  { id: 'avatar', label: 'Build an avatar' },
                  { id: 'photo', label: 'Upload a photo' },
                ] as { id: Mode; label: string }[]
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={mode === m.id}
                  onClick={() => {
                    setMode(m.id);
                    setCardUrl(null);
                    setError(null);
                  }}
                  className={clsx(
                    'monospace text-xs px-3 py-3 border transition-colors text-center',
                    mode === m.id
                      ? 'border-nextflow-600 bg-nextflow-600 text-black'
                      : 'border-nextflow-600/30 text-white hover:border-nextflow-600'
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 md:p-10">
            {/* Live preview */}
            <div className="flex flex-col items-center justify-center">
              {mode === 'avatar' ? (
                <>
                  <div className="w-full bg-black border border-nextflow-600/20 p-6">
                    <LivePreview selection={selection} colors={colors} />
                  </div>
                  <button
                    type="button"
                    onClick={randomize}
                    className="mt-4 monospace text-xxs uppercase tracking-widest text-nextflow-600 hover:text-nextflow-400 transition-colors"
                  >
                    &#8635; Randomize
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={clsx(
                      'w-full border overflow-hidden transition-colors',
                      photoUrl
                        ? 'border-nextflow-600/40'
                        : 'border-dashed border-nextflow-600/40 hover:border-nextflow-600'
                    )}
                    style={{ aspectRatio: '400 / 430' }}
                  >
                    {photoUrl ? (
                      <img
                        src={photoUrl}
                        alt="Your uploaded photo"
                        className="w-full h-full object-cover bg-nextflow-200"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center px-6 text-center monospace text-xs text-gray-500">
                        Click to upload a photo
                      </span>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handlePhoto(e.target.files?.[0])}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-4 monospace text-xxs uppercase tracking-widest text-nextflow-600 hover:text-nextflow-400 transition-colors"
                  >
                    {photoUrl ? '↺ Change photo' : '↑ Upload photo'}
                  </button>
                </>
              )}
            </div>

            {/* Pickers */}
            <div className="flex flex-col gap-4">
              {/* Step: what are you attending? */}
              <div>
                <div className="monospace text-xxs uppercase tracking-widest text-gray-600 mb-1">
                  What are you attending?
                </div>
                <div className="grid grid-cols-1 xxs:grid-cols-3 gap-2">
                  {events.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      aria-pressed={event === ev.id}
                      onClick={() => {
                        setEvent(ev.id);
                        setCardUrl(null);
                      }}
                      className={clsx(
                        'monospace text-xs px-3 py-3 border transition-colors text-center',
                        event === ev.id
                          ? 'border-nextflow-600 bg-nextflow-600 text-black'
                          : 'border-nextflow-600/30 text-white hover:border-nextflow-600'
                      )}
                    >
                      {ev.label}
                    </button>
                  ))}
                </div>
              </div>

              {mode === 'photo' && (
                <p className="monospace text-xs text-gray-500 leading-relaxed">
                  Your photo is placed on the right of the card. A square-ish image
                  works best &mdash; it&rsquo;s cropped to fill the panel. Nothing is
                  uploaded to a server; everything stays in your browser.
                </p>
              )}

              {mode === 'avatar' &&
                pickableCategories.map((category) => {
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

              {/* Color swatches */}
              {mode === 'avatar' &&
                palette.map((channel) => {
                const activeId = colors[channel.id] ?? channel.options[0].id;
                return (
                  <div key={channel.id}>
                    <div className="monospace text-xxs uppercase tracking-widest text-gray-600 mb-1">
                      {channel.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {channel.options.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          title={opt.label}
                          aria-label={`${channel.label}: ${opt.label}`}
                          aria-pressed={activeId === opt.id}
                          onClick={() => setColor(channel.id, opt.id)}
                          className={clsx(
                            'w-7 h-7 border-2 transition-transform',
                            activeId === opt.id
                              ? 'border-nextflow-600 scale-110'
                              : 'border-white/20 hover:border-white/50'
                          )}
                          style={{ backgroundColor: opt.color }}
                        />
                      ))}
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
