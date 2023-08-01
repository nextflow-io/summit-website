import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AgendaPage from '../../../../modules/AgendaPage';

const HackathonOct16 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(filter: { type: { eq: "events-boston" }, isChild: { ne: true } }, sort: { datetime: ASC }) {
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
            speakers {
              name
              image {
                childImageSharp {
                  gatsbyImageData(height: 32, placeholder: NONE, width: 32)
                }
              }
            }
          }
        }
      }
    }
  `);
  return <AgendaPage location="boston" showEvents showAllDays eventData={data?.events?.nodes} eventType="hackathon" />;
};

export default HackathonOct16;
