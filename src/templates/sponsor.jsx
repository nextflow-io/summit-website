import React from 'react';
import { graphql } from 'gatsby';
import { AngleLeftIcon, Button, Link } from 'website-components';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import { getImage } from 'gatsby-plugin-image';

const SponsorPage = ({ data, path, children }) => {
  const { sponsor } = data;
  const shareImg = getImage(data.shareImg)?.images?.fallback?.src;
  let backProps = { to: path.includes('boston') ? '/boston/sponsors/' : '/barcelona/sponsors/' };
  if (typeof window !== 'undefined' && window.location.search.includes('goBack'))
    backProps = { onClick: () => window.history.back() };

  const ranks = {
    1: 'Diamond',
    2: 'Platinum',
    3: 'Gold',
    4: 'Bronze',
  };

  return (
    <>
      <Seo title={sponsor.name} description={`${sponsor.name} is a sponsor of Nextflow SUMMIT 2023`} image={shareImg} />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-300 mb-10">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link {...backProps} noBorder>
            Back to Sponsors
          </Link>
        </div>
        <div className="w-full">
          <h1 className="typo-h2 text-green-300 mb-4">
            <img src={sponsor.image.publicURL} title={sponsor.name} className="max-w-sm" />
          </h1>
          <div className="font-bold text-green-300 mb-4 text-lg">
            {ranks[sponsor.rank]} sponsor of Nextflow SUMMIT 2023
          </div>
          <div className="mt-5 md:mt-10 typo-body whitespace-pre-line">
            <CustomMDXProvider>{children}</CustomMDXProvider>
          </div>
          <Button variant="primary" to={sponsor.url} className="mt-4" size="md" arrow>
            Find out more
          </Button>
        </div>
      </div>
    </>
  );
};

export default SponsorPage;

export const pageQuery = graphql`
  query ($id: String!) {
    sponsor: sponsor(id: { eq: $id }) {
      id
      name
      event
      location
      rank
      url
      image {
        publicURL
      }
      content {
        body
      }
    }
    shareImg: file(relativePath: { eq: "share/2023_summit_register_interest.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`;
