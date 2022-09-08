import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import {
  Button,
  List,
} from 'website-components';

import Seo from '../components/Seo';
import PosterCard from '../components/PosterCard';

import LogoNextflow from '../images/logo-nextflow.svg';
import PlaceholderVisual from '../images/placeholder.svg';

const PostersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      posters: allPoster(sort: {fields: title}) {
        nodes {
          slug
          title
          tags
          url
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
              )
            }
          }
          speakers {
            name
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 32
                  placeholder: NONE
                  width: 32
                )
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Posters"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            Posters
          </h1>
          <p className="typo-body max-w-xl mb-6 mx-auto">
            View published posters below and chat to the author in person, or on Gather.town during poster sessions and
            coffee breaks.
          </p>
          <Button to="/call-for-abstracts/" variant="accent" size="md" arrow>
            Call for abstracts - posters
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-full lg:col-10">
              <div className="row">
                {data.posters.nodes.map((poster) => (
                  <div className="col-full lg:col-6 mt-4">
                    <PosterCard
                      poster={poster}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostersPage;
