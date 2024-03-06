import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Your Brand</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
