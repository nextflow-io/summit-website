import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import React from 'react';

import { Button, Link, List } from 'website-components';

import Card from '../../../components/Card';
import HeroDots from '../../../components/HeroDots';
import Seo from '../../../components/Seo';
import ContactUs from '../../../components/ContactUs';

const CallForAbstractsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      talksImage: file(relativePath: { eq: "photos/talks.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      postersImage: file(relativePath: { eq: "photos/posters.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Call for abstracts" />
      <HeroDots className="text-center">
        <div className="container-lg relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-display1">Call for abstracts is now closed</h1>
            <p className="typo-body mt-4">
              The final abstracts will be accepted and presenters notified in mid August.
            </p>
            <div className="mt-4"></div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16">
        <div className="row">
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image image={getImage(data.talksImage)} alt="Talks" imgClassName="rounded-sm" />
              <h2 className="typo-h4 mt-4">Talks</h2>
              <h3 className="typo-intro mt-8">Where</h3>
              <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
                <List.Item className="typo-body">In person at the Nextflow SUMMIT</List.Item>
                <List.Item className="typo-body">Streamed live and available to watch online after the event</List.Item>
              </List>
              <h3 className="typo-intro mt-8">Formats</h3>
              <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
                <List.Item className="typo-body">Long-form (30 min)</List.Item>
                <List.Item className="typo-body">Lightning (15 min)</List.Item>
              </List>
              <div className="typo-body mt-4">
                <Link to="/barcelona/call-for-abstracts/talks-instructions/" className="text-green-300" noBorder>
                  View instructions
                </Link>
              </div>
            </Card>
          </div>
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image image={getImage(data.postersImage)} alt="Posters" imgClassName="rounded-sm" />
              <h2 className="typo-h4 mt-4">Posters</h2>
              <h3 className="typo-intro mt-8">Where</h3>
              <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
                <List.Item className="typo-body">Poster session at the Nextflow SUMMIT</List.Item>
                <List.Item className="typo-body">Nextflow SUMMIT website during and after the event</List.Item>
              </List>
              <h3 className="typo-intro mt-8">Formats</h3>
              <List type="bullet" iconClassName="text-white" className="mt-4" shrink>
                <List.Item className="typo-body">An A0 portrait printed poster</List.Item>
                <List.Item className="typo-body">PDF file for the website</List.Item>
              </List>
              <div className="typo-body mt-4">
                <Link to="/barcelona/call-for-abstracts/posters-instructions/" className="text-green-300" noBorder>
                  View instructions
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default CallForAbstractsPage;
