import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My React App</p>
        <p className="mt-2">Designed with ❤️ by You</p>
      </div>
    </footer>
  );
}

export default Footer;
