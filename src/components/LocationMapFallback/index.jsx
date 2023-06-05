import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const LocationMapFallback = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "visuals/map.png"}) {
                childImageSharp {
                    fluid {
                        base64
                    }
                }
            }
        }
    `);

    return (
        <img
            className="h-full w-full object-cover"
            src={data?.file?.childImageSharp?.fluid?.base64}
            alt="Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain"
        />
    );
};

export default LocationMapFallback;
