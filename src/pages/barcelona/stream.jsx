import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, SlackIcon, YoutubeRectangleIcon } from 'website-components';

import Seo from '../../components/Seo';
import YoutubeIframe from '../../components/YoutubeIframe';

const RegisterPage = () => {
  const data = useStaticQuery(graphql`
    query {
      slackHeroImage: file(relativePath: { eq: "visuals/slack-features.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
  return (
    <>
      <Seo title="Nextflow Summit 2023 Live Stream" />
      <div
        className="py-32 bg-nextIndigo text-white"
        style={{
          background: 'linear-gradient(20deg, rgba(41,3,98,1) 0%, rgba(22,15,38,1) 100%)',
        }}
      >
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">Join the Nextflow Summit 2023 online</h1>
          <p className="typo-body mb-4">
            If you missed the registration, you can still watch the talks live on YouTube.
          </p>
          <div className="py-2 px-4 rounded-sm inline-block bg-yellow-600 typo-body mb-8 text-white font-bold">
            We apologize for the connectivity issues, we are trying to fix this as soon as possible.
          </div>
          <br />
          <Button
            to="https://nextflow.slack.com/channels/summit-2023"
            variant="primary"
            size="md"
            arrow
            className="mx-3 mb-3"
          >
            <SlackIcon className="inline-block h-6 w-6 mr-3" />
            Ask a question on Slack
          </Button>
          <Button
            to="https://youtube.com/playlist?list=PLPZ8WHdZGxmUotnP-tWRVNtuNWpN7xbpL"
            variant="primary"
            size="md"
            arrow
            className="mx-3"
          >
            <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-3" />
            Watch on YouTube
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white" style={{ background: '#181818' }}>
        <div className="container-lg">
          <div className="row flex-nowrap">
            <div className="col-full">
              <h2 className="typo-h2 mb-4">Watch on YouTube</h2>
              <div className="row flex-wrap lg:flex-nowrap">
                <div className="col-full lg:col-6 mt-4 lg:mt-0">
                  <p className="typo-body mb-4">
                    If you missed the online registration deadline, you can still watch the live-streams of talks
                    directly on YouTube.
                  </p>
                  <p className="typo-body mb-4">
                    There will be one live-stream per day. The videos will be available on YouTube after the event.
                  </p>
                  <Button
                    to="https://youtube.com/playlist?list=PLPZ8WHdZGxmUotnP-tWRVNtuNWpN7xbpL"
                    variant="secondary"
                    size="sm"
                    arrow
                    className="mb-5"
                  >
                    <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
                <div className="col-full lg:col-6 lg:ml-1/12">
                  <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                    <YoutubeIframe listId="PLPZ8WHdZGxmUotnP-tWRVNtuNWpN7xbpL"></YoutubeIframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row flex-wrap lg:flex-nowrap">
            <div className="col-full lg:col-6 order-1 lg:order-2 mt-4 lg:mt-0">
              <h2 className="typo-h2 mb-4">Ask questions on Slack</h2>
              <p className="typo-body mt-6 mb-4">
                Questions to speakers and discussion about talks will on the Nextflow Slack, in the{' '}
                <code>#summit-2023</code>&nbsp; channel.
              </p>
              <Button
                to="https://www.nextflow.io/slack-invite.html"
                variant="secondary"
                size="sm"
                arrow
                className="mb-5 mr-5"
              >
                <SlackIcon className="inline-block h-6 w-6 mr-3" />
                Join Slack
              </Button>
              <Button
                to="https://nextflow.slack.com/channels/summit-2023"
                variant="secondary"
                size="sm"
                arrow
                className="mb-5"
              >
                <SlackIcon className="inline-block h-6 w-6 mr-3" />
                View &nbsp;<code>#summit-2023</code>&nbsp; channel
              </Button>
            </div>
            <div className="col-full lg:col-6 order-2 lg:order-1">
              <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                <Image
                  image={getImage(data.slackHeroImage)}
                  className="w-full opacity-75"
                  imgClassName="rounded-sm"
                  alt="Gather"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
