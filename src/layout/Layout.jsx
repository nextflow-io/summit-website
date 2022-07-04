import React from 'react';
import CookieBanner from './CookieBanner';
import Header from './Header';
import Footer from './Footer';
import PropTypes from '../utils/PropTypes';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Layout = ({ children, location }) => (
  <div className="flex flex-col h-screen w-screen">
    <Header location={location} />
    <main>
      {children}
    </main>
    <CookieBanner />
    <Footer />
  </div>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
