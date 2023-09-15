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
      itemRarity="white"
    />
  );
};

export const Bear = () => {
  return (
    <ItemBox
      itemName={data.tougher_times.NAME}
      imgSrc="/items/BearIcon.png"
      itemDscr={data.tougher_times.DESC}
      itemRarity="white"
    />
  );
};

export const Behemoth = () => {
  return (
    <ItemBox
      itemName={data.brilliant_behemoth.NAME}
      imgSrc="/items/BehemothIcon.png"
      itemDscr={data.brilliant_behemoth.DESC}
      itemRarity="red"
    />
  );
};
export const AtgMissile = () => {
  return (
    <ItemBox
      itemName={data.atg_missile.NAME}
      imgSrc="/items/AtgIcon.png"
      itemDscr={data.atg_missile.DESC}
      itemRarity="green"
    />
  );
};
export const WilloWisp = () => {
  return (
    <ItemBox
      itemName={data.willo_wisp.NAME}
      imgSrc="/items/WispIcon.png"
      itemDscr={data.willo_wisp.DESC}
      itemRarity="green"
    />
  );
};
export const Dagger = () => {
  return (
    <ItemBox
      itemName={data.dagger.NAME}
      imgSrc="/items/DaggerIcon.png"
      itemDscr={data.dagger.DESC}
      itemRarity="red"
    />
  );
};
export const MonsterTooth = () => {
  return (
    <ItemBox
      itemName={data.monster_tooth.NAME}
      imgSrc="/items/ToothIcon.png"
      itemDscr={data.monster_tooth.DESC}
      itemRarity="white"
    />
  );
};
export const Glasses = () => {
  return (
    <ItemBox
      itemName={data.glasses.NAME}
      imgSrc="/items/GlassesIcon.png"
      itemDscr={data.glasses.DESC}
      itemRarity="white"
    />
  );
};
