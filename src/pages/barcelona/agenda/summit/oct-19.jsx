import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AgendaPage from '../../../../modules/AgendaPage';

const SummitOct19 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(
        filter: { date: { eq: "Oct 19, 2023" }, type: { eq: "talks" }, isChild: { ne: true } }
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
          path
          fullPath
          is_keynote
          is_sponsor
          speakers {
            name
            image {
              childImageSharp {
                gatsbyImageData(height: 32, placeholder: NONE, width: 32)
              }
            }
          }
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
            is_keynote
            is_sponsor
          }
        }
      }
    }
  `);
  return <AgendaPage showEvents eventData={data?.events?.nodes} />;
};

export default SummitOct19;