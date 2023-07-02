import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import React from 'react';

import {
  Button,
  List,
} from 'website-components';

import Card from '../components/Card';
import HeroDots from '../components/HeroDots';
import Seo from '../components/Seo';

const CallForAbstractsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      talksImage: file(relativePath: {eq: "photos/talks.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      postersImage: file(relativePath: {eq: "photos/posters.jpg"}) {
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
        title="Call for abstracts"
      />
      <HeroDots className="text-center">
        <div className="container-lg relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-display1">
              Call for abstracts open
            </h1>
            <p className="typo-body mt-4">
              Act fast as abstracts will be reviewed and presenters will be notified on an ongoing basis. Final
              abstracts will be accepted and presenters will be notified by early August.
            </p>
            <div className="mt-4">
              <Button to="https://form.typeform.com/to/hVPzQTbf" variant="accent" size="md">
                Apply now
              </Button>
            </div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16">
        <div className="row">
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image
                image={getImage(data.talksImage)}
                alt="Talks"
                imgClassName="rounded-sm"
              />
              <h2 className="typo-h4 mt-4">
                Talks
              </h2>
              <h3 className="typo-intro mt-8">
                Themes
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  Nextflow - central tool, language, and plugins
                </List.Item>
                <List.Item className="typo-body">
                  Community - pipelines, applications, and use cases
                </List.Item>
                <List.Item className="typo-body">
                  Ecosystem - infrastructure and environments
                </List.Item>
                <List.Item className="typo-body">
                  Software - containers and tool packaging
                </List.Item>
              </List>
              <h3 className="typo-intro mt-8">
                Where
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  In person and recorded for live streaming and sharing online after the event
                </List.Item>
              </List>
              <h3 className="typo-intro mt-8">
                Formats
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  Long-form - 30 min, including time for Q&A
                </List.Item>
                <List.Item className="typo-body">
                  Lightning - 15 min, including time for Q&A
                </List.Item>
              </List>
            </Card>
          </div>
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image
                image={getImage(data.postersImage)}
                alt="Posters"
                imgClassName="rounded-sm"
              />
              <h2 className="typo-h4 mt-4">
                Posters
              </h2>
              <h3 className="typo-intro mt-8">
                Themes
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  Nextflow - central tool, language, and plugins
                </List.Item>
                <List.Item className="typo-body">
                  Community - pipelines, applications, and use cases
                </List.Item>
                <List.Item className="typo-body">
                  Ecosystem - infrastructure and environments
                </List.Item>
                <List.Item className="typo-body">
                  Software - containers and tool packaging
                </List.Item>
              </List>
              <h3 className="typo-intro mt-8">
                Where
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  Poster session at the Nextflow SUMMIT
                </List.Item>
                <List.Item className="typo-body">
                  Nextflow SUMMIT website during and after the event
                </List.Item>
              </List>
              <h3 className="typo-intro mt-8">
                Formats
              </h3>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  A printed A0 portrait formatted (max 841 x 1188 mm) poster
                </List.Item>
                <List.Item className="typo-body">
                  A high-quality A0 portrait formatted PDF file
                </List.Item>
              </List>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForAbstractsPage;
