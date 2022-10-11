import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Accordion, Link, List, LocationIcon } from 'website-components';

import AccommodationCard from '../components/AccommodationCard';
import LocationMap from '../components/LocationMap';
import Seo from '../components/Seo';

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
      sustainabilityImage: file(relativePath: {eq: "photos/sustainability.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      promotedAccommodations: allAccommodation(
        filter: {promotionCode: {eq: "NEXTFLOW22"}}
      ) {
        nodes {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 850
              )
            }
          }
          stars
          url
          breakfast
          walkingTime
          adultOne
          adultsTwo
          tax
          promotionCode
        }
      }
      otherAccommodations: allAccommodation(
        filter: {promotionCode: {ne: "NEXTFLOW22"}}
      ) {
        nodes {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
              )
            }
          }
          stars
          url
          breakfast
          walkingTime
          adultOne
          adultsTwo
          tax
          promotionCode
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
                is situated in the technological district and has become an important element in the city's urban
                landscape, especially when it's lit up at night.
              </p>
              <h2 className="typo-h2 mb-4">
                Shôko
              </h2>
              <p className="typo-body">
                <Link to="https://g.page/shokobarcelona" className="hover:text-green-600">
                  Shôko, Passeig Marítim de la Barceloneta, 36, 08005 Barcelona, Spain
                </Link>
                <LocationIcon className="inline-block w-6 h-6 ml-2" />
              </p>
              <p className="typo-body mb-4">
                Summit dinner - Thu, Oct 13
              </p>
              <p className="typo-body mb-4">
                The Nextflow Summit dinner will be held at Shôko, a cosmopolitan Restaurant &amp; Lounge Club,
                located in one of the most attractive areas of the city, the Paseo Marítimo de la Barceloneta,
                with amazing views to the Mediterranean Sea.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Local information
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
                    Health and safety (COVID-19)
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                    Travel and testing requirements for entry into Spain vary by country. For those entering Spain from
                    an EU Member State or Schengen Associated country the COVID-19 travel restrictions have been lifted
                    and providing proof of vaccination, recovery from COVID-19 or negative test results is no longer
                    required. For those entering Spain from outside an EU Member State or Schengen Associated country
                    some COVID-19 travel restrictions still apply and providing proof of vaccination, recovery from
                    COVID-19 or negative test results is still required. Please note that wearing facemasks is
                    compulsory on all means of public transport in Spain.
                  </p>
                  <p className="typo-body">
                    Up-to-date information on health measures, travel restrictions, and mask wearing can be found at
                    {' '}
                    <Link to="https://reopen.europa.eu/">
                      Re-open EU
                    </Link>
                    .
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
                    Visas
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                    EU citizens do not need a visa to visit Barcelona. Citizens of non-EU countries may require a visa
                    and must possess a passport valid for at least three months. Please check the entry requirements
                    for Spain to review visa rules for your own situation.
                  </p>
                  <p className="typo-body">
                    If you need to apply for a visa to enter Spain we can issue you with a personalized invitation
                    letter to assist your application. If this pertains to you please contact us by email at
                    {' '}
                    <Link to="mailto:hr@seqera.io">
                      hr@seqera.io
                    </Link>
                    .
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
                    From Barcelona Sants Train Station
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body">
                    Barcelona Sants is the main railway station in Barcelona. It has direct rail links with other
                    European cities, including Paris, Zurich, and Milan, and high-speed trains to other major centers in
                    Spain. The city center can be reached easily from Barcelona Sants using public transport. Tickets
                    for local public transport can be purchased from the station.
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
                    City transport
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
              <Accordion.Item
                className="border border-gray-800"
                iconClassName="text-green-500"
                activeIconClassName="text-white"
              >
                <Accordion.Summary>
                  <p className="typo-intro">
                    Code of Conduct
                  </p>
                </Accordion.Summary>
                <Accordion.Detail>
                  <p className="typo-body mb-4">
                  <List type="bullet" iconClassName="text-white" className="mb-6">
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Be nice and respectful to others
                      </span>
                    </List.Item>
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Collaborate to create a safe and supportive environment for all participants
                      </span>
                    </List.Item>
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Refrain from harassing speech, content, and other unwelcome behaviour
                      </span>
                    </List.Item>
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Be open to alternate points of view
                      </span>
                    </List.Item>
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Respect the privacy of others
                      </span>
                    </List.Item>
                    <List.Item className="typo-body">
                      <span className="mr-2">
                        Comply with the instructions of the event staff and alert us if something is wrong
                      </span>
                    </List.Item>
                  </List>
                  </p>
                  <p className="typo-body">
                    You can check the full version of the Code of Conduct clicking
                    {' '}
                    <Link to="/assets/code_of_conduct.pdf">
                      here
                    </Link>
                    .
                  </p>
                </Accordion.Detail>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Accommodation
          </h2>
          <div className="mt-8">
            <h3 className="typo-h5">
              Hotels with promotion code: NEXTFLOW22 for dates: 10-14 October 2022
            </h3>
            <div className="row">
              {data.promotedAccommodations.nodes.map((acc) => (
                <div className="col-full lg:col-4 mt-4">
                  <AccommodationCard acc={acc} />
                </div>
              ))}
            </div>
            <h3 className="typo-h5 mt-8">
              Nearby hotels without promotion code
            </h3>
            <div className="row">
              {data.otherAccommodations.nodes.map((acc) => (
                <div className="col-full lg:col-4 mt-4">
                  <AccommodationCard acc={acc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row flex-wrap lg:flex-nowrap">
            <div className="col-full lg:col-6 order-2 lg:order-1 mt-4 lg:mt-0">
              <h2 className="typo-h2 mb-4">
                Sustainability
              </h2>
              <p className="typo-body mb-4">
                The nf-core Hackathon and Nextflow Summit are committed to minimizing their environmental footprints.
              </p>
              <List type="bullet" iconClassName="text-white" className="mb-6">
                <List.Item className="typo-body">
                  Both events will limit packaging, single use products, and where possible, utilize compostable materials.
                </List.Item>
                <List.Item className="typo-body">
                  Printing of programmes and promotional material will be kept to a minimum with all conference material also being made available online.
                </List.Item>
                <List.Item className="typo-body">
                  In-person attendees are encouraged to make environmentally sustainable travel choices by utilizing public transport and making use of green initiatives at hotels.
                </List.Item>
                <List.Item className="typo-body">
                  Provided catering offers vegan options with a smaller environmental footprint.
                </List.Item>
                <List.Item className="typo-body">
                  All attendees are  encouraged to make an optional donation towards sustainability during the registration process.
                </List.Item>
              </List>
            </div>
            <div className="col-full lg:col-6 lg:ml-1/12 order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-sm"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <Image
                  image={getImage(data.sustainabilityImage)}
                  className="w-full relative lg:top-6 lg:left-6"
                  imgClassName="rounded-sm"
                  alt="Sustainability"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanuePage;
