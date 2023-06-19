import React from 'react';

import { useLayoutState } from '../../layout/Context';

const BARCELONA_START_DATE = 'October 12, 2023';
const BOSTON_START_DATE = 'October 14, 2023';

const daysLeft = (date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const nowDate = new Date();
  return Math.round((date - nowDate) / oneDay);
};

const weeksLeft = (toDate) => {
  const days = daysLeft(toDate);
  return Math.round(days / 7);
};

const monthLeft = (toDate) => {
  const days = daysLeft(toDate);
  return Math.round(days / 30);
};

const Counter = () => {
  const { activeEvent } = useLayoutState();

  const startDate = (activeEvent === 'boston') ? new Date(BOSTON_START_DATE) : new Date(BARCELONA_START_DATE);

  return (
    <div>
      <p className="typo-intro">
        Starts in:
      </p>
      <div className="bg-gray-900 flex rounded-md shadow-xl">
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            {monthLeft(startDate)}
          </span>
          <span className="typo-intro block">
            months
          </span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            {weeksLeft(startDate)}
          </span>
          <span className="typo-intro block">
            weeks
          </span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            {daysLeft(startDate)}
          </span>
          <span className="typo-intro block">
            days
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
