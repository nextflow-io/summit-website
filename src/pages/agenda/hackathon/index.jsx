import React from "react";
import AgendaPage from "../../../modules/AgendaPage";
import { useStaticQuery, graphql } from "gatsby";

const HackathonOct16 = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allEvent(
        filter: { date: { eq: "Oct 16, 2023" }, isChild: { ne: true } }
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
  console.log(">>", data);
  return <AgendaPage showEvents eventData={data?.events?.nodes} />;
};

export default HackathonOct16;
