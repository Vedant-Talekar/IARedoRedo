import Backend from './components/backend/Backend.jsx';
import FrontEnd from './components/frontend/FrontEnd.jsx';
import Cart from './components/frontend/Cart.jsx';

import { useState } from 'react';

export default function Root() {
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [buttonText, setButtonText] = useState('Show Frontend');
  const [showCart, setShowCart] = useState(false);

  // statement ? if true : if false

  const clickHandler = () => {
    setShowFrontEnd(!showFrontEnd);
    if (showFrontEnd) {
      setButtonText('Show FrontEnd');
    } else {
      setButtonText('Show Backend');
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
      <div className="flex-column" > 
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={clickHandler}>{buttonText}</button>
        {showFrontEnd ? (   
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={cartButtonHandler}>Show Cart</button> 
        ) : null}
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


