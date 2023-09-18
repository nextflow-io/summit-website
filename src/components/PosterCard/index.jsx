import React from 'react';
import { Link } from 'website-components';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

const PosterCard = ({ poster }) => {
  const image = poster.speakers?.[0]?.image;
  const path = `/barcelona/posters/${poster.slug}/`;
  return (
    <div className="bg-black border border-gray-800 rounded-sm shadow-xl h-full group">
      <div className="flex flex-col h-full w-full">
        <Link to={path} noBorder>
          <Image
            image={getImage(poster.image)}
            className="rounded-t-sm max-h-[220px]"
            imageClassName="rounded-t-sm"
            objectPosition="50% 0%"
            alt={poster.title}
          />
        </Link>
        <div className="px-4 py-6 bg-black rounded-b-sm w-full group-hover:bg-gray-800">
          <h4 className="typo-h5">
            <span className="bg-gray-800 typo-small rounded-full px-4 py-1 ml-2 float-right">#{poster.poster_id}</span>
            <Link to={path} noBorder>
              {poster.title}
            </Link>
          </h4>
          <div className="inline-flex mt-2">
            {poster.tags.map((tag, i) => (
              <span className="bg-gray-800 typo-small rounded-full px-4 py-1 uppercase mr-2" key={i}>
                {tag}
              </span>
            ))}
          </div>
          {poster.speakers && (
            <>
              {poster.speakers.length === 1 && (
                <div className="flex items-center mt-4">
                  <Image
                    image={getImage(image)}
                    alt={poster.speakers[0].name}
                    imgClassName="rounded-full"
                    className="mr-4 h-8 w-8"
                  />
                  <span className="typo-intro text-green-300">{poster.speakers[0].name}</span>
                </div>
              )}
              {poster.speakers.length === 2 && (
                <div className="flex items-center mt-4">
                  {!!image && (
                    <>
                      <Image
                        image={getImage(image)}
                        alt={poster.speakers[0].name}
                        imgClassName="rounded-full"
                        className="h-8 w-8"
                      />
                      <Image
                        image={getImage(poster.speakers[1].image)}
                        alt={poster.speakers[1].name}
                        imgClassName="rounded-full"
                        className="-ml-2 mr-4 h-8 w-8"
                      />
                    </>
                  )}
                  <span className="typo-intro text-green-300">
                    {`${poster.speakers[0].name} & ${poster.speakers[1].name}`}
                  </span>
                </div>
              )}
              {poster.speakers.length > 2 && (
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                  <div className="h-8 w-8 bg-green-300 rounded-full -ml-2 mr-4" />
                  <span className="typo-intro text-green-300">Several Speakers</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
