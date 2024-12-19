import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Mobiles', icon: 'fa-appliance' },
    { name: 'White Goods', icon: 'fa-mobile-alt' },
    { name: 'LED TVs', icon: 'fa-tv' },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-gray-100 p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Menu</div>
        <button
          className="lg:hidden flex justify-center w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-4 h-4 text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex lg:items-center lg:pb-0 pb-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="lg:mr-4">
            <button
              className={`flex items-center py-2 px-4 hover:bg-gray-600 rounded ${
                activeItem === item.name ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`}
                />
              </svg>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;