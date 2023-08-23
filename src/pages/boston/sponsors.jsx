import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button } from 'website-components';

import Seo from '../../components/Seo';
import SponsoredBy from '../../components/SponsoredBy';
import ContactUs from '../../components/ContactUs';

const SponsorsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "photos/audience-boston.jpg" }) {
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
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1">Sponsor the SUMMIT</h1>
              <p className="typo-body mt-4">
                Strengthen your brand power and boost your message through exclusive advertising and sponsorship
                opportunities.
              </p>
              <p className="typo-body mt-4">
                A range of sponsorship opportunities to suit your needs. Get in contact to find out more.
              </p>
              <div className="mt-4">
                <Button to="mailto:sponsorships@seqera.io" variant="secondary" size="md">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(data.heroImage)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <SponsoredBy />
      <ContactUs />
    </>
  );
};

export default SponsorsPage;
