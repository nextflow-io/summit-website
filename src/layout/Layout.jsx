import React from 'react';
import CookieBanner from './CookieBanner';
import { LayoutProvider } from './Context';
import EventSwitcher from '../components/EventSwitcher';
import Header from './Header';
import Footer from './Footer';
import PropTypes from '../utils/PropTypes';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Layout = ({ children, location, pageContext }) => {
  if (pageContext.layout === 'foyer') return <LayoutProvider location={location}>{children}</LayoutProvider>;
  return (
    <LayoutProvider location={location}>
      {pageContext.layout !== 'Plain' ? (
        <>
          <Header location={location} />
          <div className="fixed top-20 right-0 md:top-[153px] z-10">
            <EventSwitcher />
          </div>
        </>
      ) : (
        <Header hideNav />
      )}
      <main className="min-h-[calc(100vh_-_64px)] pt-[64px] md:pt-[96px]">{children}</main>
      <CookieBanner />
      <Footer />
    </LayoutProvider>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
