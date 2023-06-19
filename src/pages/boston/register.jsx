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
      membersImage: file(relativePath: {eq: "photos/members.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      virtualImage: file(relativePath: {eq: "photos/virtual.jpg"}) {
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
        title="Call for abstracts"
      />
      <HeroDots className="text-center">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-h2">
              Join the Nextflow SUMMIT and nf-core Hackathon
            </h1>
            <p className="typo-body max-w-xl mx-auto mt-4">
              Places are limited, so register now to reserve your spot. Registration closes September 9, or when sold out.
            </p>
            <div className="mt-4">
              <Button to="/program/" variant="accent" size="md">
                Register
              </Button>
            </div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16">
        <div className="row">
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
                  Nextflow SUMMIT - academic: €149 (€180 incl. VAT)
                </List.Item>
                <List.Item className="typo-body">
                  Nextflow SUMMIT  -  corporate: €349 (€422 incl. VAT)
                </List.Item>
                <List.Item className="typo-body">
                  Nextflow SUMMIT  - invited guests: free
                </List.Item>
                <List.Item className="typo-body">
                  nf-core Hackathon: €49 (€59 incl. VAT)
                </List.Item>
              </List>
            </Card>
          </div>
          <div className="col-full lg:col-6">
            <Card className="h-full">
              <Image
                image={getImage(data.virtualImage)}
                alt="Virtual"
                imgClassName="rounded-sm"
              />
              <h2 className="typo-h4 mt-4">
                Virtual
              </h2>
              <List type="bullet" iconClassName="text-white" className="mt-8">
                <List.Item className="typo-body">
                  Nextflow SUMMIT: free
                </List.Item>
                <List.Item className="typo-body">
                  nf-core Hackathon: free
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