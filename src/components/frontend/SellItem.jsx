import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { cartStore } from '../../useStore';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  buttonTwo: `object-center border p-4 ml-2 bg-purple-500 text-slate-100`,
};

const Item = ({ item, deleteTodo, itemCost, itemAmount, itemName }) => {
  const [itemNameState, setItemNameState] = useState(itemName);
  const [itemCostState, setItemCostState] = useState(itemCost);
  const [itemAmountState, setItemAmountState] = useState(itemAmount);
  const [amountInCart, setAmountInCart] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const cartData = cartStore((state) => state.cart);
  const addToTotalCost = cartStore((state) => state.updateTotalCost);
  const updateCart = cartStore((state) => state.add);

  const clickController = () => {
    if (itemAmountState > 0) {
      setAmountInCart(amountInCart + 1);
      setItemAmountState(itemAmountState - 1);
      addToTotalCost(itemCost);
    } else {
      alert('No more available items');
    }
  };

  function sendToCart() {
    let dataCopy = cartData;
    dataCopy.push({
      amountInCart: amountInCart,
      itemName: itemName,
      itemCost: itemCost,
      //forDB
      itemID: item.id,
      itemsRemaining: itemAmountState,
      collection: item.collection,
    });
    // updateCart(dataCopy);
  }

  return (
    <div>
      <button onClick={clickController}>
        <li className={item.completed ? style.liComplete : style.li}>
          <div className={style.row}>
            Item Name:{itemNameState} Item Cost: ${itemCostState} itemAmount:{' '}
            {itemAmountState}
            Amount in Cart: {amountInCart}
            Total cost: {amountInCart * itemCostState}
          </div>
        </li>
      </button>
      <button className={style.buttonTwo} onClick={sendToCart}>
        Send to cart
      </button>
      {/* <button className={style.buttonTwo} onClick={console.log(cartData)}>
        view console.log
      </button> */}
    </div>
  );
};

export default Item;
