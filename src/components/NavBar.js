import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-10">
      <ul className="flex justify-around">
        <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
        <li><Link to="/products" className="text-white hover:text-gray-200">Products</Link></li>
        <li><Link to="/cart" className="text-white hover:text-gray-200">Cart ({cartItemCount})</Link></li>
        <li><Link to="/music" className="text-white hover:text-gray-200">Music Player</Link></li>
        <li><Link to="/counter" className="text-white hover:text-gray-200">Counter</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
