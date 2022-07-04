import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';

const SpeakerPage = ({ data }) => {
  const { speaker } = data;

  return (
    <>
      <Seo
        title={speaker.meta.title}
        description={speaker.meta.description}
      />
      <div className="container-md py-10 md:py-20">
        <h1 className="typo-h1">
          {speaker.title}
        </h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {speaker.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
      </div>
    </>
  )
};

export default SpeakerPage;

export const pageQuery = graphql`
  query($slug: String!) {
    speaker: people(slug: { eq: $slug }) {
      name
      content {
        body
      }
      meta {
        title
        description
      }
    }
  }
`;
