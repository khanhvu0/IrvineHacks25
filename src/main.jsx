import React from 'react';
import ReactDOM from 'react-dom/client';
import LeTherapyApp from './App'; // Adjust the path if needed
import './index.css'; // Ensure the CSS file is included
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);