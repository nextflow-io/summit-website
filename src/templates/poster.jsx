import { graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import {
  AngleLeftIcon,
  DownloadIcon,
  Link,
  Button,
  SlackIcon
} from 'website-components';

import GatherIcon from "../components/icons/GatherIcon";
import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import SpeakerCard from '../components/SpeakerCard';

const PosterPage = ({ data }) => {
  const { poster, posterImage } = data;

  return (
    <>
      <Seo
        title={poster.title}
      />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-600 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link to="/posters/" noBorder>
            Back
          </Link>
        </div>
        <div className="mt-5 md:mt-10">
          <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
            {poster.speakers && (
              <>
                {poster.speakers.length === 1 && (
                  <div className="flex items-center">
                    <Image
                      image={getImage(poster.speakers[0].image)}
                      alt={poster.speakers[0].name}
                      imgClassName="rounded-full"
                      className="mr-4 h-8 w-8"
                    />
                    <span className="typo-intro text-green-600">
                      {poster.speakers[0].name}
                    </span>
                  </div>
                )}
                {poster.speakers.length === 2 && (
                  <div className="flex items-center">
                    <Image
                      image={getImage(poster.speakers[0].image)}
                      alt={poster.speakers[0].name}
                      imgClassName="rounded-full"
                      className="h-8 w-8"
                    />
                    <Image
                      image={getImage(poster.speakers[1].image)}
                      alt={poster.speakers[1].name}
                      imgClassName="rounded-full"
                      className="-ml-2 mr-4 h-8 w-8"
                    />
                    <span className="typo-intro text-green-600">
                      {`${poster.speakers[0].name} & ${poster.speakers[1].name}`}
                    </span>
                  </div>
                )}
                {poster.speakers.length > 2 && (
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                    <div className="h-8 w-8 bg-green-600 rounded-full -ml-2 mr-4" />
                    <span className="typo-intro text-green-600">
                      Several Speakers
                    </span>
                  </div>
                )}
                <span className="hidden lg:block mx-2">|</span>
                <div className="inline-flex items-center">
                  <span>
                    <Link to="/stream/" className="inline typo-body text-gray-600">
                      Gather
                    </Link>
                  </span>
                  <GatherIcon className="inline-block h-6 w-6 ml-2 opacity-50" />
                </div>
              </>
            )}
          </div>
          <h1 className="typo-h2 text-green-600 mb-4 mt-8">
            <span className="bg-gray-800 rounded-full px-4 py-1 ml-2 float-right">#{poster.poster_id}</span>
            {poster.title}
          </h1>
          <div className="flex mt-8 md:mt-auto">
            <Button to={"https://nextflow.slack.com/channels/summit-2022-poster-" + poster.poster_id} variant="accent" size="sm" arrow>
              <SlackIcon className="h-4 w-4 inline-block mr-2" />
              Ask a question on Slack
            </Button>
          </div>
          <div className="flex mt-4">
            {poster.tags.map((tag) => (
              <div className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2">
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CustomMDXProvider>
              <MDXRenderer>
                {poster.content.body}
              </MDXRenderer>
            </CustomMDXProvider>
          </div>
          <div className="mt-8">
            <div className="bg-black border border-gray-800 rounded-sm shadow-xl h-full">
              <div className="flex flex-col h-full w-full">
                {poster.image && (
                  <Image
                    image={getImage(poster.image)}
                    className="rounded-t-sm w-full max-h-[460px]"
                    imageClassName="rounded-t-sm"
                    objectPosition="50% 0%"
                    alt={poster.title}
                  />
                )}
                {!poster.image && (
                  <Image
                    image={getImage(posterImage)}
                    className="rounded-t-sm w-full max-h-[460px]"
                    imageClassName="rounded-t-sm"
                    objectPosition="50% 0%"
                    alt={poster.title}
                  />
                )}
                <div className="px-4 py-6 bg-black rounded-b-sm w-full flex flex-row items-center justify-between">
                  <div>
                    <h4 className="typo-h5">
                      {poster.poster && (
                        <Link to={poster.poster.publicURL} className="hover:text-green-600" noBorder target="_blank">
                          {poster.title}
                        </Link>
                      )}
                      {!poster.poster && (
                        <>
                          {poster.title}
                        </>
                      )}
                    </h4>
                    <div className="inline-flex mt-2">
                      {poster.tags.map((tag) => (
                        <span className="bg-gray-800 typo-small rounded-full px-4 py-1 uppercase mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {poster.speakers && (
                      <>
                        {poster.speakers.length === 1 && (
                          <div className="flex items-center mt-4">
                            <Link to={poster.speakers[0].slug} resetClassName="mb-0">
                              <Image
                                image={getImage(poster.speakers[0].image)}
                                alt={poster.speakers[0].name}
                                imgClassName="rounded-full"
                                className="mr-4 h-8 w-8"
                              />
                            </Link>
                            <Link to={poster.speakers[0].slug} className="border-none typo-intro text-green-600">
                              {poster.speakers[0].name}
                            </Link>
                          </div>
                        )}
                        {poster.speakers.length === 2 && (
                          <div className="flex items-center mt-4">
                            <Image
                              image={getImage(poster.speakers[0].image)}
                              alt={poster.speakers[0].name}
                              imgClassName="rounded-full"
                              className="h-8 w-8"
                            />
                            <Image
                              image={getImage(poster.speakers[1].image)}
                              alt={poster.speakers[1].name}
                              imgClassName="rounded-full"
                              className="-ml-2 mr-4 h-8 w-8"
                            />
                            <span className="typo-intro text-green-600">
                              {`${poster.speakers[0].name} & ${poster.speakers[1].name}`}
                            </span>
                          </div>
                        )}
                        {poster.speakers.length > 2 && (
                          <div className="flex items-center mt-4">
                            <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                            <div className="h-8 w-8 bg-green-600 rounded-full -ml-2 mr-4" />
                            <span className="typo-intro text-green-600">
                              Several Speakers
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {poster.poster && (
                    <Button to={poster.poster.publicURL} variant="accent"  size="sm" target="_blank">
                      <DownloadIcon className="h-6 w-6 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            {poster.speakers.map((speaker) => (
              <SpeakerCard
                speaker={speaker}
                className="mt-8 first:mt-0"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default PosterPage;

export const pageQuery = graphql`
  query($slug: String!) {
    poster: poster(slug: { eq: $slug }) {
      title
      url
      poster_id
      image {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      poster {
        publicURL
      }
      tags
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
            gatsbyImageData(
              placeholder: NONE
            )
          }
        }
      }
      content {
        body
      }
    }
    posterImage: file(relativePath: {eq: "visuals/poster-coming-soon.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          placeholder: NONE
        )
      }
    }
  }
`;
