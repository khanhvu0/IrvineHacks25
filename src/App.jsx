import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing'; // Create this file next
import Chat from './Chat'; // Create this file next

function App() {
  return (
    <div>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Landing />} />
        {/* Chatbot page */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;