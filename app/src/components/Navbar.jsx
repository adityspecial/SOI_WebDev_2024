import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo_black_final.png'; // Adjust the path as needed
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Make sure to install react-icons

export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleDoubleDropdown = () => setIsDoubleDropdownOpen(!isDoubleDropdownOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
      
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/signup">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
          </Link>
          <Link to="/login">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          </Link>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li className="relative">
              <button onClick={toggleServices} className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Services {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isServicesOpen && (
                <div className="absolute bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg shadow w-44 mt-2 z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link to="/services/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</Link>
                    </li>
                    <li className="relative">
                      <button onClick={toggleDoubleDropdown} className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Dropdown {isDoubleDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {isDoubleDropdownOpen && (
                        <div className="absolute left-full top-0 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg shadow w-44 mt-2 z-10">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link to="/services/overview" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Overview</Link>
                            </li>
                            <li>
                              <Link to="/services/my-downloads" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">My downloads</Link>
                            </li>
                            <li>
                              <Link to="/services/billing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Billing</Link>
                            </li>
                            <li>
                              <Link to="/services/rewards" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Rewards</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li>
                      <Link to="/services/earnings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Earnings</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Sign out</Link>
                  </div>
                </div>
              )}
            </li>
            <li className="relative">
              <Link to="/contacts" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const toggleServices = () => {
  console.log('Toggling Services:', !isServicesOpen);
  setIsServicesOpen(!isServicesOpen);
};

const toggleDoubleDropdown = () => {
  console.log('Toggling Double Dropdown:', !isDoubleDropdownOpen);
  setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
};