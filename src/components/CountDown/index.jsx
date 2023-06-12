import React from 'react';

const Counter = () => {
  return (
    <div>
      <p className="typo-intro">
        Starts in:
      </p>
      <div className="bg-gray-900 flex rounded-md shadow-xl">
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            4
          </span>
          <span className="typo-intro block">
            months
          </span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            17
          </span>
          <span className="typo-intro block">
            weeks
          </span>
        </div>
        <div className="p-4 text-center">
          <span className="typo-h4 block">
            123
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
