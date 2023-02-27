import React from 'react';
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
  return (
    <li className={item.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        {' '}
        Item Cost: ${itemCost} Item Amount:  {itemAmount} Item Name:  {itemName}{' '}
      </div>
      <button onClick={() => deleteTodo(item.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Item;
