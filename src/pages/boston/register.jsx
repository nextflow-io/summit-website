import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import React from 'react';

import {
  Button,
  List,
} from 'website-components';

import Card from '../../components/Card';
import HeroDots from '../../components/HeroDots';
import Seo from '../../components/Seo';

const RegisterPage = () => {
  const data = useStaticQuery(graphql`
    query {
      membersImage: file(relativePath: {eq: "photos/members-boston.jpg"}) {
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
        title="Register"
      />
      <HeroDots className="text-center" variant="red">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-display1">
              Join the Nextflow SUMMIT and <span style={{ whiteSpace: "nowrap" }}>nf-core</span> Hackathon
            </h1>
            <div className="max-w-xl mx-auto mt-4">
              <p className="typo-body">
                Places are limited, so register now to reserve your spot.
              </p>
              <p className="typo-body">
                Registration closes September 9, or when sold out.
              </p>
            </div>
            <div className="mt-4">
              <Button to="/boston/purchase/" variant="primary" size="md">
                Register
              </Button>
            </div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16">
        <div className="row justify-center">
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image
                image={getImage(data.membersImage)}
                alt="Members"
                imgClassName="rounded-sm"
              />
              <h2 className="typo-h4 mt-4">
                In-person
              </h2>
              <List type="bullet" iconClassName="text-white" className="mt-8">
                <List.Item className="typo-body">
                  Nextflow SUMMIT - academic: $198 ($250 incl. VAT)
                </List.Item>
                <List.Item className="typo-body">
                  Nextflow SUMMIT  -  corporate: $387 ($490 incl. VAT)
                </List.Item>
                <List.Item className="typo-body">
                  Nextflow SUMMIT  - invited guests: free
                </List.Item>
                <List.Item className="typo-body">
                  nf-core Hackathon: $79 ($100 incl. VAT)
                </List.Item>
              </List>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
