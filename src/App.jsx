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

  useEffect(() => {
    // Initial welcome message from LeBron
    setMessages([
      { sender: 'bot', text: 'Hello! I\'m Dr. LeBonbon. How can I assist you today?' },
    ]);

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    //<div className="min-h-screen flex flex-col">
<div className="min-h-screen flex" style={{ 
    backgroundImage: 'url("/LeBron_Wade_alley_oop.jpg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed' 
}}>

  {/* Sidebar - Fixed */}
  <div className="w-64 bg-blue-600 text-white flex flex-col items-center p-4 fixed h-full top-0 left-0">
    <h1 className="text-2xl font-bold mb-6">Your LeTherapist</h1>
    <nav className="space-y-4">
      <a href="#" className="block text-lg hover:text-blue-400">Option 1</a>
      <a href="#" className="block text-lg hover:text-blue-400">Option 2</a>
      <a href="#" className="block text-lg hover:text-blue-400">Option 3</a>
    </nav>
  </div>

  {/* Main Chat Area */}
  <div className="flex-1 flex flex-col relative ml-64"> {/* Added ml-64 to avoid overlap */}
    
    {/* LeBron Profile (top left inside chat area) */}
    <div className="absolute top-30 m-7 left-50 bg-white p-2 rounded-lg shadow-md flex items-center space-x-3">
      <img
        src="https://example.com/lebron-image.jpg" // Replace with LeBron's image URL
        alt="LeBron James"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h2 className="text-sm font-semibold">Dr. LeBonbon</h2>
        <span className="text-xs text-green-500">Online</span>
      </div>
    </div>

    {/* Chat Messages - Scrollable Area */}
    <div className="flex-1 overflow-y-auto p-6 space-y-4 pt-28">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
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

    {/* Message Input Bar - Fixed at the Bottom */}
    <div className="bg-white p-4 border-t border-gray-300 flex items-center fixed bottom-0 left-0 w-full ml-64">
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
  

  );
};

export default ChatGPTClone;


//you are my sunshine profile picture 
//Dr. LeBonBon
//*online
//background opaque lebron and dwade hard ah pic
//Loading bar: show meme
//Lakers color: gold and purple
//only send one message per response