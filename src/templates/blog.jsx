import React from 'react';
import { graphql } from 'gatsby';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';

import { AngleLeftIcon, Link } from 'website-components';

const BlogPage = ({ data }) => {
  const { blog } = data;

  return (
    <>
      <Seo title={blog.title} description={blog.meta.description} />
      <div className="text-white container-sm py-10 md:py-20">
        <div className="inline-flex items-center hover:text-green-600 mb-4">
          <AngleLeftIcon className="h-6 w-6 inline-block mr-1" />
          <Link to="/blog/" noBorder>
            Back
          </Link>
        </div>
        <div className="mt-5 md:mt-10">
          <div className="flex flex-wrap flex-col lg:flex-row lg:items-center">
            <p className="typo-body">{`${blog.datetime}`}</p>
          </div>
          <h1 className="typo-h2 text-green-600 mb-4 mt-8">{blog.title}</h1>
          <div className="mt-8">
            <CustomMDXProvider>{blog.content.body}</CustomMDXProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query ($slug: String!) {
    blog: blog(slug: { eq: $slug }) {
      slug
      title
      datetime
      meta {
        title
        description
        image {
          publicURL
        }
      }
      content {
        body
      }
    }
  }
`;
