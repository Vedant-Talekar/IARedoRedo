import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import SellItem from './SellItem.jsx';
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
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#db1212] to-[#210c0c]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function FrontEnd({ collectionType, itemType }) {
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

        {items.length < 1 ? null : (
          <p
            className={style.count}
          >{`You have ${items.length} ${itemType} in inventory`}</p>
        )}
      </div>

      <ul>
        {items.map((item, index) => (
          <SellItem
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

export default FrontEnd;
