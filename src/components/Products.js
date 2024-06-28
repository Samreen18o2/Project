import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';
import { fetchProducts } from '../redux/features/products/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const [showFullDescriptionForId, setShowFullDescriptionForId] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleFullDescription = (productId) => {
    setShowFullDescriptionForId((prevId) => (prevId === productId ? null : productId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              {showFullDescriptionForId === product.id ? (
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              ) : (
                <p className="text-sm text-gray-600 mb-2">{`${product.description.substring(0, 50)}...`}</p>
              )}
              <p className="text-lg font-semibold text-gray-900">${product.price}</p>
              <div className="flex space-x-2 mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                  onClick={() => toggleFullDescription(product.id)}
                >
                  {showFullDescriptionForId === product.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
