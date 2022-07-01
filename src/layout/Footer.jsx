import React from 'react';
import { Link } from 'website-components';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container-lg">
          <div className="border-white border-t opacity-40" />
          <div className="flex py-4">
            <div>
              <small className="typo-small">
                &copy; 2022 Seqera Labs
              </small>
            </div>
            <div className="flex md:justify-end mb-4">
              <div className="mr-4">
                <Link to="https://twitter.com/seqeralabs" noBorder>
                </Link>
              </div>
              <div className="mr-4">
                <Link to="https://github.com/seqeralabs" noBorder>
                </Link>
              </div>
              <div>
                <Link to="https://www.linkedin.com/company/14065390/" noBorder>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
