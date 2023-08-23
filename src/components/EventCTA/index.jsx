import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Link, Reveal, RevealOnScroll } from 'website-components';

import NextflowLogo from '../NextflowLogo';

const EventCTA = () => {
  const data = useStaticQuery(graphql`
    query {
      bluePattern: file(relativePath: { eq: "visuals/blue-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      redPattern: file(relativePath: { eq: "visuals/red-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  return (
    <div className="bg-halfs from-green-300 to-indigo-800">
      <div className="container-xl">
        <div className="row">
          <div className="col-full lg:col-4 bg-green-300 text-indigo-800 py-14">
            <h2 className="typo-display1">
              SUMMIT 2023
              <br />2 locations:
            </h2>
            <div className="flex">
              <div className="mr-4 mt-8">
                <Button to="/barcelona/" variant="primary" theme="alternative" size="md" arrow>
                  Barcelona
                </Button>
              </div>
              <div className="mt-8">
                <Button to="/boston/" variant="secondary" theme="alternative" size="md" arrow>
                  Boston
                </Button>
              </div>
            </div>
          </div>
          <div className="col-full lg:col-8 bg-indigo-800 py-14">
            <div className="px-8">
              <RevealOnScroll className="row">
                <Reveal className="col-full lg:col-6">
                  <Link
                    to="/barcelona/"
                    className="block bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden"
                  >
                    <Image
                      image={getImage(data.bluePattern)}
                      alt="blue dots visual"
                      className="h-48"
                      imgClassName="rounded-t-md"
                    />
                    <div className="px-4 py-6 lg:p-8">
                      <div>
                        <NextflowLogo className="h-10 text-white mx-auto" />
                      </div>
                      <h3 className="text-center mt-4">
                        <span className="typo-h4 text-white mr-4">SUMMIT</span>
                        <span className="typo-blockquote text-blue-600 italic">Barcelona</span>
                      </h3>
                      <p className="typo-intro text-center uppercase mt-8">
                        In person
                        <span className="mx-2">|</span>
                        Virtual
                      </p>
                      <p className="typo-intro text-center">Barcelona, October 16-20, 2023</p>
                    </div>
                  </Link>
                </Reveal>
                <Reveal className="col-full lg:col-6 mt-8 lg:mt-0">
                  <Link
                    to="/boston/"
                    className="block bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden"
                    noBorder
                  >
                    <Image
                      image={getImage(data.redPattern)}
                      alt="red dots visual"
                      className="h-48"
                      imgClassName="rounded-t-md"
                    />
                    <div className="px-4 py-6 lg:p-8">
                      <div>
                        <NextflowLogo className="h-10 text-white mx-auto" />
                      </div>
                      <h3 className="text-center mt-4">
                        <span className="typo-h4 text-white mr-4">SUMMIT</span>
                        <span className="typo-blockquote text-red-300 italic">Boston</span>
                      </h3>
                      <p className="typo-intro text-center uppercase mt-8">In person</p>
                      <p className="typo-intro text-center">Boston, November 28-30, 2023</p>
                    </div>
                  </Link>
                </Reveal>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCTA;
