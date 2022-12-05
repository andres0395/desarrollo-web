import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ventas from './tienda/Ventas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ventas />
  </React.StrictMode>
);

