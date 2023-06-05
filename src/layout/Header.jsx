import classnames from 'classnames';
import { navigate } from 'gatsby';
import React, { useState } from 'react';
import {
    Button,
    CloseIcon,
    Link,
    MenuIcon,
} from 'website-components';

import Logo from '../images/logo.svg';

const navs = [
  {
    title: 'Agenda',
    path: '/agenda/',
  },
  {
    title: 'Travel - Barcelona',
    path: '/travel/',
  },
  {
    title: 'Sponsors',
    path: '/sponsors/',
  },
  {
    title: 'Past events',
    path: '/past-events/',
  },
];

const Header = ({ location }) => {
  const [navOpened, setNavOpened] = useState(false);

  const handleNav = (url) => {
    setNavOpened(false);
    navigate(url);
  };

  return (
    <>
      <header className="bg-black relative z-10 inset-x-0 top-0">
        <div className="container-lg flex flex-wrap items-center justify-between w-full h-16 md:h-24">
          <Link to="/" noBorder className="block uppercase">
              <img src={Logo} className="h-8 lg:h-10" alt="" />
          </Link>
          <div className="lg:flex items-center hidden">
            {navs.map((nav) => (
              <Link
                to={nav.path}
                noBorder
                className={classnames(
                  'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                  {
                    'text-white': !location.pathname.includes(nav.path),
                    'text-green-600': location.pathname.includes(nav.path),
                  }
                )}
              >
                {nav.title}
              </Link>
            ))}
            <Button
                to="/call-for-abstracts/"
                variant="secondary"
                size="sm"
                className="hover:opacity-80 ml-4"
                noShadow
            >
              Call for abstracts
            </Button>
            <Button
                to="/register/"
                variant="accent"
                size="sm"
                className="hover:opacity-80 ml-4"
                noShadow
            >
              Register
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
            {navs.map((nav) => (
              <div className="mt-4 first:mt-0">
                <Button
                  onClick={() => { handleNav(nav.path) }}
                  noShadow
                  className="typo-intro"
                >
                  {nav.title}
                </Button>
              </div>
            ))}
            <div className="mt-4">
              <Button
                onClick={() => { handleNav('/call-for-abstracts/') }}
                variant="secondary"
                size="sm"
                className="hover:opacity-80 ml-2"
                noShadow
              >
                Call for abstracts
              </Button>
            </div>
            <div className="mt-4">
              <Button
                onClick={() => { handleNav('/register/') }}
                variant="accent"
                size="sm"
                className="hover:opacity-80 ml-2"
                noShadow
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
