import classnames from 'classnames';
import React from 'react';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

import { GitHubIcon, Link, LinkedInIcon, TwitterIcon } from 'website-components';

const SpeakerCard = ({ speaker, className }) => {
  return (
    <div className={classnames('bg-black text-white border border-gray-800 rounded-md overflow-hidden', className)}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Image image={getImage(speaker.image)} className="w-full" imgClassName="md:rounded-l-md" alt={speaker.name} />
        </div>
        <div className="w-full md:w-2/3 p-6 inline-flex flex-col">
          <h3 className="typo-h4 text-green-600 mb-4">
            <Link to={speaker.slug} noBorder>
              {speaker.name}
            </Link>
          </h3>
          <p className="typo-h5 mb-4">{speaker.position}</p>
          <div className="flex mb-4">
            {speaker.github && (
              <Link to={speaker.github} noBorder className="text-white hover:text-green-600 mr-4">
                <GitHubIcon />
              </Link>
            )}
            {speaker.twitter && (
              <Link to={speaker.twitter} noBorder className="text-white hover:text-green-600 mr-4">
                <TwitterIcon />
              </Link>
            )}
            {speaker.linkedin && (
              <Link to={speaker.linkedin} noBorder className="text-white hover:text-green-600">
                <LinkedInIcon />
              </Link>
            )}
          </div>
          <div className="flex mt-8 md:mt-auto">
            {speaker.tags.map((tag, i) => (
              <div className="typo-small rounded-full px-4 py-1 bg-gray-800 uppercase mr-2" key={i}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
