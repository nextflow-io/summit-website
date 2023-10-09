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
      heroImage: file(relativePath: { eq: "photos/audience.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
  return (
    <>
      <Seo title="Sponsors" />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-sm">
          <h1 className="typo-display1 text-green-300 text-center mb-8">Sponsors of the Summit</h1>
          {data.sponsors.nodes.map((sponsor) => (
            <Sponsor sponsor={sponsor} key={sponsor.id} />
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default SponsorsPage;
