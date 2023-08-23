import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Reveal, RevealOnScroll, Link } from 'website-components';

import CountDown from '../../components/CountDown';
import HeroAnimation from '../../components/HeroAnimation';
import NextflowLogo from '../../components/NextflowLogo';
import RegisterCTA from '../../components/RegisterCTA';

import LaptopIcon from '../../components/icons/LaptopIcon';
import MountainIcon from '../../components/icons/MountainIcon';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      summitImage: file(relativePath: { eq: "photos/summit-barcelona.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      bluePattern: file(relativePath: { eq: "visuals/blue-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      redPattern: file(relativePath: { eq: "visuals/red-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  return (
    <>
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <HeroAnimation className="animate-flow" />
        </div>
        <div className="container-lg py-20 relative">
          <div className="row items-center">
            <div className="col-full lg:col-6">
              <NextflowLogo className="h-12" />
              <h1 className="typo-h1 uppercase">summit</h1>
              <p className="typo-blockquote font-medium text-blue-600 max-w-xl">
                <i className="italic">Barcelona</i>
                {' | '}
                <i>2023</i>
              </p>
              <p className="typo-intro uppercase mt-16">
                In person
                <span className="mx-2">|</span>
                Virtual
              </p>
              <p className="typo-intro uppercase">Barcelona, October 16-20, 2023</p>
              <div className="max-w-[320px] mt-4">
                <Button to="/barcelona/register/" variant="primary" size="md" arrow>
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
          <Image image={getImage(data.summitImage)} alt="Nextflow SUMMIT 2023" />
        </Reveal>
      </RevealOnScroll>
      <div className="container-md text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">Key information</h2>
        </div>
        <RevealOnScroll className="row">
          <Reveal className="col-full lg:col-6 mt-4">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-green-300">
                <LaptopIcon />
              </div>
              <h3 className="typo-h4 mt-4">Hackathon | Oct 16-18</h3>
              <p className="typo-body my-4">
                Join our hackathon to develop nf-core together. It will be held in Barcelona and on Gather (virtually)
                prior to the Nextflow SUMMIT.
              </p>
              <Button to="/barcelona/agenda/hackathon#events" variant="secondary" size="md">
                View program
              </Button>
            </div>
          </Reveal>
          <Reveal className="col-full lg:col-6 mt-8 md:mt-4">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">Summit | Oct 18-20</h3>
              <p className="typo-body my-4">
                A showcase of the latest developments and innovations from the Nextflow world held in Barcelona and
                streamed online.
              </p>
              <Button to="/barcelona/agenda/summit#events" variant="secondary" size="md">
                View program
              </Button>
            </div>
          </Reveal>
          <Reveal className="col-full mt-8">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-center">
                <h3 className="typo-h4">Key dates</h3>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">July 3</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">Registration for the Nextflow SUMMIT opens</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">August 11</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">Call for talk abstracts closes</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">August 14</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">Accepted presenters are notified</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">September 16</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">Registration for the Nextflow SUMMIT closes</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">October 16-18</p>
                      <Link resetClassName="text-green-300" to="https://goo.gl/maps/7JNdvsYapPsaasog7">
                        Hotel SB, Barcelona
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2 flex items-center">
                      <p className="typo-body">nf-core Hackathon</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">October 18-20</p>
                      <Link resetClassName="text-green-300" to="https://goo.gl/maps/DMDJhRJmbof6Lx6E9">
                        Torre Glories, Barcelona
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2 flex items-center">
                      <p className="typo-body">Nextflow SUMMIT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </RevealOnScroll>
      </div>
      <RegisterCTA />
    </>
  );
};

export default IndexPage;
