import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo from './Demo.jsx';
import Root from './Root.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Demo /> */}
    <Root />
  </React.StrictMode>
);
