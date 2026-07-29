/**
 * Avatar manifest — single source of truth for the "I'm Attending" avatar builder.
 *
 * Adding a new variant later = drop the PNG in `public/summit-avatar/{category}/`
 * and add one line to the matching `variants` array below. No component changes.
 *
 * Adding a whole new category = add an entry to `categories` with its `z` (stacking
 * order) and variants. The console renders a picker for every category that has at
 * least two selectable options, so seeding a category with only `NONE` keeps it
 * "ready" without cluttering the UI until real assets arrive.
 */

export interface AvatarVariant {
  id: string;
  label: string;
  /** Public path to the layer PNG, or `null` for the empty / "None" option. */
  src: string | null;
}

/**
 * Recolor rule applied to a layer at composite time. Assets are flat-color pixel
 * art (no anti-aliasing), so recoloring is a pixel swap on an offscreen canvas:
 *  - with `match`: replace exactly that source RGB with the chosen palette color
 *    (e.g. base skin = pure white → skin tone; shirt/outlines untouched).
 *  - without `match`: tint every opaque pixel to the chosen color (e.g. all-black
 *    hair / beard layers), preserving alpha.
 */
export interface RecolorRule {
  /** Palette channel id whose selected color is used (e.g. 'skin', 'hair'). */
  channel: string;
  /** Exact source RGB to replace. Omit to tint all opaque pixels. */
  match?: [number, number, number];
}

export interface AvatarCategory {
  id: string;
  label: string;
  /** Stacking order — higher renders on top. */
  z: number;
  /** If true there is no "None" option (the layer is always present). */
  required?: boolean;
  variants: AvatarVariant[];
  /** Optional recoloring applied to every variant of this category. */
  recolor?: RecolorRule[];
}

export interface PaletteOption {
  id: string;
  label: string;
  color: string;
}

export interface PaletteChannel {
  id: string;
  label: string;
  options: PaletteOption[];
}

/** Intrinsic size every layer asset is authored at (keeps compositing trivial). */
export const AVATAR_CANVAS = { width: 300, height: 432 } as const;

/** Final downloadable share card (OG / Twitter / LinkedIn). `padding` is the
 * black margin (px) kept around the branding + avatar content. */
export const EXPORT = { width: 1200, height: 630, padding: 70 } as const;

/** Full-bleed background PNG for the share card (black canvas + decorative pixel
 * corners). Shared across every event; stretched to the card size. */
export const CARD_BACKGROUND = '/summit-avatar/card/bg.png';

/**
 * The event the attendee is announcing. Each option swaps the static branding
 * panel on the left of the final card. Add another event = drop its branding PNG
 * in `public/summit-avatar/card/` and add one entry here.
 */
export interface EventOption {
  id: string;
  label: string;
  /** Branding panel PNG for the left side of the card. */
  branding: string;
}

export const events: EventOption[] = [
  {
    id: 'summit',
    label: 'Nextflow Summit',
    branding: '/summit-avatar/card/branding-summit.png',
  },
  {
    id: 'training',
    label: 'Nextflow Training',
    branding: '/summit-avatar/card/branding-training.png',
  },
  {
    id: 'hackathon',
    label: 'nf-core Hackathon',
    branding: '/summit-avatar/card/branding-hackathon.png',
  },
];

export const defaultEvent = events[0].id;

export function getEventBranding(eventId: string): string {
  return (events.find((e) => e.id === eventId) ?? events[0]).branding;
}

const NONE: AvatarVariant = { id: 'none', label: 'None', src: null };

const asset = (category: string, file: string) =>
  `/summit-avatar/${category}/${file}`;

/**
 * Chest logo baked onto every avatar. It is intentionally *not* a pickable
 * category: it can't be edited and is never recolored. Nextflow shows by
 * default (on top of the base); the nf-core logo only appears when the nf-core
 * event is selected.
 */
export const logo = {
  /** Stacking order — just above the base, below face features. */
  z: 5,
  default: asset('logo', 'nextflow.png'),
  /** Event id -> logo override. */
  byEvent: {
    hackathon: asset('logo', 'nf-core.png'),
  } as Record<string, string>,
};

/** Resolve the chest logo src for a given event (Nextflow unless nf-core). */
export function getLogoSrc(eventId?: string): string {
  return (eventId && logo.byEvent[eventId]) || logo.default;
}

/**
 * Recolorable palette channels. Add a swatch = add one line to `options`.
 * Add a new channel (e.g. 'shirt') = add an entry here and reference it from a
 * category's `recolor` rules.
 */
export const palette: PaletteChannel[] = [
  {
    id: 'skin',
    label: 'Skin tone',
    options: [
      { id: 'original', label: 'Original', color: '#FFFFFF' },
      { id: 'light', label: 'Light', color: '#F8D7C2' },
      { id: 'medium', label: 'Medium', color: '#E7B08A' },
      { id: 'tan', label: 'Tan', color: '#C68642' },
      { id: 'brown', label: 'Brown', color: '#8D5524' },
      { id: 'deep', label: 'Deep', color: '#5A3620' },
    ],
  },
  {
    id: 'hair',
    label: 'Hair color',
    options: [
      { id: 'black', label: 'Black', color: '#1a1a1a' },
      { id: 'brown', label: 'Brown', color: '#6B4423' },
      { id: 'blonde', label: 'Blonde', color: '#D8B15A' },
      { id: 'red', label: 'Red', color: '#A63D1E' },
      { id: 'gray', label: 'Gray', color: '#B8B8B8' },
      { id: 'nextflow', label: 'Nextflow', color: '#0DC09D' },
    ],
  },
];

export const categories: AvatarCategory[] = [
  {
    id: 'base',
    label: 'Base',
    z: 0,
    required: true,
    // Skin = the flat white region of the base art.
    recolor: [{ channel: 'skin', match: [255, 255, 255] }],
    variants: [{ id: 'default', label: 'Classic', src: asset('base', 'default.png') }],
  },
  {
    id: 'mouth',
    label: 'Mouth',
    z: 10,
    variants: [NONE, { id: 'smile', label: 'Smile', src: asset('mouth', 'smile.png') }],
  },
  {
    // Ready for future variants — see public/summit-avatar/eyes/
    id: 'eyes',
    label: 'Eyes',
    z: 20,
    variants: [NONE],
  },
  {
    id: 'facial-hair',
    label: 'Facial hair',
    z: 30,
    // All-black art → tint every opaque pixel to the hair color.
    recolor: [{ channel: 'hair' }],
    variants: [
      NONE,
      { id: 'beard', label: 'Beard', src: asset('facial-hair', 'beard.png') },
      { id: 'moustache', label: 'Moustache', src: asset('facial-hair', 'moustache.png') },
    ],
  },
  {
    // Generic decorative add-ons (eyewear now, more complements later — e.g. hats,
    // badges, earrings). Drop the PNG in public/summit-avatar/accessory/ and add a
    // line below. Art is kept as-authored (no recolor) so each asset owns its colors.
    id: 'accessory',
    label: 'Accessories',
    z: 40,
    variants: [
      NONE,
      { id: 'glasses', label: 'Glasses', src: asset('accessory', 'glasses.png') },
      { id: 'sunglasses', label: 'Sunglasses', src: asset('accessory', 'sunglasses.png') },
      { id: 'earrings-1', label: 'Earrings 1', src: asset('accessory', 'earrings-1.png') },
      { id: 'earrings-2', label: 'Earrings 2', src: asset('accessory', 'earrings-2.png') },
      { id: 'earrings-3', label: 'Earrings 3', src: asset('accessory', 'earrings-3.png') },
      { id: 'earrings-4', label: 'Earrings 4', src: asset('accessory', 'earrings-4.png') },
      { id: 'makeup', label: 'Makeup', src: asset('accessory', 'makeup.png') },
    ],
  },
  {
    id: 'hair',
    label: 'Hair',
    z: 50,
    // All-black art → tint every opaque pixel to the hair color.
    recolor: [{ channel: 'hair' }],
    variants: [
      NONE,
      { id: 'hair-2', label: 'Style 2', src: asset('hair', 'hair-2.png') },
      { id: 'hair-3', label: 'Style 3', src: asset('hair', 'hair-3.png') },
      { id: 'hair-4', label: 'Style 4', src: asset('hair', 'hair-4.png') },
      { id: 'hair-5', label: 'Style 5', src: asset('hair', 'hair-5.png') },
      { id: 'hair-6', label: 'Style 6', src: asset('hair', 'hair-6.png') },
      { id: 'hair-7', label: 'Style 7', src: asset('hair', 'hair-7.png') },
      { id: 'hair-8', label: 'Style 8', src: asset('hair', 'hair-8.png') },
      { id: 'hair-9', label: 'Style 9', src: asset('hair', 'hair-9.png') },
      { id: 'hair-10', label: 'Style 10', src: asset('hair', 'hair-10.png') },
      { id: 'hair-11', label: 'Style 11', src: asset('hair', 'hair-11.png') },
      { id: 'hair-12', label: 'Style 12', src: asset('hair', 'hair-12.png') },
      { id: 'hair-13', label: 'Style 13', src: asset('hair', 'hair-13.png') },
      { id: 'hair-14', label: 'Style 14', src: asset('hair', 'hair-14.png') },
      { id: 'hair-15', label: 'Style 15', src: asset('hair', 'hair-15.png') },
    ],
  },
];

/** Selection map: category id -> variant id. */
export type Selection = Record<string, string>;

/** Palette selection map: channel id -> option id. */
export type ColorSelection = Record<string, string>;

/** Categories worth showing a picker for (more than one option to cycle). */
export const pickableCategories = categories.filter((c) => c.variants.length > 1);

/** Default selection — first variant of every category. */
export const defaultSelection: Selection = Object.fromEntries(
  categories.map((c) => [c.id, c.variants[0].id])
);

/** Default palette — first option of every channel. */
export const defaultColors: ColorSelection = Object.fromEntries(
  palette.map((ch) => [ch.id, ch.options[0].id])
);

/** Resolve a palette selection into concrete hex colors keyed by channel id. */
export function resolveColors(colors: ColorSelection): Record<string, string> {
  return Object.fromEntries(
    palette.map((ch) => {
      const optId = colors[ch.id] ?? ch.options[0].id;
      const opt = ch.options.find((o) => o.id === optId) ?? ch.options[0];
      return [ch.id, opt.color];
    })
  );
}

export interface ResolvedLayer {
  src: string;
  recolor?: RecolorRule[];
}

/**
 * Layers to draw, bottom-to-top, for a given selection (skips empty ones).
 * The chest logo is always injected at its own `z` (Nextflow by default,
 * nf-core for the nf-core event) and is never recolored.
 */
export function resolveLayers(selection: Selection, eventId?: string): ResolvedLayer[] {
  const layers: { z: number; src: string | null; recolor?: RecolorRule[] }[] = categories.map(
    (c) => {
      const variantId = selection[c.id] ?? c.variants[0].id;
      const variant = c.variants.find((v) => v.id === variantId) ?? c.variants[0];
      return { z: c.z, src: variant.src, recolor: c.recolor };
    }
  );
  layers.push({ z: logo.z, src: getLogoSrc(eventId) });

  return layers
    .sort((a, b) => a.z - b.z)
    .filter((l): l is typeof l & { src: string } => Boolean(l.src))
    .map(({ src, recolor }) => ({ src, recolor }));
}

export function getVariant(categoryId: string, variantId: string): AvatarVariant | undefined {
  return categories
    .find((c) => c.id === categoryId)
    ?.variants.find((v) => v.id === variantId);
}
