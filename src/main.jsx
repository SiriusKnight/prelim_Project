import React from 'react';
import ReactDOM from 'react-dom/client';
import Ed from './Components/Ed';
import Header from './Components/Header';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ed />
    <Header />
  </React.StrictMode>,
)