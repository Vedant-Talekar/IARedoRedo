import Backend from './components/backend/Backend.jsx';
import FrontEnd from './components/frontend/FrontEnd.jsx';
import Cart from './components/frontend/Cart.jsx';

import { useEffect, useState } from 'react';

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



  // const [theme,setTheme] = useState["Light"];

  // useEffect(() => {
  //   if(theme === "dark"){
  //     document.documentElement.classList.add("dark");
  //   }else{
  //       document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme[theme === "dark" ? "light" : "dark"];
  // };


  const style = {
    bg: ` flex justify-center h-screen w-screen p-4 bg-slate-800`,
    // bg: ` flex justify-center h-screen w-screen p-4 bg-white`,
    pos: `m-2 justify-end`,
    pos1: `m-1 justify-auto `,
    
  };


  return (
    <>
      {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
       focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
       dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
       onClick={handleThemeSwitch} >Dark</button> */}

      
      <div className="flex-column absolute inset-x-0 bottom-0 left-10 h-16" > 
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={clickHandler}>{buttonText}</button>
        {showFrontEnd ? (   
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={cartButtonHandler}>
            
            {showCart ? <>Show Frontend</> : <>Show Cart</>}
            </button> 
        ) : null}
      </div>



    <div className={style.bg}>


      {showFrontEnd ? (
        showCart ? (
          <Cart />
        ) : (
          <>
            <div className={style.pos}>
            <FrontEnd collectionType="food_collection" itemType="Foods" />
            <FrontEnd collectionType="drinks_collection" itemType="Drinks" />
            </div>
          </>
        )
      ) : (
        <>
        <div className={style.pos1}>
          <Backend collectionType="food_collection" itemType="Food" />
          </div>
          <div className={style.pos1}>
          <Backend collectionType="drinks_collection" itemType="Drinks" />
          </div>
        </>
      )}
    </div>
    </>
  );
}


