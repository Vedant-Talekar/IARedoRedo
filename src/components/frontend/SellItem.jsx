import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Item = ({ item, deleteTodo, itemCost, itemAmount, itemName }) => {
  const [itemNameState, setItemNameState] = useState(itemName);
  const [itemCostState, setItemCostState] = useState(itemCost);
  const [itemAmountState, setItemAmountState] = useState(itemAmount);
  const [amountInCart, setAmountInCart] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const clickController = () => {
    if (itemAmountState > 0) {
      setAmountInCart(amountInCart + 1);
      setItemAmountState(itemAmountState - 1);
    } else {
      alert('No more available items');
    }
  };

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
    </div>
  );
};

export default Item;
