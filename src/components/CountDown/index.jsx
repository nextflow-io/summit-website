import React from 'react';

import { useLayoutState } from '../../layout/Context';

const BARCELONA_START_DATE = 'October 16, 2023';
const BOSTON_START_DATE = 'November 29, 2023';

const hoursLeft = (toDate) => {
  const oneHour = 60 * 60 * 1000;
  const nowDate = new Date();
  return Math.floor((toDate - nowDate) / oneHour);
};

const daysLeft = (toDate) => {
  const hours = hoursLeft(toDate);
  return Math.floor(hours / 24);
};

const monthsLeft = (toDate) => {
  const days = daysLeft(toDate);
  return Math.floor(days / 30);
};

const getTimeLeft = (toDate) => {
  return {
    hours: hoursLeft(toDate) % 24,
    days: daysLeft(toDate) % 30,
    months: monthsLeft(toDate),
  };
};

const Counter = () => {
  const { activeEvent } = useLayoutState();

  const startDate = activeEvent === 'boston' ? new Date(BOSTON_START_DATE) : new Date(BARCELONA_START_DATE);

  const timeLeft = getTimeLeft(startDate);

  if (timeLeft.months === 0 && timeLeft.days === 0 && timeLeft.hours === 0) return null;
  return null;

  return (
    <div>
      <p className="typo-intro">Starts in:</p>
      <div className="bg-gray-900 flex rounded-md shadow-xl">
        <div className="p-4 text-center">
          <span className="typo-h4 block">{timeLeft.months}</span>
          <span className="typo-intro block">months</span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">{timeLeft.days}</span>
          <span className="typo-intro block">days</span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">{timeLeft.hours}</span>
          <span className="typo-intro block">hours</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
