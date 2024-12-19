import React, { useState } from 'react';
import {Link, NavLink  } from 'react-router-dom'

const Home = () => {
  const [search, setSearch] = useState('');
  const [showBanner, setShowBanner] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      {showBanner && (
        <div className="bg-blue-500 text-white p-4 rounded mb-4 flex justify-between items-center">
          <span className="text-lg font-bold">Well Come to Big Shopper</span>
          <button
            className="bg-transparent border-0 text-white hover:text-gray-200 transition duration-300"
            onClick={handleBannerClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Home</h1>
        <div className="flex items-center">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            className="w-full md:w-64 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/8770673/pexels-photo-8770673.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Example Image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://plus.unsplash.com/premium_photo-1677487978421-1a7b262598ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
      alt="Mobile Store"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/28463547/pexels-photo-28463547/free-photo-of-modern-kitchen-interior-with-appliances.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Kitchen Interior"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://t4.ftcdn.net/jpg/09/07/27/87/240_F_907278770_BXLmNxK4nXjIfx0auC4yGBp6JvtrvxbU.jpg"
      alt="Shop Interior"
      className="w-full h-full object-cover"
    />
     <span className="text-cyan-500 text-center text-sm mt-2 font-semibold">Kitchen Interior</span>
  </div>
</div>

<video className="h-hakf w-half rounded-lg py-20"ontrols autoPlay muted>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    </div>
  );
};

export default Home;