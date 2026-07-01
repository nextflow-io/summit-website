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

export interface AvatarCategory {
  id: string;
  label: string;
  /** Stacking order — higher renders on top. */
  z: number;
  /** If true there is no "None" option (the layer is always present). */
  required?: boolean;
  variants: AvatarVariant[];
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

export const categories: AvatarCategory[] = [
  {
    id: 'base',
    label: 'Base',
    z: 0,
    required: true,
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

/** Categories worth showing a picker for (more than one option to cycle). */
export const pickableCategories = categories.filter((c) => c.variants.length > 1);

/** Default selection — first variant of every category. */
export const defaultSelection: Selection = Object.fromEntries(
  categories.map((c) => [c.id, c.variants[0].id])
);

/** Layers to draw, bottom-to-top, for a given selection (skips empty ones). */
export function resolveLayers(selection: Selection): string[] {
  return [...categories]
    .sort((a, b) => a.z - b.z)
    .map((c) => {
      const variantId = selection[c.id] ?? c.variants[0].id;
      const variant = c.variants.find((v) => v.id === variantId) ?? c.variants[0];
      return variant.src;
    })
    .filter((src): src is string => Boolean(src));
}

export function getVariant(categoryId: string, variantId: string): AvatarVariant | undefined {
  return categories
    .find((c) => c.id === categoryId)
    ?.variants.find((v) => v.id === variantId);
}
