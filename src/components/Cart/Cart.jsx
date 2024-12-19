import React, { useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: "10,000" },
    { id: 2, name: 'Product 2', price: "5,000" },
    { id: 3, name: 'Product 3', price: "50,000" },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow-md p-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4"> ₹{product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold mt-8 mb-4">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cart.map((product) => (
          <div key={product.id} className="bg-white rounded shadow-md p-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4"> ₹{product.price}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleRemoveFromCart(product)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;