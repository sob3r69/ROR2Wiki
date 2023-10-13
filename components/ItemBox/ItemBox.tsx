import React from 'react';
import styles from './itembox.module.css';
import Image from 'next/image';
import Link from 'next/link';

type ItemProps = {
  itemName: string;
  imgSrc: string;
  itemDscr: string;
  itemRarity: number;
  itemLink: string;
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

const ItemBox = ({ itemName, imgSrc, itemDscr: itemDescr, itemRarity, itemLink }: ItemProps) => {
  const rarStyle = rarity[itemRarity];
  return (
    <Link href={itemLink} style={{ flexGrow: 1, maxWidth: '440px' }}>
      <div className={styles.container} style={rarStyle}>
        <Image src={imgSrc} alt="Error" width={64} height={64} />
        <span className={styles.info}>
          <b>{itemName}</b>
          <div dangerouslySetInnerHTML={{ __html: itemDescr }} />
        </span>
      </div>
    </Link>
  );
};

export default ItemBox;
