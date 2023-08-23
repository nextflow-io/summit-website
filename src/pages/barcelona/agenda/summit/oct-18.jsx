import React from 'react';
import AgendaPage from '../../../../modules/AgendaPage';
import { useStaticQuery, graphql } from 'gatsby';

const SummitOct18 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(
        filter: { date: { eq: "Oct 18, 2023" }, type: { eq: "talks" }, isChild: { ne: true } }
        sort: { datetime: ASC }
      ) {
        nodes {
          slug
          id
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
          hasPage
          events {
            slug
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
            hasPage
          }
        }
      }
    }
  `);
  return <AgendaPage showEvents eventData={data?.events?.nodes} />;
};

export default SummitOct18;
