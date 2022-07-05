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
  <>
    <Header location={location} />
    <main>
      {children}
    </main>
    <CookieBanner />
    <Footer />
  </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
