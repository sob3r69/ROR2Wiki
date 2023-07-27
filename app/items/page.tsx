import React from 'react';
import styles from './page.module.css';
import { Bear, Syringe } from '@/data/Items';

const page = () => {
  return (
    <div className={styles.items}>
      <Syringe />
      <Bear />
    </div>
  );
};

export default page;
