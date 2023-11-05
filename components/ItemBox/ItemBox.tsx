import React from 'react';
import styles from './itembox.module.css';
import Image from 'next/image';
import Link from 'next/link';

type ItemProps = {
  itemName: string;
  imgSrc: string;
  itemDescr: string;
  itemRarity: string;
  itemLink: string;
};
type RarityStyle = {
  [index: string]: { backgroundImage: string };
};

const rarity: RarityStyle = {
  white: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.5))',
  },
  green: {
    backgroundImage: 'linear-gradient(to right, rgba(21, 255, 0, 0.15), rgba(0, 0, 0, 0.5))',
  },
  red: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0.15), rgba(0, 0, 0, 0.5))',
  },
};

const ItemBox = ({ itemName, imgSrc, itemDescr, itemRarity, itemLink }: ItemProps) => {
  const rarStyle = rarity[itemRarity];
  return (
    <Link href={itemLink} style={{ flexGrow: 1, maxWidth: '440px', height: '120px' }}>
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
