import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Link, List } from 'website-components';

import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';
import PlaceholderRectangle from '../../images/visuals/placeholder-rectangle.svg';

const CallForAbstractsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      summitImage: file(relativePath: {eq: "photos/summit.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      churchImage: file(relativePath: {eq: "photos/church.png"}) {
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
        title="Nextflow Summit 2022 Speakers"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            Call for abstracts open
          </h1>
          <p className="typo-body max-w-md mb-8 mx-auto">
            Submit your talk or poster for one of the key themes: Nextflow, community, ecosystem, or software.
          </p>
          <p className="typo-body">
            June 17 - July 22, 2022: Call for abstracts
          </p>
          <p className="typo-body max-w-xl mb-6 mx-auto">
            Abstracts will be read and speakers notified on a rolling basis, so apply soon! Accepted speakers will be
            notified by July 29.
          </p>
          <Button to="https://seqera.typeform.com/summit-22-talks" variant="accent" size="md" arrow>
            Apply now
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row flex-wrap lg:flex-nowrap">
            <div className="col-full lg:col-6 order-2 lg:order-1 mt-4 lg:mt-0">
              <h2 className="typo-h2 mb-4">
                Talks and posters
              </h2>
              <p className="typo-body mb-4">
                Submit an abstract to present a talk or poster at the Nextflow Summit:
              </p>
              <List type="bullet" iconClassName="text-white" className="mb-6">
                <List.Item className="typo-body">
                  Talks – presented in person in Barcelona
                </List.Item>
                <List.Item className="typo-body">
                  Posters - presented in person or virtually
                </List.Item>
              </List>
              <Button to="/call-for-abstracts/instructions/" size="md" variant="secondary">
                View instructions
              </Button>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12 order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <Image
                  image={getImage(data.summitImage)}
                  className="w-full relative lg:top-6 lg:left-6"
                  imgClassName="rounded-sm"
                  alt="Summit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-full lg:col-6 lg:-ml-1/12">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <Image
                  image={getImage(data.churchImage)}
                  className="w-full relative lg:top-6 lg:-left-6"
                  imgClassName="rounded-sm"
                  alt="Church"
                />
              </div>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12 mt-4 lg:mt-0">
              <h2 className="typo-h2 mb-4">
                Travel bursaries
              </h2>
              <p className="typo-body mb-4">
                If you are presenting a talk or poster you can apply for a bursary to help with travel, accommodation,
                and registration costs thanks to funding from the Chan Zuckerberg Initiative EOSS Diversity & Inclusion
                grant.
              </p>
              <p className="typo-body">
                Five bursaries are available and will cover up to $1500 USD + registration costs. If you’re interested,
                select this option when submitting your abstract. We will be in touch via email after abstracts have
                been selected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForAbstractsPage;
