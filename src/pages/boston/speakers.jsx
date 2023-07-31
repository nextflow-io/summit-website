import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import { Button } from 'website-components';

import Seo from '../../components/Seo';
import SpeakerCard from '../../components/SpeakerCard';

const SpeakersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      speakers: allPeople(sort: { name: ASC }, filter: { attending: { in: ["Boston", "Both"] } }) {
        nodes {
          slug
          name
          position
          tags
          github
          linkedin
          twitter
          attending
          image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
      heroImage: file(relativePath: { eq: "photos/speakers-barcelona.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Nextflow Summit 2023 Speakers" />
      <div className="pt-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2 mb-4">More than 25 speakers to look forward to</h1>
              <p className="typo-body max-w-xl mb-6 mx-auto">
                The call for speakers and posters will remain open until September 9 or until all places are filled.
              </p>
              <Button to="/call-for-abstracts/posters-instructions/" variant="primary" size="lg">
                Call for abstracts - posters
              </Button>
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
      <div className="py-20 bg-gray-900 text-white">
        <h2 className="typo-h5 uppercase text-center mb-10">Speakers</h2>
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-full lg:col-9">
              {data.speakers.nodes.map((speaker, i) => (
                <SpeakerCard speaker={speaker} className="mt-10 first:mt-0" key={i} />
              ))}
              <div className="bg-black text-white border border-gray-700 rounded-md mt-10 p-6">
                <h3 className="typo-h4 text-green-300 mb-4">More coming soon</h3>
                <p className="typo-body">More presenters will be announced soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
