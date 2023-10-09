import React from 'react';
import { graphql } from 'gatsby';
import { AngleLeftIcon, Link } from 'website-components';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import { getImage } from 'gatsby-plugin-image';

const SponsorPage = ({ data, path, children }) => {
  const { sponsor } = data;
  const shareImg = getImage(data.shareImg)?.images?.fallback?.src;
  let backProps = { to: path.includes('boston') ? '/boston/sponsors/' : '/barcelona/sponsors/' };
  if (typeof window !== 'undefined' && window.location.search.includes('goBack'))
    backProps = { onClick: () => window.history.back() };
  console.log('>>', sponsor);
  return (
    <>
      <Seo title={sponsor.name} description={`${sponsor.name} is a sponsor of Nextflow SUMMIT 2023`} image={shareImg} />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-300 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link {...backProps} noBorder>
            Back
          </Link>
        </div>
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:px-6 inline-flex flex-col">
          <h1 className="typo-h2 text-green-300 mb-4">{sponsor.name}</h1>
          <div className="mt-5 md:mt-10 typo-body whitespace-pre-line">
            <CustomMDXProvider>{children}</CustomMDXProvider>
          </div>
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
      image {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
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
