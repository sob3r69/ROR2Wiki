import React, { CSSProperties } from 'react';
import styles from './itembox.module.css';
import Image from 'next/image';
import items from '../../data/Items.json';

type ItemProps = {
  itemName: string;
  imgSrc: string;
  itemDscr: string;
  itemRarity: number;
};
type RarityStyle = {
  [index: string]: { backgroundImage: string };
};

const rarity: RarityStyle = {
  // White
  0: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.5))',
  },
  //Green
  1: {
    backgroundImage: 'linear-gradient(to right, rgba(21, 255, 0, 0.15), rgba(0, 0, 0, 0.5))',
  },
  //Red
  3: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0.15), rgba(0, 0, 0, 0.5))',
  },
};

const ItemBox = ({ itemName, imgSrc, itemDscr: itemDescr, itemRarity }: ItemProps) => {
  const rarStyle = rarity[itemRarity];
  return (
    <div className={styles.container} style={rarStyle}>
      <Image src={imgSrc} alt="Error" width={64} height={64} />
      <div className={styles.info}>
        <b>{itemName}</b>
        <div dangerouslySetInnerHTML={{ __html: itemDescr }} />
      </div>
    </div>
  );
};

export default ItemBox;
