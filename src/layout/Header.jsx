import React from 'react';
import classnames from 'classnames';
import { navigate } from 'gatsby';
import { Button, CloseIcon, Link, MenuIcon } from 'website-components';

import Logo from '../images/logo.svg';
import { useLayoutState, useLayoutActions } from './Context';
import * as styles from './styles.module.css';

const navs = [
  {
    title: 'Travel - Barcelona',
    bostonTitle: 'Travel - Boston',
    path: '/travel/',
  },
  {
    title: 'Speakers',
    path: '/speakers/',
  },
  {
    title: 'Sponsors',
    path: '/sponsors/',
  },
  {
    title: 'Blog',
    path: '/blog/',
  },
  {
    title: 'Past events',
    path: '/past-events/',
  },
];

const Header = ({ location }) => {
  const { activeEvent, menuOpen } = useLayoutState();

  const { toggleMenu, closeMenu } = useLayoutActions();

  const handleNav = (url) => {
    navigate(url);
    closeMenu();
  };

  const resolvePath = (path) => {
    if (activeEvent === 'boston') {
      return `/boston${path}`;
    }

    return path;
  };

  const resolveTitle = (title, bostonTitle) => {
    if (!bostonTitle) {
      return title;
    }

    return activeEvent === 'boston' ? bostonTitle : title;
  };

  const agendaPath = resolvePath('/agenda/');

  return (
    <>
      <header className="bg-black fixed z-10 inset-x-0 top-0 fixed">
        <div className="container-lg flex flex-wap items-center justify-between w-full h-16 md:h-24 whitespace-nowrap">
          <Link to={resolvePath('/')} noBorder className="block flex-auto">
            <img src={Logo} className="max-h-10" style={{ marginRight: '100%' }} alt="" />
          </Link>
          <div className="hidden lg:flex flex-auto items-center justify-end">
            <div className={classnames(styles.dropdown)}>
              <Link
                to={agendaPath}
                noBorder
                className={classnames(
                  'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                  {
                    'text-white': !location.pathname.includes(agendaPath),
                    'text-green-300': location.pathname.includes(agendaPath),
                  }
                )}
              >
                Agenda
              </Link>
              <div className={styles.dropdownContent}>
                <Link
                  to={`${agendaPath}hackathon/#events`}
                  className={classnames({ [styles.active]: location.pathname.includes('/agenda/hackathon') })}
                >
                  Hackathon
                </Link>
                <Link
                  to={`${agendaPath}summit/#events`}
                  className={classnames({ [styles.active]: location.pathname.includes('/agenda/summit') })}
                >
                  SUMMIT
                </Link>
              </div>
            </div>
            {navs.map((nav) => (
              <Link
                key={nav.path}
                to={resolvePath(nav.path)}
                noBorder
                className={classnames(
                  'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                  {
                    'text-white': !location.pathname.includes(nav.path),
                    'text-green-300': location.pathname.includes(nav.path),
                  }
                )}
              >
                {resolveTitle(nav.title, nav.bostonTitle)}
              </Link>
            ))}
            <div className="flex flex-none">
              <Button
                to={resolvePath('/call-for-abstracts/')}
                variant="secondary"
                size="sm"
                className="hover:opacity-80 ml-4"
                noShadow
              >
                Call for abstracts
              </Button>
              <Button
                to={resolvePath('/register/')}
                variant="primary"
                size="sm"
                className="hover:opacity-80 ml-4"
                noShadow
              >
                Register
              </Button>
            </div>
          </div>
          <div className="lg:hidden">
            <Button
              onClick={() => {
                toggleMenu();
              }}
              noShadow
              className="text-white"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </header>
      <div
        className={classnames('bg-black text-white fixed inset-0 z-20 px-4 transition-all', {
          'invisible opacity-0': !menuOpen,
          'opacity-100 visible': menuOpen,
        })}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex justify-between items-center">
            <Link to={resolvePath('/')} onClick={closeMenu} noBorder className="block uppercase">
              <img src={Logo} className="h-8 lg:h-10" alt="Nextflow SUMMIT 2023 logo" />
            </Link>
            <Button onClick={toggleMenu} noShadow>
              <CloseIcon />
            </Button>
          </div>
          <div className="flex-1 py-16 overflow-y-auto text-center">
            <div className="mt-4 first:mt-0">
              <Link to={agendaPath} onClick={closeMenu} noBorder>
                Agenda
              </Link>
            </div>
            {navs.map((nav) => (
              <div className="mt-4 first:mt-0" key={nav.path}>
                <Link key={nav.path} to={resolvePath(nav.path)} onClick={closeMenu} noBorder>
                  {resolveTitle(nav.title, nav.bostonTitle)}
                </Link>
              </div>
            ))}
            <div className="mt-4">
              <Button
                onClick={() => {
                  handleNav('/call-for-abstracts/');
                }}
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
                onClick={() => {
                  handleNav('/register/');
                }}
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
