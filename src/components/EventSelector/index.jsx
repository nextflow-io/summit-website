import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import EventCard from './EventCard';

const EventSelector = () => {
  const data = useStaticQuery(graphql`
    query {
      bluePattern: file(relativePath: { eq: "visuals/blue-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      redPattern: file(relativePath: { eq: "visuals/red-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
  return (
    <div className="container-lg py-20 text-white text-center">
      <h1 className="typo-h3 mb-8">Nextflow 2023</h1>
      <p className="typo-body text-lg">
        There were two Nextflow SUMMIT events in 2023. Join us in Barcelona or Boston!
      </p>
      <div className="flex flex-wrap mt-12">
        <div className="w-full md:w-1/2 p-2">
          <EventCard
            img={getImage(data.bluePattern)}
            location="Barcelona"
            to="/barcelona/"
            date="Barcelona, October 16-20, 2023"
            color="text-blue-600"
          >
            <p className="typo-intro uppercase mt-8 opacity-80">
              In person
              <span className="mx-2 opacity-50">|</span>
              Virtual
            </p>
          </EventCard>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <EventCard
            img={getImage(data.redPattern)}
            location="Boston"
            to="/boston/"
            date="Boston, November 28-30, 2023"
          >
            <p className="typo-intro uppercase mt-8 opacity-80">In person</p>
          </EventCard>
        </div>
      </div>
    </div>
  );
};

export default EventSelector;
