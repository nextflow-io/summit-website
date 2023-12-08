import React from 'react';
import { Link } from 'gatsby';

const PreregisterBanner = () => {
  return (
    <Link className="block bg-nextIndigo text-center text-white pb-4 pt-24 md:pt-4 px-6" to="/subscribe-2024/">
      Want to attend Nextflow Summit 2024? <span className="text-green-300 ml-2">Sign up for updates!</span>
    </Link>
  );
};

export default PreregisterBanner;
