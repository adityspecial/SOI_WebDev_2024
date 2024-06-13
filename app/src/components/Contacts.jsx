// src/components/Contacts.jsx
import React from 'react';
import './Contacts.css';
import Footer from "./Footer"
const Contacts = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-6 pt-24">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      <div className="w-full flex flex-col md:flex-row items-center md:justify-around space-y-6 md:space-y-0">
        <div className="w-full md:w-1/2 p-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >Send</button>
            </div>
          </form>
        </div>
      
        
      </div><div className='w-full'>   <Footer/></div>
     
    </div>
  );
};

export default Contacts;
