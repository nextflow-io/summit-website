import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Link,
  Marquee,
} from 'website-components';

import Card from '../../components/Card';
import LaptopIcon from '../../components/icons/LaptopIcon';
import MountainIcon from '../../components/icons/MountainIcon';
import Seo from '../../components/Seo';

const AgendaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/agenda-boston.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Nextflow Summit 2023 Agenda"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1 mb-4">
                Join us in Boston
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                This premier event brings together leading experts, innovators, and researchers to showcase the latest
                breakthroughs in workflow management.
              </p>
              <div className="mt-4">
                <Button to="/boston/register/" variant="accent" size="md" arrow>
                  Register
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(data.heroImage)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <Marquee className="typo-body bg-green-300 text-black" to="/call-for-abstracts/" type="reset">
        Call for abstracts now open
      </Marquee>
      <div className="container-md text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Program
          </h2>
        </div>
        <div className="row">
          <div className="col-full lg:col-6 mt-4">
            <Card>
              <div className="text-green-300">
                <LaptopIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Hackathon | Nov 28-29
              </h3>
              <p className="typo-intro text-green-300 mt-4">
                1.5 days · 50 people · hackathon
              </p>
              <p className="typo-body mt-4">
                The program will be available once the call for abstracts has closed.
              </p>
              <div className="mt-4">
                <span className="typo-body bg-gray-800 rounded-sm py-2 px-4">
                  Program coming soon
                </span>
                {/*
                <Button to="/boston/register/" variant="secondary" size="md">
                  View program
                </Button>
                */}
              </div>
            </Card>
          </div>
          <div className="col-full lg:col-6 mt-8 md:mt-4">
            <Card>
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                SUMMIT | Nov 29-30
              </h3>
              <p className="typo-intro text-green-300 mt-4">
                1.5 days · 100 people · talks, networking, and more
              </p>
              <p className="typo-body mt-4">
                The program will be available once the call for abstracts has closed.
              </p>
              <div className="mt-4">
                <span className="typo-body bg-gray-800 rounded-sm py-2 px-4">
                  Program coming soon
                </span>
                {/*
                <Button to="/boston/register/" variant="secondary" size="md">
                  View program
                </Button>
                */}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 text-white">
        <div className="container-sm py-16 text-center">
          <h2 className="typo-display2">
            Immerse yourself in a vibrant atmosphere of knowledge exchange, networking, and collaboration, as we shape
            the path to revolutionary discoveries in the life sciences and more.
          </h2>
        </div>
      </div>
      <div className="container-lg text-white">
        <div className="row">
          <div className="col-full lg:col-6 bg-red-300">

          </div>
          <div className="col-full lg:col-6 py-16">
            <div className="px-4 lg:px-12">
              <h2 className="typo-display1">
                20+ Speakers
              </h2>
              <p className="typo-body mt-2">
                This year we are thrilled to have <strong>Erik Garrison</strong> join us as keynote speaker, author of the recent <Link to="https://www.nature.com/articles/s41586-023-05896-x">Nature paper</Link> <em>“A draft human pangenome reference”</em>.
              </p>
              <p className="typo-body mt-2">
                Stay tuned for more exciting announcements of our distinguished speakers. Until then, you can watch the talks from last year below:
              </p>
              <div className="mt-8">
                <Button to="https://www.youtube.com/playlist?list=PLPZ8WHdZGxmUdAJlHowo7zL2pN3x97d32" variant="secondary" size="md">
                  Watch talks from 2022
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendaPage;
