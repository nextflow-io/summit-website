import React from "react";
import AgendaPage from "../../../modules/AgendaPage";
import { useStaticQuery, graphql } from "gatsby";

const SummitOct18 = () => {
  const data = useStaticQuery(graphql`
    query {
      talks: allTalk(
        filter: { date: { eq: "Oct 18, 2023" }, isChild: { ne: true } }
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
          talks {
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
  return <AgendaPage showEvents eventData={data?.talks?.nodes} />;
};

export default SummitOct18;
