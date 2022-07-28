import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import { Button, Card, Link, List, LocationIcon, YoutubeRectangleIcon } from 'website-components';

import EventCard from '../../components/EventCard';
import Tabs from '../../components/Tabs';
import Seo from '../../components/Seo';

import LogoNextflow from '../../images/logo-nextflow.svg';

const ProgramPage = ({ location }) => {
  const [ activeTag, setActiveTag ] = useState('');

  const data = useStaticQuery(graphql`
    query {
      events: allEvent(filter: {date: {eq: "Oct 12, 2022"}}, sort: {fields: datetime}) {
        nodes {
          timeframe
          title
          description
          date
          time
          tags
          location
          locationUrl
          youtube
          youtubeUrl
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
      tags: allEvent(filter: {date: {eq: "Oct 12, 2022"}}) {
        group(field: tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  const isFiltered = (event) => {
    if (activeTag === '') {
      return false;
    }

    if (event.tags && event.tags.length > 0) {
      return !event.tags.includes(activeTag);
    }

    return true;
  }

  const events = data.events.nodes;

  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Program"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            A week of Nextflow goodness
          </h1>
          <p className="typo-body max-w-2xl mx-auto mb-4">
            We believe that the Nextflow Summit should be available to everyone, everywhere. That’s why the Nextflow
            Summit and nf-core Hackathon will be streamed live and presentations made available after the event.
          </p>
          <p className="typo-body max-w-2xl mx-auto mb-4">
            Nextflow Summit begins at 5:00&nbsp;PM CET on Wednesday, October&nbsp;12, and closes 2:30&nbsp;PM CET Friday, October&nbsp;14.
          </p>
          <Button to="/assets/program.pdf" variant="accent" size="md">
            Download program PDF
          </Button>
        </div>
      </div>
      <div id="events" className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-full lg:col-9 lg:ml-1/12">
              <div>
                <Tabs location={location} anchor="#events">
                  <Tabs.Item to="/program/nf-core-hackathon/">
                    nf-core Hackathon
                  </Tabs.Item>
                  <Tabs.Item to="/program/">
                    Nextflow Summit
                  </Tabs.Item>
                  <Tabs.Item to="/program/community-events/">
                    Community Events
                  </Tabs.Item>
                </Tabs>
              </div>
              <div className="mt-1">
                <Tabs location={location} anchor="#events">
                  <Tabs.Item to="/program/">
                    Wed, Oct 12
                  </Tabs.Item>
                  <Tabs.Item to="/program/oct-13/">
                    Thu, Oct 13
                  </Tabs.Item>
                  <Tabs.Item to="/program/oct-14/">
                    Fri, Oct 14
                  </Tabs.Item>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="hidden lg:block col-1">
              <div className="h-full w-px border-l border-white border-dashed mx-auto mt-4" />
              <span className="block typo-body text-center">end</span>
            </div>
            <div className="col-full lg:col-9">
              {events.map((event) => (
                <EventCard
                  event={event}
                  hidden={isFiltered(event)}
                />
              ))}
            </div>
            <div className="hidden lg:block lg:col-2 mt-4">
              <h3 className="typo-intro mb-4">
                Explore key topics:
              </h3>
              <div className="mt-2">
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

export default ProgramPage;
