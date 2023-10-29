import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import * as styles from './styles.module.css';

const Sponsor = ({ sponsor, location }) => {
  const ranks = {
    1: 'Diamond',
    2: 'Platinum',
    3: 'Gold',
    4: 'Bronze',
  };
  const rank = ranks[sponsor.rank];
  return (
    <Link
      key={sponsor.id}
      to={`/${location}/sponsors/${sponsor.id}/`}
      className="block p-4 sm:p-12 rounded-md sm:border border-gray-600 hover:border-gray-500 hover:bg-gray-950 transition-all mb-8"
    >
      <div className="flex justify-between items-start flex-col sm:flex-row">
        <h2 className="flex-auto">
          <img
            src={sponsor.image.publicURL}
            title={sponsor.name}
            className="max-w-[250px] max-h-[55px] min-w-[100px] mr-4 mb-4"
          />
        </h2>
        <div className={classNames(styles.rank, styles[rank])}>{rank} sponsor</div>
      </div>
      <div className="typo-body mt-4">{sponsor.content.body}</div>
    </Link>
  );
};

export default Sponsor;
