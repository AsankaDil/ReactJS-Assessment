import React from 'react';
import Icon from '../common/Icon';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './notification.module.css';

export default function Notification() {
  return (
    <>
      <h1 className={styles.cardContainer}> dasdsds</h1>
      <Icon prop={{ iconName: faBell }}></Icon>
    </>
  );
}
