import { useDataStore } from './useStore';
import { useState, useEffect } from 'react';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from './firebase';

export default function Demo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'food_collection'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>zustand</div>
      <ul>{items.map((item) => console.log(item))}</ul>
    </>
  );
}
