import React, { useState, useEffect, useRef } from 'react';

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([]); // Start with an empty messages state
  const [input, setInput] = useState('');
  const [outputType, setOutputType] = useState('text'); // State to store the selected output type
  const messagesEndRef = useRef(null);

  // Function to fetch a response from the Flask API
  const fetchResponse = async (userMessage) => {
    try {
      // Adjust the API endpoint and payload to match your Flask backend
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          outputType: outputType,
        }),
      });

      const data = await response.json();
      return data.response; // Assuming the response from Flask is in { "response": "some text" }
    } catch (error) {
      console.error('Error fetching response from API:', error);
      return 'Sorry, there was an error with the server.';
    }
  };

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: input },
    ]);

    // Fetch the bot's response from the API
    const botResponse = await fetchResponse(input);

    // Add the bot's response to the chat
    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: botResponse },
    ]);

    setInput('');
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Title */}
      <div className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Your LeTherapist</h1>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
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
          <div className="flex-1 overflow-y-auto p-6 space-y-4 pt-10">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`${
                    message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  } px-4 py-2 rounded-lg max-w-2xl`}
                >
                  {message.text}
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
                className={`px-4 py-2 rounded-lg ${outputType === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => setOutputType('text')}
              >
                Text
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${outputType === 'audio' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => setOutputType('audio')}
              >
                Audio
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${outputType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => setOutputType('video')}
              >
                Video
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-gray-500">
              * Note: LeBron takes a second for audio and video.
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
              className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTClone;



//you are my sunshine profile picture 
//Dr. LeBonBon
//*online
//background opaque lebron and dwade hard ah pic
//Loading bar: show meme
//Lakers color: gold and purple