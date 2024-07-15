import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0 md:w-1/4">
              <h4 className="font-bold text-lg">MUI</h4>
              <p>Join our newsletter for regular updates. No spam ever.</p>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="p-2 rounded-md bg-gray-700 border border-gray-600 text-white w-full"
                />
                <button className="mt-2 p-2 rounded-md bg-blue-600 w-full md:w-auto">Subscribe</button>
              </div>
            </div>
            <div className="mb-4 md:mb-0 md:w-1/5">
              <h5 className="font-bold">Products</h5>
              <ul>
                <li><a href="https://mui.com/" className="hover:underline">Material UI</a></li>
                <li><a href="https://mui.com/base/" className="hover:underline">Base UI</a></li>
                <li><a href="https://mui.com/x/" className="hover:underline">MUI X</a></li>
                <li><a href="https://toolpad.dev/" className="hover:underline">Toolpad</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:w-1/5">
              <h5 className="font-bold">Resources</h5>
              <ul>
                <li><a href="https://mui.com/components/material-icons/" className="hover:underline">Material Icons</a></li>
                <li><a href="https://mui.com/store/templates/" className="hover:underline">Templates</a></li>
                <li><a href="https://mui.com/components/" className="hover:underline">Components</a></li>
                <li><a href="https://mui.com/customization/theming/" className="hover:underline">Customization</a></li>
                <li><a href="https://mui.com/store/design-kits/" className="hover:underline">Design Kits</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:w-1/5">
              <h5 className="font-bold">Explore</h5>
              <ul>
                <li><a href="https://mui.com/getting-started/installation/" className="hover:underline">Documentation</a></li>
                <li><a href="https://mui.com/store/" className="hover:underline">Store</a></li>
                <li><a href="https://mui.com/blog/" className="hover:underline">Blog</a></li>
                <li><a href="https://mui.com/discover-more/showcase/" className="hover:underline">Showcase</a></li>
                <li><a href="https://github.com/mui/material-ui/projects/1" className="hover:underline">Roadmap</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:w-1/5">
              <h5 className="font-bold">Company</h5>
              <ul>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="https://mui.com/company/vision/" className="hover:underline">Vision</a></li>
                <li><a href="https://mui.com/company/careers/" className="hover:underline">Careers</a></li>
                <li><a href="https://mui.com/getting-started/support/" className="hover:underline">Support</a></li>
                <li><a href="https://mui.com/company/privacy-policy/" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/contacts" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-center text-gray-500">&copy; 2024 Team Battak Gang.</p>
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
      `}</style>
    </div>
  );
};

export default Footer;
