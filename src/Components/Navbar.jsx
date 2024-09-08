// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white text-2xl font-bold">
              <Link to="">Logo</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link to="about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                About
              </Link>
              <Link to="services" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Services
              </Link>
              <Link to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
