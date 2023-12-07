import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Reveal, RevealOnScroll, Link, YoutubeRectangleIcon } from 'website-components';

import CountDown from '../../components/CountDown';
import EventCTA from '../../components/EventCTA';
import HeroAnimation from '../../components/HeroAnimation';
import NextflowLogo from '../../components/NextflowLogo';
import RegisterCTA from '../../components/RegisterCTA';
import Seo from '../../components/Seo';

import LaptopIcon from '../../components/icons/LaptopIcon';
import MountainIcon from '../../components/icons/MountainIcon';

import ContactUs from '../../components/ContactUs';
import SponsoredBy from '../../components/SponsoredBy';
import PreregisterBanner from '../../components/PreregisterBanner';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      summitImage: file(relativePath: { eq: "photos/summit-boston.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Nextflow SUMMIT 2023" />
      <PreregisterBanner />
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <HeroAnimation className="animate-flow" variant="red" />
        </div>
        <div className="container-lg py-20 relative">
          <div className="row items-center">
            <div className="col-full lg:col-6">
              <NextflowLogo className="h-12" />
              <h1 className="typo-h1 uppercase">summit</h1>
              <p className="typo-blockquote font-medium text-red-300 max-w-xl">
                <i className="italic">Boston</i>
                {' | '}
                <i>2023</i>
              </p>
              <p className="typo-intro uppercase">Boston, November 28-30, 2023</p>
              <div className="max-w-[320px] mt-4">
                <Button to="/boston/stream/" variant="primary" size="md" arrow>
                  <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-3" />
                  Watch live
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
              <h3 className="typo-h4 mt-4">Hackathon | Nov 28-29</h3>
              <p className="typo-body mt-4">
                A hackathon to develop nf-core held in Boston prior to the Nextflow SUMMIT.
              </p>
            </div>
          </Reveal>
          <Reveal className="col-full lg:col-6 mt-8 md:mt-4">
            <div className="bg-black border border-gray-800 px-4 py-6 lg:p-8 rounded-md shadow-xl relative">
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">Summit | Nov 29-30</h3>
              <p className="typo-body mt-4">
                A showcase of the latest developments and innovations from the Nextflow world held in Boston.
              </p>
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
                      <p className="typo-body">September 18</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">Tickets are sold out. Register for the waiting list.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">October 27</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Registrations for the waiting list close, and available tickets are announced if available.
                        Cancellation period closes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">November 17</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">
                        Registration period for the last available tickets closes (if not already sold out).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="h-full border-b border-gray-600 py-2">
                      <p className="typo-body">November 28-29</p>
                      <Link resetClassName="text-green-300" to="https://goo.gl/maps/GuHdtLUGEEL8ztRQ9">
                        Boston Park Plaza
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
                      <p className="typo-body">November 29-30</p>
                      <Link resetClassName="text-green-300" to="https://goo.gl/maps/GuHdtLUGEEL8ztRQ9">
                        Boston Park Plaza
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
      <SponsoredBy />
      <EventCTA />
      <ContactUs />
    </>
  );
};

export default IndexPage;
