import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import Seo from '../../components/Seo';
import ContactUs from '../../components/ContactUs';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "photos/agenda-barcelona.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `);
  return (
    <>
      <Seo title="Nextflow SUMMIT 2023 Blog" />
      <div className="pt-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1 mb-4">The SUMMIT Blog</h1>
              <p className="typo-body max-w-3xl mb-4">
                From exclusive behind-the-scenes coverage to must-know information, the SUMMIT blog is your ultimate
                guide to making the most of the summit in Barcelona and Boston.
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
      Blog content
      <ContactUs />
    </>
  );
};

export default Blog;
