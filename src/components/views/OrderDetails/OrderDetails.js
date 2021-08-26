import React from 'react';
import styles from './OrderDetails.module.scss';
import PropTypes from 'prop-types';

const OrderDetails = props => {
  const {match} = props;
  
  return(
    <div className={styles.component}>
	  <h2>OrderDetails view - id: {match.params.id}</h2>
    </div>
  );	
	
};

OrderDetails.propTypes = {
  match: PropTypes.object,
};

export default OrderDetails;