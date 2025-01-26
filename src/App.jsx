import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const LeTherapyApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [outputType, setOutputType] = useState('text');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [currentImage, setCurrentImage] = useState('');


  const pollJobStatus = async (jobId, messageIndex) => {
    const interval = 5000; // Poll every 5 seconds
    const poller = setInterval(async () => {
      try {
        const response = await fetch(`https://irvinehacks25.onrender.com/api/status/${jobId}`);
        const data = await response.json();

        if (data.status === "completed") {
          console.log("Status completed:", data);
  
          // Manually update the state
          setMessages((prevMessages) =>
            prevMessages.map((message) =>
              message.jobId === jobId
                ? {
                    ...message,
                    status: "completed",
                    fileUrl: data.file_url, // Update fileUrl
                  }
                : message
            )
          );
        } else {
          console.log("Status still pending:", data);
          setTimeout(() => pollJobStatus(jobId), 5000); // Retry after delay
        }

      } catch (error) {
        console.error('Error polling job status:', error);
        clearInterval(poller);
      }
    }, interval);
  };

  const fetchResponse = async (userMessage) => {
    try {
      const response = await fetch('https://irvinehacks25.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medium: outputType, prompt: userMessage }),
      });
      const data = await response.json();

      console.log(data);

      return { textResponse: data.text_response, fileUrl: data.file_url, jobId: data.job_id };
    } catch (error) {
      console.error('Error fetching response from API:', error);
      return { textResponse: 'Sorry, there was an error with the server.', fileUrl: null, jobId: null };
    }
  };

  const images = [
    '/lebronAHHHH.jpg',
    '/lebronJRSmith.jpg',
    '/lebronSmiling.jpg',
    '/lebronTacoTuesday.jpg',
    'lebron_bugs.png',
    'bronbronnyTomJerry.png',
    'whatsYourFavoriteChapterLebron.png'
  ];

  const pickRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'user', text: input, type: 'text' }]);
    setInput('');
    setIsLoading(true);
    pickRandomImage(); 
    const { textResponse, fileUrl, jobId } = await fetchResponse(input);

    const newMessage = {
      sender: 'bot',
      text: textResponse,
      fileUrl: fileUrl || null,
      type: outputType,
      status: jobId ? 'pending' : 'completed',
      jobId: jobId || null,
    };

    setMessages((prev) => [...prev, newMessage]);
    console.log("Messages before polling:")
    console.log(messages)
    console.log("Messages length:", messages.length)
    if (jobId) {
      pollJobStatus(jobId, messages.length);
      console.log("Messages after polling")
      console.log(messages)
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const chatContainer = messagesEndRef.current;
      
    console.log("IM HERE")
    chatContainer.scrollTo( 0, chatContainer.scrollHeight, {behavior: "smooth"});
      
  }, [messages, currentImage, isLoading]);
  

  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        text: 'Hello! I\'m Dr. LeBonbon. How can I assist you today?',
        image: '/docs/assets/Lebron.png',
        type: 'text',
        status: 'completed',
      },
    ]);
  }, []);

  const renderMedia = (message) => {
    if (!message.fileUrl && !(message.type === 'text')) {
      return <p className="text-sm text-gray-500">Processing {message.type}...</p>;
    }

    if (message.type === 'audio') {
      console.log("Messages (audio)");
      console.log(messages);
      return (
        <audio controls className="w-full my-3">
          <source src={message.fileUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      );
    }

    if (message.type === 'video') {
      return (
        <video controls className="w-full my-3">
          <source src={message.fileUrl} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      );
    }

    return null;
  };


  return (
    <div className="min-h-screen flex" style={{
      backgroundImage: 'url("/leBron_Lakers_Dunk.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: '100% 70%',
      backgroundAttachment: 'fixed',
    }}>
        <div className="fixed inset-0 bg-white opacity-90 z-0" ></div>
      <div className="w-64 bg-gradient-to-b from-yellow-500 to-purple-700 text-white flex flex-col items-center p-4 fixed h-full top-0 left-0">

        <h1 className="text-3xl font-bold m-6">LeTherapy</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-m hover:text-yellow-400">Chat History</a>
        </nav>
        <div className="mt-auto">
        <a href="https://www.lebronjames.com/" target="_blank">
            <img
                src="/lebron_logo.png" 
                alt="LeBron James"
                className="w-55 h-20 "
            />
        </a>
        </div>
      </div>

    {/* Main Chat Area */}
    <div className="flex-1 flex flex-col relative ml-64" style={{ height:"100vh" }}> {/* Added ml-64 to avoid overlap */}

      <div className="relative mb-5">
        <div className="absolute top-0 z-50 left-0 ml-7 mt-7 bg-white p-2 rounded-lg shadow-md flex items-center space-x-3 w-40">
          <img
            src="/docs/assets/Lebron-James.png" 
            alt="LeBron James"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold pt-1">Dr. LeBonbon</h2>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
      </div>

        <div className="flex-1 overflow-y-auto p-7 space-y-4 pt-24 " ref={messagesEndRef}>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-lg max-w-xl ${message.sender === 'user' ? 'bg-violet-200 text-black' : 'bg-amber-50 text-black'} px-4 py-2 rounded-lg max-w-2xl`}>
                <p>{message.text}</p>
                {message.type !== 'text' && renderMedia(message)}
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
                <img
                  src={currentImage}
                  alt="Loading Meme"
                  className="w-40 mt-2 rounded-lg"
                /> 
              </div>
            </div>
          )}
          
          
        </div>
        
        <div className="bg-white p-4 flex flex-col bottom-0 w-full z-10 ">
          <div className="bg-white ml-2 mb-4 z-20">
            <label className="block mb-2 text-gray-700 font-semibold">Choose Response Type:</label>
            <div className="flex space-x-4 mb-2">
              <button
                className={`px-4 py-2 rounded-lg ${outputType === 'text' ? 'bg-purple-500 text-white' : 'bg-amber-100 text-gray-700'}`}
                onClick={() => setOutputType('text')}
              >
                Text
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${outputType === 'audio' ? 'bg-purple-500 text-white' : 'bg-amber-100 text-gray-700'}`}
                onClick={() => setOutputType('audio')}
              >
                Audio
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${outputType === 'video' ? 'bg-purple-500 text-white' : 'bg-amber-100 text-gray-700'}`}
                onClick={() => setOutputType('video')}
              >
                Video
              </button>
            </div>
            <p className="text-sm text-gray-500">* Note: LeBron takes a second for audio and video.</p>
          </div>

          <div className="flex items-center w-full space-x-4 ">
            <input
              type="text"
              className="flex-1 w-full border rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 "
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-purple-500 text-white px-12 py-4 rounded-lg hover:bg-purple-600"
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeTherapyApp;
