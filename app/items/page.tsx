'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import {
  AtgMissile,
  Bear,
  Behemoth,
  Dagger,
  Glasses,
  MonsterTooth,
  Syringe,
  WilloWisp,
} from '@/data/Items';
import Link from 'next/link';
import Modal from '@/components/Modal/Modal';

const ItemsPage = () => {
  return (
    <main className={styles.items}>
      <Link href={'items/soliders_syringe'}>
        <Syringe />
      </Link>
      <Link href={'items/tougher_times'}>
        <Bear />
      </Link>
      <Link href={'items/brilliant_behemoth'}>
        <Behemoth />
      </Link>
      <Link href={'items/atg_missile'}>
        <AtgMissile />
      </Link>
      <Link href={'items/willo_wisp'}>
        <WilloWisp />
      </Link>
      <Link href={'items/dagger'}>
        <Dagger />
      </Link>
      <Link href={'items/monster_tooth'}>
        <MonsterTooth />
      </Link>
      <Link href={'items/glasses'}>
        <Glasses />
      </Link>
    </main>
  );
};

export default ItemsPage;
