import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Seo from '../../components/Seo';

import ContactUs from '../../components/ContactUs';
import Sponsor from '../../components/Sponsor';

const SponsorsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sponsors: allSponsor(sort: { rank: ASC }, filter: { location: { in: ["Barcelona", "Both"] } }) {
        nodes {
          id
          name
          rank
          url
          location
          event
          image {
            publicURL
          }
          content {
            body
          }
        }
      }
    }
  `);

  // Handle minor disparity of ranks between Barcelona and Boston
  const sponsors = data.sponsors.nodes;
  const memverge = sponsors.findIndex(({ id }) => id === 'memverge');
  const zs = sponsors.findIndex(({ id }) => id === 'zs');
  sponsors[memverge].rank = 3;
  sponsors[zs].rank = 2;
  const orderedSponsors = sponsors.sort((a, b) => a.rank - b.rank);

  return (
    <>
      <Seo title="Sponsors" description="Sponsors of Nextflow SUMMIT 2023 (Barcelona)" />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-sm">
          <h1 className="typo-display1 text-green-300 text-center mb-8">Sponsors of the Summit</h1>
          {orderedSponsors.map((sponsor) => (
            <Sponsor sponsor={sponsor} key={sponsor.id} location="barcelona" />
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default SponsorsPage;
