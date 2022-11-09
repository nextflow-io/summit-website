import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button, Link, List } from 'website-components';

import Seo from '../components/Seo';

import LogoNextflow from '../images/logo-nextflow.svg';
import PlaceholderRectangle from '../images/visuals/placeholder-rectangle.svg';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      nfCoreHackathonImage1: file(relativePath: {eq: "gallery/nf-core-hackathon/1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage2: file(relativePath: {eq: "gallery/nf-core-hackathon/2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage3: file(relativePath: {eq: "gallery/nf-core-hackathon/3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage4: file(relativePath: {eq: "gallery/nf-core-hackathon/4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage5: file(relativePath: {eq: "gallery/nf-core-hackathon/5.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage6: file(relativePath: {eq: "gallery/nf-core-hackathon/6.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage7: file(relativePath: {eq: "gallery/nf-core-hackathon/7.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage8: file(relativePath: {eq: "gallery/nf-core-hackathon/8.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage9: file(relativePath: {eq: "gallery/nf-core-hackathon/9.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage10: file(relativePath: {eq: "gallery/nf-core-hackathon/10.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage1: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage2: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage3: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage4: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage5: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/5.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage6: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/6.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage7: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/7.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage8: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/8.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage9: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/9.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitDinnerImage10: file(relativePath: {eq: "gallery/nextflow-summit-social-dinner/10.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage1: file(relativePath: {eq: "gallery/nextflow-summit/1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage2: file(relativePath: {eq: "gallery/nextflow-summit/2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage3: file(relativePath: {eq: "gallery/nextflow-summit/3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage4: file(relativePath: {eq: "gallery/nextflow-summit/4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage5: file(relativePath: {eq: "gallery/nextflow-summit/5.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage6: file(relativePath: {eq: "gallery/nextflow-summit/6.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage7: file(relativePath: {eq: "gallery/nextflow-summit/7.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage8: file(relativePath: {eq: "gallery/nextflow-summit/8.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage9: file(relativePath: {eq: "gallery/nextflow-summit/9.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage10: file(relativePath: {eq: "gallery/nextflow-summit/10.jpg"}) {
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
        title="Nextflow Events Gallery"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">
            Nextflow Events Gallery
          </h1>
          <p className="typo-body max-w-md mb-4 mx-auto">
            Find photo reports from our latests events in this section
          </p>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            nf-core Hackathon
          </h2>
          <div className="row">
            <div className="col-6 sm:col-4 lg:col-3 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage1)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-4 lg:col-3 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage2)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage3)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-4 lg:col-2 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage4)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage5)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-4 lg:col-2 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage6)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full md:col-8 lg:col-6 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage7)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-6 md:col-4 lg:col-3 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage8)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-6 sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage10)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-5 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage9)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/3BoRrqumcNqCShzf8" variant="accent" size="md" arrow>
              See more in Google Photos
            </Button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Nextflow Summit Social Dinner at Shoko
          </h2>
          <div className="row">
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitDinnerImage1)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitDinnerImage2)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitDinnerImage3)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-2 mt-8">
              <Image
                image={getImage(data.summitDinnerImage4)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitDinnerImage5)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitDinnerImage6)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-5 mt-8">
              <Image
                image={getImage(data.summitDinnerImage7)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-5 mt-8">
              <Image
                image={getImage(data.summitDinnerImage8)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitDinnerImage9)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitDinnerImage10)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit Social Dinner at Shoko"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/Hp5Ybf3YUFT5PQA49" variant="accent" size="md" arrow>
              See more in Google Photos
            </Button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Nextflow Summit
          </h2>
          <div className="row">
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage1)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage2)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage3)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage4)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage5)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-2 mt-8">
              <Image
                image={getImage(data.summitImage6)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage7)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-6 mt-8">
              <Image
                image={getImage(data.summitImage8)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage9)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage10)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/82mXfCrx3ukMy2zm9" variant="accent" size="md" arrow>
              See more in Google Photos
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
