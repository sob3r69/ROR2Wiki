'use client';
import React from 'react';
import styles from './itemsPage.module.css';
import ItemList from '@/components/ItemsList/ItemsList';
import ItemsSorting from '@/components/Sorting/ItemsSorting';

const ItemsPage = () => {
  return (
    <>
      <ItemsSorting />
      <main className={styles.items}>
        <ItemList />
      </main>
    </>
  );
};

export default ItemsPage;
