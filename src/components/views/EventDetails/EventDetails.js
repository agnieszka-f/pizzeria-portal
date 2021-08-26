import React from 'react';
import styles from './EventDetails.module.scss';
import PropTypes from 'prop-types';

const EventDetails = props => {
  const {match} = props;
  return(
    <div className={styles.component}>
	  <h2>EventDetails view - id: {match.params.id}</h2>
    </div>
  );	
	
};

EventDetails.propTypes = {
  match: PropTypes.object,
};

export default EventDetails;