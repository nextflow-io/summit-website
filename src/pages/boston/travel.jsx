import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Link,
  LocationIcon,
  Marquee,
} from 'website-components';

import AccommodationCard from '../../components/AccommodationCard';
import Card from '../../components/Card';
import LaptopIcon from '../../components/icons/LaptopIcon';
import LocationMap from '../../components/LocationMap';
import MountainIcon from '../../components/icons/MountainIcon';
import RegisterCTA from '../../components/RegisterCTA';
import Seo from '../../components/Seo';

const TravelPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/boston.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      hackathonMapImage: file(relativePath: {eq: "maps/barcelona-hackathon.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitMapImage: file(relativePath: {eq: "maps/barcelona-summit.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      bluePattern: file(relativePath: {eq: "visuals/blue-pattern-md.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      accommodations: allAccommodation(
        filter: {location: {eq: "Boston"}}
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
          breakfast
          url
          walkingTime
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Travel to Boston"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1 mb-4">
                Boston
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Boston offers a captivating fusion of historical significance and innovative spirit, making it a dynamic
                center for art and technology. Boston's vibrant atmosphere fosters an environment where art and
                technology coexist, offering a captivating experience for visitors seeking a deep appreciation for both.
              </p>
            </div>
            <div className="col-full lg:col-5 lg:ml-1/12">
              <Image
                image={getImage(data.heroImage)}
                alt="Join us in Barcelona or virtually"
                className="rounded-sm shadow-xl"
                imgClassName="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <Marquee className="typo-body bg-green-300 text-black" to="/boson/call-for-abstracts/" type="reset">
        Call for abstracts now open
      </Marquee>
      <div className="container-md text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Location
          </h2>
        </div>
        <div className="row">
          <div className="col-full lg:col-6 mt-4">
            <Card>
              <div className="text-green-300">
                <LaptopIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Hackathon | Nov 28-29
              </h3>
              <div className="mt-4">
                <LocationMap coordinates={{
                    lat: 42.3512003,
                    lng: -71.0721188,
                  }}
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://goo.gl/maps/GuHdtLUGEEL8ztRQ9">
                    Boston Park Plaza, 50 Park Plaza, Boston, MA 02116, United States
                  </Link>
                </p>
              </div>
            </Card>
          </div>
          <div className="col-full lg:col-6 mt-8 md:mt-4">
            <Card>
              <div className="text-green-300">
                <MountainIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Summit | Nov 29-30
              </h3>
              <div className="mt-4">
                <LocationMap coordinates={{
                    lat: 42.3512003,
                    lng: -71.0721188,
                  }}
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://goo.gl/maps/GuHdtLUGEEL8ztRQ9">
                    Boston Park Plaza, 50 Park Plaza, Boston, MA 02116, United States
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <RegisterCTA />
      <div className="container-lg text-white py-16">
        <h2 className="typo-h2">
          Accommodation
        </h2>
        <p className="typo-body mt-4">
          Hotels close to the venue:
        </p>
        <div className="row">
          {data.accommodations.nodes.map((acc) => (
            <div className="col-full lg:col-4 mt-4">
              <AccommodationCard acc={acc} />
            </div>
          ))}
        </div>
      </div>
      <div className="container-lg py-16">
        <Card paddingClassName="p-0">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/3">
              <Image
                image={getImage(data.bluePattern)}
                alt="blue dots visual"
                className="h-full"
                imgClassName="rounded-t-md md:rounded-tr-none md:rounded-l-md"
              />
            </div>
            <div className="w-full md:w-2/3 py-8 px-8">
              <h2 className="typo-h3">
                Nextflow SUMMIT: Barcelona
              </h2>
              <p className="typo-body mt-4">
                In 2023, we have two Nextflow SUMMIT events - one in Europe and one in the US. See below for more about
                the European event - connect with local users and meet the Nextflow and nf-core teams in Barcelona, the
                birth place of Nextflow.
              </p>
              <div className="mt-16">
                <Button to="/" variant="primary" theme="alternative" size="md" arrow>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TravelPage;
