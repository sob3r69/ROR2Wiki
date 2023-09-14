'use client';
// import { DocumentData, collection, doc, getDoc } from 'firebase/firestore';
// import { firebaseConfig, db } from '@/firebase';
import style from './itemPage.module.css';
import { usePathname, useParams } from 'next/navigation';
import json from '@/data/Items.json';
import '@/data/items.css';
import LoreField from '@/components/LoreField/LoreField';
import StackCalculator from '@/components/StackCalculator/StackCalculator';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const page = () => {
  const route = useParams().itemName;

  const [name, setName] = useState('');
  const [descr, setDescr] = useState('');
  const [lore, setLore] = useState('');
  // useEffect(() => {
  //   (async () => {
  //     const itemsRef = doc(db, 'items', route.toString());
  //     const itemSnapshot = await getDoc(itemsRef);

  //     if (itemSnapshot.exists()) {
  //       console.log(itemSnapshot.data());
  //       setName(itemSnapshot.data().name);
  //       setDescr(itemSnapshot.data().description);
  //       setLore(itemSnapshot.data().lore);
  //     }
  //   })();
  // }, []);
  return (
    <main className={style.content}>
      <div className={style.model_preview}>
        <Image src="/items/BearIcon.png" alt="Lol" width={128} height={128}></Image>
      </div>
      <section className={style.info_container}>
        {/* @ts-ignore */}
        <p>{json[route].NAME}</p>
        {/* @ts-ignore */}
        <p dangerouslySetInnerHTML={{ __html: json[route].DESC }} />
        {/* @ts-ignore */}
        <LoreField content={json[route].LORE} />
        <StackCalculator
          // @ts-ignore
          initVal={json[route].INIT}
          // @ts-ignore
          stackType={json[route].STACK}
          // @ts-ignore
          iterVal={json[route].ITER}
          // @ts-ignore
          stackSymbol={json[route].SYMBOL}
        />
      </section>
    </main>
  );
};

export default page;
