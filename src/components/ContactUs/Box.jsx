import React from 'react';

const Box = ({ children }) => (
  <div
    className="bg-gray-900 border border-gray-700 rounded-lg p-8"
    style={{ boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.30)' }}
  >
    {children}
  </div>
);

export default Box;
