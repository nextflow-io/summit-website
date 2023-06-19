import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import {
  Button,
  Link,
  LocationIcon,
  Marquee,
} from 'website-components';

import Card from '../../components/Card';
import HackathonIcon from '../../components/icons/HackathonIcon';
import MountainIcon from '../../components/icons/MountainIcon';
import Seo from '../../components/Seo';

const TravelPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
              <h1 className="typo-h2 mb-4">
                Boston
              </h1>
              <p className="typo-body max-w-3xl mb-4">
                Boston offers a unique blend of rich artistic and architectural heritage, serving as a vibrant hub
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
      <div className="container-lg text-white py-16">
        <div className="text-center">
          <h2 className="typo-h6 uppercase">
            Location
          </h2>
        </div>
        <div className="row">
          <div className="col-full lg:col-6 mt-4">
            <Card>
              <div className="text-green-300">
                <HackathonIcon />
              </div>
              <h3 className="typo-h4 mt-4">
                Hackathon | Oct 16-18
              </h3>
              <div className="mt-4">
                <Image
                  image={getImage(data.hackathonMapImage)}
                  alt="Hackathon"
                  imgClassName="rounded-sm"
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://www.google.com/maps/place/Torre+Glòries/@41.4034089,2.1874044,17z/data=!3m2!4b1!5s0x12a4a29400221bfb:0x9fc1000420ad7d81!4m5!3m4!1s0x12a4a323dbd5241d:0x95abc33040714e90!8m2!3d41.4034049!4d2.1895931">
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
                <Image
                  image={getImage(data.summitMapImage)}
                  alt="Hackathon"
                  imgClassName="rounded-sm"
                />
              </div>
              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <LocationIcon />
                </div>
                <p className="typo-body">
                  <Link to="https://www.google.com/maps/place/Torre+Glòries/@41.4034089,2.1874044,17z/data=!3m2!4b1!5s0x12a4a29400221bfb:0x9fc1000420ad7d81!4m5!3m4!1s0x12a4a323dbd5241d:0x95abc33040714e90!8m2!3d41.4034049!4d2.1895931">
                    Torre Glories, Avinguda Diagonal, 211, 08018 Barcelona, Spain
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 text-white">
        <div className="container-lg py-16 text-center">
          <h2 className="typo-h2">
            Step into the future of data-driven science at the Nextflow SUMMIT
            <br />
            held in Barcelona, October 16-20.
          </h2>
          <div className="mt-4">
            <Button to="/boston/register/" variant="accent" size="md">
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPage;
