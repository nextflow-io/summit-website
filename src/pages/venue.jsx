import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Accordion, Button, Link, List, LocationIcon, Marquee } from 'website-components';

import LocationMap from '../components/LocationMap';
import Seo from '../components/Seo';

import LogoNextflow from '../images/logo-nextflow.svg';
import PlaceholderRectangle from '../images/visuals/placeholder-rectangle.svg';

const VanuePage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/barcelona.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Nextflow Summit 2022 Venue"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-h2 mb-4">
                Barcelona
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The
                fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.
                Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. The history museum MUHBA
                includes several Roman archaeological sites and the city was, of course, the birthplace of Nextflow.
              </p>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <Image
                  image={getImage(data.heroImage)}
                  className="w-full relative lg:top-6 lg:left-6"
                  imgClassName="rounded-sm"
                  alt="Barcelona"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee to="/call-for-abstracts/" type="accent">
        <span className="typo-blockquote">
          Call for abstracts now open
        </span>
      </Marquee>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-full lg:col-6 lg:-ml-1/12 order-2 lg:order-1">
              <LocationMap />
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12 order-1 lg:order-2">
              <h2 className="typo-h2 mb-4">
                Torre Glòries
              </h2>
              <p className="typo-body">
                <Link to="https://goo.gl/maps/K3chvdYLa9BfDpaD9" className="hover:text-green-600">
                  Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                </Link>
                <LocationIcon className="inline-block w-6 h-6 ml-2" />
              </p>
              <p className="typo-body mb-4">
                Floor -1 (auditorium, foyer, and restaurants)
              </p>
              <p className="typo-body mb-4">
                Torre Glòries is one of the tallest and most striking skyscrapers in Barcelona. This remarkable building
                is situated in the technological district and has become an important element in the city’s urban
                landscape, especially when it's lit up at night.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Getting there
          </h2>
          <div className="mt-8">
            <Accordion>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    From Barcelona Sants Train Station
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body">
                    Barcelona Sants is the main railway station in Barcelona. It has direct rail links with other European
                    cities, including Paris, Zurich, and Milan, and high-speed trains to other major centers in Spain.
                    The city center can be reached easily from Barcelona Sants using public transport. Tickets for local
                    public transport can be purchased from the station.
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    From Barcelona El Prat Airport
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body">
                    The Aerobus is an express shuttle bus service between Barcelona Airport and Barcelona city center.
                    There are Aerobuses to and from Terminal 1 and Terminal 2. The TMB Airport Bus Number 46 and Night
                    Bus N17 and N16 are also available for transfers between the airport and the city center. TMB buses
                    are cheaper but are also slower, less frequent, and provide less luggage space than the Aerobuses.
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    Getting around El Prat Airport
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body">
                    Mobility in Barcelona is easy as a result of its extensive metro, tram, bus, and the city and
                    suburban rail services. The city also has a public bike hire scheme and more than 200 km of bike
                    lanes, as well as a taxi fleet that includes environmentally friendly options.
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanuePage;
