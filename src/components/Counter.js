import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../redux/features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Counter Page</h2>
      <div className="flex items-center space-x-4">
        <p className="text-lg">Count: {count}</p>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Reset
        </button>
        <button
          onClick={() => handleIncrementByAmount(5)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
