import React from 'react';
import AppBar from '../AppBar/AppBar';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
