import React from 'react';

import {
  Link,
} from 'website-components';

import { useLayoutState } from '../../layout/Context';

const EventSwitcher = () => {
  const { activeEvent } = useLayoutState();

  return (
    <div className="inline-block bg-gradient-to-r from-blue-600 to-red-300 text-black typo-blockquote px-6 py-2 rounded-full">
      <Link to="/" className="font-medium" noBorder={activeEvent !== 'barcelona'}>
        Barcelona
      </Link>
      <span className="italic mx-4">
        or
      </span>
      <Link to="/boston/" noBorder={activeEvent !== 'boston'}>
        Boston
      </Link>
    </div>
  );
};

export default EventSwitcher;
