import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../../views/PageNav/PageNav.js';

const MainLayout = props =>{
  return(
    <div>
      <PageNav />
      <div>{props.children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;