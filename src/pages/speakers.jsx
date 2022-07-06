import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  GitHubIcon,
  Link,
  LinkedInIcon,
  List,
  Marquee,
  TwitterIcon
} from 'website-components';

import Seo from '../components/Seo';

import LogoNextflow from '../images/logo-nextflow.svg';
import PlaceholderVisual from '../images/placeholder.svg';

const SpeakersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      speakers: allPeople(sort: {fields: name}) {
        nodes {
          name
          position
          tags
          github
          linkedin
          twitter
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
              )
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Speakers"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            Join us for the Nextflow event
          </h1>
          <p className="typo-body max-w-xl mb-6 mx-auto">
            Join us in Barcelona or virtually to hear about the latest developments and innovations in the Nextflow world.
          </p>
          <Button to="/call-for-abstracts/" variant="accent" size="md" arrow>
            Call for abstracts
          </Button>
        </div>
      </div>
      <Marquee to="/call-for-abstracts/" type="accent">
        <span className="typo-blockquote">
          Call for abstracts now open
        </span>
      </Marquee>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-full lg:col-9">
              {data.speakers.nodes.map((speaker) => (
                <div className="bg-black text-white border border-gray-800 rounded-md overflow-hidden mt-4 first:mt-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <Image
                        image={getImage(speaker.image)}
                        className="w-full"
                        alt={speaker.name}
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6 inline-flex flex-col">
                      <h3 className="typo-h4 text-green-600 mb-4">
                        {speaker.name}
                      </h3>
                      <p className="typo-h5 mb-4">
                        {speaker.position}
                      </p>
                      <div className="flex mb-4">
                        <Link to={speaker.github} noBorder className="text-white hover:text-green-600 mr-4">
                          <GitHubIcon />
                        </Link>
                        <Link to={speaker.twitter} noBorder className="text-white hover:text-green-600 mr-4">
                          <TwitterIcon />
                        </Link>
                        <Link to={speaker.linkedin} noBorder className="text-white hover:text-green-600">
                          <LinkedInIcon />
                        </Link>
                      </div>
                      <div className="flex mt-8 md:mt-auto">
                        {speaker.tags.map((tag) => (
                          <div className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-black text-white border border-gray-800 rounded-md overflow-hidden mt-4">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img src={PlaceholderVisual} className="w-full h-full" alt="Gradient" />
                  </div>
                  <div className="w-full md:w-2/3 p-6 inline-flex flex-col">
                    <h3 className="typo-h4 text-green-600 mb-4">
                      More coming soon
                    </h3>
                    <p className="typo-body mb-4">
                      Apply now to present a talk or poster - the call for abstracts is open, closing date July 22, 2022.
                    </p>
                    <div className="mt-auto">
                      <Button to="https://seqera.typeform.com/summit-22-talks" variant="secondary" size="md">
                        Apply now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
