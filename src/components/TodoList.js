// TodoList.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodoText } from '../redux/features/todos/todosSlice';

function TodoList({ index, item }) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(item);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch(updateTodoText({ index, text: editText }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditText(item);
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <li className="py-2 flex items-center border-b border-gray-200">
      {editMode ? (
        <div className="flex items-center">
          <input
            type="text"
            className="px-2 py-1 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 ml-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="text-lg font-medium text-gray-900">{item}</p>
          <div className="ml-4">
            <button
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-600 ml-2 focus:outline-none"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoList;
