import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white shadow-md">
      <div className="text-3xl font-bold flex items-center">
        <span className="text-blue-500">{}</span>
        <span className="ml-2 text-purple-500">SALMAN K</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-800 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-500">About</a></li>
          <li><a href="#tech-stack" className="text-gray-800 hover:text-blue-500">Tech Stack</a></li>
          <li><a href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a></li>
        </ul>
        <div className="flex items-center space-x-4 ml-6">
          <a href="https://github.com" className="text-gray-800 hover:text-blue-500">
            <FaGithub size={20} />
          </a>
          <a href="https://twitter.com" className="text-gray-800 hover:text-blue-500">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" className="text-gray-800 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

