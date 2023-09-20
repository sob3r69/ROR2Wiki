import Link from 'next/link';
import ItemBox from '../ItemBox/ItemBox';
import '@/data/items.css';
import { useAtom } from 'jotai';
import { itemsAtom } from '@/store/Atoms';

const ItemList = () => {
  const [itemData] = useAtom(itemsAtom);
  console.log('ItemList render');

  return (
    <>
      {itemData.map((value, index) => (
        <Link href={'items/' + value[0]}>
          <ItemBox
            imgSrc={'/items/' + value[0] + '.png'}
            itemDscr={value[1].DESC}
            itemName={value[1].NAME}
            itemRarity={value[1].RARITY}
          />
        </Link>
      ))}
    </>
  );
};

export default ItemList;
