import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">TLC Modular</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-indigo-600">Home</a></li>
        <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
        <li><a href="/facilities" className="hover:text-indigo-600">Facilities</a></li>
        <li><a href="/team" className="hover:text-indigo-600">Team</a></li>
        <li><a href="/projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="/locations" className="hover:text-indigo-600">Locations</a></li>
      </ul>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded">Contact Us</button>
    </nav>
  );
}

export default Navbar;
