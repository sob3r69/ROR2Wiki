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
export const GoatsHoof = () => {
  return (
    <ItemBox
      itemName={data.goat_hoof.NAME}
      imgSrc="/items/HoofIcon.png"
      itemDscr={data.goat_hoof.DESC}
      itemRarity="white"
    />
  );
};
export const HopooFeather = () => {
  return (
    <ItemBox
      itemName={data.hopoo_feather.NAME}
      imgSrc="/items/FeatherIcon.png"
      itemDscr={data.hopoo_feather.DESC}
      itemRarity="green"
    />
  );
};
export const Ukulele = () => {
  return (
    <ItemBox
      itemName={data.ukulele.NAME}
      imgSrc="/items/UkuleleIcon.png"
      itemDscr={data.ukulele.DESC}
      itemRarity="green"
    />
  );
};
export const LeechSeed = () => {
  return (
    <ItemBox
      itemName={data.leeching_seed.NAME}
      imgSrc="/items/SeedIcon.png"
      itemDscr={data.leeching_seed.DESC}
      itemRarity="white"
    />
  );
};
export const FrostRelic = () => {
  return (
    <ItemBox
      itemName={data.frost_relic.NAME}
      imgSrc="/items/FrostRelicIcon.png"
      itemDscr={data.frost_relic.DESC}
      itemRarity="red"
    />
  );
};
