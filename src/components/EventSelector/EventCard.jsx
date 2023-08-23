import React from 'react';
import classNames from 'classnames';
import { GatsbyImage as Image } from 'gatsby-plugin-image';
import { Link } from 'website-components';

import NextflowLogo from '../NextflowLogo';
import * as styles from './styles.module.css';

const EventCard = ({ img, location, children, to, onClick, date, color }) => (
  <Link
    to={to}
    onClick={onClick}
    className={classNames(
      'block bg-black text-white border border-gray-800 rounded-md shadow-xl relative overflow-hidden',
      styles.card
    )}
    noBorder
  >
    <Image image={img} className="h-48" imgClassName="rounded-t-md" />
    <div className="px-4 py-6 lg:p-8">
      <div>
        <NextflowLogo className="h-10 text-white mx-auto" />
      </div>
      <h3 className="text-center mt-4">
        <span className="typo-h4 text-white mr-4">SUMMIT</span>
        <span className={classNames('typo-blockquote italic', color ? color : 'text-red-300')}>{location}</span>
      </h3>
      {children}
      <p className="typo-intro text-center mb-4">{date}</p>
      <div
        className={classNames('bg-green-300 p-4 rounded-full font-bold text-black hover:opacity-80 ml-4', styles.btn)}
      >
        Find out more
      </div>
    </div>
  </Link>
);

export default EventCard;
