import React from 'react';

import { Button } from 'website-components';

import * as summitImages from '../../images/gallery/boston/nextflow-summit/tn';
import * as hackathonImages from '../../images/gallery/boston/nf-core-hackathon/tn';

import Seo from '../../components/Seo';

function getMinWidth(index) {
  if (index % 3 === 0) return getRandomNumber(220, 600) + 'px';
  return undefined;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Image = ({ src, index }) => {
  return (
    <div
      className={`max-w-[600px] basis-[220px] h-[250px] grow m-4 rounded-sm overflow-hidden relative`}
      style={{ minWidth: getMinWidth(index) }}
      key={index}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
    </div>
  );
};

const GalleryPage = () => {
  return (
    <>
      <Seo title="Nextflow Events Gallery" />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg text-center">
          <h1 className="typo-h2 mb-4">Nextflow Summit 2023 Boston - Photos</h1>
          <p className="typo-body max-w-lg mb-4 mx-auto">See photos from the nf-core hackathon and Nextflow Summit.</p>
          <p className="typo-body mb-4 mx-auto">
            <Button
              to="https://photos.app.goo.gl/o4KP1dy8JdchN6Sr5"
              variant="primary"
              size="md"
              arrow
              className="mr-2 mb-2"
            >
              See all hackathon photos
            </Button>
            <Button to="https://photos.app.goo.gl/snR3E75UqsoKGqU38" variant="primary" size="md" arrow className="mb-2">
              See all Summit photos
            </Button>
          </p>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2 mb-8">nf-core Hackathon</h2>
          <div className="flex flex-wrap -m-4">
            {Object.values(hackathonImages).map((image, index) => (
              <Image src={image} index={index} key={index} />
            ))}
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/o4KP1dy8JdchN6Sr5" variant="primary" size="md" arrow>
              See all 40 images in Google Photos
            </Button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <h2 className="typo-h2 mb-8">Nextflow Summit</h2>
          <div className="flex flex-wrap -m-4">
            {Object.values(summitImages).map((image, index) => (
              <Image src={image} index={index} key={index} />
            ))}
          </div>
          <div className="mt-8">
            <Button to="https://photos.app.goo.gl/snR3E75UqsoKGqU38" variant="primary" size="md" arrow>
              See all 70 images in Google Photos
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
