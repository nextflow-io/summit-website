// Past events shown on the homepage. Copied from the Sanity "Past Events" page so
// the 2027 holding site doesn't fetch from Sanity. Images are the same files on
// Sanity's image CDN (plain static URLs; no API call).
const img = (file: string) =>
  `https://cdn.sanity.io/images/o2y1bt2g/summit/${file}?w=900&h=675&fit=crop&auto=format`;

export type PastEvent = { title: string; href: string; image: string };

export const PAST_EVENTS: PastEvent[] = [
  { title: 'Virtual 2026', href: '/2026/virtual/overview', image: img('e8a7d90b96184e21574ca7dec9dabaca272836ee-900x600.jpg') },
  { title: 'Barcelona 2026', href: '/2026/barcelona/overview', image: img('52520731607c6269bb9ad164fd7a23d8802ad7ce-2214x1453.jpg') },
  { title: 'Boston 2026', href: '/2026/boston/overview', image: img('555c7f3a7c348fded134cd8e1ba6563e139ac77c-6960x4640.jpg') },
  { title: 'Virtual 2025', href: '/2025/virtual/', image: img('9bfec78f269951dae7b912ca7be3f3594c5bdcf5-2366x1328.png') },
  { title: 'Barcelona 2025', href: '/2025/barcelona/', image: img('6d03ed2b3798569284255abebb44b6da59393e95-600x400.webp') },
  { title: 'Boston 2025', href: '/2025/boston/', image: img('5fd60f981e8311eae6dad162952038585d1423ea-900x600.jpg') },
  { title: 'Barcelona 2024', href: '/2024/barcelona/', image: img('c0ccc78c23399047c2cc1edc5af9ec615e29f043-500x588.jpg') },
  { title: 'Boston 2024', href: '/2024/boston/', image: img('1421c2d2a7b15661c853dfa415b208490f6cf3da-1345x897.jpg') },
  { title: 'Barcelona 2023', href: '/2023/barcelona/', image: img('6c1d8162e749526021ba30c0e0f3f2cda8c8f150-1023x682.jpg') },
  { title: 'Boston 2023', href: '/2023/boston/', image: img('107e311c7e7418babdeebaf8bb32a363d9541ff9-740x888.jpg') },
  { title: 'Barcelona 2022', href: '/2022/', image: img('e2c760e7b51f429b26f106a013daf08adeb5ada4-861x587.jpg') },
  { title: 'Nextflow Camp 2019', href: 'https://www.nextflow.io/nfcamp/2019/program.html', image: img('bf967cfb71acd4471a04cfd851e4f7f6529d7d67-740x888.jpg') },
  { title: 'nf-hack 2018', href: 'https://github.com/nextflow-io/nf-hack18/blob/master/schedule.md', image: img('066b60cec126f96035c6cfa4973be75fc7e32bb9-1790x1010.png') },
  { title: 'nf-hack 2017', href: 'https://github.com/nextflow-io/nf-hack17/blob/master/schedule.md', image: img('441f4739d26b617ebd0d5ce08fd632da766664be-928x638.jpg') },
];

/** Shape expected by FeatureBlocks / Box. */
export const toBox = (e: PastEvent) => ({
  title: e.title,
  href: e.href,
  image: e.image,
  imageAlt: `Nextflow Summit ${e.title}`,
  externalLink: e.href.startsWith('http'),
});
