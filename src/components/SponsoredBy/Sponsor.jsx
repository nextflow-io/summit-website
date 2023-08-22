import React from 'react';

const Sponsor = ({ children }) => (
  <div className="w:full sm:w-auto p-1 flex-1" style={{ minWidth: 160 }}>
    <div className="bg-gray-800 h-24 sm:h-40 max-ws px-4 flex items-center justify-center">{children}</div>
  </div>
);

export default Sponsor;
