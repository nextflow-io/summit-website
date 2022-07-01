import React from 'react';
import { Link } from 'website-components';

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="container-lg">
          <div className="border-white border-t opacity-40" />
          <div className="row">
            <div className="col-full md:col-5 flex flex-col">
              <div className="typo-small md:text-right">
                <small className="typo-small">
                  &copy; Seqera Labs, 2018-2022
                </small>
                {' | '}
                <Link to="/legal/" noBorder>
                  Terms of Use
                </Link>

                {' | '}
                <Link to="/privacy-policy/" noBorder>
                  Privacy Policy
                </Link>
                {' | '}
                <Link to="mailto:info@seqera.io">
                  info@seqera.io
                </Link>
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
