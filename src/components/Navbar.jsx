import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const activeLink = (path) => location.pathname === path ? 'text-white bg-zinc-700' : 'text-gray-400';

  return (
    <nav className="bg-black backdrop-blur-sm bg-opacity-30  shadow-lg sticky top-0">
      <div className="flex items-center justify-center h-24">
        <div className="flex items-center space-x-5 bg-zinc-900  backdrop-blur-md rounded-xl py-1 px-3">
          <Link to="/" className={`px-3 py-[0.375rem] rounded-lg text-sm font-medium ${activeLink('/')}`}>
            Home
          </Link>
          <Link to="/projects" className={`px-3 py-2 rounded-lg text-sm font-medium ${activeLink('/projects')}`}>
            Projects
          </Link>
          <Link to="/contact" className={`px-3 py-2 rounded-lg text-sm font-medium ${activeLink('/contact')}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
