import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Button } from 'website-components';

import Seo from '../../components/Seo';
import YoutubeIframe from '../../components/YoutubeIframe';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      nfCoreHackathonImage1: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage2: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage3: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage4: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage5: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/5.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage6: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/6.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage7: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/7.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage8: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/8.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage9: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/9.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage10: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/10.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage11: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/11.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      nfCoreHackathonImage12: file(relativePath: {eq: "gallery/barcelona/nf-core-hackathon/12.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage1: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage2: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage3: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage4: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage5: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/5.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage6: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/6.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage7: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/7.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage8: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/8.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage9: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/9.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage10: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/10.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage11: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/11.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage12: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/12.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage13: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/13.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage14: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/14.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage15: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/15.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage16: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/16.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage17: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/17.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage18: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/18.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage19: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/19.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
          )
        }
      }
      summitImage20: file(relativePath: {eq: "gallery/barcelona/nextflow-summit/20.jpg"}) {
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
            Nextflow Summit 2023 Barcelona - Photos
          </h1>
          <p className="typo-body max-w-lg mb-4 mx-auto">
            See photos from the nf-core hackathon and Nextflow Summit.
          </p>
          <p className="typo-body mb-4 mx-auto">
            <Button to="https://photos.app.goo.gl/MSCAr4KYGr28nMcP6" variant="primary" size="md" arrow className="mr-2 mb-2">
              See all hackathon photos
            </Button>
            <Button to="https://photos.app.goo.gl/a7zjAn3aqqEfUGNK8" variant="primary" size="md" arrow className="mb-2">
              See all Summit photos
            </Button>
          </p>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            Videos
          </h2>
          <div className="row">
            <div className="col-full lg:col-6 mt-8">
              <h4 className="typo-h4 mb-8">
                Hackathon and Summit recap
              </h4>
              <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                <YoutubeIframe id="https://www.youtube.com/watch?v=JvjoZ9dPjq8"></YoutubeIframe>
              </div>
            </div>
            <div className="col-full lg:col-6 mt-8">
              <h4 className="typo-h4 mb-8">
              Alinghi Red Bull - Seqera Partnership
              </h4>
              <div className="relative border border-green-300 rounded-sm overflow-hidden p-1 bg-black">
                <YoutubeIframe id="https://www.youtube.com/watch?v=AprJlStlBPY"></YoutubeIframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2">
            nf-core Hackathon
          </h2>
          <div className="row">
            <div className="col-full sm:col-4 lg:col-3 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage1)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage2)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-5 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage3)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage4)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage5)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage6)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-4 lg:col-3 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage7)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 md:col-4 lg:col-5 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage8)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage10)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage9)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage11)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.nfCoreHackathonImage12)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="nf-core Hackathon"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/MSCAr4KYGr28nMcP6" variant="primary" size="md" arrow>
              See 160 more images in Google Photos
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
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage1)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage2)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage3)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage4)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-5 mt-8">
              <Image
                image={getImage(data.summitImage5)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage6)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage7)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage8)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage9)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-2 mt-8">
              <Image
                image={getImage(data.summitImage10)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage11)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage12)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage13)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage14)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage15)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage16)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-5 mt-8">
              <Image
                image={getImage(data.summitImage17)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-5 mt-8">
              <Image
                image={getImage(data.summitImage18)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-3 mt-8">
              <Image
                image={getImage(data.summitImage19)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
            <div className="col-full sm:col-6 lg:col-4 mt-8">
              <Image
                image={getImage(data.summitImage20)}
                className="w-full h-[200px]"
                imgClassName="rounded-sm"
                alt="Nextflow Summit"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/a7zjAn3aqqEfUGNK8" variant="primary" size="md" arrow>
              See 312 more images in Google Photos
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
