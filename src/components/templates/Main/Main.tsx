import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.scss'

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
};

export default Main;