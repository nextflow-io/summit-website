import React from 'react';
import CookieBanner from './CookieBanner';
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
    <>
      {pageContext.layout !== 'Plain' && (
          <Header location={location} />
      )}
      <div className="fixed top-32 right-[calc(50%_-_650px)] z-10">
        <EventSwitcher />
      </div>
      <main className="min-h-[calc(100vh_-_7rem_-_1px)] md:min-h-[calc(100vh_-_9rem_-_1px)]">
        {children}
      </main>
      <CookieBanner />
      <Footer />
    </>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
