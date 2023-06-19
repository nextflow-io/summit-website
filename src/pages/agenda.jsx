import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Marquee,
} from 'website-components';

import Card from '../components/Card';
import HackathonIcon from '../components/icons/HackathonIcon';
import MountainIcon from '../components/icons/MountainIcon';
import Seo from '../components/Seo';

const AgendaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/agenda.jpg"}) {
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
              <h1 className="typo-h2 mb-4">
                Join us
                <br />
                in Barcelona or virtually
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                This premier event brings together leading experts, innovators, and researchers to showcase the latest
                breakthroughs in workflow management.
              </p>
              <div className="mt-4">
                <Button to="/register/" variant="accent" size="md">
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
      <div className="container-lg text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Program
          </h2>
        </div>
        <div className="row">
          <div className="col-full lg:col-6 mt-4">
            <Card>
              <div className="text-green-300">
                <HackathonIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Hackathon | Oct 16-18
              </h3>
              <p className="typo-intro text-green-300 mt-4">
                2.5 days · 100 people · hackathon
              </p>
              <p className="typo-body mt-4">
                The program will be available once the call for abstracts has closed.
              </p>
              <div className="mt-4">
                <Button to="/register/" variant="secondary" size="md">
                  View program
                </Button>
              </div>
            </Card>
          </div>
          <div className="col-full lg:col-6 mt-8 md:mt-4">
            <Card>
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                SUMMIT | Oct 18-20
              </h3>
              <p className="typo-intro text-green-300 mt-4">
                2.5 days · 200 people · talks, posters and more
              </p>
              <p className="typo-body mt-4">
                The program will be available once the call for abstracts has closed.
              </p>
              <div className="mt-4">
                <Button to="/register/" variant="secondary" size="md">
                  View program
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 text-white">
        <div className="container-lg py-16 text-center">
          <h2 className="typo-h2">
            Immerse yourself in a vibrant atmosphere of knowledge exchange, networking, and collaboration, as we shape
            the path to revolutionary discoveries in the life sciences and more.
          </h2>
        </div>
      </div>
    </>
  );
};

export default AgendaPage;
