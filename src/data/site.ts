// Site-wide settings for the current Summit edition.
//
// While 2027 is a holding site, the header/footer navigation is defined here in
// code instead of in the Sanity `menus` document. That document is shared with the
// archived 2026 site (served from the `archive/summit-2026` branch and proxied at
// /2026/*), whose SSR pages still read it on every request — so rewriting it for
// 2027 would break the 2026 archive's navigation. Once 2027 has its own menu
// content in Sanity, switch `USE_CMS_MENUS` back to true.
import type { MenusData } from './menus';

export const SUMMIT_YEAR = 2027;

/** Typeform ID for the 2027 Call for Abstracts (https://seqera.typeform.com/to/<id>). */
export const CFA_TYPEFORM_ID = 'kLPH8WrD';
export const CFA_PATH = `/${SUMMIT_YEAR}/boston/call-for-abstracts`;

export const USE_CMS_MENUS = false;

const internal = (path: string) => ({ isExternal: false, internalLink: path });
const external = (url: string) => ({ isExternal: true, externalUrl: url });

export const HOLDING_MENUS: MenusData = {
  _id: 'holding-menus',
  _type: 'menus',
  headerMenu: [
    { linkTitle: 'Call for Abstracts', link: internal(CFA_PATH) },
    { linkTitle: 'Past Events', link: internal('past-events') },
    { linkTitle: 'Newsletter', link: internal('newsletter') },
  ],
  headerBtn: { buttonText: 'Submit an abstract', buttonUrl: internal(CFA_PATH) },
  mobileMenu: [
    { _type: 'singleLink', linkTitle: 'Call for Abstracts', link: internal(CFA_PATH) },
    { _type: 'singleLink', linkTitle: 'Past Events', link: internal('past-events') },
    { _type: 'singleLink', linkTitle: 'Newsletter', link: internal('newsletter') },
  ],
  mobileBtn: { buttonText: 'Submit an abstract', buttonUrl: internal(CFA_PATH) },
  footerMenu: [
    {
      footerTitle: `${SUMMIT_YEAR}`,
      footerLinks: [{ linkTitle: 'Call for Abstracts', link: internal(CFA_PATH) }],
    },
    {
      footerTitle: 'Information',
      footerLinks: [
        { linkTitle: 'Past Events', link: internal('past-events') },
        { linkTitle: '2026 Summit', link: internal('2026/boston/overview') },
        { linkTitle: 'Newsletter', link: internal('newsletter') },
      ],
    },
    {
      footerTitle: 'Follow',
      footerLinks: [
        { linkTitle: 'LinkedIn', link: external('https://www.linkedin.com/company/14065390/') },
        { linkTitle: 'Bluesky', link: external('https://bsky.app/profile/nextflow.io') },
        { linkTitle: 'Twitter / X', link: external('https://twitter.com/nextflowio') },
        { linkTitle: 'GitHub', link: external('https://github.com/nextflow-io') },
        { linkTitle: 'YouTube', link: external('https://www.youtube.com/channel/UCBDzWsz3bDsxZblHbmGxsww') },
        { linkTitle: 'Slack', link: external('https://nextflow.io/slack-invite.html') },
      ],
    },
  ],
};
