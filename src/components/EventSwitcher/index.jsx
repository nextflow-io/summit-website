import classnames from 'classnames';
import React from 'react';

import {
  Link,
} from 'website-components';

import { useLayoutState } from '../../layout/Context';

import GlobeIconSrc from '../../images/icons/globe.svg';

const EventSwitcher = ({ className }) => {
  const { activeEvent } = useLayoutState();

  return (
    <div className={classnames('inline-flex items-center bg-gradient-to-r from-blue-600 to-red-300 text-black text-xl font-light leading-8 px-4 py-3 rounded-full', className)}> 
      <img src={GlobeIconSrc} className="h-6 w-6 mr-3" alt="globe icon" />
      <Link
        to="/"
        noBorder
        className={classnames({
          'font-medium border-b-2 border-black': activeEvent === 'barcelona',
        })}
      >
        Barcelona
      </Link>
      <span className="italic mr-4 ml-3">
        or
      </span>
      <Link
        to="/boston/"
        noBorder
        className={classnames({
          'font-medium border-b-2 border-black': activeEvent === 'boston',
        })}
      >
        Boston
      </Link>
    </div>
  );
};

export default EventSwitcher;
