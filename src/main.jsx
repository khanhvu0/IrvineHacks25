import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from '/src/landing.jsx'
import ChatGPTClone from './App'; // Adjust the path if needed
import './landing.css'; // Ensure the CSS file is included

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
