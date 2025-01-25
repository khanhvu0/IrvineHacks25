import React, { useState } from 'react';
import './index.css'; // Ensure this CSS file is imported

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: input },
      { sender: 'bot', text: 'This is a response from the bot!' },
    ]);

    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-gray-300">
      {/* Chat Header */}
      <header className="text-white text-center py-10">
        <h1 className="text-5xl font-extrabold mb-4">
          ChatGPT Clone
        </h1>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 w-full max-w-2xl space-y-4 bg-white rounded-lg shadow-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`${
                message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-300'
              } text-white px-4 py-2 rounded-lg max-w-xs`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-300 flex items-center w-full max-w-2xl">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">
          &copy; 2024 ChatGPT Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ChatGPTClone;
