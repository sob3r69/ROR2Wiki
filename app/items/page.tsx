'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import ItemList from '@/components/ItemList/ItemList';

const ItemsPage = () => {
  return (
    <main className={styles.items}>
      <ItemList />
    </main>
  );
};

export default ItemsPage;
