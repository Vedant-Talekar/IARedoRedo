import { cartStore } from '../../useStore';
import { useState } from 'react';
import CartItem from './CartItem';
import { db } from '../../firebase';

import { doc, setDoc } from 'firebase/firestore';

export default function Cart() {
  const style = {
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`,
  };

  //update firebase store

  const item = cartStore((state) => state.cart);
  const totalCost = cartStore((state) => state.totalCost);
  const resetTotalCost = cartStore((state) => state.resetTotalCost);
  const resetCartArray = cartStore((state) => state.add);

  const resetCart = () => {
    for (let i = 0; i < item.length; i++) {
      console.log(item.length);
      console.log(item[i]);
      updateDB(item[i]);
    }

    resetTotalCost(0);
    resetCartArray([]);
  };

  const updateDB = async (i) => {
    let collection = i.collection;
    console.log(collection);
    let id = i.itemID;
    console.log(i.itemID + ' is the ID');
    const updateDoc = doc(db, collection, id);
    try {
      await setDoc(
        updateDoc,
        { itemAmount: i.itemsRemaining },
        { merge: true }
      );
    } catch (e) {
      console.log('Error');
    }
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Cart</h3>
        Items In Your Cart:
        <ul>
          {item.map((i, index) => (
            <CartItem
              key={index}
              itemName={i.itemName}
              itemCost={i.itemCost}
              amountInCart={i.amountInCart}
              //used for sending data updating amount in DB
              remainingItems={i.itemsRemaining}
            />
          ))}
        </ul>
        Your total = {totalCost}
        <button onClick={resetCart} className={style.button}>
          Checkout
        </button>
      </div>
    </div>
  );
}
