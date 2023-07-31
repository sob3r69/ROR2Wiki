import json from '@/data/Items.json';
import ItemBox from '@/components/ItemBox/ItemBox';
import './items.css';

const data = json.strings;

export const Syringe = () => {
  return (
    <ItemBox
      itemName={data.ITEM_SYRINGE_NAME}
      imgSrc="/items/SyringeIcon.png"
      itemDscr={data.ITEM_SYRINGE_DESC}
    />
  );
};

export const Bear = () => {
  return (
    <ItemBox
      itemName={data.ITEM_BEAR_NAME}
      imgSrc="/items/BearIcon.png"
      itemDscr={data.ITEM_BEAR_DESC}
    />
  );
};
