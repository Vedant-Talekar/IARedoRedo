import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Item from '../../Item';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const style = {
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-7`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-1 w-full text-l`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function Backend({ collectionType, itemType }) {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState();
  const [itemAmount, setItemAmount] = useState();

  // Create new Item
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (itemName === '') {
      alert('Please enter a valid item name');
      return;
    }
    if (itemCost === 0) {
      alert('Please enter a valid item cost');
      return;
    }
    await addDoc(collection(db, collectionType), {
      itemName: itemName,
      itemCost: itemCost,
      itemAmount: itemAmount,
      collection: collectionType,
    });
    setItemName('');
    setItemCost(0);
    setItemAmount(0);
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, collectionType));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  // const toggleComplete = async (todo) => {
  //   await updateDoc(doc(db, 'todos', todo.id), {
  //     completed: !todo.completed,
  //   });
  // };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, collectionType, id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>{itemType}</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Item Name"
          />

          <input
            value={itemCost}
            onChange={(e) => setItemCost(e.target.value)}
            className={style.input}
            type="number"
            placeholder="Item Cost"
          />

          <input
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
            className={style.input}
            type="number"
            placeholder="Item Amount"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>

        {items.length < 1 ? null : (
          <p
            className={style.count}
          >{`You have ${items.length} orders to fulfill`}</p>
        )}
      </div>

      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            deleteTodo={deleteTodo}
            itemCost={item.itemCost}
            itemAmount={item.itemAmount}
            itemName={item.itemName}
          />
        ))}
      </ul>
    </div>
  );
}

export default Backend;
