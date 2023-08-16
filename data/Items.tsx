import json from '@/data/Items.json';
import ItemBox from '@/components/ItemBox/ItemBox';
import './items.css';

const data = json;

export const Syringe = () => {
  return (
    <ItemBox
      itemName={data.soliders_syringe.ITEM_NAME}
      imgSrc="/items/SyringeIcon.png"
      itemDscr={data.soliders_syringe.ITEM_DESC}
    />
  );
};

export const Bear = () => {
  return (
    <ItemBox
      itemName={data.tougher_times.ITEM_NAME}
      imgSrc="/items/BearIcon.png"
      itemDscr={data.tougher_times.ITEM_DESC}
    />
  );
};
