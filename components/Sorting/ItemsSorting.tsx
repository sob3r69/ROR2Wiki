import { itemsAtom, initAtom } from '@/store/Atoms';
import { useAtom } from 'jotai';
import style from './sorting.module.css';

const ItemsSorting = () => {
  const [items, setItems] = useAtom(itemsAtom);
  const [initialItems] = useAtom(initAtom);
  const testData = initialItems.concat();

  const sortItemsUp = () => {
    setItems(filterWhite().concat(filterGreen()).concat(filterRed()));
  };
  const sortDataDown = () => {
    setItems(filterRed().concat(filterGreen()).concat(filterWhite()));
  };

  const filterWhite = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 'white') return item;
    });
    setItems(sortedItems);
    return sortedItems;
  };
  const filterGreen = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 'green') return item;
    });
    setItems(sortedItems);
    return sortedItems;
  };
  const filterRed = () => {
    const sortedItems = testData.filter((item) => {
      if (item[1].RARITY === 'red') return item;
    });
    setItems(sortedItems);
    return sortedItems;
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
      <button className={style.button} type="button" onClick={filterWhite}>
        WHITE
      </button>
      <button className={style.button + ' ' + style.green} type="button" onClick={filterGreen}>
        GREEN
      </button>
      <button className={style.button + ' ' + style.red} type="button" onClick={filterRed}>
        RED
      </button>
      <button className={style.button + ' ' + style.red} type="button" onClick={filterRed}>
        ORANGE
      </button>
      <button className={style.button + ' ' + style.red} type="button" onClick={filterRed}>
        PURPLE
      </button>
      <button className={style.button + ' ' + style.red} type="button" onClick={filterRed}>
        BLUE
      </button>
    </div>
  );
};
export default ItemsSorting;
