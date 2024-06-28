import React from 'react';
import TodoInput from './TodoInput';
import TodoListContainer from './TodoListContainer';

function TodoPage() {
  return (
    <>
      <TodoInput />
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">TODO</h1>
      <TodoListContainer />
    </>
  );
}

export default TodoPage;
