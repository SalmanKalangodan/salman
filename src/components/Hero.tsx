import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col items-center text-center py-20 bg-white">
      <div className="border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-full mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/159147325?s=400&u=bb6aa1d644b1e551b0767dcd27a8fe96420c7232&v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full bg-white"
        />
      </div>
      <h1 className="text-4xl font-bold flex flex-col items-center">
        Hi <span className="ml-2">👋</span> 
        <span className="mt-2">My name is <span className="text-blue-500">Salman Faris K</span></span>
      </h1>
      <p className="text-xl mt-4">I build things for web</p>
    </section>
  );
};

export default Hero;
