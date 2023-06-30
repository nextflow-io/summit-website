import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Link,
  LocationIcon,
  Marquee,
} from 'website-components';

import Card from '../components/Card';
import LaptopIcon from '../components/icons/LaptopIcon';
import MountainIcon from '../components/icons/MountainIcon';
import LocationMap from '../components/LocationMap';
import RegisterCTA from '../components/RegisterCTA';
import Seo from '../components/Seo';

const TravelPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "photos/barcelona.jpg"}) {
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
      redPattern: file(relativePath: {eq: "visuals/red-pattern-md.jpg"}) {
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
        title="Travel to Barcelona"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1 mb-4">
                Barcelona
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Barcelona offers a unique blend of rich artistic and architectural heritage, serving as a vibrant hub
                for art and technology. Visiting allows you to explore the birthplace of Nextflow, gaining insights
                into its groundbreaking origins and development.
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
      <Marquee className="typo-body bg-green-300 text-black" to="/call-for-abstracts/" type="reset">
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
                Hackathon | Oct 16-20
              </h3>
              <div className="mt-4">
                <LocationMap
                  coordinates={{
                    lat: 41.4021444,
                    lng: 2.1885241,
                  }}
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://goo.gl/maps/7JNdvsYapPsaasog7">
                    Hotel SB Glow Carrer Badajoz 148-154, 08018 Barcelona, Spain
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
                SUMMIT | Oct 18-20
              </h3>
              <div className="mt-4">
                <LocationMap
                  coordinates={{
                    lat: 41.4034049,
                    lng: 2.1870182,
                  }}
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://goo.gl/maps/DMDJhRJmbof6Lx6E9">
                    Torre Glories, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <RegisterCTA />
      <div className="container-lg py-16">
        <Card paddingClassName="p-0">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/3">
              <Image
                image={getImage(data.redPattern)}
                alt="red dots visual"
                className="h-full"
                imgClassName="rounded-t-md md:rounded-tr-none md:rounded-l-md"
              />
            </div>
            <div className="w-full md:w-2/3 py-8 px-8">
              <h2 className="typo-h3">
                Nextflow SUMMIT: Boston
              </h2>
              <p className="typo-body mt-4">
                In 2023, our event is also coming to the US for the first time. Connect with local users and meet the
                Nextflow / nf-core teams for an unforgettable face-to-face experience!
              </p>
              <div className="mt-16">
                <Button to="/boston/" variant="secondary" theme="alternative" size="md" arrow>
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
