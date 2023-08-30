import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AgendaPage from '../../../../modules/AgendaPage';

const SummitOct18 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(filter: { type: { eq: "talks-boston" }, isChild: { ne: true } }, sort: { datetime: ASC }) {
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
          path
          fullPath
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
            path
            fullPath
          }
        }
      }
    }
  `);
  return <AgendaPage eventLocation="boston" showEvents showAllDays eventData={data?.events?.nodes} />;
};

export default SummitOct18;
