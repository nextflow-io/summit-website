import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { AngleLeftIcon, GitHubIcon, Link, LinkedInIcon, TwitterIcon } from 'website-components';

import CustomMDXProvider from '../components/CustomMDXProvider';
import EventCard from '../components/EventCard';
import Seo from '../components/Seo';

const SpeakerPage = ({ data, path }) => {
  const { speaker } = data;
  let backProps = { to: path.includes('boston') ? '/boston/speakers/' : '/barcelona/speakers/' };
  if (typeof window !== 'undefined' && window.location.search.includes('goBack'))
    backProps = { onClick: () => window.history.back() };
  return (
    <>
      <Seo title={speaker.meta.title} description={speaker.meta.description} image={speaker.meta.image.publicURL} />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-300 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link {...backProps} noBorder>
            Back
          </Link>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 overflow-hidden" style={{ borderRadius: 100 }}>
            <Image image={getImage(speaker.image)} className="w-full" imgClassName="rounded-md" alt={speaker.name} />
          </div>
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:px-6 inline-flex flex-col">
            <h1 className="typo-h2 text-green-300 mb-4">{speaker.name}</h1>
            <p className="typo-h5 mb-4">{speaker.position}</p>
            {speaker.email && (
              <div className="mb-4">
                <Link to={`mailto:${speaker.email}`} className="typo-body" noBorder>
                  {speaker.email}
                </Link>
              </div>
            )}
            <div className="flex mb-4">
              {speaker.github && (
                <Link to={speaker.github} noBorder className="text-white hover:text-green-300 mr-4">
                  <GitHubIcon />
                </Link>
              )}
              {speaker.twitter && (
                <Link to={speaker.twitter} noBorder className="text-white hover:text-green-300 mr-4">
                  <TwitterIcon />
                </Link>
              )}
              {speaker.linkedin && (
                <Link to={speaker.linkedin} noBorder className="text-white hover:text-green-300">
                  <LinkedInIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-10 typo-body whitespace-pre-line">
          <CustomMDXProvider>{speaker.content.body}</CustomMDXProvider>
        </div>
        <div className="mt-5 md:mt-10">
          {data.events.nodes.map((event, i) => (
            <div className="mt-8 first:mt-0" key={i}>
              <EventCard event={event} disableTimeline />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpeakerPage;

export const pageQuery = graphql`
  query ($slug: String!) {
    speaker: people(slug: { eq: $slug }) {
      slug
      name
      position
      email
      tags
      github
      linkedin
      twitter
      image {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      content {
        body
      }
      meta {
        title
        description
        image {
          publicURL
        }
      }
    }
    events: allEvent(filter: { speakers: { elemMatch: { slug: { eq: $slug } } } }, sort: { datetime: ASC }) {
      nodes {
        slug
        id
        timeframe
        title
        description
        date
        time
        tags
        location
        locationUrl
        youtube
        youtubeUrl
        hasPage
        path
        fullPath
        speakers {
          name
          image {
            childImageSharp {
              gatsbyImageData(height: 32, placeholder: NONE, width: 32)
            }
          }
        }
      }
    }
  }
`;
