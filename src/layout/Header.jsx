import classnames from 'classnames';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { Button, Link } from 'website-components';

import Logo from '../images/logo.svg';
import LogoNextflow from '../images/logo-nextflow.svg';

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);

  const handleNav = (url) => {
    setNavOpened(false);
    navigate(url);
  };

  return (
    <>
      <header className="relative z-10 inset-x-0 top-0 bg-black">
        <div className="container-lg flex flex-wrap items-center justify-between w-full h-16 md:h-24">
          <a href="/" className="block uppercase">
              <img src={Logo} className="h-10" alt="" />
          </a>
          <div className="lg:flex items-center hidden">
            <Link
              to="/program"
              noBorder
              className="bg-black bg-opacity-10 text-white font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide"
            >
              Program
            </Link>
            <Link
              to="/speakers"
              noBorder
              className="bg-black bg-opacity-10 text-white font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide"
            >
              Speakers
            </Link>
            <Link
              to="/call-of-abstracts"
              noBorder
              className="bg-black bg-opacity-10 text-white font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide"
            >
              Call of abstracts
            </Link>
            <Link
              to="/venue"
              noBorder
              className="bg-black bg-opacity-10 text-white font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide"
            >
              Venue
            </Link>
            <Button
                to="/"
                variant="accent"
                size="sm"
                className="hover:opacity-80 ml-2"
                noShadow
            >
              Register - July 1
            </Button>
          </div>
          <div className="lg:hidden">
            <Button
              onClick={() => { setNavOpened(true); }}
              noShadow
            >
            </Button>
          </div>
        </div>
      </header>
      <div className={classnames(
        'gradient-indigo text-white fixed inset-0 z-20 px-4 transition-all',
        {
          'invisible opacity-0': !navOpened,
          'opacity-100 visible': navOpened,
        },
      )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex justify-end">
            <Button
              onClick={() => { setNavOpened(false); }}
              noShadow
            >
            </Button>
          </div>
          <div className="flex-1 py-16 overflow-y-auto text-center">
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/') }}
                  variant="accent"
                  size="sm"
                  noShadow
              >
                Overview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
