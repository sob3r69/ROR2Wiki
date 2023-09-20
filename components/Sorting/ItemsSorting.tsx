import { itemsAtom } from '@/store/Atoms';
import { useAtom } from 'jotai';
import React from 'react';
import style from './sorting.module.css';

const ItemsSorting = () => {
  const [items, setItems] = useAtom(itemsAtom);
  const testData = items.concat();

  const sortItemsUp = () => {
    const sortedItems = testData.sort((a, b) => {
      return a[1].RARITY - b[1].RARITY;
    });
    setItems(sortedItems);
    console.log(items);
  };
  const sortDataDown = () => {
    const sortedItems = testData.sort((a, b) => {
      return b[1].RARITY - a[1].RARITY;
    });
    setItems(sortedItems);
    console.log(items);
  };

  // const sortWhite = () => {
  //   const sortedItems = testData.filter((item) => {
  //     if (item[1].RARITY === 0) return item;
  //   });
  //   setItems(sortedItems);
  //   console.log(items);
  // };

  return (
    <div className={style.container}>
      <button onClick={sortItemsUp}>RARITY -+</button>
      <button onClick={sortDataDown}>RARITY +-</button>
      {/* <button onClick={sortWhite}>white</button> */}
    </div>
  );
};
export default ItemsSorting;
