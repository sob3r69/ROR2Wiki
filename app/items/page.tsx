'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { Bear, Syringe } from '@/data/Items';
import Link from 'next/link';
import Modal from '@/components/Modal/Modal';

const ItemsPage = () => {
  return (
    <div className={styles.items}>
      <Link href={'items/?item=syringe'}>
        <Syringe />
      </Link>
      <Link href={'items/bear'}>
        <Bear />
      </Link>
    </div>
  );
};

export default ItemsPage;
