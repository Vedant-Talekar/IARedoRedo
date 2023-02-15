import { create } from 'zustand';
import { useEffect } from 'react';

// useEffect(() => {
//   const q = query(collection(db, collectionType));
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     let itemsArr = [];
//     querySnapshot.forEach((doc) => {
//       itemsArr.push({ ...doc.data(), id: doc.id });
//     });
//     setItems(itemsArr);
//   });
//   return () => unsubscribe();
// }, []);

// export const useDataStore = create((set) => ({
//   data: 50,
//   person: [{ name: 'Ian', age: 50 }],
//   add: () => set((state) => ({ data: state.data + 1 })),
//   addByNumber: (number) => set((state) => ({ data: state.data + number })),
// }));

export const cartStore = create((set) => ({
  //amountInCart itemName itemCost
  totalCost: 0,
  cart: [],
  add: (itemToAdd) => set((state) => ({ cart: itemToAdd })),
  updateTotalCost: (amount) =>
    set((state) => ({
      totalCost: parseInt(state.totalCost) + parseInt(amount),
    })),
  resetTotalCost: () => set((state) => ({ totalCost: 0 })),
}));
