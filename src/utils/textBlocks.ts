// Turn plain paragraphs into Portable Text blocks, so code-defined copy can be
// rendered by components that expect Sanity rich text (e.g. LandingHero).
export const textBlocks = (...paragraphs: string[]) =>
  paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `p${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `s${i}`, marks: [], text }],
  }));
