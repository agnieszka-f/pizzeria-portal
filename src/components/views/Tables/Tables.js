import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Tables = props => {

  return(
    <div className={styles.component}>
	  <h2>Tables view</h2>
      <Link to={'/tables/booking/new'}>New booking</Link>
      <Link to={'/tables/booking/123abc'}>Booking details</Link>
      <Link to={'/tables/events/new'}>New event</Link>
      <Link to={'/tables/events/456abc'}>Event details</Link>
    </div>
  );	
	
};



export default Tables;