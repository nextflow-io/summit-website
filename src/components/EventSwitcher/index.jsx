import React from 'react';

import {
  Link,
} from 'website-components';

const EventSwitcher = () => {
  return (
    <div className="inline-block bg-gradient-to-r from-blue-600 to-red-300 text-black typo-blockquote px-6 py-2 rounded-full absolute top-10 -right-5">
      <Link to="/" className="font-medium">
        Barcelona
      </Link>
      <span className="italic mx-4">
        or
      </span>
      <Link to="/boston/" noBorder>
        Boston
      </Link>
    </div>
  );
};

export default EventSwitcher;
