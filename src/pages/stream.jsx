import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image";
import React from "react";

import { Accordion, Button, Box, Link, List, YoutubeRectangleIcon } from "website-components";

import Seo from "../components/Seo";
import YoutubeIframe from "../components/YoutubeIframe";

import IconGather from "../images/icons/gather.svg";
import PlaceholderRectangle from "../images/visuals/placeholder-rectangle.svg";

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
      <Seo title="Nextflow Summit 2022 Live Stream" />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">Join the Nextflow Summit 2022 online</h1>
          <p className="typo-body mx-auto">Virtual attendees can join our online venue with Gather.</p>
          <p className="typo-body mb-6 mx-auto">
            If you missed the registration, you can still watch the talks live on YouTube.
          </p>
          <Button
            to="https://forms.creacongresos.com/nextflowsummit/"
            variant="accent"
            size="md"
            arrow
            className="mx-3 mb-3"
          >
            <img src={IconGather} alt="Gather logo" className="h-6 mr-3" />
            Join Gather
          </Button>
          <Button
            to="https://youtube.com/playlist?list=PLPZ8WHdZGxmUdAJlHowo7zL2pN3x97d32"
            variant="accent"
            size="md"
            arrow
            className="mx-3"
          >
            <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-2" />
            Watch on YouTube
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
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
                  <p className="typo-body mb-4">If you’re attending remotely, follow these steps to enter Gather:</p>
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
                  <Button
                    to="https://forms.creacongresos.com/nextflowsummit/"
                    variant="secondary"
                    size="sm"
                    arrow
                    className="mb-5"
                  >
                    <img src={IconGather} alt="Gather logo" className="h-6 mr-3 opacity-50" />
                    Join Gather
                  </Button>
                </div>
                <div className="col-full lg:col-6 lg:ml-1/12">
                  <div className="relative">
                    <div
                      className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                      style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                    />
                    <Image
                      image={getImage(data.gatherHeroImage)}
                      className="w-full relative lg:top-6 lg:left-6"
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
              <p className="typo-body mt-6">
                <p className="typo-body mb-4">
                  If you missed the online registration deadline or are having difficulties with Gather, you can also
                  watch the live-streams of talks directly on YouTube:
                </p>
                <Button
                  to="https://youtube.com/playlist?list=PLPZ8WHdZGxmUdAJlHowo7zL2pN3x97d32"
                  variant="secondary"
                  size="sm"
                  arrow
                  className="mb-5"
                >
                  <YoutubeRectangleIcon className="inline-block h-6 w-6 mr-2" />
                  Watch on YouTube
                </Button>
              </p>
            </div>
            <div className="col-full lg:col-6 order-2 lg:order-1">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <YoutubeIframe
                  listId="PLPZ8WHdZGxmUdAJlHowo7zL2pN3x97d32"
                  className="relative lg:top-6 lg:-left-6"
                ></YoutubeIframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
