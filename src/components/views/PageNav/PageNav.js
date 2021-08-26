import React from 'react';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';

const PageNav = props => {
  return(
    <nav>
      <NavLink exact to={'/'} activeClassName='active'>Home</NavLink>
      <NavLink to={'/login'} activeClassName='active'>Login</NavLink>
      <NavLink to={'/tables'} activeClassName='active'>Tables</NavLink>
      <NavLink to={'/waiter'} activeClassName='active'>Waiter</NavLink>
      <NavLink to={'/kitchen'} activeClassName='active'>Kitchen</NavLink>
    </nav>
  );	
	
};

export default PageNav;