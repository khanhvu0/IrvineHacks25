import React, { useState, useEffect, useRef } from 'react';

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', 
      text: 'Hello! How can I assist you today?',
      image: "/docs/assets/Lebron.png", // le Pookie
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), 
    },
  ]);
  const [input, setInput] = useState('');
  const [outputType, setOutputType] = useState('text'); // State to store the selected output type
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: input },
      { sender: 'bot', 
        text: 'Hello! How can I assist you today?', //We should fix this
        image: "/docs/assets/Lebron.png", // le Pookie
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), 
      },
    ]);

    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Title */}
      <div className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">LeBron James, Licensed Therapist</h1>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Options</h2>
          <nav className="space-y-4">
            <a href="#" className="block text-lg hover:text-blue-400">
              Option 1
            </a>
            <a href="#" className="block text-lg hover:text-blue-400">
              Option 2
            </a>
            <a href="#" className="block text-lg hover:text-blue-400">
              Option 3
            </a>
          </nav>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-100">

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Show image only for bot messages */}
                  {message.sender === 'bot' && message.image && (
                    <img
                      className="w-8 h-8 rounded-full"
                      src={message.image}
                      alt={`${message.sender} avatar`}
                    />
                  )}
                  <div
                    className={`${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-black'
                    } px-4 py-2 rounded-lg max-w-2xl`}
                  >
                    <p>{message.text}</p>
                    {/* Display timestamp for all messages */}
                    <span className="text-xs text-gray-500 block mt-1">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Output Type Selector */}
          <div className="bg-white p-4 border-t border-gray-300">
            <label className="block mb-2 text-gray-700 font-semibold">
              Choose Output Type:
            </label>
            <div className="flex space-x-4 mb-2">
              <button
                className={`px-4 py-2 rounded-lg ${
                  outputType === 'text'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => setOutputType('text')}
              >
                Text
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  outputType === 'audio'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => setOutputType('audio')}
              >
                Audio
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  outputType === 'video'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => setOutputType('video')}
              >
                Video
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-gray-500">
              * Note: Even LeBron needs time to think for audio and video.
            </p>
          </div>

          {/* Input Area */}
          <div className="bg-white p-4 border-t border-gray-300 flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-blue-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-700"
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTClone;
