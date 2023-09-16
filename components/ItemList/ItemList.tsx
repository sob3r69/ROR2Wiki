import Link from 'next/link';
import ItemBox from '../ItemBox/ItemBox';
import json from '@/data/Items.json';
import '@/data/items.css';

const ItemList = () => {
  const data = Object.entries(json);

  data.sort((a, b) => {
    return a[1].RARITY - b[1].RARITY;
  });
  return (
    <>
      {data.map((value, index) => (
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
