import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardDashboard.module.css';

const Card = ({ title, iconName }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardIcon} src={iconName} alt={`${title} icon`} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default Card;