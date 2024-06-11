import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-8 animate-fadeIn">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-bold text-lg">MUI</h4>
          <p>Join our newsletter for regular updates. No spam ever.</p>
          <input
            type="email"
            placeholder="example@email.com"
            className="mt-2 p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
          />
          <button className="mt-2 p-2 rounded-md bg-blue-600">Subscribe</button>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="font-bold">Products</h5>
          <ul>
            <li><a href="#" className="hover:underline">Material UI</a></li>
            <li><a href="#" className="hover:underline">Base UI</a></li>
            <li><a href="#" className="hover:underline">MUI X</a></li>
            <li><a href="#" className="hover:underline">Toolpad</a></li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="font-bold">Resources</h5>
          <ul>
            <li><a href="#" className="hover:underline">Material Icons</a></li>
            <li><a href="#" className="hover:underline">Templates</a></li>
            <li><a href="#" className="hover:underline">Components</a></li>
            <li><a href="#" className="hover:underline">Customization</a></li>
            <li><a href="#" className="hover:underline">Design Kits</a></li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="font-bold">Explore</h5>
          <ul>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Store</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Showcase</a></li>
            <li><a href="#" className="hover:underline">Roadmap</a></li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h5 className="font-bold">Company</h5>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Vision</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-500">&copy; 2024 Material UI SAS, trading as MUI.</p>
      </div>
    </div>
  </footer>
  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .animate-fadeIn {
      animation: fadeIn 2s ease-in-out;
    }
  `}</style></div>
  );
};

export default Footer;
