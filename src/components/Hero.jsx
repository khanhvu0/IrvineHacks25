import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/docs/assets/LEBRONANDWADE.jpg')" }}>
      
      <div className="max-w-[800px] w-full h-full mx-auto text-center flex flex-col bg-black bg-opacity-70 text-white pt-16">
        <h1 className="font-ibm md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          LeTherapy
        </h1>
        <div className="flex justify-center">
          <p className="font-ibm md:text-3xl sm:text-3xl text-xl font-bold py-4">
            A fast, flexible mental health solution
          </p>
        </div>
        <p className="font-ibm md:text-2xl text-xl text-white pt-8">
          Chat with Lebron James, who will listen <br></br> and respond to your concerns and worries
        </p>
        <div className="mt-auto"> 
          <button onClick={() => navigate('/chat')} className="bg-[#FDB927] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mb-40 x">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;