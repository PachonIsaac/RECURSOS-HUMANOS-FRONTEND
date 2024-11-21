import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardDashboard.module.css';
import { Link } from 'react-router-dom';

const CardDashboard = ({ title, IconComponent, url }) => {
  return (
    <Link to={url} className={styles.cardLink}>
      <div className={styles.card}>
        <IconComponent className={styles.cardIcon} />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </Link>
  );
};

CardDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardDashboard;