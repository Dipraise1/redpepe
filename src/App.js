import React, { useState } from 'react';
import './App.css';
import logo from './redpepe.jpeg';
import heroBackground from './redpepebg.avif';



function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Navbar */}
      
      <nav className="bg-red-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <img
            src={logo}
            alt="RED PEPE Logo"
            className="w-16 h-16 rounded-full" // Adjust width, height, and rounding as needed
          />
          <h1 className="text-2xl font-semibold text-white">RED-PEPE</h1>
          <div className="md:hidden"> {/* Show on mobile screens */}
            <button
              onClick={toggleNav}
              className="text-white hover:text-red-200 transition duration-300"
            >
              <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Hamburger menu icon */}
            </button>
          </div>
          <div className={`md:flex space-x-4 ${isNavOpen ? 'block' : 'hidden'}`}> {/* Hide on mobile screens */}
            <a href="#" className="text-white hover:text-red-200 transition duration-300">Home</a>
            <a href="#about" className="text-white hover:text-red-200 transition duration-300">About</a>
            <a href="#roadmap" className="text-white hover:text-red-200 transition duration-300">Roadmap</a>
            <a href="#tax" className="text-white hover:text-red-200 transition duration-300">Tax</a>
            {/* Add more navigation links here */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-red-500 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInUp animate__delay-1s">Welcome to RED PEPE BSC</h1>
          <p className="text-lg animate__animated animate__fadeInUp animate__delay-2s">Join us in the Memecoin Revolution!</p>
        </div>
      </section>

      {/* About Red Pepe Section */}
      <section id="about" className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInUp animate__delay-1s">About RED PEPE</h2>
          <p className="text-lg text-gray-600 leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
            RED PEPE is a unique memecoin that is capturing the attention of the crypto space with its distinctive blend of humor and innovation. The core idea behind RED PEPE is to combine the lightheartedness of Meme culture with the potential of blockchain technology.
          </p>
          <ul className="mt-6 space-y-2 animate__animated animate__fadeInUp animate__delay-3s">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3"></path>
              </svg>
              Safu Team
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3"></path>
              </svg>
              Community Driven
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3"></path>
              </svg>
              Limited Supply
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3"></path>
              </svg>
              Meme-Fueled Hype
            </li>
          </ul>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-red-500 text-white py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 animate__animated animate__fadeInUp animate__delay-1s">Roadmap</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate__animated animate__fadeInUp animate__delay-2s">
      {/* Roadmap Item 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Q1 2023</h3>
        <p className="text-gray-600">
          community set up <br></br>
          soft shills <br></br>
          twitter announcement <br></br>
        </p>
      </div>

      {/* Roadmap Item 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Q2 2023</h3>
        <p className="text-gray-600">
          Partnership with leading crypto influencers.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Q2 2023</h3>
        <p className="text-gray-600">
          Partnership with leading crypto influencers. <br></br>
          Patnering and research for token and team expansion <br></br>
          website v2 
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Q2 2023</h3>
        <p className="text-gray-600">
          launch <br></br>
          Marketing <br></br>
          more shilling <br></br>
          launch of the memes <br></br>


        </p>
      </div>
      {/* Add more roadmap items as needed */}
    </div>
  </div>
</section>

      {/* Tax Section */}
      <section id="tax" className="bg-white py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInUp animate__delay-1s">Tax</h2>
    <p className="text-lg text-gray-600 leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
      The tax for RED PEPE is <strong>4%</strong> on all transactions.
    </p>
  </div>
</section>

{/* Supply Section */}
<section id="supply" className="bg-red-500 text-white py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 animate__animated animate__fadeInUp animate__delay-1s">Supply</h2>
    <p className="text-lg animate__animated animate__fadeInUp animate__delay-2s">
      The total supply of RED PEPE is <strong>1 Billion</strong>.
    </p>
  </div>
  
<div className=" text-white py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInUp animate__delay-1s">How to Buy RED PEPE</h2>
    <p className="text-lg text-gray-600 leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
    RED PEPE is a revolutionary memecoin that has captured the crypto world's attention with its unique blend of humor and innovation. Born from the vibrant meme culture, RED PEPE combines lightheartedness with the power of blockchain technology. Our community-driven project is committed to creating a playful yet secure environment for meme enthusiasts and crypto enthusiasts alike. With a limited supply of 1 billion tokens, RED PEPE aims to fuel the meme-fueled hype in the cryptocurrency space.
    </p>
  </div>
</div>
Purchasing RED PEPE tokens is simple and accessible to everyone. To get started, you can buy RED PEPE on popular decentralized exchanges like PancakeSwap. First, ensure you have a compatible crypto wallet like MetaMask set up. Then, visit PancakeSwap, connect your wallet, and swap your preferred cryptocurrency (e.g., BNB) for RED PEPE tokens. Ensure to set the slippage tolerance appropriately to complete the transaction smoothly. Join us in this exciting journey and be a part of the RED PEPE community!

<a href="https://t.me/RedPepebep" className="text-black hover:text-red-200 transition duration-300 border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300">Telegram</a>



<a href="https://x.com/redpepepe?s=21" className="text-black hover:text-red-200 transition duration-300 border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300">Twitter </a>


</section>
{/* Footer Section */}
<footer className="bg-gradient-to-r from-red-500 to-red-300 text-white py-6">
  <div className="container mx-auto flex justify-center items-center">
    <p className="text-sm">© 2023 RED PEPE. All rights reserved.</p>
    <div className="ml-4 flex space-x-4">
      {/* Telegram Icon */}
      <a href=" https://t.me/RedPepebep" className="text-white hover:text-red-200 transition duration-300 mx-auto ">
        <i className="FaTwitter text-xl"></i>
      </a>

      <br></br>

      {/* Twitter Icon */}
      <a href=" https://x.com/redpepepe?s=21" className="text-white hover:text-red-200 transition duration-300">
        <i className="FaTelegramPlane text-xl"></i>
      </a>
    </div>
  </div>
</footer>
    </div>
    
  );
}

export default App;
