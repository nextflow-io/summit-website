import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Reveal,
  RevealOnScroll,
} from 'website-components';

import CountDown from '../components/CountDown';
import HeroAnimation from '../components/HeroAnimation';
import NextflowLogo from '../components/NextflowLogo';
import RegisterCTA from '../components/RegisterCTA';
import Seo from '../components/Seo';

import HackathonIcon from '../components/icons/HackathonIcon';
import MountainIcon from '../components/icons/MountainIcon';

import LogoAWS from '../images/logos/aws.svg';
import LogoElementBio from '../images/logos/element-biosciences.svg';
import LogoSeqera from '../images/logos/seqera.svg';
import LogoQuilt from '../images/logos/quilt.svg';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      summitImage: file(relativePath: {eq: "photos/summit.jpg"}) {
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
        title="Nextflow Summit 2022"
      />
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <HeroAnimation className="animate-flow" />
        </div>
        <div className="container-lg py-20 relative">
          <div className="row items-center">
            <div className="col-full lg:col-6">
              <h1 className="typo-h1 mt-4">
                <span className="text-green-300">
                  nextflow
                </span>
                <br />
                <span className="uppercase">
                  summit
                </span>
              </h1>
              <p className="typo-blockquote font-medium text-blue-600 max-w-xl mt-4">
                <i className="italic">
                  Barcelona
                </i>
                {' | '}
                <i>
                  2023
                </i>
              </p>
              <p className="typo-intro uppercase mt-16">
                In person
                <span className="mx-2">
                  |
                </span>
                Virtual
                <br />
                Barcelona, October 12-14, 2022
              </p>
              <div className="max-w-[320px] mt-4">
                <Button to="/program/" variant="accent" size="md" className="w-full">
                  Register
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:absolute bottom-10 right-4 mt-16">
            <CountDown />
          </div>
        </div>
      </div>
      <RevealOnScroll className="container-xl py-8">
        <Reveal>
          <Image
            image={getImage(data.summitImage)}
            alt="Nextflow Summit 2023"
          />
        </Reveal>
      </RevealOnScroll>
      <div className="container-lg text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Key information
          </h2>
        </div>
        <RevealOnScroll className="row">
          <Reveal className="col-full lg:col-6 mt-4">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-green-300">
                <HackathonIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Hackathon | Oct 16-18
              </h3>
              <p className="typo-body mt-4">
                Join our hackathon to develop nf-core together.  It will be held in Barcelona and on Gather (virtually)
                prior to the Nextflow SUMMIT.
              </p>
            </div>
          </Reveal>
          <Reveal className="col-full lg:col-6 mt-8 md:mt-4">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                SUMMIT | Oct 18-20
              </h3>
              <p className="typo-body mt-4">
                A showcase of the latest developments and innovations from the Nextflow world held in Barcelona and
                streamed online.
              </p>
            </div>
          </Reveal>
          <Reveal className="col-full mt-8">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-center">
                <h3 className="typo-h4">
                  Key dates
                </h3>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        June 19
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Registration for the Nextflow SUMMIT opens
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        July 14
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Call for talk abstracts closes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        July 24-29
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Accepted presenters are notified
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        September 9
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Registration for the Nextflow SUMMIT closes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        October 16-18
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        nf-core Hackathon
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        October 18-20
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Nextflow SUMMIT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </RevealOnScroll>
      </div>
      <RegisterCTA />
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
      <div className="bg-halfs from-green-300 to-indigo-800">
        <div className="container-xl">
          <div className="row">
            <div className="col-full lg:col-4 bg-green-300 text-indigo-800 py-14">
              <h2 className="typo-h2">
                SUMMIT 2023
                <br />
                2 locations:
              </h2>
              <div className="flex">
                <div className="mr-4 mt-8">
                  <Button to="/" variant="primary" theme="alternative" size="md">
                    Barcelona
                  </Button>
                </div>
                <div className="mt-8">
                  <Button to="/boston/" variant="secondary" theme="alternative" size="md">
                    Boston
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-full lg:col-8 bg-indigo-800 py-14">
              <div className="px-8">
                <RevealOnScroll className="row">
                  <Reveal className="col-full lg:col-6">
                    <div className="bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden">
                      <div className="p-20 bg-blue-600"></div>
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
                          <br />
                          Barcelona, October 16-20, 2023
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="col-full lg:col-6 mt-8 lg:mt-0">
                    <div className="bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden">
                      <div className="p-20 bg-red-300"></div>
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
                          <span className="mx-2">
                            |
                          </span>
                          Virtual
                          <br />
                          Boston, November 28-30, 2023
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
