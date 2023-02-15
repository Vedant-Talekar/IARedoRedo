import Backend from './components/backend/Backend.jsx';
import FrontEnd from './components/frontend/FrontEnd.jsx';
import Cart from './components/frontend/Cart.jsx';

import { useState } from 'react';

export default function Root() {
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [buttonText, setButtonText] = useState('Show Backend');
  const [showCart, setShowCart] = useState(false);

  // statement ? if true : if false

  const clickHandler = () => {
    setShowFrontEnd(!showFrontEnd);
    if (showFrontEnd) {
      setButtonText('Show Backend');
    } else {
      setButtonText('Show Frontend');
    }
  };

  const cartButtonHandler = () => {
    setShowCart(!showCart);
  };

  const style = {
    bg: ` flex h-screen w-screen p-4 bg-gradient-to-r from-[#db1212] to-[#210c0c]`,
  };

  return (
    <div className={style.bg}>
     <div class="flex flex-col">

        <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>{buttonText}</button>
        <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={cartButtonHandler}>Show Cart</button>
      
      </div>

      {showFrontEnd ? (
        showCart ? (
          <Cart />
        ) : (
          <>
            <FrontEnd collectionType="food_collection" itemType="foods" />
            <FrontEnd collectionType="drinks_collection" itemType="drinks" />
          </>
        )
      ) : (
        <>
          <Backend collectionType="food_collection" itemType="Foods" />
          <Backend collectionType="drinks_collection" itemType="Drinks" />
        </>
      )}
    </div>
  );
}
