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

/** Final downloadable share card (OG / Twitter / LinkedIn). */
export const EXPORT = { width: 1200, height: 630 } as const;

/** Static branding panel that sits on the left of the final card. */
export const CARD_BRANDING = {
  src: '/summit-avatar/card/branding.png',
  width: 1024,
  height: 791,
} as const;

const NONE: AvatarVariant = { id: 'none', label: 'None', src: null };

const asset = (category: string, file: string) =>
  `/summit-avatar/${category}/${file}`;

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
      { id: 'black', label: 'Black', color: '#1A1A1A' },
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
      { id: 'beard-1', label: 'Full beard', src: asset('facial-hair', 'beard-1.png') },
      { id: 'moustache', label: 'Moustache', src: asset('facial-hair', 'moustache.png') },
    ],
  },
  {
    // Ready for future variants — see public/summit-avatar/glasses/
    id: 'glasses',
    label: 'Glasses',
    z: 40,
    variants: [NONE],
  },
  {
    id: 'hair',
    label: 'Hair',
    z: 50,
    // All-black art → tint every opaque pixel to the hair color.
    recolor: [{ channel: 'hair' }],
    variants: [NONE, { id: 'hair-3', label: 'Style 3', src: asset('hair', 'hair-3.png') }],
  },
  {
    // Ready for future variants (hat, badge, …) — see public/summit-avatar/accessory/
    id: 'accessory',
    label: 'Accessory',
    z: 60,
    variants: [NONE],
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

/** Layers to draw, bottom-to-top, for a given selection (skips empty ones). */
export function resolveLayers(selection: Selection): ResolvedLayer[] {
  return [...categories]
    .sort((a, b) => a.z - b.z)
    .map((c) => {
      const variantId = selection[c.id] ?? c.variants[0].id;
      const variant = c.variants.find((v) => v.id === variantId) ?? c.variants[0];
      return { src: variant.src, recolor: c.recolor };
    })
    .filter((l): l is ResolvedLayer => Boolean(l.src));
}

export function getVariant(categoryId: string, variantId: string): AvatarVariant | undefined {
  return categories
    .find((c) => c.id === categoryId)
    ?.variants.find((v) => v.id === variantId);
}
