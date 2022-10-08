import classnames from 'classnames';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import {
    Button,
    CloseIcon,
    Link,
    MenuIcon,
} from 'website-components';

import Logo from '../images/logo.svg';
import LogoNextflow from '../images/logo-nextflow.svg';

const Header = ({ location }) => {
  const [navOpened, setNavOpened] = useState(false);

  const handleNav = (url) => {
    setNavOpened(false);
    navigate(url);
  };

  const pageRelatedClassName = {
    'relative bg-black': location.pathname !== '/',
    'absolute bg-transparent': location.pathname === '/',
  };

  return (
    <>
      <header className={classnames(
        'z-10 inset-x-0 top-0',
        pageRelatedClassName,
      )}
      >
        <div className="container-lg flex flex-wrap items-center justify-between w-full h-16 md:h-24">
          <Link to="/" noBorder className="block uppercase">
              <img src={Logo} className="h-8 lg:h-10" alt="" />
          </Link>
          <div className="lg:flex items-center hidden">
            <Link
              to="/program/"
              noBorder
              className={classnames(
                'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                {
                  'text-white': !location.pathname.includes('/program/'),
                  'text-green-600': location.pathname.includes('/program/')
                }
              )}
            >
              Program
            </Link>
            <Link
              to="/speakers/"
              noBorder
              className={classnames(
                'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                {
                  'text-white': !location.pathname.includes('/speakers/'),
                  'text-green-600': location.pathname.includes('/speakers/')
                }
              )}
            >
              Speakers
            </Link>
            <Link
              to="/posters/"
              noBorder
              className={classnames(
                'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                {
                  'text-white': !location.pathname.includes('/posters/'),
                  'text-green-600': location.pathname.includes('/posters/')
                }
              )}
            >
              Posters
            </Link>
            <Link
              to="/call-for-abstracts/"
              noBorder
              className={classnames(
                'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                {
                  'text-white': !location.pathname.includes('/call-for-abstracts/'),
                  'text-green-600': location.pathname.includes('/call-for-abstracts/')
                }
              )}
            >
              Call for abstracts
            </Link>
            <Link
              to="/venue/"
              noBorder
              className={classnames(
                'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                {
                  'text-white': !location.pathname.includes('/venue/'),
                  'text-green-600': location.pathname.includes('/venue/')
                }
              )}
            >
              Venue
            </Link>
            <Button
                to="/stream/"
                variant="accent"
                size="sm"
                className="hover:opacity-80 ml-2"
                noShadow
            >
              Join Online
            </Button>
          </div>
          <div className="lg:hidden">
            <Button
              onClick={() => { setNavOpened(true); }}
              noShadow
              className="text-white"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </header>
      <div className={classnames(
        'bg-black text-white fixed inset-0 z-20 px-4 transition-all',
        {
          'invisible opacity-0': !navOpened,
          'opacity-100 visible': navOpened,
        },
      )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex justify-between items-center">
            <Link to="/" noBorder className="block uppercase">
                <img src={Logo} className="h-8 lg:h-10" alt="Nextflow Summit 2022 logo" />
            </Link>
            <Button
              onClick={() => { setNavOpened(false); }}
              noShadow
            >
              <CloseIcon />
            </Button>
          </div>
          <div className="flex-1 py-16 overflow-y-auto text-center">
            <div>
              <Button
                  onClick={() => { handleNav('/program/') }}
                  noShadow
                  className="typo-intro"
              >
                  Program
              </Button>
            </div>
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/speakers/') }}
                  noShadow
                  className="typo-intro"
              >
                  Speakers
              </Button>
            </div>
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/posters/') }}
                  noShadow
                  className="typo-intro"
              >
                  Posters
              </Button>
            </div>
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/call-for-abstracts/') }}
                  noShadow
                  className="typo-intro"
              >
                  Call for abstracts
              </Button>
            </div>
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/venue/') }}
                  noShadow
                  className="typo-intro"
              >
                  Venue
              </Button>
            </div>
            <div className="mt-4">
              <Button
                  onClick={() => { handleNav('/stream/') }}
                  variant="accent"
                  size="sm"
                  className="hover:opacity-80 ml-2"
                  noShadow
              >
                Join Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
