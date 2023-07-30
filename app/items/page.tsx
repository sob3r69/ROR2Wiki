import React from 'react';
import styles from './page.module.css';
import { Bear, Syringe } from '@/data/Items';
import Link from 'next/link';

const ItemsPage = () => {
  return (
    <div className={styles.items}>
      <Link href={'items/syringe'}>
        <Syringe />
      </Link>
      <Link href={'items/bear'}>
        <Bear />
      </Link>
    </div>
  );
};

export default ItemsPage;
