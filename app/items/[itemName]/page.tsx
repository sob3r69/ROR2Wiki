'use client';
import { DocumentData, collection, doc, getDocs } from 'firebase/firestore';
import { firebaseConfig, db } from '@/firebase';
import style from './itemPage.module.css';
import { usePathname, useParams } from 'next/navigation';
import json from '@/data/Items.json';
import '@/data/items.css';
import LoreField from '@/components/LoreField/LoreField';
import StackCalculator from '@/components/StackCalculator/StackCalculator';

const page = () => {
  // const [descr, setDescr] = useState<any>([]);
  // useEffect(() => {
  //   (async () => {
  //     const colRef = collection(db, 'items');
  //     const snapshot = await getDocs(colRef);
  //     const docs = snapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       data.id = doc.id;
  //       return data;
  //     });
  //     setDescr(docs[0]);
  //     console.log(docs[0]);
  //   })();
  // }, []);
  const route = useParams().itemName;
  return (
    <div className={style.content}>
      <div className={style.model_preview}></div>
      <div className={style.info_container}>
        {/* @ts-ignore */}
        <p>{json[route].NAME}</p>
        {/* @ts-ignore */}
        <p dangerouslySetInnerHTML={{ __html: json[route].DESC }} />
        {/* @ts-ignore */}
        <LoreField content={json[route].LORE} />
        <StackCalculator />
      </div>
    </div>
  );
};

export default page;
