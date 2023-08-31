import React from 'react';
import classNames from 'classnames';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

const Img = ({ speaker, className }) =>
  speaker?.name ? (
    <Image
      image={getImage(speaker.image)}
      alt={speaker.name}
      className={classNames('h-8 w-8 rounded-full', className)}
    />
  ) : (
    <div className={classNames('h-8 w-8 bg-green-300 rounded-full', className)} />
  );

const SpeakerPics = ({ speakers }) => {
  if (!speakers?.length) return null;
  if (!speakers[0] && speakers.length === 1) return null;
  function getName(speakers) {
    switch (speakers.length) {
      case 1:
        return speakers[0]?.name;
      case 2:
        return `${speakers[0]?.name} & ${speakers[1]?.name}`;
      default:
        return 'Several Speakers';
    }
  }
  return (
    <>
      <div className="flex items-center">
        <Img speaker={speakers[0]} className="bg-indigo-200 z-30" />
        {speakers.length > 1 && <Img speaker={speakers[1]} className="-ml-4 bg-indigo-300 z-20" />}
        {speakers.length > 2 && <Img speaker={undefined} className="bg-indigo-400 -ml-4" />}
        <span className="typo-intro text-green-300 ml-3">{getName(speakers)}</span>
      </div>
      <span className="hidden lg:block mx-2">|</span>
    </>
  );
};

export default SpeakerPics;
