import React from 'react';
import styles from './BookingDetails.module.scss';
import PropTypes from 'prop-types';

const BookingDetails = props => { 

  const {match} = props;
  return(
    <div className={styles.component}>
	  <h2>BookingDetails view - id: {match.params.id}</h2>
    </div>
  );	
	
};

BookingDetails.propTypes = {
  match: PropTypes.object,
};

export default BookingDetails;