import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <img
          src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f0ce6fe8161c72f61be858_logo-blue.svg" // Replace with your logo image path
          alt="Logo"
          className="h-8"
        />
      </div>
      <ul className="flex space-x-8 text-sm font-semibold">
        <li className="hover:text-blue-600">
          <a href="#home">HOME</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#about">ABOUT US</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#facilities">FACILITIES</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#team">TEAM</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#locations">LOCATIONS</a>
        </li>
      </ul>
      <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700">
        CONTACT US
      </button>
    </nav>
  );
};

export default Navbar;
