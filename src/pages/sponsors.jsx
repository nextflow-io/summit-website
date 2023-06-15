import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
} from 'website-components';

import Seo from '../components/Seo';

import LogoAWS from '../images/logos/aws.svg';
import LogoElementBio from '../images/logos/element-biosciences.svg';
import LogoSeqera from '../images/logos/seqera.svg';
import LogoQuilt from '../images/logos/quilt.svg';

const SponsorsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/audience.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Travel to Barcelona"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2">
                Sponsor the SUMMIT
              </h1>
              <p className="typo-body mt-4">
                Strengthen your brand power and boost your message through exclusive advertising and sponsorship
                opportunities.
              </p>
              <p className="typo-body mt-4">
                A range of sponsorship opportunities to suit your needs. Get in contact to find out more.
              </p>
              <div className="mt-4">
                <Button to="/program/" variant="secondary" size="md">
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
      <div className="text-white py-8">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Sponsored by
          </h2>
        </div>
        <div className="container-xl mt-2">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/4 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoAWS} className="h-12" alt="AWS logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/4 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoSeqera} className="h-10" alt="Seqera logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/4 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoQuilt} className="h-12" alt="Quilt logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/4 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoElementBio} className="h-10" alt="Element Biosciences logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;
