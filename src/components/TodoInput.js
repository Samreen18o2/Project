// TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todos/todosSlice';

function TodoInput() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      if (inputText.trim() !== '') {
        dispatch(addTodo({ text: inputText.trim() }));
        setInputText('');
      }
    }
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
        onClick={() => {
          if (inputText.trim() !== '') {
            dispatch(addTodo({ text: inputText.trim() }));
            setInputText('');
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
