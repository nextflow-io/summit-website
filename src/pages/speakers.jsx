import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/Seo";
import SpeakerCard from "../components/SpeakerCard";

import PlaceholderVisual from "../images/placeholder.svg";

const SpeakersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      speakers: allPeople(sort: { name: ASC }) {
        nodes {
          slug
          name
          position
          tags
          github
          linkedin
          twitter
          image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Nextflow Summit 2023 Speakers" />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            More than 25 speakers to look forward to
          </h1>
          <p className="typo-body max-w-xl mb-6 mx-auto">
            Nextflow Summit begins at 5:00&nbsp;PM CET on Wednesday,
            October&nbsp;12, and closes 1:30&nbsp;PM CET Friday,
            October&nbsp;14.
          </p>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-full lg:col-9">
              {data.speakers.nodes.map((speaker, i) => (
                <SpeakerCard
                  speaker={speaker}
                  className="mt-4 first:mt-0"
                  key={i}
                />
              ))}
              <div className="bg-black text-white border border-gray-800 rounded-md overflow-hidden mt-4">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img
                      src={PlaceholderVisual}
                      className="w-full h-full"
                      alt="Gradient"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-6 inline-flex flex-col">
                    <h3 className="typo-h4 text-green-600 mb-4">
                      More coming...
                    </h3>
                    <p className="typo-body mb-4">
                      More presenters will be announced soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
