import json from '@/data/Items.json';
import ItemBox from '@/components/ItemBox/ItemBox';
import './items.css';

const data = json;

export const Syringe = () => {
  return (
    <ItemBox
      itemName={data.soliders_syringe.NAME}
      imgSrc="/items/SyringeIcon.png"
      itemDscr={data.soliders_syringe.DESC}
    />
  );
};

export const Bear = () => {
  return (
    <ItemBox
      itemName={data.tougher_times.NAME}
      imgSrc="/items/BearIcon.png"
      itemDscr={data.tougher_times.DESC}
    />
  );
};

export const Behemoth = () => {
  return (
    <ItemBox
      itemName={data.brilliant_behemoth.NAME}
      imgSrc="/items/BearIcon.png"
      itemDscr={data.brilliant_behemoth.DESC}
    />
  );
};
