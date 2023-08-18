import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Link,
} from 'website-components';

import HeroAnimation from '../components/HeroAnimation';
import NextflowLogo from '../components/NextflowLogo';
import Seo from '../components/Seo';

import LogoAWS from '../images/logos/aws.svg';
import LogoMicrosoft from '../images/logos/microsoft.svg';
import LogoPixelgen from '../images/logos/pixelgen.svg';
import LogoSeqera from '../images/logos/seqera.svg';
import LogoZS from '../images/logos/ZS.svg';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      summitImage: file(relativePath: {eq: "photos/summit-barcelona.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      bluePattern: file(relativePath: {eq: "visuals/blue-pattern.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      redPattern: file(relativePath: {eq: "visuals/red-pattern.jpg"}) {
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
        title="Nextflow SUMMIT 2023"
      />
      <div className="container-md py-20">
      <div className="row">
                <div className="col-full lg:col-6">
                  <Link to="/barcelona/" className="block bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden">
                    <Image
                      image={getImage(data.bluePattern)}
                      alt="blue dots visual"
                      className="h-48"
                      imgClassName="rounded-t-md"
                    />
                    <div className="px-4 py-6 lg:p-8">
                      <div>
                        <NextflowLogo className="h-10 text-white mx-auto" />
                      </div>
                      <h3 className="text-center mt-4">
                        <span className="typo-h4 text-white mr-4">
                          SUMMIT
                        </span>
                        <span className="typo-blockquote text-blue-600 italic">
                          Barcelona
                        </span>
                      </h3>
                      <p className="typo-intro text-center uppercase mt-8">
                        In person
                        <span className="mx-2">
                          |
                        </span>
                        Virtual
                      </p>
                      <p className="typo-intro text-center">
                        Barcelona, October 16-20, 2023
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-full lg:col-6 mt-8 lg:mt-0">
                  <Link to="/boston/" className="block bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden" noBorder>
                    <Image
                      image={getImage(data.redPattern)}
                      alt="red dots visual"
                      className="h-48"
                      imgClassName="rounded-t-md"
                    />
                    <div className="px-4 py-6 lg:p-8">
                      <div>
                        <NextflowLogo className="h-10 text-white mx-auto" />
                      </div>
                      <h3 className="text-center mt-4">
                        <span className="typo-h4 text-white mr-4">
                          SUMMIT
                        </span>
                        <span className="typo-blockquote text-red-300 italic">
                          Boston
                        </span>
                      </h3>
                      <p className="typo-intro text-center uppercase mt-8">
                        In person
                      </p>
                      <p className="typo-intro text-center">
                        Boston, November 28-30, 2023
                      </p>
                    </div>
                  </Link>
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
            <div className="w-full sm:w-1/5 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoAWS} className="h-12" alt="AWS logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/5 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoSeqera} className="h-10" alt="Seqera logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/5 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoZS} className="h-14" alt="ZS logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/5 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoMicrosoft} className="h-10" alt="Microsoft logo" />
              </div>
            </div>
            <div className="w-full sm:w-1/5 px-1">
              <div className="bg-gray-800 h-24 sm:h-40 px-4 flex items-center justify-center">
                <img src={LogoPixelgen} className="h-14" alt="Pixelgen logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
