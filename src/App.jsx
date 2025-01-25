import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const ChatGPTClone = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [outputType, setOutputType] = useState('text');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const fetchResponse = async (userMessage) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medium: outputType, prompt: userMessage }),
      });
      const data = await response.json();
      return { textResponse: data.text_response, fileUrl: data.file_url };
    } catch (error) {
      console.error('Error fetching response from API:', error);
      return { textResponse: 'Sorry, there was an error with the server.', fileUrl: null };
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsLoading(true);

    const { textResponse, fileUrl } = await fetchResponse(input);

    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: textResponse, fileUrl },
    ]);
    setIsLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        text: 'Hello! I\'m Dr. LeBonbon. How can I assist you today?',
        image: '/docs/assets/Lebron.png',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen flex" style={{
      backgroundImage: 'url("/LeBron_Wade_alley_oop.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className="w-64 bg-purple-600 text-white flex flex-col items-center p-4 fixed h-full top-0 left-0">
        <h1 className="text-2xl font-bold mb-6">Your LeTherapist</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-lg hover:text-yellow-400">Option 1</a>
          <a href="#" className="block text-lg hover:text-yellow-400">Option 2</a>
          <a href="#" className="block text-lg hover:text-yellow-400">Option 3</a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col relative ml-64">
        <div className="relative ml-7 mt-7 bg-white p-2 rounded-lg shadow-md flex items-center space-x-3 w-40">
          <img
            src="https://example.com/lebron-image.jpg"
            alt="LeBron James"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">Dr. LeBonbon</h2>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-7 space-y-4 pt-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} px-4 py-2 rounded-lg max-w-2xl`}
              >
                {message.text}
                {message.fileUrl && outputType === 'audio' && (
                  <div className="mt-4">
                    <audio controls className="w-full">
                      <source src={message.fileUrl} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-300 text-black px-4 py-4 rounded-lg max-w-2xl">
                <div className="dot-flashing-container pb-2">
                  <div className="dot-flashing"></div>
                  <div className="dot-flashing"></div>
                  <div className="dot-flashing"></div>
                </div>
                {/* <img
                  src="/docs/assets/loading_meme.jpg"
                  alt="Loading Meme"
                  className="w-40 mt-2 rounded-lg"
                /> */}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-white p-4 flex flex-col fixed bottom-0 w-full pr-64 z-10">
          <div className="bg-white ml-2 mb-4 z-20">
            <label className="block mb-2 text-gray-700 font-semibold">Choose Output Type:</label>
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
            <p className="text-sm text-gray-500">* Note: LeBron takes a second for audio and video.</p>
          </div>

          <div className="flex items-center space-x-4 pr-4">
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
              className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600"
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

