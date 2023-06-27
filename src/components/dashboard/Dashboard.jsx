import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>All Tasks</h2>
          <span className={styles.metrics}>10k</span>
        </div>
        <div className={styles.card}>
          <h2>Completed Tasks</h2>
          <span className={styles.metrics}>5k</span>
        </div>
        <div className={styles.card}>
          <h2>In Progress Tasks</h2>
          <span className={styles.metrics}>2k</span>
        </div>
        <div className={styles.card}>
          <h2>Not Started Tasks</h2>
          <span className={styles.metrics}>3k</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
