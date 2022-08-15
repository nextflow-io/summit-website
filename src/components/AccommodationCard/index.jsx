import { GatsbyImage as Image, getImage } from "gatsby-plugin-image";
import React from 'react';

import { Link, StarIcon } from 'website-components';

const AccommodationCard = ({ acc }) => (
  <div className="bg-black border border-gray-800 rounded-sm shadow-xl relative h-full">
    <div className="absolute inset-0">
      <div className="flex flex-col h-full w-full">
        <Image
          image={getImage(acc.image)}
          className="rounded-sm h-full w-full"
          imageClassName="rounded-sm"
        />
        <div className="px-4 py-4 bg-black rounded-b-sm w-full absolute bottom-0">
          <h4 className="typo-h5 uppercase">
            {acc.title}
          </h4>
        </div>
      </div>
    </div>
    <Link to={acc.url} noBorder className="block relative px-8 py-8 h-full opacity-100 lg:opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer min-h-[240px]">
      <div className="absolute inset-0">
        <Image
          image={getImage(acc.image)}
          className="h-full w-full rounded-sm"
          imgClassName="rounded-sm"
        />
        <div className="absolute inset-0 bg-gradient-accent opacity-90 rounded-sm" />
      </div>
      <div className="relative">
        <div>
          <h4 className="typo-h5 inline uppercase border-b border-white">
            {acc.title}
          </h4>
        </div>
        <div>
          {[...Array(5)].map((e, i) => (
            <>
              {(acc.stars > i) && (
                <StarIcon
                  className="inline h-4 w-4 text-yellow-400"
                />
              )}
            </>
          ))}
        </div>
        <ul className="mt-4">
          <li className="typo-body">
            Walking time to venue: {acc.walkingTime}
          </li>
          {acc.breakfast !== null && (
            <li className="typo-body">
              Breakfast: {(acc.breakfast) ? 'included ☕️' : 'not included'}
            </li>
          )}
          {acc.adultOne && (
            <li className="typo-body">
              1 adult: {acc.adultOne}
            </li>
          )}
          {acc.adultsTwo && (
            <li className="typo-body">
              2 adults: {acc.adultsTwo}
            </li>
          )}
          {acc.tax && (
            <li className="typo-body">
              Tourist tax: {acc.tax}
            </li>
          )}
          {acc.promotionCode && (
            <li className="typo-body mt-4">
              Promotion code: {acc.promotionCode}
            </li>
          )}
        </ul>
      </div>
    </Link>
  </div>
);

export default AccommodationCard;
