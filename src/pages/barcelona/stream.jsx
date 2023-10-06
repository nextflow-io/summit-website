import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, List, SlackIcon, YoutubeRectangleIcon } from 'website-components';

import GatherIcon from '../../components/icons/GatherIcon';
import Seo from '../../components/Seo';
import YoutubeIframe from '../../components/YoutubeIframe';

const RegisterPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gatherHeroImage: file(relativePath: { eq: "visuals/gather.png" }) {
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
          <p className="typo-body mx-auto">Virtual attendees can join our online venue with Gather.</p>
          <p className="typo-body mb-6 mx-auto">
            If you missed the registration, you can still watch the talks live on YouTube.
          </p>
          <Button
            to="https://app.gather.town/app/br78S294XBCL487A/nf-core-hackathon"
            variant="primary"
            size="md"
            arrow
            className="mx-3 mb-3"
          >
            <GatherIcon className="inline-block h-6 w-6 mr-3" />
            Join Gather
          </Button>
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
              <h2 className="typo-h2 mb-4">Join us online on Gather</h2>
              <div className="row flex-wrap lg:flex-nowrap">
                <div className="col-full lg:col-6 mt-4 lg:mt-0">
                  <p className="typo-body mb-4">
                    Virtual attendance at the Nextflow Summit will be in the Gather platform. Join our virtual world to
                    watch talks, view posters and meet other attendees.
                  </p>
                  <p className="typo-body mb-4">
                    We recommend trying Gather out before the Summit begins to make yourself familiar with the platform.
                  </p>
                  <List type="bullet" iconClassName="text-white" className="mb-5">
                    <List.Item className="typo-body">
                      Use the button below to launch Gather, any time after October 7
                    </List.Item>
                    <List.Item className="typo-body">
                      Enter the email address you used to register for the Nextflow Summit
                    </List.Item>
                    <List.Item className="typo-body">
                      Check your emails for a one-time code and enter it into the Gather window
                    </List.Item>
                    <List.Item className="typo-body">Enter the space and enjoy the Nextflow Summit!</List.Item>
                  </List>
                  {/*
                  <span className="typo-body bg-gray-800 rounded-sm py-2 px-4">
                    <GatherIcon className="inline-block h-5 w-5 mr-2" />
                    Closed
                  </span>
                  */}
                  <Button
                    to="https://app.gather.town/app/br78S294XBCL487A/nf-core-hackathon"
                    variant="secondary"
                    size="sm"
                    arrow
                    className="mb-5"
                  >
                    <GatherIcon className="inline-block h-6 w-6 mr-2" />
                    Join Gather
                  </Button>
                </div>
                <div className="col-full lg:col-6 lg:ml-1/12">
                  <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                    <Image
                      image={getImage(data.gatherHeroImage)}
                      className="w-full"
                      imgClassName="rounded-sm"
                      alt="Gather"
                    />
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
              <h2 className="typo-h2 mb-4">Watch on YouTube</h2>
              <p className="typo-body mt-6 mb-4">
                If you missed the online registration deadline or are having difficulties with Gather, you can also
                watch the live-streams of talks directly on YouTube.
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

              <p className="typo-body mt-6 mb-4">
                Questions to speakers and discussion about talks will on the Nextflow Slack, in
                the <code>#summit-2023</code>&nbsp; channel.
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
                <code>#summit-2023</code>&nbsp; channel
              </Button>
            </div>
            <div className="col-full lg:col-6 order-2 lg:order-1">
              <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                <YoutubeIframe listId="PLPZ8WHdZGxmUotnP-tWRVNtuNWpN7xbpL"></YoutubeIframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
