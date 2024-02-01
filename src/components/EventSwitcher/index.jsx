import classnames from 'classnames';
import React from 'react';

import { Link } from 'website-components';

import { useLayoutState } from '../../layout/Context';

import GlobeIconSrc from '../../images/icons/globe.svg';

const EventSwitcher = ({ className, loc }) => {
  const { activeEvent } = useLayoutState();
  if (loc?.pathname === '/subscribe-2024/') return null;

  return (
    <div className="fixed top-[130px] right-0 md:top-[160px] z-10">
      <div
        className={classnames(
          'typo-display3 inline-flex items-center bg-gradient-to-r from-blue-600 to-red-300 text-black px-4 py-3 rounded-l-full',
          className
        )}
      >
        <img src={GlobeIconSrc} className="h-6 w-6 mr-3" alt="globe icon" />
        <Link
          to="/barcelona/"
          noBorder
          className={classnames('border-b-2 min-w-[103px]', {
            'border-transparent': activeEvent !== 'barcelona',
            'font-bold border-black': activeEvent === 'barcelona',
          })}
        >
          Barcelona
        </Link>
        <span className="mr-4 ml-3">|</span>
        <Link
          to="/boston/"
          noBorder
          className={classnames('border-b-2 min-w-[73px]', {
            'border-transparent': activeEvent !== 'boston',
            'font-bold border-black': activeEvent === 'boston',
          })}
        >
          Boston
        </Link>
      </div>
    </div>
  );
};

export default EventSwitcher;
