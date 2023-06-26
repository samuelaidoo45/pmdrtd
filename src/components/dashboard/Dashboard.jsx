import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>All Tasks</h2>
          {/* Add content for all tasks */}
        </div>
        <div className={styles.card}>
          <h2>Completed Tasks</h2>
          {/* Add content for completed tasks */}
        </div>
        <div className={styles.card}>
          <h2>In Progress Tasks</h2>
          {/* Add content for in progress tasks */}
        </div>
        <div className={styles.card}>
          <h2>Not Started Tasks</h2>
          {/* Add content for not started tasks */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
