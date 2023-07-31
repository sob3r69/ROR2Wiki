import React from 'react';
import styles from './itembox.module.css';
import Image from 'next/image';
import items from '../../data/Items.json';

type ItemProps = {
  itemName: string;
  imgSrc: string;
  itemDscr: string;
};

const ItemBox = ({ itemName, imgSrc, itemDscr: itemDescr }: ItemProps) => {
  return (
    <div className={styles.itembox_container}>
      <Image src={imgSrc} alt="Error" width={64} height={64} />
      <div className={styles.itembox_info}>
        <b>{itemName}</b>
        <div dangerouslySetInnerHTML={{ __html: itemDescr }} />
      </div>
    </div>
  );
};

export default ItemBox;
