import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AgendaPage from '../../../../modules/AgendaPage';

const SummitOct19 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(
        filter: { date: { eq: "Nov 30, 2023" }, type: { eq: "talks-boston" }, isChild: { ne: true } }
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
  return <AgendaPage eventLocation="boston" showEvents eventData={data?.events?.nodes} />;
};

export default SummitOct19;
