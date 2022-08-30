import { graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';

import {
  AngleLeftIcon,
  GitHubIcon,
  Link,
  LinkedInIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeRectangleIcon,
} from 'website-components';

const EventPage = ({ data }) => {
  const { event } = data;

  return (
    <>
      <Seo
        title={event.title}
        description={event.description}
      />
      <div className="text-white container-md py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-600 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link to="/program/" className="typo-intro" noBorder>
            Back
          </Link>
        </div>
        <div className="mt-5 md:mt-10">
          <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
            {event.speakers && (
              <>
                {event.speakers.length === 1 && (
                  <div className="flex items-center">
                    <Image
                      image={getImage(event.speakers[0].image)}
                      alt={event.speakers[0].name}
                      imgClassName="rounded-full"
                      className="mr-4 h-8 w-8"
                    />
                    <span className="typo-intro text-green-600">
                      {event.speakers[0].name}
                    </span>
                  </div>
                )}
                {event.speakers.length === 2 && (
                  <div className="flex items-center">
                    <Image
                      image={getImage(event.speakers[0].image)}
                      alt={event.speakers[0].name}
                      imgClassName="rounded-full"
                      className="h-8 w-8"
                    />
                    <Image
                      image={getImage(event.speakers[1].image)}
                      alt={event.speakers[1].name}
                      imgClassName="rounded-full"
                      className="-ml-2 mr-4 h-8 w-8"
                    />
                    <span className="typo-intro text-green-600">
                      {`${event.speakers[0].name} & ${event.speakers[1].name}`}
                    </span>
                  </div>
                )}
                {event.speakers.length > 2 && (
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                    <div className="h-8 w-8 bg-green-600 rounded-full -ml-2 mr-4" />
                    <span className="typo-intro text-green-600">
                      Several Speakers
                    </span>
                  </div>
                )}
                <span className="hidden lg:block mx-2">|</span>
              </>
            )}
            <p className="typo-body">
              {`${event.date}, ${event.time} CET`}
            </p>
            {event.location && (
              <>
                <span className="hidden lg:block mx-2">|</span>
                <div>
                  <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9" className="typo-body">
                    Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                  </Link>
                  <LocationIcon className="inline-block h-6 w-6 ml-2" />
                </div>
              </>
            )}
            {event.youtube && (
              <>
                <span className="hidden lg:block mx-2">|</span>
                <span>
                  <Link to="https://www.youtube.com/c/nextflow" className="typo-body text-gray-600">
                    Watch on youtube
                  </Link>
                  <YoutubeRectangleIcon className="inline-block h-6 w-6 ml-2 text-gray-600" />
                </span>
              </>
            )}
          </div>
          <h1 className="typo-h2 text-green-600 mb-4 mt-8">
            {event.title}
          </h1>
          <CustomMDXProvider>
            <MDXRenderer>
              {event.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
      </div>
    </>
  )
};

export default EventPage;

export const pageQuery = graphql`
  query($slug: String!) {
    event: event(slug: { eq: $slug }) {
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
      content {
        body
      }
      speakers {
        name
        image {
          childImageSharp {
            gatsbyImageData(
              height: 32
              placeholder: NONE
              width: 32
            )
          }
        }
      }
    }
  }
`;
