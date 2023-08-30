import React from 'react';
import AgendaPage from '../../../../modules/AgendaPage';
import { useStaticQuery, graphql } from 'gatsby';

const SummitOct18 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(filter: { isChild: { ne: true }, type: { eq: "talks" } }, sort: { datetime: ASC }) {
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
  return <AgendaPage showEvents showAllDays eventData={data?.events?.nodes} />;
};

export default SummitOct18;
