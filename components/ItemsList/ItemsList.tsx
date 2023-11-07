import ItemBox from '../ItemBox/ItemBox';
import '@/data/items.css';
import { useAtom } from 'jotai';
import { itemsAtom } from '@/store/Atoms';

const ItemsList = () => {
  const [itemData] = useAtom(itemsAtom);
  console.log('ItemList render');

  return (
    <>
      {itemData.map((value, index) => (
        <ItemBox
          key={index}
          itemLink={'items/' + value[0]}
          imgSrc={'/items/' + value[0] + '.png'}
          itemDescr={value[1].DESC}
          itemName={value[1].NAME}
          itemRarity={value[1].RARITY}
        />
      ))}
    </>
  );
};

export default ItemsList;
