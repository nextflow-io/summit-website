import React from 'react';
import classnames from 'classnames';
import { navigate } from 'gatsby';
import { Button, CloseIcon, Link, MenuIcon } from 'website-components';

import Logo from '../images/logo.svg';
import { useLayoutState, useLayoutActions } from './Context';
import * as styles from './styles.module.css';

const navItems = [
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
    title: 'Posters',
    path: '/posters/',
    barcelonaOnly: true,
  },
  {
    title: 'Blog',
    path: '/blog/',
  },
  {
    title: 'Gallery',
    path: '/gallery/',
    barcelonaOnly: true,
  },
  {
    title: 'Call for abstracts',
    path: '/call-for-abstracts/',
    className: 'hidden lg:block',
    bostonOnly: true,
  },
  {
    title: 'Past events',
    path: '/past-events/',
    canHide: true,
  },
];

const Header = ({ location, hideNav }) => {
  const { activeEvent, menuOpen } = useLayoutState();

  const { toggleMenu, closeMenu } = useLayoutActions();

  const handleNav = (url) => {
    navigate(url);
    closeMenu();
  };

  const resolvePath = (path) => {
    if (path === '/blog/') return path;
    if (activeEvent === 'boston') return `/boston${path}`;
    return `/barcelona${path}`;
  };

  const resolveRootPath = () => {
    if (!location) return '/';
    if (activeEvent === 'boston') return '/boston/';
    return '/barcelona/';
  };

  const resolveTitle = (title, bostonTitle) => {
    if (!bostonTitle) return title;
    return activeEvent === 'boston' ? bostonTitle : title;
  };

  const agendaPath = resolvePath('/agenda/');

  function isPage(path) {
    return location.pathname.includes(path);
  }

  const navs = navItems.filter((nav) => {
    if (nav.barcelonaOnly && activeEvent === 'boston') return false;
    if (nav.bostonOnly && activeEvent === 'barcelona') return false;
    return true;
  });

  return (
    <>
      <header className="bg-black fixed z-40 inset-x-0 top-0 fixed">
        <div className="container-lg flex flex-wap items-center justify-between w-full h-16 md:h-24 whitespace-nowrap">
          <Link to={resolveRootPath()} noBorder className="block flex-auto">
            <img src={Logo} className="h-[83px] w-[166px]" style={{ marginRight: '100%' }} alt="" />
          </Link>
          {!hideNav && (
            <>
              <div className="hidden lg:flex flex-auto items-center justify-end">
                <div className={classnames(styles.dropdown)}>
                  <Link
                    to={agendaPath}
                    noBorder
                    className={classnames(
                      'bg-black bg-opacity-10 font-body py-1 px-4 rounded-sm mr-px font-normal tracking-wide',
                      {
                        'text-white': !isPage(agendaPath),
                        'text-green-300': isPage(agendaPath),
                      }
                    )}
                  >
                    Agenda
                  </Link>
                  <div className={styles.dropdownContent}>
                    <Link
                      to={`${agendaPath}hackathon/#events`}
                      className={classnames({ [styles.active]: isPage('/agenda/hackathon') })}
                    >
                      Hackathon
                    </Link>
                    <Link
                      to={`${agendaPath}summit/#events`}
                      className={classnames({ [styles.active]: isPage('/agenda/summit') })}
                    >
                      SUMMIT
                    </Link>
                    <Link
                      to={`${agendaPath}calendar/`}
                      className={classnames({ [styles.active]: isPage('/agenda/calendar/') })}
                    >
                      Calendar
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
                      nav.className,
                      {
                        'text-white': !isPage(nav.path),
                        'text-green-300': isPage(nav.path),
                        'hidden xl:block': nav.canHide,
                      }
                    )}
                  >
                    {resolveTitle(nav.title, nav.bostonTitle)}
                  </Link>
                ))}
                <div className="flex flex-none">
                  <Button
                    to={resolvePath('/stream/')}
                    variant="primary"
                    size="sm"
                    className="hover:opacity-80 ml-4"
                    noShadow
                  >
                    Watch live
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
            </>
          )}
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
              <div className={classnames('mt-4 first:mt-0', nav.className)} key={nav.path}>
                {nav.title ? (
                  <Link to={resolvePath(nav.path)} onClick={closeMenu} noBorder>
                    {resolveTitle(nav.title, nav.bostonTitle)}
                  </Link>
                ) : (
                  <Link to={activeEvent === 'boston' ? '/' : '/boston/'} onClick={closeMenu} noBorder>
                    {activeEvent === 'boston' ? 'Barcelona Event' : 'Boston Event'}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button
                onClick={() => {
                  handleNav(resolvePath('/call-for-abstracts/'));
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
                  handleNav(resolvePath('/stream/'));
                }}
                variant="accent"
                size="sm"
                className="hover:opacity-80 ml-2"
                noShadow
              >
                Watch live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
