import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';

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
      tags: allPoster {
        group(field: tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  const [ activeTag, setActiveTag ] = useState('');

  const isFiltered = (poster) => {
    if (activeTag === '') {
      return false;
    }

    if (poster.tags && poster.tags.length > 0) {
      return !poster.tags.includes(activeTag);
    }

    return true;
  }

  const posters = data.posters.nodes;
  const tags = data.tags.group;

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
            Call for abstracts
          </Button>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row mt-4">
            <div className="col-full lg:col-10">
              <div className="row">
                {posters.map((poster) => (
                  <div className={classnames('col-full lg:col-6 mt-4', {
                    'hidden': isFiltered(poster),
                  })}>
                    <PosterCard
                      poster={poster}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block lg:col-2 mt-4">
              <div>
                <button
                  aria-label="All topics"
                  className={classnames(
                    'typo-small rounded-full px-4 py-1 uppercase mr-2',
                    {
                      'bg-green-600': activeTag === '',
                      'bg-gray-800': activeTag !== '',
                    }
                  )}
                  onClick={() => { setActiveTag('') }}
                >
                  All topics
                </button>
              </div>
              {data.tags.group.map(({ tag }) => (
                <div className="mt-2">
                  <button
                    aria-label={tag}
                    className={classnames(
                      'typo-small rounded-full px-4 py-1 uppercase mr-2',
                      {
                        'bg-green-600': activeTag === tag,
                        'bg-gray-800': activeTag !== tag,
                      }
                    )}
                    onClick={() => { setActiveTag(tag) }}
                  >
                    {tag}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostersPage;
