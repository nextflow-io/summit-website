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
  return (
    <LayoutProvider location={location}>
      {pageContext.layout !== 'Plain' && (
          <Header location={location} />
      )}
      <div className="fixed top-20 md:top-32 w-full z-10">
        <div className="container-lg flex justify-center lg:justify-end">
          <EventSwitcher />
        </div>
      </div>
      <main className="min-h-[calc(100vh_-_7rem_-_1px)] md:min-h-[calc(100vh_-_9rem_-_1px)]">
        {children}
      </main>
      <CookieBanner />
      <Footer />
    </LayoutProvider>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
