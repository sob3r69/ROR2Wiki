'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { Bear, Behemoth, Syringe } from '@/data/Items';
import Link from 'next/link';
import Modal from '@/components/Modal/Modal';

const ItemsPage = () => {
  return (
    <div className={styles.items}>
      <Link href={'items/soliders_syringe'}>
        <Syringe />
      </Link>
      <Link href={'items/tougher_times'}>
        <Bear />
      </Link>
      <Link href={'items/brilliant_behemoth'}>
        <Behemoth />
      </Link>
    </div>
  );
};

export default ItemsPage;
