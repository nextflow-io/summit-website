import { useStaticQuery, graphql } from 'gatsby';

import React from 'react';
import HeroDots from '../components/HeroDots';
import Seo from '../components/Seo';

import {
  Button,
} from 'website-components';

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
            <h1 className="typo-display1">
              Register your ticket now
            </h1>
            <div className="max-w-xl mx-auto mt-4">
              <p className="typo-body">
                Places are limited, so register now to reserve your spot.
              </p>
              <p className="typo-body">
                Registration closes September 9, or when sold out.
              </p>
            </div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16">
        <div className="tt-widget">
          <div className="tt-widget-fallback">
            <p className="text-center">
              <Button
                variant="primary"
                size="md"
                to="https://www.tickettailor.com/checkout/new-session/id/2803612/chk/29b5/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                arrow
              >
                Click here to buy tickets
              </Button>
            </p>
          </div>
          <script
            src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
            data-url="https://www.tickettailor.com/checkout/new-session/id/2803612/chk/29b5/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
            data-type="inline"
            data-inline-minimal="true"
            data-inline-show-logo="false"
            data-inline-bg-fill="false"
            data-inline-inherit-ref-from-url-param=""
            data-inline-ref="website_widget"></script>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
