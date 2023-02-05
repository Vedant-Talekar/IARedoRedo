import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Backend from './components/backend/Backend';
import FrontEnd from './components/frontend/FrontEnd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Backend collectionType="food_collection" itemType="foods" />
    <Backend collectionType="drinks_collection" itemType="drinks" />
    {/* <FrontEnd collectionType="food_collection" itemType="foods" />
    <FrontEnd collectionType="drinks_collection" itemType="drinks" /> */}
  </React.StrictMode>
);
