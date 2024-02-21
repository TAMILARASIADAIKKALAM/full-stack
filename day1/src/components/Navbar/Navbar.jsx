import React from 'react'


function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">

        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
