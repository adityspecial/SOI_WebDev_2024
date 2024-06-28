
import React from 'react';
import './Home.css';
import headerImage from '../assets/campus1.jpg'; // Replace with your actual header image path
import Footer from "./Footer"
import { FaSearch } from 'react-icons/fa'
const Home = () => {
  return (
    <div>
    <div className="home-page p-10">
      {/* Header Section */}
      <div className="header-section bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="contact-info">
            <p>📞 0512 2597233 (Circulation)</p>
            <p>✉️ librarian@iitdh.ac.in</p>
          </div>
          <div className="nav-links">
            <a href="/catalog" className="text-white mx-2">Catalog</a>
            <a href="/theses" className="text-white mx-2">Theses</a>
            <a href="/irins" className="text-white mx-2">IRINS</a>
            <a href="/pingala" className="text-white mx-2">Pingala</a>
            <a href="/new-arrivals" className="text-white mx-2">New Arrivals</a>
            <a href="/webmail" className="text-white mx-2">Webmail</a>
            <a href="/iitk-web" className="text-white mx-2">IITDH Web</a>
          </div>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative main-image-section">
      <img
        src={headerImage}
        alt="Main Library"
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 w-full flex justify-center mb-6">
        <div className="bg-white p-4 rounded shadow-lg w-full max-w-lg mx-auto">
          <form className="flex">
            <div className="flex items-center bg-gray-100 rounded-l border border-gray-300">
              <select className="bg-transparent px-4 py-2 border-r border-gray-300 focus:outline-none">
                <option value="Catalog">Catalog</option>
                <option value="Books">Books</option>
                <option value="Journals">Journals</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              <FaSearch /> {/* Search icon */}
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      {/* Library Information Section */}
      <div className="library-info-section container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card  bg-blue-500 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">My Library</h3>
          <ul className="text-white" >
            <li><a href="/login" className="text-white mx-2">Login library account</a></li>
            <li>Forgot library password</li>
            <li>Pingala login</li>
            <li>Reserve/Hold a book</li>
            <li>Renew books</li>
            <li>How to locate a book</li>
            <li>Borrowing privileges</li>
            <li>Timings</li>
          </ul>
        </div>
        <div className="card  bg-blue-500 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">E-Resources</h3>
          <ul className="text-white">
            <li> <a href="/catalog" className="text-white mx-2">Catalog</a></li>
            <li>Blackwell reference</li>
            <li>Database</li>
            <li>E- Journals (A to Z)</li>
            <li>E-resources (full text)</li>
            <li>E-books</li>
            <li>E- text books (course recommended)</li>
            <li>Standards</li>
            <li>e-ShodhSindhu (consortium)</li>
            <li>Morgan & Claypool</li>
            <li>Springer e-books</li>
            <li>Taylor & Francis</li>
          </ul>
        </div>
        <div className="card  bg-blue-500 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">E-Resources</h3>
          <ul className="text-white">
            <li> <a href="/catalog" className="text-white mx-2">Catalog</a></li>
            <li>Blackwell reference</li>
            <li>Database</li>
            <li>E- Journals (A to Z)</li>
            <li>E-resources (full text)</li>
            <li>E-books</li>
            <li>E- text books (course recommended)</li>
            <li>Standards</li>
            <li>e-ShodhSindhu (consortium)</li>
            <li>Morgan & Claypool</li>
            <li>Springer e-books</li>
            <li>Taylor & Francis</li>
          </ul>
        </div>
        <div className="card  bg-blue-500 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">E-Resources</h3>
          <ul className="text-white">
            <li> <a href="/catalog" className="text-white mx-2">Catalog</a></li>
            <li>Blackwell reference</li>
            <li>Database</li>
            <li>E- Journals (A to Z)</li>
            <li>E-resources (full text)</li>
            <li>E-books</li>
            <li>E- text books (course recommended)</li>
            <li>Standards</li>
            <li>e-ShodhSindhu (consortium)</li>
            <li>Morgan & Claypool</li>
            <li>Springer e-books</li>
            <li>Taylor & Francis</li>
          </ul>
        </div>
        <div className="card  bg-blue-500 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">E-Resources</h3>
          <ul className="text-white">
            <li> <a href="/catalog" className="text-white mx-2">Catalog</a></li>
            <li>Blackwell reference</li>
            <li>Database</li>
            <li>E- Journals (A to Z)</li>
            <li>E-resources (full text)</li>
            <li>E-books</li>
            <li>E- text books (course recommended)</li>
            <li>Standards</li>
            <li>e-ShodhSindhu (consortium)</li>
            <li>Morgan & Claypool</li>
            <li>Springer e-books</li>
            <li>Taylor & Francis</li>
          </ul>
        </div>
        <div className="card bg-blue-400 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="text-white">
            <li>Circulation</li>
            <li>New arrivals</li>
            <li>Library consultation</li>
            <li>Inter-library request</li>
            <li>Text book section</li>
            <li>Theses repository</li>
            <li>Book search request</li>
            <li>News papers</li>
            <li>Alert services</li>
            <li>Archives</li>
            <li>Faculty publications</li>
            <li>Faculty research (IRINS)</li>
          </ul>
        </div>
        {/* Add more cards as needed */}
      </div>

      {/* Library Resources Section */}
      <div className="library-resources-section bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Library Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">223972+</p>
              <p>Books</p>
            </div>
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">35633+</p>
              <p>E-Books</p>
            </div>
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">16000+</p>
              <p>E-Journals</p>
            </div>
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">235537+</p>
              <p>Bound Volumes</p>
            </div>
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">19000+</p>
              <p>Theses</p>
            </div>
            <div className="resource-card bg-white p-4 rounded shadow">
              <p className="text-xl font-bold">21187+</p>
              <p>Technical Reports</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
