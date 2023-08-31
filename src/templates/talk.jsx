import React from 'react';
import { graphql } from 'gatsby';
import { AngleLeftIcon, Button, Link, LocationIcon, YoutubeRectangleIcon } from 'website-components';

import PlaceholderRectangle from '../images/visuals/placeholder-rectangle.svg';
import MDXProvider from '../components/CustomMDXProvider';
import YoutubeIframe from '../components/YoutubeIframe';
import SpeakerCard from '../components/SpeakerCard';
import Seo from '../components/Seo';
import SpeakerPics from '../components/EventCard/SpeakerPics';

const TalkPage = ({ data, children }) => {
  const { event: talk } = data;
  let shareImg = undefined;
  const firstSpeaker = talk.speakers[0];
  const firstSpeakerImg = firstSpeaker?.meta?.image?.publicURL;
  if (firstSpeakerImg) shareImg = firstSpeakerImg;
  return (
    <>
      <Seo title={talk.title} description={talk.description} image={shareImg} />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-300 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link to={talk.path} noBorder>
            Back
          </Link>
        </div>
        <div className="mt-5 md:mt-10">
          <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
            <SpeakerPics speakers={talk.speakers} />
            <p className="typo-body">{`${talk.date}, ${talk.time} CET`}</p>
            {talk.location && (
              <>
                <span className="hidden lg:block mx-2">|</span>
                <div>
                  <Link to={talk.locationUrl} className="typo-body">
                    {talk.location}
                  </Link>
                  <LocationIcon className="inline-block h-6 w-6 ml-2" />
                </div>
              </>
            )}
            {talk.youtube && (
              <>
                <span className="hidden lg:block mx-2">|</span>
                <span>
                  <Link to={talk.youtubeUrl} className="typo-body text-gray-600">
                    {talk.youtube}
                  </Link>
                  <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2 text-gray-600" />
                </span>
              </>
            )}
          </div>
          <h1 className="typo-h2 text-green-300 mb-4 mt-8">{talk.title}</h1>
          <div className="flex mt-8 md:mt-auto">
            {talk.tags?.map((tag, i) => (
              <div className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2" key={i}>
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <MDXProvider>{children}</MDXProvider>
          </div>
          {talk.youtube && (
            <>
              <div
                className="bg-center bg-cover bg-no-repeat rounded-sm p-1 mt-6 mb-3 mx-1"
                style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
              >
                <YoutubeIframe id={talk.youtubeUrl}></YoutubeIframe>
              </div>
              <Button to={talk.youtubeUrl} variant="secondary" size="sm" className="my-3">
                {talk.youtube}
                <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2" />
              </Button>
            </>
          )}
          {talk.speakers?.map((speaker, i) => (
            <SpeakerCard speaker={speaker} className="mt-8 first:mt-0" key={i} fromEvent />
          ))}
        </div>
      </div>
    </>
  );
};

export default TalkPage;

export const pageQuery = graphql`
  query ($slug: String!) {
    event: event(fullPath: { eq: $slug }) {
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
      content {
        body
      }
      speakers {
        slug
        name
        position
        tags
        github
        linkedin
        twitter
        image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE)
          }
        }
        meta {
          image {
            publicURL
          }
        }
      }
    }
  }
`;
