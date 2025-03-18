import React from 'react';
import styles from './globalSearch.module.css';

export default function GlobalSearch() {
  return (
    <input
      className={styles.cardContainer}
      // style={{
      //   width: '100%',
      //   borderRadius: '5px',
      //   border: 'none',
      //   borderRight: '1px solid #f9f8f8',
      //   height: '30px',
      //   float: 'left',
      // }}
      type='text'
      placeholder='Type any where to search'
    />
  );
}
