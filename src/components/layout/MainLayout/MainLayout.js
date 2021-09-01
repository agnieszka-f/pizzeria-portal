import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../../views/PageNav/PageNav.js';
import AppBar from '../../../../node_modules/@material-ui/core/AppBar';
import Toolbar from '../../../../node_modules/@material-ui/core/Toolbar';
import Container from '../../../../node_modules/@material-ui/core/Container';

const MainLayout = props =>{ 
  return(
    <div>
	  <AppBar>
	    <Container maxWidth='lg'>
	      <Toolbar disableGutters>
            <PageNav />
          </Toolbar>
	    </Container>
	  </AppBar>
      <Toolbar />
	    <Container maxWidth='lg'>
        {props.children}
	    </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;