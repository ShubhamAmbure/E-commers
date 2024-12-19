import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-lg text-gray-600">Discover the mission, values, and people behind our company.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 mx-auto"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600">We're dedicated to providing innovative solutions that make a real difference in people's lives.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 mx-auto"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-600">Our team is composed of passionate individuals who are experts in their fields.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Meet the Team</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 mx-auto"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Values</h2>
          <p className="text-lg text-gray-600">We're committed to upholding the highest standards of integrity, innovation, and customer satisfaction.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;