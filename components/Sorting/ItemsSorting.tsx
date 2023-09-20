import { itemsAtom, initAtom } from '@/store/Atoms';
import { useAtom } from 'jotai';
import style from './sorting.module.css';

const ItemsSorting = () => {
  const [items, setItems] = useAtom(itemsAtom);
  const [initialItems] = useAtom(initAtom);
  const testData = initialItems.concat();

  const sortItemsUp = () => {
    const sortedItems = testData.sort((a, b) => {
      return a[1].RARITY - b[1].RARITY;
    });
    setItems(sortedItems);
  };
  const sortDataDown = () => {
    const sortedItems = testData.sort((a, b) => {
      return b[1].RARITY - a[1].RARITY;
    });
    setItems(sortedItems);
  };

  const sortWhite = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 0) return item;
    });
    setItems(sortedItems);
  };
  const sortGreen = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 1) return item;
    });
    setItems(sortedItems);
  };
  const sortRed = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 3) return item;
    });
    setItems(sortedItems);
  };

  return (
    <div className={style.container}>
      <button
        className={style.button + ' ' + style.gradientToright}
        type="button"
        onClick={sortItemsUp}
      >
        RARITY -+
      </button>
      <button
        className={style.button + ' ' + style.gradientToleft}
        type="button"
        onClick={sortDataDown}
      >
        +- RARITY
      </button>
      <button className={style.button} type="button" onClick={sortWhite}>
        WHITE
      </button>
      <button className={style.button + ' ' + style.green} type="button" onClick={sortGreen}>
        GREEN
      </button>
      <button className={style.button + ' ' + style.red} type="button" onClick={sortRed}>
        RED
      </button>
    </div>
  );
};
export default ItemsSorting;
